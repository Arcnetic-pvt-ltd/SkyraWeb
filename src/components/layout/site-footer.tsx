import Link from "next/link";
import { CONTACT, WHATSAPP_HREF } from "@/lib/nav";
import { SkyraLogo } from "@/components/layout/skyra-logo";

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#091522] text-light-aquifer-canvas border-t border-[#1e3959]/40 pt-12 pb-24 sm:pb-16">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/10">
          {/* Left Column: Logo & Physical Address */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="inline-block">
              <SkyraLogo
                variant="light"
                iconClass="h-6 w-6"
                textClass="font-headline-h3 text-[17px] font-semibold tracking-tight"
              />
            </Link>
            <p className="font-body-sm text-[15px] text-light-aquifer-canvas/80 leading-snug">
              {CONTACT.address}
            </p>
          </div>

          {/* Right Column: Contact options, Privacy policy, Current year */}
          <div className="flex flex-col md:items-end gap-3 text-[15px]">
            <div className="flex flex-wrap items-center gap-2 text-light-aquifer-canvas/90">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors font-medium"
              >
                WhatsApp
              </a>
              <span className="text-light-aquifer-canvas/40">·</span>
              <a
                href={`tel:${CONTACT.phone}`}
                className="hover:text-white transition-colors font-medium"
              >
                Phone
              </a>
              <span className="text-light-aquifer-canvas/40">·</span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-white transition-colors font-medium"
              >
                Email
              </a>
            </div>

            <div className="flex items-center gap-2 text-light-aquifer-canvas/70 text-[14px]">
              <Link href="/contact" className="hover:text-white transition-colors">
                Privacy policy
              </Link>
              <span className="text-light-aquifer-canvas/40">·</span>
              <span>© 2026 Skyra</span>
            </div>
          </div>
        </div>

        {/* Sub-Footer: Powered by Arcnetic */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-light-aquifer-canvas/50 text-center sm:text-left">
          <span>Rainwater harvesting and groundwater recharge across India</span>
          <span className="sm:pr-36 xl:pr-0">Powered by Arcnetic</span>
        </div>
      </div>
    </footer>
  );
}
