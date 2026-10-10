import type { Metadata } from "next";
import Link from "next/link";
import { RainsinkInteractiveShowcase } from "@/components/products/rainsink-interactive-showcase";
import { CONTACT } from "@/lib/nav";


export const metadata: Metadata = {
  title: "Skyra Rainsink · Skyra",
  description:
    "Skyra Rainsink is our flagship modular rain percolator unit. Fabricated with heavy-duty concrete rings and multi-stage silica and activated carbon filter media, it mitigates industrial campus flooding, recharges subterranean aquifers, and earns CGWA NOC & LEED/IGBC water credits.",
};

export default function RainsinkProductPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Top Editorial Banner */}
      <section className="relative z-10 pt-28 pb-14 md:pt-32 md:pb-20 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto w-full">
        <div className="flex flex-col gap-5 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="font-technical-label text-[13px] text-forest-slate uppercase tracking-wider font-semibold">
              Flagship hydrological unit &middot; Skyra Rainsink
            </span>
          </div>

          <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer tracking-tight leading-tight">
            High-capacity rain percolator &amp; groundwater recharge unit
          </h1>

          <p className="font-body-large text-body-large text-deep-aquifer/85 leading-relaxed">
            Skyra Rainsink transforms intense monsoonal surface runoff into lasting groundwater reserves. Built from heavy-duty pre-cast RCC rings and multi-stage natural silica filter media, it intercepts high-volume stormwater, purifies suspended sediments, and actively recharges subterranean aquifers.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact?product=rainsink"
              className="inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[15px] px-6 py-3 rounded-[6px] transition-colors shadow-xs"
            >
              Book a site survey
            </Link>
            <a
              href="#technical-specs"
              className="inline-flex items-center justify-center border border-muted-aquifer/30 text-deep-aquifer hover:bg-slate-100 font-medium text-[15px] px-6 py-3 rounded-[6px] transition-colors"
            >
              Engineering specifications
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Value Propositions & System Schematic Section */}
      <section className="w-full bg-light-aquifer-canvas py-16 md:py-24 border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <RainsinkInteractiveShowcase />
        </div>
      </section>

      {/* Technical Specifications Grid */}
      <section id="technical-specs" className="relative w-full bg-light-aquifer-canvas py-20 md:py-28 overflow-hidden border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col gap-4 mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="font-technical-label text-body-sm text-moss uppercase tracking-wider font-semibold">
                Unit composition &amp; hardware
              </span>
            </div>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
              Rainsink engineering specifications
            </h2>
            <p className="font-body-primary text-body-primary text-deep-aquifer/80 leading-relaxed">
              Each Skyra Rainsink is fabricated to exact industrial standards for rapid site installation, high structural integrity, and minimal maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-[4px] bg-moss/10 border border-moss/20 flex items-center justify-center text-moss">
                  <span className="material-symbols-outlined text-[22px]">view_in_ar</span>
                </div>
                <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer tracking-tight">
                  Concrete ring shaft
                </h3>
                <p className="font-body-sm text-sm leading-relaxed text-deep-aquifer/75">
                  6 heavy-duty pre-cast RCC/concrete rings (1 meter outer diameter), stacked vertically to form a high-capacity percolation column.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-[4px] bg-moss/10 border border-moss/20 flex items-center justify-center text-moss">
                  <span className="material-symbols-outlined text-[22px]">filter_alt</span>
                </div>
                <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer tracking-tight">
                  Top filter layer (silex)
                </h3>
                <p className="font-body-sm text-sm leading-relaxed text-deep-aquifer/75">
                  150 to 200 kg of graded medium silex silica gravel. Traps initial coarse sediments, leaf debris, and suspended solids.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-[4px] bg-moss/10 border border-moss/20 flex items-center justify-center text-moss">
                  <span className="material-symbols-outlined text-[22px]">cleaning_services</span>
                </div>
                <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer tracking-tight">
                  Active adsorption layer
                </h3>
                <p className="font-body-sm text-sm leading-relaxed text-deep-aquifer/75">
                  2 bags (35 to 50 kg) of high-surface-area granular activated carbon / charcoal. Adsorbs organic impurities, odor, and color compounds.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-[4px] bg-moss/10 border border-moss/20 flex items-center justify-center text-moss">
                  <span className="material-symbols-outlined text-[22px]">waves</span>
                </div>
                <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer tracking-tight">
                  Base sand &amp; silex bed
                </h3>
                <p className="font-body-sm text-sm leading-relaxed text-deep-aquifer/75">
                  Small silex gravel layer layered over a deep coarse sand base to polish filtrate before soil zone percolation.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-[4px] bg-moss/10 border border-moss/20 flex items-center justify-center text-moss">
                  <span className="material-symbols-outlined text-[22px]">tune</span>
                </div>
                <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer tracking-tight">
                  Overflow &amp; inspection
                </h3>
                <p className="font-body-sm text-sm leading-relaxed text-deep-aquifer/75">
                  Equipped with a high-flow PVC overflow bypass, reinforced concrete top slab, and cast-iron/concrete manhole cover for flush access.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-[4px] bg-moss/10 border border-moss/20 flex items-center justify-center text-moss">
                  <span className="material-symbols-outlined text-[22px]">verified</span>
                </div>
                <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer tracking-tight">
                  Maintenance cycle
                </h3>
                <p className="font-body-sm text-sm leading-relaxed text-deep-aquifer/75">
                  Ultra-low maintenance: inspect Chamber 1 after heavy monsoons, flush drain valves, rinse silex bed annually, and replace carbon every 1–2 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment & Installation Density Guidelines */}
      <section className="relative w-full bg-light-aquifer-canvas py-20 md:py-28 overflow-hidden border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2.5">
                <span className="font-technical-label text-body-sm text-moss uppercase tracking-wider font-semibold">
                  Deployment guidelines
                </span>
              </div>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Where &amp; how to deploy Skyra Rainsink
              </h2>
              <div className="space-y-4 font-body-primary text-deep-aquifer/85">
                <div className="p-6 rounded-[4px] bg-white border border-muted-aquifer/20 shadow-xs">
                  <h3 className="font-bold text-deep-aquifer text-base mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-moss text-[20px]">water_drop</span>
                    Near existing open wells &amp; borewells
                  </h3>
                  <p className="text-body-sm text-deep-aquifer/75 leading-relaxed">
                    Position Rainsink units 2 to 5 meters from existing wells. Rainwater filters naturally through surrounding soil strata before entering the well, restoring yield and water quality.
                  </p>
                </div>

                <div className="p-6 rounded-[4px] bg-white border border-muted-aquifer/20 shadow-xs">
                  <h3 className="font-bold text-deep-aquifer text-base mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-moss text-[20px]">landscape</span>
                    1-acre industrial or institutional campus
                  </h3>
                  <p className="text-body-sm text-deep-aquifer/75 leading-relaxed">
                    Install 7 to 15 Rainsink units distributed across a 1-acre plot on terrain with slopes under 30&deg;. This network captures high-intensity runoff, prevents localized yard flooding, and lifts water tables across the entire site.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-deep-aquifer text-light-aquifer-canvas p-8 sm:p-10 rounded-[4px] border border-white/10 shadow-xs flex flex-col gap-6 relative overflow-hidden">
              <div className="flex items-center gap-3 relative z-10">
                <span className="material-symbols-outlined text-moss text-2xl">warning</span>
                <h3 className="font-headline-h3 text-white text-lg font-bold">Pre-installation safety rules</h3>
              </div>
              <ul className="space-y-3 font-body-sm text-light-aquifer-canvas/85 list-disc pl-5 relative z-10 leading-relaxed text-sm">
                <li>
                  <strong className="text-white">Slope restriction:</strong>&nbsp;Do not install on steep slopes of 30&deg; or higher due to landslide and soil erosion hazards.
                </li>
                <li>
                  <strong className="text-white">Safe distances:</strong>&nbsp;Maintain mandatory clearance from septic tanks, chemical storage zones, and building foundations.
                </li>
                <li>
                  <strong className="text-white">Hydro-geological check:</strong>&nbsp;Verify soil percolation capacity and unconfined aquifer depth prior to excavation.
                </li>
                <li>
                  <strong className="text-white">Statutory compliance:</strong>&nbsp;Designed to <strong>IS 15797:2008</strong> guidelines, aligning unit layout with CGWA regulations, municipal bylaws, and green building norms (LEED, IGBC, GRIHA).
                </li>
              </ul>
            </div>
          </div>

          {/* Page 07 Verified Technical Proof & Standards Table */}
          <div className="mt-12 rounded-[4px] border border-muted-aquifer/20 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="font-headline-h3 text-deep-aquifer text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-moss text-[22px]">verified</span>
              Verifiable engineering standards &amp; data
            </h3>
            <div className="flex flex-col divide-y divide-muted-aquifer/20 border-t border-b border-muted-aquifer/20">
              <div className="py-3.5 flex items-center justify-between sm:justify-start sm:gap-14">
                <span className="font-mono text-xs uppercase text-deep-aquifer/70 w-24 shrink-0 font-bold">STANDARD</span>
                <span className="font-body-primary text-sm text-deep-aquifer font-medium">Designed to IS 15797:2008, the national guideline</span>
              </div>
              <div className="py-3.5 flex items-center justify-between sm:justify-start sm:gap-14">
                <span className="font-mono text-xs uppercase text-deep-aquifer/70 w-24 shrink-0 font-bold">PROCESS</span>
                <span className="font-body-primary text-sm text-deep-aquifer font-medium">Written report and quote before any work starts</span>
              </div>
              <div className="py-3.5 flex items-center justify-between sm:justify-start sm:gap-14">
                <span className="font-mono text-xs uppercase text-deep-aquifer/70 w-24 shrink-0 font-bold">OFFICE</span>
                <span className="font-body-primary text-sm text-deep-aquifer font-medium">Rajagiri Road, N. Kalamassery, Kerala</span>
              </div>
              <div className="py-3.5 flex items-center justify-between sm:justify-start sm:gap-14">
                <span className="font-mono text-xs uppercase text-deep-aquifer/70 w-24 shrink-0 font-bold">FIGURE</span>
                <span className="font-body-primary text-sm text-deep-aquifer font-medium">3,100 mm average yearly rain in Kerala (Kerala State Planning Board)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="w-full bg-light-aquifer-canvas py-12 md:py-16 border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="relative rounded-[4px] bg-deep-aquifer text-light-aquifer-canvas p-7 sm:p-9 border border-white/10 shadow-xs overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
              {/* Content Column */}
              <div className="flex flex-col gap-3 max-w-2xl text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/10 border border-white/15 w-fit">
                  <span className="font-technical-label text-[11px] uppercase tracking-wider text-moss font-semibold">
                    Fast-track site consultation
                  </span>
                </div>

                <h2 className="font-headline-h2 text-2xl sm:text-3xl text-white tracking-tight leading-snug font-bold">
                  Ready to equip your campus with Skyra Rainsink?
                </h2>

                <p className="font-body-primary text-sm sm:text-base text-light-aquifer-canvas/80 leading-relaxed font-light">
                  Our civil hydrologists analyze site topography, model peak monsoonal runoff, and deliver a turn-key Rainsink layout plan tailored to your ESG goals and flood prevention targets.
                </p>

                {/* Inline Deliverables Pills */}
                <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-light-aquifer-canvas/75">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-white/5 border border-white/10">
                    <span className="material-symbols-outlined text-moss text-[14px]">analytics</span>
                    Runoff modeling
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-white/5 border border-white/10">
                    <span className="material-symbols-outlined text-moss text-[14px]">architecture</span>
                    CAD layout blueprint
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-white/5 border border-white/10">
                    <span className="material-symbols-outlined text-moss text-[14px]">verified_user</span>
                    CGWA credits
                  </span>
                </div>
              </div>

              {/* Action Column */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  href="/contact?product=rainsink"
                  className="inline-flex items-center justify-center gap-2 bg-moss hover:bg-moss/90 text-deep-aquifer font-medium text-sm px-6 py-3 rounded-[6px] transition-colors shadow-xs group cursor-pointer whitespace-nowrap"
                >
                  <span>Book a site survey</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>

                <a
                  href={`tel:${CONTACT.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-xs px-5 py-2.5 rounded-[6px] transition-colors border border-white/15 whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-[15px]">call</span>
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
