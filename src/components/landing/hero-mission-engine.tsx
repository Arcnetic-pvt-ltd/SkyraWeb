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
    tagline: "Rooftop & Apron Interception",
    description: "Capturing pristine monsoon rainwater from rooftops and aprons before it reaches polluted storm drains.",
    metricLabel: "Capture Rate",
    metricValue: "18,400 L/hr",
    badge: "100% Runoff Interception",
    accentColor: "#7D9D3D", // moss
  },
  {
    id: "filter",
    number: "02",
    title: "Hydrostatic Vortex Filter",
    tagline: "Zero-Power Silt Removal",
    description: "Passive centripetal fluid mechanics separate silt, sand, and organic debris without electricity.",
    metricLabel: "Filtration Purity",
    metricValue: "99.8%",
    badge: "Passive Centripetal Separation",
    accentColor: "#0098a6", // brand-teal
  },
  {
    id: "recharge",
    number: "03",
    title: "Deep Aquifer Recharge",
    tagline: "150ft Subterranean Injection",
    description: "Injecting purified water directly into subterranean bedrock aquifers and piezometric water tables.",
    metricLabel: "Aquifer Restored",
    metricValue: "+4.8 Meters",
    badge: "Lithological Percolation",
    accentColor: "#445F44", // forest-slate
  },
  {
    id: "secure",
    number: "04",
    title: "Generational Water Security",
    tagline: "Permanent Water Autonomy",
    description: "Creating continuous, self-sustaining water security for commercial campuses, estates, and homes.",
    metricLabel: "Tanker Reliance",
    metricValue: "0.0%",
    badge: "From Sky, To Life",
    accentColor: "#00c896", // brand-green
  },
];

