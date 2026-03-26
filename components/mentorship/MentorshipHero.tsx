import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BadgePill } from "@/components/ui/BadgePill";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import Link from "next/link";

const jumpLinks = [
  ["Masters", "#masters"],
  ["PhD", "#phd"],
  ["Postdoc", "#postdoc"],
  ["Packages", "#packages"],
  ["Process", "#process"],
  ["FAQ", "#faq"],
] as const;

export function MentorshipHero() {
  return (
    <Section className="relative overflow-hidden border-b border-indigo-100/60 bg-gradient-to-b from-indigo-50/35 via-white to-zinc-50/60">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(67,56,202,0.07),transparent)]"
        aria-hidden
      />
      {/* Dot-grid texture */}
      <div className="pattern-dots-light pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <BadgePill className="mx-auto border-indigo-200/80 bg-indigo-50/80 text-indigo-700">
            Personalised study abroad mentorship
          </BadgePill>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-zinc-900 sm:text-5xl lg:text-6xl">
            Study abroad guidance for Masters, PhD & Postdoc
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-zinc-700 sm:text-lg">
            Personalised research mentorship and PhD application guidance for
            Indian students - strategy, documents, and execution within clear
            scope.{" "}
            <span className="font-medium text-zinc-900">
              Not group courses; not Academy.
            </span>
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
            <Button href={routes.booking} variant="mentorshipCta" className="w-full sm:w-auto">
              Book Session
            </Button>
            <Button href={routes.contact} variant="secondary" className="w-full sm:w-auto">
              Ask a question
            </Button>
          </div>
          <nav
            className="mt-10 flex flex-wrap items-center justify-center gap-y-2 border-t border-indigo-100/80 pt-7 text-sm"
            aria-label="On this page"
          >
            <span className="mr-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-400">
              Jump to
            </span>
            {jumpLinks.map(([label, hash], i) => (
              <span key={hash} className="flex items-center">
                {i > 0 && (
                  <span className="mx-2 text-indigo-200" aria-hidden>·</span>
                )}
                <Link
                  href={hash}
                  className="font-medium text-indigo-600 underline-offset-4 transition hover:text-indigo-900 hover:underline"
                >
                  {label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </Container>
    </Section>
  );
}
