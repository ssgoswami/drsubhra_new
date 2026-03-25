import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { AcademyOfferCard } from "@/components/academy/AcademyOfferCard";
import { Button } from "@/components/ui/Button";
import type { AcademyCourse } from "@/lib/content/academy";
import { routes } from "@/lib/routes";

function StatusBadge({ status }: { status: AcademyCourse["status"] }) {
  if (status === "open") {
    return (
      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
        Open
      </span>
    );
  }
  return (
    <span className="rounded-full bg-zinc-200/80 px-2.5 py-0.5 text-xs font-semibold text-zinc-700">
      Coming soon
    </span>
  );
}

export function AcademyCoursesSection({ courses }: { courses: AcademyCourse[] }) {
  return (
    <Section
      id="courses"
      className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Courses"
            title="Deep programmes - methodology to cutting-edge tech"
            description="Flagship course lines designed for serious learners. More modules and cohorts will layer in here over time."
          />
          <Button href={routes.contact} variant="secondary" className="shrink-0 self-start lg:self-auto">
            Enquire about courses
          </Button>
        </div>
        <ul className="mt-12 grid list-none gap-6 p-0 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <li key={course.slug}>
              <AcademyOfferCard
                title={course.title}
                description={course.description}
                badge={<StatusBadge status={course.status} />}
                footer={
                  <Button href={routes.contact} variant="ghost" className="px-0">
                    Get notified →
                  </Button>
                }
              >
                <ul className="flex flex-wrap gap-2">
                  {course.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-md border border-teal-100 bg-teal-50/70 px-2 py-1 text-xs font-medium text-teal-700"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </AcademyOfferCard>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
