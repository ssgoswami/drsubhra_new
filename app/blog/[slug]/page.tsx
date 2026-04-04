import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PageMain } from "@/components/layout/PageMain";
import { Container } from "@/components/layout/Container";
import { BlogPostRenderer } from "@/components/blog/BlogPostRenderer";
import { fullPosts, getFullPost } from "@/lib/content/blog-posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fullPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getFullPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.drsubhra.com/blog/${slug}/`,
      images: [
        {
          url: "/images/subhra_photo115.webp",
          width: 340,
          height: 347,
          alt: "Dr Subhra Sundar",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: ["/images/subhra_photo115.webp"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getFullPost(slug);
  if (!post) notFound();

  return (
    <PageMain>
      {/* Header strip */}
      <div className="border-b border-zinc-200 bg-white">
        <Container className="py-10 sm:py-14">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
          >
            <svg
              aria-hidden
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Blog
          </Link>

          <div className="mt-6 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
              <span className="inline-flex rounded-full bg-zinc-900 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span aria-hidden className="text-zinc-300">
                ·
              </span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-zinc-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/subhra_photo115.webp"
                  alt="Dr Subhra Sundar"
                  className="h-full w-full object-cover"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-sm font-medium text-zinc-700">
                Dr. Subhra Sundar
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Article body */}
      <div className="bg-zinc-50">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-2xl">
            <BlogPostRenderer blocks={post.content} />

            {/* Bottom author note */}
            <div className="mt-16 border-t border-zinc-200 pt-8 text-sm text-zinc-500">
              <p>
                Written by{" "}
                <Link
                  href="/about"
                  className="font-medium text-zinc-700 underline-offset-2 hover:underline"
                >
                  Dr. Subhra Sundar
                </Link>
                . For personalized guidance on your study abroad journey, explore the{" "}
                <Link
                  href="/mentorship"
                  className="font-medium text-zinc-700 underline-offset-2 hover:underline"
                >
                  mentorship program
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </div>
    </PageMain>
  );
}
