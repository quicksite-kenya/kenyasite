import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const promptText = `Generate a website content object in JSON format based on the following context:

BUSINESS NAME: My Business
PROJECT BRIEF: 
CONTACT INFO: 
EXISTING TAGLINE: 
EXISTING ABOUT: 

GOAL: Create a high-converting, professional website concept. 
If contact info or vision details are provided, incorporate them NATURALLY but improve the wording to be elite and persuasive.

Respond ONLY with a JSON object containing:
{
  "hero": { "title": "...", "subtitle": "..." },
  "heroImage": "...", // visual vibe for Hero
  "aboutImage": "...", // visual vibe for About section
  "servicesImage": "...", // visual vibe for Services section
  "aboutText": "...", // Professional, persuasive story
  "services": [ { "name": "...", "description": "...", "price": "..." } ],
  "features": [ { "icon": "zap|sparkles|shield|star|phone", "title": "...", "desc": "..." } ],
  "pricing": [ { "plan": "...", "price": "...", "features": ["...", "..."] } ],
  "testimonials": [ { "name": "...", "quote": "..." } ],
  "tagline": "...", // A punchy 1-sentence brand promise
  "cta": { "title": "...", "btn": "..." }
}`;
async function run() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: promptText,
    config: {
      systemInstruction: "You are an elite web designer and copywriter for QuickSite Kenya.",
      responseMimeType: "application/json"
    }
  });
  console.log(response.text);
}
run();
