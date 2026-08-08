import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  // CORS Configuration
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, history } = req.body || {};
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
      1. Starter Presence: KES 11,999 Setup + KES 2,300 Monthly. Best for small businesses needing a 1-page site and WhatsApp integration.
      2. Business Growth: KES 14,999 Setup + KES 2,800 Monthly. Includes 5-7 pages, Custom Domain support, Lead Capture system, and SEO setup.
      3. Pro Conversion System: KES 19,999 Setup + KES 3,500 Monthly. Includes Booking System, CRM, Advanced Analytics, and AI Content tools.
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

    return res.status(200).json({ text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: "Failed to communicate with AI consultant." });
  }
}
