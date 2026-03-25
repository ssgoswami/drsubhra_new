import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800",
  secondary:
    "inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50",
  ghost:
    "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900",
  navCta:
    "inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:px-5",
  /** Mentorship primary CTA — indigo, advisory */
  mentorshipCta:
    "inline-flex items-center justify-center rounded-lg bg-indigo-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-600 sm:px-6",
  /** Academy primary CTA — teal, educational */
  academyCta:
    "inline-flex items-center justify-center rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600 sm:px-6",
  /** For dark backgrounds (e.g. footer CTA band) */
  onDark:
    "inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100",
  onDarkOutline:
    "inline-flex items-center justify-center rounded-lg border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10",
  onDarkGhost:
    "inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white",
} as const;

type Variant = keyof typeof variants;

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  "aria-label"?: string;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
  "aria-label"?: string;
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    variant = "primary",
  } = props;

  const classes = `${variants[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, external, "aria-label": ariaLabel } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  const {
    type = "button",
    disabled,
    onClick,
    "aria-expanded": ariaExpanded,
    "aria-controls": ariaControls,
    "aria-label": ariaLabel,
  } = props as ButtonAsButton;

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${classes} disabled:pointer-events-none disabled:opacity-50`.trim()}
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
