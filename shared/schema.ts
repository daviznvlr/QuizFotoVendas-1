import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Quiz Response Schema
export const quizResponses = pgTable("quiz_responses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sessionId: varchar("session_id").notNull(),
  age: text("age"),
  feeling: text("feeling"),
  revenueGoal: text("revenue_goal"),
  experience: text("experience"),
  potential: text("potential"),
  obstacle: text("obstacle"),
  financialConcern: text("financial_concern"),
  finalAnswer: text("final_answer"),
});

export const insertQuizResponseSchema = createInsertSchema(quizResponses).omit({
  id: true,
});

export type InsertQuizResponse = z.infer<typeof insertQuizResponseSchema>;
export type QuizResponse = typeof quizResponses.$inferSelect;

// Quiz State for frontend
export const quizStateSchema = z.object({
  currentStep: z.number(),
  age: z.string().optional(),
  feeling: z.string().optional(),
  revenueGoal: z.string().optional(),
  experience: z.string().optional(),
  potential: z.string().optional(),
  obstacle: z.string().optional(),
  financialConcern: z.string().optional(),
  finalAnswer: z.string().optional(),
});

export type QuizState = z.infer<typeof quizStateSchema>;

// Profile result from backend
export interface ProfileResult {
  potential: "Baixo" | "Médio" | "Alto";
  score: number;
  insights: string[];
}
