import Link from "next/link";
import type { Route } from "next";
import { Activity, Bot, Home, Network, TowerControl } from "lucide-react";

const items: { href: Route; label: string; icon: typeof Home }[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/demo", label: "Demo", icon: Bot },
  { href: "/control", label: "Control", icon: TowerControl },
  { href: "/control/knowledge", label: "Graph", icon: Network },
  { href: "/control/observability", label: "Arize", icon: Activity }
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-teal text-white">CQ</span>
          <span>ChambaQ Vibes</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-9 items-center gap-2 rounded-md px-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
