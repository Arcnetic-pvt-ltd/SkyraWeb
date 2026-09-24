"use client";

import React from "react";
import Image from "next/image";

export function IndiaMapGraphic() {
  return (
    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden select-none border border-muted-aquifer/20 shadow-md bg-white group">
      {/* High-Resolution Map of India with Kochi, Bengaluru, and Hyderabad Marked */}
      <Image
        src="/images/india-map-cities.jpg"
        alt="Map of India - Deployment Network featuring Kochi, Bengaluru, and Hyderabad"
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
        priority
      />

      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-aquifer/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
