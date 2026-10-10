"use client";

import { useState } from "react";
import Link from "next/link";

export function RainsinkInteractiveShowcase() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layersInfo = [
    {
      id: 1,
      title: "Top inlet & manhole cover",
      desc: "Reinforced concrete slab with flush manhole cover for routine inspection and maintenance access.",
    },
    {
      id: 2,
      title: "Primary filter (medium silex)",
      desc: "150–200 kg graded silica silex gravel. Traps coarse sediments, leaves, and suspended silt.",
    },
    {
      id: 3,
      title: "Adsorption bed (activated carbon)",
      desc: "35–50 kg granular activated charcoal. Removes organic pollutants, color, odor, and micro-contaminants.",
    },
    {
      id: 4,
      title: "Polishing layer (small silex)",
      desc: "Fine silex aggregate layer that retains carbon particles and prevents fine clogging.",
    },
    {
      id: 5,
      title: "Coarse sand base & soil seep zone",
      desc: "Permeable sand foundation allowing clean purified filtrate to percolate into subterranean aquifers.",
    },
  ];

  const layerBounds: Record<number, { y: number; height: number; color: string }> = {
    1: { y: 67, height: 32, color: "#38bdf8" },
    2: { y: 99, height: 65, color: "#0284c7" },
    3: { y: 164, height: 46, color: "#7D9D3D" },
    4: { y: 210, height: 54, color: "#38bdf8" },
    5: { y: 264, height: 49, color: "#d97706" },
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col gap-3 text-left max-w-2xl">
        <span className="font-mono text-xs text-moss font-medium">
          Strategic campus impact &amp; value delivery
        </span>
        <h2 className="font-headline-h2 text-[28px] sm:text-[36px] font-semibold text-deep-aquifer tracking-tight">
          How Skyra Rainsink transforms your campus
        </h2>
        <p className="font-body-primary text-base font-normal leading-relaxed text-deep-aquifer max-w-2xl">
          Dual-action hydrological engineering designed for enterprise infrastructure — providing immediate stormwater flood resilience alongside long-term groundwater ESG stewardship.
        </p>
      </div>

      {/* Linear Value Propositions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1: Industrial Flood Resilience */}
        <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-white via-surface-container-low/20 to-white border border-muted-aquifer/20 shadow-[0_12px_40px_rgba(29,41,59,0.06)] relative overflow-hidden flex flex-col justify-between gap-6 group hover:border-forest-slate/40 transition-all duration-300">
          <span className="material-symbols-outlined absolute -top-4 -right-2 text-[130px] text-moss/5 select-none pointer-events-none">
            shield
          </span>

          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-deep-aquifer/5 border border-deep-aquifer/15 text-deep-aquifer font-mono text-xs font-medium">
                <span className="material-symbols-outlined text-[16px] text-moss">shield</span>
                <span>Industrial flood resilience</span>
              </div>
              <span className="font-mono text-[11px] text-muted-aquifer font-medium">
                01 &middot; Stormwater abatement
              </span>
            </div>

            <p className="font-mono text-xs font-medium text-moss">
              Ideal for logistics hubs, factories, raw material yards &amp; industrial facilities
            </p>

            <p className="font-body-primary text-base sm:text-[17px] text-deep-aquifer/90 leading-relaxed font-normal italic border-l-3 border-moss/50 pl-4 py-1">
              &ldquo;Skyra safeguards your campus from intense monsoonal cloudbursts. By routing high-velocity surface runoff into structured percolation units, our system prevents yard inundation, protects ground inventory, and eliminates operational downtime.&rdquo;
            </p>
          </div>

          <div className="pt-4 border-t border-muted-aquifer/15 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs font-medium relative z-10">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low/60 border border-muted-aquifer/15 text-deep-aquifer text-xs hover:border-moss/40 transition-colors">
              <span className="material-symbols-outlined text-moss text-[18px]">inventory_2</span>
              <span>Protects low-lying inventory</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low/60 border border-muted-aquifer/15 text-deep-aquifer text-xs hover:border-moss/40 transition-colors">
              <span className="material-symbols-outlined text-moss text-[18px]">schedule</span>
              <span>Eliminates yard downtime</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low/60 border border-muted-aquifer/15 text-deep-aquifer text-xs hover:border-moss/40 transition-colors">
              <span className="material-symbols-outlined text-moss text-[18px]">water_damage</span>
              <span>Absorbs cloudburst surges</span>
            </div>
          </div>
        </div>

        {/* Card 2: ESG & Water Stewardship */}
        <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-white via-surface-container-low/20 to-white border border-muted-aquifer/20 shadow-[0_12px_40px_rgba(29,41,59,0.06)] relative overflow-hidden flex flex-col justify-between gap-6 group hover:border-moss/50 transition-all duration-300">
          <span className="material-symbols-outlined absolute -top-4 -right-2 text-[130px] text-moss/5 select-none pointer-events-none">
            eco
          </span>

          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-moss/10 border border-moss/20 text-moss font-mono text-xs font-medium">
                <span className="material-symbols-outlined text-[16px]">eco</span>
                <span>ESG &amp; corporate stewardship</span>
              </div>
              <span className="font-mono text-[11px] text-muted-aquifer font-medium">
                02 &middot; Aquifer replenishment
              </span>
            </div>

            <p className="font-mono text-xs font-medium text-moss">
              Ideal for MNCs, IT parks, educational institutions &amp; green building projects
            </p>

            <p className="font-body-primary text-base sm:text-[17px] text-deep-aquifer/90 leading-relaxed font-normal italic border-l-3 border-moss/50 pl-4 py-1">
              &ldquo;Turn monsoonal precipitation into a long-term enterprise water asset. Our multi-stage silica &amp; carbon filtration units actively recharge deep soil strata, enabling facilities to meet CGWA recharge mandates and achieve verified water neutrality.&rdquo;
            </p>
          </div>

          <div className="pt-4 border-t border-muted-aquifer/15 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs font-medium relative z-10">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low/60 border border-muted-aquifer/15 text-deep-aquifer text-xs hover:border-moss/40 transition-colors">
              <span className="material-symbols-outlined text-moss text-[18px]">verified</span>
              <span>CGWA NOC compliance</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low/60 border border-muted-aquifer/15 text-deep-aquifer text-xs hover:border-moss/40 transition-colors">
              <span className="material-symbols-outlined text-moss text-[18px]">workspace_premium</span>
              <span>LEED / IGBC / GRIHA credits</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low/60 border border-muted-aquifer/15 text-deep-aquifer text-xs hover:border-moss/40 transition-colors">
              <span className="material-symbols-outlined text-moss text-[18px]">water_drop</span>
              <span>Corporate water neutrality</span>
            </div>
          </div>
        </div>
      </div>


      {/* Rainsink Cross-Section Diagram & Layer Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SVG Diagram Column - Modern Dark Glassmorphism Illustration Card */}
        <div className="lg:col-span-6 bg-[#0a1628] p-5 sm:p-7 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
          {/* Ambient Background Glows */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#0098a6]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#7D9D3D]/20 blur-3xl pointer-events-none" />

          {/* Card Header & Controls */}
          <div className="flex items-center justify-between gap-4 mb-3 relative z-10 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moss opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-moss" />
              </span>
              <span className="font-mono text-xs font-medium text-slate-300">
                Hydrological vector cutaway
              </span>
            </div>
            <span className="font-mono text-xs text-slate-400">
              5-Chamber engine
            </span>
          </div>

          <svg
            className="w-full h-auto select-none relative z-10"
            viewBox="0 0 490 370"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="rainGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0098a6" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="earthStrata" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="45%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>

              <linearGradient id="rccShellGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>

              <linearGradient id="fluidInflow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0098a6" stopOpacity="0.9" />
              </linearGradient>

              <linearGradient id="mediumSilexGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>

              <linearGradient id="carbonBedGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0b1324" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>

              <linearGradient id="sandBedGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#92400e" stopOpacity="0.95" />
              </linearGradient>

              <marker
                id="aquaArrow"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path d="M0 0L10 5L0 10z" fill="#38bdf8" />
              </marker>

              <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              <linearGradient id="selectedLayerHighlight" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7D9D3D" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#7D9D3D" stopOpacity="0.3" />
              </linearGradient>

              <filter id="crispGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComponentTransfer in="blur" result="boost">
                  <feFuncA type="linear" slope="2" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode in="boost" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Subterranean Aquifer Pulsing Halo */}
            <ellipse cx="219" cy="342" rx="60" ry="16" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6">
              <animate attributeName="rx" values="30;105;30" dur="4s" repeatCount="indefinite" />
              <animate attributeName="ry" values="8;30;8" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="4s" repeatCount="indefinite" />
            </ellipse>

            {/* Earth Substrate Cutaway Box */}
            <rect x="12" y="55" width="466" height="298" rx="20" fill="url(#earthStrata)" stroke="#334155" strokeWidth="1.5" />

            {/* Topography Surface Grass Accent */}
            <path d="M12 55 C 90 50, 170 60, 245 55 C 320 50, 400 60, 478 55" stroke="#7D9D3D" strokeWidth="4" fill="none" />
            <rect x="12" y="55" width="466" height="12" fill="#7D9D3D" opacity="0.15" />

            {/* Atmospheric Monsoon Rain Inflow Animation */}
            <g stroke="url(#rainGradient)" strokeWidth="2.5" strokeLinecap="round">
              <line x1="160" y1="4" x2="154" y2="22">
                <animate attributeName="y1" values="-10;26;-10" dur="1.4s" repeatCount="indefinite" />
                <animate attributeName="y2" values="8;44;8" dur="1.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="1.4s" repeatCount="indefinite" />
              </line>
              <line x1="195" y1="2" x2="189" y2="20">
                <animate attributeName="y1" values="-12;28;-12" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
                <animate attributeName="y2" values="6;46;6" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
              </line>
              <line x1="220" y1="6" x2="214" y2="24">
                <animate attributeName="y1" values="-8;30;-8" dur="1.3s" begin="0.1s" repeatCount="indefinite" />
                <animate attributeName="y2" values="10;48;10" dur="1.3s" begin="0.1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="1.3s" begin="0.1s" repeatCount="indefinite" />
              </line>
              <line x1="250" y1="4" x2="244" y2="22">
                <animate attributeName="y1" values="-10;26;-10" dur="1.9s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="y2" values="8;44;8" dur="1.9s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="1.9s" begin="0.5s" repeatCount="indefinite" />
              </line>
              <line x1="280" y1="2" x2="274" y2="20">
                <animate attributeName="y1" values="-14;24;-14" dur="1.6s" begin="0.2s" repeatCount="indefinite" />
                <animate attributeName="y2" values="4;42;4" dur="1.6s" begin="0.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;0" dur="1.6s" begin="0.2s" repeatCount="indefinite" />
              </line>
            </g>

            {/* Main Pre-cast RCC Column Shaft Outer Shell */}
            <rect x="124" y="48" width="190" height="16" rx="4" fill="url(#rccShellGrad)" stroke="#64748b" strokeWidth="1.5" />
            <rect
              x="199"
              y="42"
              width="40"
              height="10"
              rx="3"
              fill={activeLayer === 1 ? "#7D9D3D" : "#64748b"}
              stroke="#94a3b8"
              strokeWidth="1.5"
              className="cursor-pointer hover:fill-moss transition-colors"
              onClick={() => setActiveLayer(1)}
            />
            <rect
              x="134"
              y="64"
              width="170"
              height="255"
              rx="6"
              fill="#0f172a"
              stroke="#334155"
              strokeWidth="3"
            />

            {/* Concrete Ring Stack Lines */}
            <g stroke="#334155" strokeWidth="1.5" strokeDasharray="6 3">
              <line x1="134" y1="104" x2="304" y2="104" />
              <line x1="134" y1="144" x2="304" y2="144" />
              <line x1="134" y1="184" x2="304" y2="184" />
              <line x1="134" y1="224" x2="304" y2="224" />
              <line x1="134" y1="264" x2="304" y2="264" />
            </g>

            {/* Chamber 1: High-Velocity Inflow Void & Active Fluid Wave */}
            <g className="cursor-pointer" onClick={() => setActiveLayer(1)}>
              <rect
                x="137"
                y="67"
                width="164"
                height="32"
                rx="4"
                fill="url(#fluidInflow)"
              />
              <path fill="#38bdf8" opacity="0.4" d="M137 76 C 165 70, 200 82, 224 76 C 250 70, 285 82, 301 76 L 301 99 L 137 99 Z">
                <animate
                  attributeName="d"
                  dur="3s"
                  repeatCount="indefinite"
                  values="
                    M137 76 C 165 70, 200 82, 224 76 C 250 70, 285 82, 301 76 L 301 99 L 137 99 Z;
                    M137 79 C 165 84, 200 73, 224 81 C 250 85, 285 74, 301 79 L 301 99 L 137 99 Z;
                    M137 76 C 165 70, 200 82, 224 76 C 250 70, 285 82, 301 76 L 301 99 L 137 99 Z
                  "
                />
              </path>
            </g>

            {/* Chamber 2: Medium Silex (Silica Gravel) */}
            <g
              className="cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => setActiveLayer(2)}
            >
              <rect
                x="137"
                y="99"
                width="164"
                height="65"
                fill="url(#mediumSilexGrad)"
                opacity="0.8"
              />
              <g fill="#38bdf8" opacity="0.4">
                <circle cx="153" cy="115" r="8.5" />
                <circle cx="173" cy="115" r="8.5" />
                <circle cx="193" cy="115" r="8.5" />
                <circle cx="213" cy="115" r="8.5" />
                <circle cx="233" cy="115" r="8.5" />
                <circle cx="253" cy="115" r="8.5" />
                <circle cx="273" cy="115" r="8.5" />
                <circle cx="163" cy="136" r="8.5" />
                <circle cx="183" cy="136" r="8.5" />
                <circle cx="203" cy="136" r="8.5" />
                <circle cx="223" cy="136" r="8.5" />
                <circle cx="243" cy="136" r="8.5" />
                <circle cx="263" cy="136" r="8.5" />
              </g>
            </g>

            {/* Chamber 3: Granular Activated Carbon (GAC) Bed */}
            <g className="cursor-pointer" onClick={() => setActiveLayer(3)}>
              <rect
                x="137"
                y="164"
                width="164"
                height="46"
                fill="url(#carbonBedGrad)"
                stroke="#334155"
                strokeWidth="1"
              />
              {/* Adsorption Micro-Particles */}
              <g fill="#7D9D3D" opacity="0.7">
                <circle cx="150" cy="175" r="2" />
                <circle cx="170" cy="185" r="1.5" />
                <circle cx="195" cy="175" r="2" />
                <circle cx="215" cy="190" r="1.8" />
                <circle cx="240" cy="178" r="2.2" />
                <circle cx="265" cy="188" r="1.5" />
                <circle cx="288" cy="176" r="2" />
              </g>
            </g>

            {/* Chamber 4: Small Silex Polishing Bed */}
            <g
              className="cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => setActiveLayer(4)}
            >
              <rect
                x="137"
                y="210"
                width="164"
                height="54"
                fill="#0284c7"
                opacity="0.65"
              />
              <g fill="#e0f2fe" opacity="0.5">
                <circle cx="148" cy="225" r="3.5" />
                <circle cx="162" cy="225" r="3.5" />
                <circle cx="176" cy="225" r="3.5" />
                <circle cx="190" cy="225" r="3.5" />
                <circle cx="204" cy="225" r="3.5" />
                <circle cx="218" cy="225" r="3.5" />
                <circle cx="232" cy="225" r="3.5" />
                <circle cx="246" cy="225" r="3.5" />
                <circle cx="260" cy="225" r="3.5" />
                <circle cx="274" cy="225" r="3.5" />
                <circle cx="288" cy="225" r="3.5" />
                <circle cx="155" cy="242" r="3.5" />
                <circle cx="169" cy="242" r="3.5" />
                <circle cx="183" cy="242" r="3.5" />
                <circle cx="197" cy="242" r="3.5" />
                <circle cx="211" cy="242" r="3.5" />
                <circle cx="225" cy="242" r="3.5" />
                <circle cx="239" cy="242" r="3.5" />
                <circle cx="253" cy="242" r="3.5" />
                <circle cx="267" cy="242" r="3.5" />
                <circle cx="281" cy="242" r="3.5" />
              </g>
            </g>

            {/* Chamber 5: Coarse Sand Foundation */}
            <rect
              x="137"
              y="264"
              width="164"
              height="49"
              fill="url(#sandBedGrad)"
              className="cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setActiveLayer(5)}
            />

            {/* HIGH-TECH HUD PRECISION SELECTION OVERLAY FRAME */}
            {activeLayer && layerBounds[activeLayer] && (
              <g className="pointer-events-none">
                {/* 1. Soft Glassmorphic Highlight Fill */}
                <rect
                  x="135"
                  y={layerBounds[activeLayer].y}
                  width="168"
                  height={layerBounds[activeLayer].height}
                  rx="4"
                  fill="url(#selectedLayerHighlight)"
                  stroke="#7D9D3D"
                  strokeWidth="1.8"
                  filter="url(#crispGlow)"
                />

                {/* 2. Sub-pixel Light Beam Scanning Animation */}
                <line
                  x1="135"
                  y1={layerBounds[activeLayer].y}
                  x2="303"
                  y2={layerBounds[activeLayer].y}
                  stroke="#fef08a"
                  strokeWidth="1.5"
                  opacity="0.8"
                >
                  <animate
                    attributeName="y1"
                    values={`${layerBounds[activeLayer].y};${layerBounds[activeLayer].y + layerBounds[activeLayer].height};${layerBounds[activeLayer].y}`}
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y2"
                    values={`${layerBounds[activeLayer].y};${layerBounds[activeLayer].y + layerBounds[activeLayer].height};${layerBounds[activeLayer].y}`}
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                  <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.2s" repeatCount="indefinite" />
                </line>

                {/* 3. Tech Corner HUD Reticles (L-Brackets) */}
                {/* Top-Left Reticle */}
                <path
                  d={`M 135 ${layerBounds[activeLayer].y + 9} L 135 ${layerBounds[activeLayer].y} L 145 ${layerBounds[activeLayer].y}`}
                  stroke="#a3e635"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Top-Right Reticle */}
                <path
                  d={`M 293 ${layerBounds[activeLayer].y} L 303 ${layerBounds[activeLayer].y} L 303 ${layerBounds[activeLayer].y + 9}`}
                  stroke="#a3e635"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Bottom-Left Reticle */}
                <path
                  d={`M 135 ${layerBounds[activeLayer].y + layerBounds[activeLayer].height - 9} L 135 ${layerBounds[activeLayer].y + layerBounds[activeLayer].height} L 145 ${layerBounds[activeLayer].y + layerBounds[activeLayer].height}`}
                  stroke="#a3e635"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Bottom-Right Reticle */}
                <path
                  d={`M 293 ${layerBounds[activeLayer].y + layerBounds[activeLayer].height} L 303 ${layerBounds[activeLayer].y + layerBounds[activeLayer].height} L 303 ${layerBounds[activeLayer].y + layerBounds[activeLayer].height - 9}`}
                  stroke="#a3e635"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </g>
            )}

            {/* Active Hydrological Particle Stream */}
            <g fill="#38bdf8">
              <circle cx="165" cy="80" r="2.5">
                <animate attributeName="cy" values="70;310" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="80" r="3">
                <animate attributeName="cy" values="70;310" dur="2.4s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="238" cy="80" r="2.5">
                <animate attributeName="cy" values="70;310" dur="3.1s" begin="1.1s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.9;0.9;0" dur="3.1s" begin="1.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="275" cy="80" r="3">
                <animate attributeName="cy" values="70;310" dur="2.6s" begin="0.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" dur="2.6s" begin="0.2s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* PVC Overflow Conduit & Clean Label (No Overflow) */}
            <g>
              <rect x="304" y="75" width="46" height="15" rx="3" fill="#b45309" stroke="#d97706" strokeWidth="1" />
              <rect x="356" y="72" width="112" height="21" rx="10" fill="#0f172a" stroke="#d97706" strokeWidth="1.5" />
              <circle cx="367" cy="82.5" r="3.5" fill="#d97706" />
              <text x="376" y="86" fontSize="8.5" fill="#fcd34d" fontFamily="Space Mono, monospace" fontWeight="bold">
                PVC OVERFLOW
              </text>
            </g>

            {/* Subterranean Seepage Conduits into Groundwater Aquifer */}
            <g stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#aquaArrow)">
              <path d="M170 315V344" strokeDasharray="6 3">
                <animate attributeName="stroke-dashoffset" values="9;0" dur="0.8s" repeatCount="indefinite" />
              </path>
              <path d="M219 315V348" strokeDasharray="6 3">
                <animate attributeName="stroke-dashoffset" values="9;0" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
              </path>
              <path d="M268 315V344" strokeDasharray="6 3">
                <animate attributeName="stroke-dashoffset" values="9;0" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
              </path>
            </g>

            {/* Modern Floating Hotspot Callout Badges (With Pulsing Active State) */}
            <g fontFamily="Space Mono, monospace">
              {/* Badge 01 */}
              <g className="cursor-pointer" onClick={() => setActiveLayer(1)}>
                <line
                  x1="110"
                  y1="83"
                  x2="134"
                  y2="83"
                  stroke={activeLayer === 1 ? "#7D9D3D" : "#334155"}
                  strokeWidth={activeLayer === 1 ? "1.8" : "1"}
                  strokeDasharray={activeLayer === 1 ? "none" : "2 2"}
                />
                {activeLayer === 1 && (
                  <circle cx="110" cy="83" r="2.5" fill="#a3e635">
                    <animate attributeName="cx" values="110;134;110" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                )}
                <rect
                  x="14"
                  y="73"
                  width="96"
                  height="20"
                  rx="10"
                  fill="#0f172a"
                  stroke={activeLayer === 1 ? "#7D9D3D" : "#334155"}
                  strokeWidth={activeLayer === 1 ? "2" : "1.5"}
                  filter={activeLayer === 1 ? "url(#crispGlow)" : "none"}
                />
                <circle cx="24" cy="83" r="3.5" fill="#38bdf8" />
                {activeLayer === 1 && (
                  <circle cx="24" cy="83" r="6" fill="none" stroke="#7D9D3D" strokeWidth="1" opacity="0.8">
                    <animate attributeName="r" values="3.5;8;3.5" dur="1.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}
                <text x="33" y="86.5" fontSize="8.5" fill={activeLayer === 1 ? "#ffffff" : "#f8fafc"} fontWeight="bold">01 INFLOW</text>
              </g>

              {/* Badge 02 */}
              <g className="cursor-pointer" onClick={() => setActiveLayer(2)}>
                <line
                  x1="110"
                  y1="131"
                  x2="134"
                  y2="131"
                  stroke={activeLayer === 2 ? "#7D9D3D" : "#334155"}
                  strokeWidth={activeLayer === 2 ? "1.8" : "1"}
                  strokeDasharray={activeLayer === 2 ? "none" : "2 2"}
                />
                {activeLayer === 2 && (
                  <circle cx="110" cy="131" r="2.5" fill="#a3e635">
                    <animate attributeName="cx" values="110;134;110" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                )}
                <rect
                  x="14"
                  y="121"
                  width="96"
                  height="20"
                  rx="10"
                  fill="#0f172a"
                  stroke={activeLayer === 2 ? "#7D9D3D" : "#334155"}
                  strokeWidth={activeLayer === 2 ? "2" : "1.5"}
                  filter={activeLayer === 2 ? "url(#crispGlow)" : "none"}
                />
                <circle cx="24" cy="131" r="3.5" fill="#0284c7" />
                {activeLayer === 2 && (
                  <circle cx="24" cy="131" r="6" fill="none" stroke="#7D9D3D" strokeWidth="1" opacity="0.8">
                    <animate attributeName="r" values="3.5;8;3.5" dur="1.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}
                <text x="33" y="134.5" fontSize="8.5" fill={activeLayer === 2 ? "#ffffff" : "#f8fafc"} fontWeight="bold">02 SILEX M</text>
              </g>

              {/* Badge 03 */}
              <g className="cursor-pointer" onClick={() => setActiveLayer(3)}>
                <line
                  x1="110"
                  y1="187"
                  x2="134"
                  y2="187"
                  stroke={activeLayer === 3 ? "#7D9D3D" : "#334155"}
                  strokeWidth={activeLayer === 3 ? "1.8" : "1"}
                  strokeDasharray={activeLayer === 3 ? "none" : "2 2"}
                />
                {activeLayer === 3 && (
                  <circle cx="110" cy="187" r="2.5" fill="#a3e635">
                    <animate attributeName="cx" values="110;134;110" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                )}
                <rect
                  x="14"
                  y="177"
                  width="96"
                  height="20"
                  rx="10"
                  fill="#0f172a"
                  stroke={activeLayer === 3 ? "#7D9D3D" : "#334155"}
                  strokeWidth={activeLayer === 3 ? "2" : "1.5"}
                  filter={activeLayer === 3 ? "url(#crispGlow)" : "none"}
                />
                <circle cx="24" cy="187" r="3.5" fill="#7D9D3D" />
                {activeLayer === 3 && (
                  <circle cx="24" cy="187" r="6" fill="none" stroke="#7D9D3D" strokeWidth="1" opacity="0.8">
                    <animate attributeName="r" values="3.5;8;3.5" dur="1.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}
                <text x="33" y="190.5" fontSize="8.5" fill={activeLayer === 3 ? "#ffffff" : "#f8fafc"} fontWeight="bold">03 CARBON</text>
              </g>

              {/* Badge 04 */}
              <g className="cursor-pointer" onClick={() => setActiveLayer(4)}>
                <line
                  x1="110"
                  y1="237"
                  x2="134"
                  y2="237"
                  stroke={activeLayer === 4 ? "#7D9D3D" : "#334155"}
                  strokeWidth={activeLayer === 4 ? "1.8" : "1"}
                  strokeDasharray={activeLayer === 4 ? "none" : "2 2"}
                />
                {activeLayer === 4 && (
                  <circle cx="110" cy="237" r="2.5" fill="#a3e635">
                    <animate attributeName="cx" values="110;134;110" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                )}
                <rect
                  x="14"
                  y="227"
                  width="96"
                  height="20"
                  rx="10"
                  fill="#0f172a"
                  stroke={activeLayer === 4 ? "#7D9D3D" : "#334155"}
                  strokeWidth={activeLayer === 4 ? "2" : "1.5"}
                  filter={activeLayer === 4 ? "url(#crispGlow)" : "none"}
                />
                <circle cx="24" cy="237" r="3.5" fill="#38bdf8" />
                {activeLayer === 4 && (
                  <circle cx="24" cy="237" r="6" fill="none" stroke="#7D9D3D" strokeWidth="1" opacity="0.8">
                    <animate attributeName="r" values="3.5;8;3.5" dur="1.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}
                <text x="33" y="240.5" fontSize="8.5" fill={activeLayer === 4 ? "#ffffff" : "#f8fafc"} fontWeight="bold">04 SILEX S</text>
              </g>

              {/* Badge 05 */}
              <g className="cursor-pointer" onClick={() => setActiveLayer(5)}>
                <line
                  x1="110"
                  y1="288"
                  x2="134"
                  y2="288"
                  stroke={activeLayer === 5 ? "#7D9D3D" : "#334155"}
                  strokeWidth={activeLayer === 5 ? "1.8" : "1"}
                  strokeDasharray={activeLayer === 5 ? "none" : "2 2"}
                />
                {activeLayer === 5 && (
                  <circle cx="110" cy="288" r="2.5" fill="#a3e635">
                    <animate attributeName="cx" values="110;134;110" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                )}
                <rect
                  x="14"
                  y="278"
                  width="96"
                  height="20"
                  rx="10"
                  fill="#0f172a"
                  stroke={activeLayer === 5 ? "#7D9D3D" : "#334155"}
                  strokeWidth={activeLayer === 5 ? "2" : "1.5"}
                  filter={activeLayer === 5 ? "url(#crispGlow)" : "none"}
                />
                <circle cx="24" cy="288" r="3.5" fill="#d97706" />
                {activeLayer === 5 && (
                  <circle cx="24" cy="288" r="6" fill="none" stroke="#7D9D3D" strokeWidth="1" opacity="0.8">
                    <animate attributeName="r" values="3.5;8;3.5" dur="1.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}
                <text x="33" y="291.5" fontSize="8.5" fill={activeLayer === 5 ? "#ffffff" : "#f8fafc"} fontWeight="bold">05 SAND</text>
              </g>
            </g>
          </svg>
        </div>

        {/* Interactive Layer Explorer Info */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <span className="font-mono text-xs font-medium text-moss">
            Component breakdown
          </span>
          <h3 className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-deep-aquifer">Explore Rainsink filter chambers</h3>
          <p className="font-body-primary text-base font-normal text-deep-aquifer/85 leading-relaxed">
            Click on any section of the cross-section diagram on the left to inspect its filter media specifications and hydrological purpose.
          </p>

          <div className="space-y-3 mt-2">
            {layersInfo.map((layer) => {
              const isSelected = activeLayer === layer.id;
              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-deep-aquifer text-light-aquifer-canvas border-l-4 border-l-moss border-y border-r border-moss/60 shadow-xl translate-x-1"
                      : "bg-white text-deep-aquifer border border-muted-aquifer/20 hover:border-moss/50 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-headline-h3 text-[18px] sm:text-[20px] font-medium flex items-center gap-2">
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
                    <p className="mt-2 text-base opacity-90 leading-relaxed font-body-primary font-normal">
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
