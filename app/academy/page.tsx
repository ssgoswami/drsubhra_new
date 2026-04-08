import { PageMain } from "@/components/layout/PageMain";
import { AcademyCareerPreview } from "@/components/academy/AcademyCareerPreview";
import { AcademyCoursesSection } from "@/components/academy/AcademyCoursesSection";
import { AcademyCtaBand } from "@/components/academy/AcademyCtaBand";
import { AcademySectionBanner } from "@/components/academy/AcademySectionBanner";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { AcademyPillars } from "@/components/academy/AcademyPillars";
import { academyCourses } from "@/lib/content/academy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Subhra Academy | STEM Courses & Career Guidance",
  description:
    "Academic courses in research methodology, AI/ML, and image processing. Career guidance for Indian students on study abroad and research pathways.",
  alternates: { canonical: "/academy/" },
  openGraph: {
    title: "Dr Subhra Academy | STEM Courses & Career Guidance",
    description:
      "Courses in research methodology, AI/ML, and image processing. Career guidance for STEM students on study abroad pathways.",
    url: "https://www.drsubhra.com/academy/",
    images: [{ url: "/images/subhra_photo115.webp", width: 340, height: 347, alt: "Dr Subhra Sundar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Subhra Academy | STEM Courses & Career Guidance",
    description:
      "Courses in research methodology, AI/ML, and image processing. Career guidance for STEM students on study abroad pathways.",
    images: ["/images/subhra_photo115.webp"],
  },
};

export default function AcademyPage() {
  return (
    <PageMain className="flex-1">
      <AcademySectionBanner />
      <AcademyHero />
      <AcademyPillars />
      <AcademyCoursesSection courses={academyCourses} />
      <AcademyCareerPreview />
      <AcademyCtaBand />
    </PageMain>
  );
}
