"use client";

import { useState } from "react";
import { WHATSAPP_HREF } from "@/lib/nav";

export function RainsinkInteractiveShowcase() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layersInfo = [
    {
      id: 1,
      title: "Top Inlet & Manhole Cover",
      desc: "Reinforced concrete slab with flush manhole cover for routine inspection and maintenance access.",
    },
    {
      id: 2,
      title: "Primary Filter (Medium Silex)",
      desc: "150–200 kg graded silica silex gravel. Traps coarse sediments, leaves, and suspended silt.",
    },
    {
      id: 3,
      title: "Adsorption Bed (Activated Carbon)",
      desc: "35–50 kg granular activated charcoal. Removes organic pollutants, color, odor, and micro-contaminants.",
    },
    {
      id: 4,
      title: "Polishing Layer (Small Silex)",
      desc: "Fine silex aggregate layer that retains carbon particles and prevents fine clogging.",
    },
    {
      id: 5,
      title: "Coarse Sand Base & Soil Seep Zone",
      desc: "Permeable sand foundation allowing clean purified filtrate to percolate into subterranean aquifers.",
    },
  ];

  return (
    <div className="flex flex-col gap-10 text-left">
      {/* Section Header */}
      <div className="flex flex-col gap-3 max-w-2xl">
        <div className="text-skyra-label text-[#748D8C]">
          Campus Hydrology &amp; Infrastructure
        </div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          How Skyra Rainsink transforms your campus
        </h2>
        <p className="text-skyra-body text-[#1D293B]/85 margin-0">
          Dual-action hydrological engineering providing immediate stormwater flood resilience alongside long-term groundwater stewardship.
        </p>
      </div>

      {/* Value Proposition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="skyra-card flex flex-col gap-3">
          <div className="text-skyra-label text-[#7D9D3D]">01 · Stormwater Abatement</div>
          <h3 className="text-skyra-h3 text-[#1D293B] margin-0">Industrial flood resilience</h3>
          <p className="text-skyra-body text-[#1D293B]/80 margin-0">
            Prevents yard inundation during cloudburst surges, protecting raw material inventory and keeping access corridors open.
          </p>
        </div>

        <div className="skyra-card flex flex-col gap-3">
          <div className="text-skyra-label text-[#7D9D3D]">02 · Aquifer Replenishment</div>
          <h3 className="text-skyra-h3 text-[#1D293B] margin-0">ESG and corporate stewardship</h3>
          <p className="text-skyra-body text-[#1D293B]/80 margin-0">
            Recharges deep soil strata to fulfill CGWA NOC compliance and contribute to corporate water neutrality targets under IS 15797:2008.
          </p>
        </div>
      </div>

      {/* Technical Diagram & Interactive Layer Explorer */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Layer Selection List (Left Column) */}
        <div className="md:col-span-6 flex flex-col gap-3">
          <div className="text-skyra-label text-[#748D8C]">
            Filter Chamber Layers (Click to inspect)
          </div>
          {layersInfo.map((layer) => {
            const isSelected = activeLayer === layer.id;
            return (
              <div
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`skyra-card p-4 flex flex-col gap-1.5 cursor-pointer ${
                  isSelected ? "bg-[#1D293B] text-white border-[#1D293B]" : ""
                }`}
              >
                <div className="flex items-center gap-2 font-medium text-[15px]">
                  <span className="text-skyra-label text-[11px] opacity-70">0{layer.id}</span>
                  {layer.title}
                </div>
                <p className={`text-skyra-body text-[14px] margin-0 ${isSelected ? "text-white/85" : "text-[#1D293B]/75"}`}>
                  {layer.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technical Specification Summary Box (Right Column) */}
        <div className="md:col-span-6 skyra-card p-6 flex flex-col gap-5">
          <div className="text-skyra-label text-[#7D9D3D]">
            Engineering Standards Summary
          </div>
          <div className="flex flex-col gap-3 text-skyra-body">
            <div className="border-b border-[#1D293B]/10 pb-3">
              <span className="font-semibold text-[#1D293B]">GUIDELINE:</span> Built strictly to IS 15797:2008 national guidelines.
            </div>
            <div className="border-b border-[#1D293B]/10 pb-3">
              <span className="font-semibold text-[#1D293B]">MATERIALS:</span> Pre-cast RCC rings, silica silex gravel, granular carbon.
            </div>
            <div className="border-b border-[#1D293B]/10 pb-3">
              <span className="font-semibold text-[#1D293B]">INSPECTION:</span> Flush concrete slab with manhole cover for annual checks.
            </div>
            <div>
              <span className="font-semibold text-[#1D293B]">PROPOSAL:</span> Written report and quote before any digging begins.
            </div>
          </div>
          <div className="pt-2">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="skyra-btn-primary"
            >
              Book a site survey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
