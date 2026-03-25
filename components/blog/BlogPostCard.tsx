import { PremiumCard } from "@/components/ui/PremiumCard";
import type { BlogPostPreview } from "@/lib/content/blog-posts";

export function BlogPostCard({ post }: { post: BlogPostPreview }) {
  return (
    <PremiumCard className="flex h-full flex-col border-zinc-200/90 transition hover:border-zinc-300 hover:shadow-md">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-500">
        {post.category}
      </p>
      <h3 className="mt-2.5 font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4 text-xs text-zinc-600">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
    </PremiumCard>
  );
}
