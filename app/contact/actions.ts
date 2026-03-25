"use server";

import { redirect } from "next/navigation";

export type ContactFormState = {
  message: string;
  errors?: Partial<
    Record<"name" | "email" | "enquiryType" | "message", string>
  >;
};

const ENQUIRY_VALUES = [
  "General Enquiry",
  "Mentorship",
  "Academy",
  "Collaboration",
] as const;

function isValidEnquiry(v: string): v is (typeof ENQUIRY_VALUES)[number] {
  return ENQUIRY_VALUES.includes(v as (typeof ENQUIRY_VALUES)[number]);
}

export const contactFormInitialState: ContactFormState = {
  message: "",
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot - leave empty
  const trap = String(formData.get("company") ?? "").trim();
  if (trap) {
    redirect("/contact?thanks=1");
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const enquiryType = String(formData.get("enquiryType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactFormState["errors"] = {};

  if (!name) errors.name = "Please enter your name.";
  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!enquiryType || !isValidEnquiry(enquiryType)) {
    errors.enquiryType = "Please select an enquiry type.";
  }
  if (!message) {
    errors.message = "Please enter a message.";
  } else if (message.length < 20) {
    errors.message = "Please add a bit more detail (at least 20 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return { message: "Please fix the errors below.", errors };
  }

  // Hook for email provider / CRM later (Resend, SendGrid, etc.)
  void { name, email, enquiryType, message };

  redirect("/contact?thanks=1");
}
