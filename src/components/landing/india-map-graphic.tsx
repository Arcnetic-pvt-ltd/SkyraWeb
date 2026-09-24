"use client";

import React from "react";

export function IndiaMapGraphic() {
  return (
    <div className="relative w-full aspect-[4/5] flex items-center justify-center select-none">
      <svg
        className="w-full h-full drop-shadow-lg"
        fill="none"
        viewBox="0 0 600 650"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="indiaMapGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d8f3f2" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#ccebc8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#7D9D3D" stopOpacity="0.45" />
          </linearGradient>

          <filter id="mapGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#7D9D3D" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* ULTRA-HIGH PRECISION OFFICIAL MAP OF INDIA SILHOUETTE */}
        <path
          d="M 265 30 C 269.0 30.4, 271.0 33.6, 275 34 C 279.0 34.8, 281.0 41.2, 285 42 C 290.2 42.6, 292.8 47.4, 298 48 C 306.0 49.0, 310.0 57.0, 318 58 C 323.6 59.7, 326.4 73.3, 332 75 C 329.2 76.5, 327.8 88.5, 325 90 C 317.0 91.8, 313.0 106.2, 305 108 C 297.0 110.0, 293.0 126.0, 285 128 C 293.0 129.4, 297.0 140.6, 305 142 C 315.0 143.6, 320.0 156.4, 330 158 C 341.2 160.4, 346.8 179.6, 358 182 C 366.0 184.0, 370.0 200.0, 378 202 C 378.0 204.3, 378.0 222.7, 378 225 C 379.6 224.0, 380.4 216.0, 382 215 C 384.4 213.0, 385.6 197.0, 388 195 C 390.8 197.5, 392.2 217.5, 395 220 C 401.0 221.0, 404.0 229.0, 410 230 C 424.0 229.2, 431.0 222.8, 445 222 C 457.0 219.0, 463.0 195.0, 475 192 C 487.0 189.6, 493.0 170.4, 505 168 C 511.8 169.2, 515.2 178.8, 522 180 C 518.0 182.5, 516.0 202.5, 512 205 C 504.0 208.0, 500.0 232.0, 492 235 C 484.0 239.0, 480.0 271.0, 472 275 C 464.0 278.5, 460.0 306.5, 452 310 C 447.2 311.5, 444.8 323.5, 440 325 C 436.0 324.0, 434.0 316.0, 430 315 C 426.8 314.7, 425.2 312.3, 422 312 C 416.4 310.3, 413.6 296.7, 408 295 C 412.0 293.5, 414.0 281.5, 418 280 C 412.8 278.0, 410.2 262.0, 405 260 C 418.2 259.5, 424.8 255.5, 438 255 C 438.0 254.0, 438.0 246.0, 438 245 C 420.8 245.0, 412.2 245.0, 395 245 C 388.2 245.7, 384.8 251.3, 378 252 C 384.8 255.0, 388.2 279.0, 395 282 C 387.0 286.3, 383.0 320.7, 375 325 C 363.0 329.0, 357.0 361.0, 345 365 C 331.0 370.5, 324.0 414.5, 310 420 C 298.8 424.5, 293.2 460.5, 282 465 C 272.4 470.0, 267.6 510.0, 258 515 C 250.8 518.0, 247.2 542.0, 240 545 C 234.0 547.0, 231.0 563.0, 225 565 C 222.2 564.0, 220.8 556.0, 218 555 C 212.8 552.7, 210.2 534.3, 205 532 C 202.2 528.3, 200.8 498.7, 198 495 C 191.6 490.5, 188.4 454.5, 182 450 C 178.0 446.5, 176.0 418.5, 172 415 C 166.4 409.0, 163.6 361.0, 158 355 C 157.2 353.0, 156.8 337.0, 156 335 C 154.4 333.3, 153.6 319.7, 152 318 C 145.2 318.4, 141.8 321.6, 135 322 C 119.0 321.3, 111.0 315.7, 95 315 C 91.0 312.3, 89.0 290.7, 85 288 C 95.0 286.7, 100.0 276.3, 110 275 C 114.8 274.3, 117.2 268.7, 122 268 C 109.2 267.7, 102.8 265.3, 90 265 C 78.0 264.5, 72.0 260.5, 60 260 C 64.0 259.2, 66.0 252.8, 70 252 C 94.0 251.3, 106.0 245.7, 130 245 C 140.0 244.0, 145.0 236.0, 155 235 C 149.8 231.0, 147.2 199.0, 142 195 C 153.2 190.5, 158.8 154.5, 170 150 C 186.0 147.5, 194.0 127.5, 210 125 C 216.0 123.0, 219.0 107.0, 225 105 C 221.0 102.5, 219.0 82.5, 215 80 C 219.0 78.0, 221.0 62.0, 225 60 C 233.0 58.5, 237.0 46.5, 245 45 Z"
          fill="url(#indiaMapGrad)"
          stroke="#0098a6"
          strokeWidth="2.2"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#mapGlow)"
        />

        {/* ANDAMAN & NICOBAR ISLAND ARCHIPELAGO */}
        <g fill="#0098a6" opacity="0.75">
          <ellipse cx="515" cy="485" rx="2.5" ry="6" />
          <ellipse cx="518" cy="500" rx="2" ry="5" />
          <ellipse cx="522" cy="515" rx="2" ry="4" />
          <circle cx="525" cy="532" r="2.5" />
          <circle cx="532" cy="555" r="2" />
          <circle cx="538" cy="575" r="2.5" />
        </g>

        {/* LAKSHADWEEP ISLAND ARCHIPELAGO */}
        <g fill="#0098a6" opacity="0.65">
          <circle cx="152" cy="480" r="1.8" />
          <circle cx="156" cy="495" r="2" />
          <circle cx="160" cy="510" r="1.8" />
        </g>

        {/* DETAILED ACCURATE INTERNAL STATE BOUNDARY LINES */}
        <g stroke="#748D8C" strokeWidth="0.9" opacity="0.38" fill="none">
          {/* Ladakh / J&K / Himachal / Punjab / Haryana / Delhi / Uttarakhand */}
          <path d="M 285 42 C 265 60, 245 75, 245 100 M 245 100 C 225 105, 215 115, 210 125 M 245 100 C 260 110, 275 115, 285 128 M 210 125 C 220 130, 225 132, 230 135 M 230 135 C 240 132, 245 128, 255 128" />
          {/* Rajasthan / Gujarat / Madhya Pradesh */}
          <path d="M 210 125 C 190 145, 170 150, 170 150 M 170 150 C 160 180, 155 210, 155 235 M 155 235 C 195 230, 235 235, 285 240 M 122 268 C 145 265, 156 280, 154 330" />
          {/* Maharashtra / Goa / Karnataka / Telangana / Andhra Pradesh */}
          <path d="M 154 330 C 195 330, 235 325, 285 320 M 154 330 C 165 375, 172 400, 175 420 M 175 420 C 195 425, 210 435, 265 435 M 210 435 C 235 390, 260 365, 305 350" />
          {/* Kerala / Tamil Nadu */}
          <path d="M 175 420 C 185 450, 195 480, 198 505 M 198 505 C 205 535, 215 550, 225 565 M 198 505 C 220 500, 240 485, 265 435" />
          {/* UP / Bihar / Jharkhand / Chhattisgarh / Odisha / West Bengal */}
          <path d="M 230 135 C 260 155, 300 180, 345 195 M 285 240 C 310 240, 330 242, 358 245 M 345 195 C 360 220, 370 250, 395 282 M 285 240 L 310 320 M 310 320 L 375 325" />
          {/* North-East / Sikkim / Assam / Arunachal / Manipur / Tripura */}
          <path d="M 378 252 C 395 245, 410 230, 445 222 M 410 230 C 430 245, 450 250, 472 275 M 445 222 C 475 210, 495 195, 522 180 M 418 280 L 438 255" />
        </g>

        {/* SOUTHERN CORRIDOR ACTIVE REGION SHADING */}
        <path
          d="M 175 420 C 185 450, 195 480, 198 505 C 205 535, 215 550, 225 565 C 240 545, 258 515, 265 435 C 235 435, 210 435, 175 420 Z"
          fill="#7D9D3D"
          opacity="0.35"
        />

        {/* PAN INDIA HORIZON NORTHWARD SCALING ARROW */}
        <defs>
          <marker
            id="horizonArrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#748D8C" />
          </marker>
        </defs>

        <path
          d="M 230 350 L 230 200"
          stroke="#748D8C"
          strokeWidth="1.8"
          strokeDasharray="4 4"
          opacity="0.6"
          markerEnd="url(#horizonArrow)"
        />

        <text
          fill="#748D8C"
          fontFamily="Inter"
          fontSize="10"
          fontWeight="600"
          letterSpacing="0.08em"
          opacity="0.85"
          x="242"
          y="250"
        >
          PAN INDIA HORIZON
        </text>

        {/* ACTIVE CORRIDOR DEPLOYMENT NETWORK PIPELINES */}
        <path
          d="M 198 505 L 210 435 L 265 435 M 210 435 L 250 370"
          stroke="#0098a6"
          strokeWidth="2.4"
          strokeDasharray="5 4"
          opacity="0.9"
        >
          <animate attributeName="stroke-dashoffset" values="18;0" dur="2s" repeatCount="indefinite" />
        </path>

        {/* KOCHI HUB ACTIVE RECHARGE RIPPLE (Central Kerala Coast) */}
        <circle cx="198" cy="505" fill="none" r="18" stroke="#7D9D3D" strokeWidth="1.5">
          <animate
            attributeName="r"
            dur="3s"
            repeatCount="indefinite"
            values="6;40"
          />
          <animate
            attributeName="opacity"
            dur="3s"
            repeatCount="indefinite"
            values="0.9;0"
          />
        </circle>

        {/* DEPLOYMENT HUBS */}
        {/* 1. Kochi Hub (Kerala Central Coast) */}
        <circle cx="198" cy="505" fill="#1D293B" r="5.5" />
        <circle cx="198" cy="505" fill="none" r="8.5" stroke="#7D9D3D" strokeWidth="1.5" />
        <text
          fill="#1D293B"
          fontFamily="Inter"
          fontSize="11"
          fontWeight="700"
          x="112"
          y="509"
        >
          Kochi Hub
        </text>

        {/* 2. Bengaluru (Inland Karnataka) */}
        <circle cx="210" cy="435" fill="#1D293B" r="5" />
        <circle cx="210" cy="435" fill="none" r="7.5" stroke="#7D9D3D" strokeWidth="1.5" />
        <text
          fill="#1D293B"
          fontFamily="Inter"
          fontSize="11"
          fontWeight="600"
          x="222"
          y="439"
        >
          Bengaluru
        </text>

        {/* 3. Hyderabad (Telangana - Upcoming Node) */}
        <circle cx="250" cy="370" fill="#748D8C" r="4.5" opacity="0.8" />
        <text
          fill="#748D8C"
          fontFamily="Inter"
          fontSize="11"
          fontWeight="600"
          x="262"
          y="374"
        >
          Hyderabad
        </text>
      </svg>
    </div>
  );
}
