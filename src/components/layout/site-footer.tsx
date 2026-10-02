import Link from "next/link";
import { CONTACT, WHATSAPP_HREF } from "@/lib/nav";
import { SkyraLogo } from "@/components/layout/skyra-logo";

export function SiteFooter() {
  return (
    <footer className="w-full bg-light-aquifer-canvas border-t border-muted-aquifer/15 text-deep-aquifer py-12 lg:py-16">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-muted-aquifer/15">
          {/* Left Column: Logo & Physical Address */}
          <div className="flex flex-col gap-3">
            <SkyraLogo className="text-deep-aquifer" />
            <p className="font-body-sm text-[15px] text-deep-aquifer/80 leading-snug">
              {CONTACT.address}
            </p>
          </div>

          {/* Right Column: Contact options, Privacy policy, Current year */}
          <div className="flex flex-col md:items-end gap-3 text-[15px]">
            <div className="flex flex-wrap items-center gap-2 text-deep-aquifer/90">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-forest-slate transition-colors font-medium"
              >
                WhatsApp
              </a>
              <span>·</span>
              <a
                href={`tel:${CONTACT.phone}`}
                className="hover:text-forest-slate transition-colors font-medium"
              >
                Phone
              </a>
              <span>·</span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-forest-slate transition-colors font-medium"
              >
                Email
              </a>
            </div>

            <div className="flex items-center gap-4 text-deep-aquifer/70 text-[14px]">
              <Link href="/contact" className="hover:text-deep-aquifer transition-colors">
                Privacy policy
              </Link>
              <span>·</span>
              <span>© 2026 Skyra</span>
            </div>
          </div>
        </div>

        {/* Sub-Footer: Powered by Arcnetic */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] text-deep-aquifer/50">
          <span>Rainwater harvesting and groundwater recharge across India</span>
          <span>Powered by Arcnetic</span>
        </div>
      </div>
    </footer>
  );
}

