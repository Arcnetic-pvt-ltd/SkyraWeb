import { WHATSAPP_HREF } from "@/lib/nav";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        aria-label="Connect on WhatsApp"
        className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-[6px] bg-white text-deep-aquifer border border-muted-aquifer/20 hover:border-moss transition-all duration-300 group"
        href={WHATSAPP_HREF}
        rel="noopener noreferrer"
        target="_blank"
      >
        <WhatsAppIcon className="size-4 text-moss transition-transform" />
        <span className="font-button-text text-[13px] text-deep-aquifer font-medium tracking-tight group-hover:text-forest-slate transition-colors">
          WhatsApp
        </span>
        <span className="material-symbols-outlined text-[17px] text-moss group-hover:translate-x-0.5 transition-transform">
          arrow_forward
        </span>
      </a>
    </div>
  );
}

