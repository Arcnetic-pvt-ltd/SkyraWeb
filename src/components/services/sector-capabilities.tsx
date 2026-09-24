"use client";

import { SectorCard } from "@/components/services/sector-card";
import { HomeIcon, BuildingIcon, LeafIcon } from "@/components/icons/service-icons";

const SECTORS = [
  {
    image: "/images/sector-residential-v2.jpg",
    icon: <HomeIcon className="size-3.5" />,
    badgeTone: "bg-white/90 border-[#0098a6]/30 text-[#0098a6]",
    eyebrow: "Residential",
    title: "Villas & Gated Communities",
    description: "Compact automated rooftop multi-stage filtration, subterranean cisterns, and full potable water integration directly into domestic plumbing.",
    linkLabel: "Potable Rainwater Ready",
    targetHref: "/contact?sector=residential",
  },
  {
    image: "/images/sector-commercial-v2.jpg",
    icon: <BuildingIcon className="size-3.5" />,
    badgeTone: "bg-white/90 border-moss/30 text-moss",
    eyebrow: "Commercial",
    title: "IT Parks & Corporate Hubs",
    description: "High-volume underground retention vaults, dual-circuit greywater networks, cooling tower make-up water recycling, and LEED water credits.",
    linkLabel: "LEED Point Optimization",
    targetHref: "/contact?sector=commercial",
  },
  {
    image: "/images/sector-hospitality-v2.jpg",
    icon: <BuildingIcon className="size-3.5" />,
    badgeTone: "bg-white/90 border-sky-600/30 text-sky-600",
    eyebrow: "Hospitality",
    title: "Resorts & Eco-Hotels",
    description: "Peak storm runoff interception, oil-grit separators, continuous groundwater injection, and non-stop operational water security for guests.",
    linkLabel: "Peak Resilience",
    targetHref: "/contact?sector=hospitality",
  },
  {
    image: "/images/sector-agriculture-v2.jpg",
    icon: <LeafIcon className="size-3.5" />,
    badgeTone: "bg-white/90 border-emerald-600/30 text-emerald-600",
    eyebrow: "Agriculture",
    title: "Plantations & Miyawaki Forests",
    description: "Contour swales, engineered retention ponds, and deep aquifer recharge shafts that stabilize open borewells and guarantee drought-resilient irrigation.",
    linkLabel: "Aquifer Borewell Security",
    targetHref: "/contact?sector=agriculture",
  },
] as const;

/** Sector Capabilities & Built Environments Section. Aligned with modern Skyra design principles. */
export function SectorCapabilities() {
  return (
    <section className="relative w-full bg-light-aquifer-canvas py-24 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-muted-aquifer/15" id="sectors">
      {/* Ambient background atmosphere blobs */}
      <div aria-hidden="true" className="absolute -top-32 right-10 w-[600px] h-[600px] rounded-full bg-[#cde8e6]/60 blur-[130px] pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-32 left-10 w-[600px] h-[600px] rounded-full bg-[#ccebc8]/50 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-moss animate-pulse"></span>
            <span className="font-technical-label text-body-sm text-moss font-semibold uppercase tracking-wider">
              TAILORED ENGINEERING
            </span>
          </div>
          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight leading-tight">
            Sector Capabilities &amp; Built Environments
          </h2>
          <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
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
