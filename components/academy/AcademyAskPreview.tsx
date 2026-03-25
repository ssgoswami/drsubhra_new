import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { routes } from "@/lib/routes";

const steps = [
  "Choose class & subject",
  "Submit a clear question",
  "Moderated responses on schedule",
] as const;

export function AcademyAskPreview() {
  return (
    <Section
      id="ask-question"
      className="scroll-mt-24 border-b border-zinc-200 bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <PremiumCard
            as="div"
            className="order-2 border-zinc-200/90 shadow-md lg:order-1"
          >
            <p className="text-sm font-semibold text-zinc-900">
              How it will work
            </p>
            <ol className="mt-4 space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-sm font-medium text-zinc-800">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs leading-relaxed text-zinc-500">
              Designed for students from class 6 to 12—subject-specific help,
              not a substitute for school or private mentorship applications.
            </p>
          </PremiumCard>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Ask a question
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Subject help, structured and fair
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
              A dedicated Q&amp;A layer so students can ask focused academic
              questions and get answers within clear rules—separate from
              mentorship and separate from full courses.
            </p>
            <div className="mt-8">
              <Button href={routes.contact} variant="navCta">
                Register interest
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
