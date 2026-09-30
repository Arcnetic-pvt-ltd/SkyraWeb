"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface StageDetails {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  statLabel: string;
  accent: string;
  nodeX: number;
  nodeY: number;
  cardX: number;
  cardY: number;
}

const STAGES: StageDetails[] = [
  {
    id: "capture",
    num: "01",
    title: "Rainfall Interception",
    subtitle: "Rooftop & Apron Catchment",
    description: "Capturing pristine monsoon rainwater from rooftops and aprons before runoff enters storm drains.",
    metric: "18,400 L/hr",
    statLabel: "Captured Monsoon Runoff",
    accent: "#7D9D3D", // moss
    nodeX: 880,
    nodeY: 130,
    cardX: 840,
    cardY: 175,
  },
  {
    id: "filter",
    num: "02",
    title: "Hydrostatic Vortex",
    subtitle: "Zero-Power Silt Removal",
    description: "Passive centripetal fluid mechanics separate silt, sand, and organic debris without electricity.",
    metric: "99.8%",
    statLabel: "Sedimentation Purity",
    accent: "#0098a6", // brand-teal
    nodeX: 1200,
    nodeY: 240,
    cardX: 850,
    cardY: 300,
  },
  {
    id: "recharge",
    num: "03",
    title: "Bedrock Aquifer Recharge",
    subtitle: "150ft Subterranean Injection",
    description: "Injecting purified water directly into subterranean bedrock aquifers and piezometric tables.",
    metric: "+4.8 Meters",
    statLabel: "Water Table Lift",
    accent: "#445F44", // forest-slate
    nodeX: 1200,
    nodeY: 500,
    cardX: 850,
    cardY: 450,
  },
  {
    id: "secure",
    num: "04",
    title: "Generational Autonomy",
    subtitle: "Permanent Water Security",
    description: "Creating continuous, self-sustaining water resilience for commercial campuses and homes.",
    metric: "0.0%",
    statLabel: "Water Tanker Dependency",
    accent: "#00c896", // brand-green
    nodeX: 1200,
    nodeY: 650,
    cardX: 850,
    cardY: 560,
  },
];

