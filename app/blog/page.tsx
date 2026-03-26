import { BlogFeaturedPost } from "@/components/blog/BlogFeaturedPost";
import { BlogListingWithFilters } from "@/components/blog/BlogListingWithFilters";
import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { PageIntro } from "@/components/ui/PageIntro";
import {
  getBlogCategories,
  getFeaturedPost,
  getListingPosts,
} from "@/lib/content/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Study Abroad Tips, PhD Guides & Research Insights - Dr Subhra Sundar",
  description:
    "Practical guides on Masters, PhD, and Postdoc applications abroad - SOP writing, research fit, university selection, funding strategies, and career direction for STEM students.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Study Abroad Tips, PhD Guides & Research Insights - Dr Subhra Sundar",
    description:
      "Practical guides on Masters, PhD, and Postdoc applications abroad - SOP writing, research fit, university selection, and funding strategies.",
    url: "https://www.drsubhra.com/blog/",
    images: [{ url: "/images/subhra_photo115.png", width: 340, height: 347, alt: "Dr Subhra Sundar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Study Abroad Tips, PhD Guides & Research Insights - Dr Subhra Sundar",
    description:
      "Practical guides on Masters, PhD, and Postdoc applications abroad - SOP writing, research fit, university selection, and funding strategies.",
    images: ["/images/subhra_photo115.png"],
  },
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const listing = getListingPosts();
  const categories = getBlogCategories();

  return (
    <PageMain>
      <Section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(24,24,27,0.04),transparent)]"
          aria-hidden
        />
        <div className="pattern-dots-light pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <PageIntro
            badge="Blog"
            title="Insights on study abroad, research, and career direction"
            description="Articles, guidance notes, and practical frameworks for students planning higher studies and global academic careers."
            wrapperClassName="max-w-3xl"
            titleClassName="text-4xl sm:text-5xl md:text-6xl"
          />
        </Container>
      </Section>

      <Section aria-labelledby="featured-heading">
        <Container className="py-16 sm:py-20 lg:py-24">
          <h2 id="featured-heading" className="sr-only">
            Featured article
          </h2>
          <BlogFeaturedPost post={featured} />
        </Container>
      </Section>

      <Section
        aria-labelledby="blog-posts-heading"
        className="border-t border-zinc-200 bg-zinc-50"
      >
        <Container className="py-12 sm:py-16 lg:py-20">
          <h2 id="blog-posts-heading" className="sr-only">
            Article listing and filters
          </h2>
          <BlogListingWithFilters categories={categories} posts={listing} />
        </Container>
      </Section>
    </PageMain>
  );
}
