import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BadgePill } from "@/components/ui/BadgePill";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { routes } from "@/lib/routes";

export function HomeHero() {
  return (
    <Section className="relative overflow-hidden border-b border-zinc-200/80 bg-gradient-to-b from-white via-zinc-50/80 to-zinc-100/60">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(24,24,27,0.06),transparent)]"
        aria-hidden
      />
      <Container className="relative py-16 sm:py-20 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:py-28">
        <div className="max-w-2xl text-center lg:flex-1 lg:text-left">
          <BadgePill className="mx-auto lg:mx-0">Dr Subhra</BadgePill>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            <span className="block text-zinc-600 sm:text-4xl lg:text-5xl">
              Dr Subhra
            </span>
            <span className="mt-2 block">
              Mentorship, education, and academic growth—for serious learners.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg lg:mx-0">
            I guide Indian students through{" "}
            <strong className="font-semibold text-zinc-900">
              study abroad
            </strong>{" "}
            at Masters, PhD, and Postdoc levels, and I am building an{" "}
            <strong className="font-semibold text-zinc-900">Academy</strong> for
            professional courses, mock tests, career guidance, and continued
            academic excellence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button href={routes.booking} variant="navCta" className="w-full sm:w-auto">
              Book Session
            </Button>
            <Button
              href={routes.academy}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Explore Academy
            </Button>
          </div>
          <p className="mt-6 text-sm text-zinc-600">
            Structured guidance · Clear timelines · Research-first thinking
          </p>
        </div>

        <PremiumCard
          as="div"
          className="mt-12 w-full max-w-md border-zinc-200/80 shadow-lg lg:mt-0 lg:shrink-0"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
            At a glance
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
              <span>
                <Link
                  href={routes.mentorship}
                  className="font-medium text-indigo-700 underline-offset-2 hover:underline"
                >
                  Mentorship
                </Link>{" "}
                for funded, research-aligned applications abroad
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
              <span>
                <Link
                  href={routes.academy}
                  className="font-medium text-teal-700 underline-offset-2 hover:underline"
                >
                  Academy
                </Link>{" "}
                for courses, mocks, and career direction
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
              <span>
                <Link
                  href={routes.blog}
                  className="font-medium text-zinc-900 underline-offset-2 hover:underline"
                >
                  Insights
                </Link>{" "}
                on research, applications, and learning strategy
              </span>
            </li>
          </ul>
        </PremiumCard>
      </Container>
    </Section>
  );
}
