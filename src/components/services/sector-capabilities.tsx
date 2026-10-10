"use client";

import { SectorCard } from "@/components/services/sector-card";
import { HomeIcon, BuildingIcon, LeafIcon } from "@/components/icons/service-icons";

const SECTORS = [
  {
    image: "/images/sector-residential-v2.jpg",
    icon: <HomeIcon className="size-3.5" />,
    badgeTone: "bg-white border-muted-aquifer/30 text-muted-aquifer",
    eyebrow: "Residential",
    title: "Villas & gated communities",
    description: "Compact automated rooftop multi-stage filtration, subterranean cisterns, and full potable water integration directly into domestic plumbing.",
    linkLabel: "Potable rainwater ready",
    targetHref: "/contact?sector=residential",
  },
  {
    image: "/images/sector-commercial-v2.jpg",
    icon: <BuildingIcon className="size-3.5" />,
    badgeTone: "bg-white border-moss/30 text-moss",
    eyebrow: "Commercial",
    title: "IT parks & corporate hubs",
    description: "High-volume underground retention vaults, dual-circuit greywater networks, cooling tower make-up water recycling, and LEED water credits.",
    linkLabel: "LEED point optimization",
    targetHref: "/contact?sector=commercial",
  },
  {
    image: "/images/sector-hospitality-v2.jpg",
    icon: <BuildingIcon className="size-3.5" />,
    badgeTone: "bg-white border-muted-aquifer/30 text-muted-aquifer",
    eyebrow: "Hospitality",
    title: "Resorts & eco-hotels",
    description: "Peak storm runoff interception, oil-grit separators, continuous groundwater injection, and non-stop operational water security for guests.",
    linkLabel: "Peak resilience",
    targetHref: "/contact?sector=hospitality",
  },
  {
    image: "/images/sector-agriculture-v2.jpg",
    icon: <LeafIcon className="size-3.5" />,
    badgeTone: "bg-white border-moss/30 text-moss",
    eyebrow: "Agriculture",
    title: "Plantations & Miyawaki forests",
    description: "Contour swales, engineered retention ponds, and deep aquifer recharge shafts that stabilize open borewells and guarantee drought-resilient irrigation.",
    linkLabel: "Aquifer borewell security",
    targetHref: "/contact?sector=agriculture",
  },
] as const;

/** Sector Capabilities & Built Environments Section. Aligned with modern Skyra design principles. */
export function SectorCapabilities() {
  return (
    <section className="relative w-full bg-light-aquifer-canvas py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-muted-aquifer/15" id="sectors">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-moss"></span>
            <span className="font-mono text-xs font-medium text-moss">
              Tailored engineering
            </span>
          </div>
          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight leading-tight">
            Sector capabilities &amp; built environments
          </h2>
          <p className="font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
            From private high-end residences to hyper-scale commercial hubs, Skyra customizes the hydraulic profile to match the exact physical and environmental demands of each sector.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((s) => (
            <SectorCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
