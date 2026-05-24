import { Activity, AlertTriangle, CheckCircle2 } from "lucide-react";
import { ControlShell } from "@/components/control/control-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { getArizeStatus } from "@/lib/control-tower/graphify-artifacts";

export default function ObservabilityPage() {
  const arize = getArizeStatus();

  return (
    <ControlShell>
      <div className="mb-6">
        <Badge tone="blue">Arize readiness</Badge>
        <h1 className="mt-3 text-3xl font-bold">Observability</h1>
        <p className="mt-2 text-muted">Preparado para AI provider integrations, trazas y evaluadores cuando AX este instalado.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <h2 className="flex items-center gap-2 font-bold">
              <Activity size={18} className="text-teal" />
              Estado
            </h2>
          </CardHeader>
          <CardBody className="space-y-3">
            <Status label="Arize skills" ok={arize.skillsInstalled} helper="~/.agents/skills/arize-*" />
            <Status label="AX CLI" ok={arize.axInstalled} helper={arize.nextCommand} />
            <Status label="AI integration" ok={false} helper="Crear ChambaQ Gemini cuando exista AX profile y space" />
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="font-bold">Comandos seguros</h2>
          </CardHeader>
          <CardBody>
            <pre className="overflow-auto rounded-md bg-slate-950 p-4 text-sm leading-relaxed text-slate-100">{`ax spaces list
ax ai-integrations list --space CHAMBAQ_SPACE

ax ai-integrations create \\
  --name "ChambaQ Gemini" \\
  --provider gemini \\
  --api-key $GEMINI_API_KEY \\
  --function-calling-enabled`}</pre>
            <p className="mt-4 flex gap-2 rounded-md bg-amber-50 p-3 text-sm text-amber">
              <AlertTriangle size={18} />
              No guardar API keys en el repositorio ni leer archivos locales para buscar secretos.
            </p>
          </CardBody>
        </Card>
      </div>
    </ControlShell>
  );
}

function Status({ label, ok, helper }: { label: string; ok: boolean; helper: string }) {
  return (
    <div className="flex items-start gap-3 rounded-md border border-line p-3">
      {ok ? <CheckCircle2 size={20} className="text-green" /> : <AlertTriangle size={20} className="text-amber" />}
      <div>
        <p className="font-bold">{label}</p>
        <p className="text-sm text-muted">{helper}</p>
      </div>
    </div>
  );
}

