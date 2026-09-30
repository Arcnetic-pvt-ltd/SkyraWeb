"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface StageInfo {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  badge: string;
  accentColor: string;
}

const STAGES: StageInfo[] = [
  {
    id: "capture",
    number: "01",
    title: "Monsoon Rain Capture",
    tagline: "Atmospheric Interception",
    description: "Capturing pristine rainwater from rooftops and aprons before it reaches polluted storm drains.",
    metricLabel: "Capture Rate",
    metricValue: "18,400 L/hr",
    badge: "100% Runoff Interception",
    accentColor: "#00c896", // brand-green
  },
  {
    id: "filter",
    number: "02",
    title: "Hydrostatic Vortex",
    tagline: "Zero-Energy Sedimentation",
    description: "Passive centripetal fluid mechanics separate silt, debris & leaf matter without power.",
    metricLabel: "Filtration Purity",
    metricValue: "99.8%",
    badge: "Zero Electrical Input",
    accentColor: "#0098a6", // brand-teal
  },
  {
    id: "recharge",
    number: "03",
    title: "Deep Aquifer Recharge",
    tagline: "Subterranean Injection",
    description: "Replenishing depleted bedrock aquifers and piezometric water tables 150+ feet underground.",
    metricLabel: "Aquifer Restored",
    metricValue: "+4.8 Meters",
    badge: "Lithological Percolation",
    accentColor: "#38bdf8", // sky-400
  },
  {
    id: "secure",
    number: "04",
    title: "Water Autonomy",
    tagline: "Generational Security",
    description: "Creating permanent, independent water security for campuses, homes, and communities.",
    metricLabel: "Tanker Reliance",
    metricValue: "0.0%",
    badge: "From Sky, To Life",
    accentColor: "#10b981", // emerald-500
  },
];

