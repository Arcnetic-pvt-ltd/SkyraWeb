"use client";

import { useState } from "react";
import Link from "next/link";

export function RainsinkInteractiveShowcase() {
  const [activePitch, setActivePitch] = useState<"resilience" | "esg">("resilience");
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
    <div className="flex flex-col gap-12">
      {/* Segmented Dual-Pitch Switcher Header */}
      <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
        <span className="font-technical-label text-body-sm text-moss uppercase tracking-wider font-semibold">
          Strategic Pitch &amp; Value Propositions
        </span>
        <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
          How Skyra Rainsink Transforms Your Campus
        </h2>

        {/* Tab Buttons */}
        <div className="inline-flex p-1.5 rounded-full bg-surface-container border border-muted-aquifer/20 mx-auto">
          <button
            type="button"
            onClick={() => setActivePitch("resilience")}
            className={`px-6 py-2.5 rounded-full font-button-text text-body-sm transition-all duration-300 cursor-pointer ${
              activePitch === "resilience"
                ? "bg-deep-aquifer text-light-aquifer-canvas shadow-md"
                : "text-deep-aquifer/75 hover:text-deep-aquifer"
            }`}
          >
            1. Flood Resilience Pitch
          </button>
          <button
            type="button"
            onClick={() => setActivePitch("esg")}
            className={`px-6 py-2.5 rounded-full font-button-text text-body-sm transition-all duration-300 cursor-pointer ${
              activePitch === "esg"
                ? "bg-deep-aquifer text-light-aquifer-canvas shadow-md"
                : "text-deep-aquifer/75 hover:text-deep-aquifer"
            }`}
          >
            2. ESG &amp; Stewardship Pitch
          </button>
        </div>
      </div>

      {/* Selected Pitch Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-muted-aquifer/20 shadow-md">
        {activePitch === "resilience" ? (
          <div className="flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 text-moss font-semibold text-sm">
              <span className="material-symbols-outlined">shield</span>
              <span>Ideal for Logistics Hubs, Factories, Raw Material Yards &amp; Monsoonal Plants</span>
            </div>
            <h3 className="font-headline-h3 text-headline-h2-mobile sm:text-headline-h3 text-deep-aquifer leading-tight">
              &ldquo;Skyra safeguards your campus from intense rainfall events. By routing massive surface runoff into high-capacity percolation ponds &amp; Rainsink units, our systems prevent yard flooding, protect ground assets, and eliminate operational disruptions.&rdquo;
            </h3>
            <div className="pt-3 border-t border-muted-aquifer/15 grid grid-cols-1 sm:grid-cols-3 gap-4 font-body-sm text-deep-aquifer/80">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-moss">check_circle</span>
                <span>Protects low-lying inventory</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-moss">check_circle</span>
                <span>Eliminates yard downtime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-moss">check_circle</span>
                <span>Absorbs cloudburst surges</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 text-moss font-semibold text-sm">
              <span className="material-symbols-outlined">eco</span>
              <span>Ideal for MNCs, IT/Tech Parks, Educational Campuses &amp; LEED/IGBC Projects</span>
            </div>
            <h3 className="font-headline-h3 text-headline-h2-mobile sm:text-headline-h3 text-deep-aquifer leading-tight">
              &ldquo;Skyra turns high-volume stormwater into an enterprise sustainability asset. Our dry rubble masonry percolation systems actively replenish local aquifers, helping industries meet statutory recharge mandates and progress toward water neutrality.&rdquo;
            </h3>
            <div className="pt-3 border-t border-muted-aquifer/15 grid grid-cols-1 sm:grid-cols-3 gap-4 font-body-sm text-deep-aquifer/80">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-moss">verified</span>
                <span>CGWA NOC Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-moss">verified</span>
                <span>LEED / IGBC / GRIHA Credits</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-moss">verified</span>
                <span>Corporate Water Neutrality</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Rainsink Cross-Section Diagram & Layer Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SVG Diagram Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-muted-aquifer/20 shadow-md">
          <div className="text-center mb-4 font-technical-label text-body-sm text-muted-aquifer">
            Interactive Cross-Section &middot; Click layers to explore details
          </div>
          <svg
            className="w-full h-auto select-none"
            viewBox="0 0 360 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker
                id="waterArrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M0 0L10 5L0 10z" fill="#2e8fb5" />
              </marker>
            </defs>

            {/* Earth Background */}
            <rect x="0" y="52" width="360" height="288" fill="#e9dcc4" rx="12" />
            <path d="M0 52H360" stroke="#7d9d3c" strokeWidth="6" />

            {/* Rain inflow */}
            <g stroke="#2e8fb5" strokeWidth="2.5" strokeLinecap="round">
              <path d="M120 6l-6 14M150 2l-6 14M180 6l-6 14M210 2l-6 14M240 6l-6 14" />
            </g>
            <path d="M180 26V64" stroke="#2e8fb5" strokeWidth="3" markerEnd="url(#waterArrow)" />

            {/* Main Unit Chamber */}
            <rect x="90" y="46" width="180" height="16" rx="3" fill="#8a949a" />
            <rect
              x="160"
              y="40"
              width="40"
              height="8"
              rx="2"
              fill="#5d676c"
              className="cursor-pointer hover:fill-moss transition-colors"
              onClick={() => setActiveLayer(1)}
            />
            <rect
              x="100"
              y="62"
              width="160"
              height="240"
              fill="#f4f7f7"
              stroke="#8a949a"
              strokeWidth="3"
            />

            {/* Concrete Ring Joints */}
            <g stroke="#8a949a" strokeWidth="1.5">
              <path d="M100 102H260M100 142H260M100 182H260M100 222H260M100 262H260" />
            </g>

            {/* Layer 1: Inflow Void */}
            <rect
              x="103"
              y="70"
              width="154"
              height="26"
              fill="#cfe9f3"
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setActiveLayer(1)}
            />

            {/* Layer 2: Medium Silex */}
            <g
              className="cursor-pointer hover:opacity-85 transition-opacity"
              onClick={() => setActiveLayer(2)}
            >
              <rect x="103" y="96" width="154" height="66" fill="#9ccbe0" />
              <g fill="none" stroke="#2e8fb5" strokeWidth="1.6">
                <circle cx="118" cy="112" r="8" />
                <circle cx="138" cy="112" r="8" />
                <circle cx="158" cy="112" r="8" />
                <circle cx="178" cy="112" r="8" />
                <circle cx="198" cy="112" r="8" />
                <circle cx="218" cy="112" r="8" />
                <circle cx="238" cy="112" r="8" />
                <circle cx="128" cy="132" r="8" />
                <circle cx="148" cy="132" r="8" />
                <circle cx="168" cy="132" r="8" />
                <circle cx="188" cy="132" r="8" />
                <circle cx="208" cy="132" r="8" />
                <circle cx="228" cy="132" r="8" />
              </g>
            </g>

            {/* Layer 3: Activated Carbon */}
            <rect
              x="103"
              y="162"
              width="154"
              height="44"
              fill="#1d283a"
              className="cursor-pointer hover:fill-[#2d3b50] transition-colors"
              onClick={() => setActiveLayer(3)}
            />

            {/* Layer 4: Small Silex */}
            <g
              className="cursor-pointer hover:opacity-85 transition-opacity"
              onClick={() => setActiveLayer(4)}
            >
              <rect x="103" y="206" width="154" height="56" fill="#5f9fb0" />
              <g fill="none" stroke="#e8f4f8" strokeWidth="1.2">
                <circle cx="113" cy="222" r="4" />
                <circle cx="127" cy="222" r="4" />
                <circle cx="141" cy="222" r="4" />
                <circle cx="155" cy="222" r="4" />
                <circle cx="169" cy="222" r="4" />
                <circle cx="183" cy="222" r="4" />
                <circle cx="197" cy="222" r="4" />
                <circle cx="211" cy="222" r="4" />
                <circle cx="225" cy="222" r="4" />
                <circle cx="239" cy="222" r="4" />
              </g>
            </g>

            {/* Layer 5: Sand Bed */}
            <rect
              x="103"
              y="262"
              width="154"
              height="38"
              fill="#c9a26b"
              className="cursor-pointer hover:fill-[#d8b078] transition-colors"
              onClick={() => setActiveLayer(5)}
            />

            {/* PVC Overflow Pipe */}
            <rect x="260" y="74" width="46" height="12" fill="#a4573a" />

            {/* Percolating Seepage Arrows */}
            <g stroke="#2e8fb5" strokeWidth="2.5" markerEnd="url(#waterArrow)">
              <path d="M130 304V330" />
              <path d="M180 304V332" />
              <path d="M230 304V330" />
            </g>

            {/* SVG Labels */}
            <g fontSize="10" fill="#1d283a" fontFamily="system-ui,sans-serif">
              <text x="210" y="38" fill="#1d283a" className="cursor-pointer" onClick={() => setActiveLayer(1)}>
                Manhole
              </text>
              <text x="310" y="84" fontSize="9">
                PVC Overflow
              </text>
              <text x="4" y="120" className="cursor-pointer" onClick={() => setActiveLayer(2)}>
                1. Medium Silex
              </text>
              <text x="4" y="180" className="cursor-pointer" onClick={() => setActiveLayer(3)}>
                2. Activated Carbon
              </text>
              <text x="4" y="234" className="cursor-pointer" onClick={() => setActiveLayer(4)}>
                3. Small Silex
              </text>
              <text x="4" y="284" className="cursor-pointer" onClick={() => setActiveLayer(5)}>
                4. Coarse Sand Base
              </text>
              <text x="260" y="325" fill="#1c5a80" fontWeight="bold">
                Soil Seep
              </text>
            </g>
          </svg>
        </div>

        {/* Interactive Layer Explorer Info */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <span className="font-technical-label text-body-sm text-moss uppercase tracking-wider font-semibold">
            Component Breakdown
          </span>
          <h3 className="font-headline-h3 text-deep-aquifer">Explore Rainsink Filter Chambers</h3>
          <p className="font-body-sm text-deep-aquifer/75">
            Click on any section of the cross-section diagram on the left to inspect its filter media specifications and hydrological purpose.
          </p>

          <div className="space-y-3 mt-2">
            {layersInfo.map((layer) => {
              const isSelected = activeLayer === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-deep-aquifer text-light-aquifer-canvas border-deep-aquifer shadow-md"
                      : "bg-white text-deep-aquifer border-muted-aquifer/20 hover:border-moss"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-moss/20 text-moss text-xs flex items-center justify-center font-mono">
                        {layer.id}
                      </span>
                      {layer.title}
                    </h4>
                    <span className="material-symbols-outlined text-xs">
                      {isSelected ? "expand_less" : "expand_more"}
                    </span>
                  </div>
                  {isSelected && (
                    <p className="mt-2 text-xs opacity-90 leading-relaxed font-body-sm">
                      {layer.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
