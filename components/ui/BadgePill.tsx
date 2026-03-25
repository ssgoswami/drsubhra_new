import type { ReactNode } from "react";

export function BadgePill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={[
        "inline-flex rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-600 shadow-sm backdrop-blur",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}

