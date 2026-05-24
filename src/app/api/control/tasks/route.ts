import { NextResponse } from "next/server";
import { listTasks } from "@/lib/control-tower/seed-repository";

export async function GET() {
  return NextResponse.json({ tasks: listTasks() });
}

