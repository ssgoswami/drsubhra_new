export type BlogPostPreview = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  /** At most one should be true; otherwise first post is treated as featured. */
  featured?: boolean;
};

/** Preview list — replace with CMS/MDX when ready */
export const blogPosts: BlogPostPreview[] = [
  {
    slug: "masters-admissions-europe-plan",
    title: "How to Plan for Masters Admissions in Europe",
    excerpt:
      "A practical timeline for shortlisting programs, preparing documents, and submitting high-quality applications.",
    category: "Masters",
    date: "Mar 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "phd-finding-supervisor",
    title: "PhD Applications: Finding the Right Supervisor",
    excerpt:
      "Learn a structured method for identifying labs, evaluating fit, and writing focused outreach emails.",
    category: "PhD",
    date: "Mar 2026",
    readTime: "8 min read",
  },
  {
    slug: "postdoc-research-profile",
    title: "Postdoc Pathways: Building a Strong Research Profile",
    excerpt:
      "Key steps to position your publications, research statement, and long-term direction for competitive postdoc roles.",
    category: "Postdoc",
    date: "Feb 2026",
    readTime: "7 min read",
  },
  {
    slug: "sop-common-mistakes",
    title: "Statement of Purpose: Common Mistakes to Avoid",
    excerpt:
      "The most frequent SOP errors and how to build a clear narrative that aligns with your target program.",
    category: "Documents",
    date: "Feb 2026",
    readTime: "5 min read",
  },
  {
    slug: "research-methodology-university",
    title: "Research Methodology Skills for University Students",
    excerpt:
      "Why research design, literature review, and evidence-based thinking are essential for academic success.",
    category: "Research Methodology",
    date: "Jan 2026",
    readTime: "6 min read",
  },
  {
    slug: "career-path-after-studies",
    title: "Choosing a Career Path After Higher Studies",
    excerpt:
      "How to compare potential placements and long-term opportunities before selecting a degree path.",
    category: "Career Options",
    date: "Jan 2026",
    readTime: "7 min read",
  },
];

export function getFeaturedPost(): BlogPostPreview {
  const explicit = blogPosts.find((p) => p.featured);
  return explicit ?? blogPosts[0];
}

export function getListingPosts(): BlogPostPreview[] {
  const featured = getFeaturedPost();
  return blogPosts.filter((p) => p.slug !== featured.slug);
}

export function getBlogCategories(): string[] {
  return Array.from(new Set(blogPosts.map((p) => p.category))).sort((a, b) =>
    a.localeCompare(b),
  );
}
