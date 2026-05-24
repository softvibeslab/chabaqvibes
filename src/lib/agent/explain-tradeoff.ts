import type { JobRequest } from "@/lib/schemas/job";
import type { RankedCandidate } from "@/lib/schemas/outreach";

export type TradeoffSummary = {
  headline: string;
  recommendation: string;
  bullets: string[];
};

export function explainTradeoff(jobRequest: JobRequest, ranked: RankedCandidate[]): TradeoffSummary {
  const top = ranked[0];
  const lowCost = [...ranked].sort((a, b) => b.priceFit - a.priceFit)[0];
  const highQuality = [...ranked].sort((a, b) => b.qualityFit - a.qualityFit)[0];

  return {
    headline: "Mejor balance: tiempo, dinero y calidad",
    recommendation: top
      ? `${top.name} es la recomendacion principal porque combina disponibilidad inmediata, confianza historica y ajuste al contexto del restaurante.`
      : "No se encontro candidato disponible con los criterios actuales.",
    bullets: top
      ? [
          `${top.name} maximiza el balance general con score ${top.score}/100.`,
          `${lowCost.name} es la opcion mas fuerte para presupuesto.`,
          `${highQuality.name} lidera la dimension de calidad.`,
          `El presupuesto detectado fue ${jobRequest.budget_mxn} MXN; se priorizo calidad porque el mensaje pidio confiabilidad.`
        ]
      : ["Relaja horario, ciudad o presupuesto para ampliar resultados."]
  };
}

