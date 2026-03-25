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
  title: "Blog | Study Abroad, Research & Career Guidance",
  description:
    "Articles and guidance for Masters, PhD, and Postdoc applications abroad—documents, research-fit strategy, and practical career direction.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const listing = getListingPosts();
  const categories = getBlogCategories();

  return (
    <PageMain>
      <Section className="border-b border-zinc-200 bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <PageIntro
            badge="Blog"
            title="Insights on study abroad, research, and career direction"
            description="Articles, guidance notes, and practical frameworks for students planning higher studies and global academic careers."
            wrapperClassName="max-w-3xl"
            titleClassName="text-4xl sm:text-5xl md:text-6xl"
            descriptionClassName=""
          />
        </Container>
      </Section>

      <Section aria-labelledby="featured-heading">
        <Container className="py-12 sm:py-16 lg:py-20">
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
