"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_HREF } from "@/lib/nav";

export default function ServicesPage() {
  const [roofArea, setRoofArea] = useState<number>(150);
  const [rainfall, setRainfall] = useState<number>(3100);

  // Formula: Volume (Liters) = Area (m²) * Rainfall (mm) * Runoff Coefficient (0.85)
  const estimatedHarvestLiters = Math.round(roofArea * rainfall * 0.85);

  return (
    <div className="flex flex-col gap-12 sm:gap-16 py-4 text-left">
      {/* Editorial Header */}
      <section className="flex flex-col gap-4">
        <div className="text-skyra-label text-[#748D8C]">
          Skyra · Solutions
        </div>
        <h1 className="text-skyra-h1 text-[#1D293B] margin-0">
          Rainwater harvesting and groundwater recharge
        </h1>
        <p className="text-skyra-body text-[#1D293B]/85 max-w-2xl margin-0">
          Every rooftop and open courtyard holds water during the monsoon. We design and install filtration and recharge systems tailored to your site geology.
        </p>
      </section>

      {/* Solution 1: Rainwater Harvesting for Homes & Estates */}
      <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-8 flex flex-col gap-5">
        <div className="text-skyra-label text-[#7D9D3D]">01 · Decentralized storage</div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          Rainwater harvesting for homes and estates
        </h2>
        <p className="text-skyra-body text-[#1D293B]/85 margin-0 max-w-2xl">
          Filtered, stored, and ready to use — reducing reliance on water tankers and city supply while maintaining clean tank storage.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-skyra-body">
          <div className="border-l-2 border-[#7D9D3D] pl-3">
            <span className="font-semibold text-[#1D293B]">Zero-loss filtration:</span> Dual-stage aggregate filters remove leaf debris and silt before storage.
          </div>
          <div className="border-l-2 border-[#7D9D3D] pl-3">
            <span className="font-semibold text-[#1D293B]">Storage integration:</span> Connects directly to existing underground sumps or overhead storage.
          </div>
        </div>
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
      </section>

      {/* Solution 2: Groundwater Recharge for Apartment Communities (Skyra Rainsink) */}
      <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-8 flex flex-col gap-5">
        <div className="text-skyra-label text-[#7D9D3D]">02 · Deep aquifer recharge</div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          Groundwater recharge for apartment communities
        </h2>
        <p className="text-skyra-body text-[#1D293B]/85 margin-0 max-w-2xl">
          Six concrete rings with silex and activated carbon layers that filter roof and courtyard runoff directly into unconfined geological strata.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-skyra-body">
          <div className="border-l-2 border-[#7D9D3D] pl-3">
            <span className="font-semibold text-[#1D293B]">High intake capacity:</span> Handles heavy downpours without yard flooding or standing water.
          </div>
          <div className="border-l-2 border-[#7D9D3D] pl-3">
            <span className="font-semibold text-[#1D293B]">IS 15797:2008 standard:</span> Built strictly according to national rainwater recharge guidelines.
          </div>
        </div>
        <div className="pt-2 flex flex-wrap gap-4">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="skyra-btn-primary"
          >
            Book a site survey
          </a>
          <Link href="/products/rainsink" className="skyra-btn-secondary">
            View Rainsink specifications
          </Link>
        </div>
      </section>

      {/* Solution 3: Industrial & Institutional Campus Hydrology */}
      <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-8 flex flex-col gap-5">
        <div className="text-skyra-label text-[#7D9D3D]">03 · Institutional scale</div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          Campus stormwater management and recharge
        </h2>
        <p className="text-skyra-body text-[#1D293B]/85 margin-0 max-w-2xl">
          For logistics parks, factories, and educational campuses requiring comprehensive runoff management and statutory groundwater compliance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-skyra-body">
          <div className="border-l-2 border-[#7D9D3D] pl-3">
            <span className="font-semibold text-[#1D293B]">Hydrological modeling:</span> Catchment calculations based on local rainfall intensity records.
          </div>
          <div className="border-l-2 border-[#7D9D3D] pl-3">
            <span className="font-semibold text-[#1D293B]">Full documentation:</span> Complete engineering report and quote provided before work starts.
          </div>
        </div>
        <div className="pt-2">
          <Link href="/contact" className="skyra-btn-primary">
            Request campus study
          </Link>
        </div>
      </section>

      {/* Rainwater Yield Calculator (Restyled flat per Page 02 & 04) */}
      <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-8 flex flex-col gap-6">
        <div>
          <div className="text-skyra-label text-[#748D8C] mb-1">
            Yield Calculation
          </div>
          <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
            Estimate yearly rainwater yield
          </h2>
          <p className="text-skyra-body text-[#1D293B]/70 margin-0 mt-1">
            Based on IS 15797:2008 runoff coefficient (0.85) and local annual rainfall.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-skyra-body font-medium text-[#1D293B]">
              Roof catchment area (m²)
            </label>
            <input
              type="number"
              value={roofArea}
              onChange={(e) => setRoofArea(Number(e.target.value) || 0)}
              className="skyra-input"
              min={10}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-skyra-body font-medium text-[#1D293B]">
              Average yearly rainfall (mm)
            </label>
            <input
              type="number"
              value={rainfall}
              onChange={(e) => setRainfall(Number(e.target.value) || 0)}
              className="skyra-input"
              min={100}
            />
            <span className="text-skyra-label text-[11px] text-[#748D8C]">
              Note: Kerala average is 3,100 mm (Kerala State Planning Board)
            </span>
          </div>
        </div>

        <div className="bg-[#F4F7F6] border border-[#1D293B]/10 rounded-[4px] p-5 flex flex-col gap-1">
          <div className="text-skyra-label text-[#748D8C]">ESTIMATED HARVESTABLE YIELD</div>
          <div className="text-skyra-h1 text-[#1D293B]">
            {estimatedHarvestLiters.toLocaleString("en-IN")} Litres / year
          </div>
        </div>
      </section>
    </div>
  );
}
