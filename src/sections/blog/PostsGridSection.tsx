import { BlogCard } from "@/components/features/BlogCard";
import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { posts } from "@/data/posts";

export function PostsGridSection() {
  const remainingPosts = posts.slice(1);

  return (
    <SectionWrapper id="posts-grid" className="pt-6">
      <Heading as="h2">Recent articles</Heading>
      {remainingPosts.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {remainingPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <article className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="text-base font-medium text-slate-900">No blogs available yet.</p>
          <p className="mt-2 text-sm text-slate-600">Once posts are added, they will appear here automatically.</p>
        </article>
      )}
    </SectionWrapper>
  );
}
