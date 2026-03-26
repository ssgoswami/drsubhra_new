import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";

export function HomeHero() {
  return (
    <Section className="relative overflow-hidden border-b border-zinc-200/80 bg-gradient-to-b from-white via-zinc-50/60 to-zinc-100/40">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(24,24,27,0.05),transparent)]"
        aria-hidden
      />
      {/* Dot-grid texture */}
      <div className="pattern-dots-light pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[5fr_3fr] lg:gap-12">

          {/* Left: text content */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <h1 className="font-serif text-[2rem] font-semibold leading-[1.15] tracking-tight text-zinc-900 sm:text-[2.5rem] lg:text-[2.25rem]">
              Personalized guidance for Masters,{" "}
              <br className="hidden lg:block" />
              PhD, and Postdoc applications abroad.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-[1.75] text-zinc-600 sm:text-lg lg:mx-0">
              Structured research mentorship and study abroad guidance for
              Indian students applying to fully funded Masters, PhD, and Postdoc
              programmes - from university selection to final submission.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                href={routes.booking}
                variant="mentorshipCta"
                className="w-full sm:w-auto"
              >
                Book a session
              </Button>
              <Button
                href={routes.academy}
                variant="ghost"
                className="w-full justify-center sm:w-auto"
              >
                Explore Academy →
              </Button>
            </div>

            {/* Quick-links */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-zinc-200/70 pt-7 lg:justify-start">
              <Link
                href={routes.mentorship}
                className="flex items-center gap-2 text-sm font-medium text-indigo-700 underline-offset-2 hover:underline"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden />
                Mentorship
              </Link>
              <span className="text-zinc-300" aria-hidden>·</span>
              <Link
                href={routes.academy}
                className="flex items-center gap-2 text-sm font-medium text-teal-700 underline-offset-2 hover:underline"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" aria-hidden />
                Academy
              </Link>
              <span className="text-zinc-300" aria-hidden>·</span>
              <Link
                href={routes.blog}
                className="flex items-center gap-2 text-sm font-medium text-amber-700 underline-offset-2 hover:underline"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                Insights
              </Link>
            </div>
          </div>

          {/* Right: profile image + caption */}
          <div className="flex flex-col items-center lg:items-center">
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px]">
              {/* Soft backdrop */}
              <div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-50/60 via-zinc-50/40 to-transparent"
                aria-hidden
              />
              <Image
                src="/images/subhra_photo115.png"
                alt="Dr Subhra Sundar - Mentor, Educator, Researcher"
                width={340}
                height={347}
                priority
                className="relative w-full rounded-xl shadow-lg ring-1 ring-zinc-900/[0.07]"
              />
            </div>
            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="font-serif text-sm font-semibold text-zinc-900">
                Dr Subhra Sundar
              </p>
              <p className="mt-0.5 text-[0.6875rem] font-medium tracking-[0.12em] text-zinc-500">
                Researcher · Mentor · Educator
              </p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
