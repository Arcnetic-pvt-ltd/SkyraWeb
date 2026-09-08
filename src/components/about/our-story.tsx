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
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              Ecological Civil Engineering
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Our Story: Turning Runoff Into Resilience
            </h2>

            <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
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
                {"SkyRa's"} decentralized engineered systems capture, filter,
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
              <div className="rounded-lg bg-slate-50 p-4 shadow-sm">
                <span className="block text-4xl font-extrabold tracking-tight text-slate-950">
                  3,100<span className="text-2xl text-brand-teal">mm</span>
                </span>
                <span className="mt-1 block text-sm text-slate-500">
                  Average Kerala annual precipitation
                </span>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 shadow-sm">
                <span className="block text-4xl font-extrabold tracking-tight text-emerald-600">
                  82<span className="text-2xl">%</span>
                </span>
                <span className="mt-1 block text-sm text-slate-500">
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 shadow-md backdrop-blur-md">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-amber-600" />
                <span className="text-sm font-semibold text-slate-950">
                  The South Indian Hydrology Paradox
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-slate-950/85 p-4 text-white backdrop-blur-md">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                    Monsoon Surge
                  </span>
                  <p className="mt-1 text-lg font-bold">3000mm+</p>
                  <p className="text-xs text-slate-300">Annual Rainfall Influx</p>
                </div>
                <div className="rounded-lg bg-slate-950/85 p-4 text-white backdrop-blur-md">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green">
                    SkyRa Mandate
                  </span>
                  <p className="mt-1 text-lg font-bold">Zero</p>
                  <p className="text-xs text-slate-300">Summer Tanker Dependency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
