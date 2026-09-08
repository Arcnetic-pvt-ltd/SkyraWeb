import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { WHATSAPP_HREF } from "@/lib/nav";

/**
 * Floating WhatsApp link. Source: Figma node 1:610 — a standalone
 * "Floating WhatsApp link" section, not part of any page's normal flow,
 * so it's rendered fixed to the viewport corner (standard pattern for
 * this kind of persistent contact widget) rather than at a Figma-given
 * x/y, which the design doesn't specify for a floating element.
 */
export function WhatsAppWidget() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with an expert on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-xs font-bold text-white shadow-2xl transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="size-6" />
      Chat with an Expert
    </a>
  );
}
