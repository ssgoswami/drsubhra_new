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
    <Section className="relative overflow-hidden border-b border-zinc-200/80 bg-gradient-to-br from-slate-50 via-white to-zinc-100/90">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_100%_0%,rgba(51,65,85,0.06),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent"
        aria-hidden
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <BadgePill className="mx-auto border-teal-200/80 bg-teal-50/80 text-teal-700">
            Dr Subhra Academy
          </BadgePill>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            A structured ecosystem for learning, practice, and guidance
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">
            Courses, mock tests, career direction, and subject Q&amp;A—built to
            scale with you.{" "}
            <span className="font-medium text-zinc-900">
              Separate from one-to-one study abroad mentorship.
            </span>
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
            <Button href="#courses" variant="academyCta" className="w-full sm:w-auto">
              Explore programmes
            </Button>
            <Button href={routes.contact} variant="secondary" className="w-full sm:w-auto">
              Join / enquire
            </Button>
          </div>
          <nav
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-zinc-200/80 pt-8 text-sm"
            aria-label="Academy sections"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Explore
            </span>
            {jumpLinks.map(([label, hash]) => (
              <Link
                key={hash}
                href={hash}
                className="font-medium text-teal-700 underline-offset-4 transition hover:text-teal-900 hover:underline"
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
