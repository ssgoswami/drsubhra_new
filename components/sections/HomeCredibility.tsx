import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";

const milestones = [
  {
    title: "PhD (Erasmus Mundus)",
    detail: "Technical University of Madrid, Spain",
  },
  {
    title: "Research",
    detail: "University of Lübeck, Germany",
  },
  {
    title: "Postdoctoral fellow",
    detail: "Harvard Medical School, Harvard University, USA",
  },
  {
    title: "Earlier research roles",
    detail: "Indian Statistical Institute · IIM Calcutta",
  },
] as const;

export function HomeCredibility() {
  return (
    <Section className="border-b border-zinc-200 bg-zinc-50">
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="Credibility"
          title="Background you can verify"
          description="A track record in research and international academia - grounding the study abroad guidance and research mentorship I offer today."
        />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {milestones.map((item) => (
            <li
              key={item.title}
              className="flex overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm ring-1 ring-zinc-900/[0.04]"
            >
              <div className="w-1 shrink-0 bg-indigo-200" aria-hidden />
              <div className="flex-1 px-6 py-5">
                <p className="font-serif text-base font-semibold leading-snug text-zinc-900">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
        {/* Image evidence cards */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-3">
          {[
            {
              src: "/images/Subhra_Photo_Harvard.png",
              alt: "Dr Subhra at Harvard Medical School",
              title: "International Research Exposure",
              description:
                "Worked and trained in globally recognized institutions, including Harvard Medical School.",
            },
            {
              src: "/images/Subhra_Photo_Lab1.png",
              alt: "Hands-on medical imaging research in the lab",
              title: "Hands-on Imaging & Research",
              description:
                "Direct experience with advanced medical imaging systems and real-world research workflows.",
            },
            {
              src: "/images/Subhra_Photo_Lab2.png",
              alt: "Research lab environment",
              title: "Strong Research Foundation",
              description:
                "Early-stage research experience building strong fundamentals in experimental and analytical work.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm ring-1 ring-zinc-900/[0.04]"
            >
              <div className="relative h-44 w-full shrink-0">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-serif text-base font-semibold leading-snug text-zinc-900">
                  {card.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-zinc-600">
          Mentoring emphasis: STEM, applied science, engineering, computer
          science, and related fields-structured guidance, not informal
          profile reviews in chat.
        </p>
      </Container>
    </Section>
  );
}
