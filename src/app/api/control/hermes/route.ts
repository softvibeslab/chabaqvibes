import { NextResponse } from "next/server";
import { listHermesAgents } from "@/lib/control-tower/seed-repository";

export async function GET() {
  return NextResponse.json({ hermesAgents: listHermesAgents() });
}

