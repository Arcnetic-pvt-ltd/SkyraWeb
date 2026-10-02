"use client";

import React from "react";
import Image from "next/image";

export function IndiaMapGraphic() {
  return (
    <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden select-none border border-[#1D293B]/10 bg-white">
      {/* Map of India with Kochi, Bengaluru, and Hyderabad */}
      <Image
        src="/images/india-map-cities-v2.jpg"
        alt="Map of India - Deployment Network featuring Kochi, Bengaluru, and Hyderabad"
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-contain p-2"
        priority
      />

      {/* City Markers (Static, Flat style per Page 08 & 09) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* 1. Kochi */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "38.2%", top: "77.5%" }}>
          <div className="flex items-center gap-1.5 bg-white border border-[#1D293B]/20 rounded-[4px] px-1.5 py-0.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#7D9D3D]" />
            <span className="text-skyra-label text-[10px] text-[#1D293B] font-bold">Kochi</span>
          </div>
        </div>

        {/* 2. Bengaluru */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "41.8%", top: "70.05%" }}>
          <div className="flex items-center gap-1.5 bg-white border border-[#1D293B]/20 rounded-[4px] px-1.5 py-0.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#7D9D3D]" />
            <span className="text-skyra-label text-[10px] text-[#1D293B] font-bold">Bengaluru</span>
          </div>
        </div>

        {/* 3. Hyderabad */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "44%", top: "58.3%" }}>
          <div className="flex items-center gap-1.5 bg-white border border-[#1D293B]/20 rounded-[4px] px-1.5 py-0.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#7D9D3D]" />
            <span className="text-skyra-label text-[10px] text-[#1D293B] font-bold">Hyderabad</span>
          </div>
        </div>
      </div>
    </div>
  );
}
