import { NextResponse } from "next/server";
import { getSeedData } from "@/lib/data/seed-adapter";

export async function GET() {
  return NextResponse.json({ jobs: getSeedData().jobs });
}

