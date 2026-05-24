import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "teal" | "blue" | "amber" | "green" | "slate";
  className?: string;
};

const tones = {
  teal: "bg-teal-50 text-teal border-teal/20",
  blue: "bg-blue-50 text-blue border-blue/20",
  amber: "bg-amber-50 text-amber border-amber/20",
  green: "bg-green-50 text-green border-green/20",
  slate: "bg-slate-100 text-slate-700 border-slate-200"
};

export function Badge({ children, tone = "slate", className }: BadgeProps) {
  return (
    <span className={cn("inline-flex min-h-7 items-center rounded-full border px-2.5 text-xs font-semibold", tones[tone], className)}>
      {children}
    </span>
  );
}

