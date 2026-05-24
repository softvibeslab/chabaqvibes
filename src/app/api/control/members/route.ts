import { NextResponse } from "next/server";
import { listMembers } from "@/lib/control-tower/seed-repository";

export async function GET() {
  return NextResponse.json({ members: listMembers() });
}

export async function POST(request: Request) {
  const draft = await request.json();
  return NextResponse.json(
    {
      status: "draft_only",
      message: "Local seed repository is read-only in MVP. Persist this in MongoDB or a JSON write adapter next.",
      draft
    },
    { status: 202 }
  );
}

