import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  // title: "About Us & Founding Team | Skyra Water Solutions",
  title: "The Skyra Mission | Hydrological Foundation & Philosophy",

  description:
    "Learn about Skyra's mission, closed-loop hydrological engineering, and our founding team of civil hydrologists, environmental scientists, and systems engineers.",
};

const FOUNDERS = [
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
      {/* Ambient Atmospheric Floating Gradients (Same as Home Page) */}
      <div className="absolute top-0 inset-x-0 h-[100vh] pointer-events-none z-0 overflow-hidden">
        {/* Top Right Primary Aqua-Teal Gradient Aura */}
        <div className="absolute -top-[10%] right-[-5%] w-[750px] h-[750px] rounded-full bg-[#cde8e6]/85 blur-[100px] motion-safe:animate-pulse"></div>
        {/* Secondary Soft Mint/Moss Glow */}
        <div className="absolute top-[15%] right-[12%] w-[550px] h-[550px] rounded-full bg-[#ccebc8]/60 blur-[120px]"></div>
        {/* Soft Aquifer Light Mesh */}
        <div className="absolute top-[5%] right-[30%] w-[600px] h-[600px] rounded-full bg-[#d8f3f2]/70 blur-[110px]"></div>
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative z-10 w-full pt-20 pb-24 sm:pb-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col gap-8 max-w-3xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="inline-block w-2 h-2 rounded-full bg-moss animate-ping"></span>
              <span className="font-body-sm text-body-sm text-secondary font-semibold tracking-normal">
                Our Foundation &amp; Philosophy
              </span>
            </div>
            <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer tracking-tight leading-tight">
              The Skyra Mission
            </h1>
            <p className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer/80 font-normal leading-tight">
              Reclaiming India’s seasonal downpours to build generational water independence.
            </p>
            <p className="font-body-large text-body-large text-deep-aquifer/75 leading-relaxed">
              Founded in Kalamassery, Kochi, Skyra re-engineers urban and commercial land into natural, high-yield subterranean water reservoirs — replacing temporary tanker reliance with lasting aquifer resilience.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCT CONTEXT & HYDROLOGICAL MONOGRAPH */}
      <section className="relative z-10 w-full pb-28 space-y-28 sm:space-y-36">
        {/* Beat 1: The Scarcity Myth */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-7 space-y-6">
              <span className="font-technical-label text-body-sm text-moss font-semibold uppercase tracking-wider block">
                01 • The Problem We Solve
              </span>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Architectural Scarcity vs. Atmospheric Bounty
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer font-medium leading-relaxed">
                Skyra started with a simple, frustrating fact: India isn’t short on rain — it’s short on places to keep it.
              </p>
              <p className="font-body-primary text-body-primary text-deep-aquifer/70 leading-relaxed">
                Every monsoon season, trillions of litres of pristine rainwater cascade across rooftops, parking aprons, and industrial parks, only to wash into overburdened storm drains and vanish into the sea within 48 hours. Meanwhile, borehole pumps drill 500+ feet deeper every summer to pull brackish brine from exhausted bedrock.
              </p>
              <p className="font-body-primary text-body-primary text-deep-aquifer/70 leading-relaxed">
                The scarcity we experience is rarely atmospheric. It is architectural. We built our cities to repel moisture rather than receive it.
              </p>
            </div>

            <div className="md:col-span-5 pt-2">
              <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-muted-aquifer/15 shadow-sm flex flex-col gap-6">
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

        {/* Beat 2: Passive Gravity Infiltration */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-5 order-2 md:order-1 pt-2">
              <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-muted-aquifer/15 shadow-sm flex flex-col gap-6">
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
              <span className="font-technical-label text-body-sm text-moss font-semibold uppercase tracking-wider block">
                02 • Our Technical Approach
              </span>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Passive Infiltration &amp; Soil Hydrology
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer font-medium leading-relaxed">
                Rather than relying on oversized concrete holding tanks that silt up after three seasons, we study lithology, rainfall cadence, and soil percolation.
              </p>
              <p className="font-body-primary text-body-primary text-deep-aquifer/70 leading-relaxed">
                We design zero-loss gravity infiltration shafts, modular bio-filtration chambers, and naturalized aquifers that recharge subsoil horizons automatically.
              </p>
              <p className="font-body-primary text-body-primary text-deep-aquifer/70 leading-relaxed">
                When an institutional campus or residential community catches water properly, the earth beneath becomes their reservoir — clean, silent, and self-replenishing for generations.
              </p>
            </div>
          </div>
        </div>

        {/* Beat 3: Proving Grounds & Impact */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="space-y-12">
            <div className="space-y-4 max-w-3xl">
              <span className="font-technical-label text-body-sm text-moss font-semibold uppercase tracking-wider block">
                03 • Verification &amp; Scale
              </span>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Kalamassery R&amp;D Proving Grounds
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
                Engineered at our central laboratory along the NH 544 Corridor in Kalamassery, Kerala, every Skyra installation is monitored against strict hydrological telemetry standards.
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-[1.79/1] bg-surface-container border border-muted-aquifer/15">
                <img
                  alt="Kalamassery Proving Grounds Prototype"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Vzz2fBWrD03Mc2YZWeYhp7xaWrJXpWdBt0q_gEMh4Pn47tiQE9AT0fqFaDADlxf1yYvfcXEOvkD2SWuhgLM4Omuf7ujmqaXluAtRajObVInREPtrjxnKwMAukSw29oaESwxWJ1jseIXP402vrb0ya96pstpTBa0CAZULnd0XDRxtb1i0uMRnuCh_FAgZzA2eYn78zo6rRA0-9L4JW0N8zljUNgjXbM4Qn7jwN11jANqKYxm2RQ5SZvox8W"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-aquifer/80 via-deep-aquifer/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <span className="font-technical-label text-technical-label tracking-wide text-white/90">
                    Kalamassery Proving Grounds • Commercial Prototype 04
                  </span>
                  <span className="hidden sm:inline-block font-technical-label text-technical-label text-white/70">
                    Passive Infiltration Series
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2">
                <div className="p-5 rounded-xl bg-white/80 backdrop-blur-md border border-muted-aquifer/15 shadow-sm">
                  <span className="block font-metric-mono-lg text-metric-mono-lg text-deep-aquifer">
                    14
                  </span>
                  <span className="block font-body-sm text-body-sm text-deep-aquifer/65 mt-1 font-medium">
                    States Active Across India
                  </span>
                </div>
                <div className="p-5 rounded-xl bg-white/80 backdrop-blur-md border border-muted-aquifer/15 shadow-sm">
                  <span className="block font-metric-mono-lg text-metric-mono-lg text-deep-aquifer">
                    420+
                  </span>
                  <span className="block font-body-sm text-body-sm text-deep-aquifer/65 mt-1 font-medium">
                    Engineered Installations
                  </span>
                </div>
                <div className="p-5 rounded-xl bg-white/80 backdrop-blur-md border border-muted-aquifer/15 shadow-sm">
                  <span className="block font-metric-mono-lg text-metric-mono-lg text-deep-aquifer">
                    2.4B
                  </span>
                  <span className="block font-body-sm text-body-sm text-deep-aquifer/65 mt-1 font-medium">
                    Litres Infiltrated Annually
                  </span>
                </div>
                <div className="p-5 rounded-xl bg-white/80 backdrop-blur-md border border-muted-aquifer/15 shadow-sm">
                  <span className="block font-metric-mono-lg text-metric-mono-lg text-deep-aquifer">
                    100%
                  </span>
                  <span className="block font-body-sm text-body-sm text-deep-aquifer/65 mt-1 font-medium">
                    Passive Gravity-Fed Flow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUNDERS & LEADERSHIP */}
      <section className="relative z-10 w-full py-24 sm:py-32 bg-white border-t border-muted-aquifer/15">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-technical-label text-body-sm text-moss font-semibold uppercase tracking-wider block mb-3">
              Leadership &amp; Engineering Desk
            </span>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight mb-4">
              Meet Our Founders
            </h2>
            <p className="font-body-large text-body-large text-muted-aquifer leading-relaxed">
              Skyra was founded by civil hydrologists, environmental engineers, and fluid dynamicists united by a shared commitment to quiet, regenerative water infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FOUNDERS.map((founder, idx) => (
              <div
                key={idx}
                className="group bg-light-aquifer-canvas rounded-2xl overflow-hidden border border-muted-aquifer/20 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-surface-container border border-muted-aquifer/15">
                    <img
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      src={founder.image}
                    />
                  </div>
                  <div className="flex flex-col gap-1 mb-3">
                    <h3 className="font-headline-h3 text-[20px] font-bold text-deep-aquifer">
                      {founder.name}
                    </h3>
                    <span className="font-body-sm text-[13px] text-moss font-semibold">
                      {founder.role}
                    </span>
                    <span className="font-technical-label text-[11px] text-muted-aquifer">
                      {founder.credentials}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-deep-aquifer/70 leading-relaxed mb-4">
                    {founder.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-muted-aquifer/15">
                  <span className="font-technical-label text-[10px] uppercase tracking-wider text-muted-aquifer block mb-1">
                    Key Focus
                  </span>
                  <span className="font-body-sm text-[12px] text-deep-aquifer/80 font-medium block">
                    {founder.expertise}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CLOSING MANDATE */}
      <section className="relative z-10 w-full bg-deep-aquifer text-light-aquifer-canvas py-28 sm:py-36">
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
              className="inline-flex items-center justify-center bg-moss hover:bg-forest-slate text-white font-button-text text-button-text px-8 py-3.5 rounded-full shadow-sm transition-all duration-200"
            >
              Start a Conversation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-white/90 font-button-text text-button-text px-8 py-3.5 rounded-full transition-all duration-200"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


