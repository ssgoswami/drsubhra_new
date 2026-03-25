import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { blogPosts } from "@/lib/content/blog-posts";
import { routes } from "@/lib/routes";

const featured = blogPosts.slice(0, 3);

export function HomeFeaturedBlog() {
  return (
    <Section className="border-b border-zinc-200 bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="From the blog"
            description="Study abroad, research mindset, documents, and career direction—practical notes for applicants and students."
            className="sm:max-w-xl"
          />
          <Button href={routes.blog} variant="ghost" className="shrink-0 self-start sm:self-auto">
            View all articles
          </Button>
        </div>
        <ul className="mt-12 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post) => (
            <li key={post.slug}>
              <PremiumCard className="h-full border-zinc-200/90 transition hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
                  {post.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-zinc-900">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-700">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-zinc-600">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </PremiumCard>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-zinc-600">
          Full articles and updates on the{" "}
          <Link
            href={routes.blog}
            className="font-medium text-zinc-900 underline-offset-2 hover:underline"
          >
            Blog
          </Link>
          .
        </p>
      </Container>
    </Section>
  );
}
