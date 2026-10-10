"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface ProductItem {
  id: string;
  series: string;
  capacityTag: string;
  title: string;
  category: "all" | "rooftop" | "industrial" | "infrastructure";
  description: string;
  metric1Label: string;
  metric1Value: string;
  metric1Unit: string;
  metric2Label: string;
  metric2Value: string;
  image: string;
  contactProductSlug: string;
  specsHighlight: string[];
}

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: "neerain-nru-150",
    series: "NEERAIN NRU 150",
    capacityTag: "UP TO 140 M² ROOF",
    title: "NeeRain NRU 150 Rooftop Rainwater Filter",
    category: "rooftop",
    description:
      "Compact 2-stage gravity Reverse Y-flow filter in high-impact ABS engineering plastic housing. Utilizes dual polymeric screen elements (0.5mm non-clogging slot + 400µm secondary mesh) for >95% efficiency.",
    metric1Label: "Max filtration rate",
    metric1Value: "120",
    metric1Unit: "L/MIN (>95%)",
    metric2Label: "Filter mesh & price",
    metric2Value: "400µm Polymer Screen | ₹3,250",
    image: "/images/neerain-nru150-exact.jpg",
    contactProductSlug: "neerain-nru-150",
    specsHighlight: ["140 m² Roof Area", "120 L/Min Rate", "400µm Polymer Screen", "110mm ID Collar"],
  },
  {
    id: "neerain-nrn-220",
    series: "NEERAIN NRN 220",
    capacityTag: "UP TO 150 M² ROOF",
    title: "NeeRain NRN 220 High-Grade Rooftop Filter",
    category: "rooftop",
    description:
      "Advanced 2-stage gravity Reverse Y-flow filter featuring SS 304 curved non-clogging primary screen (0.5mm slot) paired with high-density 200 Micron polymeric secondary mesh in ABS housing.",
    metric1Label: "Max filtration rate",
    metric1Value: "150",
    metric1Unit: "L/MIN (>95%)",
    metric2Label: "Filter mesh & price",
    metric2Value: "SS 304 Curved + 200µm | ₹7,150",
    image: "/images/neerain-exact-filter.jpg",
    contactProductSlug: "neerain-nrn-220",
    specsHighlight: ["150 m² Roof Area", "150 L/Min Rate", "SS 304 Curved Screen", "200µm Polymer Mesh"],
  },
  {
    id: "ss-4-chamber",
    series: "SERIES SS-4",
    capacityTag: "2,500–5,000 SQ FT",
    title: "Sloped SS 4-Chamber RWH Filter System",
    category: "rooftop",
    description:
      "Industrial 1:10 sloped stainless steel 304 chamber on 6 heavy-duty legs. Uses gravity flow through Debris Sump, Silex Bed, Activated Carbon, and Quartz Sand.",
    metric1Label: "Roof capacity",
    metric1Value: "5,000",
    metric1Unit: "SQ FT",
    metric2Label: "Chamber material",
    metric2Value: "SS304 Sloped (1:10)",
    image: "/images/sloped-ss-filter.jpg",
    contactProductSlug: "ss-4-chamber-filter",
    specsHighlight: ["4-Stage Media", "Stainless Steel 304", "Gravity Flow"],
  },
  {
    id: "skyra-750-industrial",
    series: "MODEL RC-750",
    capacityTag: "750 M² CATCHMENT",
    title: "Skyra RC-750 High-Volume Industrial RWH Filter",
    category: "industrial",
    description:
      "Heavy-duty 10 LPS industrial rainwater filter cabinet designed for 750 m² roof catchments. Features 140mm dual inlet/outlet flanges and quick-flush drain manifold.",
    metric1Label: "Discharge rate",
    metric1Value: "10",
    metric1Unit: "LPS (140mm)",
    metric2Label: "Rainfall intensity",
    metric2Value: "50 mm/hr Peak",
    image: "/images/skyra-rc-750-filter.jpg",
    contactProductSlug: "750-series-filter",
    specsHighlight: ["750 m² Catchment", "10 LPS Discharge", "140mm Inlet/Outlet"],
  },
  {
    id: "drm-percolation-pond",
    series: "ECO INFRA",
    capacityTag: "DEEP RECHARGE",
    title: "Dry Rubble Masonry Percolation Pond System",
    category: "infrastructure",
    description:
      "Eco-engineered subterranean percolation pond with dry rubble stone masonry walls, organic sponge silt trap, and deep injection well into unconfined aquifers.",
    metric1Label: "Recharge well depth",
    metric1Value: "150+",
    metric1Unit: "FT",
    metric2Label: "Pond construction",
    metric2Value: "Dry Rubble Masonry",
    image: "/images/drm-percolation-pond.jpg",
    contactProductSlug: "drm-percolation-pond",
    specsHighlight: ["Zero-Concrete Silt Trap", "Aquifer Injection", "LEED Water Credits"],
  },
];

