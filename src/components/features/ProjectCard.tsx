import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="h-full">
      <div className="aspect-[16/10] rounded-lg bg-slate-100" aria-hidden />
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="muted">
            {tag}
          </Badge>
        ))}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{project.description}</p>
      <Link href={`/work/${project.slug}`} className="mt-5 inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700">
        View case study
      </Link>
    </Card>
  );
}
