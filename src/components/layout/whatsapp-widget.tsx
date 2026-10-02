import { WHATSAPP_HREF } from "@/lib/nav";

export function WhatsAppWidget() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#1D293B] text-white p-3 text-center border-t border-[#1D293B]/20">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-[15px] font-medium text-white no-underline"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}
