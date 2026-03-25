import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TwoColumnFeature } from "@/components/layout/TwoColumnFeature";
import { routes } from "@/lib/routes";

const steps = [
  "Choose class & subject",
  "Submit a clear question",
  "Moderated responses on schedule",
] as const;

export function AcademyAskPreview() {
  return (
    <TwoColumnFeature
      id="ask-question"
      sectionClassName="border-b border-zinc-200 bg-white"
      align="start"
      reverse
      left={
        <PremiumCard as="div" className="border-zinc-200/90 shadow-md">
          <p className="text-sm font-semibold text-zinc-900">How it will work</p>
          <ol className="mt-4 space-y-4">
            {steps.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1 text-sm font-medium text-zinc-800">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs leading-relaxed text-zinc-500">
            Designed for students from class 6 to 12-subject-specific help,
            not a substitute for school or private mentorship applications.
          </p>
        </PremiumCard>
      }
      right={
        <div>
          <SectionHeading
            eyebrow="Ask a question"
            title="Subject help, structured and fair"
            description="A dedicated Q&A layer so students can ask focused academic questions and get answers within clear rules-separate from mentorship and separate from full courses."
          />
          <div className="mt-8">
            <Button href={routes.contact} variant="navCta">
              Register interest
            </Button>
          </div>
        </div>
      }
    />
  );
}
