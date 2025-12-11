import { GoogleGenAI } from "@google/genai";
import {
  HERO_CONTENT,
  ABOUT_CONTENT,
  EXPERIENCES,
  EDUCATION,
  CERTIFICATIONS,
  SKILLS,
  PROJECTS,
  SOCIALS
} from "../constants";

// Initialize the API client
// Note: In a production app, these calls should go through a backend proxy 
// to avoid exposing the API key if RLS/limits aren't strictly enforced.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a dynamic system prompt based on the current data in constants.ts.
 * This ensures the AI always has the most up-to-date information about the portfolio.
 */
const generateSystemContext = (): string => {
  const experiencesText = EXPERIENCES.map(e =>
    `- Role: ${e.role} at ${e.company} (${e.period})\n  Description: ${e.description}\n  Tech Stack: ${e.technologies.join(', ')}`
  ).join('\n\n');

  const educationText = EDUCATION.map(e =>
    `- ${e.degree} at ${e.institution} (${e.year})`
  ).join('\n');

  const certsText = CERTIFICATIONS.map(c =>
    `- ${c.name} issued by ${c.issuer} (${c.year})`
  ).join('\n');

  const skillsText = SKILLS.map(s =>
    `- ${s.name}: ${s.skills.join(', ')}`
  ).join('\n');

  const projectsText = PROJECTS.map(p =>
    `- Project: ${p.title} (${p.year}) [${p.category}]\n  Description: ${p.description}\n  Tech: ${p.tech.join(', ')}\n  Links: ${p.link || ''} ${p.github || ''}`
  ).join('\n\n');

  const socialsText = SOCIALS.map(s =>
    `- ${s.name}: ${s.href}`
  ).join('\n');

  return `
    You are the official AI Portfolio Assistant for Naflan Mohamed.
    Your goal is to represent Naflan professionally and answer visitor questions based STRICTLY on the data provided below.

    Identity & Tone:
    - Name: Naflan Mohamed
    - Role: ${HERO_CONTENT.title}
    - Tone: Professional, slightly technical, confident, modern, yet approachable. Witty is okay but keep it professional.
    - If you don't know the answer based on the context, admit it and suggest emailing contact@naflan.com.

    DATA CONTEXT:

    [BIO]
    ${HERO_CONTENT.description}
    ${ABOUT_CONTENT.text}
    Stats: ${ABOUT_CONTENT.stats.map(s => `${s.label}: ${s.value}`).join(', ')}

    [SKILLS]
    ${skillsText}

    [EXPERIENCE]
    ${experiencesText}

    [PROJECTS]
    ${projectsText}

    [EDUCATION]
    ${educationText}

    [CERTIFICATIONS]
    ${certsText}

    [CONTACT]
    ${socialsText}
    
    INSTRUCTIONS:
    - Answer directly.
    - Keep responses concise (under 3 paragraphs).
    - If asked about "projects", pick the most relevant ones to the user's query or list the top 2-3 recent ones.
    - If asked about specific tech (e.g. "Do you know React?"), confirm using the Skills or Experience data.
  `;
};

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[] = []): Promise<string> => {
  try {
    // We use gemini-2.5-flash for fast, responsive chat interactions
    const model = 'gemini-2.5-flash';

    // Construct the request
    // We pass the history + the new user message
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: generateSystemContext(),
      }
    });

    return response.text || "I'm having a bit of trouble thinking right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I couldn't reach the AI service at the moment. Please try again later.";
  }
};