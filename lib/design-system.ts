/**
 * Shared Tailwind class tokens for visual consistency across pages.
 * Prefer importing these in section primitives over duplicating strings.
 */
export const ds = {
  /** Small caps label above headings — neutral */
  eyebrow: "text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-500",
  /** Small caps label — Mentorship accent (indigo) */
  eyebrowMentorship: "text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-indigo-600",
  /** Small caps label — Academy accent (teal) */
  eyebrowAcademy: "text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-teal-600",
  /** Primary page hero H1 — serif editorial */
  display:
    "font-serif text-3xl font-semibold leading-[1.05] tracking-tight text-balance text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl",
  /** Standard inner-page H1 (contact, booking, etc.) — serif editorial */
  pageTitle:
    "font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-balance text-zinc-900 sm:text-4xl lg:text-5xl",
  /** Section titles (H2) — serif, editorial */
  heading2:
    "font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-balance text-zinc-900 sm:text-4xl",
  heading2Tight: "mt-3",
  /** Card and sub-section titles (H3) — serif */
  cardTitle: "font-serif text-xl font-semibold leading-snug tracking-tight text-zinc-900",
  /** Intro / lead paragraph under titles */
  lead: "text-base leading-[1.75] text-pretty text-zinc-700 sm:text-lg",
  leadMaxWidth: "max-w-xl",
  /** Standard vertical rhythm inside sections */
  sectionY: "py-12 sm:py-16 lg:py-20",
  sectionYLoose: "py-16 sm:py-20 lg:py-24",
  /** Main column wrapper for legal/simple pages */
  legalProse: "max-w-2xl space-y-4 text-sm leading-relaxed text-zinc-700 sm:text-base",
  /** Shared contact / form controls */
  formControl:
    "mt-1.5 w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 shadow-sm transition placeholder:text-zinc-400 focus-visible:border-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/15",
} as const;
