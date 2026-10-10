import type { Metadata } from "next";
import Link from "next/link";
import { RainsinkInteractiveShowcase } from "@/components/products/rainsink-interactive-showcase";
import { CONTACT } from "@/lib/nav";


export const metadata: Metadata = {
  title: "Skyra Rainsink | Modular Rain Percolator & Groundwater Recharge System",
  description:
    "Skyra Rainsink is our flagship modular rain percolator unit. Fabricated with heavy-duty concrete rings and multi-stage silica and activated carbon filter media, it mitigates industrial campus flooding, recharges subterranean aquifers, and earns CGWA NOC & LEED/IGBC water credits.",
  keywords: [
    "Skyra Rainsink",
    "Modular Rain Percolator Unit",
    "Groundwater Recharge Pit",
    "Stormwater Percolation System",
    "ESG Water Neutrality",
    "CGWA NOC Compliance",
    "LEED IGBC Water Credits",
    "Industrial Yard Flood Mitigation",
    "Subterranean Aquifer Replenishment",
  ],
};

export default function RainsinkProductPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Top Editorial Banner */}
      <section className="relative z-10 w-full pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle Atmospheric Rainfall Accent Overlay */}
        <div aria-hidden="true" className="absolute top-0 right-0 w-full sm:w-1/2 h-full z-[-1] pointer-events-none overflow-hidden select-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="rainsinkHeroRainPattern" width="120" height="120" patternUnits="userSpaceOnUse">
                <line x1="20" y1="0" x2="10" y2="35" stroke="#748D8C" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="12 18" />
                <line x1="70" y1="40" x2="60" y2="75" stroke="#7D9D3D" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="10 20" />
                <line x1="110" y1="20" x2="100" y2="55" stroke="#748D8C" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="8 16" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#rainsinkHeroRainPattern)" className="animate-subtle-rain" />
          </svg>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-moss"></span>
            <span className="font-mono text-xs text-moss font-medium">
              Flagship hydrological engine &middot; Skyra Rainsink
            </span>
          </div>

          <h1 className="font-headline-hero text-[38px] sm:text-5xl lg:text-[56px] font-bold text-deep-aquifer tracking-tight leading-tight">
            High-capacity rain percolator &amp; groundwater recharge unit
          </h1>

          <p className="font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
            Skyra Rainsink transforms intense monsoonal surface runoff into lasting groundwater reserves. Built from heavy-duty pre-cast RCC rings and multi-stage natural silica filter media, it intercepts high-volume stormwater, purifies suspended sediments, and actively recharges subterranean aquifers.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/contact?product=rainsink"
              className="inline-flex items-center gap-2.5 bg-deep-aquifer hover:bg-forest-slate text-white font-button-text font-semibold text-button-text px-7 py-3.5 rounded-[6px] transition-all duration-300 group"
            >
              <span>Get site survey &amp; pricing</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <a
              href="#technical-specs"
              className="font-button-text font-semibold text-button-text text-forest-slate hover:text-deep-aquifer transition-colors inline-flex items-center gap-2 py-3 px-4 rounded-[6px] border border-muted-aquifer/30 bg-white"
            >
              <span>Engineering specifications</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_downward
              </span>
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Interactive Value Propositions & System Schematic Section */}
      <section className="w-full bg-light-aquifer-canvas py-16 sm:py-24 border-t border-muted-aquifer/15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RainsinkInteractiveShowcase />
        </div>
      </section>

      {/* Technical Specifications Grid */}
      <section id="technical-specs" className="relative w-full bg-linear-to-b from-[#edf6fa] via-[#e6f1f7] to-[#edf6fa] py-16 sm:py-24 overflow-hidden border-t border-[#c5def0]/60">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col gap-4 mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-moss"></span>
              <span className="font-mono text-xs text-moss font-medium">
                Unit composition &amp; hardware
              </span>
            </div>
            <h2 className="font-headline-h2 text-[28px] sm:text-[36px] font-semibold text-deep-aquifer tracking-tight">
              Rainsink engineering specifications
            </h2>
            <p className="font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
              Each Skyra Rainsink is fabricated to exact industrial standards for rapid site installation, high structural integrity, and minimal maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-7 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="text-forest-slate">
                  <span className="material-symbols-outlined text-[24px]">view_in_ar</span>
                </div>
                <h3 className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-deep-aquifer tracking-tight">
                  Concrete ring shaft
                </h3>
                <p className="font-body-primary text-base font-normal leading-relaxed text-deep-aquifer/85">
                  6 heavy-duty pre-cast RCC/concrete rings (1 meter outer diameter), stacked vertically to form a high-capacity percolation column.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-7 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="text-forest-slate">
                  <span className="material-symbols-outlined text-[24px]">filter_alt</span>
                </div>
                <h3 className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-deep-aquifer tracking-tight">
                  Top filter layer (silex)
                </h3>
                <p className="font-body-primary text-base font-normal leading-relaxed text-deep-aquifer/85">
                  150 to 200 kg of graded medium silex silica gravel. Traps initial coarse sediments, leaf debris, and suspended solids.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-7 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="text-forest-slate">
                  <span className="material-symbols-outlined text-[24px]">cleaning_services</span>
                </div>
                <h3 className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-deep-aquifer tracking-tight">
                  Active adsorption layer
                </h3>
                <p className="font-body-primary text-base font-normal leading-relaxed text-deep-aquifer/85">
                  2 bags (35 to 50 kg) of high-surface-area granular activated carbon / charcoal. Adsorbs organic impurities, odor, and color compounds.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-7 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="text-forest-slate">
                  <span className="material-symbols-outlined text-[24px]">waves</span>
                </div>
                <h3 className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-deep-aquifer tracking-tight">
                  Base sand &amp; silex bed
                </h3>
                <p className="font-body-primary text-base font-normal leading-relaxed text-deep-aquifer/85">
                  Small silex gravel layer layered over a deep coarse sand base to polish filtrate before soil zone percolation.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-7 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="text-forest-slate">
                  <span className="material-symbols-outlined text-[24px]">tune</span>
                </div>
                <h3 className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-deep-aquifer tracking-tight">
                  Overflow &amp; inspection
                </h3>
                <p className="font-body-primary text-base font-normal leading-relaxed text-deep-aquifer/85">
                  Equipped with a high-flow PVC overflow bypass, reinforced concrete top slab, and cast-iron/concrete manhole cover for flush access.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-7 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="text-forest-slate">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <h3 className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-deep-aquifer tracking-tight">
                  Maintenance cycle
                </h3>
                <p className="font-body-primary text-base font-normal leading-relaxed text-deep-aquifer/85">
                  Ultra-low maintenance: inspect Chamber 1 after heavy monsoons, flush drain valves, rinse silex bed annually, and replace carbon every 1–2 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment & Installation Density Guidelines */}
      <section className="relative w-full bg-light-aquifer-canvas py-20 md:py-28 overflow-hidden border-t border-muted-aquifer/15">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-moss"></span>
                  <span className="font-mono text-xs text-moss font-medium">
                    Deployment guidelines
                  </span>
                </div>
                <h2 className="font-headline-h2 text-[28px] sm:text-[36px] font-semibold text-deep-aquifer tracking-tight">
                  Where &amp; how to deploy Skyra Rainsink
                </h2>
              </div>

              <div className="space-y-4 font-body-primary text-deep-aquifer/85 flex-1 flex flex-col justify-end">
                <div className="p-6 rounded-[4px] bg-white border border-muted-aquifer/20">
                  <h3 className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-deep-aquifer mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-moss">water_drop</span>
                    Near existing open wells &amp; borewells
                  </h3>
                  <p className="font-body-primary text-base font-normal text-deep-aquifer/85 leading-relaxed">
                    Position Rainsink units 2 to 5 meters from existing wells. Rainwater filters naturally through surrounding soil strata before entering the well, restoring yield and water quality.
                  </p>
                </div>

                <div className="p-6 rounded-[4px] bg-white border border-muted-aquifer/20">
                  <h3 className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-deep-aquifer mb-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-moss">landscape</span>
                    1-Acre industrial or institutional campus
                  </h3>
                  <p className="font-body-primary text-base font-normal text-deep-aquifer/85 leading-relaxed">
                    Install 7 to 15 Rainsink units distributed across a 1-acre plot on terrain with slopes under 30&deg;. This network captures high-intensity runoff, prevents localized yard flooding, and lifts water tables across the entire site.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 h-full flex flex-col">
              <div className="h-full bg-linear-to-br from-[#0c1a2d] via-[#10243d] to-[#173050] text-white p-7 sm:p-9 rounded-[4px] border border-[#22446d]/60 flex flex-col justify-between relative overflow-hidden shadow-sm">
                {/* Subtle inner ambient glow */}
                <div aria-hidden="true" className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#0098a6]/10 blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-6">
                  {/* Card Header */}
                  <div className="flex flex-col gap-3 pb-5 border-b border-[#22446d]/60">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#132742]/80 border border-[#22446d] w-fit">
                      <span className="material-symbols-outlined text-moss text-sm">warning</span>
                      <span className="font-mono text-xs text-[#86b5db] font-medium tracking-wide">
                        Mandatory protocols
                      </span>
                    </div>
                    <h3
                      className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-white !text-white"
                      style={{ color: "#ffffff" }}
                    >
                      Pre-installation safety rules
                    </h3>
                  </div>

                  {/* Safety Points */}
                  <ul className="space-y-4 font-body-primary text-base font-normal text-light-aquifer-canvas/90 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0 mt-2.5"></span>
                      <div>
                        <strong className="text-white font-medium">Slope restriction:</strong>
                        <span className="text-[#bcd7e8]/90">&nbsp;Do not install on steep slopes of 30&deg; or higher due to landslide and soil erosion hazards.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0 mt-2.5"></span>
                      <div>
                        <strong className="text-white font-medium">Safe distances:</strong>
                        <span className="text-[#bcd7e8]/90">&nbsp;Maintain mandatory clearance from septic tanks, chemical storage zones, and building foundations.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0 mt-2.5"></span>
                      <div>
                        <strong className="text-white font-medium">Hydro-geological check:</strong>
                        <span className="text-[#bcd7e8]/90">&nbsp;Verify soil percolation capacity and unconfined aquifer depth prior to excavation.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0 mt-2.5"></span>
                      <div>
                        <strong className="text-white font-medium">Statutory compliance:</strong>
                        <span className="text-[#bcd7e8]/90">&nbsp;Align unit layout with CGWA regulations, municipal bylaws, and green building norms (LEED, IGBC, GRIHA).</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Compliance footer indicator */}
                <div className="relative z-10 pt-5 mt-6 border-t border-[#22446d]/60 flex items-center justify-between text-xs font-mono text-[#86b5db]/80">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-moss"></span>
                    Zero structural risk standard
                  </span>
                  <span>CGWA &bull; IGBC &bull; GRIHA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative w-full bg-linear-to-b from-[#edf6fa] via-[#e5f1f7] to-[#edf6fa] py-16 sm:py-24 border-t border-[#c8e0ee]/60">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start relative z-10 gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white border border-[#bcd7e8]/60 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-moss" />
            <span className="font-mono text-xs text-secondary font-medium">
              Fast-track site consultation
            </span>
          </div>

          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer max-w-3xl leading-tight font-semibold tracking-tight">
            Ready to equip your campus with Skyra Rainsink?
          </h2>

          <p className="font-body-large text-body-large text-deep-aquifer max-w-2xl leading-relaxed text-left">
            Our civil hydrologists analyze site topography, model peak monsoonal runoff, and deliver a turn-key Rainsink layout plan tailored to your ESG goals and flood prevention targets.
          </p>

          {/* Inline Deliverables Pills */}
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs font-medium text-deep-aquifer">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-white border border-[#bcd7e8]/70 text-deep-aquifer shadow-xs">
              <span className="material-symbols-outlined text-moss text-[15px]">analytics</span>
              Runoff modeling
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-white border border-[#bcd7e8]/70 text-deep-aquifer shadow-xs">
              <span className="material-symbols-outlined text-moss text-[15px]">architecture</span>
              CAD layout blueprint
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-white border border-[#bcd7e8]/70 text-deep-aquifer shadow-xs">
              <span className="material-symbols-outlined text-moss text-[15px]">verified_user</span>
              CGWA credits
            </span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/contact?product=rainsink"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-button-text font-semibold text-button-text px-8 py-3.5 rounded-[6px] transition-all duration-300 group cursor-pointer whitespace-nowrap"
            >
              <span>Request site survey</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </Link>

            <a
              href={`tel:${CONTACT.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#bcd7e8]/70 bg-white hover:bg-[#e7f3f9] hover:border-[#748D8C] text-deep-aquifer font-button-text font-semibold text-button-text px-7 py-3.5 rounded-[6px] transition-colors whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>{CONTACT.phoneDisplay}</span>
            </a>
          </div>

          <div className="mt-8 pt-6 flex flex-wrap items-center gap-3 text-secondary/70 text-xs font-mono border-t border-[#bcd7e8]/60 w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0"></span>
            <span>Zero structural risk standard &bull; Engineered to IS 15797:2008 &bull; CGWA &amp; IGBC compliant</span>
          </div>
        </div>
      </section>


    </div>
  );
}
