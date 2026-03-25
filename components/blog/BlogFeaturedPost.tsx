import { PremiumCard } from "@/components/ui/PremiumCard";
import { Button } from "@/components/ui/Button";
import type { BlogPostPreview } from "@/lib/content/blog-posts";

export function BlogFeaturedPost({ post }: { post: BlogPostPreview }) {
  return (
    <div className="relative">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Featured
      </p>
      <PremiumCard
        as="div"
        className="overflow-hidden border-zinc-200/90 bg-gradient-to-br from-white via-zinc-50/80 to-slate-50/60 p-0 shadow-md ring-1 ring-zinc-200/60 sm:p-0 lg:flex lg:min-h-[280px] lg:flex-row"
      >
        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:p-10">
          <span className="inline-flex w-fit rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {post.category}
          </span>
          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
            {post.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-600">
            <span>{post.date}</span>
            <span aria-hidden className="text-zinc-300">
              ·
            </span>
            <span>{post.readTime}</span>
          </div>
          <div className="mt-8">
            <Button href="#articles-list" variant="primary">
              Browse articles
            </Button>
          </div>
        </div>
        <div
          className="hidden shrink-0 border-t border-zinc-200 bg-gradient-to-br from-slate-100/80 to-zinc-100/50 lg:block lg:w-72 lg:border-l lg:border-t-0 xl:w-80"
          aria-hidden
        />
      </PremiumCard>
    </div>
  );
}
