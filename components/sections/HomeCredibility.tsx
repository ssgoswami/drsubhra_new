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
    title: "Research Fellow",
    detail: "University of Lübeck, Germany",
  },
  {
    title: "Postdoctoral Fellow",
    detail: "Harvard Medical School, Harvard University, USA",
  },
  {
    title: "Earlier Research Roles",
    detail: "Indian Statistical Institute · IIM Calcutta",
  },
] as const;

const photos = [
  {
    src: "/images/Subhra_Photo_Harvard.png",
    alt: "Dr Subhra Sundar at Harvard Medical School",
    location: "Boston, USA",
    title: "Harvard Medical School",
    caption: "Postdoctoral research in medical imaging and biomedical engineering.",
  },
  {
    src: "/images/Subhra_Photo_Lab1.png",
    alt: "Dr Subhra Sundar working in the imaging research lab",
    location: "Research lab",
    title: "Hands-on Imaging Research",
    caption: "Direct experience with advanced imaging systems and real-world research pipelines.",
  },
  {
    src: "/images/Subhra_Photo_Lab2.png",
    alt: "Research lab environment",
    location: "Laboratory",
    title: "Experimental Research",
    caption: "Strong grounding in experimental and analytical research methods.",
  },
] as const;

export function HomeCredibility() {
  return (
    <Section className="border-b border-zinc-200/50 bg-zinc-50">
      <Container className="py-20 sm:py-24 lg:py-28">

        <SectionHeading
          align="center"
          eyebrow="Credibility"
          title="Background you can verify"
          description="A track record in research and international academia - grounding the study abroad guidance and research mentorship I offer today."
        />

        {/* Academic milestones — numbered CV-style list */}
        <ol className="mx-auto mt-14 max-w-2xl">
          {milestones.map((item, i) => (
            <li
              key={item.title}
              className="flex items-baseline gap-5 border-t border-zinc-200/70 py-5 first:border-t-0"
            >
              <span className="w-5 shrink-0 text-[0.6875rem] font-semibold tabular-nums tracking-[0.12em] text-zinc-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <p className="font-serif text-base font-semibold text-zinc-900">
                  {item.title}
                </p>
                <p className="text-sm text-zinc-500 sm:text-right">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Photo section label */}
        <div className="mx-auto mt-16 max-w-2xl border-t border-zinc-200/70 pt-12">
          <p className="text-center text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-400">
            In the field
          </p>
        </div>

        {/* Editorial photo grid — open figures, no card boxes */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-8 sm:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.title} className="group">
              <div className="relative h-56 w-full overflow-hidden rounded-xl shadow-sm ring-1 ring-zinc-900/[0.06]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <figcaption className="mt-4 px-1">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-zinc-400">
                  {photo.location}
                </p>
                <p className="mt-1 font-serif text-sm font-semibold leading-snug text-zinc-900">
                  {photo.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  {photo.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Scope note */}
        <div className="mx-auto mt-16 max-w-xl border-t border-zinc-200/70 pt-8 text-center">
          <p className="text-sm leading-relaxed text-zinc-500">
            Mentoring emphasis: STEM, applied science, engineering, computer
            science, and related fields - structured guidance, not informal
            profile reviews in chat.
          </p>
        </div>

      </Container>
    </Section>
  );
}
