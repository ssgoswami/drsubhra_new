import { PageMain } from "@/components/layout/PageMain";
import { AcademyAskPreview } from "@/components/academy/AcademyAskPreview";
import { AcademyCareerPreview } from "@/components/academy/AcademyCareerPreview";
import { AcademyCoursesSection } from "@/components/academy/AcademyCoursesSection";
import { AcademyCtaBand } from "@/components/academy/AcademyCtaBand";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { AcademyMockTestsSection } from "@/components/academy/AcademyMockTestsSection";
import { AcademyPillars } from "@/components/academy/AcademyPillars";
import {
  academyCourses,
  academyMockTests,
} from "@/lib/content/academy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy | Courses, Mock Tests, Career & Q&A",
  description:
    "Dr Subhra Academy: courses in research methodology, image processing, and AI/ML; mock tests from school to JEE, IIT, and ISI; career guidance; and ask-a-question support for students.",
  alternates: { canonical: "/academy" },
};

export default function AcademyPage() {
  return (
    <PageMain className="flex-1">
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
