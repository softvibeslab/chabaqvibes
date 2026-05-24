import { z } from "zod";

export const jobRequestSchema = z.object({
  trade: z.string(),
  trade_canonical: z.string(),
  city: z.string(),
  state: z.string().default("Quintana Roo"),
  neighborhood: z.string().optional(),
  urgency: z.string(),
  availabilitySlot: z.string(),
  urgency_iso_date: z.string(),
  budget_mxn: z.number(),
  quality_priority: z.enum(["low", "medium", "high"]),
  description: z.string()
});

export const jobSchema = z.object({
  _id: z.string(),
  employer_id: z.string(),
  trade: z.string(),
  trade_canonical: z.string(),
  city: z.string(),
  state: z.string(),
  neighborhood: z.string().optional(),
  urgency: z.string(),
  budget_mxn: z.number(),
  quality_priority: z.string(),
  description: z.string(),
  status: z.string(),
  shortlisted_worker_ids: z.array(z.string()),
  created_at: z.string()
});

export const agentRunInputSchema = z.object({
  message: z.string().min(8),
  employerId: z.string().default("employer_001"),
  mode: z.enum(["seed", "mongo"]).default("seed")
});

export type JobRequest = z.infer<typeof jobRequestSchema>;
export type Job = z.infer<typeof jobSchema>;
export type AgentRunInput = z.infer<typeof agentRunInputSchema>;

