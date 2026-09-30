import type { Metadata } from "next";
import Link from "next/link";
import { RainsinkInteractiveShowcase } from "@/components/products/rainsink-interactive-showcase";

export const metadata: Metadata = {
  title: "Skyra Rainsink | Rain Percolator Unit & Aquifer Recharge System",
  description:
    "Skyra Rainsink is our hero modular rain percolator unit. Engineered with concrete rings and natural multi-layer filter media, it prevents campus flooding and recharges deep aquifers for ESG compliance and water neutrality.",
  keywords: [
    "Skyra Rainsink",
    "Rain Percolator Unit",
    "Groundwater Recharge Pit",
    "Stormwater Percolation",
    "ESG Water Neutrality",
    "CGWA NOC Compliance",
    "LEED IGBC Water Credits",
    "Flood Resilience Logistics Factories",
  ],
};

export default function RainsinkProductPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Top Editorial Banner */}
      <section className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-moss animate-ping"></span>
            <span className="font-technical-label text-body-sm text-moss uppercase tracking-wider font-semibold">
              Hero Product &middot; Skyra Rainsink
            </span>
          </div>

          <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer tracking-tight leading-tight">
            High-Capacity Rain Percolator Unit
          </h1>

          <p className="font-body-large text-body-large text-deep-aquifer/85 leading-relaxed">
            Skyra Rainsink transforms intense surface runoff into lasting groundwater assets. Built from heavy-duty concrete rings and multi-stage natural filter media, it catches high-volume stormwater, purifies it, and actively recharges local aquifers.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact?product=rainsink"
              className="inline-flex items-center gap-2.5 bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-button-text text-button-text px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>Get Site Estimate &amp; Pricing</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <a
              href="#technical-specs"
              className="font-button-text text-button-text text-forest-slate hover:text-deep-aquifer transition-colors inline-flex items-center gap-2 py-3 px-4"
            >
              <span>Technical Specifications</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_downward
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Dual-Pitch & System Schematic Section */}
      <section className="w-full bg-light-aquifer-canvas py-16 md:py-24 border-t border-muted-aquifer/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <RainsinkInteractiveShowcase />
        </div>
      </section>

      {/* Technical Specifications Grid */}
      <section id="technical-specs" className="w-full bg-surface-container-low py-20 md:py-28 border-t border-muted-aquifer/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-4 mb-12 max-w-2xl">
            <span className="font-technical-label text-body-sm text-moss uppercase tracking-wider font-semibold">
              Unit Composition &amp; Hardware
            </span>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
              Rainsink Engineering Specifications
            </h2>
            <p className="font-body-primary text-body-primary text-deep-aquifer/80">
              Each Skyra Rainsink is fabricated to exact industrial standards for rapid site installation, high structural integrity, and minimal maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-muted-aquifer/20 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-moss/10 flex items-center justify-center text-moss">
                <span className="material-symbols-outlined">view_in_ar</span>
              </div>
              <h3 className="font-headline-h3 text-deep-aquifer font-bold">Concrete Ring Shaft</h3>
              <p className="font-body-sm text-deep-aquifer/75">
                6 heavy-duty pre-cast RCC/concrete rings (1 meter outer diameter), stacked vertically to form a high-capacity percolation column.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-muted-aquifer/20 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-moss/10 flex items-center justify-center text-moss">
                <span className="material-symbols-outlined">filter_alt</span>
              </div>
              <h3 className="font-headline-h3 text-deep-aquifer font-bold">Top Filter Layer (Silex)</h3>
              <p className="font-body-sm text-deep-aquifer/75">
                150 to 200 kg of graded medium silex silica gravel. Traps initial coarse sediments, leaf debris, and suspended solids.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-muted-aquifer/20 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-moss/10 flex items-center justify-center text-moss">
                <span className="material-symbols-outlined">cleaning_services</span>
              </div>
              <h3 className="font-headline-h3 text-deep-aquifer font-bold">Active Adsorption Layer</h3>
              <p className="font-body-sm text-deep-aquifer/75">
                2 bags (35 to 50 kg) of high-surface-area granular activated carbon / charcoal. Adsorbs organic impurities, odor, and color compounds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-muted-aquifer/20 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-moss/10 flex items-center justify-center text-moss">
                <span className="material-symbols-outlined">waves</span>
              </div>
              <h3 className="font-headline-h3 text-deep-aquifer font-bold">Base Sand &amp; Silex Bed</h3>
              <p className="font-body-sm text-deep-aquifer/75">
                Small silex gravel layer layered over a deep coarse sand base to polish filtrate before soil zone percolation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-muted-aquifer/20 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-moss/10 flex items-center justify-center text-moss">
                <span className="material-symbols-outlined">tune</span>
              </div>
              <h3 className="font-headline-h3 text-deep-aquifer font-bold">Overflow &amp; Inspection</h3>
              <p className="font-body-sm text-deep-aquifer/75">
                Equipped with a high-flow PVC overflow bypass, reinforced concrete top slab, and cast-iron/concrete manhole cover for flush access.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-muted-aquifer/20 shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-moss/10 flex items-center justify-center text-moss">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3 className="font-headline-h3 text-deep-aquifer font-bold">Maintenance Cycle</h3>
              <p className="font-body-sm text-deep-aquifer/75">
                Ultra-low maintenance: inspect Chamber 1 after heavy monsoons, flush drain valves, rinse silex bed annually, and replace carbon every 1–2 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment & Installation Density Guidelines */}
      <section className="w-full bg-white py-20 md:py-28 border-t border-muted-aquifer/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="font-technical-label text-body-sm text-moss uppercase tracking-wider font-semibold">
                Deployment Guidelines
              </span>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Where &amp; How to Deploy Skyra Rainsink
              </h2>
              <div className="space-y-4 font-body-primary text-deep-aquifer/85">
                <div className="p-5 rounded-xl bg-surface-container-low border border-muted-aquifer/20">
                  <h3 className="font-bold text-deep-aquifer text-lg mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-moss">water_drop</span>
                    Near Existing Open Wells &amp; Borewells
                  </h3>
                  <p className="text-body-sm text-deep-aquifer/75">
                    Position Rainsink units 2 to 5 meters from existing wells. Rainwater filters naturally through surrounding soil strata before entering the well, restoring yield and water quality.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container-low border border-muted-aquifer/20">
                  <h3 className="font-bold text-deep-aquifer text-lg mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-moss">landscape</span>
                    1-Acre Industrial or Institutional Campus
                  </h3>
                  <p className="text-body-sm text-deep-aquifer/75">
                    Install 7 to 15 Rainsink units distributed across a 1-acre plot on terrain with slopes under 30&deg;. This network captures high-intensity runoff, prevents localized yard flooding, and lifts water tables across the entire site.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-deep-aquifer text-light-aquifer-canvas p-8 sm:p-10 rounded-3xl border border-white/10 shadow-xl flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-moss text-3xl">warning</span>
                <h3 className="font-headline-h3 text-white">Pre-Installation Safety Rules</h3>
              </div>
              <ul className="space-y-3 font-body-sm text-light-aquifer-canvas/85 list-disc pl-5">
                <li>
                  <strong className="text-white">Slope restriction:</strong> Do not install on steep slopes of 30&deg; or higher due to landslide and soil erosion hazards.
                </li>
                <li>
                  <strong className="text-white">Safe distances:</strong> Maintain mandatory clearance from septic tanks, chemical storage zones, and building foundations.
                </li>
                <li>
                  <strong className="text-white">Hydro-geological check:</strong> Verify soil percolation capacity and unconfined aquifer depth prior to excavation.
                </li>
                <li>
                  <strong className="text-white">Statutory compliance:</strong> Align unit layout with CGWA regulations, municipal bylaws, and green building norms (LEED, IGBC, GRIHA).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <section className="w-full bg-light-aquifer-canvas py-16 md:py-20 border-t border-muted-aquifer/15">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 className="font-headline-h2 text-deep-aquifer">Ready to Equip Your Campus with Skyra Rainsink?</h2>
          <p className="font-body-large text-deep-aquifer/80 max-w-2xl">
            Our hydrological engineers conduct site surveys, compute runoff volumes, and design custom Rainsink layouts tailored to your facility's ESG goals and flood prevention needs.
          </p>
          <Link
            href="/contact?product=rainsink"
            className="bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-button-text px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Request Site Survey &amp; Layout Plan
          </Link>
        </div>
      </section>
    </div>
  );
}
