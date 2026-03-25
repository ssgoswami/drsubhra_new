import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BadgePill } from "@/components/ui/BadgePill";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import Link from "next/link";

export function MentorshipHero() {
  return (
    <Section className="relative overflow-hidden border-b border-zinc-200/80 bg-gradient-to-b from-white via-zinc-50 to-zinc-100/70">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(24,24,27,0.07),transparent)]"
        aria-hidden
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <BadgePill className="mx-auto border-indigo-200/80 bg-indigo-50/80 text-indigo-700">
            Personalised mentorship
          </BadgePill>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Study abroad guidance for Masters, PhD & Postdoc
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">
            Structured, research-aware support for serious applicants—strategy,
            documents, and execution within clear scope.{" "}
            <span className="font-medium text-zinc-900">
              Not group courses; not Academy.
            </span>
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
            <Button href={routes.booking} variant="mentorshipCta" className="w-full sm:w-auto">
              Book Session
            </Button>
            <Button href={routes.contact} variant="secondary" className="w-full sm:w-auto">
              Ask a question
            </Button>
          </div>
          <nav
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-zinc-200/80 pt-8 text-sm"
            aria-label="On this page"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Jump to
            </span>
            {(
              [
                ["Masters", "#masters"],
                ["PhD", "#phd"],
                ["Postdoc", "#postdoc"],
                ["Packages", "#packages"],
                ["Process", "#process"],
                ["FAQ", "#faq"],
              ] as const
            ).map(([label, hash]) => (
              <Link
                key={hash}
                href={hash}
                className="font-medium text-indigo-600 underline-offset-4 transition hover:text-indigo-900 hover:underline"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </Section>
  );
}
