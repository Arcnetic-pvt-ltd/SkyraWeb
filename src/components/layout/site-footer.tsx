import Link from "next/link";
import { CONTACT } from "@/lib/nav";
import { SkyraLogo } from "@/components/layout/skyra-logo";

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#091522] text-light-aquifer-canvas border-t border-[#1e3959]/40">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-3.5">
            <SkyraLogo
              variant="light"
              iconClass="h-6 w-6"
              textClass="font-headline-h3 text-[17px] font-semibold tracking-tight"
            />
            <p className="font-body-primary text-sm text-light-aquifer-canvas/70 leading-relaxed max-w-sm">
              Pioneering closed-loop hydrology and ecological infrastructure across India. Quiet, regenerative systems built for generations.
            </p>
            <p className="font-mono text-xs text-light-aquifer-canvas/45 tracking-wide">
              Kochi &bull; Bengaluru &bull; Hyderabad
            </p>
          </div>

          {/* Solutions Column */}
          <div className="md:col-span-3 lg:col-span-3 lg:col-start-7 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#86b5db] font-medium">
              Solutions
            </span>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/services"
                className="font-body-sm text-sm text-light-aquifer-canvas/65 hover:text-white transition-colors"
              >
                Rainwater harvesting
              </Link>
              <Link
                href="/services"
                className="font-body-sm text-sm text-light-aquifer-canvas/65 hover:text-white transition-colors"
              >
                Subterranean infiltration
              </Link>
              <Link
                href="/services"
                className="font-body-sm text-sm text-light-aquifer-canvas/65 hover:text-white transition-colors"
              >
                Aquifer replenishment
              </Link>
              <Link
                href="/products/rainsink"
                className="font-body-sm text-sm text-light-aquifer-canvas/65 hover:text-white transition-colors"
              >
                Skyra Rainsink
              </Link>
            </nav>
          </div>

          {/* Company Column */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#86b5db] font-medium">
              Company
            </span>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/about"
                className="font-body-sm text-sm text-light-aquifer-canvas/65 hover:text-white transition-colors"
              >
                Our philosophy
              </Link>
              <Link
                href="/about"
                className="font-body-sm text-sm text-light-aquifer-canvas/65 hover:text-white transition-colors"
              >
                Impact &amp; ecology
              </Link>
              <Link
                href="/contact"
                className="font-body-sm text-sm text-light-aquifer-canvas/65 hover:text-white transition-colors"
              >
                Start a conversation
              </Link>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-body-sm text-sm text-light-aquifer-canvas/65 hover:text-white transition-colors font-mono"
              >
                {CONTACT.email}
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar: Unified Minimal Row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-body-sm text-light-aquifer-canvas/50">
          <p>
            &copy; 2026 - 2027 Skyra Infrastructure. Thoughtful engineering for India’s water future.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-light-aquifer-canvas/80 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-light-aquifer-canvas/80 transition-colors">
                Terms
              </a>
            </div>

            <span className="hidden sm:inline-block text-white/20">&bull;</span>

            <span className="text-[11px] text-light-aquifer-canvas/45">
              Technology partner &bull; Powered by{" "}
              <span className="font-medium text-white/80 hover:text-moss transition-colors">
                Arcnetic
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

