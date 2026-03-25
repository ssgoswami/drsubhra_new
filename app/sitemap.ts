import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";

const base = "https://www.drsubhra.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    routes.home,
    routes.about,
    routes.academy,
    routes.mentorship,
    routes.booking,
    routes.blog,
    routes.contact,
    routes.privacy,
    routes.terms,
  ] as const;

  return paths.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
