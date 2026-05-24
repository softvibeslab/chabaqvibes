import { getSeedData } from "@/lib/data/seed-adapter";
import type { JobRequest } from "@/lib/schemas/job";
import type { OutreachDraft, RankedCandidate } from "@/lib/schemas/outreach";

export function draftOutreachMessages(jobRequest: JobRequest, ranked: RankedCandidate[]): OutreachDraft[] {
  const { workers } = getSeedData();
  return ranked.slice(0, 3).map((candidate) => {
    const worker = workers.find((item) => item._id === candidate.workerId);
    return {
      id: `draft_${candidate.workerId}`,
      workerId: candidate.workerId,
      workerName: candidate.name,
      channel: candidate.draftChannel,
      recipient: worker?.phone ?? "",
      status: "awaiting_approval",
      message: `Hola ${candidate.name.split(" ")[0]}, soy Mariana de Restaurante La Ceiba via ChambaQ. Necesito apoyo de ${jobRequest.trade} en ${jobRequest.city} para ${jobRequest.urgency_iso_date} por la manana. Es: ${jobRequest.description}. Presupuesto aprox. ${jobRequest.budget_mxn} MXN. ¿Tienes disponibilidad para revisar?`
    };
  });
}

