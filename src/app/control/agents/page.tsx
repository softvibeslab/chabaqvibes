import { Bot, Wrench } from "lucide-react";
import { ControlShell } from "@/components/control/control-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { listHermesAgents, listMembers } from "@/lib/control-tower/seed-repository";

export default function AgentsPage() {
  const hermesAgents = listHermesAgents();
  const members = listMembers();

  return (
    <ControlShell>
      <div className="mb-6">
        <Badge tone="teal">Hermes Registry</Badge>
        <h1 className="mt-3 text-3xl font-bold">Agentes personales</h1>
        <p className="mt-2 text-muted">Cada integrante tendra un Hermes independiente con conocimiento, permisos y herramientas.</p>
      </div>

      <div className="grid gap-5">
        {hermesAgents.map((agent) => {
          const owner = members.find((member) => member.id === agent.memberId);
          return (
            <Card key={agent.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Bot size={20} className="text-teal" />
                    <h2 className="font-bold">{agent.name}</h2>
                  </div>
                  <Badge tone="green">{agent.status}</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-muted">{agent.mission}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <Info label="Owner" value={owner?.displayName ?? agent.memberId} />
                  <Info label="Arize project" value={agent.observability.arizeProject} />
                  <Info label="Trace" value={agent.observability.traceEnabled ? "enabled" : "pending"} />
                </div>
                <div className="mt-4">
                  <h3 className="mb-2 flex items-center gap-2 font-bold">
                    <Wrench size={16} className="text-teal" />
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {agent.tools.map((tool) => <Badge key={tool} tone="blue">{tool}</Badge>)}
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </ControlShell>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-slate-50 p-3">
      <p className="text-xs font-bold uppercase text-muted">{label}</p>
      <p className="mt-1 break-words font-semibold">{value}</p>
    </div>
  );
}

