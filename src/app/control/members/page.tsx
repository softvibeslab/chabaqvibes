import Link from "next/link";
import { Plus, UserRound } from "lucide-react";
import { ControlShell } from "@/components/control/control-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { listMembers } from "@/lib/control-tower/seed-repository";

export default function MembersPage() {
  const members = listMembers();

  return (
    <ControlShell>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <Badge tone="blue">CRUD local</Badge>
          <h1 className="mt-3 text-3xl font-bold">Integrantes</h1>
          <p className="mt-2 text-muted">Gestiona perfiles, superpoderes, Hermes, canales y tareas.</p>
        </div>
        <button className="inline-flex min-h-10 items-center gap-2 rounded-md border border-line bg-white px-4 text-sm font-bold text-ink opacity-70">
          <Plus size={17} />
          Nuevo draft
        </button>
      </div>

      <Card>
        <CardHeader>
          <h2 className="font-bold">Equipo</h2>
        </CardHeader>
        <CardBody className="grid gap-3">
          {members.map((member) => (
            <Link key={member.id} href={`/control/members/${member.handle}`} className="rounded-lg border border-line p-4 hover:bg-slate-50">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-teal/10 text-teal">
                    <UserRound size={22} />
                  </span>
                  <div>
                    <h3 className="font-bold">{member.displayName}</h3>
                    <p className="text-sm text-muted">{member.role}</p>
                    <p className="mt-2 max-w-3xl text-sm">{member.purpose}</p>
                  </div>
                </div>
                <Badge tone="green">{member.status}</Badge>
              </div>
            </Link>
          ))}
        </CardBody>
      </Card>
    </ControlShell>
  );
}

