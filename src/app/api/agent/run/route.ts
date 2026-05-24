import { NextResponse } from "next/server";
import { runChambaQDemo } from "@/lib/agent/orchestrator";
import { agentRunInputSchema } from "@/lib/schemas/job";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = agentRunInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid request",
        details: parsed.error.flatten()
      },
      { status: 400 }
    );
  }

  return NextResponse.json(runChambaQDemo(parsed.data));
}

