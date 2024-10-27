import { Router, Request, Response } from "express";
import { getChatResponse } from "../services/openaiService";

const router = Router();

router.post("/", async (req: any, res: any) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const chatResponse = await getChatResponse(message);
        res.json({ response: chatResponse });
    } catch (error) {
        console.error("Error communicating with OpenAI:", error);
        res.status(500).json({ error: "Failed to get a response from OpenAI" });
    }
});

export default router;
