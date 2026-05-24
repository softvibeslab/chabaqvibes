import { NextResponse } from "next/server";
import { getHermesForMember, getMember, getTasksForMember } from "@/lib/control-tower/seed-repository";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = getMember(id);

  if (!member) {
    return NextResponse.json({ error: "Member not found" }, { status: 404 });
  }

  return NextResponse.json({
    member,
    hermes: getHermesForMember(member.id),
    tasks: getTasksForMember(member.id)
  });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const patch = await request.json();
  return NextResponse.json({
    status: "draft_only",
    id,
    patch,
    message: "PATCH accepted as draft. Add persistent adapter in next phase."
  });
}

