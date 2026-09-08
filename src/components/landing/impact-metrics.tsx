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

      <motion.path
        d="M 0 100 Q 50 85, 100 70 T 200 35 T 300 15 L 300 120 L 0 120 Z"
        fill="url(#cyanGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.path
        d="M 0 100 Q 50 85, 100 70 T 200 35 T 300 15"
        fill="none"
        stroke="#0098a6"
        strokeLinecap="round"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.path
        d="M 0 115 Q 60 105, 120 80 T 220 50 T 300 30 L 300 120 L 0 120 Z"
        fill="url(#greenGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      <motion.path
        d="M 0 115 Q 60 105, 120 80 T 220 50 T 300 30"
        fill="none"
        stroke="#10b981"
        strokeLinecap="round"
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      />

      <circle className="animate-ping" cx="300" cy="15" fill="#0098a6" opacity="0.75" r="5" />
      <circle cx="300" cy="15" fill="#66d6e5" r="4" />
      <circle cx="200" cy="35" fill="#0098a6" r="3.5" />
      <circle cx="300" cy="30" fill="#10b981" r="4" />
    </svg>
  );
}

/** Impact Metrics Section (Animated Interactive Dashboard Module). Source: Figma node 1:366. */
export function ImpactMetrics() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink-elevated py-24" id="impact">
      <div aria-hidden="true" className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl space-y-4">
          <Eyebrow color="green">Measurable Restoration</Eyebrow>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Impact Metrics
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Our interventions are designed to create rippling positive effects
            across the ecosystem. Data drives our design.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <MetricCard
              watermark={<DropletIcon className="size-24 text-brand-teal" />}
              dotColor="bg-brand-teal"
              pillTone="border-brand-teal/30 bg-brand-teal/20 text-brand-teal"
              badgeLabel="Water Conservation"
              target={1.2}
              decimals={1}
              suffix="M"
              gradientFrom="#0098a6"
              gradientTo="#00c896"
              title="Liters of Water Saved"
              description="Conserved annually through localized rooftop retention, smart storage cells, and closed-loop domestic distribution."
              progressLabel="CUMULATIVE TARGET"
              progressPercent={88}
              progressTone="text-brand-teal"
            />
          </div>

          <div className="lg:col-span-4">
            <MetricCard
              watermark={<FootprintIcon className="size-24 text-brand-green" />}
              dotColor="bg-brand-green"
              pillTone="border-brand-green/30 bg-brand-green/20 text-brand-green"
              badgeLabel="Ecological Impact"
              target={45}
              decimals={0}
              suffix="%"
              gradientFrom="#10b981"
              gradientTo="#6ee7b7"
              title="Reduction in Footprint"
              description="Drastic reduction in reliance on municipal high-energy pumping and carbon-heavy commercial water tanker transit."
              progressLabel="FOOTPRINT OFFSET"
              progressPercent={45}
              progressTone="text-brand-green"
            />
          </div>

          <div className="flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-md lg:col-span-4">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Live Retention Trend
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-brand-green">
                  <span aria-hidden="true" className="size-1.5 animate-ping rounded-full bg-brand-green" />
                  Realtime
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">Hydrological Restoration</h4>
              <p className="mt-1 text-xs text-slate-400">
                Groundwater table elevation vs. retention index over 12 months.
              </p>
            </div>

            <div className="relative my-6 flex items-center justify-center">
              <RetentionChart />
            </div>

            <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-3 text-xs">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-brand-teal" />
                <span className="text-slate-300">Retention Capacity</span>
              </div>
              <div className="flex items-center justify-end gap-2">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-brand-green" />
                <span className="text-slate-300">Aquifer Rebound</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
