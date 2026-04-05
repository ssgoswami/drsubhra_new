/**
 * Central navigation paths — update here when adding routes.
 */
export const routes = {
  home: "/",
  about: "/about",
  academy: "/academy",
  workshops: "/academy/workshops",
  mentorship: "/mentorship",
  blog: "/blog",
  contact: "/contact",
  booking: "/mentorship/booking",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const mainNav = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Mentorship", href: routes.mentorship },
  { label: "Workshops", href: routes.workshops },
  { label: "Academy", href: routes.academy },
  { label: "Blog", href: routes.blog },
  { label: "Contact", href: routes.contact },
] as const;
