import { ProjectCard } from "@/components/features/ProjectCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { projects } from "@/data/projects";

export function ProjectsGridSection() {
  return (
    <SectionWrapper id="projects-grid" className="pt-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
