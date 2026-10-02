import React from "react";

const STEPS = [
  {
    n: "01",
    title: "Survey",
    description: "Roof measurement & soil absorption test",
  },
  {
    n: "02",
    title: "Design",
    description: "Written report and cost estimate",
  },
  {
    n: "03",
    title: "Procure",
    description: "IS 15797:2008 compliant filter media",
  },
  {
    n: "04",
    title: "Install",
    description: "Chamber placement with minimal disruption",
  },
  {
    n: "05",
    title: "Connect",
    description: "Stormwater inlet line integration",
  },
  {
    n: "06",
    title: "Maintain",
    description: "Annual pre-monsoon silt chamber check",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="flex flex-col gap-6 text-left border-t border-[#1D293B]/10 pt-12">
      <div className="text-skyra-label text-[#748D8C]">
        Engineering Protocol
      </div>
      <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
        How Skyra builds groundwater recharge systems
      </h2>
      <p className="text-skyra-body text-[#1D293B]/85 max-w-xl margin-0">
        From initial lithological assessment to long-term maintenance, our step-by-step process ensures dependable performance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
        {STEPS.map(({ n, title, description }) => (
          <div
            key={n}
            className="bg-white border border-[#1D293B]/10 rounded-[4px] p-5 flex flex-col gap-2"
          >
            <div className="text-skyra-label text-[#7D9D3D]">STEP {n}</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">{title}</h3>
            <p className="text-skyra-body text-[14px] text-[#1D293B]/80 margin-0">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
