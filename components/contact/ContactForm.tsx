import { Button } from "@/components/ui/Button";
import { ds } from "@/lib/design-system";

// Replace YOUR_FORM_ID with your actual Formspree (or other provider) endpoint.
const FORM_ACTION = "https://formspree.io/f/YOUR_FORM_ID";

const enquiryOptions = [
  "General Enquiry",
  "Mentorship",
  "Academy",
  "Collaboration",
] as const;

const fieldClass = ds.formControl;
const labelClass = "text-sm font-medium text-zinc-800";

export function ContactForm() {
  return (
    <form
      action={FORM_ACTION}
      method="POST"
      className="space-y-6"
      noValidate
    >
      {/* Honeypot - leave empty */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Hidden subject for Formspree */}
      <input type="hidden" name="_subject" value="New enquiry from drsubhra.com" />

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
        />
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
        />
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
          placeholder="Tell me briefly what you need help with-your level, timeline, and whether this is about mentorship, Academy, or something else."
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="navCta"
          className="w-full sm:w-auto"
        >
          Send message
        </Button>
        <p className="text-xs text-zinc-500">
          By submitting, you agree to be contacted by email regarding this
          enquiry.
        </p>
      </div>
    </form>
  );
}
