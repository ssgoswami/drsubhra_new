import type { ReactNode } from "react";

export function Section({
  id,
  className,
  children,
  "aria-labelledby": ariaLabelledBy,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={["w-full", className].filter(Boolean).join(" ")}
    >
      {children}
    </section>
  );
}

