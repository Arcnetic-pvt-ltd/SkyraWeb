import { WHATSAPP_HREF } from "@/lib/nav";

export function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="absolute -inset-1 rounded-full bg-moss/25 blur-sm animate-pulse"></div>
      <a
        aria-label="Connect on WhatsApp"
        className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-white text-deep-aquifer shadow-[0_12px_32px_rgba(29,41,59,0.12)] border border-muted-aquifer/15 hover:shadow-[0_16px_36px_rgba(125,157,61,0.25)] hover:border-moss/40 transition-all duration-300 group"
        href={WHATSAPP_HREF}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moss opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-moss"></span>
        </span>
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

