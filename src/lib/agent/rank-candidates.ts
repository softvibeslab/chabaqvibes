import { getWorkerCertifications } from "@/lib/data/seed-adapter";
import type { JobRequest } from "@/lib/schemas/job";
import type { Worker } from "@/lib/schemas/worker";
import type { RankedCandidate } from "@/lib/schemas/outreach";

export function rankCandidates(jobRequest: JobRequest, workers: Worker[]): RankedCandidate[] {
  const ranked = workers.map((worker) => {
    const certificationCount = getWorkerCertifications(worker._id).length || worker.certifications.length;
    const ratingScore = clamp((worker.rating / 5) * 25);
    const jobsScore = clamp((worker.completed_jobs / 50) * 15);
    const availabilityScore = worker.availability.includes(jobRequest.availabilitySlot) ? 20 : 5;
    const priceScore = priceFit(worker.rate_min_mxn, jobRequest.budget_mxn) * 15;
    const certScore = clamp(Math.min(certificationCount, 3) / 3 * 15);
    const relevanceScore = commercialRelevance(worker.notes, jobRequest.description) * 10;
    const qualityBoost = jobRequest.quality_priority === "high" ? worker.rating * 1.3 : 0;
    const score = Math.round(
      clamp(ratingScore + jobsScore + availabilityScore + priceScore + certScore + relevanceScore + qualityBoost, 0, 100)
    );

    return {
      workerId: worker._id,
      name: worker.name,
      score,
      rank: 0,
      priceFit: Math.round(priceFit(worker.rate_min_mxn, jobRequest.budget_mxn) * 100),
      availabilityFit: availabilityScore === 20 ? 100 : 35,
      qualityFit: Math.round((worker.rating / 5) * 100),
      reasons: buildReasons(worker, jobRequest, certificationCount),
      risks: buildRisks(worker, jobRequest),
      draftChannel: "whatsapp" as const
    };
  });

  return ranked
    .sort((a, b) => b.score - a.score)
    .map((candidate, index) => ({ ...candidate, rank: index + 1 }));
}

function buildReasons(worker: Worker, jobRequest: JobRequest, certificationCount: number) {
  const reasons = [
    `${worker.rating.toFixed(1)} estrellas con ${worker.completed_jobs} trabajos completados`,
    `Disponible en ${jobRequest.availabilitySlot.replace("_", " ")}`,
    `Rango desde $${worker.rate_min_mxn} MXN`
  ];
  if (certificationCount > 0) reasons.push(`${certificationCount} certificacion(es) o evidencia verificada`);
  if (worker.notes.toLowerCase().includes("restaurante") || worker.notes.toLowerCase().includes("comercial")) {
    reasons.push("Experiencia relevante para negocio/restaurante");
  }
  return reasons;
}

function buildRisks(worker: Worker, jobRequest: JobRequest) {
  const risks: string[] = [];
  if (worker.rate_min_mxn > jobRequest.budget_mxn) risks.push("Costo minimo supera el presupuesto declarado");
  if (worker.rating < 4.5) risks.push("Calidad historica menor que otros candidatos");
  if (!worker.notes.toLowerCase().includes("comercial") && jobRequest.description.toLowerCase().includes("restaurante")) {
    risks.push("Menos evidencia en contexto comercial");
  }
  return risks.length ? risks : ["Sin riesgo critico detectado en seed demo"];
}

function priceFit(rateMin: number, budget: number) {
  if (rateMin <= budget) return 1;
  const overage = rateMin - budget;
  return clamp(1 - overage / budget, 0.2, 1);
}

function commercialRelevance(notes: string, description: string) {
  const haystack = `${notes} ${description}`.toLowerCase();
  let score = 0.4;
  if (haystack.includes("restaurante")) score += 0.35;
  if (haystack.includes("comercial")) score += 0.25;
  if (haystack.includes("cocina")) score += 0.15;
  return clamp(score, 0, 1);
}

function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

