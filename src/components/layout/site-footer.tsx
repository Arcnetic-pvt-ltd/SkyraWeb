import Link from "next/link";
import { CONTACT } from "@/lib/nav";
import { SkyraLogo } from "@/components/layout/skyra-logo";

export function SiteFooter() {
  return (
    <footer className="w-full bg-deep-aquifer text-light-aquifer-canvas">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16">
          <div className="md:col-span-5 flex flex-col gap-5">
            <SkyraLogo variant="light" iconClass="h-7 w-7" textClass="font-headline-h3 text-[18px] font-medium tracking-tight" />
            <p className="font-body-sm text-body-sm text-light-aquifer-canvas/60 leading-relaxed max-w-sm">
              Pioneering closed-loop hydrology and ecological infrastructure across India. Quiet, regenerative systems built for generations.
            </p>
            <p className="font-body-sm text-[13px] text-light-aquifer-canvas/40">
              Kochi • Bengaluru • Hyderabad
            </p>
          </div>
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-button-text text-[13px] text-white/90 font-medium tracking-normal">
              Solutions
            </span>
            <nav className="flex flex-col gap-3">
              <Link
                href="/services"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/70 hover:text-white transition-colors"
              >
                Rainwater harvesting
              </Link>
              <Link
                href="/services"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/70 hover:text-white transition-colors"
              >
                Subterranean infiltration
              </Link>
              <Link
                href="/services"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/70 hover:text-white transition-colors"
              >
                Aquifer replenishment
              </Link>
              <Link
                href="/services"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/70 hover:text-white transition-colors"
              >
                Skyra Rainsink
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
                className="font-body-sm text-body-sm text-light-aquifer-canvas/70 hover:text-white transition-colors"
              >
                Our philosophy
              </Link>
              <Link
                href="/about"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/70 hover:text-white transition-colors"
              >
                Impact &amp; ecology
              </Link>
              <Link
                href="/contact"
                className="font-body-sm text-body-sm text-light-aquifer-canvas/70 hover:text-white transition-colors"
              >
                Start a conversation
              </Link>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-body-sm text-body-sm text-light-aquifer-canvas/70 hover:text-white transition-colors"
              >
                {CONTACT.email}
              </a>
            </nav>
          </div>
        </div>
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body-sm text-[13px] text-light-aquifer-canvas/50">
            © 2026 - 2027 Skyra Infrastructure. Thoughtful engineering for India’s water future.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body-sm text-[13px] text-light-aquifer-canvas/50 hover:text-light-aquifer-canvas/80 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-body-sm text-[13px] text-light-aquifer-canvas/50 hover:text-light-aquifer-canvas/80 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* Thin Sub-Footer Strip: Powered by Arcnetic */}
      <div className="w-full border-t border-white/10 bg-slate-950/40 py-3.5 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span className="font-mono text-xs font-medium tracking-wide text-light-aquifer-canvas/50">
            Technology partner
          </span>
          <span className="font-body-sm text-[12px] text-light-aquifer-canvas/50">
            Powered by{" "}
            <span className="font-semibold text-white/90 hover:text-moss transition-colors">
              Arcnetic
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}

