
import { GoogleGenAI } from "@google/genai";

// Always use the direct process.env.API_KEY for initialization as per @google/genai guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCampaignTagline = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Genera 3 eslóganes cortos y motivadores para la campaña de Natalia Cavides (Alianza Verde 103) sobre el tema: ${topic}. Que suenen cercanos a la gente del Huila.`,
    });
    // Extract text directly from the response object property.
    return response.text;
  } catch (error) {
    console.error("Error generating tagline:", error);
    return null;
  }
};
