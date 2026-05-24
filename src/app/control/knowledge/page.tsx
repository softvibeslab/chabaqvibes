import { FileText, Network } from "lucide-react";
import { ControlShell } from "@/components/control/control-shell";
import { StatCard } from "@/components/control/stat-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { getGraphSummary } from "@/lib/control-tower/graphify-artifacts";

export default function KnowledgePage() {
  const graph = getGraphSummary();

  return (
    <ControlShell>
      <div className="mb-6">
        <Badge tone="teal">Graphify</Badge>
        <h1 className="mt-3 text-3xl font-bold">Knowledge Base</h1>
        <p className="mt-2 text-muted">Base global y grafos individuales para Hermes y el proyecto.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Nodes" value={graph.nodes} helper="Grafo global" />
        <StatCard label="Edges" value={graph.edges} helper="Relaciones" />
        <StatCard label="Hyperedges" value={graph.hyperedges} helper="Grupos" />
        <StatCard label="Control Tower" value={graph.controlTowerNodes} helper="Nodos nuevos" />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <h2 className="flex items-center gap-2 font-bold">
              <Network size={18} className="text-teal" />
              Artefactos
            </h2>
          </CardHeader>
          <CardBody className="grid gap-3">
            {[
              "graphify-out/graph.html",
              "graphify-out/graph.json",
              "graphify-out/GRAPH_REPORT.md",
              "graphify-out/members/roger/graph.html",
              "graphify-out/members/roger/graph.json"
            ].map((item) => (
              <div key={item} className="rounded-md border border-line p-3 font-mono text-sm">{item}</div>
            ))}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="flex items-center gap-2 font-bold">
              <FileText size={18} className="text-teal" />
              Report excerpt
            </h2>
          </CardHeader>
          <CardBody>
            <pre className="max-h-[420px] overflow-auto rounded-md bg-slate-950 p-4 text-xs leading-relaxed text-slate-100">
              {graph.reportExcerpt}
            </pre>
            <a href="/graphify/graph.html" className="mt-4 inline-block text-sm font-bold text-blue">
              Ver grafo HTML publicado
            </a>
          </CardBody>
        </Card>
      </div>
    </ControlShell>
  );
}
