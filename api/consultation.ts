import { Resend } from "resend";

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
    const resendKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.CONTACT_EMAIL || "quicksitekenya@gmail.com";
    
    // Only send email, Firestore save is handled by client Native SDK
    let emailSent = false;
    let emailError = null;
    
    if (resendKey) {
      const resend = new Resend(resendKey);
      try {
          await resend.emails.send({
            from: "QuickSite <onboarding@resend.dev>",
            to: emailTo,
            subject: `New Consultation Inquiry: ${service}`,
            html: `<h3>New Inquiry</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Service:</strong> ${service}</p><p><strong>Message:</strong></p><p>${message}</p>`,
          });
          emailSent = true;
      } catch (err) {
          console.error("Email failed:", err);
          emailError = err.message || err.toString();
      }
    } else {
        emailError = "RESEND_API_KEY not configured on server.";
    }

    // Always return success so the client knows it completed (even if email integration is skipped/broken temporarily)
    return res.status(200).json({ 
      success: true, 
      message: "API processed",
      email: emailSent,
      emailError
    });
    
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
