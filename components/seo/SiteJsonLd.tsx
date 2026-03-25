const site = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dr Subhra",
  url: "https://www.drsubhra.com",
  description:
    "Mentorship for Masters, PhD, and Postdoc study abroad, plus Dr Subhra Academy for courses, mocks, and career guidance.",
  inLanguage: "en-IN",
} as const;

/** Lightweight structured data for the whole site (SEO). */
export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }}
    />
  );
}
