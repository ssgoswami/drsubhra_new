"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, routes } from "@/lib/routes";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

function NavLink({
  href,
  label,
  onNavigate,
  className = "",
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive =
    href === routes.home
      ? pathname === routes.home
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={[
        "rounded-md px-2 py-1.5 text-sm font-medium transition",
        isActive
          ? "bg-zinc-100 text-zinc-900"
          : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900",
        className,
      ].join(" ")}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
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
        <Link
          href={routes.home}
          className="group flex shrink-0 flex-col leading-tight"
        >
          <span className="text-base font-semibold tracking-tight text-zinc-900 sm:text-lg">
            Dr Subhra
          </span>
          <span className="hidden text-xs font-medium text-zinc-500 sm:block">
            Mentor · Educator · Researcher
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button href={routes.booking} variant="navCta" className="hidden sm:inline-flex">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </Button>
        </div>
      </Container>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={[
          "border-t border-zinc-200 bg-white lg:hidden",
          open ? "block" : "hidden",
        ].join(" ")}
        aria-hidden={!open}
      >
        <Container className="flex flex-col gap-1 py-4 pb-6">
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onNavigate={() => setOpen(false)}
              className="block w-full py-2.5 px-3"
            />
          ))}
          <div className="mt-4 border-t border-zinc-200 pt-4">
            <Button
              href={routes.booking}
              variant="navCta"
              className="w-full"
            >
              Book Session
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
