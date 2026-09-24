"use client";

import React from "react";
import Image from "next/image";

export function IndiaMapGraphic() {
  return (
    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden select-none border border-muted-aquifer/20 shadow-md bg-slate-50 group">
      {/* Real High-Resolution Satellite & Terrain Map of India */}
      <Image
        src="/images/india-map-real.jpg"
        alt="Real Satellite Map of India - Deployment Network"
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        priority
      />

      {/* Ambient gradient overlay for subtle contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-aquifer/40 via-transparent to-transparent pointer-events-none" />

      {/* SVG Interactive Overlay for Pinging Hotspot Indicators & Text Callouts */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 600 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 1. KOCHI (Kerala - Primary Hub) */}
        <g>
          <line x1="210" y1="560" x2="165" y2="560" stroke="#7D9D3D" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="210" cy="560" fill="none" r="18" stroke="#7D9D3D" strokeWidth="2.5">
            <animate attributeName="r" dur="2.4s" repeatCount="indefinite" values="6;36" />
            <animate attributeName="opacity" dur="2.4s" repeatCount="indefinite" values="1;0" />
          </circle>
          <circle cx="210" cy="560" fill="#7D9D3D" r="7" />
          <circle cx="210" cy="560" fill="none" r="10" stroke="#ffffff" strokeWidth="2" />
          {/* Label Pin */}
          <rect x="75" y="546" width="85" height="28" rx="14" fill="#1D293B" stroke="#7D9D3D" strokeWidth="1.5" opacity="0.95" />
          <text x="117" y="564" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" textAnchor="middle">
            Kochi Hub
          </text>
        </g>

        {/* 2. BENGALURU (Karnataka) */}
        <g>
          <line x1="250" y1="525" x2="280" y2="525" stroke="#0098a6" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="250" cy="525" fill="none" r="16" stroke="#0098a6" strokeWidth="2">
            <animate attributeName="r" begin="0.6s" dur="2.4s" repeatCount="indefinite" values="6;30" />
            <animate attributeName="opacity" begin="0.6s" dur="2.4s" repeatCount="indefinite" values="0.9;0" />
          </circle>
          <circle cx="250" cy="525" fill="#0098a6" r="6" />
          <circle cx="250" cy="525" fill="none" r="9" stroke="#ffffff" strokeWidth="1.8" />
          {/* Label Pin */}
          <rect x="282" y="512" width="88" height="26" rx="13" fill="#1D293B" stroke="#0098a6" strokeWidth="1" opacity="0.9" />
          <text x="326" y="529" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">
            Bengaluru
          </text>
        </g>

        {/* 3. MUMBAI (Maharashtra) */}
        <g>
          <line x1="160" y1="430" x2="120" y2="430" stroke="#0098a6" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="160" cy="430" fill="none" r="16" stroke="#0098a6" strokeWidth="2">
            <animate attributeName="r" begin="1.2s" dur="2.4s" repeatCount="indefinite" values="6;30" />
            <animate attributeName="opacity" begin="1.2s" dur="2.4s" repeatCount="indefinite" values="0.9;0" />
          </circle>
          <circle cx="160" cy="430" fill="#0098a6" r="5.5" />
          <circle cx="160" cy="430" fill="none" r="8.5" stroke="#ffffff" strokeWidth="1.8" />
          {/* Label Pin */}
          <rect x="45" y="417" width="72" height="26" rx="13" fill="#1D293B" stroke="#0098a6" strokeWidth="1" opacity="0.9" />
          <text x="81" y="434" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">
            Mumbai
          </text>
        </g>

        {/* 4. HYDERABAD (Telangana) */}
        <g>
          <line x1="265" cy="435" x2="300" y2="435" stroke="#7D9D3D" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="265" cy="435" fill="none" r="16" stroke="#7D9D3D" strokeWidth="2">
            <animate attributeName="r" begin="0.3s" dur="2.4s" repeatCount="indefinite" values="6;30" />
            <animate attributeName="opacity" begin="0.3s" dur="2.4s" repeatCount="indefinite" values="0.9;0" />
          </circle>
          <circle cx="265" cy="435" fill="#7D9D3D" r="5.5" />
          <circle cx="265" cy="435" fill="none" r="8.5" stroke="#ffffff" strokeWidth="1.8" />
          {/* Label Pin */}
          <rect x="302" y="422" width="86" height="26" rx="13" fill="#1D293B" stroke="#7D9D3D" strokeWidth="1" opacity="0.9" />
          <text x="345" y="439" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">
            Hyderabad
          </text>
        </g>

        {/* 5. NEW DELHI (Delhi) */}
        <g>
          <line x1="240" y1="220" x2="275" y2="220" stroke="#0098a6" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="240" cy="220" fill="none" r="16" stroke="#0098a6" strokeWidth="2">
            <animate attributeName="r" begin="1.8s" dur="2.4s" repeatCount="indefinite" values="6;30" />
            <animate attributeName="opacity" begin="1.8s" dur="2.4s" repeatCount="indefinite" values="0.9;0" />
          </circle>
          <circle cx="240" cy="220" fill="#0098a6" r="5.5" />
          <circle cx="240" cy="220" fill="none" r="8.5" stroke="#ffffff" strokeWidth="1.8" />
          {/* Label Pin */}
          <rect x="277" y="207" width="82" height="26" rx="13" fill="#1D293B" stroke="#0098a6" strokeWidth="1" opacity="0.9" />
          <text x="318" y="224" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">
            New Delhi
          </text>
        </g>
      </svg>
    </div>
  );
}
