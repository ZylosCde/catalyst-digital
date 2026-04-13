import { StatPill } from "@/components/ui/StatPill";
import type { StatItem } from "@/types";

interface StatsCounterProps {
  stat: StatItem;
}

export function StatsCounter({ stat }: StatsCounterProps) {
  const formattedValue = `${stat.value}${stat.suffix ?? ""}`;
  return <StatPill value={formattedValue} label={stat.label} />;
}
