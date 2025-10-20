import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizResponseSchema } from "@shared/schema";
import { randomUUID } from "crypto";
import { calculateProfile } from "./profile-calculator";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create a new quiz session
  app.post("/api/quiz-session", async (req, res) => {
    try {
      const sessionId = randomUUID();
      res.json({ sessionId });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Save quiz response (create or update)
  app.post("/api/quiz-responses", async (req, res) => {
    try {
      const data = insertQuizResponseSchema.parse(req.body);
      
      // Check if a response already exists for this session
      const existing = await storage.getQuizResponseBySession(data.sessionId);
      
      if (existing) {
        // Update existing response
        const updated = await storage.updateQuizResponse(existing.id, data);
        res.json(updated);
      } else {
        // Create new response
        const response = await storage.createQuizResponse(data);
        res.json(response);
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // Get quiz response by session ID
  app.get("/api/quiz-responses/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const response = await storage.getQuizResponseBySession(sessionId);
      
      if (!response) {
        return res.status(404).json({ error: "Quiz response not found" });
      }
      
      res.json(response);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Calculate user profile based on quiz responses
  app.get("/api/profile/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const response = await storage.getQuizResponseBySession(sessionId);
      
      if (!response) {
        return res.status(404).json({ error: "Quiz response not found" });
      }

      // Calculate profile based on responses
      const profile = calculateProfile(response);
      
      res.json(profile);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
