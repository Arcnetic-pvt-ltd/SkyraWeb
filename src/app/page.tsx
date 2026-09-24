import Link from "next/link";
import { QuotesCarousel } from "@/components/landing/quotes-carousel";
import { HeroMissionEngine } from "@/components/landing/hero-mission-engine";
import { IndiaMapGraphic } from "@/components/landing/india-map-graphic";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden relative">
      {/* Ambient Floating Gradients */}
      <div className="absolute top-0 inset-x-0 h-[100vh] pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[12%] right-[-5%] w-[850px] h-[850px] rounded-full bg-[#cde8e6]/90 blur-[120px]"></div>
        <div className="absolute top-[15%] right-[12%] w-[550px] h-[550px] rounded-full bg-[#ccebc8]/50 blur-[130px]"></div>
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative z-10 min-h-screen flex flex-col justify-between px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 pb-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-1 sm:pt-2">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-moss animate-ping"></span>
              <span className="font-body-sm text-body-sm text-secondary tracking-normal font-semibold">
                Closed-Loop Hydrological Stewardship
              </span>
            </div>

            <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer tracking-tight leading-tight">
              Securing India’s Water Future.
            </h1>

            <p className="font-body-large text-body-large text-deep-aquifer/85 mt-4 sm:mt-5 leading-relaxed">
              Skyra turns every monsoon into something lasting — transforming rainfall into permanent aquifer resilience across India.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="relative group inline-flex items-center">
                <div className="absolute -inset-3 rounded-full bg-moss/20 blur-md opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 ease-out"></div>
                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-button-text text-button-text px-7 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Request a Consultation
                </Link>
              </div>
              <a
                href="#problem"
                className="font-button-text text-button-text text-forest-slate hover:text-deep-aquifer transition-colors inline-flex items-center gap-2 py-3 px-4"
              >
                <span>Explore methodology</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_downward
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Hydrological Mission Engine Window */}
          <div className="lg:col-span-6 w-full">
            <HeroMissionEngine />
          </div>
        </div>

        {/* Telemetry Metric Chip */}
        <div className="mt-8 sm:mt-10 pt-4 flex items-center justify-between flex-wrap gap-6 border-t border-muted-aquifer/15">
          <div className="inline-flex items-center gap-4 py-3 px-5 rounded-full bg-white/70 backdrop-blur-md shadow-sm border border-muted-aquifer/20">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moss opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-moss"></span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-metric-mono-lg text-metric-mono-lg text-deep-aquifer tracking-tight">
                1.8B
              </span>
              <span className="font-body-sm text-body-sm text-secondary font-medium">
                Liters Harvested &amp; Recharged
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 text-secondary/70">
            <span className="font-body-sm text-body-sm font-medium">Kochi</span>
            <span className="w-1 h-1 rounded-full bg-secondary/40"></span>
            <span className="font-body-sm text-body-sm font-medium">Bengaluru</span>
            <span className="w-1 h-1 rounded-full bg-secondary/40"></span>
            <span className="font-body-sm text-body-sm font-medium">New Delhi</span>
          </div>
        </div>
      </section>


      {/* SECTION 2: THE CORE PROBLEM */}
      <section
        className="relative w-full bg-deep-aquifer text-light-aquifer-canvas py-24 sm:py-32 px-6 sm:px-10 lg:px-16"
        id="problem"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-body-sm text-body-sm text-moss/90 font-medium">
              The Hydrological Reality
            </span>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white leading-tight">
              India isn’t short on rain. It’s short on places to keep it.
            </h2>
            <p className="font-body-large text-body-large text-light-aquifer-canvas/75 leading-relaxed">
              Across much of the country, a season of good rainfall runs straight off the surface — down drains, into rivers, out to sea — before the ground ever gets the chance to hold onto it.
            </p>
            <p className="font-body-primary text-body-primary text-light-aquifer-canvas/60 leading-relaxed">
              Hard paving, rapid urbanization, and compacted topsoil transform natural bounty into destructive runoff. In moments where our subterranean basins could be replenishing for dry seasons, billions of cubic meters are permanently discarded within mere hours of touching soil.
            </p>
          </div>

          {/* Hydrology Graphic Visual */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="w-full max-w-lg aspect-square rounded-3xl bg-primary-container/60 p-6 sm:p-10 flex flex-col justify-center items-center relative overflow-hidden shadow-2xl border border-white/10">
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
      <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-slate"></span>
              <span className="font-body-sm text-body-sm text-secondary font-medium">
                The Subterranean Thesis
              </span>
            </div>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer leading-snug">
              We saw that runoff differently — not as water lost, but as water waiting to be caught.
            </h2>
            <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
              Skyra designs harvesting and recharge systems that catch rainfall where it falls, and put it back where it belongs — underground, where it lasts. We’re building this across South India today, with a vision for the whole country.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-surface-container-low/80 border border-muted-aquifer/15">
                <span className="font-headline-h3 text-headline-h3 text-deep-aquifer">
                  Zero Surface Loss
                </span>
                <p className="font-body-sm text-body-sm text-deep-aquifer/70 leading-relaxed">
                  Gravity-fed infiltration shafts bypass high-evaporation ground levels directly into unconfined geological strata.
                </p>
              </div>
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-surface-container-low/80 border border-muted-aquifer/15">
                <span className="font-headline-h3 text-headline-h3 text-deep-aquifer">
                  Natural Clarification
                </span>
                <p className="font-body-sm text-body-sm text-deep-aquifer/70 leading-relaxed">
                  Multi-tiered biological and physical aggregate barriers purify monsoon downpours prior to bedrock entry.
                </p>
              </div>
            </div>
          </div>

          {/* India Deployment Map Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-8 rounded-3xl bg-white shadow-xl flex flex-col items-center relative overflow-hidden border border-muted-aquifer/15">
              <div className="w-full flex items-center justify-between mb-4">
                <span className="font-body-sm text-body-sm text-secondary font-medium">
                  Deployment Network
                </span>
                <span className="font-body-sm text-body-sm text-moss font-semibold">
                  Active in Southern Corridors
                </span>
              </div>

              <IndiaMapGraphic />

              <div className="w-full pt-4 mt-2 flex items-center justify-between text-deep-aquifer/75 border-t border-muted-aquifer/15">
                <span className="font-body-sm text-body-sm">
                  Deep Infiltration Modules
                </span>
                <span className="font-metric-mono-lg text-[15px] font-bold text-deep-aquifer">
                  140+ SITES
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VOICES OF AUTHORITY */}
      <QuotesCarousel />

      {/* SECTION 5: CLOSING CTA */}
      <section className="py-28 sm:py-40 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto w-full text-center flex flex-col items-center relative">
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none opacity-30">
          <div className="w-[500px] h-[500px] rounded-full border-none bg-surface-variant/40 blur-3xl"></div>
        </div>

        <span className="font-body-sm text-body-sm text-secondary font-medium tracking-normal mb-6">
          Begin The Recharge Cycle
        </span>

        <h2 className="font-headline-hero text-headline-h2-mobile sm:text-headline-hero text-deep-aquifer max-w-3xl leading-tight">
          Every roof, every courtyard, every open plot is a chance to catch the rain. Let’s find yours.
        </h2>

        <p className="font-body-large text-body-large text-deep-aquifer/70 max-w-xl mt-8 leading-relaxed">
          Talk with our civil hydrologists to assess your parcel’s percolation potential and aquifer recharge capability.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-button-text text-button-text px-9 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Start a Conversation
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center text-deep-aquifer hover:text-forest-slate font-button-text text-button-text px-8 py-4 rounded-full hover:bg-surface-container/50 transition-all duration-200"
          >
            Explore Solutions
          </Link>
        </div>

        <div className="mt-16 pt-8 flex items-center gap-3 text-secondary/60 text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-moss"></span>
          <span>
            Engineered for commercial campuses, industrial corridors, and residential communities.
          </span>
        </div>
      </section>
    </div>
  );
}

