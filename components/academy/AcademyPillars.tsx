import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AcademyPillarIcon } from "@/components/academy/AcademyIcons";
import { academyPillars } from "@/lib/content/academy";
import Link from "next/link";

export function AcademyPillars() {
  return (
    <Section className="border-b border-zinc-200 bg-white">
      <Container className="py-14 sm:py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Four pillars
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-center text-base text-zinc-700">
          Everything in the Academy rolls up to these categories—add offerings
          under each without restructuring the site.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {academyPillars.map((pillar) => (
            <li key={pillar.id}>
              <Link
                href={pillar.hash}
                className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50/80 p-6 shadow-sm transition hover:border-slate-300/80 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
                  <AcademyPillarIcon name={pillar.icon} className="h-6 w-6" />
                </span>
                <span className="mt-4 text-lg font-semibold text-zinc-900">
                  {pillar.title}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {pillar.blurb}
                </span>
                <span className="mt-4 text-sm font-semibold text-slate-700 group-hover:underline">
                  View section →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
