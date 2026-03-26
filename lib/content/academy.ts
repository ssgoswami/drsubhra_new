/**
 * Academy catalog data — extend arrays or add fields (e.g. price, href) as you launch offerings.
 * Future: fetch from CMS or DB; keep shape stable for components.
 */

export type AcademyCourse = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  status: "coming-soon" | "open";
};

export type AcademyMockTest = {
  slug: string;
  title: string;
  description: string;
  status: "coming-soon" | "open";
};

export const academyCourses: AcademyCourse[] = [
  {
    slug: "research-methodology",
    title: "Research Methodology",
    description:
      "Foundations of research design, literature review, and clear academic writing—for university students and early researchers.",
    highlights: ["Design & ethics", "Reading the literature", "Structuring arguments"],
    status: "coming-soon",
  },
  {
    slug: "image-processing",
    title: "Image Processing",
    description:
      "From signals and transforms to practical pipelines—aligned with serious STEM preparation and project work.",
    highlights: ["Core concepts", "Hands-on problems", "Applications"],
    status: "coming-soon",
  },
  {
    slug: "ai-ml",
    title: "AI / ML",
    description:
      "Machine learning fundamentals and responsible use cases—bridging intuition, math, and implementation.",
    highlights: ["Models & evaluation", "Workflows", "Research-aware ML"],
    status: "coming-soon",
  },
];

export const academyMockTests: AcademyMockTest[] = [
  {
    slug: "secondary",
    title: "Secondary",
    description: "Structured practice aligned with school-level assessments and exam discipline.",
    status: "coming-soon",
  },
  {
    slug: "higher-secondary",
    title: "Higher Secondary",
    description: "Board-style rigour with feedback-oriented mock cycles.",
    status: "coming-soon",
  },
  {
    slug: "jee",
    title: "JEE",
    description: "Timed papers and pattern awareness for engineering entrance preparation.",
    status: "coming-soon",
  },
  {
    slug: "iit-entrance",
    title: "IIT entrance",
    description: "Focused mocks for IIT-level entrance pathways you target.",
    status: "coming-soon",
  },
  {
    slug: "isi-entrance",
    title: "ISI entrance",
    description: "Practice calibrated to ISI-style quantitative and analytical expectations.",
    status: "coming-soon",
  },
];

export const academyPillars = [
  {
    id: "courses",
    hash: "#courses",
    title: "Courses",
    blurb: "Deep-dive academic courses in research methodology, imaging, and AI/ML.",
    icon: "book" as const,
  },
  {
    id: "mock-tests",
    hash: "#mock-tests",
    title: "Mock Tests",
    blurb: "School boards through national entrances—timed, honest practice.",
    icon: "clipboard" as const,
  },
  {
    id: "career-guidance",
    hash: "#career-guidance",
    title: "Career Guidance",
    blurb: "Study abroad pathways, programmes, and career decisions - without the noise.",
    icon: "compass" as const,
  },
  {
    id: "ask-question",
    hash: "#ask-question",
    title: "Ask a Question",
    blurb: "Subject help for classes 6–12—structured, moderated Q&A.",
    icon: "message" as const,
  },
] as const;
