import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactChannels } from "@/components/contact/contact-channels";
import { ConsultationForm } from "@/components/contact/consultation-form";
import { FinalCta } from "@/components/shared/final-cta";

export const metadata: Metadata = {
  title: "Contact | SkyRa",
  description:
    "Reach SkyRa's engineering team to schedule a site assessment, ask a question, or request a consultation — headquarters, phone, email, and WhatsApp.",
};

/**
 * Contact page. Source: the project's HTML reference build
 * (stitch_skyra_water_solutions_platform/contact_skyra_from_sky_to_life),
 * re-skinned onto the established SkyRa tokens/components (same rationale
 * as Services and About).
 *
 * Rule 6 (static UI only, no backend): the consultation form
 * (components/contact/consultation-form.tsx) validates required fields
 * client-side and shows a local success state, but its submit handler
 * does not send data anywhere — see the TODO comment there.
 */
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactChannels />
      <ConsultationForm />
      <FinalCta />
    </>
  );
}
