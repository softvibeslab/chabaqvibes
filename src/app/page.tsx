import Link from "next/link";
import { ArrowRight, Database, Network, ShieldCheck, Sparkles, TowerControl } from "lucide-react";
import { TopNav } from "@/components/nav";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody } from "@/components/ui/card";

const flow = [
  "Extrae requisitos",
  "Busca trabajadores verificados",
  "Rankea por tiempo-dinero-calidad",
  "Explica la recomendacion",
  "Redacta outreach",
  "Espera aprobacion humana"
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6f8fb]">
      <TopNav />
      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge tone="teal">Google Rapid Agent Hackathon</Badge>
              <Badge tone="blue">Gemini ready</Badge>
              <Badge tone="green">MongoDB path</Badge>
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-normal text-ink md:text-6xl">
              ChambaQ Agent
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">
              Un agente que no solo responde: ayuda a tomar accion para contratar talento local con datos,
              herramientas, explicaciones y control humano.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-teal px-5 text-sm font-bold text-white hover:bg-teal/90"
              >
                Abrir demo <ArrowRight size={18} />
              </Link>
              <Link
                href="/control"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line bg-white px-5 text-sm font-bold text-ink hover:bg-slate-50"
              >
                Control Tower <TowerControl size={18} />
              </Link>
            </div>
          </div>

          <Card>
            <CardBody className="space-y-4">
              <div className="rounded-lg border border-line bg-slate-50 p-4">
                <p className="text-sm font-semibold text-muted">Solicitud demo</p>
                <p className="mt-2 text-lg font-semibold text-ink">
                  Necesito un plomero en Cancun para manana temprano. Es una fuga en la cocina de un restaurante.
                </p>
              </div>
              <div className="grid gap-3">
                {flow.map((item, index) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-line bg-white p-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-teal/10 text-sm font-bold text-teal">
                      {index + 1}
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </section>

        <section className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-10 md:grid-cols-4">
            {[
              { icon: Database, title: "Operational memory", text: "Workers, jobs, reviews, certifications and outreach logs." },
              { icon: Sparkles, title: "Agentic workflow", text: "Reasoning, tool calls, ranking and action drafts." },
              { icon: ShieldCheck, title: "Human approval", text: "External messages stay in draft until approved." },
              { icon: Network, title: "Knowledge graph", text: "Graphify connects docs, agents, datasets and team knowledge." }
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-line p-5">
                <item.icon className="text-teal" size={24} />
                <h3 className="mt-4 font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
