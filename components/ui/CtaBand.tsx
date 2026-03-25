import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

/**
 * Shared dark CTA band used at the bottom of major pages.
 * Pass `sectionClassName` for the background colour and `descriptionClassName`
 * for the body text colour (defaults to zinc-300 for the home page).
 * Pass buttons as `children`.
 */
export function CtaBand({
  sectionClassName = "",
  title,
  description,
  descriptionClassName = "text-zinc-300",
  children,
}: {
  sectionClassName?: string;
  title: ReactNode;
  description: ReactNode;
  descriptionClassName?: string;
  children: ReactNode;
}) {
  return (
    <Section className={["relative overflow-hidden final-cta-band text-white", sectionClassName].filter(Boolean).join(" ")}>
      <div className="pattern-dots-dark pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className={["mt-5 text-base leading-[1.75] sm:text-lg", descriptionClassName].join(" ")}>
            {description}
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            {children}
          </div>
        </div>
      </Container>
    </Section>
  );
}
