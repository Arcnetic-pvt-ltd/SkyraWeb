import type { Metadata } from "next";
import Link from "next/link";
import { HarvestingCalculator } from "@/components/services/harvesting-calculator";
import { ProductCatalogCarousel } from "@/components/services/product-catalog-carousel";

export const metadata: Metadata = {
  title: "Solutions · Skyra",
  description:
    "Three natural, engineering-grade approaches to catching, filtering, and storing water where it falls: Rainwater Harvesting, Stormwater Management, and Afforestation.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Section: Editorial Header */}
      <section className="w-full max-w-5xl mx-auto px-6 lg:px-8 pt-28 pb-14 md:pt-32 md:pb-20">
        <div className="max-w-3xl flex flex-col gap-5">
          <span className="inline-flex items-center gap-2 font-technical-label text-[13px] uppercase tracking-wider text-forest-slate font-semibold">
            <span className="w-2 h-2 rounded-full bg-moss"></span>
            Systems &amp; architecture
          </span>
          <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer tracking-tight">
            Core water management solutions
          </h1>
          <p className="font-body-large text-body-large text-deep-aquifer/85 leading-relaxed max-w-2xl">
            Three natural, engineering-grade approaches to catching, filtering, and storing water where it falls.
          </p>
        </div>
      </section>

      {/* Service 1: Site-Specific Rainwater Harvesting */}
      <section className="w-full bg-light-aquifer-canvas py-16 md:py-24 border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-body-sm text-moss font-semibold">01</span>
                <span className="w-8 h-px bg-muted-aquifer/30"></span>
                <span className="font-mono text-body-sm text-deep-aquifer/60">Decentralized Storage</span>
              </div>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Site-specific rainwater harvesting
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
                We design your property to catch its own water &mdash; filtered, stored, and ready to use &mdash; so you rely a little less on the tanker or the municipal line, and the ground beneath you gets a little healthier every monsoon.
              </p>
              <div className="pt-2 flex flex-col gap-3 font-mono text-body-sm text-deep-aquifer/75">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[20px] text-moss">check_circle</span>
                  <span className="text-deep-aquifer/90 font-medium">Zero-loss gravity filtration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[20px] text-moss">check_circle</span>
                  <span className="text-deep-aquifer/90 font-medium">Potable-grade cistern storage</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?service=rainwater-harvesting"
                  className="inline-flex items-center gap-2 bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[15px] px-6 py-3 rounded-[6px] transition-colors shadow-xs"
                >
                  Book a site survey
                </Link>
                <Link
                  href="/contact?query=rainwater-harvesting"
                  className="inline-flex items-center gap-1.5 border border-muted-aquifer/30 text-deep-aquifer hover:bg-slate-100 font-medium text-[15px] px-5 py-3 rounded-[6px] transition-colors"
                >
                  Send query
                </Link>
              </div>
            </div>

            {/* SVG Line Illustration */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-2xl bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgb(29,41,59,0.04)] border border-muted-aquifer/15 relative overflow-hidden">
                <svg className="w-full h-80 select-none" fill="none" viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 60 40 Q 90 20 120 40 Q 150 20 180 40" fill="none" stroke="#748D8C" strokeLinecap="round" strokeOpacity="0.3" strokeWidth="1.5" />
                  <path d="M 280 45 Q 310 30 340 45 Q 360 30 380 45" fill="none" stroke="#748D8C" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="1.5" />
                  <g className="rain-drops" stroke="#7D9D3D" strokeLinecap="round" strokeWidth="1.5">
                    <line opacity="0.6" strokeDasharray="2 4" x1="140" x2="135" y1="50" y2="65" />
                    <line opacity="0.8" strokeDasharray="2 4" x1="180" x2="175" y1="55" y2="70" />
                    <line opacity="0.5" strokeDasharray="2 4" x1="220" x2="215" y1="48" y2="63" />
                    <line opacity="0.7" strokeDasharray="2 4" x1="260" x2="255" y1="52" y2="67" />
                  </g>
                  <path d="M 90 95 L 290 55 L 290 70 L 90 110 Z" fill="#1D293B" opacity="0.06" />
                  <path d="M 85 95 L 295 53" stroke="#1D293B" strokeLinecap="round" strokeWidth="2.5" />
                  <path d="M 295 53 L 305 60 L 305 130" fill="none" stroke="#1D293B" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M 305 130 C 305 155 270 160 270 180 L 270 215" fill="none" stroke="#748D8C" strokeDasharray="4 3" strokeWidth="2" />
                  <line stroke="#748D8C" strokeOpacity="0.35" strokeWidth="1.5" x1="30" x2="430" y1="185" y2="185" />
                  <text fill="#748D8C" fontFamily="Space Mono" fontSize="10" letterSpacing="0.05em" x="35" y="175">SURFACE DATUM 0.00m</text>
                  <rect fill="#F8FCFE" height="85" rx="6" stroke="#748D8C" strokeWidth="1.5" width="180" x="180" y="215" />
                  <clipPath id="reservoirClip">
                    <rect height="83" rx="5" width="178" x="181" y="216" />
                  </clipPath>
                  <g clipPath="url(#reservoirClip)">
                    <rect fill="#cde8e6" height="55" opacity="0.45" width="180" x="180" y="245" />
                    <path d="M 180 245 C 210 242, 230 248, 260 245 C 290 242, 320 248, 360 245 L 360 300 L 180 300 Z" fill="#7D9D3D" fillOpacity="0.25">
                      <animate attributeName="d" dur="6s" repeatCount="indefinite" values="
                        M 180 245 C 210 242, 230 248, 260 245 C 290 242, 320 248, 360 245 L 360 300 L 180 300 Z;
                        M 180 246 C 210 248, 240 243, 270 246 C 300 249, 330 243, 360 246 L 360 300 L 180 300 Z;
                        M 180 245 C 210 242, 230 248, 260 245 C 290 242, 320 248, 360 245 L 360 300 L 180 300 Z
                      " />
                    </path>
                    <circle cx="270" cy="245" fill="#7D9D3D" opacity="0.7" r="3">
                      <animate attributeName="r" dur="3s" repeatCount="indefinite" values="2;8;2" />
                      <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.7;0;0.7" />
                    </circle>
                  </g>
                  <path d="M 270 200 L 270 220" stroke="#7D9D3D" strokeLinecap="round" strokeWidth="2" />
                  <polygon fill="#7D9D3D" points="266,216 270,224 274,216" />
                  <text fill="#1D293B" fontFamily="Space Mono" fontSize="11" fontWeight="600" x="195" y="275">CLEAN STORAGE</text>
                  <text fill="#748D8C" fontFamily="Space Mono" fontSize="9" x="195" y="289">IN-LINE POLISHING 0.2µm</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Stormwater Management Solutions */}
      <section className="w-full bg-surface-container-low py-20 md:py-28 border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* SVG Graphic */}
            <div className="lg:col-span-6 order-last lg:order-first">
              <div className="w-full rounded-2xl bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgb(29,41,59,0.04)] border border-muted-aquifer/15 relative overflow-hidden">
                <svg className="w-full h-80 select-none" fill="none" viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg">
                  <rect fill="#1D293B" height="24" opacity="0.12" rx="3" width="170" x="30" y="70" />
                  <text fill="#1D293B" fontFamily="Space Mono" fontSize="10" fontWeight="600" x="40" y="86">IMPERVIOUS RUNOFF</text>
                  <path d="M 120 94 C 120 140 210 145 230 180 C 240 200 240 225 240 245" fill="none" stroke="#445F44" strokeLinecap="round" strokeWidth="3" />
                  <path d="M 135 94 C 135 130 225 135 245 170 C 255 190 255 215 255 245" fill="none" stroke="#7D9D3D" strokeDasharray="6 4" strokeLinecap="round" strokeWidth="2.5">
                    <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="40;0" />
                  </path>
                  <path d="M 170 120 L 220 120" opacity="0.6" stroke="#ba1a1a" strokeDasharray="3 3" strokeWidth="2" />
                  <text fill="#748D8C" fontFamily="Space Mono" fontSize="9" x="160" y="112">PEAK ATTENUATION</text>
                  <g transform="translate(190, 220)">
                    <rect fill="#def9f7" height="65" rx="4" stroke="#748D8C" strokeWidth="1.2" width="55" x="15" y="10" />
                    <circle cx="42" cy="25" fill="#748D8C" r="2.5" />
                    <circle cx="32" cy="40" fill="#748D8C" r="2.5" />
                    <circle cx="52" cy="40" fill="#748D8C" r="2.5" />
                    <circle cx="42" cy="55" fill="#748D8C" r="2.5" />
                    <rect fill="#def9f7" height="65" rx="4" stroke="#748D8C" strokeWidth="1.2" width="55" x="80" y="10" />
                    <circle cx="107" cy="25" fill="#748D8C" r="2.5" />
                    <circle cx="97" cy="40" fill="#748D8C" r="2.5" />
                    <circle cx="117" cy="40" fill="#748D8C" r="2.5" />
                    <circle cx="107" cy="55" fill="#748D8C" r="2.5" />
                    <path d="M 42 77 L 42 87" stroke="#7D9D3D" strokeLinecap="round" strokeWidth="2" />
                    <path d="M 107 77 L 107 87" stroke="#7D9D3D" strokeLinecap="round" strokeWidth="2" />
                  </g>
                  <path d="M 30 295 Q 120 285 240 295 T 430 290" stroke="#748D8C" strokeDasharray="2 3" strokeOpacity="0.4" strokeWidth="1.5" />
                  <text fill="#7D9D3D" fontFamily="Space Mono" fontSize="10" fontWeight="700" x="320" y="280">DEEP RECHARGE ZONE</text>
                </svg>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-body-sm text-moss font-semibold">02</span>
                <span className="w-8 h-px bg-muted-aquifer/30"></span>
                <span className="font-mono text-body-sm text-deep-aquifer/60">Surface Hydraulics</span>
              </div>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Stormwater management solutions
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
                When the rain comes hard and fast, we make sure it has somewhere good to go &mdash; routed safely away from your building, and guided toward the aquifers that need it, instead of flooding the street.
              </p>
              <div className="pt-2 flex flex-col gap-3 font-mono text-body-sm text-deep-aquifer/70">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[20px] text-moss">grain</span>
                  <span className="text-deep-aquifer/90 font-medium">Subsurface attenuation crates</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[20px] text-moss">water</span>
                  <span className="text-deep-aquifer/90 font-medium">Bio-swale retention design</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?service=stormwater-management"
                  className="inline-flex items-center gap-2 bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-medium text-[15px] px-6 py-3 rounded-[6px] transition-colors shadow-xs"
                >
                  Book a site survey
                </Link>
                <Link
                  href="/contact?query=stormwater-management"
                  className="inline-flex items-center gap-1.5 border border-muted-aquifer/30 text-deep-aquifer hover:bg-slate-100 font-medium text-[15px] px-5 py-3 rounded-[6px] transition-colors"
                >
                  Send query
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Afforestation & Miyawaki Forests */}
      <section className="w-full bg-[#F1F7F9] text-deep-aquifer py-20 md:py-28 border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-body-sm text-moss font-semibold">03</span>
                <span className="w-8 h-px bg-muted-aquifer/30"></span>
                <span className="font-mono text-body-sm text-deep-aquifer/60">Bio-Hydrological Sponge</span>
              </div>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Afforestation &amp; Miyawaki forests
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer/85 leading-relaxed">
                On land that’s gone bare, we bring back dense, native forest &mdash; the kind that heals soil, holds water, and quietly pulls carbon from the air. It’s slow work that pays off for decades.
              </p>
              <div className="pt-2 flex flex-col gap-3 font-mono text-body-sm text-deep-aquifer/70">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[20px] text-moss">forest</span>
                  <span className="text-deep-aquifer/90 font-medium">30x multi-tier canopy density</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[20px] text-moss">yard</span>
                  <span className="text-deep-aquifer/90 font-medium">High-speed organic root penetration</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?service=afforestation"
                  className="inline-flex items-center gap-2 bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-medium text-[15px] px-6 py-3 rounded-[6px] transition-colors shadow-xs"
                >
                  Book a site survey
                </Link>
                <Link
                  href="/contact?query=afforestation"
                  className="inline-flex items-center gap-1.5 border border-muted-aquifer/30 text-deep-aquifer hover:bg-white font-medium text-[15px] px-5 py-3 rounded-[6px] transition-colors"
                >
                  Send query
                </Link>
              </div>
            </div>

            {/* SVG Organic Root Network */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-[4px] bg-white p-6 sm:p-8 border border-muted-aquifer/20 shadow-xs relative overflow-hidden">
                <svg className="w-full h-80 select-none" fill="none" viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="160" cy="85" fill="#7D9D3D" opacity="0.35" r="42" />
                  <circle cx="215" cy="70" fill="#7D9D3D" opacity="0.5" r="54" />
                  <circle cx="270" cy="88" fill="#7D9D3D" opacity="0.38" r="44" />
                  <circle cx="320" cy="98" fill="#7D9D3D" opacity="0.25" r="32" />

                  <path d="M 215 124 L 215 175" stroke="#1D293B" strokeLinecap="round" strokeWidth="3" />
                  <path d="M 160 127 L 165 175" opacity="0.8" stroke="#1D293B" strokeLinecap="round" strokeWidth="2" />
                  <path d="M 270 132 L 265 175" opacity="0.8" stroke="#1D293B" strokeLinecap="round" strokeWidth="2" />

                  <rect fill="#7D9D3D" height="4" opacity="0.6" width="380" x="40" y="174" />
                  <text fill="#7D9D3D" fontFamily="Space Mono" fontSize="10" letterSpacing="0.05em" x="45" y="167">ORGANIC SPONGE LAYER</text>

                  <g fill="none" stroke="#7D9D3D" strokeLinecap="round">
                    <path d="M 215 178 C 215 210 200 240 205 285" opacity="0.9" strokeWidth="2.5" />
                    <path d="M 215 205 C 235 225 255 245 260 275" opacity="0.75" strokeWidth="1.8" />
                    <path d="M 205 240 C 185 260 175 280 170 305" opacity="0.7" strokeWidth="1.5" />
                    <path d="M 165 178 C 165 205 140 230 130 265" opacity="0.7" strokeWidth="1.8" />
                    <path d="M 148 215 C 130 230 115 250 105 280" opacity="0.5" strokeWidth="1.2" />
                    <path d="M 265 178 C 265 210 295 240 310 270" opacity="0.7" strokeWidth="1.8" />
                    <path d="M 285 225 C 310 245 330 270 345 295" opacity="0.5" strokeWidth="1.2" />
                  </g>

                  <circle cx="205" cy="285" fill="#7D9D3D" r="4" />
                  <circle cx="260" cy="275" fill="#7D9D3D" r="3" />
                  <circle cx="130" cy="265" fill="#7D9D3D" r="3" />
                  <text fill="#1D293B" fontFamily="Space Mono" fontSize="9" opacity="0.5" x="320" y="240">IN SITU CARBON SINK</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rainwater Harvesting Potential Estimate Calculator */}
      <HarvestingCalculator />

      {/* Section 4: Product Integrations Catalog */}
      <section className="w-full bg-light-aquifer-canvas py-20 md:py-28 border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <span className="font-technical-label text-body-sm text-moss font-semibold uppercase tracking-wider block mb-3">
              Hardware &amp; infrastructure
            </span>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight mb-4">
              Dedicated product integrations
            </h2>
            <p className="font-body-large text-body-large text-muted-aquifer leading-relaxed">
              Some jobs call for a complete system. Others just need the right piece. Our product range works both ways — as standalone tools, or built into a larger Skyra Rainsink system.
            </p>
          </div>

          <ProductCatalogCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-white border-t border-muted-aquifer/15">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <span className="font-technical-label text-body-sm uppercase tracking-wider text-moss font-semibold">
            Consultation &amp; site assessment
          </span>
          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
            Have a specific property or watershed in mind?
          </h2>
          <p className="font-body-large text-body-large text-muted-aquifer max-w-xl">
            We walk the land, study the soil hydrology, and prepare a frank, transparent feasibility analysis before any work begins.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-medium text-[15px] px-8 py-3.5 rounded-[6px] transition-colors shadow-xs"
            >
              Book a site survey
            </Link>
            <Link
              href="/about"
              className="font-button-text text-button-text text-deep-aquifer hover:text-moss px-6 py-3.5 transition-colors flex items-center gap-1.5"
            >
              <span>Read our engineering manifesto</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

