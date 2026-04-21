import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { Resend } from "resend";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import firebaseConfig from "./firebase-applet-config.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(">>> SERVER STARTING UP <<<");

// Initialize Firebase Client SDK for server-side usage
let firebaseApp: any;
function getFirebaseApp() {
  if (firebaseApp) return firebaseApp;
  try {
    console.log("Initializing Firebase App with Project ID:", firebaseConfig.projectId);
    firebaseApp = initializeApp(firebaseConfig);
    console.log("Firebase App initialized successfully.");
    return firebaseApp;
  } catch (initError) {
    console.error("Error initializing Firebase App:", initError);
    return null;
  }
}

// Helper to get Firestore instance
function getDb() {
  const app = getFirebaseApp();
  if (!app) return null;
  try {
    // Try named database first
    if (firebaseConfig.firestoreDatabaseId) {
      console.log("Using named Firestore database:", firebaseConfig.firestoreDatabaseId);
      return getFirestore(app, firebaseConfig.firestoreDatabaseId);
    }
    return getFirestore(app);
  } catch (err) {
    console.error("Error getting Firestore instance:", err);
    // Fallback to default database
    console.log("Falling back to default Firestore database...");
    return getFirestore(app);
  }
}

async function startServer() {
  console.log(">>> SERVER STARTING UP <<<");
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // --- GLOBAL REQUEST LOGGER ---
  app.use((req, res, next) => {
    console.log(`[GLOBAL LOG] ${req.method} ${req.originalUrl}`);
    next();
  });

  // --- MULTI-DOMAIN SAAS ROUTING LOGIC ---
  const MAIN_DOMAINS = ["quicksitekenya.co.ke", "quicksite.co.ke", "localhost:3000", "127.0.0.1:3000", "ais-dev-mxuldhpyhe7g4tmvbuamip-731127575238.europe-west2.run.app", "ais-pre-mxuldhpyhe7g4tmvbuamip-731127575238.europe-west2.run.app"];
  
  app.use(async (req, res, next) => {
    const host = req.headers.host || "";
    const isMainDomain = MAIN_DOMAINS.some(d => host === d || host.split(':')[0] === d);
    
    // Pass through API, assets, and Vite internal paths
    if (req.path.startsWith("/api") || req.path.startsWith("/src") || req.path.startsWith("/@vite") || req.path.includes(".")) {
      return next();
    }

    if (!isMainDomain) {
      console.log(`[Multi-Tenant Routing] Evaluating host: ${host}`);
      
      // Serve site.html which handles the client-side tenant lookup and rendering.
      // This allows for a fast SPA experience and leverages the client-side Firebase logic already in place.
      if (process.env.NODE_ENV === "production") {
        return res.sendFile(path.join(process.cwd(), "dist", "site.html"));
      } else {
        return res.sendFile(path.join(process.cwd(), "site.html"));
      }
    }
    
    // Disable caching for the main HTML file to ensure updates flow to users
    res.setHeader("Surrogate-Control", "no-store");
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    
    next();
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      firebase: !!firebaseApp, 
      db: !!getDb(),
      projectId: firebaseConfig.projectId,
      databaseId: firebaseConfig.firestoreDatabaseId
    });
  });

  // Test Email Endpoint
  app.get("/api/test-email", async (req, res) => {
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      return res.status(500).json({ error: "RESEND_API_KEY not configured." });
    }

    try {
      const resend = new Resend(resendKey);
      const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'quicksitekenya@gmail.com',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
      });
      res.json({ success: true, data });
    } catch (error) {
      console.error("Test Email Error:", error);
      res.status(500).json({ error: "Failed to send test email." });
    }
  });

  // Helper: Promise with native timeout
  function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
    return Promise.race([
      promise,
      new Promise<T>((_, reject) =>
        setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms)
      ),
    ]);
  }

  // API Routes
  app.post("/api/consultation", async (req, res) => {
    console.log(">>> [API] Received consultation request:", req.body);
    const { name, email, service, message } = req.body;

    if (!name || !email || !service || !message) {
      console.warn(">>> [API] Missing fields:", { name, email, service, message });
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Set a safety timeout for the entire request handler
    const requestTimeout = setTimeout(() => {
      if (!res.headersSent) {
        console.error(">>> [API] Request handler timed out");
        res.status(504).json({ error: "Request timed out" });
      }
    }, 12000); 

    try {
      const db = getDb();
      const resendKey = process.env.RESEND_API_KEY;
      const emailTo = process.env.CONTACT_EMAIL || "quicksitekenya@gmail.com";
      
      const tasks: Promise<any>[] = [];

      // Task 1: Firestore Save
      let firestorePromise = Promise.resolve(false);
      if (db) {
        const consultationData = {
          name,
          email,
          service,
          message,
          createdAt: serverTimestamp(),
          source: "server-api",
          status: "New"
        };
        
        firestorePromise = withTimeout(
          addDoc(collection(db, "inquiries"), consultationData).then(() => true),
          8000,
          "Firestore Save"
        ).catch((err) => {
          console.error("Firestore save failed:", err);
          return false;
        });
        
        tasks.push(firestorePromise);
      }

      // Task 2: Email Send
      let emailPromise = Promise.resolve(false);
      if (resendKey) {
        const resend = new Resend(resendKey);
        emailPromise = withTimeout(
          resend.emails.send({
            from: "QuickSite <onboarding@resend.dev>",
            to: emailTo,
            subject: `New Consultation Inquiry: ${service}`,
            html: `<h3>New Inquiry</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Service:</strong> ${service}</p><p><strong>Message:</strong></p><p>${message}</p>`,
          }).then(() => true),
          8000,
          "Email Send"
        ).catch(err => {
          console.error("Email failed:", err);
          return false;
        });
        
        tasks.push(emailPromise);
      }

      await Promise.allSettled(tasks);
      const [firestoreSuccess, emailSent] = await Promise.all([firestorePromise, emailPromise]);
      clearTimeout(requestTimeout);
      
      if (!res.headersSent) {
        if (firestoreSuccess || emailSent) {
          return res.status(200).json({ 
            success: true, 
            message: "Inquiry received successfully"
          });
        } else {
          return res.status(500).json({ error: "Failed to process inquiry" });
        }
      }
    } catch (error) {
      clearTimeout(requestTimeout);
      console.error(">>> [API] Critical error:", error);
      if (!res.headersSent) {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  // AI Content Generator API Route
  app.post("/api/generate-design", async (req, res) => {
    console.log(">>> [API] Received design generation request");
    const { promptText, systemInstruction } = req.body;

    if (!promptText) {
      return res.status(400).json({ error: "Missing promptText" });
    }

    const rawKey = process.env.GEMINI_API_KEY2 || process.env.GEMINI_API_KEY;
    if (!rawKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY2 not found on server." });
    }
    
    const apiKey = rawKey.trim();
    console.log(`>>> [API] Attempting auth. Key starts with: ${apiKey.substring(0, 5)}, Length: ${apiKey.length}`);

    try {
      // Dynamic import to avoid module issues
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({ apiKey });

      let response;
      let retries = 0;
      const MAX_RETRIES = 3;

      while (retries < MAX_RETRIES) {
        try {
          response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: promptText,
            config: {
              systemInstruction: systemInstruction || "You are an elite web designer.",
              responseMimeType: "application/json"
            }
          });
          break; // Success
        } catch (error: any) {
          const errMsg = typeof error === 'string' ? error : JSON.stringify(error);
          if (errMsg.includes("503") || errMsg.includes("UNAVAILABLE")) {
            retries++;
            if (retries >= MAX_RETRIES) throw error;
            const delay = Math.pow(2, retries) * 1000;
            console.log(`>>> [API] AI busy (503), retrying in ${delay}ms... (Attempt ${retries}/${MAX_RETRIES})`);
            await new Promise(resolve => setTimeout(resolve, delay));
          } else {
            throw error;
          }
        }
      }
      
      const output = response?.text;
      if (!output) throw new Error("AI returned empty response.");
      
      console.log(">>> [API] AI Raw Output:", output.substring(0, 500));
      
      // Extract pure JSON on the backend so even old cached frontends can parse it safely
      const jsonMatch = output.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("AI completely failed to generate a JSON structure. It returned conversational text: " + output);
      }
      
      const cleanJsonString = jsonMatch[0];
      
      return res.status(200).json({ output: cleanJsonString });
    } catch (error: any) {
      console.error(">>> [API] AI Generation error:", error);
      
      // Specifically intercept the invalid API key error to give the user actionable UI instructions
      const errMsg = error.message || "";
      if (errMsg.includes("API key not valid") || errMsg.includes("API_KEY_INVALID")) {
        return res.status(500).json({ 
          error: "Your Gemini API key is missing or invalid. Please open the Settings menu (top right) in AI Studio and enter a valid API key to use generative features." 
        });
      }
      
      return res.status(500).json({ error: errMsg || "Failed to generate AI content" });
    }
  });

  // AI Chatbot API Route
  app.post("/api/ai-chat", async (req, res) => {
    console.log(">>> [API] Chatbot inquiry received");
    const { message, chatHistory } = req.body;
    
    if (!message) return res.status(400).json({ error: "Missing message" });
    
    const rawKey = process.env.GEMINI_API_KEY2 || process.env.GEMINI_API_KEY;
    if (!rawKey) return res.status(500).json({ error: "GEMINI_API_KEY2 not found on server" });
    const apiKey = rawKey.trim();
    
    try {
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `You are the Elite Digital Evolution Consultant for QuickSite Kenya.
QuickSite Kenya is a premier web design agency in Nairobi providing 48-hour turnarounds for professional service businesses.
Our packages include:
1. Starter Presence: KES 11,999 Setup + KES 2,300 Monthly.
2. Business Growth: KES 14,999 Setup + KES 2,800 Monthly.
3. Pro Conversion System: KES 19,999 Setup + KES 3,500 Monthly.
4. Enterprise SaaS System: KES 25,000+ Setup.

CRITICAL: If a user expresses interest, encourage them to provide their Name and Email so the human team can follow up.`;
      
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: { systemInstruction },
        history: chatHistory || []
      });
      
      let result;
      let retries = 0;
      const MAX_RETRIES = 3;

      while (retries < MAX_RETRIES) {
        try {
          result = await chat.sendMessage({ message });
          break; // Success
        } catch (error: any) {
          const errMsg = typeof error === 'string' ? error : JSON.stringify(error);
          if (errMsg.includes("503") || errMsg.includes("UNAVAILABLE")) {
            retries++;
            if (retries >= MAX_RETRIES) throw error;
            const delay = Math.pow(2, retries) * 1000;
            console.log(`>>> [API] AI Chat busy (503), retrying in ${delay}ms... (Attempt ${retries}/${MAX_RETRIES})`);
            await new Promise(resolve => setTimeout(resolve, delay));
          } else {
            throw error;
          }
        }
      }
      
      return res.status(200).json({ text: result?.text });
    } catch (error: any) {
      console.error(">>> [API] AI Chatbot error:", error);
      
      const errMsg = error.message || "";
      if (errMsg.includes("API key not valid") || errMsg.includes("API_KEY_INVALID")) {
        return res.status(500).json({ 
          error: "Your Gemini API key is missing or invalid. Please open the Settings menu (top right) in AI Studio and enter a valid API key." 
        });
      }
      
      return res.status(500).json({ error: errMsg || "Chat failed" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, {
      setHeaders: (res, path) => {
        if (path.endsWith(".html")) {
          res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        }
      }
    }));
    app.get("*", (req, res) => {
      res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Final emergency error handler for API routes
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(">>> [API] Unhandled server error:", err);
    if (!res.headersSent) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
