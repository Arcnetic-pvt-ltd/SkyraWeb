import React from "react";
import Image from "next/image";

const WORK_STEPS = [
  { label: "SURVEY", text: "Roof, soil and well checked on site" },
  { label: "DESIGN", text: "Written report and quote before any work starts" },
  { label: "INSTALL", text: "With little disruption to your property" },
  { label: "TEST", text: "Water quality lab test & flow verification" },
  { label: "MAINTAIN", text: "Simple filter flush guidance & ongoing support" },
] as const;

/** How Skyra Works Section strictly matching Page 02 Layout DO THIS specification */
export function HowItWorks() {
  return (
    <section className="relative w-full bg-light-aquifer-canvas py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-muted-aquifer/15">
      <div className="max-w-6xl mx-auto w-full">
        {/* Container Box matching Page 02 DO THIS spec */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start border border-muted-aquifer/20 bg-white p-6 sm:p-10 rounded-[4px] shadow-xs">
          {/* Left Column: Heading, Description, and Short List Table */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-technical-label text-[12px] text-forest-slate uppercase tracking-wider font-semibold">
                HOW WE WORK
              </span>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer leading-tight">
                How a site survey works
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer/85 leading-relaxed mt-1">
                We measure your roof, test how fast the soil absorbs water, and check your well.
              </p>
            </div>

            {/* Short List Table matching Page 02 DO THIS */}
            <div className="flex flex-col divide-y divide-muted-aquifer/20 border-t border-b border-muted-aquifer/20 mt-2">
              {WORK_STEPS.map((step) => (
                <div
                  key={step.label}
                  className="py-3.5 flex items-center justify-between sm:justify-start sm:gap-14"
                >
                  <span className="font-technical-label text-xs uppercase text-deep-aquifer/70 w-20 shrink-0 font-bold">
                    {step.label}
                  </span>
                  <span className="font-body-primary text-[15px] text-deep-aquifer font-medium">
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photo of Site Survey */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="relative aspect-[4/3] w-full rounded-[4px] overflow-hidden border border-muted-aquifer/20 bg-slate-100">
              <Image
                src="/images/about-monsoon-catchment.jpg"
                alt="Site survey: measuring a roof"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <span className="font-technical-label text-[11px] text-deep-aquifer/60 uppercase tracking-wider text-center block">
              SITE SURVEY: MEASURING A ROOF
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
