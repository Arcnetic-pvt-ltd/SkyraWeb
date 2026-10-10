import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { RainIcon, RunoffIcon, DrainageIcon, LostResourceIcon } from "@/components/icons/problem-icons";

const PIPELINE_STEPS: {
  label: string;
  Icon: typeof RainIcon;
  tone: string;
  labelTone?: string;
}[] = [
  { label: "Rain", Icon: RainIcon, tone: "text-sky-600 bg-slate-50 border-slate-200" },
  { label: "Runoff", Icon: RunoffIcon, tone: "text-slate-600 bg-slate-50 border-slate-200" },
  { label: "Drainage", Icon: DrainageIcon, tone: "text-slate-600 bg-slate-50 border-slate-200" },
  { label: "Lost Resource", Icon: LostResourceIcon, tone: "text-red-500 bg-red-50 border-red-200", labelTone: "text-red-600 font-bold" },
];

/** The Problem Section (Light Surface). Source: Figma node 1:32. */
export function ProblemSection() {
  return (
    <section className="border-b border-muted-aquifer/20 bg-light-aquifer-canvas py-20" id="problem">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          {/* Left Column: Problem Copy & Flow Diagram */}
          <div className="space-y-6 lg:col-span-6">
            <Eyebrow color="green">The problem</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-tight text-deep-aquifer sm:text-4xl lg:text-5xl">
              {"We don't have a rain problem."}
              <span className="block text-deep-aquifer/85">We have a water-management problem.</span>
            </h2>
            <p className="text-base leading-relaxed text-deep-aquifer/75 sm:text-lg">
              India receives abundant rainfall, yet water scarcity still becomes a
              reality during dry periods. Rainwater is lost as runoff, while
              groundwater faces increasing pressure from unchecked extraction.
            </p>

            <div className="grid grid-cols-4 gap-2 border-t border-muted-aquifer/15 pt-6 text-center sm:gap-4">
              {PIPELINE_STEPS.map(({ label, Icon, labelTone }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="mb-2 flex size-11 items-center justify-center rounded-[4px] border border-muted-aquifer/20 bg-white text-deep-aquifer shadow-xs">
                    <Icon className="size-5" />
                  </div>
                  <span className={`text-xs font-semibold text-deep-aquifer ${labelTone ?? ""}`}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Contrast */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white shadow-xs sm:grid-cols-2">
              <div className="group relative h-72 overflow-hidden sm:h-92">
                <Image
                  src="/images/problem-rain.jpg"
                  alt="Abundant heavy tropical downpour and overflowing water"
                  fill
                  sizes="(min-width: 640px) 25vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-aquifer/90 via-transparent to-black/20" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="rounded-[4px] bg-white/90 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-deep-aquifer">
                    Status quo 1
                  </span>
                  <p className="mt-2 text-base font-bold text-white sm:text-lg">Abundant rainfall.</p>
                  <p className="mt-0.5 text-xs text-slate-200">
                    Billions of liters lost as untreated surface runoff.
                  </p>
                </div>
              </div>
              <div className="group relative h-72 overflow-hidden border-t border-white/20 sm:h-92 sm:border-l sm:border-t-0">
                <Image
                  src="/images/problem-drought.jpg"
                  alt="Parched cracked earth showing seasonal water scarcity"
                  fill
                  sizes="(min-width: 640px) 25vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-aquifer/90 via-transparent to-black/20" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="rounded-[4px] bg-white/90 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-deep-aquifer">
                    Status quo 2
                  </span>
                  <p className="mt-2 text-base font-bold text-white sm:text-lg">Seasonal water scarcity.</p>
                  <p className="mt-0.5 text-xs text-slate-200">
                    Depleted aquifers, dried wells, and tanker dependency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
