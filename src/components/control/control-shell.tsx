import Link from "next/link";
import type { Route } from "next";
import { Activity, Bot, LayoutDashboard, Network, PenLine, Users } from "lucide-react";
import { TopNav } from "@/components/nav";

const links: { href: Route; label: string; icon: typeof LayoutDashboard }[] = [
  { href: "/control", label: "Pulse", icon: LayoutDashboard },
  { href: "/control/members", label: "Integrantes", icon: Users },
  { href: "/control/agents", label: "Hermes", icon: Bot },
  { href: "/control/knowledge", label: "Knowledge", icon: Network },
  { href: "/control/prompts", label: "Prompts", icon: PenLine },
  { href: "/control/observability", label: "Arize", icon: Activity }
];

export function ControlShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f6f8fb]">
      <TopNav />
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit rounded-lg border border-line bg-white p-3 shadow-soft">
          <nav className="grid gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-10 items-center gap-2 rounded-md px-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                <link.icon size={17} />
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