export function HeroMissionBackground() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const stage = STAGES[activeStage];

  // Auto-cycle through hydrological stages
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Background Atmosphere Glow (Follows active node) */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{
          left: `${(stage.nodeX / 1440) * 100}%`,
          top: `${(stage.nodeY / 900) * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          backgroundColor: stage.accent,
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />

      {/* FULL HERO SVG HYDROLOGICAL FLOW BACKGROUND */}
      <svg
        className="absolute inset-0 w-full h-full opacity-75 sm:opacity-90"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroStreamGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7D9D3D" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0098a6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#445F44" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* 1. ATMOSPHERIC MONSOON RAIN DROPLETS (Right Top Layer: x=880 to 1380) */}
        {[880, 1000, 1120, 1240, 1360].map((x, idx) => (
          <g key={`rain-group-${idx}`}>
            <motion.line
              x1={x}
              y1={40}
              x2={x - 15}
              y2={95}
              stroke="#748D8C"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              opacity={activeStage === 0 ? 0.75 : 0.2}
              animate={{
                y1: [40, 120],
                y2: [95, 175],
                opacity: [0, 0.75, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                delay: idx * 0.35,
                ease: "linear",
              }}
            />
          </g>
        ))}

        {/* 2. CATCHMENT TO VORTEX FLOW STREAM (Right Half x=880..1380) */}
        <path
          d="M 880 130 C 1000 130, 1100 150, 1200 240 C 1270 320, 1320 440, 1380 650"
          stroke="#748D8C"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.3"
        />

        {/* Glowing Active Water Flow Pulse Line */}
        <motion.path
          d="M 880 130 C 1000 130, 1100 150, 1200 240 C 1270 320, 1320 440, 1380 650"
          stroke="url(#heroStreamGrad)"
          strokeWidth={activeStage >= 1 ? "3.5" : "2"}
          fill="none"
          strokeDasharray="18 36"
          animate={{ strokeDashoffset: [216, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />

        {/* 3. HYDROSTATIC VORTEX CHAMBER NODE (Upper Right x=1200, y=240) */}
        <g opacity={activeStage === 1 ? 1 : 0.6}>
          <circle cx="1200" cy="240" r="42" stroke="#748D8C" strokeWidth="1.5" strokeDasharray="6 4" fill="#ffffff" fillOpacity="0.85" />
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            style={{ transformOrigin: "1200px 240px" }}
          >
            <circle cx="1200" cy="240" r="28" stroke="#0098a6" strokeWidth="2" fill="none" strokeDasharray="10 5" />
            <circle cx="1200" cy="240" r="14" stroke="#7D9D3D" strokeWidth="1.5" fill="none" strokeDasharray="5 3" />
          </motion.g>
          <circle cx="1200" cy="240" r="6" fill="#445F44" />
        </g>

        {/* 4. BEDROCK AQUIFER RECHARGE SHAFT (x=1200, y=500) */}
        <motion.path
          d="M 1200 282 L 1200 650"
          stroke="#0098a6"
          strokeWidth="2.5"
          strokeDasharray="8 4"
          animate={{ strokeDashoffset: [48, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          opacity={activeStage >= 2 ? 0.9 : 0.3}
        />

        {/* Subterranean Aquifer Table Wave Pool (x=800..1440, y=650) */}
        <motion.path
          d="M 800 670 Q 1100 650 1440 670"
          stroke="#7D9D3D"
          strokeWidth="2"
          fill="none"
          opacity={activeStage === 3 ? 0.9 : 0.4}
        />

        {/* DYNAMIC CONNECTOR POINTER LINE (From Active Node to Active Description Card) */}
        <motion.line
          x1={stage.nodeX}
          y1={stage.nodeY}
          x2={stage.cardX + 260}
          y2={stage.cardY + 30}
          stroke={stage.accent}
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.3 }}
          key={`connector-${stage.id}`}
        />
        <motion.circle
          cx={stage.nodeX}
          cy={stage.nodeY}
          r="8"
          fill="none"
          stroke={stage.accent}
          strokeWidth="2"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
          key={`node-glow-${stage.id}`}
        />

        {/* STAGE NODES */}
        {STAGES.map((st, idx) => (
          <g
            key={st.id}
            className="pointer-events-auto cursor-pointer"
            onClick={() => {
              setActiveStage(idx);
              setIsPlaying(false);
            }}
          >
            <circle
              cx={st.nodeX}
              cy={st.nodeY}
              r={idx === activeStage ? 7 : 5}
              fill={idx === activeStage ? st.accent : "#748D8C"}
              opacity={idx === activeStage ? 1 : 0.6}
            />
            <circle cx={st.nodeX} cy={st.nodeY} r="2" fill="#ffffff" />
          </g>
        ))}
      </svg>

      {/* TOP-RIGHT MINIMAL STAGE SELECTOR PILLS */}
      <div className="absolute top-28 sm:top-32 right-6 sm:right-12 z-20 pointer-events-auto flex items-center gap-1.5 p-1.5 rounded-full bg-white/90 border border-muted-aquifer/25 backdrop-blur-md shadow-md">
        {STAGES.map((st, idx) => {
          const isActive = idx === activeStage;
          return (
            <button
              key={st.id}
              onClick={() => {
                setActiveStage(idx);
                setIsPlaying(false);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? "bg-deep-aquifer text-white shadow-sm"
                  : "text-deep-aquifer/70 hover:text-deep-aquifer hover:bg-black/5"
              }`}
            >
              <span className={`text-[10px] font-bold ${isActive ? "text-moss" : "text-slate-400"}`}>
                {st.num}
              </span>
              <span className="hidden md:inline">{st.title.split(" ")[0]}</span>
            </button>
          );
        })}

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1 rounded-full text-deep-aquifer hover:bg-black/5 transition-colors cursor-pointer"
          title={isPlaying ? "Pause auto-loop" : "Play auto-loop"}
        >
          <span className={`block size-2 rounded-full ${isPlaying ? "bg-moss animate-pulse" : "bg-amber-500"}`} />
        </button>
      </div>

      {/* DYNAMIC ANCHORED DESCRIPTION CARD (Positioned in 58%-79% corridor with zero overlap anywhere) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            left: `${(stage.cardX / 1440) * 100}%`,
            top: `${(stage.cardY / 900) * 100}%`,
          }}
          className="absolute z-20 pointer-events-auto w-72 sm:w-80 p-4 rounded-2xl bg-white/95 border border-muted-aquifer/30 backdrop-blur-xl shadow-xl text-deep-aquifer space-y-2 hidden lg:block"
        >
          <div className="flex items-center justify-between border-b border-muted-aquifer/15 pb-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-moss flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-moss animate-ping" />
              Phase {stage.num} • {stage.subtitle}
            </span>
            <span className="text-xs font-mono font-bold text-deep-aquifer">
              {stage.metric}
            </span>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-tight text-deep-aquifer">
              {stage.title}
            </h4>
            <p className="text-xs text-deep-aquifer/75 font-sans mt-1 leading-relaxed">
              {stage.description}
            </p>
          </div>

          <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-secondary">
            <span>{stage.statLabel}</span>
            <span className="text-moss font-semibold uppercase">Engine Active</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
