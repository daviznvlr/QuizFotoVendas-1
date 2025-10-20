import { type QuizResponse, type InsertQuizResponse } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getQuizResponse(id: string): Promise<QuizResponse | undefined>;
  getQuizResponseBySession(sessionId: string): Promise<QuizResponse | undefined>;
  createQuizResponse(response: InsertQuizResponse): Promise<QuizResponse>;
  updateQuizResponse(id: string, updates: Partial<InsertQuizResponse>): Promise<QuizResponse | undefined>;
}

export class MemStorage implements IStorage {
  private quizResponses: Map<string, QuizResponse>;

  constructor() {
    this.quizResponses = new Map();
  }

  async getQuizResponse(id: string): Promise<QuizResponse | undefined> {
    return this.quizResponses.get(id);
  }

  async getQuizResponseBySession(sessionId: string): Promise<QuizResponse | undefined> {
    return Array.from(this.quizResponses.values()).find(
      (response) => response.sessionId === sessionId,
    );
  }

  async createQuizResponse(insertResponse: InsertQuizResponse): Promise<QuizResponse> {
    const id = randomUUID();
    const response: QuizResponse = { 
      id,
      sessionId: insertResponse.sessionId,
      age: insertResponse.age ?? null,
      feeling: insertResponse.feeling ?? null,
      revenueGoal: insertResponse.revenueGoal ?? null,
      experience: insertResponse.experience ?? null,
      potential: insertResponse.potential ?? null,
      obstacle: insertResponse.obstacle ?? null,
      financialConcern: insertResponse.financialConcern ?? null,
      finalAnswer: insertResponse.finalAnswer ?? null,
    };
    this.quizResponses.set(id, response);
    return response;
  }

  async updateQuizResponse(id: string, updates: Partial<InsertQuizResponse>): Promise<QuizResponse | undefined> {
    const existing = this.quizResponses.get(id);
    if (!existing) return undefined;
    
    const updated: QuizResponse = { 
      ...existing, 
      age: updates.age ?? existing.age,
      feeling: updates.feeling ?? existing.feeling,
      revenueGoal: updates.revenueGoal ?? existing.revenueGoal,
      experience: updates.experience ?? existing.experience,
      potential: updates.potential ?? existing.potential,
      obstacle: updates.obstacle ?? existing.obstacle,
      financialConcern: updates.financialConcern ?? existing.financialConcern,
      finalAnswer: updates.finalAnswer ?? existing.finalAnswer,
    };
    this.quizResponses.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