export function ProductCatalogCarousel() {
  const [activeCategory, setActiveCategory] = useState<"all" | "rooftop" | "industrial" | "infrastructure">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showSpecTable, setShowSpecTable] = useState(false);

  const filteredProducts = PRODUCTS_CATALOG.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const total = filteredProducts.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Reset index on category change
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Product selection is user-driven via category tabs and list controls

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Category Tabs & Navigation Controls Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-muted-aquifer/15">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "All products" },
            { id: "rooftop", label: "Rooftop filters" },
            { id: "industrial", label: "Industrial systems" },
            { id: "infrastructure", label: "Percolation ponds" },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-[6px] font-button-text text-xs sm:text-body-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-deep-aquifer text-white"
                    : "bg-white border border-muted-aquifer/20 text-deep-aquifer/70 hover:text-deep-aquifer hover:bg-black/5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Carousel Prev/Next Arrow Buttons & Pagination Count */}
        <div className="flex items-center gap-4 self-end md:self-auto">
          <span className="font-mono text-xs text-muted-aquifer font-medium">
            <span className="text-deep-aquifer font-bold">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(total).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous product"
              className="w-9 h-9 rounded-[6px] border border-muted-aquifer/25 bg-white flex items-center justify-center text-deep-aquifer hover:bg-deep-aquifer hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next product"
              className="w-9 h-9 rounded-[6px] border border-muted-aquifer/25 bg-white flex items-center justify-center text-deep-aquifer hover:bg-deep-aquifer hover:text-white transition-all duration-200 cursor-pointer disabled:opacity-40"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Carousel Slide Container */}
      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Desktop Grid Layout: Static Catalog Overview (5 Cols on Left) + Hero Spotlight Card (7 Cols on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Static Side Stack of Other Products in Catalog (5 Cols - Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-mono text-xs text-muted-aquifer font-medium">
              Catalog overview ({total} models)
            </span>

            <div className="flex flex-col gap-3">
              {filteredProducts.map((prod, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <div
                    key={prod.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`p-4 rounded-[4px] border transition-all duration-300 cursor-pointer flex items-center gap-4 group ${
                      isSelected
                        ? "bg-deep-aquifer text-white border-moss/60 border-l-4 border-l-moss"
                        : "bg-white text-deep-aquifer border-muted-aquifer/20 hover:border-moss/40 hover:bg-slate-50/50"
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className="relative w-16 h-16 rounded-[4px] overflow-hidden shrink-0 bg-surface-container-low border border-muted-aquifer/15">
                      <Image
                        src={prod.image}
                        alt={prod.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded-[4px] font-medium ${
                            isSelected
                              ? "bg-moss text-deep-aquifer"
                              : "bg-moss/10 text-moss"
                          }`}
                        >
                          {prod.series}
                        </span>
                        <span
                          className={`font-mono text-[10px] truncate ${
                            isSelected ? "text-white/70" : "text-muted-aquifer"
                          }`}
                        >
                          {prod.capacityTag}
                        </span>
                      </div>
                      <h4
                        className={`font-medium text-sm truncate mt-1 ${
                          isSelected ? "text-white" : "text-deep-aquifer"
                        }`}
                      >
                        {prod.title}
                      </h4>
                    </div>

                    <span
                      className={`material-symbols-outlined text-lg transition-transform ${
                        isSelected
                          ? "text-moss translate-x-1"
                          : "text-muted-aquifer/40 group-hover:text-deep-aquifer"
                      }`}
                    >
                      arrow_forward_ios
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Highlighted Product Hero Card (7 Cols - Right) wrapped in AnimatePresence */}
          <div className="lg:col-span-7 min-h-[500px] relative flex flex-col">
            <AnimatePresence mode="wait">
              {filteredProducts[currentIndex] && (
                <motion.div
                  key={`${activeCategory}-${currentIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full bg-white rounded-[4px] border border-muted-aquifer/20 overflow-hidden flex flex-col group h-full justify-between shadow-none"
                >
                  {/* High-Res Rendered Image Frame */}
                  <div className="relative w-full aspect-[16/10] bg-surface-container-low overflow-hidden border-b border-muted-aquifer/15">
                    <Image
                      src={filteredProducts[currentIndex].image}
                      alt={filteredProducts[currentIndex].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-aquifer/40 via-transparent to-transparent pointer-events-none" />

                    {/* Top Overlay Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="font-mono text-[11px] text-white bg-deep-aquifer px-3 py-1 rounded-[4px] font-medium border border-white/10">
                        {filteredProducts[currentIndex].series}
                      </span>
                      <span className="font-mono text-[11px] text-deep-aquifer bg-white px-3 py-1 rounded-[4px] font-medium border border-muted-aquifer/20">
                        {filteredProducts[currentIndex].capacityTag}
                      </span>
                    </div>

                    {/* Specs Highlight Tags at bottom of Image */}
                    <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-2 pointer-events-none">
                      {filteredProducts[currentIndex].specsHighlight.map((spec, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] text-light-aquifer-canvas bg-slate-900/90 px-2.5 py-0.5 rounded-[4px] border border-white/10"
                        >
                          &bull; {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Product Details Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-deep-aquifer tracking-tight">
                        {filteredProducts[currentIndex].title}
                      </h3>
                      <p className="font-body-primary text-base font-normal leading-relaxed text-deep-aquifer/85">
                        {filteredProducts[currentIndex].description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      {/* Metric Highlights Box */}
                      <div className="bg-light-aquifer-canvas p-4 rounded-[4px] border border-muted-aquifer/20 grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <span className="font-mono text-xs font-medium text-muted-aquifer">
                            {filteredProducts[currentIndex].metric1Label}
                          </span>
                          <span className="font-mono text-lg sm:text-xl font-bold text-deep-aquifer">
                            {filteredProducts[currentIndex].metric1Value}{" "}
                            <span className="text-moss text-xs font-normal">
                              {filteredProducts[currentIndex].metric1Unit}
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-mono text-xs font-medium text-muted-aquifer">
                            {filteredProducts[currentIndex].metric2Label}
                          </span>
                          <span className="font-mono text-sm sm:text-base font-medium text-deep-aquifer mt-1">
                            {filteredProducts[currentIndex].metric2Value}
                          </span>
                        </div>
                      </div>

                      {filteredProducts[currentIndex].id.startsWith("neerain") && (
                        <div className="flex flex-col gap-2">
                          <button
                            type="button"
                            onClick={() => setShowSpecTable(!showSpecTable)}
                            className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-[6px] bg-surface-container-low hover:bg-slate-200/60 border border-muted-aquifer/20 font-mono text-xs font-medium text-deep-aquifer transition-colors cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-moss text-base">table_chart</span>
                              <span>Compare NRU 150 vs NRN 220 datasheet</span>
                            </span>
                            <span className="material-symbols-outlined text-sm">
                              {showSpecTable ? "expand_less" : "expand_more"}
                            </span>
                          </button>

                          {showSpecTable && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-x-auto rounded-[4px] border border-muted-aquifer/20 bg-white p-3 text-xs"
                            >
                              <table className="w-full text-left font-mono">
                                <thead>
                                  <tr className="border-b border-muted-aquifer/20 text-deep-aquifer font-bold bg-slate-50">
                                    <th className="p-2 font-medium">Technical feature</th>
                                    <th className="p-2 text-moss font-bold">NRU 150</th>
                                    <th className="p-2 text-deep-aquifer font-bold">NRN 220</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-slate-700 text-[11px]">
                                  <tr>
                                    <td className="p-2 font-medium text-slate-900">Suitable roof area</td>
                                    <td className="p-2">140 m²</td>
                                    <td className="p-2">150 m²</td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 font-medium text-slate-900">Rate of filtration</td>
                                    <td className="p-2 font-bold text-moss">120 L/min</td>
                                    <td className="p-2 font-bold text-deep-aquifer">150 L/min</td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 font-medium text-slate-900">Filter element 1</td>
                                    <td className="p-2">Polymeric (0.5mm)</td>
                                    <td className="p-2 font-semibold text-deep-aquifer">SS 304 Curved (0.5mm)</td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 font-medium text-slate-900">Filter element 2</td>
                                    <td className="p-2">Polymeric 400µm</td>
                                    <td className="p-2">Polymeric 200µm</td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 font-medium text-slate-900">Inlet / clean outlet</td>
                                    <td className="p-2">110mm ID / 110mm OD</td>
                                    <td className="p-2">110mm ID / 110mm OD</td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 font-medium text-slate-900">Drain outlet / head</td>
                                    <td className="p-2">50mm OD / 1 ft min</td>
                                    <td className="p-2">50mm OD / 1 ft min</td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 font-medium text-slate-900">Efficiency &amp; material</td>
                                    <td className="p-2">&gt;95% (ABS Plastic)</td>
                                    <td className="p-2">&gt;95% (ABS Plastic)</td>
                                  </tr>
                                  <tr className="bg-moss/5 font-bold">
                                    <td className="p-2 text-deep-aquifer">Quotation price</td>
                                    <td className="p-2 text-moss text-xs">₹3,250</td>
                                    <td className="p-2 text-deep-aquifer text-xs">₹7,150</td>
                                  </tr>
                                </tbody>
                              </table>
                            </motion.div>
                          )}
                        </div>
                      )}

                      <div className="pt-2 flex items-center gap-3">
                        <Link
                          href={`/contact?product=${filteredProducts[currentIndex].contactProductSlug}`}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-deep-aquifer hover:bg-forest-slate text-white font-button-text font-semibold text-button-text px-7 py-3 rounded-[6px] transition-all duration-300 group/btn"
                        >
                          <span>Get quote &amp; specs</span>
                          <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Dot Indicators */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {filteredProducts.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === currentIndex ? "w-8 bg-moss" : "w-2 bg-muted-aquifer/30 hover:bg-muted-aquifer/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
