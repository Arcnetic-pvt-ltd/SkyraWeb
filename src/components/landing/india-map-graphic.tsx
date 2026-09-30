"use client";

import React from "react";
import Image from "next/image";

export function IndiaMapGraphic() {
  return (
    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden select-none border border-muted-aquifer/20 shadow-md bg-white group">
      {/* High-Resolution Map of India with Kochi, Bengaluru, and Hyderabad Marked */}
      <Image
        src="/images/india-map-cities-v2.jpg"
        alt="Map of India - Deployment Network featuring Kochi, Bengaluru, and Hyderabad"
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-contain p-2"
        priority
      />

      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-aquifer/10 via-transparent to-transparent pointer-events-none" />

      {/* Pulsing Blinking Radar Animations Locked Directly Over Image Target Markers */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* 1. Kochi Blinking Radar Pulse */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "38.2%", top: "77.5%" }}>
          <div className="relative flex items-center justify-center">
            <span className="absolute size-9 rounded-full bg-moss/70 animate-ping" />
            <span className="size-2 rounded-full bg-moss/20" />
          </div>
        </div>

        {/* 2. Bengaluru Blinking Radar Pulse */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "41.8%", top: "70.05%" }}>
          <div className="relative flex items-center justify-center">
            <span className="absolute size-8 rounded-full bg-[#0098a6]/70 animate-ping" />
            <span className="size-2 rounded-full bg-[#0098a6]/90" />
          </div>
        </div>

        {/* 3. Hyderabad Blinking Radar Pulse */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: "44%", top: "58.3%" }}>
          <div className="relative flex items-center justify-center">
            <span className="absolute size-8 rounded-full bg-moss/70 animate-ping" />
            <span className="size-2 rounded-full bg-moss/90" />
          </div>
        </div>
      </div>
    </div>
  );
}
