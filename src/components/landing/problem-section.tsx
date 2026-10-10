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
  { label: "Lost resource", Icon: LostResourceIcon, tone: "text-red-500 bg-red-50 border-red-200", labelTone: "text-red-600 font-medium" },
];

/** The Problem Section (Light Surface). Source: Figma node 1:32. */
export function ProblemSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-24" id="problem">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* Left Column: Problem Copy & Flow Diagram */}
          <div className="space-y-6 lg:col-span-6">
            <Eyebrow color="teal">The problem</Eyebrow>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight leading-[1.2]">
              <span className="block">{"We don't have a rain problem."}</span>
              <span className="block">We have a water-management problem.</span>
            </h2>
            <p className="text-base font-normal font-body-primary leading-relaxed text-deep-aquifer">
              India receives abundant rainfall, yet water scarcity still becomes a
              reality during dry periods. Rainwater is lost as runoff, while
              groundwater faces increasing pressure from unchecked extraction.
            </p>

            <div className="grid grid-cols-4 gap-2 border-t border-slate-100 pt-6 text-left sm:gap-4">
              {PIPELINE_STEPS.map(({ label, Icon, labelTone }) => (
                <div key={label} className="flex flex-col items-start">
                  <div className="mb-2 flex size-10 items-center justify-center rounded-[6px] border border-muted-aquifer/20 bg-[#F8FCFE] text-forest-slate">
                    <Icon className="size-5" />
                  </div>
                  <span className={`font-mono text-xs font-medium text-deep-aquifer ${labelTone ?? ""}`}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Contrast */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-slate-900 sm:grid-cols-2">
              <div className="group relative h-72 overflow-hidden sm:h-96">
                <Image
                  src="/images/problem-rain.jpg"
                  alt="Abundant heavy tropical downpour and overflowing water"
                  fill
                  sizes="(min-width: 640px) 25vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="rounded-[4px] bg-deep-aquifer border border-white/20 px-2.5 py-1 font-mono text-xs font-medium text-white">
                    Status quo 1
                  </span>
                  <p className="mt-2 text-lg font-medium text-white sm:text-xl">Abundant rainfall.</p>
                  <p className="mt-1 text-base font-normal font-body-primary text-slate-200 leading-relaxed">
                    Billions of liters lost as untreated surface runoff.
                  </p>
                </div>
              </div>
              <div className="group relative h-72 overflow-hidden border-t border-white/20 sm:h-96 sm:border-l sm:border-t-0">
                <Image
                  src="/images/problem-drought.jpg"
                  alt="Parched cracked earth showing seasonal water scarcity"
                  fill
                  sizes="(min-width: 640px) 25vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="rounded-[4px] bg-deep-aquifer border border-white/20 px-2.5 py-1 font-mono text-xs font-medium text-white">
                    Status quo 2
                  </span>
                  <p className="mt-2 text-lg font-medium text-white sm:text-xl">Seasonal water scarcity.</p>
                  <p className="mt-1 text-base font-normal font-body-primary text-slate-200 leading-relaxed">
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
