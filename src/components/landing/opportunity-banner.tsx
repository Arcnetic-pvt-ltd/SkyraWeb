import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";

const FLOW_STEPS = [
  { step: "01", label: "Rain" },
  { step: "02", label: "Capture" },
  { step: "03", label: "Filter" },
  { step: "04", label: "Store" },
  { step: "05", label: "Recharge" },
  { step: "06", label: "Reuse" },
] as const;

/**
 * The Opportunity Transition Banner. Source: Figma node 1:90.
 *
 * Figma positions the flow diagram with absolute calc(50% ± Npx) offsets
 * (desktop-only, fixed-width). Rebuilt as a wrapping flex row with text
 * arrow separators (matching the site's own HTML reference build) so it
 * degrades to multiple lines on narrow viewports instead of overflowing.
 */
export function OpportunityBanner() {
  return (
    <section className="relative overflow-hidden border-y border-[#203f66]/40 bg-linear-to-r from-[#0c1a2d] via-[#11243d] to-[#0c1a2d] py-16 sm:py-24">
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/images/dew-drops-leaves.jpg"
          alt="Macro dew drops on deep green leaves"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Subtle Rainfall Overlay Element */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none overflow-hidden select-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="opportunityRainPattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <line x1="20" y1="0" x2="10" y2="35" stroke="#748D8C" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="12 18" />
              <line x1="70" y1="40" x2="60" y2="75" stroke="#7D9D3D" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="10 20" />
              <line x1="110" y1="20" x2="100" y2="55" stroke="#86b5db" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="8 16" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#opportunityRainPattern)" className="animate-subtle-rain" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8 text-left">
        <Eyebrow color="green">
          The opportunity
        </Eyebrow>

        <h2 className="max-w-3xl font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white tracking-tight leading-[1.2]">
          <span className="block">What if the water running away</span>
          <span className="block">today could become the water we</span>
          <span className="block">depend on tomorrow?</span>
        </h2>

        <div className="flex flex-wrap items-center justify-start gap-3 pt-8 font-mono text-xs font-medium sm:gap-4 md:gap-6">
          {FLOW_STEPS.map(({ step, label }, i) => (
            <div key={label} className="contents">
              <div className="flex items-center gap-2 rounded-[4px] border border-[#244670]/60 bg-[#132742]/70 px-3.5 py-1.5 text-[#F1F5F9]">
                <span className="text-moss font-bold" aria-hidden="true">
                  {step}
                </span>
                {label}
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <span aria-hidden="true" className="text-[#628eb5]">
                  →
                </span>
              )}
            </div>
          ))}
          <span aria-hidden="true" className="text-slate-500">
            →
          </span>
          <div className="flex items-center gap-2 rounded-[4px] bg-moss px-3.5 py-1.5 font-mono font-medium text-deep-aquifer">
            Water security
          </div>
        </div>
      </div>
    </section>
  );
}
