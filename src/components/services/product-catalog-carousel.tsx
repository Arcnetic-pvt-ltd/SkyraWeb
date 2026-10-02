"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_HREF } from "@/lib/nav";

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
      "Compact 2-stage gravity Reverse Y-flow filter in high-impact ABS engineering plastic housing. Utilizes dual polymeric screen elements for >95% efficiency.",
    metric1Label: "Max Filtration Rate",
    metric1Value: "120",
    metric1Unit: "L/MIN (>95%)",
    metric2Label: "Filter Mesh",
    metric2Value: "400µm Polymer Screen",
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
      "Advanced 2-stage gravity Reverse Y-flow filter featuring SS 304 curved non-clogging primary screen paired with high-density 200 Micron polymeric secondary mesh.",
    metric1Label: "Max Filtration Rate",
    metric1Value: "150",
    metric1Unit: "L/MIN (>95%)",
    metric2Label: "Filter Mesh",
    metric2Value: "SS 304 Curved + 200µm",
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
      "Industrial 1:10 sloped stainless steel 304 chamber. Uses gravity flow through Debris Sump, Silex Bed, Activated Carbon, and Quartz Sand.",
    metric1Label: "Roof Capacity",
    metric1Value: "5,000",
    metric1Unit: "SQ FT",
    metric2Label: "Chamber Material",
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
      "Heavy-duty 10 LPS industrial rainwater filter cabinet designed for 750 m² roof catchments. Features 140mm dual inlet/outlet flanges.",
    metric1Label: "Discharge Rate",
    metric1Value: "10",
    metric1Unit: "LPS (140mm)",
    metric2Label: "Rainfall Intensity",
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
      "Subterranean percolation pond with dry rubble stone masonry walls, organic sponge silt trap, and deep injection well into unconfined aquifers.",
    metric1Label: "Recharge Well Depth",
    metric1Value: "150+",
    metric1Unit: "FT",
    metric2Label: "Pond Construction",
    metric2Value: "Dry Rubble Masonry",
    image: "/images/drm-percolation-pond.jpg",
    contactProductSlug: "drm-percolation-pond",
    specsHighlight: ["Silt Trap", "Aquifer Injection", "IS 15797:2008 Standard"],
  },
];

export function ProductCatalogCarousel() {
  const [activeCategory, setActiveCategory] = useState<"all" | "rooftop" | "industrial" | "infrastructure">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSpecTable, setShowSpecTable] = useState(false);

  const filteredProducts = PRODUCTS_CATALOG.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const currentProduct = filteredProducts[currentIndex] || filteredProducts[0];

  return (
    <div className="w-full flex flex-col gap-6 text-left">
      {/* Category Tabs Header */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#1D293B]/10">
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
              onClick={() => {
                setActiveCategory(tab.id as any);
                setCurrentIndex(0);
              }}
              className={`skyra-btn-secondary text-[13px] py-1.5 px-3 ${
                isActive ? "bg-[#1D293B] text-white" : ""
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Column: Product Model List */}
        <div className="md:col-span-5 flex flex-col gap-2">
          <div className="text-skyra-label text-[#748D8C] mb-1">
            Product Models ({filteredProducts.length})
          </div>
          {filteredProducts.map((prod, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <div
                key={prod.id}
                onClick={() => setCurrentIndex(idx)}
                className={`skyra-card p-4 flex items-center justify-between cursor-pointer ${
                  isSelected ? "bg-[#1D293B] text-white border-[#1D293B]" : ""
                }`}
              >
                <div className="flex flex-col gap-1">
                  <div className="text-skyra-label text-[11px] opacity-80">{prod.series}</div>
                  <div className="font-medium text-[15px]">{prod.title}</div>
                </div>
                <div className="text-skyra-label text-[11px] opacity-70">{prod.capacityTag}</div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Product Detail Card */}
        {currentProduct && (
          <div className="md:col-span-7 skyra-card p-6 flex flex-col gap-5">
            <div className="relative w-full h-56 bg-[#F4F7F6] rounded-[4px] overflow-hidden border border-[#1D293B]/10">
              <Image
                src={currentProduct.image}
                alt={currentProduct.title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-skyra-label text-[#7D9D3D]">{currentProduct.series} · {currentProduct.capacityTag}</div>
              <h3 className="text-skyra-h2 text-[#1D293B] margin-0">{currentProduct.title}</h3>
              <p className="text-skyra-body text-[#1D293B]/85 margin-0">{currentProduct.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-[#F4F7F6] p-4 rounded-[4px] border border-[#1D293B]/10 text-skyra-body">
              <div>
                <div className="text-skyra-label text-[#748D8C] text-[11px]">{currentProduct.metric1Label}</div>
                <div className="font-semibold text-[#1D293B]">{currentProduct.metric1Value} {currentProduct.metric1Unit}</div>
              </div>
              <div>
                <div className="text-skyra-label text-[#748D8C] text-[11px]">{currentProduct.metric2Label}</div>
                <div className="font-semibold text-[#1D293B]">{currentProduct.metric2Value}</div>
              </div>
            </div>

            {/* NRU 150 vs NRN 220 Datasheet Comparison Toggle */}
            {currentProduct.id.startsWith("neerain") && (
              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSpecTable(!showSpecTable)}
                  className="skyra-btn-secondary text-[13px] self-start"
                >
                  {showSpecTable ? "Hide datasheet comparison" : "Compare NRU 150 vs NRN 220 datasheet"}
                </button>

                {showSpecTable && (
                  <div className="overflow-x-auto border border-[#1D293B]/10 rounded-[4px] bg-white p-4">
                    <table className="w-full text-left text-skyra-body text-[13px]">
                      <thead>
                        <tr className="border-b border-[#1D293B]/10 text-[#1D293B] font-semibold">
                          <th className="pb-2">Specification</th>
                          <th className="pb-2 text-[#7D9D3D]">NRU 150</th>
                          <th className="pb-2">NRN 220</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1D293B]/10 text-[#1D293B]/80">
                        <tr>
                          <td className="py-2 font-medium">Suitable roof area</td>
                          <td className="py-2">140 m²</td>
                          <td className="py-2">150 m²</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Filtration rate</td>
                          <td className="py-2">120 L/min</td>
                          <td className="py-2">150 L/min</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Primary filter</td>
                          <td className="py-2">Polymeric (0.5mm)</td>
                          <td className="py-2">SS 304 Curved (0.5mm)</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Secondary filter</td>
                          <td className="py-2">Polymeric 400µm</td>
                          <td className="py-2">Polymeric 200µm</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Inlet / Clean outlet</td>
                          <td className="py-2">110mm ID / 110mm OD</td>
                          <td className="py-2">110mm ID / 110mm OD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            <div className="pt-2">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="skyra-btn-primary"
              >
                Book a site survey
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
