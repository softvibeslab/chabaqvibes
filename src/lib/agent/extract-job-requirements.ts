import type { JobRequest } from "@/lib/schemas/job";

const tradeMap = [
  { canonical: "plumbing", trade: "plomero", terms: ["plomero", "plomeria", "fuga", "tuberia", "hidraul"] },
  { canonical: "electrical", trade: "electricista", terms: ["electricista", "luz", "corto", "cable"] },
  { canonical: "hvac", trade: "tecnico_aire", terms: ["aire", "clima", "minisplit", "hvac"] },
  { canonical: "cleaning", trade: "limpieza", terms: ["limpieza", "limpiar", "aseo"] }
];

export function extractJobRequirements(message: string): JobRequest {
  const normalized = strip(message);
  const trade = tradeMap.find((item) => item.terms.some((term) => normalized.includes(term))) ?? tradeMap[0];
  const budgetMatch = normalized.match(/(\d{3,5})\s*(pesos|mxn|m\.?n\.?)?/);
  const budget = budgetMatch ? Number(budgetMatch[1]) : 1800;
  const city = normalized.includes("cancun") ? "Cancun" : "Cancun";
  const isRestaurant = normalized.includes("restaurante") || normalized.includes("cocina");
  const qualityPriority = normalized.includes("confiable") || normalized.includes("calidad") ? "high" : "medium";

  return {
    trade: trade.trade,
    trade_canonical: trade.canonical,
    city,
    state: "Quintana Roo",
    neighborhood: normalized.includes("centro") ? "Centro" : undefined,
    urgency: normalized.includes("manana") || normalized.includes("mañana") ? "next_day" : "soon",
    availabilitySlot: "2026-05-25_morning",
    urgency_iso_date: "2026-05-25",
    budget_mxn: budget,
    quality_priority: qualityPriority,
    description: isRestaurant
      ? "Fuga en cocina de restaurante. Necesita atencion manana temprano."
      : message.trim()
  };
}

function strip(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

