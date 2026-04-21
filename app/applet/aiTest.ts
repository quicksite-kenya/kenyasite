import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const promptText = `Generate a website content object in JSON format based on the following context:

BUSINESS NAME: test
PROJECT BRIEF: test
CONTACT INFO: test
EXISTING TAGLINE: 
EXISTING ABOUT: 

AVAILABLE TEMPLATES:
1. LUXURY_DARK
2. CORPORATE_CLEAN
3. STARTUP_MODERN
4. BOLD_FITNESS

Respond ONLY with a raw JSON object matching this exact structure. DO NOT wrap in markdown blocks. DO NOT include any conversational prefixes.
{
  "template": "LUXURY_DARK | CORPORATE_CLEAN | STARTUP_MODERN | BOLD_FITNESS",
  "templateReason": "short explanation of why this template fits the business",
  "hero": { "title": "Main Headline", "subtitle": "Supporting text" },
  "heroImage": "Single keyword for hero image (e.g. workspace)",
  "aboutImage": "Single keyword for about image (e.g. team)",
  "servicesImage": "Single keyword for services image",
  "aboutText": "A professional, persuasive story about the business",
  "services": [ { "name": "Service Name", "description": "Short description", "price": "KES 5000" } ],
  "features": [ { "icon": "check", "title": "Quality", "desc": "We perfectly deliver" } ],
  "pricing": [ { "plan": "Basic", "price": "KES 1000", "features": ["Feature 1", "Feature 2"] } ],
  "testimonials": [ { "name": "John Doe", "quote": "Amazing service!" } ],
  "tagline": "A punchy 1-sentence brand promise",
  "cta": { "title": "Ready to Start?", "btn": "Contact Us Now" }
}`;

async function run() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: promptText,
    config: {
      systemInstruction: "You are an elite web designer.",
      responseMimeType: "application/json"
    }
  });
  console.log("RESPONSE:", response.text);
}

run().catch(console.error);