export function HeroMissionEngine() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const currentStage = STAGES[activeStageIndex];

  // Auto-cycle stages every 4.5s
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative w-full rounded-3xl bg-white/90 border border-muted-aquifer/25 p-5 sm:p-6 text-deep-aquifer shadow-2xl backdrop-blur-xl overflow-hidden font-sans group">
      {/* Background Soft Glow */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentStage.accentColor }}
      />

      {/* Top Header Control Bar */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-muted-aquifer/15 relative z-10">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moss opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-moss" />
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-deep-aquifer">
            Closed-Loop Hydrological Engine
          </span>
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="inline-flex items-center gap-1.5 rounded-full border border-muted-aquifer/20 bg-black/5 px-2.5 py-1 text-[11px] font-mono text-deep-aquifer/80 hover:bg-black/10 transition-colors cursor-pointer"
          title={isPlaying ? "Pause auto-loop" : "Play auto-loop"}
        >
          <span className={`size-1.5 rounded-full ${isPlaying ? "bg-moss animate-pulse" : "bg-amber-500"}`} />
          {isPlaying ? "PAUSE" : "PLAY"}
        </button>
      </div>

      {/* Stage Selector Pills */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-4 relative z-10">
        {STAGES.map((st, idx) => {
          const isActive = idx === activeStageIndex;
          return (
            <button
              key={st.id}
              onClick={() => {
                setActiveStageIndex(idx);
                setIsPlaying(false);
              }}
              className={`relative flex flex-col items-start p-2 sm:p-2.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                isActive
                  ? "border-moss bg-deep-aquifer text-white shadow-md"
                  : "border-muted-aquifer/20 bg-black/5 text-deep-aquifer/70 hover:bg-black/10 hover:text-deep-aquifer"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className={`font-mono text-[10px] font-bold ${isActive ? "text-brand-green" : "text-slate-400"}`}>
                  {st.number}
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
                {st.title.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Hydrological SVG Visual Canvas (Dedicated Frame) */}
      <div className="relative w-full aspect-[16/9] min-h-[210px] rounded-2xl bg-gradient-to-b from-[#f8fcfe] via-[#e4fffd]/40 to-[#d8f3f2]/60 border border-muted-aquifer/20 overflow-hidden mb-4">
        <svg
          className="w-full h-full select-none"
          viewBox="0 0 500 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="engineStreamGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7D9D3D" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0098a6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#445F44" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="aquiferPoolGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7D9D3D" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0098a6" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* GEOLOGY STRATA LINES */}
          <line x1="20" y1="100" x2="480" y2="100" stroke="#748D8C" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
          <text x="25" y="92" fill="#748D8C" fontSize="8" fontFamily="monospace" letterSpacing="1">
            SURFACE CATCHMENT
          </text>

          <line x1="20" y1="180" x2="480" y2="180" stroke="#748D8C" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
          <text x="25" y="174" fill="#748D8C" fontSize="8" fontFamily="monospace" letterSpacing="1">
            BEDROCK LAYER (150FT)
          </text>

          {/* Subterranean Aquifer Table Pool */}
          <motion.rect
            x="20"
            y={activeStageIndex >= 2 ? "190" : "215"}
            width="460"
            height="75"
            rx="10"
            fill="url(#aquiferPoolGrad)"
            opacity="0.85"
            animate={{
              y: activeStageIndex >= 2 ? 190 : 215,
              height: activeStageIndex >= 2 ? 75 : 50,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Water Table Ripples */}
          <motion.path
            d="M 20 200 Q 140 195 250 200 T 480 200"
            stroke="#7D9D3D"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
            animate={{
              d: [
                "M 20 200 Q 140 195 250 200 T 480 200",
                "M 20 203 Q 140 208 250 203 T 480 203",
                "M 20 200 Q 140 195 250 200 T 480 200",
              ],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* STAGE 1: RAINFALL INTERCEPTION */}
          <g opacity={activeStageIndex === 0 ? 1 : 0.45}>
            {/* Monsoon Cloud */}
            <path
              d="M 60 35 Q 70 20 90 25 Q 105 15 125 25 Q 140 20 150 35 Q 160 50 140 55 L 70 55 Q 50 50 60 35 Z"
              fill="#ffffff"
              stroke="#748D8C"
              strokeWidth="1.5"
            />
            <text x="75" y="42" fill="#445F44" fontSize="8" fontWeight="bold">
              MONSOON RAIN
            </text>

            {/* Raindrops */}
            {[75, 95, 115, 135].map((x, i) => (
              <motion.circle
                key={`r-${i}`}
                cx={x}
                cy={60}
                r={2}
                fill="#0098a6"
                animate={{
                  cy: [60, 95],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  delay: i * 0.25,
                  ease: "linear",
                }}
              />
            ))}

            {/* Apron Collector */}
            <path d="M 60 98 L 150 98 L 170 125" stroke="#7D9D3D" strokeWidth="2.5" fill="none" />
          </g>

          {/* STAGE 2: HYDROSTATIC VORTEX FILTER */}
          <g opacity={activeStageIndex === 1 || activeStageIndex === 0 ? 1 : 0.5}>
            {/* Vortex Outer Frame */}
            <rect
              x="210"
              y="110"
              width="80"
              height="55"
              rx="8"
              fill="#ffffff"
              stroke={activeStageIndex === 1 ? "#0098a6" : "#748D8C"}
              strokeWidth={activeStageIndex === 1 ? "2.5" : "1.5"}
            />

            {/* Spinning Vortex Rings */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              style={{ transformOrigin: "250px 137px" }}
            >
              <circle cx="250" cy="137" r="18" stroke="#0098a6" strokeWidth="2" fill="none" strokeDasharray="6 3" />
              <circle cx="250" cy="137" r="10" stroke="#7D9D3D" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
              <circle cx="250" cy="137" r="3" fill="#445F44" />
            </motion.g>

            {/* Flow Line into Vortex */}
            <motion.path
              d="M 150 98 L 210 137"
              stroke="url(#engineStreamGrad)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="6 3"
              animate={{ strokeDashoffset: [24, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />

            <text x="215" y="102" fill="#0098a6" fontSize="8" fontWeight="bold">
              HYDROSTATIC VORTEX
            </text>
          </g>

          {/* STAGE 3: BEDROCK RECHARGE SHAFT */}
          <g opacity={activeStageIndex === 2 || activeStageIndex === 3 ? 1 : 0.5}>
            <rect x="244" y="165" width="12" height="40" fill="#ffffff" stroke="#0098a6" strokeWidth="1.5" />

            {/* Water Drops descending */}
            {[168, 180, 192].map((y, i) => (
              <motion.circle
                key={`inj-${i}`}
                cx="250"
                cy={y}
                r="2.5"
                fill="#7D9D3D"
                animate={{
                  cy: [165, 205],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  delay: i * 0.35,
                  ease: "linear",
                }}
              />
            ))}

            <text x="262" y="176" fill="#445F44" fontSize="8" fontWeight="bold">
              RECHARGE SHAFT (150FT)
            </text>
          </g>

          {/* STAGE 4: GENERATIONAL AUTONOMY */}
          <g opacity={activeStageIndex === 3 ? 1 : 0.5}>
            {/* Building Node Box */}
            <rect x="348" y="22" width="128" height="68" rx="10" fill="#ffffff" stroke="#00c896" strokeWidth="2" />
            <text x="358" y="40" fill="#445F44" fontSize="8" fontWeight="bold" letterSpacing="0.2">
              SECURED AUTONOMY
            </text>
            <text x="358" y="54" fill="#748D8C" fontSize="7.5">
              Generational Autonomy
            </text>
            <text x="358" y="72" fill="#00c896" fontSize="9.5" fontWeight="extrabold" fontFamily="monospace">
              100% DRY-SAFE
            </text>

            {/* Ascending Water Pipe to Building Base */}
            <motion.path
              d="M 250 200 C 330 200, 412 180, 412 90"
              stroke="#00c896"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 3"
              animate={{ strokeDashoffset: [0, 24] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />
          </g>

          {/* ACTIVE STEP NODE GLOW */}
          {[
            { id: "capture", cx: 150, cy: 98 },
            { id: "filter", cx: 250, cy: 137 },
            { id: "recharge", cx: 250, cy: 195 },
            { id: "secure", cx: 412, cy: 106 },
          ].map((node, i) => (
            <g key={node.id}>
              {i === activeStageIndex && (
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r="10"
                  fill="none"
                  stroke={currentStage.accentColor}
                  strokeWidth="2"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              )}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={i === activeStageIndex ? 5 : 3.5}
                fill={i === activeStageIndex ? currentStage.accentColor : "#748D8C"}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Dedicated Active Stage Monograph Card (Cleanly Integrated inside Window) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center bg-black/5 border border-muted-aquifer/15 rounded-2xl p-3.5 sm:p-4 relative z-10"
        >
          <div className="sm:col-span-8 space-y-1">
            <div className="flex items-center gap-2">
              <span
                className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: currentStage.accentColor }}
              >
                Phase {currentStage.number} • {currentStage.tagline}
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-deep-aquifer tracking-tight">
              {currentStage.title}
            </h4>
            <p className="text-xs text-deep-aquifer/80 leading-relaxed font-sans">
              {currentStage.description}
            </p>
          </div>

          <div className="sm:col-span-4 flex flex-col items-start sm:items-end justify-center border-t sm:border-t-0 sm:border-l border-muted-aquifer/15 pt-2 sm:pt-0 sm:pl-3">
            <span className="text-[10px] font-mono uppercase text-secondary">
              {currentStage.metricLabel}
            </span>
            <span
              className="text-lg sm:text-xl font-extrabold font-mono tracking-tight mt-0.5"
              style={{ color: currentStage.accentColor }}
            >
              {currentStage.metricValue}
            </span>
            <span className="text-[10px] text-moss font-mono mt-0.5 inline-flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-moss animate-pulse" />
              Engine Active
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
