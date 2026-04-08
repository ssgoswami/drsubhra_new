import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";

export const dynamic = "force-static";

const base = "https://www.drsubhra.com";

function url(path: string) {
  // Normalise to trailing-slash form to match trailingSlash: true in next.config
  const withSlash = path === "/" ? "" : path.endsWith("/") ? path : `${path}/`;
  return `${base}${withSlash}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url(routes.home),
      priority: 1.0,
      changeFrequency: "monthly",
    },
    {
      url: url(routes.mentorship),
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: url(routes.academy),
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: url(routes.workshops),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: url(routes.about),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: url(routes.udayanpandit),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: url(routes.blog),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: url(routes.contact),
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: url(routes.privacy),
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      url: url(routes.terms),
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ];
}
