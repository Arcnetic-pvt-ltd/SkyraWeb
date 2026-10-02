import Image from "next/image";
import { Container } from "@/components/ui/container";

export function OurStory() {
  return (
    <section className="bg-white py-14 text-deep-aquifer lg:py-20 border-b border-muted-aquifer/15">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Story Column */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-moss">
              Ecological civil engineering
            </span>
            <h2 className="mt-2 font-heading-h2 text-heading-h2-mobile sm:text-heading-h2 font-bold tracking-tight text-deep-aquifer">
              Our story: turning runoff into resilience
            </h2>

            <div className="mt-5 space-y-4 font-body-regular text-body-regular text-slate-700 leading-relaxed">
              <p>
                We are a modern sustainability company dedicated to
                transforming rainwater from a lost surface runoff into a
                permanent, secure resource. We design, build, and maintain
                integrated water management systems that enable properties
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

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-[4px] bg-[#F1F7F9] p-4 border border-muted-aquifer/20">
                <span className="block font-metric-mono-lg text-3xl font-extrabold tracking-tight text-deep-aquifer">
                  3,100<span className="text-xl text-moss">mm</span>
                </span>
                <span className="mt-1 block font-body-sm text-xs text-slate-600">
                  Average Kerala annual precipitation
                </span>
              </div>
              <div className="rounded-[4px] bg-[#F1F7F9] p-4 border border-muted-aquifer/20">
                <span className="block font-metric-mono-lg text-3xl font-extrabold tracking-tight text-moss">
                  82<span className="text-xl">%</span>
                </span>
                <span className="mt-1 block font-body-sm text-xs text-slate-600">
                  Surface water lost without catchment
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Column: The Monsoon Paradox Card */}
          <div className="lg:col-span-6">
            <div className="relative h-[400px] overflow-hidden rounded-[4px] border border-muted-aquifer/20 shadow-xs sm:h-[450px]">
              <Image
                src="/images/about-monsoon-catchment.jpg"
                alt="Heavy tropical monsoon raindrops cascading off an architectural roof gutter system in Kerala into a pristine filtration flume"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-[4px] bg-white px-3.5 py-1.5 shadow-xs">
                <span aria-hidden="true" className="size-2 rounded-[2px] bg-moss" />
                <span className="text-xs font-semibold text-deep-aquifer">
                  The South Indian hydrology paradox
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                <div className="rounded-[4px] bg-deep-aquifer p-3.5 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-moss">
                    Monsoon surge
                  </span>
                  <p className="mt-0.5 text-base font-bold">3000mm+</p>
                  <p className="text-[11px] text-slate-300">Annual rainfall influx</p>
                </div>
                <div className="rounded-[4px] bg-deep-aquifer p-3.5 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-moss">
                    Skyra mandate
                  </span>
                  <p className="mt-0.5 text-base font-bold">Zero</p>
                  <p className="text-[11px] text-slate-300">Summer tanker dependency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

