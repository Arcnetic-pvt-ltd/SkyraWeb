"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MetricCard } from "@/components/landing/metric-card";
import { DropletIcon, FootprintIcon } from "@/components/icons/metric-icons";

/** Animated retention-trend line chart. Source: Figma node 1:366 (right tile). */
function RetentionChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <svg ref={ref} viewBox="0 0 300 120" className="h-36 w-full overflow-visible">
      <defs>
        <linearGradient id="cyanGradient" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0098a6" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0098a6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="greenGradient" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>

      <line stroke="rgba(255,255,255,0.08)" strokeDasharray="3,3" x1="0" x2="300" y1="20" y2="20" />
      <line stroke="rgba(255,255,255,0.08)" strokeDasharray="3,3" x1="0" x2="300" y1="60" y2="60" />
      <line stroke="rgba(255,255,255,0.08)" strokeDasharray="3,3" x1="0" x2="300" y1="100" y2="100" />

      {/* Retention Capacity Gradient & Path */}
      <motion.path
        d="M 0 100 C 80 80, 170 45, 300 15 L 300 120 L 0 120 Z"
        fill="url(#cyanGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.path
        d="M 0 100 C 80 80, 170 45, 300 15"
        fill="none"
        stroke="#0098a6"
        strokeLinecap="round"
        strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
        transition={{ pathLength: { duration: 1.2, ease: "easeInOut" }, opacity: { duration: 0.2 } }}
      />

      {/* Aquifer Rebound Gradient & Path */}
      <motion.path
        d="M 0 115 C 80 98, 170 65, 300 30 L 300 120 L 0 120 Z"
        fill="url(#greenGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.path
        d="M 0 115 C 80 98, 170 65, 300 30"
        fill="none"
        stroke="#10b981"
        strokeLinecap="round"
        strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: inView ? 1 : 0, opacity: inView ? 1 : 0 }}
        transition={{ pathLength: { duration: 1.2, delay: 0.2, ease: "easeInOut" }, opacity: { duration: 0.2, delay: 0.2 } }}
      />

      {/* Key Metric Endpoints & Pulsing Indicator */}
      <motion.circle
        cx="300"
        cy="15"
        r="5"
        fill="#0098a6"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={{ scale: [1, 2.2], opacity: [0.75, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      />
      <circle cx="300" cy="15" fill="#66d6e5" r="4" />
      <circle cx="200" cy="38" fill="#0098a6" r="3.5" />
      <circle cx="300" cy="30" fill="#10b981" r="4" />
    </svg>
  );
}

/** Impact Metrics Section (Animated Interactive Dashboard Module). Revamped for current Skyra UI. */
export function ImpactMetrics() {
  return (
    <section className="relative w-full bg-light-aquifer-canvas py-24 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-muted-aquifer/15" id="impact">
      {/* Ambient background atmosphere blobs */}
      <div aria-hidden="true" className="absolute -top-32 left-10 w-[600px] h-[600px] rounded-full bg-[#cde8e6]/70 blur-[130px] pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-32 right-10 w-[600px] h-[600px] rounded-full bg-[#ccebc8]/60 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 relative z-10">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-moss animate-pulse"></span>
            <span className="font-body-sm text-body-sm text-moss font-semibold uppercase tracking-wider">
              MEASURABLE RESTORATION
            </span>
          </div>
          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight leading-tight">
            Impact Metrics
          </h2>
          <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
            Our interventions are designed to create rippling positive effects across the ecosystem. Data drives our design.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="h-full lg:col-span-4">
            <MetricCard
              watermark={<DropletIcon className="size-24 text-[#0098a6]" />}
              dotColor="bg-[#0098a6]"
              pillTone="border-[#0098a6]/30 bg-[#0098a6]/10 text-[#0098a6]"
              badgeLabel="Water Conservation"
              target={1.2}
              decimals={1}
              suffix="M"
              gradientFrom="#0098a6"
              gradientTo="#7D9D3D"
              title="Liters of Water Saved"
              description="Conserved annually through localized rooftop retention, smart storage cells, and closed-loop domestic distribution."
              progressLabel="CUMULATIVE TARGET"
              progressPercent={88}
              progressTone="text-[#0098a6]"
            />
          </div>

          <div className="h-full lg:col-span-4">
            <MetricCard
              watermark={<FootprintIcon className="size-24 text-moss" />}
              dotColor="bg-moss"
              pillTone="border-moss/30 bg-moss/10 text-moss"
              badgeLabel="Ecological Impact"
              target={45}
              decimals={0}
              suffix="%"
              gradientFrom="#7D9D3D"
              gradientTo="#0098a6"
              title="Reduction in Footprint"
              description="Drastic reduction in reliance on municipal high-energy pumping and carbon-heavy commercial water tanker transit."
              progressLabel="FOOTPRINT OFFSET"
              progressPercent={45}
              progressTone="text-moss"
            />
          </div>

          <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-muted-aquifer/15 bg-white/80 p-8 sm:p-9 shadow-[0_8px_30px_rgb(29,41,59,0.06)] backdrop-blur-xl transition-all duration-500 hover:border-moss/40 hover:shadow-2xl lg:col-span-4">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-secondary font-medium">
                  Live Retention Trend
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-moss/30 bg-moss/10 px-2.5 py-0.5 text-xs font-semibold text-moss">
                  <span aria-hidden="true" className="size-1.5 animate-pulse rounded-full bg-moss" />
                  Realtime
                </span>
              </div>
              <h4 className="text-lg font-bold font-headline-h3 text-deep-aquifer">Hydrological Restoration</h4>
              <p className="mt-1 text-xs font-body-sm text-deep-aquifer/75 leading-relaxed">
                Groundwater table elevation vs. retention index over 12 months.
              </p>
            </div>

            <div className="relative my-6 flex items-center justify-center">
              <RetentionChart />
            </div>

            <div className="grid grid-cols-2 gap-2 border-t border-muted-aquifer/15 pt-3 text-xs">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-[#0098a6]" />
                <span className="text-deep-aquifer/80 font-medium">Retention Capacity</span>
              </div>
              <div className="flex items-center justify-end gap-2">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-moss" />
                <span className="text-deep-aquifer/80 font-medium">Aquifer Rebound</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
