import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AcademyPillarIcon } from "@/components/academy/AcademyIcons";
import { academyPillars } from "@/lib/content/academy";
import Link from "next/link";

export function AcademyPillars() {
  return (
    <Section className="border-b border-zinc-200 bg-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
          Four pillars
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-[1.75] text-zinc-600">
          Everything in the Academy rolls up to these categories-add offerings
          under each without restructuring the site.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {academyPillars.map((pillar) => (
            <li key={pillar.id}>
              <Link
                href={pillar.hash}
                className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm ring-1 ring-zinc-900/[0.04] transition hover:border-teal-200 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                  <AcademyPillarIcon name={pillar.icon} className="h-6 w-6" />
                </span>
                <span className="mt-4 font-serif text-lg font-semibold leading-snug tracking-tight text-zinc-900">
                  {pillar.title}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {pillar.blurb}
                </span>
                <span className="mt-4 text-sm font-semibold text-teal-700 group-hover:underline">
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
