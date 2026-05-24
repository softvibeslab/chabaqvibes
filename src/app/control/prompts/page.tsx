import { PenLine } from "lucide-react";
import { ControlShell } from "@/components/control/control-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { getPromptFile } from "@/lib/control-tower/graphify-artifacts";
import { listHermesAgents } from "@/lib/control-tower/seed-repository";

export default function PromptsPage() {
  const [agent] = listHermesAgents();
  const systemPrompt = getPromptFile(agent.systemPromptPath);
  const customerPrompt = getPromptFile(agent.customerPromptPath);

  return (
    <ControlShell>
      <div className="mb-6">
        <Badge tone="amber">Draft only</Badge>
        <h1 className="mt-3 text-3xl font-bold">Prompt Studio</h1>
        <p className="mt-2 text-muted">Editor planeado para system/customer prompts con aprobacion y versionado.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <PromptCard title="System prompt" text={systemPrompt} />
        <PromptCard title="Customer prompt" text={customerPrompt} />
      </div>
    </ControlShell>
  );
}

function PromptCard({ title, text }: { title: string; text: string }) {
  return (
    <Card>
      <CardHeader>
        <h2 className="flex items-center gap-2 font-bold">
          <PenLine size={18} className="text-teal" />
          {title}
        </h2>
      </CardHeader>
      <CardBody>
        <textarea
          readOnly
          value={text}
          className="min-h-[460px] w-full resize-none rounded-md border border-line bg-slate-50 p-4 font-mono text-xs leading-relaxed"
        />
      </CardBody>
    </Card>
  );
}

