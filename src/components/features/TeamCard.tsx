import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="h-full">
      <div className="flex items-center gap-4">
        <Avatar name={member.name} image={member.image} />
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
          <p className="text-sm text-slate-600">{member.role}</p>
        </div>
      </div>
      <Link
        href={member.linkedin}
        className="mt-4 inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700"
      >
        Connect on LinkedIn
      </Link>
    </Card>
  );
}
