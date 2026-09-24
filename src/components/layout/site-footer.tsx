import Link from "next/link";
import { CONTACT } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="w-full bg-deep-aquifer text-light-aquifer-canvas">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16">
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                alt="Skyra"
                className="h-6 w-auto object-contain brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida/AEtjO1ULa5YF2NIp1DsPv3B6b4VaSQvvJccBwTBI3M5fMsQ0OikZTVADVgNjLVbAgvf6bOH3wcRGamqNztK8qoW_Z1_2SCZF53QiOj90vlogVD8MuJtREpUSVRoSBZwCWaIXEBLSytnMbjRMtbnEqlxd3N8hgL5aSLfLNSO_n8B9vmz31CfP_tAxtN1sINSB9Mq5hNB4Wdegs1yx8hb3-f3z1hlO8N3wM0Uun10OUATnLAFbyyyfiMSrO2xq5n5Vr-B7Ws62984IwAFR5NM"
              />
              <span className="font-headline-h3 text-[18px] font-medium tracking-tight text-white">
                Skyra
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-light-aquifer-canvas/60 leading-relaxed max-w-sm">
              Pioneering closed-loop hydrology and ecological infrastructure across India. Quiet, regenerative systems built for generations.
            </p>
            <p className="font-body-sm text-[13px] text-light-aquifer-canvas/40">
              Kochi • Bengaluru • New Delhi
            </p>
          </div>
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-button-text text-[13px] text-white/90 font-medium tracking-normal">
              Solutions
            </span>
            <nav className="flex flex-col gap-3">
              <Link
                href="/services"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/60 hover:text-white transition-colors"
              >
                Rainwater Harvesting
              </Link>
              <Link
                href="/services"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/60 hover:text-white transition-colors"
              >
                Subterranean Infiltration
              </Link>
              <Link
                href="/services"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/60 hover:text-white transition-colors"
              >
                Aquifer Replenishment
              </Link>
              <Link
                href="/services"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/60 hover:text-white transition-colors"
              >
                Commercial Installations
              </Link>
            </nav>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="font-button-text text-[13px] text-white/90 font-medium tracking-normal">
              Company
            </span>
            <nav className="flex flex-col gap-3">
              <Link
                href="/about"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/60 hover:text-white transition-colors"
              >
                Our Philosophy
              </Link>
              <Link
                href="/about"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/60 hover:text-white transition-colors"
              >
                Impact &amp; Ecology
              </Link>
              <Link
                href="/contact"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/60 hover:text-white transition-colors"
              >
                Start a Conversation
              </Link>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-body-sm text-body-sm text-light-aquifer-canvas/60 hover:text-white transition-colors"
              >
                {CONTACT.email}
              </a>
            </nav>
          </div>
        </div>
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body-sm text-[13px] text-light-aquifer-canvas/40">
            © 2025 Skyra Infrastructure. Thoughtful engineering for India’s water future.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body-sm text-[13px] text-light-aquifer-canvas/40 hover:text-light-aquifer-canvas/80 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-body-sm text-[13px] text-light-aquifer-canvas/40 hover:text-light-aquifer-canvas/80 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

