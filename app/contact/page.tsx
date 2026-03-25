import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/layout/Container";
import { PageMain } from "@/components/layout/PageMain";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { routes } from "@/lib/routes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Dr Subhra",
  description:
    "Contact Dr Subhra for general enquiries, mentorship, Academy programmes, or collaboration. Structured response—no informal profile reviews in chat.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ thanks?: string }>;
}) {
  const { thanks } = await searchParams;
  const showThanks = thanks === "1";

  return (
    <PageMain className="flex-1">
      <Section className="border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-50">
        <Container className="py-14 sm:py-16 lg:py-20">
          <PageHero
            eyebrow="Contact"
            title="Let&apos;s start a professional conversation"
            description={
              <>
                Use the form for structured enquiries. For study-abroad
                mentoring with a clear scope, you can also{" "}
                <Link
                  href={routes.booking}
                  className="font-semibold text-zinc-900 underline-offset-2 hover:underline"
                >
                  book a session
                </Link>{" "}
                directly.
              </>
            }
          />
        </Container>
      </Section>

      <Section>
        <Container className="py-12 sm:py-16 lg:py-20">
          {showThanks ? (
            <div
              className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50/90 px-5 py-5 text-center shadow-sm sm:px-8 sm:py-6"
              role="status"
            >
              <p className="text-sm font-semibold text-emerald-900 sm:text-base">
                Thank you — your message has been received.
              </p>
              <p className="mt-2 text-sm text-emerald-800/90">
                You&apos;ll hear back by email, typically within two business
                days. If your matter is urgent, you may also write to{" "}
                <a
                  href="mailto:contact@drsubhra.com"
                  className="font-medium underline-offset-2 hover:underline"
                >
                  contact@drsubhra.com
                </a>
                .
              </p>
            </div>
          ) : null}

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <h2 className="text-lg font-semibold text-zinc-900">
                  Send a message
                </h2>
                <p className="mt-1 text-sm text-zinc-600">
                  All fields marked * are required.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="space-y-8 lg:sticky lg:top-28">
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                    What to expect
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
                    <li className="flex gap-2">
                      <span className="font-semibold text-zinc-900">·</span>
                      Replies by email, usually within two business days.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-zinc-900">·</span>
                      No profile evaluations over informal DMs—use the form or
                      book a mentorship session.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-zinc-900">·</span>
                      Mentorship and Academy are separate; choose the enquiry
                      type that fits.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 shadow-sm">
                  <h2 className="text-sm font-semibold text-zinc-900">
                    Direct email
                  </h2>
                  <a
                    href="mailto:contact@drsubhra.com"
                    className="mt-2 inline-block text-base font-semibold text-zinc-900 underline-offset-2 hover:underline"
                  >
                    contact@drsubhra.com
                  </a>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-600">
                    Prefer email for attachments or long context—please still
                    mention whether you need mentorship, Academy, or a general
                    enquiry.
                  </p>
                </div>

                <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/80 p-6">
                  <p className="text-sm font-semibold text-zinc-900">
                    Ready to work together?
                  </p>
                  <p className="mt-2 text-sm text-zinc-700">
                    If you already know you want structured study-abroad support,
                    booking locks in time and context.
                  </p>
                  <div className="mt-4">
                    <Button href={routes.booking} variant="primary">
                      Book Session
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <Link
                    href={routes.mentorship}
                    className="font-medium text-zinc-700 underline-offset-2 hover:text-zinc-900 hover:underline"
                  >
                    Mentorship
                  </Link>
                  <span className="text-zinc-300" aria-hidden>
                    |
                  </span>
                  <Link
                    href={routes.academy}
                    className="font-medium text-zinc-700 underline-offset-2 hover:text-zinc-900 hover:underline"
                  >
                    Academy
                  </Link>
                  <span className="text-zinc-300" aria-hidden>
                    |
                  </span>
                  <Link
                    href={routes.about}
                    className="font-medium text-zinc-700 underline-offset-2 hover:text-zinc-900 hover:underline"
                  >
                    About
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </PageMain>
  );
}
