import OpenAI from "openai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// const openai = new OpenAI (configuration);

export async function getChatResponse(message: string): Promise<string> {
    // Use the chat completion method
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // or "gpt-4" if you have access
        messages: [{ role: "user", content: message }],
    });

    // Return the AI's response
    return response.choices[0].message?.content || "No response from AI.";
}
