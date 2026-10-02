import Link from "next/link";
import { QuotesCarousel } from "@/components/landing/quotes-carousel";
import { HeroMissionEngine } from "@/components/landing/hero-mission-engine";
import { IndiaMapGraphic } from "@/components/landing/india-map-graphic";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ImpactMetrics } from "@/components/landing/impact-metrics";
import { SectorCapabilities } from "@/components/services/sector-capabilities";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden relative">
      {/* SECTION 1: HERO */}
      <section className="relative z-10 min-h-[calc(100vh-5rem)] flex flex-col justify-between px-6 lg:px-8 pt-24 sm:pt-28 pb-8 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-1 sm:pt-2">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-technical-label text-[13px] text-forest-slate uppercase tracking-wider font-semibold">
                Rainwater harvesting &middot; Groundwater recharge
              </span>
            </div>

            <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer tracking-tight leading-tight">
              Rainwater harvesting and groundwater recharge across India
            </h1>

            <p className="font-body-large text-body-large text-deep-aquifer/85 mt-4 sm:mt-5 leading-relaxed max-w-prose">
              Featuring <strong>Skyra Rainsink</strong> &mdash; our high-capacity rain percolator unit. Engineered for logistics hubs, factories, IT parks, and institutions to eliminate yard flooding, guarantee statutory CGWA NOC compliance, and reach water neutrality.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/products/rainsink"
                className="inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[15px] px-6 py-3 rounded-[6px] transition-colors shadow-xs"
              >
                Explore Skyra Rainsink
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-muted-aquifer/30 text-deep-aquifer hover:bg-slate-100 font-medium text-[15px] px-6 py-3 rounded-[6px] transition-colors"
              >
                Book a site survey
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Hydrological Mission Engine Window */}
          <div className="lg:col-span-6 w-full">
            <HeroMissionEngine />
          </div>
        </div>

        {/* Telemetry Metric Chip */}
        <div className="mt-8 sm:mt-10 pt-4 flex items-center justify-between flex-wrap gap-6 border-t border-muted-aquifer/15">
          <div className="inline-flex items-center gap-4 py-3 px-5 rounded-[6px] bg-white border border-muted-aquifer/20">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-moss"></span>
            <div className="flex items-baseline gap-2">
              <span className="font-metric-mono-lg text-metric-mono-lg text-deep-aquifer tracking-tight">
                1.8B
              </span>
              <span className="font-body-sm text-body-sm text-deep-aquifer/80 font-medium">
                Liters harvested &amp; recharged (Skyra survey data 2025)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 text-deep-aquifer/70">
            <span className="font-body-sm text-body-sm font-medium">Kochi</span>
            <span className="w-1 h-1 rounded-full bg-deep-aquifer/30"></span>
            <span className="font-body-sm text-body-sm font-medium">Bengaluru</span>
            <span className="w-1 h-1 rounded-full bg-deep-aquifer/30"></span>
            <span className="font-body-sm text-body-sm font-medium">Hyderabad</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CORE PROBLEM */}
      <section
        className="relative w-full bg-light-aquifer-canvas text-deep-aquifer py-20 sm:py-28 px-6 lg:px-8 border-t border-muted-aquifer/15"
        id="problem"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-technical-label text-[13px] text-forest-slate uppercase tracking-wider font-semibold">
              The monsoon challenge
            </span>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer leading-tight">
              Most of the rain that falls in India is lost within hours.
            </h2>
            <p className="font-body-large text-body-large text-deep-aquifer/85 leading-relaxed">
              Kerala receives an average of 3,100 mm of yearly rainfall (Kerala State Planning Board), yet across much of the country, a season of good rainfall runs straight off the surface — down drains, into rivers, out to sea — before the ground ever gets the chance to hold onto it.
            </p>
            <p className="font-body-primary text-body-primary text-deep-aquifer/75 leading-relaxed">
              Hard paving, rapid urbanization, and compacted topsoil transform natural bounty into destructive runoff. In moments where subterranean basins could be replenishing for dry seasons, billions of cubic meters are discarded within hours of touching soil. Designed to IS 15797:2008 standards, Skyra systems catch and recharge this water at the source.
            </p>
          </div>

          {/* Hydrology Graphic Visual */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="w-full max-w-lg aspect-square rounded-[4px] bg-white p-6 sm:p-10 flex flex-col justify-center items-center relative overflow-hidden border border-muted-aquifer/20 shadow-xs">
              <svg
                className="w-full h-full select-none"
                fill="none"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="runoffGlow" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#748D8C" stopOpacity="0.1" />
                    <stop offset="60%" stopColor="#748D8C" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#748D8C" stopOpacity="0" />
                  </linearGradient>
                  <radialGradient id="emeraldAura" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#7D9D3D" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#7D9D3D" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <path
                  d="M 20 180 Q 200 185 380 180"
                  opacity="0.4"
                  stroke="#748D8C"
                  strokeDasharray="3 3"
                  strokeWidth="1.5"
                />
                <text
                  fill="#748D8C"
                  fontFamily="Inter"
                  fontSize="11"
                  letterSpacing="0.05em"
                  opacity="0.6"
                  x="28"
                  y="172"
                >
                  SURFACE LAYER
                </text>

                <path
                  d="M 20 230 Q 180 235 380 225"
                  opacity="0.15"
                  stroke="#748D8C"
                  strokeWidth="1"
                />
                <path
                  d="M 20 280 Q 220 290 380 275"
                  opacity="0.2"
                  stroke="#748D8C"
                  strokeWidth="1"
                />
                <path
                  d="M 20 330 Q 190 325 380 335"
                  opacity="0.15"
                  stroke="#748D8C"
                  strokeWidth="1"
                />
                <text
                  fill="#7D9D3D"
                  fontFamily="Inter"
                  fontSize="11"
                  letterSpacing="0.05em"
                  opacity="0.7"
                  x="28"
                  y="365"
                >
                  DEEP AQUIFER HORIZON
                </text>

                <g opacity="0.75">
                  <circle cx="80" cy="90" fill="#cde8e6" r="3.5">
                    <animate
                      attributeName="cy"
                      dur="3.4s"
                      repeatCount="indefinite"
                      values="60;180;190"
                    />
                    <animate
                      attributeName="cx"
                      dur="3.4s"
                      repeatCount="indefinite"
                      values="80;80;10"
                    />
                    <animate
                      attributeName="opacity"
                      dur="3.4s"
                      repeatCount="indefinite"
                      values="0;0.9;0"
                    />
                  </circle>
                  <circle cx="130" cy="40" fill="#cde8e6" r="3">
                    <animate
                      attributeName="cy"
                      begin="0.8s"
                      dur="4.2s"
                      repeatCount="indefinite"
                      values="40;180;185"
                    />
                    <animate
                      attributeName="cx"
                      begin="0.8s"
                      dur="4.2s"
                      repeatCount="indefinite"
                      values="130;130;40"
                    />
                    <animate
                      attributeName="opacity"
                      begin="0.8s"
                      dur="4.2s"
                      repeatCount="indefinite"
                      values="0;0.8;0"
                    />
                  </circle>
                  <circle cx="280" cy="50" fill="#cde8e6" r="3.5">
                    <animate
                      attributeName="cy"
                      begin="0.3s"
                      dur="3.8s"
                      repeatCount="indefinite"
                      values="50;180;188"
                    />
                    <animate
                      attributeName="cx"
                      begin="0.3s"
                      dur="3.8s"
                      repeatCount="indefinite"
                      values="280;280;370"
                    />
                    <animate
                      attributeName="opacity"
                      begin="0.3s"
                      dur="3.8s"
                      repeatCount="indefinite"
                      values="0;0.85;0"
                    />
                  </circle>
                </g>

                <path
                  d="M 120 183 Q 60 186 20 190"
                  fill="none"
                  opacity="0.6"
                  stroke="url(#runoffGlow)"
                  strokeWidth="2"
                />
                <path
                  d="M 280 183 Q 330 186 380 189"
                  fill="none"
                  opacity="0.6"
                  stroke="url(#runoffGlow)"
                  strokeWidth="2"
                />

                <g>
                  <circle cx="200" cy="40" fill="#7D9D3D" r="5">
                    <animate
                      attributeName="cy"
                      dur="4.5s"
                      keyTimes="0;0.4;1"
                      repeatCount="indefinite"
                      values="40;180;320"
                    />
                    <animate
                      attributeName="r"
                      dur="4.5s"
                      keyTimes="0;0.4;1"
                      repeatCount="indefinite"
                      values="4;5.5;7"
                    />
                    <animate
                      attributeName="opacity"
                      dur="4.5s"
                      keyTimes="0;0.2;1"
                      repeatCount="indefinite"
                      values="0.2;1;0.9"
                    />
                  </circle>
                  <ellipse
                    cx="200"
                    cy="320"
                    fill="none"
                    rx="0"
                    ry="0"
                    stroke="#7D9D3D"
                    strokeWidth="1.5"
                  >
                    <animate
                      attributeName="rx"
                      begin="1.8s"
                      dur="4.5s"
                      repeatCount="indefinite"
                      values="0;85"
                    />
                    <animate
                      attributeName="ry"
                      begin="1.8s"
                      dur="4.5s"
                      repeatCount="indefinite"
                      values="0;28"
                    />
                    <animate
                      attributeName="opacity"
                      begin="1.8s"
                      dur="4.5s"
                      repeatCount="indefinite"
                      values="0.9;0"
                    />
                  </ellipse>
                  <circle cx="200" cy="320" fill="url(#emeraldAura)" r="45" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SKYRA OPPORTUNITY */}
      <section className="relative w-full py-20 sm:py-28 px-6 lg:px-8 overflow-hidden border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-moss"></span>
                <span className="font-technical-label text-[13px] text-forest-slate uppercase tracking-wider font-semibold">
                  Subterranean recharge approach
                </span>
              </div>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer leading-snug">
                We saw that runoff differently &mdash; not as water lost, but as water waiting to be caught.
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
                Skyra designs harvesting and recharge systems that catch rainfall where it falls, and put it back where it belongs &mdash; underground, where it lasts. We’re building this across South India today, with a vision for the whole country.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col justify-between rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs">
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-[4px] bg-slate-100 border border-muted-aquifer/20 flex items-center justify-center text-moss">
                      <span className="material-symbols-outlined text-[22px]">water_drop</span>
                    </div>
                    <div>
                      <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer tracking-tight mb-1.5">
                        Zero surface loss
                      </h3>
                      <p className="font-body-sm text-sm leading-relaxed text-deep-aquifer/75">
                        Gravity-fed infiltration shafts bypass high-evaporation ground levels directly into unconfined geological strata.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs">
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-[4px] bg-slate-100 border border-muted-aquifer/20 flex items-center justify-center text-forest-slate">
                      <span className="material-symbols-outlined text-[22px]">filter_alt</span>
                    </div>
                    <div>
                      <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer tracking-tight mb-1.5">
                        Natural clarification
                      </h3>
                      <p className="font-body-sm text-sm leading-relaxed text-deep-aquifer/75">
                        Multi-tiered biological and physical aggregate barriers purify monsoon downpours prior to bedrock entry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* India Deployment Map Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md p-6 rounded-[4px] bg-white border border-muted-aquifer/20 shadow-xs flex flex-col items-center relative">
                <div className="w-full flex items-center justify-between mb-4">
                  <span className="font-body-sm text-body-sm text-deep-aquifer/70 font-medium">
                    Deployment network
                  </span>
                  <span className="font-body-sm text-body-sm text-moss font-semibold">
                    Active across South India
                  </span>
                </div>

                <IndiaMapGraphic />

                <div className="w-full pt-4 mt-2 flex items-center justify-between text-deep-aquifer/75 border-t border-muted-aquifer/15">
                  <span className="font-body-sm text-body-sm">
                    Deep infiltration modules
                  </span>
                  <span className="font-metric-mono-lg text-[15px] font-bold text-deep-aquifer">
                    140+ SITES
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: VOICES OF AUTHORITY */}
      <QuotesCarousel />

      {/* SECTION: HOW SKYRA WORKS */}
      <HowItWorks />

      {/* SECTION: SECTOR CAPABILITIES */}
      <SectorCapabilities />

      {/* SECTION: IMPACT METRICS */}
      <ImpactMetrics />

      {/* SECTION 5: CLOSING CTA */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto w-full text-center flex flex-col items-center border-t border-muted-aquifer/15">
        <span className="font-technical-label text-[13px] text-forest-slate uppercase tracking-wider font-semibold mb-4">
          Begin the recharge cycle
        </span>

        <h2 className="font-headline-hero text-headline-h2-mobile sm:text-headline-hero text-deep-aquifer max-w-3xl leading-tight">
          Every roof, every courtyard, every open plot is a chance to catch the rain. Let’s find yours.
        </h2>

        <p className="font-body-large text-body-large text-deep-aquifer/80 max-w-xl mt-6 leading-relaxed">
          Talk with our civil hydrologists to assess your parcel’s percolation potential and aquifer recharge capability.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[15px] px-7 py-3.5 rounded-[6px] transition-colors shadow-xs"
          >
            Book a site survey
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-muted-aquifer/30 text-deep-aquifer hover:bg-slate-100 font-medium text-[15px] px-7 py-3.5 rounded-[6px] transition-colors"
          >
            Explore solutions
          </Link>
        </div>

        <div className="mt-12 pt-6 flex items-center gap-2.5 text-deep-aquifer/65 text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-moss"></span>
          <span>
            Engineered for commercial campuses, industrial corridors, and residential communities.
          </span>
        </div>
      </section>
    </div>
  );
}

