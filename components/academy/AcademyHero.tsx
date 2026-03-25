import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BadgePill } from "@/components/ui/BadgePill";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import Link from "next/link";

const jumpLinks = [
  ["Courses", "#courses"],
  ["Mock tests", "#mock-tests"],
  ["Career", "#career-guidance"],
  ["Ask", "#ask-question"],
] as const;

export function AcademyHero() {
  return (
    <Section className="relative overflow-hidden border-b border-teal-100/60 bg-gradient-to-br from-teal-50/40 via-white to-zinc-50/60">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_100%_0%,rgba(13,148,136,0.07),transparent)]"
        aria-hidden
      />
      {/* Dot-grid texture */}
      <div className="pattern-dots-light pointer-events-none absolute inset-0" aria-hidden />
      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200/60 to-transparent"
        aria-hidden
      />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <BadgePill className="mx-auto border-teal-200/80 bg-teal-50/80 text-teal-700">
            Dr Subhra Academy
          </BadgePill>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-zinc-900 sm:text-5xl lg:text-6xl">
            A structured ecosystem for learning, practice, and guidance
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-zinc-700 sm:text-lg">
            Courses, mock tests, career direction, and subject Q&amp;A-built to
            scale with you.{" "}
            <span className="font-medium text-zinc-900">
              Separate from one-to-one study abroad mentorship.
            </span>
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
            <Button href="#courses" variant="academyCta" className="w-full sm:w-auto">
              Explore programmes
            </Button>
            <Button href={routes.contact} variant="secondary" className="w-full sm:w-auto">
              Join / enquire
            </Button>
          </div>
          <nav
            className="mt-10 flex flex-wrap items-center justify-center gap-y-2 border-t border-teal-100/80 pt-7 text-sm"
            aria-label="Academy sections"
          >
            <span className="mr-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-400">
              Explore
            </span>
            {jumpLinks.map(([label, hash], i) => (
              <span key={hash} className="flex items-center">
                {i > 0 && (
                  <span className="mx-2 text-teal-200" aria-hidden>·</span>
                )}
                <Link
                  href={hash}
                  className="font-medium text-teal-700 underline-offset-4 transition hover:text-teal-900 hover:underline"
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
