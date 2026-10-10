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
      <section className="relative z-10 flex flex-col px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-12 sm:pb-16 max-w-7xl mx-auto w-full gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-1 sm:pt-2">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-moss"></span>
              <span className="font-mono text-body-sm text-secondary tracking-normal font-medium">
                Hero solution &middot; Skyra Rainsink &amp; enterprise stewardship
              </span>
            </div>

            <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer tracking-tight leading-tight">
              Transform stormwater into lasting aquifer resilience.
            </h1>

            <p className="font-body-large text-body-large text-deep-aquifer mt-4 sm:mt-5 leading-relaxed">
              Featuring <strong>Skyra Rainsink</strong> &mdash; our high-capacity rain percolator unit. Engineered for logistics hubs, factories, IT parks, and institutions to eliminate yard flooding, guarantee statutory CGWA NOC compliance, and reach water neutrality.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/products/rainsink"
                className="inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-button-text text-button-text px-6 py-3 rounded-[6px] transition-colors"
              >
                Explore Skyra Rainsink
              </Link>
              <Link
                href="/contact"
                className="font-button-text text-button-text text-deep-aquifer hover:text-forest-slate transition-colors inline-flex items-center gap-2 py-3 px-5 border border-muted-aquifer/30 bg-white rounded-[6px]"
              >
                <span>Request campus survey</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
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
          <div className="inline-flex items-center gap-4 py-2.5 px-4 rounded-[4px] bg-white border border-muted-aquifer/20">
            <span className="inline-block w-2 h-2 rounded-full bg-moss"></span>
            <div className="flex items-baseline gap-2">
              <span className="font-metric-mono-lg text-metric-mono-lg text-deep-aquifer tracking-tight">
                1.8B
              </span>
              <span className="font-mono text-body-sm text-secondary font-medium">
                Liters harvested &amp; recharged
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 text-secondary/70">
            <span className="font-body-sm text-body-sm font-medium">Kochi</span>
            <span className="w-1 h-1 rounded-full bg-secondary/40"></span>
            <span className="font-body-sm text-body-sm font-medium">Bengaluru</span>
            <span className="w-1 h-1 rounded-full bg-secondary/40"></span>
            <span className="font-body-sm text-body-sm font-medium">Hyderabad</span>
          </div>
        </div>
      </section>


      {/* SECTION 2: THE CORE PROBLEM */}
      <section
        className="relative w-full bg-linear-to-b from-[#0a1829] via-[#0f233b] to-[#152e4d] text-light-aquifer-canvas py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-[#22446d]/40"
        id="problem"
      >
        {/* Subtle Rainfall Overlay Element */}
        <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="homeProblemRainPattern" width="120" height="120" patternUnits="userSpaceOnUse">
                <line x1="20" y1="0" x2="10" y2="35" stroke="#748D8C" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="12 18" />
                <line x1="70" y1="40" x2="60" y2="75" stroke="#7D9D3D" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="10 20" />
                <line x1="110" y1="20" x2="100" y2="55" stroke="#86b5db" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="8 16" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#homeProblemRainPattern)" className="animate-subtle-rain" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-mono text-body-sm text-[#86b5db] font-medium">
              The hydrological reality
            </span>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white leading-tight">
              India isn’t short on rain. It’s short on places to keep it.
            </h2>
            <p className="font-body-large text-body-large text-light-aquifer-canvas leading-relaxed">
              Across much of the country, a season of good rainfall runs straight off the surface — down drains, into rivers, out to sea — before the ground ever gets the chance to hold onto it.
            </p>
            <p className="font-body-primary text-body-primary text-light-aquifer-canvas/80 leading-relaxed">
              Hard paving, rapid urbanization, and compacted topsoil transform natural bounty into destructive runoff. In moments where our subterranean basins could be replenishing for dry seasons, billions of cubic meters are permanently discarded within mere hours of touching soil.
            </p>
          </div>

          {/* Hydrology Graphic Visual */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="w-full max-w-lg aspect-square rounded-[4px] bg-[#132742]/90 p-6 sm:p-10 flex flex-col justify-center items-center relative overflow-hidden border border-[#22446d]/80">
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
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-muted-aquifer/15">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-moss"></span>
                <span className="font-mono text-xs text-secondary font-medium tracking-wide">
                  The subterranean thesis
                </span>
              </div>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer leading-snug">
                We saw that runoff differently &mdash; not as water lost, but as water waiting to be caught.
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer leading-relaxed">
                Skyra designs harvesting and recharge systems that catch rainfall where it falls, and put it back where it belongs &mdash; underground, where it lasts. We’re building this across South India today, with a vision for the whole country.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-6">
                  <div className="flex flex-col gap-4">
                    <span className="material-symbols-outlined text-[24px] text-moss">water_drop</span>
                    <div>
                      <h3 className="font-headline-h3 text-[24px] font-medium text-deep-aquifer tracking-tight mb-2">
                        Zero surface loss
                      </h3>
                      <p className="font-body-primary text-base leading-relaxed text-deep-aquifer">
                        Gravity-fed infiltration shafts bypass high-evaporation ground levels directly into unconfined geological strata.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-6">
                  <div className="flex flex-col gap-4">
                    <span className="material-symbols-outlined text-[24px] text-forest-slate">filter_alt</span>
                    <div>
                      <h3 className="font-headline-h3 text-[24px] font-medium text-deep-aquifer tracking-tight mb-2">
                        Natural clarification
                      </h3>
                      <p className="font-body-primary text-base leading-relaxed text-deep-aquifer">
                        Multi-tiered biological and physical aggregate barriers purify monsoon downpours prior to bedrock entry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* India Deployment Map Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md p-6 rounded-[4px] bg-white flex flex-col items-center relative overflow-hidden border border-muted-aquifer/20">
                <div className="w-full flex items-center justify-between mb-4">
                  <span className="font-mono text-body-sm text-secondary font-medium">
                    Deployment network
                  </span>
                  <span className="font-mono text-body-sm text-moss font-semibold">
                    Active in southern corridors
                  </span>
                </div>

                <IndiaMapGraphic />

                <div className="w-full pt-4 mt-2 flex items-center justify-between text-deep-aquifer border-t border-muted-aquifer/15">
                  <span className="font-mono text-body-sm">
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
      <section className="relative w-full bg-linear-to-b from-[#edf6fa] via-[#e5f1f7] to-[#edf6fa] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#c8e0ee]/60">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-start relative z-10">
          <span className="font-mono text-xs text-secondary font-medium tracking-wide mb-6">
            Begin the recharge cycle
          </span>

          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer max-w-3xl leading-tight font-semibold">
            Every roof, every courtyard, every open plot is a chance to catch the rain. Let’s find yours.
          </h2>

          <p className="font-body-large text-body-large text-deep-aquifer max-w-2xl mt-6 leading-relaxed text-left">
            Talk with our civil hydrologists to assess your parcel’s percolation potential and aquifer recharge capability.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-button-text text-button-text px-7 py-3 rounded-[6px] transition-colors"
            >
              Start a conversation
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-[#bcd7e8]/60 bg-white text-deep-aquifer hover:bg-[#e7f3f9] hover:border-[#748D8C] font-button-text text-button-text px-7 py-3 rounded-[6px] transition-colors"
            >
              Explore solutions
            </Link>
          </div>

          <div className="mt-16 pt-8 flex items-center gap-3 text-secondary/60 text-sm border-t border-[#bcd7e8]/60 w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-moss"></span>
            <span>
              Engineered for commercial campuses, industrial corridors, and residential communities.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

