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

/** How Skyra Works (Process Strip). Revamped with current Skyra design system. */
export function HowItWorks() {
  return (
    <section className="relative w-full bg-light-aquifer-canvas py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-muted-aquifer/15">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-moss"></span>
            <span className="font-mono text-xs text-moss font-medium tracking-wide">
              How Skyra works
            </span>
          </div>
          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight leading-tight">
            A simple process. A lasting impact.
          </h2>
          <p className="font-body-large text-body-large text-deep-aquifer leading-relaxed">
            From initial lithological assessment to lifelong maintenance, our 6-step engineering protocol guarantees permanent water resilience.
          </p>
        </div>

        {/* 6-Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          {STEPS.map(({ n, title, description, icon }) => (
            <div
              key={n}
              className="group flex flex-col justify-between p-5 rounded-[4px] bg-white border border-muted-aquifer/20 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-medium text-moss bg-moss/10 px-2 py-0.5 rounded-[2px] border border-moss/20">
                    {n}
                  </span>
                  <span className="material-symbols-outlined text-muted-aquifer text-[22px]">
                    {icon}
                  </span>
                </div>
                <h3 className="font-headline-h3 text-[20px] font-medium text-deep-aquifer tracking-tight">
                  {title}
                </h3>
                <p className="font-body-primary text-base text-deep-aquifer mt-2 leading-relaxed">
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
