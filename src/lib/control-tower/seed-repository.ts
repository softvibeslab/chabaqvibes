import teamSeed from "../../../dataset/control-tower/seeds/team.seed.json";
import type { ControlTask, HermesAgent, MemberProfile, TeamSeed } from "@/lib/control-tower/types";

const seed = teamSeed as TeamSeed;

export function getTeamSeed() {
  return seed;
}

export function listMembers(): MemberProfile[] {
  return seed.members;
}

export function getMember(idOrHandle: string): MemberProfile | undefined {
  return seed.members.find((member) => member.id === idOrHandle || member.handle === idOrHandle);
}

export function listHermesAgents(): HermesAgent[] {
  return seed.hermesAgents;
}

export function getHermesForMember(memberId: string): HermesAgent | undefined {
  return seed.hermesAgents.find((agent) => agent.memberId === memberId);
}

export function listTasks(): ControlTask[] {
  return seed.tasks;
}

export function getTasksForMember(memberId: string): ControlTask[] {
  return seed.tasks.filter((task) => task.ownerMemberId === memberId);
}

