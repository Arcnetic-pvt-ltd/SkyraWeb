import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  // title: "About Us & Founding Team | Skyra Water Solutions",
  title: "The Skyra Mission | Hydrological Foundation & Philosophy",

  description:
    "Learn about Skyra's mission, closed-loop hydrological engineering, and our founding team of civil hydrologists, environmental scientists, and systems engineers.",
};

export const FOUNDERS = [
  {
    name: "Dr. Madhavan Nair",
    role: "Co-Founder & Chief Hydrologist",
    credentials: "Ph.D. Hydrogeology (IIT Madras)",
    bio: "Pioneered subterranean aquifer recharge modeling and deep-borehole infiltration shafts across South India over a 22-year research career.",
    expertise: "Lithological Stratification • Piezometric Telemetry • Bedrock Recharge",
    image: "/images/founders/madhavan_nair.jpg",
  },
  {
    name: "Ananya Ramachandran",
    role: "Co-Founder & Chief Executive Officer",
    credentials: "M.S. Civil Engineering (IISc Bengaluru)",
    bio: "Former Lead Environmental Infrastructure Consultant, driving Skyra's vision to scale closed-loop water autonomy for commercial campuses and regional estates.",
    expertise: "Campus Water Resilience • Municipal Compliance • Industrial Hydrology",
    image: "/images/founders/ananya_ramachandran.jpg",
  },
  {
    name: "Siddharth Menon",
    role: "Co-Founder & VP of Systems Engineering",
    credentials: "B.Tech Mechanical (NIT Calicut)",
    bio: "Hardware patent holder in passive fluid dynamics; designed Skyra's zero-energy Hydrostatic Vortex Sedimentation Chambers.",
    expertise: "Centripetal Filtration • Geocellular Attenuation • Fluid Mechanics",
    image: "/images/founders/siddharth_menon.jpg",
  },
  {
    name: "Dr. Preeti Kurup",
    role: "Co-Founder & Head of Ecological Sciences",
    credentials: "Ph.D. Forest & Soil Ecology (KAU)",
    bio: "Specialist in Miyawaki high-density afforestation and natural bio-swales, turning depleted soil layers into living water sponges.",
    expertise: "Bio-Hydrological Sponges • Miyawaki Forests • In-Situ Carbon Sinks",
    image: "/images/founders/preeti_kurup.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden relative">
      {/* SECTION 1: HERO */}
      <section className="relative z-10 w-full pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="inline-block w-2 h-2 rounded-full bg-moss"></span>
              <span className="font-mono text-xs text-moss font-medium">
                Our foundation &amp; philosophy
              </span>
            </div>
            <h1 className="font-headline-hero text-[38px] sm:text-5xl lg:text-[56px] font-bold text-deep-aquifer tracking-tight leading-tight">
              The Skyra mission
            </h1>
            <p className="font-body-primary text-lg sm:text-xl font-normal text-deep-aquifer/80 leading-relaxed">
              Reclaiming India’s seasonal downpours to build generational water independence.
            </p>
            <p className="font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
              Founded in Kalamassery, Kochi, Skyra re-engineers urban and commercial land into natural, high-yield subterranean water reservoirs — replacing temporary tanker reliance with lasting aquifer resilience.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCT CONTEXT & HYDROLOGICAL MONOGRAPH */}
      <section className="relative z-10 w-full py-16 sm:py-24 space-y-16 sm:space-y-24 border-t border-muted-aquifer/15">
        {/* Beat 1: The Scarcity Myth */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-7 space-y-6">
              <span className="font-mono text-xs text-moss font-medium block">
                01 • The problem we solve
              </span>
              <h2 className="font-headline-h2 text-[28px] sm:text-[36px] font-semibold text-deep-aquifer tracking-tight">
                Architectural scarcity vs. atmospheric bounty
              </h2>
              <p className="font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
                Skyra started with a simple, frustrating fact: India isn’t short on rain — it’s short on places to keep it.
              </p>
              <p className="font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
                Every monsoon season, trillions of litres of pristine rainwater cascade across rooftops, parking aprons, and industrial parks, only to wash into overburdened storm drains and vanish into the sea within 48 hours. Meanwhile, borehole pumps drill 500+ feet deeper every summer to pull brackish brine from exhausted bedrock.
              </p>
              <p className="font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
                The scarcity we experience is rarely atmospheric. It is architectural. We built our cities to repel moisture rather than receive it.
              </p>
            </div>

            <div className="md:col-span-5 pt-2">
              <div className="p-8 rounded-[4px] bg-white border border-muted-aquifer/20 flex flex-col gap-6">
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
                  <span className="font-mono text-xs text-deep-aquifer font-medium">
                    Atmospheric capture delta
                  </span>
                  <p className="font-body-primary text-base font-normal text-deep-aquifer/85">
                    Average urban run-off velocity yields 78% net loss without intentional subterranean retention barriers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beat 2: Passive Gravity Infiltration */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-5 order-2 md:order-1 pt-2">
              <div className="p-8 rounded-[4px] bg-white border border-muted-aquifer/20 flex flex-col gap-6">
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
                  <span className="font-mono text-xs text-deep-aquifer font-medium">
                    Subsoil equilibrium
                  </span>
                  <p className="font-body-primary text-base font-normal text-deep-aquifer/85">
                    Passive gravity infiltration restores native perched water tables without chemical intervention.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 order-1 md:order-2 space-y-6">
              <span className="font-mono text-xs text-moss font-medium block">
                02 • Our technical approach
              </span>
              <h2 className="font-headline-h2 text-[28px] sm:text-[36px] font-semibold text-deep-aquifer tracking-tight">
                Passive infiltration &amp; soil hydrology
              </h2>
              <p className="font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
                Rather than relying on oversized concrete holding tanks that silt up after three seasons, we study lithology, rainfall cadence, and soil percolation.
              </p>
              <p className="font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
                We design zero-loss gravity infiltration shafts, modular bio-filtration chambers, and naturalized aquifers that recharge subsoil horizons automatically.
              </p>
              <p className="font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
                When an institutional campus or residential community catches water properly, the earth beneath becomes their reservoir — clean, silent, and self-replenishing for generations.
              </p>
            </div>
          </div>
        </div>

        {/* Beat 3: SEO Section - Regional Hydro-Geological Standards & Verification */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-4 max-w-3xl">
              <span className="font-mono text-xs text-moss font-medium block">
                03 • Regional standards &amp; hydro-geological compliance
              </span>
              <h2 className="font-headline-h2 text-[28px] sm:text-[36px] font-semibold text-deep-aquifer tracking-tight">
                Engineered for South India’s soil strata &amp; groundwater guidelines
              </h2>
              <p className="font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
                Every Skyra rainwater harvesting and aquifer replenishment system is built to rigorous national hydrological standards. Rather than generic catchment pits, our civil engineers design zone-calibrated infiltration solutions tailored to the diverse lithological profiles of Kerala, Karnataka, and Tamil Nadu.
              </p>
            </div>

            <div className="space-y-8">
              {/* Documentary Field Photo */}
              <div className="relative w-full rounded-[4px] overflow-hidden aspect-[16/9] sm:aspect-[1.79/1] bg-surface-container border border-muted-aquifer/20 shadow-xs">
                <img
                  alt="Civil hydrologists conducting on-site soil percolation and groundwater recharge survey"
                  className="w-full h-full object-cover"
                  src="/images/groundwater-recharge-survey.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-aquifer/85 via-deep-aquifer/25 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-white/95 font-medium">
                      On-site hydro-geological survey &amp; percolation rate profiling
                    </span>
                    <span className="font-mono text-[11px] text-white/75">
                      Commercial campus aquifer recharge • Regional validation
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-moss bg-deep-aquifer/80 px-2.5 py-1 rounded-[4px] border border-[#22446d]/60 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-moss"></span>
                    IS 15797:2008 &bull; CGWA Norms
                  </span>
                </div>
              </div>

              {/* SEO Regulatory & Technical Standards Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-[4px] bg-white border border-muted-aquifer/20 flex flex-col justify-between gap-3 shadow-xs">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-moss font-mono text-xs font-medium">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      <span>BIS &amp; CGWA compliance</span>
                    </div>
                    <h3 className="font-headline-h3 text-lg font-semibold text-deep-aquifer">
                      IS 15797:2008 &amp; Central Ground Water Authority guidelines
                    </h3>
                    <p className="font-body-primary text-sm font-normal text-deep-aquifer/80 leading-relaxed">
                      All infiltration shafts and percolation units adhere strictly to Bureau of Indian Standards (BIS) specifications for artificial groundwater recharge, mitigating surface runoff while preventing deep-aquifer contamination.
                    </p>
                  </div>
                  <span className="font-mono text-xs text-secondary/70 pt-2 border-t border-muted-aquifer/15">
                    Regulatory compliance
                  </span>
                </div>

                <div className="p-6 rounded-[4px] bg-white border border-muted-aquifer/20 flex flex-col justify-between gap-3 shadow-xs">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-moss font-mono text-xs font-medium">
                      <span className="material-symbols-outlined text-[18px]">layers</span>
                      <span>Lithological adaptation</span>
                    </div>
                    <h3 className="font-headline-h3 text-lg font-semibold text-deep-aquifer">
                      Subsurface soil strata &amp; percolation rate profiling
                    </h3>
                    <p className="font-body-primary text-sm font-normal text-deep-aquifer/80 leading-relaxed">
                      Custom-engineered for regional South Indian geology: high-drainage coastal laterites in Kerala, fractured granite crystalline bedrock across Bengaluru, and alluvial basins in Tamil Nadu.
                    </p>
                  </div>
                  <span className="font-mono text-xs text-secondary/70 pt-2 border-t border-muted-aquifer/15">
                    Geotechnical engineering
                  </span>
                </div>

                <div className="p-6 rounded-[4px] bg-white border border-muted-aquifer/20 flex flex-col justify-between gap-3 shadow-xs">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-moss font-mono text-xs font-medium">
                      <span className="material-symbols-outlined text-[18px]">eco</span>
                      <span>ESG &amp; Green Building</span>
                    </div>
                    <h3 className="font-headline-h3 text-lg font-semibold text-deep-aquifer">
                      IGBC, GRIHA &amp; LEED water credits
                    </h3>
                    <p className="font-body-primary text-sm font-normal text-deep-aquifer/80 leading-relaxed">
                      Equips industrial corridors and commercial IT parks to achieve complete water neutrality and qualify for maximum points under national green building rating frameworks.
                    </p>
                  </div>
                  <span className="font-mono text-xs text-secondary/70 pt-2 border-t border-muted-aquifer/15">
                    Sustainability benchmarking
                  </span>
                </div>
              </div>

              {/* Quantified Verification Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2">
                <div className="p-5 rounded-[4px] bg-white border border-muted-aquifer/20 shadow-xs">
                  <span className="block font-mono text-3xl sm:text-4xl font-bold text-deep-aquifer">
                    14
                  </span>
                  <span className="block font-mono text-xs text-deep-aquifer/70 mt-1 font-medium">
                    States active across India
                  </span>
                </div>
                <div className="p-5 rounded-[4px] bg-white border border-muted-aquifer/20 shadow-xs">
                  <span className="block font-mono text-3xl sm:text-4xl font-bold text-deep-aquifer">
                    420+
                  </span>
                  <span className="block font-mono text-xs text-deep-aquifer/70 mt-1 font-medium">
                    Engineered installations
                  </span>
                </div>
                <div className="p-5 rounded-[4px] bg-white border border-muted-aquifer/20 shadow-xs">
                  <span className="block font-mono text-3xl sm:text-4xl font-bold text-deep-aquifer">
                    2.4B
                  </span>
                  <span className="block font-mono text-xs text-deep-aquifer/70 mt-1 font-medium">
                    Litres infiltrated annually
                  </span>
                </div>
                <div className="p-5 rounded-[4px] bg-white border border-muted-aquifer/20 shadow-xs">
                  <span className="block font-mono text-3xl sm:text-4xl font-bold text-deep-aquifer">
                    100%
                  </span>
                  <span className="block font-mono text-xs text-deep-aquifer/70 mt-1 font-medium">
                    Passive gravity-fed flow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUNDERS & LEADERSHIP (Preserved for later use) */}
      {/*
      <section className="relative z-10 w-full py-16 sm:py-24 bg-white border-t border-muted-aquifer/15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs text-moss font-medium block mb-3">
              Leadership &amp; engineering desk
            </span>
            <h2 className="font-headline-h2 text-[28px] sm:text-[36px] font-semibold text-deep-aquifer tracking-tight mb-4">
              Meet our founders
            </h2>
            <p className="font-body-primary text-base font-normal text-deep-aquifer/85 leading-relaxed">
              Skyra was founded by civil hydrologists, environmental engineers, and fluid dynamicists united by a shared commitment to quiet, regenerative water infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FOUNDERS.map((founder, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[4px] overflow-hidden border border-muted-aquifer/20 p-5 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="relative w-full aspect-square rounded-[4px] overflow-hidden mb-5 bg-[#F8FCFE] border border-muted-aquifer/20">
                    <img
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      src={founder.image}
                    />
                  </div>
                  <div className="flex flex-col gap-1 mb-3">
                    <h3 className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-deep-aquifer">
                      {founder.name}
                    </h3>
                    <span className="font-mono text-xs text-moss font-medium">
                      {founder.role}
                    </span>
                    <span className="font-mono text-xs text-muted-aquifer">
                      {founder.credentials}
                    </span>
                  </div>
                  <p className="font-body-primary text-base font-normal text-deep-aquifer leading-relaxed mb-4">
                    {founder.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-muted-aquifer/15">
                  <span className="font-mono text-xs text-muted-aquifer block mb-1">
                    Key focus
                  </span>
                  <span className="font-mono text-xs text-deep-aquifer font-medium block">
                    {founder.expertise}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* SECTION 4: CLOSING MANDATE */}
      <section className="relative z-10 w-full bg-linear-to-b from-[#edf6fa] via-[#e5f1f7] to-[#edf6fa] text-deep-aquifer py-16 sm:py-24 border-t border-[#c8e0ee]/60">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left flex flex-col items-start gap-6 sm:gap-8">
          <span className="font-mono text-xs text-moss font-medium">
            The mandate
          </span>
          <blockquote className="font-headline-h2 text-[28px] sm:text-[36px] font-semibold text-deep-aquifer max-w-2xl tracking-tight">
            “Water security is not an emergency response. It is engineered infrastructure.”
          </blockquote>
          <p className="font-body-primary text-base font-normal text-deep-aquifer max-w-[48ch] leading-relaxed">
            We partner with landowners, institutional leaders, and civil developers who plan half a century ahead.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-button-text font-semibold text-button-text px-8 py-3.5 rounded-[6px] transition-all duration-300"
            >
              Start a conversation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white hover:bg-[#e7f3f9] text-deep-aquifer border border-[#bcd7e8]/60 hover:border-[#748D8C] font-button-text font-semibold text-button-text px-8 py-3.5 rounded-[6px] transition-all duration-300"
            >
              Explore solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


