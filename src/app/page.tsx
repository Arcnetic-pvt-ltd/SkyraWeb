import Link from "next/link";
import { QuotesCarousel } from "@/components/landing/quotes-carousel";
import { HeroMissionEngine } from "@/components/landing/hero-mission-engine";
import { HowItWorks } from "@/components/landing/how-it-works";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden relative">
      {/* 1. HERO SECTION */}
      <section className="relative z-10 min-h-[calc(100vh-5rem)] flex flex-col justify-between px-6 lg:px-8 pt-24 sm:pt-28 pb-12 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-1 sm:pt-2">
          {/* Left Column: Headline & CTAs (Paragraph removed per guide) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-technical-label text-[13px] text-forest-slate uppercase tracking-wider font-semibold">
                Rainwater Harvesting
              </span>
            </div>

            <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer tracking-tight leading-tight">
              Rainwater harvesting across India
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products/rainsink"
                className="inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[15px] px-6 py-3.5 min-h-[44px] rounded-[6px] transition-colors shadow-xs"
              >
                Explore Skyra Rainsink
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-muted-aquifer/30 bg-white text-deep-aquifer hover:bg-slate-50 font-medium text-[15px] px-6 py-3.5 min-h-[44px] rounded-[6px] transition-colors shadow-xs"
              >
                Book a site survey
              </Link>
            </div>
          </div>

          {/* Right Column: Engine Showcase Window */}
          <div className="lg:col-span-6 w-full">
            <HeroMissionEngine />
          </div>
        </div>

        {/* 2. TRUST SIGNALS BELOW HERO REMOVED PER GUIDE SPECIFICATION */}
      </section>

      {/* 3. HYDROLOGICAL REALITY SECTION (SEO-Focused, Minimal, Animated Element Commented Out) */}
      <section
        className="relative w-full bg-light-aquifer-canvas text-deep-aquifer py-16 sm:py-24 px-6 lg:px-8 border-t border-muted-aquifer/15"
        id="problem"
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <span className="font-technical-label text-[13px] text-forest-slate uppercase tracking-wider font-semibold">
            Regional Focus
          </span>
          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer leading-tight max-w-3xl">
            Providing Rainwater Harvesting across South India
          </h2>
          <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed max-w-2xl">
            Skyra designs and installs rainwater harvesting and groundwater recharge systems for homes, apartments, commercial facilities, and industrial campuses across Kerala and South India. Designed to IS 15797:2008 national standards.
          </p>

          {/* ANIMATED HYDROLOGY GRAPHIC visual COMMENTED OUT BELOW PER GUIDE SPECIFICATION:
          <div className="mt-8 flex justify-center">
            [Animated SVG element commented out per guide specification]
          </div>
          */}
        </div>
      </section>

      {/* 4. SUBTERRANEAN THESIS SECTION COMMENTED OUT PER GUIDE SPECIFICATION:
      <section className="relative w-full py-20 sm:py-28 px-6 lg:px-8 overflow-hidden border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <h2 className="font-headline-h2">We saw that runoff differently...</h2>
        </div>
      </section>
      */}

      {/* VOICES OF AUTHORITY QUOTES */}
      <QuotesCarousel />

      {/* 6. HOW SITE SURVEY WORKS SECTION (Replaces How Skyra Works) */}
      <HowItWorks />

      {/* 7. SIMPLE SECTORS SECTION (Replaces Tailored Engineering Section, using guide boxy card style) */}
      <section className="relative w-full bg-light-aquifer-canvas py-16 sm:py-24 px-6 lg:px-8 border-t border-muted-aquifer/15" id="sectors">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-technical-label text-[12px] text-forest-slate uppercase tracking-wider font-semibold">
              SECTORS WE SERVE
            </span>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer leading-tight">
              Sectors
            </h2>
            <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
              Tailored rainwater harvesting systems for every built environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs flex flex-col gap-3">
              <span className="font-technical-label text-xs font-semibold text-moss uppercase tracking-wider">
                Residential
              </span>
              <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer">
                Homes &amp; Villas
              </h3>
              <p className="font-body-sm text-sm text-deep-aquifer/75 leading-relaxed">
                Rooftop rainwater filters and well recharge systems for independent houses.
              </p>
            </div>

            <div className="rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs flex flex-col gap-3">
              <span className="font-technical-label text-xs font-semibold text-moss uppercase tracking-wider">
                Communities
              </span>
              <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer">
                Apartment Complexes
              </h3>
              <p className="font-body-sm text-sm text-deep-aquifer/75 leading-relaxed">
                High-capacity shared filtration vaults and deep recharge injection wells.
              </p>
            </div>

            <div className="rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs flex flex-col gap-3">
              <span className="font-technical-label text-xs font-semibold text-moss uppercase tracking-wider">
                Commercial
              </span>
              <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer">
                Factories &amp; IT Parks
              </h3>
              <p className="font-body-sm text-sm text-deep-aquifer/75 leading-relaxed">
                Skyra Rainsink percolator systems for industrial yard runoff and CGWA NOC compliance.
              </p>
            </div>

            <div className="rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs flex flex-col gap-3">
              <span className="font-technical-label text-xs font-semibold text-moss uppercase tracking-wider">
                Institutions
              </span>
              <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer">
                Campuses &amp; Schools
              </h3>
              <p className="font-body-sm text-sm text-deep-aquifer/75 leading-relaxed">
                Campus-wide stormwater percolation ponds and borewell recharge installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TAILORED ENGINEERING SECTION COMMENTED OUT PER GUIDE SPECIFICATION:
      <SectorCapabilities />
      */}

      {/* 8. IMPACT METRICS SECTION COMMENTED OUT PER GUIDE SPECIFICATION:
      <ImpactMetrics />
      */}

      {/* 9. CLOSING CTA SECTION (Buttons updated to guide style) */}
      <section className="py-20 sm:py-28 px-6 lg:px-8 max-w-5xl mx-auto w-full text-center flex flex-col items-center border-t border-muted-aquifer/15">
        <span className="font-technical-label text-[13px] text-forest-slate uppercase tracking-wider font-semibold mb-3">
          Book a site survey
        </span>

        <h2 className="font-headline-hero text-headline-h2-mobile sm:text-headline-hero text-deep-aquifer max-w-3xl leading-tight">
          Every roof is a chance to catch the rain. Let’s find yours.
        </h2>

        <p className="font-body-large text-body-large text-deep-aquifer/80 max-w-xl mt-5 leading-relaxed">
          We&apos;ll reply on WhatsApp within one working day. Written report and quote before any work starts.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[15px] px-8 py-3.5 min-h-[44px] rounded-[6px] transition-colors shadow-xs"
          >
            Book a site survey
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-muted-aquifer/30 bg-white text-deep-aquifer hover:bg-slate-50 font-medium text-[15px] px-8 py-3.5 min-h-[44px] rounded-[6px] transition-colors shadow-xs"
          >
            Explore solutions
          </Link>
        </div>

        <div className="mt-10 pt-6 flex items-center gap-2.5 text-deep-aquifer/65 text-sm">
          <span>
            Rajagiri Road, N. Kalamassery, Kerala
          </span>
        </div>
      </section>
    </div>
  );
}
