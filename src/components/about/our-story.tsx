import Image from "next/image";
import { Container } from "@/components/ui/container";

/** Our Story & The Monsoon Paradox (Contrast Pure Light Band). */
export function OurStory() {
  return (
    <section className="bg-white py-16 text-slate-950 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Story Column */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs font-medium text-brand-teal">
              Ecological civil engineering
            </span>
            <h2 className="mt-2 font-headline-h2 text-[28px] sm:text-[36px] font-semibold tracking-tight text-deep-aquifer">
              Our story: turning runoff into resilience
            </h2>

            <div className="mt-6 space-y-4 font-body-primary text-base font-normal leading-relaxed text-deep-aquifer/85">
              <p>
                We are a modern sustainability company dedicated to
                transforming rainwater from a lost surface runoff into a
                permanent, secure resource. We design, build, and maintain
                integrated water management systems that empower properties
                to become water-independent.
              </p>
              <p>
                Instead of letting torrential monsoon rains wash away into
                overwhelmed drains and ocean runoff while water tables dry up,
                {"Skyra's"} decentralized engineered systems capture, filter,
                and inject purity back into the subterranean aquifers.
              </p>
              <p>
                By treating precipitation as a high-value hydrological asset
                rather than civil drainage waste, we engineer resilient
                subterranean reservoirs and precision injection wells that
                guarantee zero summer tanker reliance.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-slate-50 p-4 shadow-sm border border-slate-100">
                <span className="block font-mono text-4xl font-bold tracking-tight text-deep-aquifer">
                  3,100<span className="text-2xl text-brand-teal">mm</span>
                </span>
                <span className="mt-1 block font-mono text-xs font-medium text-deep-aquifer/70">
                  Average Kerala annual precipitation
                </span>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 shadow-sm border border-slate-100">
                <span className="block font-mono text-4xl font-bold tracking-tight text-emerald-600">
                  82<span className="text-2xl">%</span>
                </span>
                <span className="mt-1 block font-mono text-xs font-medium text-deep-aquifer/70">
                  Surface water lost without catchment
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Column: The Monsoon Paradox Card */}
          <div className="lg:col-span-6">
            <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-xl sm:h-[480px]">
              <Image
                src="/images/about-monsoon-catchment.jpg"
                alt="Heavy tropical monsoon raindrops cascading off an architectural roof gutter system in Kerala into a pristine filtration flume"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 shadow-md backdrop-blur-md">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-amber-600" />
                <span className="font-mono text-xs font-medium text-deep-aquifer">
                  The South Indian hydrology paradox
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-slate-950/85 p-4 text-white backdrop-blur-md">
                  <span className="font-mono text-xs font-medium text-teal-300">
                    Monsoon surge
                  </span>
                  <p className="mt-1 font-mono text-lg font-bold">3000mm+</p>
                  <p className="font-mono text-xs text-slate-300">Annual rainfall influx</p>
                </div>
                <div className="rounded-lg bg-slate-950/85 p-4 text-white backdrop-blur-md">
                  <span className="font-mono text-xs font-medium text-brand-green">
                    Skyra mandate
                  </span>
                  <p className="mt-1 font-mono text-lg font-bold">Zero</p>
                  <p className="font-mono text-xs text-slate-300">Summer tanker dependency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
