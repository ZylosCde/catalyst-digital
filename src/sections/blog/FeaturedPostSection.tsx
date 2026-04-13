import { BlogCard } from "@/components/features/BlogCard";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { posts } from "@/data/posts";

export function FeaturedPostSection() {
  const featuredPost = posts[0];

  return (
    <SectionWrapper id="featured-post" className="pt-6">
      {featuredPost ? (
        <div>
          <Heading as="h2" className="mb-6">
            Featured post
          </Heading>
          <BlogCard post={featuredPost} />
        </div>
      ) : (
        <article className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <Heading as="h2" size="h3">
            No featured blog available
          </Heading>
          <p className="mt-3 text-sm text-slate-600">
            Publish your first post to automatically show it as the featured article here.
          </p>
        </article>
      )}
    </SectionWrapper>
  );
}
