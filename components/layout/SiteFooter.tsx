import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { routes } from "@/lib/routes";

const footerColumns = [
  {
    title: "Offerings",
    links: [
      { label: "Mentorship", href: routes.mentorship },
      { label: "Academy", href: routes.academy },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "About", href: routes.about },
      { label: "Blog", href: routes.blog },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: routes.contact },
      { label: "Book a session", href: routes.booking },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-950 text-zinc-300">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Link
              href={routes.home}
              className="inline-block font-serif text-xl font-semibold tracking-tight text-white"
            >
              Dr Subhra
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
              Mentorship for study abroad and a growing academy for courses,
              assessments, and student guidance—structured, professional, and
              built for serious learners.
            </p>
            <a
              href="mailto:contact@drsubhra.com"
              className="mt-4 inline-block text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              contact@drsubhra.com
            </a>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-zinc-300 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            © {year} Dr Subhra. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            <Link
              href={routes.privacy}
              className="text-xs font-medium text-zinc-500 transition hover:text-zinc-300"
            >
              Privacy
            </Link>
            <Link
              href={routes.terms}
              className="text-xs font-medium text-zinc-500 transition hover:text-zinc-300"
            >
              Terms
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
