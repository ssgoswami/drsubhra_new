"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { routes } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

type Accent = "indigo" | "teal";

const academyDropdownItems = [
  { label: "Courses", href: `${routes.academy}#courses`, accent: "teal" as Accent },
  { label: "Mentorship", href: routes.mentorship, accent: "indigo" as Accent },
  { label: "Workshops", href: routes.workshops, accent: "teal" as Accent },
  { label: "Career Guidance", href: `${routes.academy}#career-guidance`, accent: undefined },
] as const;

function NavLink({
  href,
  label,
  accent,
  mobile = false,
  onNavigate,
}: {
  href: string;
  label: string;
  accent?: Accent;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isActive =
    href === routes.home
      ? pathname === routes.home
      : pathname === href || pathname.startsWith(`${href}/`);

  const desktopActive =
    accent === "indigo"
      ? "font-semibold text-indigo-700 underline decoration-1 underline-offset-4 decoration-indigo-400"
      : accent === "teal"
        ? "font-semibold text-teal-700 underline decoration-1 underline-offset-4 decoration-teal-500"
        : "font-semibold text-zinc-900 underline decoration-1 underline-offset-4 decoration-zinc-400";

  const desktopInactive =
    accent === "indigo"
      ? "font-semibold text-zinc-600 hover:bg-indigo-50 hover:text-indigo-700"
      : accent === "teal"
        ? "font-semibold text-zinc-600 hover:bg-teal-50 hover:text-teal-700"
        : "font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900";

  const mobileActive =
    accent === "indigo"
      ? "border-l-2 border-indigo-500 bg-indigo-50 font-semibold text-indigo-800"
      : accent === "teal"
        ? "border-l-2 border-teal-500 bg-teal-50 font-semibold text-teal-800"
        : "border-l-2 border-zinc-300 bg-zinc-50 font-semibold text-zinc-900";

  const mobileInactive =
    accent === "indigo"
      ? "border-l-2 border-transparent font-semibold text-zinc-700 hover:bg-indigo-50 hover:text-indigo-700"
      : accent === "teal"
        ? "border-l-2 border-transparent font-semibold text-zinc-700 hover:bg-teal-50 hover:text-teal-700"
        : "border-l-2 border-transparent font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900";

  const base = mobile
    ? "block w-full rounded-md px-3 py-2.5 text-sm transition"
    : "rounded-md px-2 py-1.5 text-sm transition";

  const stateClass = mobile
    ? isActive ? mobileActive : mobileInactive
    : isActive ? desktopActive : desktopInactive;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`${base} ${stateClass}`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [academyMobileOpen, setAcademyMobileOpen] = useState(false);
  const pathname = usePathname();

  const isAcademyActive =
    pathname.startsWith(routes.academy) || pathname.startsWith(routes.mentorship);

  const close = () => {
    setOpen(false);
    setAcademyMobileOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 shadow-sm backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        {/* Logo */}
        <Link href={routes.home} className="flex shrink-0 flex-col leading-tight">
          <span className="font-serif text-[1.0625rem] font-semibold tracking-tight text-zinc-900 sm:text-lg">
            Dr Subhra Sundar
          </span>
          <span className="hidden text-[0.6875rem] font-medium tracking-wide text-zinc-500 sm:block">
            Researcher · Mentor · Educator
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          <NavLink href={routes.home} label="Home" />
          <NavLink href={routes.about} label="About" />

          <span className="mx-1.5 h-4 w-px shrink-0 bg-zinc-200" aria-hidden />

          {/* Academy dropdown */}
          <div className="group relative">
            <div className="flex items-center">
              <Link
                href={routes.academy}
                className={[
                  "rounded-l-md py-1.5 pl-2 pr-1 text-sm font-semibold transition",
                  isAcademyActive
                    ? "text-teal-700 underline decoration-1 underline-offset-4 decoration-teal-500"
                    : "text-zinc-600 hover:bg-teal-50 hover:text-teal-700",
                ].join(" ")}
                aria-current={isAcademyActive ? "page" : undefined}
              >
                Academy
              </Link>
              <span
                className={[
                  "rounded-r-md px-1 py-1.5 text-[0.625rem] transition-transform duration-150 group-hover:rotate-180",
                  isAcademyActive ? "text-teal-600" : "text-zinc-400 group-hover:text-teal-600",
                ].join(" ")}
                aria-hidden
              >
                ▾
              </span>
            </div>

            {/* Dropdown panel - visible on hover or focus-within */}
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-52 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg ring-1 ring-zinc-900/5">
                <p className="px-3 pb-1 pt-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Academy
                </p>
                {academyDropdownItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={[
                      "block px-3 py-2 text-sm font-medium transition last:mb-1",
                      item.accent === "indigo"
                        ? "text-zinc-700 hover:bg-indigo-50 hover:text-indigo-700"
                        : item.accent === "teal"
                          ? "text-zinc-700 hover:bg-teal-50 hover:text-teal-700"
                          : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink href={routes.udayanpandit} label="Udayanpandit" />

          <span className="mx-1.5 h-4 w-px shrink-0 bg-zinc-200" aria-hidden />

          <NavLink href={routes.blog} label="Blog" />
          <NavLink href={routes.contact} label="Contact" />
        </nav>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            href={routes.booking}
            variant="navCta"
            className="hidden sm:inline-flex"
          >
            Book Session
          </Button>

          <Button
            variant="ghost"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </Button>
        </div>
      </Container>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={["border-t border-zinc-200 bg-white lg:hidden", open ? "block" : "hidden"].join(" ")}
        aria-hidden={!open}
      >
        <Container className="flex flex-col py-4 pb-6">
          <NavLink href={routes.home} label="Home" mobile onNavigate={close} />
          <NavLink href={routes.about} label="About" mobile onNavigate={close} />

          {/* Academy expandable */}
          <p className="mb-1 mt-3 px-3 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-zinc-400">
            Academy
          </p>
          <div className="flex items-center">
            <Link
              href={routes.academy}
              onClick={close}
              className={[
                "flex-1 rounded-l-md px-3 py-2.5 text-sm font-semibold transition",
                isAcademyActive
                  ? "border-l-2 border-teal-500 bg-teal-50 text-teal-800"
                  : "border-l-2 border-transparent text-zinc-700 hover:bg-teal-50 hover:text-teal-700",
              ].join(" ")}
            >
              Academy overview
            </Link>
            <button
              onClick={() => setAcademyMobileOpen((v) => !v)}
              aria-expanded={academyMobileOpen}
              aria-label="Toggle Academy submenu"
              className="rounded-r-md px-3 py-2.5 text-zinc-400 transition hover:bg-zinc-50 hover:text-zinc-600"
            >
              <svg
                className={["h-4 w-4 transition-transform duration-150", academyMobileOpen ? "rotate-180" : ""].join(" ")}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

          {academyMobileOpen && (
            <div className="mb-1 ml-3 space-y-0.5 border-l-2 border-teal-100 pl-3">
              {academyDropdownItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={close}
                  className={[
                    "block rounded-md px-3 py-2 text-sm transition",
                    item.accent === "indigo"
                      ? "font-semibold text-zinc-700 hover:bg-indigo-50 hover:text-indigo-700"
                      : item.accent === "teal"
                        ? "font-medium text-zinc-700 hover:bg-teal-50 hover:text-teal-700"
                        : "font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <NavLink href={routes.udayanpandit} label="Udayanpandit" mobile onNavigate={close} />

          <div className="my-2 border-t border-zinc-100" aria-hidden />
          <NavLink href={routes.blog} label="Blog" mobile onNavigate={close} />
          <NavLink href={routes.contact} label="Contact" mobile onNavigate={close} />

          <div className="mt-4 border-t border-zinc-200 pt-4">
            <Button href={routes.booking} variant="navCta" className="w-full">
              Book Session
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
