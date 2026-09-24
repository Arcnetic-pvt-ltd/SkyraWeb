import React from "react";

const STEPS = [
  {
    n: "01",
    title: "Assess",
    description: "Site inspection & rainfall catchment analysis",
    icon: "search",
  },
  {
    n: "02",
    title: "Design",
    description: "Custom hydraulic sizing & 3D pipe layout",
    icon: "architecture",
  },
  {
    n: "03",
    title: "Build",
    description: "Procure food-grade tanks & filter hardware",
    icon: "build",
  },
  {
    n: "04",
    title: "Install",
    description: "Professional civil, plumbing & electrical fit",
    icon: "plumbing",
  },
  {
    n: "05",
    title: "Commission",
    description: "Water lab testing & handover training",
    icon: "verified",
  },
  {
    n: "06",
    title: "Maintain",
    description: "Filter flushes, upgrades & support",
    icon: "published_with_changes",
  },
] as const;

/** How SkyRa Works (Process Strip). Revamped with current Skyra design system. */
export function HowItWorks() {
  return (
    <section className="relative w-full bg-light-aquifer-canvas py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-muted-aquifer/15">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-moss animate-pulse"></span>
            <span className="font-body-sm text-body-sm text-moss font-semibold uppercase tracking-wider">
              HOW SKYRA WORKS
            </span>
          </div>
          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight leading-tight">
            A simple process. A lasting impact.
          </h2>
          <p className="font-body-large text-body-large text-deep-aquifer/75 leading-relaxed">
            From initial lithological assessment to lifelong maintenance, our 6-step engineering protocol guarantees permanent water resilience.
          </p>
        </div>

        {/* 6-Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          {STEPS.map(({ n, title, description, icon }) => (
            <div
              key={n}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-muted-aquifer/15 shadow-sm hover:shadow-md hover:border-moss/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-moss to-[#0098a6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-moss bg-moss/10 px-2.5 py-1 rounded-full border border-moss/20">
                    {n}
                  </span>
                  <span className="material-symbols-outlined text-muted-aquifer group-hover:text-moss transition-colors text-[22px]">
                    {icon}
                  </span>
                </div>
                <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer tracking-tight group-hover:text-moss transition-colors">
                  {title}
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-deep-aquifer/75 mt-2 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
