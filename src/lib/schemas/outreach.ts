import { z } from "zod";

export const actionLogItemSchema = z.object({
  id: z.string(),
  tool: z.string(),
  status: z.enum(["queued", "running", "completed", "blocked"]),
  summary: z.string(),
  timestamp: z.string()
});

export const rankedCandidateSchema = z.object({
  workerId: z.string(),
  name: z.string(),
  score: z.number(),
  rank: z.number(),
  priceFit: z.number(),
  availabilityFit: z.number(),
  qualityFit: z.number(),
  reasons: z.array(z.string()),
  risks: z.array(z.string()),
  draftChannel: z.enum(["whatsapp", "sms"])
});

export const outreachDraftSchema = z.object({
  id: z.string(),
  workerId: z.string(),
  workerName: z.string(),
  channel: z.enum(["whatsapp", "sms"]),
  recipient: z.string(),
  message: z.string(),
  status: z.enum(["drafted", "awaiting_approval", "sent"])
});

export type ActionLogItem = z.infer<typeof actionLogItemSchema>;
export type RankedCandidate = z.infer<typeof rankedCandidateSchema>;
export type OutreachDraft = z.infer<typeof outreachDraftSchema>;

