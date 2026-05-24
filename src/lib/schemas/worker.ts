import { z } from "zod";

export const workerSchema = z.object({
  _id: z.string(),
  name: z.string(),
  trade: z.string(),
  trade_canonical: z.string(),
  city: z.string(),
  state: z.string(),
  service_areas: z.array(z.string()),
  availability: z.array(z.string()),
  rate_min_mxn: z.number(),
  rate_max_mxn: z.number(),
  rating: z.number(),
  completed_jobs: z.number(),
  certifications: z.array(z.string()),
  verification_status: z.string(),
  phone: z.string(),
  languages: z.array(z.string()),
  notes: z.string()
});

export type Worker = z.infer<typeof workerSchema>;

