import { Container } from "@/components/ui/container";
import { SectorCard } from "@/components/services/sector-card";
import { HomeIcon, BuildingIcon, LeafIcon } from "@/components/icons/service-icons";

const SECTORS = [
  {
    image: "/images/sector-residential.jpg",
    icon: <HomeIcon className="size-5" />,
    tone: "text-brand-green",
    eyebrow: "Residential",
    title: "Villas & Communities",
    description: "Compact automated rooftop multi-stage filtration, subterranean cisterns, and full potable water integration directly into home plumbing.",
    linkLabel: "Potable Rainwater Ready",
  },
  {
    image: "/images/sector-commercial.jpg",
    icon: <BuildingIcon className="size-5" />,
    tone: "text-brand-teal",
    eyebrow: "Commercial",
    title: "IT & Business Parks",
    description: "High-volume underground retention vaults, dual-circuit greywater networks, cooling tower make-up water recycling, and LEED water credits.",
    linkLabel: "LEED Point Optimization",
  },
  {
    image: "/images/sector-hospitality.jpg",
    icon: <BuildingIcon className="size-5" />,
    tone: "text-sky-600",
    eyebrow: "Hospitality & Industry",
    title: "Resorts & Facilities",
    description: "Peak storm runoff interception, oil-grit separators, continuous groundwater injection, and non-stop operational water security for guests.",
    linkLabel: "Peak Resilience",
  },
  {
    image: "/images/sector-agriculture.jpg",
    icon: <LeafIcon className="size-5" />,
    tone: "text-emerald-400",
    eyebrow: "Agriculture",
    title: "Plantations & Farms",
    description: "Contour swales, engineered retention ponds, and deep aquifer recharge shafts that stabilize open borewells and guarantee drought-resilient irrigation.",
    linkLabel: "Aquifer Borewell Security",
  },
] as const;

/** Sector Capabilities & Property Types. */
export function SectorCapabilities() {
  return (
    <section className="bg-ink py-16 lg:py-24">
      <Container>
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Tailored Engineering</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Sector Capabilities &amp; Built Environments
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-300">
            From private high-end residences to hyper-scale commercial hubs,
            SkyRa customizes the hydraulic profile to match the exact physical
            and environmental demands of each sector.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((s) => (
            <SectorCard key={s.title} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
