import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Core Water Management Solutions | Skyra",
  description:
    "Three natural, engineering-grade approaches to catching, filtering, and storing water where it falls: Rainwater Harvesting, Stormwater Management, and Afforestation.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Section: Editorial Header */}
      <section className="w-full max-w-5xl mx-auto px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-3xl flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 font-technical-label text-body-sm uppercase tracking-wider text-moss font-semibold">
            <span className="w-2 h-2 rounded-full bg-moss animate-pulse"></span>
            Systems &amp; Architecture
          </span>
          <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer tracking-tight text-balance">
            Core Water Management Solutions
          </h1>
          <p className="font-body-large text-body-large text-muted-aquifer leading-relaxed max-w-2xl text-balance">
            Three natural, engineering-grade approaches to catching, filtering, and storing water where it falls.
          </p>
        </div>
      </section>

      {/* Service 1: Site-Specific Rainwater Harvesting */}
      <section className="w-full bg-light-aquifer-canvas py-20 md:py-28 transition-all duration-700 border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="font-technical-label text-body-sm text-moss font-medium">01</span>
                <span className="w-8 h-px bg-muted-aquifer/30"></span>
                <span className="font-technical-label text-body-sm text-muted-aquifer">Decentralized Storage</span>
              </div>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Site-Specific Rainwater Harvesting
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
                We design your property to catch its own water — filtered, stored, and ready to use — so you rely a little less on the tanker or the municipal line, and the ground beneath you gets a little healthier every monsoon.
              </p>
              <div className="pt-2 flex flex-wrap gap-x-8 gap-y-3 font-technical-label text-body-sm text-muted-aquifer">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-moss">check_circle</span>
                  <span>Zero-loss gravity filtration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-moss">check_circle</span>
                  <span>Potable-grade cistern storage</span>
                </div>
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
              <div className="w-full rounded-2xl bg-white/90 p-6 sm:p-8 shadow-[0_8px_30px_rgb(29,41,59,0.04)] border border-muted-aquifer/15 relative overflow-hidden">
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
                <span className="font-technical-label text-body-sm text-moss font-medium">02</span>
                <span className="w-8 h-px bg-muted-aquifer/30"></span>
                <span className="font-technical-label text-body-sm text-muted-aquifer">Surface Hydraulics</span>
              </div>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Stormwater Management Solutions
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
                When the rain comes hard and fast, we make sure it has somewhere good to go — routed safely away from your building, and guided toward the aquifers that need it, instead of flooding the street.
              </p>
              <div className="pt-2 flex flex-wrap gap-x-8 gap-y-3 font-technical-label text-body-sm text-muted-aquifer">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-moss">grain</span>
                  <span>Subsurface attenuation crates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-moss">water</span>
                  <span>Bio-swale retention design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Afforestation & Miyawaki Forests */}
      <section className="w-full bg-forest-slate text-light-aquifer-canvas py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="font-technical-label text-body-sm text-tertiary-fixed font-medium">03</span>
                <span className="w-8 h-px bg-light-aquifer-canvas/20"></span>
                <span className="font-technical-label text-body-sm text-light-aquifer-canvas/60">Bio-Hydrological Sponge</span>
              </div>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white tracking-tight">
                Afforestation &amp; Miyawaki Forests
              </h2>
              <p className="font-body-large text-body-large text-light-aquifer-canvas/85 leading-relaxed">
                On land that’s gone bare, we bring back dense, native forest — the kind that heals soil, holds water, and quietly pulls carbon from the air. It’s slow work that pays off for decades.
              </p>
              <div className="pt-2 flex flex-wrap gap-x-8 gap-y-3 font-technical-label text-body-sm text-light-aquifer-canvas/65">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">forest</span>
                  <span>30x multi-tier canopy density</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">yard</span>
                  <span>High-speed organic root penetration</span>
                </div>
              </div>
            </div>

            {/* SVG Organic Root Network */}
            <div className="lg:col-span-6">
              <div className="w-full rounded-2xl bg-deep-aquifer/60 p-6 sm:p-8 border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.18)] relative overflow-hidden">
                <svg className="w-full h-80 select-none" fill="none" viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="160" cy="85" fill="#7D9D3D" opacity="0.35" r="42" />
                  <circle cx="215" cy="70" fill="#7D9D3D" opacity="0.5" r="54" />
                  <circle cx="270" cy="88" fill="#7D9D3D" opacity="0.38" r="44" />
                  <circle cx="320" cy="98" fill="#7D9D3D" opacity="0.25" r="32" />

                  <path d="M 215 124 L 215 175" stroke="#F8FCFE" strokeLinecap="round" strokeWidth="3" />
                  <path d="M 160 127 L 165 175" opacity="0.8" stroke="#F8FCFE" strokeLinecap="round" strokeWidth="2" />
                  <path d="M 270 132 L 265 175" opacity="0.8" stroke="#F8FCFE" strokeLinecap="round" strokeWidth="2" />

                  <rect fill="#cbef85" height="4" opacity="0.6" width="380" x="40" y="174" />
                  <text fill="#cbef85" fontFamily="Space Mono" fontSize="10" letterSpacing="0.05em" x="45" y="167">ORGANIC SPONGE LAYER</text>

                  <g fill="none" stroke="#cbef85" strokeLinecap="round">
                    <path d="M 215 178 C 215 210 200 240 205 285" opacity="0.9" strokeWidth="2.5" />
                    <path d="M 215 205 C 235 225 255 245 260 275" opacity="0.75" strokeWidth="1.8" />
                    <path d="M 205 240 C 185 260 175 280 170 305" opacity="0.7" strokeWidth="1.5" />
                    <path d="M 165 178 C 165 205 140 230 130 265" opacity="0.7" strokeWidth="1.8" />
                    <path d="M 148 215 C 130 230 115 250 105 280" opacity="0.5" strokeWidth="1.2" />
                    <path d="M 265 178 C 265 210 295 240 310 270" opacity="0.7" strokeWidth="1.8" />
                    <path d="M 285 225 C 310 245 330 270 345 295" opacity="0.5" strokeWidth="1.2" />
                  </g>

                  <circle cx="205" cy="285" fill="#cbef85" r="4">
                    <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.2;1;0.2" />
                    <animate attributeName="r" dur="3s" repeatCount="indefinite" values="3;5.5;3" />
                  </circle>
                  <circle cx="260" cy="275" fill="#cbef85" r="3">
                    <animate attributeName="opacity" begin="0.8s" dur="2.4s" repeatCount="indefinite" values="0.3;0.9;0.3" />
                  </circle>
                  <circle cx="130" cy="265" fill="#cbef85" r="3">
                    <animate attributeName="opacity" begin="1.2s" dur="3.5s" repeatCount="indefinite" values="0.2;0.8;0.2" />
                  </circle>
                  <text fill="#F8FCFE" fontFamily="Space Mono" fontSize="9" opacity="0.5" x="320" y="240">IN SITU CARBON SINK</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Product Integrations Catalog */}
      <section className="w-full bg-light-aquifer-canvas py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="font-technical-label text-body-sm text-moss font-semibold uppercase tracking-wider block mb-3">
              Hardware &amp; Infrastructure
            </span>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight mb-4">
              Dedicated Product Integrations
            </h2>
            <p className="font-body-large text-body-large text-muted-aquifer leading-relaxed">
              Some jobs call for a complete system. Others just need the right piece. Our product range works both ways — as standalone tools, or built into a larger Skyra system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group bg-white rounded-xl border border-muted-aquifer/15 overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(29,41,59,0.04)] flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low mb-6 relative">
                  <img
                    alt="Hydrostatic Vortex Sedimentation Chamber"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1W4cy0UyZuuj5OqT4yZdiqQuLzAqg7QRVDg5tFUQZDmY64PPyWwYx7EnuL4N0llTZj107hX9q_ev57EN8Z6MjcxB5YBL-cwUnUhNERR3GFVTHLasJbShdj5f6J2y0rYuxlMwJ0X9YVZ_tGUyp5MYDEMXGLM4v9pjAGap-b2jpXu7ZiTtha-Kmai5YHeUNCEhQo66BZTkrREUQnE-mOsQexNENIDhvHBWEj78CjholOgVSUPHHTBqTpyZtzj"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-technical-label text-[12px] text-moss bg-moss/10 px-2 py-0.5 rounded">
                    SERIES HV
                  </span>
                  <span className="font-technical-label text-[12px] text-muted-aquifer">
                    MOD. 120-X
                  </span>
                </div>
                <h3 className="font-headline-h3 text-[20px] text-deep-aquifer mb-3 font-semibold">
                  Hydrostatic Vortex Sedimentation Chamber
                </h3>
                <p className="font-body-sm text-body-sm text-muted-aquifer mb-6 leading-relaxed">
                  Passive centripetal velocity separation removing particulates down to 40 microns prior to aquifer deep-injection.
                </p>
              </div>

              <div className="bg-light-aquifer-canvas p-4 rounded-lg flex flex-col gap-2 border border-muted-aquifer/15">
                <div className="flex justify-between items-baseline">
                  <span className="font-body-sm text-[12px] text-muted-aquifer">Flow Capacity</span>
                  <span className="font-metric-mono-lg text-body-primary font-bold text-deep-aquifer">
                    120 <span className="text-moss text-[12px]">L/SEC</span>
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-body-sm text-[12px] text-muted-aquifer">Material</span>
                  <span className="font-technical-label text-body-sm text-deep-aquifer font-semibold">
                    316L Stainless
                  </span>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-white rounded-xl border border-muted-aquifer/15 overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(29,41,59,0.04)] flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low mb-6 relative p-5 flex items-center justify-center border border-muted-aquifer/15">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="#1D293B" height="110" opacity="0.05" rx="8" width="120" x="40" y="20" />
                    <rect height="90" rx="4" stroke="#1D293B" strokeDasharray="3 3" strokeWidth="1.5" width="100" x="50" y="30" />
                    <line stroke="#748D8C" strokeWidth="1" x1="50" x2="150" y1="60" y2="60" />
                    <line stroke="#748D8C" strokeWidth="1" x1="50" x2="150" y1="90" y2="90" />
                    <line stroke="#748D8C" strokeWidth="1" x1="83" x2="83" y1="30" y2="120" />
                    <line stroke="#748D8C" strokeWidth="1" x1="116" x2="116" y1="30" y2="120" />
                    <circle cx="100" cy="75" fill="#7D9D3D" opacity="0.25" r="14" />
                    <circle cx="100" cy="75" fill="#7D9D3D" r="6" />
                  </svg>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-technical-label text-[12px] text-moss bg-moss/10 px-2 py-0.5 rounded">
                    SERIES AR
                  </span>
                  <span className="font-technical-label text-[12px] text-muted-aquifer">
                    MOD. DEEP-WELL
                  </span>
                </div>
                <h3 className="font-headline-h3 text-[20px] text-deep-aquifer mb-3 font-semibold">
                  Subterranean Deep Aquifer Recharge Module
                </h3>
                <p className="font-body-sm text-body-sm text-muted-aquifer mb-6 leading-relaxed">
                  Engineered borehole infiltration shaft engineered with non-clogging multi-layered geotextile silica envelopes.
                </p>
              </div>

              <div className="bg-light-aquifer-canvas p-4 rounded-lg flex flex-col gap-2 border border-muted-aquifer/15">
                <div className="flex justify-between items-baseline">
                  <span className="font-body-sm text-[12px] text-muted-aquifer">Void Ratio</span>
                  <span className="font-metric-mono-lg text-body-primary font-bold text-deep-aquifer">
                    95.4 <span className="text-moss text-[12px]">%</span>
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-body-sm text-[12px] text-muted-aquifer">Depth Rating</span>
                  <span className="font-technical-label text-body-sm text-deep-aquifer font-semibold">
                    Up to 60m BGL
                  </span>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-white rounded-xl border border-muted-aquifer/15 overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(29,41,59,0.04)] flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-deep-aquifer mb-6 relative p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-white/50">
                    <span className="font-technical-label text-[11px] text-light-aquifer-canvas/60">
                      NODE-844 ONLINE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-body-sm text-[11px] text-light-aquifer-canvas/50">
                      PIEZOMETRIC HEAD
                    </span>
                    <span className="font-metric-mono-lg text-metric-mono-lg text-white font-bold tracking-tight">
                      18.42 <span className="text-tertiary-fixed text-[14px]">m</span>
                    </span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-tertiary-fixed h-full w-[78%]"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-technical-label text-[12px] text-moss bg-moss/10 px-2 py-0.5 rounded">
                    SERIES SC
                  </span>
                  <span className="font-technical-label text-[12px] text-muted-aquifer">
                    MOD. TELEMETRY
                  </span>
                </div>
                <h3 className="font-headline-h3 text-[20px] text-deep-aquifer mb-3 font-semibold">
                  IoT SCADA Telemetry Node
                </h3>
                <p className="font-body-sm text-body-sm text-muted-aquifer mb-6 leading-relaxed">
                  Solar-powered edge computational monitor tracking real-time piezometric head, aquifer conductivity, and water yield.
                </p>
              </div>

              <div className="bg-light-aquifer-canvas p-4 rounded-lg flex flex-col gap-2 border border-muted-aquifer/15">
                <div className="flex justify-between items-baseline">
                  <span className="font-body-sm text-[12px] text-muted-aquifer">Telemetry</span>
                  <span className="font-technical-label text-body-sm text-deep-aquifer font-semibold">
                    LoRaWAN / NB-IoT
                  </span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-body-sm text-[12px] text-muted-aquifer">Autonomy</span>
                  <span className="font-metric-mono-lg text-body-primary font-bold text-deep-aquifer">
                    7 <span className="text-moss text-[12px]">YEARS</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-white border-t border-muted-aquifer/15">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <span className="font-technical-label text-body-sm uppercase tracking-wider text-moss font-semibold">
            Consultation &amp; Site Assessment
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
              className="bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-button-text text-button-text px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Request a Hydrological Study
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