export function HeroMissionAnimation() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const currentStage = STAGES[activeStageIndex];

  // Auto-cycle stages every 4.5s if isPlaying is true
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative w-full rounded-3xl bg-slate-950/90 p-5 sm:p-7 text-white shadow-2xl border border-white/15 backdrop-blur-xl overflow-hidden font-sans group">
      {/* Background Glow Orbs */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#0098a6]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#00c896]/20 blur-3xl pointer-events-none" />

      {/* Header bar: Title & Auto-Play Controller */}
      <div className="flex items-center justify-between gap-4 mb-5 border-b border-white/10 pb-4 relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green" />
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
            Closed-Loop Hydrological Engine
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-slate-300 hover:bg-white/15 transition-colors cursor-pointer"
            title={isPlaying ? "Pause auto-loop" : "Play auto-loop"}
          >
            <span className="size-1.5 rounded-full bg-brand-teal" />
            {isPlaying ? "PAUSE LOOP" : "PLAY LOOP"}
          </button>
        </div>
      </div>

      {/* Stepper Navigation Pills */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-6 relative z-10">
        {STAGES.map((stage, idx) => {
          const isActive = idx === activeStageIndex;
          return (
            <button
              key={stage.id}
              onClick={() => {
                setActiveStageIndex(idx);
                setIsPlaying(false);
              }}
              className={`relative flex flex-col items-start p-2 sm:p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${isActive
                  ? "border-brand-teal bg-white/10 shadow-lg text-white"
                  : "border-white/5 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200"
                }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className={`font-mono text-[10px] font-bold ${isActive ? "text-brand-green" : "text-slate-500"}`}>
                  {stage.number}
                </span>
                {isActive && isPlaying && (
                  <motion.div
                    className="h-1 bg-brand-green rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4.5, ease: "linear" }}
                    key={activeStageIndex}
                  />
                )}
              </div>
              <span className="text-[11px] sm:text-xs font-semibold truncate w-full">
                {stage.title.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Hydrological SVG Graphic Stage */}
      <div className="relative w-full aspect-[16/10] min-h-[260px] rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-white/10 overflow-hidden mb-5">
        <svg
          className="w-full h-full select-none"
          viewBox="0 0 500 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="skyRainGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00c896" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="vortexGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0098a6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00c896" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="aquiferGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00c896" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#0098a6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* BACKGROUND GEOLOGY STRATA */}
          {/* Surface Ground Line */}
          <line x1="20" y1="120" x2="480" y2="120" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="25" y="112" fill="#64748b" fontSize="9" fontFamily="monospace" letterSpacing="1">
            SURFACE CATCHMENT LAYER
          </text>

          {/* Subsoil Layer */}
          <line x1="20" y1="200" x2="480" y2="200" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
          <text x="25" y="194" fill="#475569" fontSize="9" fontFamily="monospace" letterSpacing="1">
            LITHOLOGICAL STRATA (150FT)
          </text>

          {/* Deep Aquifer Water Reservoir Pool */}
          <motion.rect
            x="20"
            y={activeStageIndex >= 2 ? "210" : "240"}
            width="460"
            height="90"
            rx="12"
            fill="url(#aquiferGrad)"
            opacity="0.85"
            animate={{
              y: activeStageIndex >= 2 ? 210 : 240,
              height: activeStageIndex >= 2 ? 90 : 60,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Animated Water Wave Ripples inside Aquifer */}
          <motion.path
            d="M 20 220 Q 140 215 250 220 T 480 220"
            stroke="#00c896"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
            animate={{
              d: [
                "M 20 220 Q 140 215 250 220 T 480 220",
                "M 20 222 Q 140 227 250 222 T 480 222",
                "M 20 220 Q 140 215 250 220 T 480 220",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* 1. MONSOON RAIN ANIMATION (Stage 0 Focus) */}
          <g opacity={activeStageIndex === 0 ? 1 : 0.45}>
            {/* Cloud */}
            <path
              d="M 60 40 Q 70 25 90 30 Q 105 20 125 30 Q 140 25 150 40 Q 160 55 140 60 L 70 60 Q 50 55 60 40 Z"
              fill="#1e293b"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            <text x="75" y="48" fill="#93c5fd" fontSize="9" fontWeight="bold">
              MONSOON CLOUD
            </text>

            {/* Falling Raindrops */}
            {[75, 95, 115, 135].map((x, i) => (
              <motion.circle
                key={`rain-${i}`}
                cx={x}
                cy={65}
                r={2.5}
                fill="#38bdf8"
                animate={{
                  cy: [65, 115],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  delay: i * 0.25,
                  ease: "linear",
                }}
              />
            ))}

            {/* Rooftop / Apron Catchment */}
            <path d="M 60 118 L 150 118 L 170 140" stroke="#00c896" strokeWidth="2.5" fill="none" />
          </g>

          {/* 2. HYDROSTATIC VORTEX FILTER (Stage 1 Focus) */}
          <g opacity={activeStageIndex === 1 || activeStageIndex === 0 ? 1 : 0.5}>
            {/* Vortex Outer Housing */}
            <rect
              x="210"
              y="125"
              width="80"
              height="65"
              rx="10"
              fill="#0f172a"
              stroke={activeStageIndex === 1 ? "#00c896" : "#0098a6"}
              strokeWidth={activeStageIndex === 1 ? "2.5" : "1.5"}
            />

            {/* Centripetal Vortex Swirl Rings */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              style={{ transformOrigin: "250px 155px" }}
            >
              <circle cx="250" cy="155" r="22" stroke="url(#vortexGrad)" strokeWidth="2.5" fill="none" strokeDasharray="8 4" />
              <circle cx="250" cy="155" r="12" stroke="#00c896" strokeWidth="2" fill="none" strokeDasharray="4 2" />
              <circle cx="250" cy="155" r="4" fill="#38bdf8" />
            </motion.g>

            {/* Water Flow Line into Vortex */}
            <motion.path
              d="M 150 118 L 210 155"
              stroke="#00c896"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="6 3"
              animate={{ strokeDashoffset: [24, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />

            <text x="215" y="115" fill="#00c896" fontSize="9" fontWeight="bold">
              HYDROSTATIC VORTEX
            </text>
          </g>

          {/* 3. DEEP BEDROCK INJECTION SHAFT (Stage 2 Focus) */}
          <g opacity={activeStageIndex === 2 || activeStageIndex === 3 ? 1 : 0.5}>
            {/* Shaft Pipe */}
            <rect x="242" y="190" width="16" height="50" fill="#0f172a" stroke="#0098a6" strokeWidth="1.5" />

            {/* Percolating Water Particles Flowing Down */}
            {[195, 210, 225].map((y, i) => (
              <motion.circle
                key={`recharge-${i}`}
                cx="250"
                cy={y}
                r="3"
                fill="#38bdf8"
                animate={{
                  cy: [190, 235],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: i * 0.4,
                  ease: "linear",
                }}
              />
            ))}

            <text x="265" y="200" fill="#38bdf8" fontSize="9" fontWeight="bold">
              RECHARGE INJECTION (150FT)
            </text>
          </g>

          {/* 4. WATER AUTONOMY & ECOSYSTEM (Stage 3 Focus) */}
          <g opacity={activeStageIndex === 3 ? 1 : 0.5}>
            {/* Secured Water Supply Tower / Building */}
            <rect x="370" y="55" width="70" height="65" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
            <text x="378" y="75" fill="#10b981" fontSize="9" fontWeight="bold">
              SECURED
            </text>
            <text x="378" y="87" fill="#cbd5e1" fontSize="8">
              AUTONOMY
            </text>
            <text x="378" y="105" fill="#38bdf8" fontSize="10" fontWeight="extrabold">
              100% DRY-SAFE
            </text>

            {/* Pipe connection from aquifer up to building */}
            <motion.path
              d="M 250 220 Q 340 220 370 120"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 3"
              animate={{ strokeDashoffset: [0, 24] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />

            {/* Eco Leaf Icon Badge */}
            <circle cx="430" cy="55" r="12" fill="#10b981" />
            <path d="M 426 58 C 426 50 434 50 434 58 Z" fill="#ffffff" />
          </g>

          {/* Interactive Hotspot Nodes */}
          {[
            { id: "roof", cx: 150, cy: 118, label: "Catchment Apron" },
            { id: "vortex", cx: 250, cy: 155, label: "Vortex Chamber" },
            { id: "shaft", cx: 250, cy: 220, label: "Deep Shaft" },
            { id: "autonomy", cx: 405, cy: 88, label: "Secured Tanker-Free" },
          ].map((hotspot) => (
            <g
              key={hotspot.id}
              className="cursor-pointer"
              onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
            >
              <motion.circle
                cx={hotspot.cx}
                cy={hotspot.cy}
                r="7"
                fill="#00c896"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <circle cx={hotspot.cx} cy={hotspot.cy} r="3" fill="#ffffff" />
            </g>
          ))}
        </svg>

        {/* Hotspot Tooltip Overlay */}
        <AnimatePresence>
          {activeHotspot && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/95 border border-brand-teal text-xs text-slate-200 flex items-center justify-between backdrop-blur-md shadow-xl z-20"
            >
              <div>
                <span className="font-semibold text-brand-green uppercase text-[10px] tracking-wider block">
                  Interactive Node: {activeHotspot}
                </span>
                <span>
                  {activeHotspot === "roof" && "High-yield surface catchment channels 98%+ of rain straight into filtration."}
                  {activeHotspot === "vortex" && "Zero-power centripetal swirl removes sand, grit and silt instantly."}
                  {activeHotspot === "shaft" && "Perforated injection shafts bypass clay aquitards into deep bedrock aquifers."}
                  {activeHotspot === "autonomy" && "Continuous water supply eliminating water tanker dependencies."}
                </span>
              </div>
              <button
                onClick={() => setActiveHotspot(null)}
                className="ml-3 px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-[10px] font-mono text-slate-300 cursor-pointer"
              >
                CLOSE
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dynamic Stage Details Card & Telemetry Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 relative z-10"
        >
          <div className="sm:col-span-8 space-y-1.5">
            <div className="flex items-center gap-2">
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-slate-950"
                style={{ backgroundColor: currentStage.accentColor }}
              >
                Stage {currentStage.number} • {currentStage.tagline}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {currentStage.badge}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {currentStage.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {currentStage.description}
            </p>
          </div>

          <div className="sm:col-span-4 flex flex-col items-start sm:items-end justify-center border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4">
            <span className="text-[11px] font-mono uppercase text-slate-400">
              {currentStage.metricLabel}
            </span>
            <span
              className="text-xl sm:text-2xl font-extrabold font-mono tracking-tight mt-0.5"
              style={{ color: currentStage.accentColor }}
            >
              {currentStage.metricValue}
            </span>
            <span className="text-[10px] text-brand-green/90 font-mono mt-1 inline-flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
              Live Telemetry Active
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Banner: Mission Tagline */}
      <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/5">
        <span className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-brand-teal" />
          Mission: Hydro-Resilience across India
        </span>
        <span className="uppercase text-brand-green font-bold tracking-widest">
          From Sky, To Life
        </span>
      </div>
    </div>
  );
}
