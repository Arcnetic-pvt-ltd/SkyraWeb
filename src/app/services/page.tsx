import type { Metadata } from "next";
import Link from "next/link";
import { HarvestingCalculator } from "@/components/services/harvesting-calculator";
// import { ProductCatalogCarousel } from "@/components/services/product-catalog-carousel";

export const metadata: Metadata = {
  title: "Solutions · Skyra",
  description:
    "Three natural, engineering-grade approaches to catching, filtering, and storing water where it falls: Rainwater Harvesting, Stormwater Management, and Afforestation.",
};

const PRODUCTS = [
  {
    id: "rainsink-module",
    title: "Skyra Rainsink Percolator Unit",
    category: "Percolation Module",
    description:
      "Modular pre-cast concrete infiltration chamber with multi-stage aggregate filter media for underground aquifer recharge.",
    capacity: "30,000 L/yr per unit",
    href: "/contact?product=rainsink-module",
  },
  {
    id: "first-flush-filter",
    title: "Automatic Rooftop First-Flush Filter",
    category: "Rooftop Filtration",
    description:
      "Dual-chamber automatic bypass filter unit designed to isolate initial roof debris and silt before cistern storage.",
    capacity: "Up to 500 m² roof area",
    href: "/contact?product=first-flush-filter",
  },
  {
    id: "attenuation-crate",
    title: "Subsurface Attenuation Crate",
    category: "Stormwater Retention",
    description:
      "High-strength modular polypropylene void crates engineered for parking yard stormwater detention and controlled release.",
    capacity: "45 T/m² load capacity",
    href: "/contact?product=attenuation-crate",
  },
  {
    id: "filter-media-pack",
    title: "Silica & Carbon Filter Media Pack",
    category: "Filter Media",
    description:
      "Gradated silica gravel, quartz aggregate, and activated carbon refill pack for borehole clarification systems.",
    capacity: "0.2µm turbidity clarification",
    href: "/contact?product=filter-media-pack",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Section: Editorial Header */}
      <section className="w-full max-w-5xl mx-auto px-6 lg:px-8 pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-3xl flex flex-col gap-4">
          <span className="inline-flex items-center gap-2 font-technical-label text-[13px] uppercase tracking-wider text-forest-slate font-semibold">
            <span className="w-2 h-2 rounded-full bg-moss"></span>
            Systems &amp; architecture
          </span>
          <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer tracking-tight">
            Core water management solutions
          </h1>
          <p className="font-body-large text-body-large text-deep-aquifer/85 leading-relaxed max-w-2xl">
            Three natural, engineering-grade approaches to catching, filtering, and storing water where it falls.
          </p>
        </div>
      </section>

      {/* Service 1: Site-Specific Rainwater Harvesting */}
      <section className="w-full bg-light-aquifer-canvas py-16 md:py-24 border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Content Column */}
            <div className="lg:col-span-12 flex flex-col gap-6 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-body-sm text-moss font-semibold">01</span>
                <span className="w-8 h-px bg-muted-aquifer/30"></span>
                <span className="font-mono text-body-sm text-deep-aquifer/60">Decentralized Storage</span>
              </div>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Site-specific rainwater harvesting
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
                We design your property to catch its own water &mdash; filtered, stored, and ready to use &mdash; so you rely a little less on the tanker or the municipal line, and the ground beneath you gets a little healthier every monsoon.
              </p>
              <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4 font-mono text-body-sm text-deep-aquifer/75">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-moss">check_circle</span>
                  <span className="text-deep-aquifer/90 font-medium">Zero-loss gravity filtration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-moss">check_circle</span>
                  <span className="text-deep-aquifer/90 font-medium">Potable-grade cistern storage</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?service=rainwater-harvesting"
                  className="inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[15px] px-6 py-3.5 min-h-[44px] rounded-[6px] transition-colors shadow-xs"
                >
                  Book a site survey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Stormwater Management Solutions */}
      <section className="w-full bg-light-aquifer-canvas py-16 md:py-24 border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Content Column */}
            <div className="lg:col-span-12 flex flex-col gap-6 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-body-sm text-moss font-semibold">02</span>
                <span className="w-8 h-px bg-muted-aquifer/30"></span>
                <span className="font-mono text-body-sm text-deep-aquifer/60">Surface Hydraulics</span>
              </div>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Stormwater management solutions
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
                When the rain comes hard and fast, we make sure it has somewhere good to go &mdash; routed safely away from your building, and guided toward the aquifers that need it, instead of flooding the street.
              </p>
              <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4 font-mono text-body-sm text-deep-aquifer/70">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-moss">grain</span>
                  <span className="text-deep-aquifer/90 font-medium">Subsurface attenuation crates</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-moss">water</span>
                  <span className="text-deep-aquifer/90 font-medium">Bio-swale retention design</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?service=stormwater-management"
                  className="inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[15px] px-6 py-3.5 min-h-[44px] rounded-[6px] transition-colors shadow-xs"
                >
                  Book a site survey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Afforestation & Miyawaki Forests */}
      <section className="w-full bg-light-aquifer-canvas py-16 md:py-24 border-t border-muted-aquifer/15">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Content Column */}
            <div className="lg:col-span-12 flex flex-col gap-6 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-body-sm text-moss font-semibold">03</span>
                <span className="w-8 h-px bg-muted-aquifer/30"></span>
                <span className="font-mono text-body-sm text-deep-aquifer/60">Bio-Hydrological Sponge</span>
              </div>
              <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
                Afforestation &amp; Miyawaki forests
              </h2>
              <p className="font-body-large text-body-large text-deep-aquifer/85 leading-relaxed">
                On land that’s gone bare, we bring back dense, native forest &mdash; the kind that heals soil, holds water, and quietly pulls carbon from the air. It’s slow work that pays off for decades.
              </p>
              <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4 font-mono text-body-sm text-deep-aquifer/70">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-moss">forest</span>
                  <span className="text-deep-aquifer/90 font-medium">30x multi-tier canopy density</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-moss">yard</span>
                  <span className="text-deep-aquifer/90 font-medium">High-speed organic root penetration</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?service=afforestation"
                  className="inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[15px] px-6 py-3.5 min-h-[44px] rounded-[6px] transition-colors shadow-xs"
                >
                  Book a site survey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rainwater Harvesting Potential Estimate Calculator */}
      <HarvestingCalculator />

      {/* Section 4: E-commerce Style Product Listing Section */}
      <section className="w-full bg-light-aquifer-canvas py-16 md:py-24 border-t border-muted-aquifer/15" id="products">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="font-technical-label text-[12px] text-forest-slate font-semibold uppercase tracking-wider block mb-2">
              HARDWARE &amp; PRODUCTS
            </span>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight mb-3">
              Products
            </h2>
            <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
              Standalone rainwater harvesting hardware units and filter media refills.
            </p>
          </div>

          {/* Product Listing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="rounded-[4px] border border-muted-aquifer/20 bg-white p-6 shadow-xs flex flex-col justify-between gap-5"
              >
                <div className="flex flex-col gap-3">
                  <span className="font-technical-label text-[11px] font-semibold text-moss uppercase tracking-wider">
                    {prod.category}
                  </span>
                  <h3 className="font-headline-h3 text-base font-bold text-deep-aquifer leading-snug">
                    {prod.title}
                  </h3>
                  <p className="font-body-sm text-xs text-deep-aquifer/75 leading-relaxed">
                    {prod.description}
                  </p>
                  <div className="pt-2 border-t border-muted-aquifer/15">
                    <span className="font-mono text-[11px] text-deep-aquifer/70 font-semibold block">
                      {prod.capacity}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={prod.href}
                    className="w-full inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[14px] px-4 py-2.5 min-h-[44px] rounded-[6px] transition-colors shadow-xs"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ORIGINAL PRODUCT CATALOG CAROUSEL COMMENTED OUT PER SPECIFICATION:
          <ProductCatalogCarousel />
          */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-white border-t border-muted-aquifer/15">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-5">
          <span className="font-technical-label text-[12px] uppercase tracking-wider text-forest-slate font-semibold">
            Consultation &amp; site assessment
          </span>
          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight">
            Have a specific property or watershed in mind?
          </h2>
          <p className="font-body-large text-body-large text-deep-aquifer/80 max-w-xl leading-relaxed">
            We&apos;ll reply on WhatsApp within one working day. Written report and quote before any work starts.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[15px] px-8 py-3.5 min-h-[44px] rounded-[6px] transition-colors shadow-xs"
            >
              Book a site survey
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-muted-aquifer/30 bg-white text-deep-aquifer hover:bg-slate-50 font-medium text-[15px] px-8 py-3.5 min-h-[44px] rounded-[6px] transition-colors shadow-xs"
            >
              Read our mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
