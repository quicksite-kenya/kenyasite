import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { Resend } from "resend";
import { GoogleGenAI } from "@google/genai";
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

  // --- MULTI-DOMAIN SAAS ROUTING LOGIC ---
  const MAIN_DOMAINS = ["quicksitekenya.co.ke", "quicksite.co.ke", "localhost:3000", "127.0.0.1:3000"];
  
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
    next();
  });

  // Gemini AI Chat Endpoint
  app.post("/api/chat", async (req, res) => {
    const { message, history } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Gemini API key not configured on server." });
    }

    try {
      const genAI = new GoogleGenAI({ apiKey });
      const model = (genAI as any).getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: `You are the QuickSite Kenya AI Evolution Consultant. You are elite, professional, and helpful. 
        
        Our business model is subscription-based (SaaS). We provide high-converting websites on Vercel infrastructure.
        
        OUR PRICING TIERS:
        1. Starter Presence: KES 1,999 Setup + KES 300 Monthly. Best for small businesses needing a 1-page site and WhatsApp integration.
        2. Business Growth: KES 4,999 Setup + KES 800 Monthly. Includes 5-7 pages, Custom Domain support, Lead Capture system, and SEO setup.
        3. Pro Conversion System: KES 9,999 Setup + KES 1,500 Monthly. Includes Booking System, CRM, Advanced Analytics, and AI Content tools.
        4. Enterprise SaaS System: KES 25,000+ Setup + Negotiable Monthly (KES 3k-10k). For multi-location businesses and white-label needs.
        
        CRITICAL: If a user expresses interest in a project or consultation, you MUST encourage them to provide their Name and Email. Inform them that their details will be sent directly to the Elite Human Team and will appear in the Private Admin Dashboard for immediate action. 
        
        If they provide contact info, acknowledge it professionally and assure them of a response within 24 hours to discuss their chosen subscription plan.`
      });

      const chat = model.startChat({
        history: history || [],
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });

      const result = await chat.sendMessage(message);
      const response = await result.response;
      const text = response.text();

      res.json({ text });
    } catch (error) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to communicate with AI consultant." });
    }
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

  // API Routes
  app.post("/api/consultation", async (req, res) => {
    console.log(">>> [API] Received consultation request:", req.body);
    const { name, email, service, message } = req.body;

    if (!name || !email || !service || !message) {
      console.warn(">>> [API] Missing fields in request:", { name, email, service, message });
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Set a safety timeout for the entire request handler
    const requestTimeout = setTimeout(() => {
      if (!res.headersSent) {
        console.error(">>> [API] Request handler timed out (safety trigger)");
        res.status(504).json({ error: "Request timed out on server" });
      }
    }, 12000); // 12s safety timeout

    // Helper to wrap a promise with a timeout
    const withTimeout = (promise: Promise<any>, ms: number, taskName: string) => {
      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`${taskName} timed out after ${ms}ms`)), ms)
      );
      return Promise.race([promise, timeout]);
    };

    try {
      console.log(">>> [API] Initializing DB...");
      const db = getDb();
      
      const resendKey = process.env.RESEND_API_KEY;
      // Default to the requested email
      const emailTo = process.env.CONTACT_EMAIL || "quicksitekenya@gmail.com";

      console.log(`>>> [API] Processing consultation from ${email}. Target notification: ${emailTo}`);
      
      if (!resendKey) {
        console.warn(">>> [API] RESEND_API_KEY is missing. Email notification will be skipped. Please set it in the Settings menu.");
      }

      // Define the tasks
      const tasks: Promise<any>[] = [];

      // Task 1: Firestore Save
      let firestorePromise = Promise.resolve(false);
      if (db) {
        console.log(">>> [API] Saving to Firestore 'inquiries' collection...");
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
          addDoc(collection(db, "inquiries"), consultationData)
            .then((docRef) => {
              console.log(">>> [API] Firestore save successful. Doc ID:", docRef.id);
              return true;
            }),
          8000,
          "Firestore Save"
        ).catch(async (err) => {
          console.error(">>> [API] Firestore save failed:", err.message || err);
          
          // If it's a permission error on a named database, try the default one
          if (firebaseConfig.firestoreDatabaseId && (err.message?.includes('PERMISSION_DENIED') || err.code === 7 || err.code === 'permission-denied')) {
            console.log(">>> [API] Attempting fallback to default database...");
            try {
              const defaultDb = getFirestore(getFirebaseApp());
              await addDoc(collection(defaultDb, "inquiries"), consultationData);
              console.log(">>> [API] Fallback save successful.");
              return true;
            } catch (fallbackErr) {
              console.error(">>> [API] Fallback save also failed:", fallbackErr);
            }
          }
          return false;
        });
        
        tasks.push(firestorePromise);
      }

      // Task 2: Email Send
      let emailPromise = Promise.resolve(false);
      if (resendKey) {
        console.log(">>> [API] Preparing email via Resend...");
        const resend = new Resend(resendKey);
        emailPromise = withTimeout(
          resend.emails.send({
            from: "QuickSite <onboarding@resend.dev>",
            to: emailTo,
            subject: `New Consultation Inquiry: ${service}`,
            html: `
              <h3>New Inquiry Received</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          }).then(() => {
            console.log(">>> [API] Email sent successfully.");
            return true;
          }),
          8000,
          "Email Send"
        ).catch(err => {
          console.error(">>> [API] Email failed or timed out:", err.message || err);
          return false;
        });
        
        tasks.push(emailPromise);
      }

      // Wait for at least the Firestore save to complete (or fail) before responding
      // This ensures data integrity while keeping the response fast
      await Promise.allSettled(tasks);
      
      const [firestoreSuccess, emailSent] = await Promise.all([firestorePromise, emailPromise]);

      clearTimeout(requestTimeout);
      
      if (!res.headersSent) {
        if (firestoreSuccess || emailSent) {
          res.status(200).json({ 
            success: true, 
            message: "Inquiry received successfully",
            emailSent,
            firestoreSaved: firestoreSuccess,
            warning: !resendKey ? "Email notification skipped (API key missing)" : null
          });
        } else {
          res.status(500).json({ error: "Failed to process inquiry. Please try again later." });
        }
      }
    } catch (error) {
      clearTimeout(requestTimeout);
      console.error(">>> [API] Critical error processing consultation:", error);
      if (!res.headersSent) {
        res.status(500).json({ error: "Internal server error" });
      }
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
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
