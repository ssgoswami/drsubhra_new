import Link from "next/link";
import type { ContentBlock } from "@/lib/content/blog-posts";
import type { ReactNode } from "react";

/** Renders **bold** markers within a string as <strong> elements. */
function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function BlogPostRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-10 font-serif text-2xl font-semibold leading-tight tracking-tight text-zinc-900 first:mt-0"
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={i}
                className="mt-6 font-serif text-lg font-semibold leading-snug text-zinc-900"
              >
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p key={i} className="leading-[1.8] text-zinc-700">
                {renderInline(block.text)}
              </p>
            );

          case "ul":
            return (
              <ul key={i} className="space-y-2.5 pl-5">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="relative leading-[1.75] text-zinc-700 before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-zinc-400 before:content-['']"
                  >
                    {renderInline(item)}
                  </li>
                ))}
              </ul>
            );

          case "checklist":
            return (
              <ul key={i} className="space-y-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-zinc-700">
                    <span
                      aria-hidden
                      className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-zinc-300 bg-white"
                    />
                    <span className="leading-[1.75]">{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "note":
            return (
              <aside
                key={i}
                className="rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900"
              >
                {block.heading && (
                  <p className="mb-1 font-semibold capitalize">
                    {block.heading}
                  </p>
                )}
                <p>{block.text}</p>
              </aside>
            );

          case "cta":
            return (
              <aside
                key={i}
                className="rounded-xl border border-indigo-100 bg-indigo-50 px-6 py-6"
              >
                <p className="leading-[1.8] text-zinc-700">{block.text}</p>
                <Link
                  href={block.linkHref}
                  className="mt-4 inline-flex items-center rounded-lg bg-indigo-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                  {block.linkText}
                </Link>
              </aside>
            );

          case "faq":
            return (
              <div key={i} className="mt-10 space-y-0">
                <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-zinc-900">
                  Frequently Asked Questions
                </h2>
                <dl className="mt-6 divide-y divide-zinc-100">
                  {block.items.map((item, j) => (
                    <div key={j} className="py-5">
                      <dt className="font-semibold text-zinc-900">{item.q}</dt>
                      <dd className="mt-2 leading-[1.8] text-zinc-600">
                        {item.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
