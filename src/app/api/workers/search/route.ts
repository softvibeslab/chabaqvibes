import { NextResponse } from "next/server";
import { z } from "zod";
import { searchWorkers } from "@/lib/agent/search-workers";
import type { JobRequest } from "@/lib/schemas/job";

const searchSchema = z.object({
  trade_canonical: z.string(),
  city: z.string(),
  availabilitySlot: z.string(),
  budget_mxn: z.number().default(1800)
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = searchSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", details: parsed.error.flatten() }, { status: 400 });
  }

  const jobRequest: JobRequest = {
    trade: parsed.data.trade_canonical,
    trade_canonical: parsed.data.trade_canonical,
    city: parsed.data.city,
    state: "Quintana Roo",
    urgency: "next_day",
    urgency_iso_date: "2026-05-25",
    availabilitySlot: parsed.data.availabilitySlot,
    budget_mxn: parsed.data.budget_mxn,
    quality_priority: "high",
    description: "Busqueda directa desde API"
  };

  const candidates = searchWorkers(jobRequest);

  return NextResponse.json({
    candidates,
    total: candidates.length,
    queryUsed: {
      trade_canonical: parsed.data.trade_canonical,
      city: parsed.data.city,
      verification_status: "verified",
      availabilitySlot: parsed.data.availabilitySlot
    }
  });
}

