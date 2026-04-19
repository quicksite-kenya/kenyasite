import { Resend } from "resend";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import firebaseConfig from "../firebase-applet-config.json" assert { type: "json" };

// Initialize Firebase App
let firebaseApp;
function getFirebaseApp() {
  if (firebaseApp) return firebaseApp;
  try {
    firebaseApp = initializeApp(firebaseConfig);
    return firebaseApp;
  } catch (err) {
    return null;
  }
}

// Get Firestore Database
function getDb() {
  const app = getFirebaseApp();
  if (!app) return null;
  try {
    if (firebaseConfig.firestoreDatabaseId) {
      return getFirestore(app, firebaseConfig.firestoreDatabaseId);
    }
    return getFirestore(app);
  } catch (err) {
    return getFirestore(app);
  }
}

// Timeout helper function
const withTimeout = (promise, ms, name) => {
  let timeoutId;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`${name} timed out after ${ms} ms.`));
    }, ms);
  });
  return Promise.race([
    promise,
    timeoutPromise
  ]).finally(() => {
    clearTimeout(timeoutId);
  });
};

export default async function handler(req, res) {
  // CORS Configuration
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, service, message } = req.body || {};

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const db = getDb();
    const resendKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.CONTACT_EMAIL || "quicksitekenya@gmail.com";
    
    const tasks = [];

    // Task 1: Firestore Save
    let firestorePromise = Promise.resolve(false);
    if (db) {
      const consultationData = {
        name,
        email,
        service,
        message,
        createdAt: serverTimestamp(),
        source: "vercel-api",
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
    
    if (firestoreSuccess || emailSent) {
      return res.status(200).json({ 
        success: true, 
        message: "Inquiry received successfully"
      });
    } else {
      return res.status(500).json({ error: "Failed to process inquiry" });
    }
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
