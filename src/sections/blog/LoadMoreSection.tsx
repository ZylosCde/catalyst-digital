import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { posts } from "@/data/posts";

export function LoadMoreSection() {
  if (posts.length === 0) {
    return (
      <SectionWrapper id="load-more" className="pt-0">
        <p className="text-center text-sm text-slate-500">No additional posts to load right now.</p>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="load-more" className="pt-0">
      <div className="flex justify-center">
        <Button variant="outline">Load more articles</Button>
      </div>
    </SectionWrapper>
  );
}
