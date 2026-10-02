import Link from "next/link";
import { CONTACT, WHATSAPP_HREF } from "@/lib/nav";
import { SkyraLogo } from "@/components/layout/skyra-logo";

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#F4F7F6] border-t border-[#1D293B]/10 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Column: Logo & Address */}
        <div className="flex flex-col gap-2">
          <SkyraLogo />
          <p className="text-[14px] text-[#1D293B]/80 margin-0">
            {CONTACT.address}
          </p>
        </div>

        {/* Right Column: Contact Links & Privacy */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-[14px]">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1D293B] hover:text-[#445F44] no-underline font-medium"
          >
            WhatsApp
          </a>
          <span className="hidden sm:inline text-[#1D293B]/30">·</span>
          <a
            href={`tel:${CONTACT.phone}`}
            className="text-[#1D293B] hover:text-[#445F44] no-underline font-medium"
          >
            {CONTACT.phoneDisplay}
          </a>
          <span className="hidden sm:inline text-[#1D293B]/30">·</span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-[#1D293B] hover:text-[#445F44] no-underline font-medium"
          >
            {CONTACT.email}
          </a>
          <span className="hidden sm:inline text-[#1D293B]/30">·</span>
          <Link
            href="/contact"
            className="text-[#1D293B] hover:text-[#445F44] no-underline font-medium"
          >
            Privacy policy
          </Link>
          <span className="hidden sm:inline text-[#1D293B]/30">·</span>
          <span className="text-[#1D293B]/70 font-normal">
            © 2026 Skyra
          </span>
        </div>
      </div>
    </footer>
  );
}
