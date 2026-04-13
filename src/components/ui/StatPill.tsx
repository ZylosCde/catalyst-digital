import { cn } from "@/lib/utils";

interface StatPillProps {
  value: string;
  label: string;
  className?: string;
}

export function StatPill({ value, label, className }: StatPillProps) {
  return (
    <div className={cn("rounded-xl border border-slate-200 bg-white px-5 py-4", className)}>
      <p className="text-2xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  );
}
