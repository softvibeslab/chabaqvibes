import { notFound } from "next/navigation";
import { Bot, MessageCircle, Network, ShieldCheck, Sparkles } from "lucide-react";
import { ControlShell } from "@/components/control/control-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { getPromptFile } from "@/lib/control-tower/graphify-artifacts";
import { getHermesForMember, getMember, getTasksForMember } from "@/lib/control-tower/seed-repository";

export default async function MemberDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = getMember(id);
  if (!member) notFound();
  const hermes = getHermesForMember(member.id);
  const tasks = getTasksForMember(member.id);
  const systemPrompt = hermes ? getPromptFile(hermes.systemPromptPath) : "";
  const customerPrompt = hermes ? getPromptFile(hermes.customerPromptPath) : "";

  return (
    <ControlShell>
      <div className="mb-6">
        <Badge tone="green">{member.status}</Badge>
        <h1 className="mt-3 text-3xl font-bold">{member.displayName}</h1>
        <p className="mt-2 max-w-3xl text-muted">{member.purpose}</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <h2 className="font-bold">Perfil y soul</h2>
          </CardHeader>
          <CardBody className="space-y-5">
            <Block title="Rol" text={member.role} />
            <Block title="Bio" text={member.bio} />
            <div>
              <h3 className="mb-2 font-bold">Superpoderes</h3>
              <div className="flex flex-wrap gap-2">
                {member.superpowers.map((item) => <Badge key={item} tone="teal">{item}</Badge>)}
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-bold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((item) => <Badge key={item} tone="blue">{item}</Badge>)}
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bot size={18} className="text-teal" />
              <h2 className="font-bold">{hermes?.name}</h2>
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <p className="text-muted">{hermes?.mission}</p>
            <div className="grid gap-3 md:grid-cols-3">
              <Mini icon={ShieldCheck} label="Approval" value={hermes?.permissions.requiresApprovalForExternalMessages ? "Required" : "Open"} />
              <Mini icon={Network} label="Graph" value={member.knowledge.graphPath} />
              <Mini icon={MessageCircle} label="Channels" value={hermes?.channels.join(", ") ?? ""} />
            </div>
            <div>
              <h3 className="mb-2 font-bold">Agency-agents asignados</h3>
              <div className="grid gap-2">
                {member.agencyAgents.map((agent) => (
                  <div key={agent.name} className="rounded-md border border-line p-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <strong>{agent.name}</strong>
                      <Badge tone="slate">{agent.activationMode}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted">{agent.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <h2 className="font-bold">Tareas</h2>
          </CardHeader>
          <CardBody className="grid gap-3">
            {tasks.map((task) => (
              <div key={task.id} className="rounded-md border border-line p-3">
                <div className="flex items-center justify-between gap-3">
                  <strong>{task.title}</strong>
                  <Badge tone={task.status === "in_progress" ? "amber" : "blue"}>{task.status}</Badge>
                </div>
                <p className="mt-1 text-sm text-muted">{task.description}</p>
              </div>
            ))}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-teal" />
              <h2 className="font-bold">Prompt Studio draft</h2>
            </div>
          </CardHeader>
          <CardBody className="grid gap-4">
            <Prompt title="System prompt" text={systemPrompt} />
            <Prompt title="Customer prompt" text={customerPrompt} />
          </CardBody>
        </Card>
      </div>
    </ControlShell>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-1 text-muted">{text}</p>
    </div>
  );
}

function Mini({ icon: Icon, label, value }: { icon: typeof Bot; label: string; value: string }) {
  return (
    <div className="rounded-md bg-slate-50 p-3">
      <Icon size={17} className="text-teal" />
      <p className="mt-2 text-xs font-bold uppercase text-muted">{label}</p>
      <p className="mt-1 break-words text-sm font-semibold">{value}</p>
    </div>
  );
}

function Prompt({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="mb-2 font-bold">{title}</h3>
      <pre className="max-h-56 overflow-auto rounded-md bg-slate-950 p-4 text-xs leading-relaxed text-slate-100">{text}</pre>
    </div>
  );
}

