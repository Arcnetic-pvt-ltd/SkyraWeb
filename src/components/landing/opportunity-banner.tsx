import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";

const FLOW_STEPS = [
  { label: "Rain", tone: "text-deep-aquifer" },
  { label: "Capture", tone: "text-deep-aquifer" },
  { label: "Filter", tone: "text-deep-aquifer" },
  { label: "Store", tone: "text-deep-aquifer" },
  { label: "Recharge", tone: "text-deep-aquifer" },
  { label: "Reuse", tone: "text-deep-aquifer" },
] as const;

export function OpportunityBanner() {
  return (
    <section className="relative overflow-hidden border-y border-muted-aquifer/20 bg-light-aquifer-canvas py-16">
      <div className="relative z-10 mx-auto max-w-5xl space-y-8 px-5 text-center sm:px-6 lg:px-8">
        <Eyebrow color="green" dash="both" center>
          The opportunity
        </Eyebrow>

        <h2 className="mx-auto max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-deep-aquifer sm:text-4xl lg:text-5xl">
          <span className="block">What if the water running away</span>
          <span className="block">today could become the water we</span>
          <span className="block text-moss underline decoration-moss/40 underline-offset-8">
            depend on tomorrow?
          </span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6 text-xs font-semibold sm:gap-3.5 sm:text-sm">
          {FLOW_STEPS.map(({ label, tone }, i) => (
            <div key={label} className="contents">
              <div className="flex items-center gap-2 rounded-[4px] border border-muted-aquifer/20 bg-white px-3.5 py-1.5 text-deep-aquifer shadow-xs">
                <span className="size-1.5 rounded-full bg-moss" />
                {label}
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <span aria-hidden="true" className="text-deep-aquifer/40">
                  →
                </span>
              )}
            </div>
          ))}
          <span aria-hidden="true" className="text-deep-aquifer/40">
            →
          </span>
          <div className="flex items-center gap-2 rounded-[4px] bg-deep-aquifer px-4 py-1.5 font-bold text-white shadow-xs">
            <span className="size-1.5 rounded-full bg-moss" /> Water security
          </div>
        </div>
      </div>
    </section>
  );
}
