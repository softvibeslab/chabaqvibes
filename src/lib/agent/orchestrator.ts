import { createSeedJob } from "@/lib/data/seed-adapter";
import { actionLogItem } from "@/lib/agent/action-log";
import { draftOutreachMessages } from "@/lib/agent/draft-outreach";
import { explainTradeoff } from "@/lib/agent/explain-tradeoff";
import { extractJobRequirements } from "@/lib/agent/extract-job-requirements";
import { rankCandidates } from "@/lib/agent/rank-candidates";
import { searchWorkers } from "@/lib/agent/search-workers";
import type { AgentRunInput } from "@/lib/schemas/job";

export function runChambaQDemo(input: AgentRunInput) {
  const jobRequest = extractJobRequirements(input.message);
  const job = createSeedJob(jobRequest, input.employerId);
  const candidates = searchWorkers(jobRequest);
  const ranked = rankCandidates(jobRequest, candidates);
  const tradeoff = explainTradeoff(jobRequest, ranked);
  const outreachDrafts = draftOutreachMessages(jobRequest, ranked);
  const actionLog = [
    actionLogItem("extract_job_requirements", `Detecte ${jobRequest.trade} en ${jobRequest.city} para ${jobRequest.urgency_iso_date}.`, 1),
    actionLogItem("create_job_request", `Cree job ${job._id} en estado ${job.status}.`, 2),
    actionLogItem("search_workers", `Busque trabajadores verificados y disponibles. Resultados: ${candidates.length}.`, 3),
    actionLogItem("rank_candidates", `Rankee ${ranked.length} candidatos con modelo tiempo-dinero-calidad.`, 4),
    actionLogItem("explain_tradeoff", "Genere recomendacion y riesgos por candidato.", 5),
    actionLogItem("draft_outreach", `Prepare ${outreachDrafts.length} mensajes en espera de aprobacion humana.`, 6)
  ];

  return {
    jobRequest,
    job: {
      ...job,
      shortlisted_worker_ids: ranked.map((candidate) => candidate.workerId)
    },
    candidates,
    ranked,
    tradeoff,
    outreachDrafts,
    actionLog
  };
}

