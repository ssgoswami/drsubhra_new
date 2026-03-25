"use client";

import { useMemo, useState } from "react";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import type { BlogPostPreview } from "@/lib/content/blog-posts";

const ALL = "All";

export function BlogListingWithFilters({
  categories,
  posts,
}: {
  categories: string[];
  posts: BlogPostPreview[];
}) {
  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(() => {
    if (active === ALL) return posts;
    return posts.filter((p) => p.category === active);
  }, [active, posts]);

  const filterOptions = [ALL, ...categories];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-zinc-900">All articles</h2>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by category"
        >
          {filterOptions.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={[
                  "rounded-full border px-3.5 py-1.5 text-sm font-medium transition",
                  isActive
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/80 py-12 text-center text-sm text-zinc-600">
          No articles in this category yet.
        </p>
      ) : (
        <ul
          id="articles-list"
          className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((post) => (
            <li key={post.slug}>
              <BlogPostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
