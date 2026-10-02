"use client";

import React from "react";
import Image from "next/image";

export function IndiaMapGraphic() {
  return (
    <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden select-none border border-muted-aquifer/20 bg-white group">
      {/* High-Resolution Map of India with Kochi, Bengaluru, and Hyderabad Marked */}
      <Image
        src="/images/india-map-cities-v2.jpg"
        alt="Map of India - Deployment Network featuring Kochi, Bengaluru, and Hyderabad"
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-contain p-2"
        priority
      />

      {/* Markers Locked Directly Over Image Target Markers */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* 1. Kochi Marker */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "38.2%", top: "77.5%" }}>
          <span className="size-3 block rounded-full bg-moss border-2 border-white shadow-xs" />
        </div>

        {/* 2. Bengaluru Marker */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "41.8%", top: "70.05%" }}>
          <span className="size-3 block rounded-full bg-forest-slate border-2 border-white shadow-xs" />
        </div>

        {/* 3. Hyderabad Marker */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "44%", top: "58.3%" }}>
          <span className="size-3 block rounded-full bg-moss border-2 border-white shadow-xs" />
        </div>
      </div>
    </div>
  );
}
