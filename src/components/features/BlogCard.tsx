import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card hover className="h-full">
      <div className="aspect-[16/10] rounded-lg bg-slate-100" aria-hidden />
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="muted">
            {tag}
          </Badge>
        ))}
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">{post.date}</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
      <p className="mt-4 text-sm text-slate-500">By {post.author}</p>
      <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700">
        Read article
      </Link>
    </Card>
  );
}
