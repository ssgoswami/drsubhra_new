"use client";

import { useActionState } from "react";
import {
  contactFormInitialState,
  submitContactForm,
} from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import { ds } from "@/lib/design-system";

const enquiryOptions = [
  "General Enquiry",
  "Mentorship",
  "Academy",
  "Collaboration",
] as const;

const fieldClass = ds.formControl;

const labelClass = "text-sm font-medium text-zinc-800";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    contactFormInitialState,
  );

  return (
    <form action={formAction} className="relative space-y-6" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.message && state.errors && Object.keys(state.errors).length > 0 ? (
        <p
          className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
          role="alert"
        >
          {state.message}
        </p>
      ) : null}

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Full name <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
          placeholder="Your name"
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? "err-name" : undefined}
        />
        {state.errors?.name ? (
          <p id="err-name" className="mt-1.5 text-sm text-red-600">
            {state.errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
          placeholder="you@example.com"
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={state.errors?.email ? "err-email" : undefined}
        />
        {state.errors?.email ? (
          <p id="err-email" className="mt-1.5 text-sm text-red-600">
            {state.errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-enquiry" className={labelClass}>
          Enquiry type <span className="text-red-600">*</span>
        </label>
        <select
          id="contact-enquiry"
          name="enquiryType"
          required
          defaultValue=""
          className={fieldClass}
          aria-invalid={Boolean(state.errors?.enquiryType)}
          aria-describedby={
            state.errors?.enquiryType ? "err-enquiry" : undefined
          }
        >
          <option value="" disabled>
            Select an option
          </option>
          {enquiryOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {state.errors?.enquiryType ? (
          <p id="err-enquiry" className="mt-1.5 text-sm text-red-600">
            {state.errors.enquiryType}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y min-h-[120px]`}
          placeholder="Tell me briefly what you need help with—your level, timeline, and whether this is about mentorship, Academy, or something else."
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "err-message" : undefined}
        />
        {state.errors?.message ? (
          <p id="err-message" className="mt-1.5 text-sm text-red-600">
            {state.errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="navCta"
          className="w-full sm:w-auto"
          disabled={pending}
        >
          {pending ? "Sending…" : "Send message"}
        </Button>
        <p className="text-xs text-zinc-500">
          By submitting, you agree to be contacted by email regarding this
          enquiry.
        </p>
      </div>
    </form>
  );
}
