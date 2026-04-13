import { Heading } from "@/components/ui/Heading";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { posts } from "@/data/posts";

function uniqueTags(): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.tags)));
}

export function BlogSidebarSection() {
  const tags = uniqueTags();

  return (
    <SectionWrapper id="blog-sidebar" className="pt-0">
      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-6">
          <Heading as="h3" size="h4">
            Categories
          </Heading>
          <p className="mt-3 text-sm text-slate-600">{posts.length === 0 ? "No categories yet." : "Categories coming soon."}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6">
          <Heading as="h3" size="h4">
            Newsletter
          </Heading>
          <p className="mt-3 text-sm text-slate-600">Subscribe option will be enabled once the first blog posts are published.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6">
          <Heading as="h3" size="h4">
            Popular tags
          </Heading>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.length > 0 ? (
              tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {tag}
                </span>
              ))
            ) : (
              <p className="text-sm text-slate-600">No tags yet.</p>
            )}
          </div>
        </article>
      </div>
    </SectionWrapper>
  );
}
