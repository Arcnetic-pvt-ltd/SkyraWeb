import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mission · Skyra",
  description:
    "Learn about Skyra's mission, closed-loop hydrological engineering, and our team of civil hydrologists.",
};

const FOUNDERS = [
  {
    initials: "MN",
    name: "Dr. Madhavan Nair",
    role: "Co-Founder & Chief Hydrologist",
    bio: "Pioneered subterranean aquifer recharge modeling and deep-borehole infiltration shafts across South India over a 22-year research career.",
  },
  {
    initials: "AR",
    name: "Ananya Ramachandran",
    role: "Co-Founder & Chief Executive Officer",
    bio: "Former Lead Environmental Infrastructure Consultant, driving Skyra's vision to scale closed-loop water autonomy for commercial campuses.",
  },
  {
    initials: "SM",
    name: "Siddharth Menon",
    role: "Co-Founder & VP of Systems Engineering",
    bio: "Hardware patent holder in passive fluid dynamics; designed Skyra's zero-energy Hydrostatic Vortex Sedimentation Chambers.",
  },
  {
    initials: "PK",
    name: "Dr. Preeti Kurup",
    role: "Co-Founder & Head of Ecological Sciences",
    bio: "Specialist in Miyawaki high-density afforestation and natural bio-swales, turning depleted soil layers into living water sponges.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden relative">
      {/* SECTION 1: HERO */}
      <section className="relative z-10 w-full pt-28 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-2">
              <span className="font-technical-label text-[12px] text-forest-slate uppercase tracking-wider font-semibold">
                OUR MISSION &amp; PHILOSOPHY
              </span>
            </div>
            <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer tracking-tight leading-tight">
              The Skyra Mission
            </h1>
            <p className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer/85 font-normal leading-tight">
              Reclaiming India’s seasonal downpours to build generational water independence.
            </p>
            <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
              Founded in Kalamassery, Kochi, Skyra re-engineers urban and commercial land into natural, high-yield subterranean water reservoirs &mdash; replacing temporary tanker reliance with lasting aquifer resilience.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: MINIMAL TECHNICAL APPROACH */}
      <section className="relative z-10 w-full py-16 bg-light-aquifer-canvas border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <span className="font-technical-label text-xs text-forest-slate uppercase tracking-wider font-semibold">
                01 • Atmospheric Capture
              </span>
              <h2 className="font-headline-h2 text-xl sm:text-2xl text-deep-aquifer font-bold">
                Rainwater Harvesting
              </h2>
              <p className="font-body-primary text-sm text-deep-aquifer/75 leading-relaxed">
                Catching monsoon rain where it falls. Zero-loss gravity infiltration shafts bypass high-evaporation ground levels directly into unconfined geological strata.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-technical-label text-xs text-forest-slate uppercase tracking-wider font-semibold">
                02 • Groundwater Recharge
              </span>
              <h2 className="font-headline-h2 text-xl sm:text-2xl text-deep-aquifer font-bold">
                Passive Infiltration
              </h2>
              <p className="font-body-primary text-sm text-deep-aquifer/75 leading-relaxed">
                Restoring subsoil equilibrium without chemical intervention. Soil percolation modeling and IS 15797:2008 compliant aquifer recharge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUNDERS & LEADERSHIP (Generic placeholders, 1-sentence bio, guide card style) */}
      <section className="relative z-10 w-full py-16 sm:py-24 bg-white border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="font-technical-label text-[12px] text-forest-slate font-semibold uppercase tracking-wider block mb-2">
              LEADERSHIP
            </span>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight mb-2">
              Founders
            </h2>
            <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
              Engineers and hydrologists scaling water resilience across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDERS.map((founder, idx) => (
              <div
                key={idx}
                className="rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs flex flex-col justify-between gap-4"
              >
                <div className="flex flex-col gap-3">
                  {/* Generic Placeholder Icon / Initials Badge */}
                  <div className="size-12 rounded-[4px] bg-light-aquifer-canvas border border-muted-aquifer/20 flex items-center justify-center font-mono text-sm font-bold text-deep-aquifer shadow-xs">
                    {founder.initials}
                  </div>
                  <div>
                    <h3 className="font-headline-h3 text-base font-bold text-deep-aquifer leading-snug">
                      {founder.name}
                    </h3>
                    <span className="font-technical-label text-[11px] text-moss font-semibold block mt-0.5">
                      {founder.role}
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-deep-aquifer/75 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA SECTION REWORKED TO MATCH GUIDE */}
      <section className="relative z-10 w-full bg-light-aquifer-canvas text-deep-aquifer py-16 sm:py-24 border-t border-muted-aquifer/15">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-5">
          <span className="font-technical-label text-[12px] uppercase tracking-wider text-forest-slate font-semibold">
            Book a site survey
          </span>
          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
            Every roof is a chance to catch the rain. Let’s find yours.
          </h2>
          <p className="font-body-large text-body-large text-deep-aquifer/80 max-w-xl leading-relaxed">
            We&apos;ll reply on WhatsApp within one working day. Written report and quote before any work starts.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
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
        </div>
      </section>
    </div>
  );
}
