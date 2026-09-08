/**
 * Primary navigation, shared by the header and footer. Source: Figma
 * "Desktop Navigation Links (Strictly 4 links)" (node 1:596) and the
 * footer's matching link row (node 1:569) — both explicitly named as a
 * strict 4-link set, so this list is intentionally not extended.
 */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** SkyRa's WhatsApp Business number, from the Final CTA section's "Direct
 * Advisory" contact details (+91 98765 43210) and confirmed against the
 * site's own HTML reference build. */
export const WHATSAPP_HREF = "https://wa.me/919876543210";

/** Direct contact details, source: Final CTA "Physical Location & Contact
 * Micro-details" card. */
export const CONTACT = {
  address: "Rajagiri road, n Kalamassery, near Kalamassery Metro station, Kerala, India.",
  email: "hello@skyra.eco",
  phoneDisplay: "+91 98765 43210",
} as const;
