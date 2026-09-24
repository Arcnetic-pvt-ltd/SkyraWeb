import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Skyra Mission | Hydrological Foundation & Philosophy",
  description:
    "Reclaiming India’s seasonal downpours to build generational water independence through closed-loop hydrological stewardship.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Breathing Space & Monograph Introduction */}
      <section className="w-full pt-20 pb-24 sm:pb-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col gap-8">
            <span className="font-technical-label text-technical-label text-moss tracking-widest uppercase font-semibold">
              Our Foundation
            </span>
            <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer tracking-tight max-w-2xl">
              The Skyra Mission
            </h1>
            <p className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer/80 font-normal leading-tight max-w-[42ch]">
              Reclaiming India’s seasonal downpours to build generational water independence.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section: Unhurried Scroll Beats */}
      <section className="w-full pb-32 space-y-32 sm:space-y-40">
        {/* Beat 1 */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-7 space-y-6">
              <p className="font-body-large text-body-large text-deep-aquifer font-medium leading-relaxed max-w-[55ch]">
                Skyra started with a simple, frustrating fact: India isn’t short on rain — it’s short on places to keep it.
              </p>
              <p className="font-body-primary text-body-primary text-deep-aquifer/70 max-w-[58ch]">
                Every monsoon season, trillions of litres of pristine rainwater cascade across rooftops, parking aprons, and industrial parks, only to wash into overburdened storm drains and vanish into the sea within forty-eight hours. Meanwhile, borehole pumps drill five hundred feet deeper every summer to pull brackish brine from exhausted bedrock.
              </p>
              <p className="font-body-primary text-body-primary text-deep-aquifer/70 max-w-[58ch]">
                The scarcity we experience is rarely atmospheric. It is architectural. We built our cities to repel moisture rather than receive it.
              </p>
            </div>
            <div className="md:col-span-5 pt-2">
              <div className="p-8 rounded-xl bg-surface-container-low/60 border border-muted-aquifer/15 shadow-sm flex flex-col gap-6">
                <svg
                  className="w-full h-44 text-muted-aquifer select-none"
                  fill="none"
                  viewBox="0 0 280 160"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 140 C 60 135, 110 145, 160 130 C 210 115, 240 125, 270 120"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeOpacity="0.45"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M10 115 C 70 110, 120 128, 170 108 C 220 88, 245 98, 270 95"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeOpacity="0.6"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M10 90 C 80 82, 130 100, 180 80 C 225 65, 250 72, 270 70"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeOpacity="0.8"
                    strokeWidth="1.4"
                  />
                  <g
                    stroke="#7D9D3D"
                    strokeDasharray="3 4"
                    strokeLinecap="round"
                    strokeOpacity="0.75"
                    strokeWidth="1.2"
                  >
                    <line x1="50" x2="35" y1="20" y2="60" />
                    <line x1="85" x2="70" y1="15" y2="55" />
                    <line x1="120" x2="105" y1="25" y2="65" />
                    <line x1="155" x2="140" y1="18" y2="58" />
                    <line x1="190" x2="175" y1="22" y2="62" />
                    <line x1="225" x2="210" y1="16" y2="56" />
                  </g>
                  <circle cx="180" cy="80" fill="#7D9D3D" r="3.5" />
                  <circle
                    cx="180"
                    cy="80"
                    r="9"
                    stroke="#7D9D3D"
                    strokeOpacity="0.5"
                    strokeWidth="0.8"
                  />
                </svg>
                <div className="space-y-1">
                  <span className="font-technical-label text-technical-label text-deep-aquifer font-semibold">
                    Atmospheric Capture Delta
                  </span>
                  <p className="font-body-sm text-body-sm text-deep-aquifer/60">
                    Average urban run-off velocity yields 78% net loss without intentional subterranean retention barriers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beat 2 */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-5 order-2 md:order-1 pt-2">
              <div className="p-8 rounded-xl bg-surface-container-low/60 border border-muted-aquifer/15 shadow-sm flex flex-col gap-6">
                <svg
                  className="w-full h-48 text-forest-slate select-none"
                  fill="none"
                  viewBox="0 0 280 180"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    fill="#748D8C"
                    fillOpacity="0.12"
                    height="24"
                    rx="4"
                    width="260"
                    x="10"
                    y="20"
                  />
                  <rect
                    fill="#748D8C"
                    fillOpacity="0.22"
                    height="34"
                    rx="4"
                    width="260"
                    x="10"
                    y="52"
                  />
                  <rect
                    fill="#7D9D3D"
                    fillOpacity="0.18"
                    height="42"
                    rx="4"
                    width="260"
                    x="10"
                    y="94"
                  />
                  <rect
                    fill="#1D293B"
                    fillOpacity="0.12"
                    height="26"
                    rx="4"
                    width="260"
                    x="10"
                    y="144"
                  />
                  <path
                    d="M140 10 L 140 152"
                    stroke="#7D9D3D"
                    strokeDasharray="4 3"
                    strokeWidth="1.5"
                  />
                  <circle cx="140" cy="115" fill="#7D9D3D" r="4" />
                  <circle
                    cx="140"
                    cy="115"
                    r="14"
                    stroke="#7D9D3D"
                    strokeDasharray="2 3"
                    strokeWidth="0.8"
                  />
                </svg>
                <div className="space-y-1">
                  <span className="font-technical-label text-technical-label text-deep-aquifer font-semibold">
                    Subsoil Equilibrium
                  </span>
                  <p className="font-body-sm text-body-sm text-deep-aquifer/60">
                    Passive gravity infiltration restores native perched water tables without chemical intervention.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 space-y-6">
              <p className="font-body-large text-body-large text-deep-aquifer font-medium leading-relaxed max-w-[55ch]">
                So we set out to fix that, one property at a time — helping people understand what their land could hold onto, and giving them practical, honest ways to do it.
              </p>
              <p className="font-body-primary text-body-primary text-deep-aquifer/70 max-w-[58ch]">
                Rather than relying on oversized concrete holding pits that silt up and sit abandoned after three seasons, we study lithology, rainfall cadence, and soil percolation. We design passive percolation columns, modular bio-filtration chambers, and naturalised aquifers that recharge subsoil layers naturally.
              </p>
              <p className="font-body-primary text-body-primary text-deep-aquifer/70 max-w-[58ch]">
                When an institutional campus or a community harvests water properly, the earth beneath them becomes their reservoir. Clean, silent, self-replenishing.
              </p>
            </div>
          </div>
        </div>

        {/* Beat 3 */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="space-y-12">
            <div className="space-y-6 max-w-[62ch]">
              <p className="font-body-large text-body-large text-deep-aquifer font-medium leading-relaxed">
                We’re not the flashiest company in the room. We’re the one that shows up with real numbers, real transparency, and systems that actually work — because water security isn’t a trend for us. It’s the whole point.
              </p>
              <p className="font-body-primary text-body-primary text-deep-aquifer/70">
                Engineered at our core R&amp;D facility in Kalamassery, Kerala, every Skyra installation is monitored against hydrological telemetry standards. We measure our longevity in decades, not quarterly project handoffs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg aspect-[1.79/1] bg-surface-container border border-muted-aquifer/15">
                <img
                  alt="Architectural rainwater harvesting infrastructure installation"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Vzz2fBWrD03Mc2YZWeYhp7xaWrJXpWdBt0q_gEMh4Pn47tiQE9AT0fqFaDADlxf1yYvfcXEOvkD2SWuhgLM4Omuf7ujmqaXluAtRajObVInREPtrjxnKwMAukSw29oaESwxWJ1jseIXP402vrb0ya96pstpTBa0CAZULnd0XDRxtb1i0uMRnuCh_FAgZzA2eYn78zo6rRA0-9L4JW0N8zljUNgjXbM4Qn7jwN11jANqKYxm2RQ5SZvox8W"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-aquifer/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <span className="font-technical-label text-technical-label tracking-wide text-white/90">
                    Kalamassery Proving Grounds • Commercial Prototype 04
                  </span>
                  <span className="hidden sm:inline-block font-technical-label text-technical-label text-white/70">
                    Passive Infiltration Series
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
                <div className="p-5 rounded-lg bg-surface-container-low/50 border border-muted-aquifer/15">
                  <span className="block font-metric-mono-lg text-metric-mono-lg text-deep-aquifer">
                    14
                  </span>
                  <span className="block font-body-sm text-body-sm text-deep-aquifer/65 mt-1">
                    States Active Across India
                  </span>
                </div>
                <div className="p-5 rounded-lg bg-surface-container-low/50 border border-muted-aquifer/15">
                  <span className="block font-metric-mono-lg text-metric-mono-lg text-deep-aquifer">
                    420+
                  </span>
                  <span className="block font-body-sm text-body-sm text-deep-aquifer/65 mt-1">
                    Engineered Installations
                  </span>
                </div>
                <div className="p-5 rounded-lg bg-surface-container-low/50 border border-muted-aquifer/15">
                  <span className="block font-metric-mono-lg text-metric-mono-lg text-deep-aquifer">
                    2.4B
                  </span>
                  <span className="block font-body-sm text-body-sm text-deep-aquifer/65 mt-1">
                    Litres Infiltrated Annually
                  </span>
                </div>
                <div className="p-5 rounded-lg bg-surface-container-low/50 border border-muted-aquifer/15">
                  <span className="block font-metric-mono-lg text-metric-mono-lg text-deep-aquifer">
                    100%
                  </span>
                  <span className="block font-body-sm text-body-sm text-deep-aquifer/65 mt-1">
                    Passive Gravity-Fed Flow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Mandate */}
      <section className="w-full bg-deep-aquifer text-light-aquifer-canvas py-28 sm:py-36">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center gap-10">
          <span className="font-technical-label text-technical-label text-moss tracking-widest uppercase font-semibold">
            The Mandate
          </span>
          <blockquote className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white max-w-2xl font-medium tracking-tight">
            “Water security is not an emergency response. It is engineered infrastructure.”
          </blockquote>
          <p className="font-body-large text-body-large text-light-aquifer-canvas/60 max-w-[48ch]">
            We partner with landowners, institutional leaders, and civil developers who plan half a century ahead.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-moss hover:bg-forest-slate text-white font-button-text text-button-text px-8 py-3.5 rounded-lg shadow-sm transition-all duration-200"
            >
              Start a Conversation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white/90 font-button-text text-button-text px-8 py-3.5 rounded-lg transition-all duration-200"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

