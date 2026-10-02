import { WHATSAPP_HREF } from "@/lib/nav";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function WhatsAppWidget() {
  return (
    <div className="fixed bottom-0 sm:bottom-6 inset-x-0 sm:inset-auto sm:right-6 z-40 p-3 sm:p-0 bg-white/95 sm:bg-transparent border-t sm:border-t-0 border-muted-aquifer/20">
      <a
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-[6px] bg-deep-aquifer hover:bg-forest-slate text-white border border-muted-aquifer/20 transition-colors shadow-xs w-full sm:w-auto"
        href={WHATSAPP_HREF}
        rel="noopener noreferrer"
        target="_blank"
      >
        <WhatsAppIcon className="size-4 text-moss" />
        <span className="text-[14px] font-medium">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

