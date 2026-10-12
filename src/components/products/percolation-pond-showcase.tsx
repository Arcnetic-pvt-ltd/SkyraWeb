"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";

interface AnatomyItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  icon: string;
}

const ANATOMY_ITEMS: AnatomyItem[] = [
  {
    id: "runoff",
    number: "01",
    title: "Stormwater runoff inlet",
    tagline: "Catchment area flume & channeling",
    description:
      "Engineered concrete or stone flumes intercept high-velocity monsoonal sheet runoff from rooftops, paved yards, and natural terrain, safely routing surging water into the retention basin without bank erosion.",
    highlight: "High-capacity flow diversion",
    icon: "water_fall",
  },
  {
    id: "basin",
    number: "02",
    title: "Percolation pond basin",
    tagline: "DR masonry retention construction",
    description:
      "A high-volume open excavation structured with Dry Rubble Masonry. Sized to buffer peak 24-hour rainfall surges, dissipating water energy and allowing sediments to settle before downward infiltration.",
    highlight: "Surge buffer volume",
    icon: "water",
  },
  {
    id: "fence",
    number: "03",
    title: "Safety perimeter fence",
    tagline: "Site-specific compliance enclosure",
    description:
      "Heavy-duty protective perimeter railing installed as per campus and factory statutory safety norms. Ensures zero fall hazards while maintaining unobstructed visual inspection access.",
    highlight: "Industrial safety compliant",
    icon: "fence",
  },
  {
    id: "drm-walls",
    number: "04",
    title: "DR masonry walls",
    tagline: "Durable & porous stone matrix",
    description:
      "Dry Rubble Masonry walls built from interlocking natural stone boulders without impervious mortar bonding. Provides structural retaining strength while allowing water to seep laterally into surrounding soil horizons.",
    highlight: "Lateral subsoil seepage",
    icon: "texture",
  },
  {
    id: "soil-layers",
    number: "05",
    title: "Multi-tier soil filtration",
    tagline: "Water percolates through soil strata",
    description:
      "Water filters by gravity through a natural geological bed: graded gravel, pebble layers, and porous native soil. This natural filtration purifies suspended particulate matter before water reaches the aquifer.",
    highlight: "Natural bio-mechanical filter",
    icon: "layers",
  },
  {
    id: "aquifer",
    number: "06",
    title: "Subterranean aquifer recharge",
    tagline: "Direct groundwater table replenishment",
    description:
      "Purified rainwater feeds continuously into unconfined and semi-confined subterranean aquifers, building localized freshwater lenses, reviving dry borewells, and elevating static water tables across the region.",
    highlight: "Regional water table revival",
    icon: "expand",
  },
];

const SECTORS = [
  {
    id: "industries",
    title: "Industries",
    icon: "factory",
    desc: "Manufacturing plants, assembly zones, logistics warehouses, and heavy engineering yards with vast paved footprints.",
    impact: "Zero yard waterlogging & compliance with CGWA NOC withdrawal mandates.",
  },
  {
    id: "commercial",
    title: "Large Commercial Campuses",
    icon: "apartment",
    desc: "IT parks, corporate SEZs, business hubs, and technology parks requiring pristine landscape aesthetics and flood safety.",
    impact: "Elevates campus ESG ratings (LEED/IGBC water credits) & protects low-lying infrastructure.",
  },
  {
    id: "institutions",
    title: "Institutions",
    icon: "school",
    desc: "Universities, research centers, healthcare networks, and residential boarding schools with sprawling grounds.",
    impact: "Secures permanent drinking water resilience for high on-campus populations.",
  },
  {
    id: "farmlands",
    title: "Agricultural Farmlands",
    icon: "agriculture",
    desc: "Agricultural estates, orchards, plantations, and farm belts dealing with depleted borewells and seasonal water shortages.",
    impact: "Restores shallow unconfined aquifers, sustaining irrigation wells through dry summer months.",
  },
  {
    id: "municipal",
    title: "Urban & Municipal Areas",
    icon: "location_city",
    desc: "Municipal townships, civic parks, smart city stormwater reserves, and public infrastructure developments.",
    impact: "Mitigates flash urban flooding while turning troublesome monsoonal runoff into communal water capital.",
  },
];

