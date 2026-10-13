"use server";

import { Resend } from "resend";
import {
  normalizePhone,
  validateConsultation,
  type ConsultationErrors,
} from "@/lib/contact-validation";

export type ConsultationInput = {
  fullName: string;
  whatsAppNumber: string;
  propertyLocation: string;
  /** Honeypot: real users never fill this in. */
  website?: string;
};

export type ConsultationResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: ConsultationErrors };

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function submitConsultation(
  input: ConsultationInput,
): Promise<ConsultationResult> {
  // Bots fill the hidden field; pretend success so they don't retry.
  if (input.website) return { ok: true };

  const fullName = String(input.fullName ?? "").trim();
  const location = String(input.propertyLocation ?? "").trim();
  const rawPhone = String(input.whatsAppNumber ?? "").trim();

  const fieldErrors = validateConsultation({
    fullName,
    whatsAppNumber: rawPhone,
    propertyLocation: location,
  });
  const phone = normalizePhone(rawPhone);
  if (Object.keys(fieldErrors).length > 0 || !phone) {
    return {
      ok: false,
      error: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Contact form: missing RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL");
    return { ok: false, error: "Something went wrong. Please try again later." };
  }

  const waLink = `https://wa.me/${phone.slice(1)}`;
  const { error } = await new Resend(apiKey).emails.send({
    from,
    to,
    subject: `Site survey request: ${fullName}, ${location}`,
    text: `Name: ${fullName}\nWhatsApp: ${phone}\nLocation: ${location}\n\nReply: ${waLink}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
<p><strong>WhatsApp:</strong> ${escapeHtml(phone)}</p>
<p><strong>Location:</strong> ${escapeHtml(location)}</p>
<p><a href="${waLink}">Reply on WhatsApp</a></p>`,
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return { ok: false, error: "Something went wrong. Please try again later." };
  }
  return { ok: true };
}
