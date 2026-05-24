import Link from "next/link";
import { Bot, Network, ShieldCheck, Users } from "lucide-react";
import { ControlShell } from "@/components/control/control-shell";
import { StatCard } from "@/components/control/stat-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { getArizeStatus, getGraphSummary } from "@/lib/control-tower/graphify-artifacts";
import { listHermesAgents, listMembers, listTasks } from "@/lib/control-tower/seed-repository";

export default function ControlPage() {
  const members = listMembers();
  const hermes = listHermesAgents();
  const tasks = listTasks();
  const graph = getGraphSummary();
  const arize = getArizeStatus();

  return (
    <ControlShell>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge tone="teal">Roger Orchestrator</Badge>
          <h1 className="mt-3 text-3xl font-bold tracking-normal">ChambaQ Control Tower</h1>
          <p className="mt-2 max-w-3xl text-muted">
            Torre de control para equipo, Hermes, conocimiento, prompts, tareas y observabilidad.
          </p>
        </div>
        <Link href="/control/members/roger" className="rounded-md bg-teal px-4 py-2 text-sm font-bold text-white">
          Abrir perfil Roger
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Integrantes" value={members.length} helper="CRUD seed listo" />
        <StatCard label="Hermes" value={hermes.length} helper="Agentes personales" />
        <StatCard label="Tareas" value={tasks.length} helper="Backlog operativo" />
        <StatCard label="Grafo" value={graph.nodes} helper={`${graph.edges} relaciones`} />
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <h2 className="font-bold">Sistema operativo</h2>
          </CardHeader>
          <CardBody className="grid gap-3 md:grid-cols-2">
            {[
              { icon: Users, title: "Team CRUD", text: "Alta, edicion y estado de integrantes." },
              { icon: Bot, title: "Hermes por integrante", text: "Perfil, soul, skills, knowledge y prompts." },
              { icon: Network, title: "Graphify KB", text: "Grafo global y grafos personales." },
              { icon: ShieldCheck, title: "Approval-first", text: "Canales externos requieren aprobacion." }
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-line p-4">
                <item.icon size={22} className="text-teal" />
                <h3 className="mt-3 font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="font-bold">Readiness</h2>
          </CardHeader>
          <CardBody className="space-y-3">
            <Readiness label="Graphify global" ok helper={`${graph.controlTowerNodes} nodos Control Tower`} />
            <Readiness label="Seed integrantes" ok helper="Roger + Hermes cargados" />
            <Readiness label="Arize skills" ok={arize.skillsInstalled} helper="Skills globales detectadas" />
            <Readiness label="AX CLI" ok={arize.axInstalled} helper={arize.nextCommand} />
          </CardBody>
        </Card>
      </div>
    </ControlShell>
  );
}

function Readiness({ label, ok, helper }: { label: string; ok: boolean; helper: string }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-md border border-line p-3">
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-muted">{helper}</p>
      </div>
      <Badge tone={ok ? "green" : "amber"}>{ok ? "Ready" : "Pending"}</Badge>
    </div>
  );
}
