import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { MentorshipFaqItem } from "@/lib/content/mentorship-faq";

export function MentorshipFaq({ items }: { items: MentorshipFaqItem[] }) {
  return (
    <Section id="faq" className="scroll-mt-24 border-t border-zinc-200 bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Questions, answered clearly"
          description="Straight expectations—so you can decide if this mentorship is the right fit."
          className="mx-auto"
        />
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50/50 shadow-sm">
          {items.map((item) => (
            <details
              key={item.question}
              className="group border-b border-zinc-200 last:border-b-0 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white sm:px-6 sm:py-5">
                <span className="text-sm font-semibold text-zinc-900 sm:text-base">
                  {item.question}
                </span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition group-open:rotate-180"
                  aria-hidden
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-zinc-100 bg-white px-5 py-4 text-sm leading-relaxed text-zinc-700 sm:px-6 sm:py-5 sm:text-base">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
