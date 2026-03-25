import type { ComponentPropsWithoutRef, ReactNode } from "react";

type PageMainProps = Omit<ComponentPropsWithoutRef<"main">, "id"> & {
  children: ReactNode;
};

/**
 * Single document landmark for page content. Keeps id stable for skip link + focus.
 */
export function PageMain({
  children,
  className = "",
  ...rest
}: PageMainProps) {
  return (
    <main
      id="main-content"
      className={["flex-1 min-h-0 w-full text-zinc-900", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </main>
  );
}
