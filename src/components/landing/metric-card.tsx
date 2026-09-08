"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, animate } from "framer-motion";

/** Counts up from 0 to `target` once the card scrolls into view. */
function useCountUp(target: number, decimals: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: setValue,
    });
    return () => controls.stop();
  }, [active, target]);
  return value.toFixed(decimals);
}

/**
 * One Impact Metrics stat card — the "Animated Interactive Dashboard
 * Module" the brief calls out by name for Framer Motion. Source: Figma
 * node 1:366 (Metric Card 1 / Metric Card 2).
 *
 * Count-up figure and progress-bar fill both animate once, the first
 * time the card scrolls into view.
 */
export function MetricCard({
  watermark,
  dotColor,
  pillTone,
  badgeLabel,
  target,
  decimals = 0,
  suffix,
  gradientFrom,
  gradientTo,
  title,
  description,
  progressLabel,
  progressPercent,
  progressTone,
}: {
  watermark: ReactNode;
  dotColor: string;
  pillTone: string;
  badgeLabel: string;
  target: number;
  decimals?: number;
  suffix: string;
  gradientFrom: string;
  gradientTo: string;
  title: string;
  description: string;
  progressLabel: string;
  progressPercent: number;
  progressTone: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const value = useCountUp(target, decimals, inView);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-md transition-colors hover:border-white/20"
    >
      <div className="absolute right-0 top-0 p-6 opacity-10 transition-opacity group-hover:opacity-20">
        {watermark}
      </div>

      <div className="relative z-10 space-y-4">
        <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${pillTone}`}>
          <span aria-hidden="true" className={`size-2 rounded-full ${dotColor} animate-pulse`} />
          {badgeLabel}
        </div>
        <div className="pt-2">
          <div
            className="bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
            style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
          >
            {value}
            {suffix}
          </div>
          <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:text-sm">{description}</p>
        </div>
      </div>

      <div className="relative z-10 pt-8">
        <div className="mb-2 flex justify-between font-mono text-xs text-slate-400">
          <span>{progressLabel}</span>
          <span className={`font-bold ${progressTone}`}>{progressPercent}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-2 rounded-full"
            style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
            initial={{ width: 0 }}
            animate={{ width: inView ? `${progressPercent}%` : 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}
