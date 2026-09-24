"use client";

import React from "react";
import Image from "next/image";

export function IndiaMapGraphic() {
  return (
    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden select-none border border-muted-aquifer/20 shadow-md bg-white group">
      {/* Real High-Resolution Clean Unlabelled Map of India */}
      <Image
        src="/images/india-map-clean.jpg"
        alt="Map of India - Deployment Network"
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
        priority
      />

      {/* SVG Interactive Overlay for Only Kochi, Bengaluru, and Hyderabad */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 600 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection pipeline line between active corridors */}
        <path
          d="M 210 570 L 255 530 L 268 435"
          stroke="#0098a6"
          strokeWidth="2"
          strokeDasharray="5 4"
          opacity="0.75"
        >
          <animate attributeName="stroke-dashoffset" values="18;0" dur="2.5s" repeatCount="indefinite" />
        </path>

        {/* 1. KOCHI (Kerala - Active Hub) */}
        <g>
          <line x1="210" y1="570" x2="160" y2="570" stroke="#7D9D3D" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="210" cy="570" fill="none" r="18" stroke="#7D9D3D" strokeWidth="2.5">
            <animate attributeName="r" dur="2.4s" repeatCount="indefinite" values="6;36" />
            <animate attributeName="opacity" dur="2.4s" repeatCount="indefinite" values="1;0" />
          </circle>
          <circle cx="210" cy="570" fill="#7D9D3D" r="7" />
          <circle cx="210" cy="570" fill="none" r="10" stroke="#ffffff" strokeWidth="2" />
          {/* Label Pin */}
          <rect x="70" y="556" width="88" height="28" rx="14" fill="#1D293B" stroke="#7D9D3D" strokeWidth="1.5" opacity="0.95" />
          <text x="114" y="574" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" textAnchor="middle">
            Kochi Hub
          </text>
        </g>

        {/* 2. BENGALURU (Karnataka) */}
        <g>
          <line x1="255" y1="530" x2="295" y2="530" stroke="#0098a6" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="255" cy="530" fill="none" r="16" stroke="#0098a6" strokeWidth="2">
            <animate attributeName="r" begin="0.8s" dur="2.4s" repeatCount="indefinite" values="6;30" />
            <animate attributeName="opacity" begin="0.8s" dur="2.4s" repeatCount="indefinite" values="0.9;0" />
          </circle>
          <circle cx="255" cy="530" fill="#0098a6" r="6" />
          <circle cx="255" cy="530" fill="none" r="9" stroke="#ffffff" strokeWidth="1.8" />
          {/* Label Pin */}
          <rect x="297" y="517" width="90" height="26" rx="13" fill="#1D293B" stroke="#0098a6" strokeWidth="1" opacity="0.9" />
          <text x="342" y="534" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">
            Bengaluru
          </text>
        </g>

        {/* 3. HYDERABAD (Telangana) */}
        <g>
          <line x1="268" y1="435" x2="310" y2="435" stroke="#7D9D3D" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="268" cy="435" fill="none" r="16" stroke="#7D9D3D" strokeWidth="2">
            <animate attributeName="r" begin="0.4s" dur="2.4s" repeatCount="indefinite" values="6;30" />
            <animate attributeName="opacity" begin="0.4s" dur="2.4s" repeatCount="indefinite" values="0.9;0" />
          </circle>
          <circle cx="268" cy="435" fill="#7D9D3D" r="6" />
          <circle cx="268" cy="435" fill="none" r="9" stroke="#ffffff" strokeWidth="1.8" />
          {/* Label Pin */}
          <rect x="312" y="422" width="90" height="26" rx="13" fill="#1D293B" stroke="#7D9D3D" strokeWidth="1" opacity="0.9" />
          <text x="357" y="439" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">
            Hyderabad
          </text>
        </g>
      </svg>
    </div>
  );
}