export function PercolationPondShowcase() {
  const [activeAnatomy, setActiveAnatomy] = useState<string>("drm-walls");
  const [activeSector, setActiveSector] = useState<string>("industries");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      setIsZoomed(false);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const currentAnatomy =
    ANATOMY_ITEMS.find((item) => item.id === activeAnatomy) || ANATOMY_ITEMS[3];
  const currentSector =
    SECTORS.find((sector) => sector.id === activeSector) || SECTORS[0];

  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      {/* Section Header */}
      <div className="flex flex-col gap-3 max-w-3xl pb-6 border-b border-muted-aquifer/20">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#eef7fb] border border-[#bcd7e8]/60 text-moss font-mono text-[11px] font-semibold tracking-wide">
            <span className="size-1.5 rounded-full bg-moss inline-block" />
            MACRO-CATCHMENT HYDROLOGY
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-white border border-[#bcd7e8]/60 text-forest-slate font-mono text-[11px] font-medium">
            DRY RUBBLE MASONRY (DRM)
          </span>
        </div>

        <h2 className="font-headline-h2 text-[28px] sm:text-[34px] lg:text-[38px] font-semibold text-deep-aquifer tracking-tight leading-tight">
          Percolation Pond &middot; Capture &bull; Filter &bull; Recharge
        </h2>

        <p className="font-body-large text-base sm:text-[17px] text-deep-aquifer/85 leading-relaxed">
          Turning monsoonal stormwater runoff into an engineered, sustainable source for groundwater. For large campuses and wide catchments, Skyra pairs modular Rainsink shafts with Dry Rubble Masonry (DRM) percolation ponds to handle massive flood surges and actively restore regional aquifers.
        </p>
      </div>

      {/* 3 Core Benefit Pillars (Matching Top Infographic Badges) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Pillar 1: Prevents Flooding */}
        <div className="p-6 rounded-[6px] bg-white border border-muted-aquifer/20 hover:border-moss/50 transition-all duration-300 flex flex-col justify-between gap-4 group shadow-xs">
          <div className="flex items-start justify-between">
            <div className="size-12 rounded-[6px] bg-[#EBF5FB] border border-[#bcd7e8]/60 flex items-center justify-center text-forest-slate group-hover:bg-[#E2F0F7] group-hover:text-deep-aquifer transition-colors">
              <span className="material-symbols-outlined text-[26px] text-deep-aquifer">tsunami</span>
            </div>
            <span className="font-mono text-[11px] text-muted-aquifer font-medium">01 &middot; SURGE CONTROL</span>
          </div>

          <div>
            <h3 className="font-headline-h3 text-[20px] font-semibold text-deep-aquifer tracking-tight mb-1">
              Prevents Flooding
            </h3>
            <p className="font-mono text-xs text-forest-slate font-medium mb-2">
              Captures and controls excess runoff
            </p>
            <p className="font-body-primary text-[13.5px] text-deep-aquifer/80 leading-relaxed">
              Buffers sudden cloudburst surges from campus yards, logistics aprons, and rooftops. Dissipates flow energy and prevents localized inundation.
            </p>
          </div>

          <div className="pt-3 border-t border-muted-aquifer/15 flex items-center justify-between text-xs font-mono text-deep-aquifer/70">
            <span>Peak surge buffering</span>
            <span className="text-moss font-semibold">Zero yard pooling</span>
          </div>
        </div>

        {/* Pillar 2: Recharges Groundwater */}
        <div className="p-6 rounded-[6px] bg-white border border-muted-aquifer/20 hover:border-moss/50 transition-all duration-300 flex flex-col justify-between gap-4 group shadow-xs">
          <div className="flex items-start justify-between">
            <div className="size-12 rounded-[6px] bg-[#EAF7EE] border border-[#a8ddb5]/60 flex items-center justify-center text-moss group-hover:bg-[#dcf2e3] transition-colors">
              <span className="material-symbols-outlined text-[26px]">water_drop</span>
            </div>
            <span className="font-mono text-[11px] text-muted-aquifer font-medium">02 &middot; SUBTERRANEAN HEAD</span>
          </div>

          <div>
            <h3 className="font-headline-h3 text-[20px] font-semibold text-deep-aquifer tracking-tight mb-1">
              Recharges Groundwater
            </h3>
            <p className="font-mono text-xs text-moss font-medium mb-2">
              Lets water percolate back into the aquifer
            </p>
            <p className="font-body-primary text-[13.5px] text-deep-aquifer/80 leading-relaxed">
              Creates continuous gravity-driven infiltration through porous dry rubble stone and multi-layered soil strata, reviving deep borewells and unconfined water tables.
            </p>
          </div>

          <div className="pt-3 border-t border-muted-aquifer/15 flex items-center justify-between text-xs font-mono text-deep-aquifer/70">
            <span>Aquifer lens recharge</span>
            <span className="text-moss font-semibold">Sustained borewell yield</span>
          </div>
        </div>

        {/* Pillar 3: Supports Sustainability */}
        <div className="p-6 rounded-[6px] bg-white border border-muted-aquifer/20 hover:border-moss/50 transition-all duration-300 flex flex-col justify-between gap-4 group shadow-xs">
          <div className="flex items-start justify-between">
            <div className="size-12 rounded-[6px] bg-[#F2F8EE] border border-[#cbe4bc]/60 flex items-center justify-center text-moss group-hover:bg-[#e4f3dc] transition-colors">
              <span className="material-symbols-outlined text-[26px]">eco</span>
            </div>
            <span className="font-mono text-[11px] text-muted-aquifer font-medium">03 &middot; ECO-RESTORATION</span>
          </div>

          <div>
            <h3 className="font-headline-h3 text-[20px] font-semibold text-deep-aquifer tracking-tight mb-1">
              Supports Sustainability
            </h3>
            <p className="font-mono text-xs text-[#527d24] font-medium mb-2">
              Conserves water and restores local ecosystems
            </p>
            <p className="font-body-primary text-[13.5px] text-deep-aquifer/80 leading-relaxed">
              100% natural, chemical-free, gravity-driven design that restores pre-development hydrological balance, supporting corporate ESG, CGWA NOC, and IGBC/LEED credits.
            </p>
          </div>

          <div className="pt-3 border-t border-muted-aquifer/15 flex items-center justify-between text-xs font-mono text-deep-aquifer/70">
            <span>Water neutrality index</span>
            <span className="text-moss font-semibold">CGWA &amp; ESG positive</span>
          </div>
        </div>
      </div>

      {/* Main Diagram & Interactive Engineering Anatomy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left 7 Columns: Visual Diagram Container */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="relative rounded-[6px] border border-muted-aquifer/30 bg-white p-3 sm:p-4 shadow-sm overflow-hidden flex flex-col group">
            {/* Top Bar with Status */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-muted-aquifer/15 font-mono text-xs">
              <div className="flex items-center gap-2 text-deep-aquifer">
                <span className="size-2 rounded-full bg-moss animate-pulse" />
                <span className="font-semibold text-[11px] sm:text-xs">
                  SYSTEM SCHEMATIC: DRY RUBBLE MASONRY PERCOLATION POND
                </span>
              </div>
            </div>

            {/* Clickable Image View */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative w-full aspect-[1024/935] cursor-pointer rounded-[4px] overflow-hidden bg-slate-50 transition-transform duration-300 hover:scale-[1.005]"
              title="Click diagram to view enlarged"
            >
              <Image
                src="/images/percolation-pond-infographic.jpg"
                alt="Percolation Pond - Capture, Filter, Recharge System Architecture Diagram"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-contain"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-deep-aquifer/5 transition-colors" />
            </div>

            {/* Caption / Diagram Footnote */}
            <div className="mt-3 pt-3 border-t border-muted-aquifer/15 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-aquifer">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-moss text-[15px]">verified</span>
                <span>Hydrological Cross-Section &middot; Capture &bull; Filter &bull; Recharge</span>
              </div>
              <span className="text-[11px]">IS 15797:2008 &bull; CGWA Norms</span>
            </div>
          </div>

          {/* Quick Callouts Strip below Image */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
            <div className="p-2.5 rounded-[4px] bg-white border border-muted-aquifer/20 flex flex-col gap-1">
              <span className="text-muted-aquifer uppercase text-[9px] tracking-wider">Wall Construction</span>
              <span className="text-deep-aquifer font-semibold">DR Masonry (DRM)</span>
            </div>
            <div className="p-2.5 rounded-[4px] bg-white border border-muted-aquifer/20 flex flex-col gap-1">
              <span className="text-muted-aquifer uppercase text-[9px] tracking-wider">Infiltration Mode</span>
              <span className="text-deep-aquifer font-semibold">Lateral &amp; Downward</span>
            </div>
            <div className="p-2.5 rounded-[4px] bg-white border border-muted-aquifer/20 flex flex-col gap-1">
              <span className="text-muted-aquifer uppercase text-[9px] tracking-wider">Percolation Bed</span>
              <span className="text-deep-aquifer font-semibold">Graded Soil Strata</span>
            </div>
            <div className="p-2.5 rounded-[4px] bg-white border border-muted-aquifer/20 flex flex-col gap-1">
              <span className="text-muted-aquifer uppercase text-[9px] tracking-wider">Target Horizon</span>
              <span className="text-deep-aquifer font-semibold">Unconfined Aquifer</span>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Interactive Anatomy Selector & Technical Breakdown */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          <div className="p-5 sm:p-6 rounded-[6px] bg-white border border-muted-aquifer/25 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-muted-aquifer/15">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-moss text-[20px]">architecture</span>
                <span className="font-headline-h3 text-base sm:text-[17px] font-semibold text-deep-aquifer">
                  Cross-Section Anatomy
                </span>
              </div>
              <span className="font-mono text-[10px] text-muted-aquifer uppercase tracking-wider">
                Select Component
              </span>
            </div>

            {/* Component Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 font-mono text-[11px]">
              {ANATOMY_ITEMS.map((item) => {
                const isSelected = item.id === activeAnatomy;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveAnatomy(item.id)}
                    className={`p-2 rounded-[4px] text-left transition-all flex flex-col justify-between gap-0.5 min-h-[50px] sm:min-h-[46px] border cursor-pointer ${
                      isSelected
                        ? "bg-deep-aquifer text-white border-deep-aquifer shadow-xs"
                        : "bg-[#F8FCFE] hover:bg-[#EFF6FA] text-deep-aquifer border-muted-aquifer/25"
                    }`}
                  >
                    <span className={`text-[9.5px] ${isSelected ? "text-moss font-semibold" : "text-muted-aquifer"}`}>
                      {item.number}
                    </span>
                    <span className="font-medium line-clamp-2 leading-tight text-[11px] sm:text-[11.5px]">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Component Deep Dive Card */}
            <div className="p-5 rounded-[4px] bg-[#F3F9FC] border border-[#bddae9]/70 flex flex-col gap-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-moss font-semibold">
                  <span className="material-symbols-outlined text-[18px]">{currentAnatomy.icon}</span>
                  <span>{currentAnatomy.number} &middot; {currentAnatomy.highlight}</span>
                </div>
                <span className="font-mono text-[10px] text-deep-aquifer/60 uppercase">Specification</span>
              </div>

              <div>
                <h4 className="font-headline-h3 text-[18px] font-semibold text-deep-aquifer">
                  {currentAnatomy.title}
                </h4>
                <p className="font-mono text-xs text-forest-slate font-medium mt-0.5">
                  {currentAnatomy.tagline}
                </p>
                <p className="font-body-primary text-[13.5px] text-deep-aquifer/85 leading-relaxed mt-2.5">
                  {currentAnatomy.description}
                </p>
              </div>
            </div>

            {/* Quick Sizing & Engineering Rules */}
            <div className="space-y-2 pt-2 border-t border-muted-aquifer/15 text-xs font-mono text-deep-aquifer/80">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-moss text-[15px] shrink-0 mt-0.5">check_circle</span>
                <span><strong>Sizing formula:</strong> 150–250 m³ storage per acre of open runoff catchment.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-moss text-[15px] shrink-0 mt-0.5">check_circle</span>
                <span><strong>DRM porosity:</strong> 25–35% void ratio across wall joints for lateral drainage.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-moss text-[15px] shrink-0 mt-0.5">check_circle</span>
                <span><strong>Silt mitigation:</strong> Boulder silt trap apron at flume inlet stops fine sediment accumulation.</span>
              </div>
            </div>
          </div>

          {/* Consultation Fast-Track Callout */}
          <div className="p-5 rounded-[6px] bg-linear-to-br from-[#0c1a2d] to-[#173050] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#22446d]/60 shadow-sm">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <span className="font-mono text-[11px] text-[#86b5db] uppercase tracking-wide">
                Site Topography Assessment
              </span>
              <p className="text-sm font-medium text-white">
                Need a custom percolation pond blueprint for your acreage?
              </p>
            </div>
            <Link
              href="/contact?product=rainsink-pond"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[4px] bg-moss hover:bg-[#68852e] text-white text-xs font-medium font-mono whitespace-nowrap transition-colors cursor-pointer shrink-0"
            >
              <span>Get pond sizing</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>

      {/* "Ideal For" Application Sectors (Matching Bottom Banner of Infographic) */}
      <div className="p-6 sm:p-8 rounded-[6px] bg-white border border-muted-aquifer/25 shadow-sm flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-muted-aquifer/15">
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="size-2 rounded-full bg-moss inline-block" />
              <span className="font-mono text-xs text-moss font-semibold uppercase tracking-wider">
                Deployment Applicability
              </span>
            </div>
            <h3 className="font-headline-h2 text-[22px] sm:text-[26px] font-semibold text-deep-aquifer tracking-tight">
              Ideal for high-runoff enterprises &amp; vast acreage
            </h3>
          </div>

          <p className="font-mono text-xs text-forest-slate max-w-md sm:text-right">
            Tailored civil blueprints engineered for terrain gradient, soil conductivity, and local rainfall intensity.
          </p>
        </div>

        {/* 5 Sector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {SECTORS.map((sector) => {
            const isSelected = sector.id === activeSector;
            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => setActiveSector(sector.id)}
                className={`p-4 rounded-[6px] border text-left transition-all flex flex-col justify-between gap-3 cursor-pointer group ${
                  isSelected
                    ? "bg-[#F0F7FB] border-moss/80 shadow-xs"
                    : "bg-white hover:bg-[#F9FCFE] border-muted-aquifer/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`size-10 rounded-[4px] flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-deep-aquifer text-white"
                        : "bg-[#F3F7FA] text-forest-slate group-hover:bg-[#EAF2F6]"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[22px]">{sector.icon}</span>
                  </div>
                  {isSelected && (
                    <span className="size-1.5 rounded-full bg-moss" />
                  )}
                </div>

                <div>
                  <h4 className="font-headline-h3 text-[15px] font-semibold text-deep-aquifer leading-tight mb-1">
                    {sector.title}
                  </h4>
                  <p className="font-body-primary text-[12px] text-deep-aquifer/75 leading-relaxed line-clamp-3">
                    {sector.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-muted-aquifer/15 font-mono text-[10px] text-forest-slate font-medium">
                  Click to inspect impact &rarr;
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Sector Summary & Infographic Quote Block */}
        <div className="p-5 sm:p-6 rounded-[6px] bg-[#F2F7FA] border border-[#bcd7e8]/60 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center gap-2 font-mono text-xs text-moss font-semibold">
              <span className="material-symbols-outlined text-[17px]">{currentSector.icon}</span>
              <span>{currentSector.title.toUpperCase()} IMPACT ANALYSIS</span>
            </div>
            <p className="font-body-primary text-sm sm:text-[15px] text-deep-aquifer/90 leading-relaxed font-normal">
              {currentSector.impact}
            </p>
          </div>

          {/* Infographic Quote Callout */}
          <div className="lg:max-w-md p-4 rounded-[4px] bg-white border border-[#bddae9] border-l-4 border-l-moss shadow-2xs">
            <p className="font-body-primary text-[13px] sm:text-[13.5px] text-deep-aquifer leading-relaxed italic">
              &ldquo;By capturing massive volumes of runoff, percolation ponds prevent localized flooding while turning problematic stormwater into a valuable resource for replenishing local aquifers.&rdquo;
            </p>
            <span className="font-mono text-[10.5px] text-muted-aquifer block mt-2 text-right">
              &mdash; Skyra Hydrological Engineering Standard
            </span>
          </div>
        </div>
      </div>

      {/* Comparison & Integration Architecture: Rainsink Units vs. Percolation Ponds */}
      <div className="p-6 sm:p-8 rounded-[6px] bg-linear-to-b from-[#edf6fa] to-[#e4f1f8] border border-[#bcd7e8]/70 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-moss font-semibold tracking-wide uppercase">
            INTEGRATED RESILIENCE FRAMEWORK
          </span>
          <h3 className="font-headline-h2 text-[22px] sm:text-[26px] font-semibold text-deep-aquifer tracking-tight">
            How modular Rainsink units and DRM percolation ponds complement each other
          </h3>
          <p className="font-body-primary text-sm sm:text-base text-deep-aquifer/85 max-w-3xl leading-relaxed">
            Leading industrial and commercial facilities rarely rely on a single mechanism. Skyra deploys a multi-echelon hydrological network pairing localized subterranean Rainsinks with central DRM percolation ponds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: Modular Rainsink Shaft */}
          <div className="p-5 sm:p-6 rounded-[4px] bg-white border border-muted-aquifer/20 flex flex-col justify-between gap-4 shadow-xs">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-[4px] bg-[#EBF5FB] font-mono text-[11px] font-semibold text-forest-slate">
                  TIER 1 &middot; MODULAR PERCOLATOR
                </span>
                <span className="font-mono text-xs text-moss font-semibold">Skyra Rainsink</span>
              </div>
              <h4 className="font-headline-h3 text-[18px] font-semibold text-deep-aquifer">
                Localized Pre-Cast RCC Shafts
              </h4>
              <p className="font-body-primary text-[13px] text-deep-aquifer/80 leading-relaxed">
                Installed directly beneath paved yards, driveways, internal roads, and building corners. Featuring flush cast-iron manholes, high-rate silex filtration, and granular activated carbon beds. Zero surface footprint.
              </p>
            </div>
            <ul className="space-y-1.5 font-mono text-xs text-deep-aquifer/80 pt-3 border-t border-muted-aquifer/15">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-moss" />
                <span>Heavy vehicle traffic rated top slab</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-moss" />
                <span>Multi-stage silica &amp; carbon filtration</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-moss" />
                <span>7 to 15 units per acre density</span>
              </li>
            </ul>
          </div>

          {/* Card 2: DRM Percolation Pond */}
          <div className="p-5 sm:p-6 rounded-[4px] bg-white border border-muted-aquifer/20 flex flex-col justify-between gap-4 shadow-xs">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-[4px] bg-[#EAF7EE] font-mono text-[11px] font-semibold text-moss">
                  TIER 2 &middot; MACRO RETENTION BASIN
                </span>
                <span className="font-mono text-xs text-forest-slate font-semibold">Percolation Pond</span>
              </div>
              <h4 className="font-headline-h3 text-[18px] font-semibold text-deep-aquifer">
                Dry Rubble Masonry (DRM) Open Pond
              </h4>
              <p className="font-body-primary text-[13px] text-deep-aquifer/80 leading-relaxed">
                Excavated at natural low-elevation campus peripheries or open greens. Retains massive monsoonal flood volumes, allowing continuous lateral and downward percolation across hundreds of square meters of soil surface.
              </p>
            </div>
            <ul className="space-y-1.5 font-mono text-xs text-deep-aquifer/80 pt-3 border-t border-muted-aquifer/15">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-moss" />
                <span>Massive cloudburst volume surge buffer</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-moss" />
                <span>Porous DRM stone walls &amp; perimeter safety fence</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-moss" />
                <span>Restores deep unconfined aquifer reservoirs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution Diagram Inspection */}
      {mounted &&
        isModalOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-deep-aquifer/85 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative w-full max-w-5xl max-h-[94vh] bg-white rounded-[8px] p-4 sm:p-5 shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-muted-aquifer/20 shrink-0 gap-3">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-headline-h3 text-base sm:text-lg font-semibold text-deep-aquifer">
                      Percolation Pond &middot; Capture &bull; Filter &bull; Recharge
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsZoomed(!isZoomed);
                      }}
                      className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-[#EAF7EE] hover:bg-[#d8f0df] text-moss text-[11px] font-mono font-medium transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {isZoomed ? "zoom_out" : "zoom_in"}
                      </span>
                      <span>{isZoomed ? "Fit to window" : "100% zoom"}</span>
                    </button>
                  </div>
                  <p className="text-[11px] sm:text-xs text-deep-aquifer/70 font-mono mt-0.5">
                    Turning stormwater runoff into a sustainable source for groundwater.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="size-9 rounded-[4px] bg-slate-100 hover:bg-slate-200 text-deep-aquifer flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Modal Image Display */}
              <div
                className={`relative w-full flex-1 min-h-0 bg-[#f8fbfe] rounded-[4px] border border-muted-aquifer/15 ${
                  isZoomed
                    ? "overflow-auto p-4 flex items-start justify-center cursor-zoom-out"
                    : "overflow-hidden p-2 sm:p-3 flex items-center justify-center cursor-zoom-in"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                title={isZoomed ? "Click to fit diagram to window" : "Click to view full size (100%)"}
              >
                <Image
                  src="/images/percolation-pond-infographic.jpg"
                  alt="High-resolution Percolation Pond architectural and hydrological cross section"
                  width={1024}
                  height={935}
                  className={`object-contain transition-all duration-200 select-none ${
                    isZoomed
                      ? "w-[1024px] max-w-none h-auto shrink-0"
                      : "max-h-[calc(94vh-140px)] max-w-full w-auto h-auto mx-auto"
                  }`}
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="mt-2.5 pt-2.5 border-t border-muted-aquifer/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-deep-aquifer/80 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-moss text-[16px]">info</span>
                  <span className="text-[11px] sm:text-xs text-muted-aquifer">
                    {isZoomed ? "Click image to fit window" : "Click image to zoom 100%"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsZoomed(!isZoomed);
                    }}
                    className="sm:hidden px-3 py-1 rounded-[4px] bg-slate-100 text-deep-aquifer text-xs font-mono font-medium"
                  >
                    {isZoomed ? "Fit" : "Zoom"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-1.5 rounded-[4px] bg-deep-aquifer text-white text-xs font-medium hover:bg-forest-slate transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
