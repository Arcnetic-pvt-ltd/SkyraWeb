import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";

const FLOW_STEPS = [
  { emoji: "🌧️", label: "Rain", tone: "text-brand-teal" },
  { emoji: "💧", label: "Capture", tone: "text-brand-green" },
  { emoji: "🧪", label: "Filter", tone: "text-brand-teal" },
  { emoji: "🛢️", label: "Store", tone: "text-emerald-400" },
  { emoji: "🌱", label: "Recharge", tone: "text-brand-green" },
  { emoji: "🔄", label: "Reuse", tone: "text-brand-teal" },
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
    <section className="relative overflow-hidden border-y border-white/10 bg-ink py-20">
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/images/dew-drops-leaves.jpg"
          alt="Macro dew drops on deep green leaves"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl space-y-8 px-5 text-center sm:px-6 lg:px-8">
        <Eyebrow color="green" dash="both" center>
          The Opportunity
        </Eyebrow>

        <h2 className="mx-auto max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          <span className="block">What if the water running away</span>
          <span className="block">today could become the water we</span>
          <span className="block text-brand-green underline decoration-brand-green/40 underline-offset-8">
            depend on tomorrow?
          </span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-8 text-xs font-semibold sm:gap-4 sm:text-sm md:gap-6">
          {FLOW_STEPS.map(({ emoji, label, tone }, i) => (
            <div key={label} className="contents">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[#F1F5F9]">
                <span className={tone} aria-hidden="true">
                  {emoji}
                </span>
                {label}
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <span aria-hidden="true" className="text-slate-500">
                  →
                </span>
              )}
            </div>
          ))}
          <span aria-hidden="true" className="text-slate-500">
            →
          </span>
          <div className="flex items-center gap-2 rounded-full bg-brand-green px-4 py-2 font-bold text-ink shadow-cta-glow">
            <span aria-hidden="true">🛡️</span> Water Security
          </div>
        </div>
      </div>
    </section>
  );
}
