import { runChambaQDemo } from "../src/lib/agent/orchestrator";

const result = runChambaQDemo({
  message:
    "Necesito un plomero en Cancun para manana temprano. Es una fuga en la cocina de un restaurante. Presupuesto maximo 1800 pesos. Prefiero alguien confiable aunque no sea el mas barato.",
  employerId: "employer_001",
  mode: "seed"
});

if (result.ranked.length < 3) {
  throw new Error(`Expected at least 3 ranked candidates, got ${result.ranked.length}`);
}

console.log(
  JSON.stringify(
    {
      jobRequest: result.jobRequest,
      ranked: result.ranked.map((candidate) => ({
        rank: candidate.rank,
        name: candidate.name,
        score: candidate.score
      })),
      drafts: result.outreachDrafts.length,
      actions: result.actionLog.length
    },
    null,
    2
  )
);

