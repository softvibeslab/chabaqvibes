"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Loader2, MessageSquareText, Play, Send, SlidersHorizontal } from "lucide-react";
import { TopNav } from "@/components/nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { formatMxn } from "@/lib/utils";
import type { ActionLogItem, OutreachDraft, RankedCandidate } from "@/lib/schemas/outreach";
import type { Job, JobRequest } from "@/lib/schemas/job";
import type { TradeoffSummary } from "@/lib/agent/explain-tradeoff";

const example =
  "Necesito un plomero en Cancun para manana temprano. Es una fuga en la cocina de un restaurante. Presupuesto maximo 1800 pesos. Prefiero alguien confiable aunque no sea el mas barato.";

type DemoResult = {
  jobRequest: JobRequest;
  job: Job;
  ranked: RankedCandidate[];
  tradeoff: TradeoffSummary;
  outreachDrafts: OutreachDraft[];
  actionLog: ActionLogItem[];
};

export default function DemoPage() {
  const [message, setMessage] = useState(example);
  const [result, setResult] = useState<DemoResult | null>(null);
  const [loading, setLoading] = useState(false);
  const topCandidate = result?.ranked[0];

  async function runDemo() {
    setLoading(true);
    const response = await fetch("/api/agent/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, employerId: "employer_001", mode: "seed" })
    });
    const data = (await response.json()) as DemoResult;
    setResult(data);
    setLoading(false);
  }

  const budget = useMemo(() => result?.jobRequest.budget_mxn ?? 1800, [result]);

  return (
    <div className="min-h-screen bg-[#f6f8fb]">
      <TopNav />
      <main className="mx-auto max-w-7xl px-5 py-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge tone="teal">Demo MVP determinista</Badge>
            <h1 className="mt-3 text-3xl font-bold tracking-normal">ChambaQ Agent Demo</h1>
            <p className="mt-2 max-w-2xl text-muted">
              Ejecuta un flujo completo de contratacion local con tool log visible y drafts pendientes de aprobacion.
            </p>
          </div>
          <Button onClick={runDemo} disabled={loading}>
            {loading ? <Loader2 className="animate-spin" size={17} /> : <Play size={17} />}
            Ejecutar agente
          </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr_0.95fr]">
          <Card>
            <CardHeader>
              <h2 className="font-bold">Solicitud</h2>
            </CardHeader>
            <CardBody>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="focus-ring min-h-52 w-full resize-none rounded-md border border-line bg-white p-3 text-sm"
              />
              {result ? (
                <div className="mt-4 grid gap-2 rounded-lg bg-slate-50 p-4 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-muted">Oficio</span>
                    <strong>{result.jobRequest.trade}</strong>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-muted">Ciudad</span>
                    <strong>{result.jobRequest.city}</strong>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-muted">Presupuesto</span>
                    <strong>{formatMxn(budget)}</strong>
                  </div>
                </div>
              ) : null}
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="font-bold">Plan y action log</h2>
            </CardHeader>
            <CardBody>
              <div className="grid gap-3">
                {(result?.actionLog ?? defaultActions()).map((item) => (
                  <div key={item.id} className="grid grid-cols-[32px_1fr] gap-3 rounded-md border border-line p-3">
                    <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-teal/10 text-teal">
                      <CheckCircle2 size={17} />
                    </span>
                    <div>
                      <p className="font-semibold">{item.tool}</p>
                      <p className="text-sm text-muted">{item.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
              {result ? (
                <div className="mt-5 rounded-lg border border-line bg-slate-50 p-4">
                  <div className="flex items-center gap-2 font-bold">
                    <SlidersHorizontal size={18} className="text-teal" />
                    {result.tradeoff.headline}
                  </div>
                  <p className="mt-2 text-sm text-muted">{result.tradeoff.recommendation}</p>
                  <ul className="mt-3 grid gap-2 text-sm">
                    {result.tradeoff.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-teal">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="font-bold">Shortlist</h2>
            </CardHeader>
            <CardBody className="space-y-3">
              {(result?.ranked ?? []).map((candidate) => (
                <div key={candidate.workerId} className="rounded-lg border border-line p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold">#{candidate.rank} {candidate.name}</p>
                      <p className="text-sm text-muted">Score {candidate.score}/100</p>
                    </div>
                    <Badge tone={candidate.workerId === topCandidate?.workerId ? "green" : "blue"}>
                      {candidate.workerId === topCandidate?.workerId ? "Recomendado" : "Alternativa"}
                    </Badge>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                    <Metric label="Precio" value={candidate.priceFit} />
                    <Metric label="Tiempo" value={candidate.availabilityFit} />
                    <Metric label="Calidad" value={candidate.qualityFit} />
                  </div>
                  <ul className="mt-3 grid gap-1 text-sm text-muted">
                    {candidate.reasons.slice(0, 3).map((reason) => (
                      <li key={reason}>• {reason}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {!result ? <EmptyState text="Ejecuta el agente para ver candidatos rankeados." /> : null}
            </CardBody>
          </Card>
        </div>

        <Card className="mt-5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquareText size={18} className="text-teal" />
              <h2 className="font-bold">Drafts de outreach</h2>
            </div>
          </CardHeader>
          <CardBody className="grid gap-3 md:grid-cols-3">
            {(result?.outreachDrafts ?? []).map((draft) => (
              <div key={draft.id} className="rounded-lg border border-line bg-slate-50 p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <strong>{draft.workerName}</strong>
                  <Badge tone="amber">Approval</Badge>
                </div>
                <p className="text-sm text-muted">{draft.message}</p>
                <Button variant="secondary" className="mt-4 w-full" disabled>
                  <Send size={15} />
                  En espera
                </Button>
              </div>
            ))}
            {!result ? <EmptyState text="Los mensajes quedan bloqueados hasta aprobacion humana." /> : null}
          </CardBody>
        </Card>
      </main>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md bg-slate-50 p-2">
      <p className="font-bold">{value}%</p>
      <p className="text-muted">{label}</p>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return <div className="rounded-lg border border-dashed border-line p-5 text-sm text-muted">{text}</div>;
}

function defaultActions(): ActionLogItem[] {
  return [
    { id: "1", tool: "extract_job_requirements", status: "queued", summary: "Listo para analizar la solicitud.", timestamp: "" },
    { id: "2", tool: "search_workers", status: "queued", summary: "Buscara trabajadores verificados en seed.", timestamp: "" },
    { id: "3", tool: "rank_candidates", status: "queued", summary: "Aplicara ranking tiempo-dinero-calidad.", timestamp: "" }
  ];
}

