import React from "react";
import Link from "next/link";

const SURVEY_STEPS = [
  {
    step: "SURVEY",
    detail: "Roof, soil and well checked on site",
    description: "Our hydrologists inspect catchment areas, check borewell and open well depth, and test how fast the soil absorbs water.",
  },
  {
    step: "DESIGN",
    detail: "Written report and quote",
    description: "You receive a clear engineering layout with localized rainfall yield calculations and an itemized project estimate.",
  },
  {
    step: "INSTALL",
    detail: "With little disruption",
    description: "Precision filter chamber placement, recharge piping, and plumbing connections completed cleanly by our civil team.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="relative w-full bg-light-aquifer-canvas py-16 sm:py-24 border-t border-muted-aquifer/15" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-moss"></span>
              <span className="font-mono text-xs text-secondary font-medium tracking-wide uppercase">
                How we work
              </span>
            </div>

            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight leading-tight">
              How a site survey works
            </h2>

            <p className="font-body-large text-body-large text-deep-aquifer leading-relaxed">
              We measure your roof, test how fast the soil absorbs water, and check your well.
            </p>

            {/* Checklist / Table Steps */}
            <div className="flex flex-col divide-y divide-muted-aquifer/20 border-y border-muted-aquifer/20 my-2">
              {SURVEY_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                >
                  <span className="font-mono text-xs font-semibold tracking-wider text-moss uppercase sm:w-24 shrink-0">
                    {item.step}
                  </span>
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="font-body-primary text-base font-medium text-deep-aquifer">
                      {item.detail}
                    </span>
                    <span className="font-body-sm text-sm text-deep-aquifer/75 leading-relaxed">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?query=site-survey"
                className="inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-button-text text-button-text px-7 py-3.5 rounded-[6px] transition-colors"
              >
                Book a site survey
              </Link>
              <a
                href="https://wa.me/919292292111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-muted-aquifer/30 bg-white text-deep-aquifer hover:text-moss font-button-text text-button-text px-6 py-3.5 rounded-[6px] transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>

          {/* Photo Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[4px] overflow-hidden border border-muted-aquifer/20 bg-white shadow-sm">
              <img
                src="/images/site-survey-measuring-roof.jpg"
                alt="Site survey: measuring roof catchment area"
                className="w-full h-auto aspect-4/3 object-cover block"
              />
              <div className="p-4 bg-white border-t border-muted-aquifer/15 flex items-center justify-between text-xs font-mono text-deep-aquifer/80">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-moss"></span>
                  Site survey: measuring a roof
                </span>
                <span className="text-secondary/70">On-site audit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
