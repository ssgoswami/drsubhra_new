import { PageMain } from "@/components/layout/PageMain";
import { AcademyAskPreview } from "@/components/academy/AcademyAskPreview";
import { AcademyCareerPreview } from "@/components/academy/AcademyCareerPreview";
import { AcademyCoursesSection } from "@/components/academy/AcademyCoursesSection";
import { AcademyCtaBand } from "@/components/academy/AcademyCtaBand";
import { AcademySectionBanner } from "@/components/academy/AcademySectionBanner";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { AcademyMockTestsSection } from "@/components/academy/AcademyMockTestsSection";
import { AcademyPillars } from "@/components/academy/AcademyPillars";
import {
  academyCourses,
  academyMockTests,
} from "@/lib/content/academy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr Subhra Academy | STEM Courses, Mock Tests & Career Guidance",
  description:
    "Professional courses in research methodology, AI/ML, and image processing. Mock tests for JEE, ISI, and school exams. Career guidance and student Q&A for STEM learners.",
  alternates: { canonical: "/academy" },
  openGraph: {
    title: "Dr Subhra Academy | STEM Courses, Mock Tests & Career Guidance",
    description:
      "Courses in research methodology, AI/ML, and image processing. Mock tests for JEE and ISI. Career guidance for STEM students.",
    url: "https://www.drsubhra.com/academy/",
    images: [{ url: "/images/subhra_photo115.png", width: 340, height: 347, alt: "Dr Subhra Sundar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Subhra Academy | STEM Courses, Mock Tests & Career Guidance",
    description:
      "Courses in research methodology, AI/ML, and image processing. Mock tests for JEE and ISI. Career guidance for STEM students.",
    images: ["/images/subhra_photo115.png"],
  },
};

export default function AcademyPage() {
  return (
    <PageMain className="flex-1">
      <AcademySectionBanner />
      <AcademyHero />
      <AcademyPillars />
      <AcademyCoursesSection courses={academyCourses} />
      <AcademyMockTestsSection items={academyMockTests} />
      <AcademyCareerPreview />
      <AcademyAskPreview />
      <AcademyCtaBand />
    </PageMain>
  );
}
