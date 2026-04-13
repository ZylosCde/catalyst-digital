import { SectionWrapper } from "@/components/ui/SectionWrapper";

const filters = ["All", "Web", "Mobile", "Cloud", "AI", "Security"] as const;

export function ProjectsFilterSection() {
  return (
    <SectionWrapper id="projects-filters" className="py-0">
      <div className="flex flex-wrap justify-center gap-2 border-y border-slate-200 py-4">
        {filters.map((filter, index) => (
          <button
            key={filter}
            type="button"
            className={
              index === 0
                ? "rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white"
                : "rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
            }
          >
            {filter}
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
}
