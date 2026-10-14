"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CITY_PRESETS = [
  { name: "Kochi", rainfall: 3000, state: "Kerala" },
  { name: "Mumbai", rainfall: 2400, state: "Maharashtra" },
  { name: "Chennai", rainfall: 1400, state: "Tamil Nadu" },
  { name: "Bengaluru", rainfall: 950, state: "Karnataka" },
  { name: "Hyderabad", rainfall: 830, state: "Telangana" },
  { name: "New Delhi", rainfall: 800, state: "Delhi NCR" },
];

export function HarvestingCalculator() {
  const areaInputId = useId();
  const rainfallInputId = useId();
  const [areaSqFt, setAreaSqFt] = useState<number>(2000);
  const [unit, setUnit] = useState<"sqft" | "m2">("sqft");
  const [selectedCity, setSelectedCity] = useState<string>("Bengaluru");
  const [customRainfall, setCustomRainfall] = useState<number>(950);
  const [isCustomRainfall, setIsCustomRainfall] = useState<boolean>(false);

  const RUNOFF_COEFFICIENT = 0.85;

  const areaInM2 = unit === "sqft" ? areaSqFt / 10.7639 : areaSqFt;

  const activeRainfall = isCustomRainfall
    ? customRainfall
    : CITY_PRESETS.find((c) => c.name === selectedCity)?.rainfall || 950;

  const annualLiters = Math.round(areaInM2 * activeRainfall * RUNOFF_COEFFICIENT);

  const handleCitySelect = (cityName: string) => {
    setSelectedCity(cityName);
    setIsCustomRainfall(false);
    const city = CITY_PRESETS.find((c) => c.name === cityName);
    if (city) setCustomRainfall(city.rainfall);
  };

  return (
    <section
      className="relative w-full bg-linear-to-br from-[#0a1829] via-[#0f243c] to-[#152e4b] py-16 sm:py-20 scroll-mt-28 sm:scroll-mt-32 text-light-aquifer-canvas overflow-hidden border-t border-[#22446d]/40"
      id="calculator"
    >
      {/* Subtle Rainfall Overlay */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none overflow-hidden select-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="calcRainPattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <line x1="20" y1="0" x2="10" y2="35" stroke="#748D8C" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="12 18" />
              <line x1="70" y1="40" x2="60" y2="75" stroke="#7D9D3D" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="10 20" />
              <line x1="110" y1="20" x2="100" y2="55" stroke="#86b5db" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="8 16" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#calcRainPattern)" className="animate-subtle-rain" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-8">
        {/* Header — compact */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#132742]/80 border border-[#22446d] w-fit">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-moss"></span>
              <span className="font-mono text-xs text-[#86b5db] font-medium tracking-wide">
                Interactive feasibility tool
              </span>
            </div>
            <h2
              className="font-headline-h2 text-[24px] sm:text-[30px] font-semibold text-white tracking-tight leading-tight"
              style={{ color: "#ffffff" }}
            >
              Rainwater harvesting yield calculator
            </h2>
          </div>
          <p className="font-mono text-xs text-[#bcd7e8]/70 leading-relaxed max-w-xs sm:text-right">
            Estimate annual water yield based on catchment footprint and localized rainfall data.
          </p>
        </div>

        {/* Two-column panel — both dark */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[6px] border border-[#22446d]/80 overflow-hidden">

          {/* Controls — Left */}
          <div className="lg:col-span-7 flex flex-col gap-6 bg-[#132742]/85 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#22446d]/60">

            {/* Step 1 */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label htmlFor={areaInputId} className="font-body-primary text-sm font-semibold text-white flex items-center gap-2">
                  <span className="size-5 rounded-[2px] bg-moss/20 text-moss flex items-center justify-center font-mono text-xs font-bold">1</span>
                  Rooftop / catchment footprint
                </label>
                <div className="inline-flex rounded-[6px] bg-[#0d1d33] p-0.5 border border-[#22446d] text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => { setUnit("sqft"); }}
                    className={`px-3 py-1 rounded-[4px] transition-all cursor-pointer ${unit === "sqft" ? "bg-moss text-deep-aquifer font-bold" : "text-light-aquifer-canvas/70 hover:text-white"}`}
                  >
                    sq. ft.
                  </button>
                  <button
                    type="button"
                    onClick={() => { setUnit("m2"); }}
                    className={`px-3 py-1 rounded-[4px] transition-all cursor-pointer ${unit === "m2" ? "bg-moss text-deep-aquifer font-bold" : "text-light-aquifer-canvas/70 hover:text-white"}`}
                  >
                    m²
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
                <input
                  id={areaInputId}
                  type="number"
                  min={10}
                  max={500000}
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Math.max(0, Number(e.target.value)))}
                  className="w-32 bg-[#0d1d33] border border-[#22446d] rounded-[6px] px-3 py-2 text-white font-mono text-base font-bold focus:outline-none focus:border-[#86b5db]"
                />
                <span className="font-mono text-xs text-[#86b5db]">
                  ≈ {unit === "sqft"
                    ? `${areaInM2.toFixed(1)} m² catchment area`
                    : `${Math.round(areaSqFt * 10.7639).toLocaleString()} sq. ft. catchment area`
                  }
                </span>
              </div>

              <input
                type="range"
                min={unit === "sqft" ? 200 : 20}
                max={unit === "sqft" ? 50000 : 5000}
                step={unit === "sqft" ? 100 : 10}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full accent-moss cursor-pointer"
              />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col gap-3">
              <label htmlFor={rainfallInputId} className="font-body-primary text-sm font-semibold text-white flex items-center gap-2">
                <span className="size-5 rounded-[2px] bg-moss/20 text-moss flex items-center justify-center font-mono text-xs font-bold">2</span>
                Average annual rainfall
              </label>

              <div className="grid grid-cols-3 gap-2">
                {CITY_PRESETS.map((city) => (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => handleCitySelect(city.name)}
                    className={`flex flex-col items-start px-2.5 py-2 rounded-[6px] border text-left transition-all cursor-pointer ${
                      !isCustomRainfall && selectedCity === city.name
                        ? "bg-[#1c3c63] border-[#396fa8] text-white"
                        : "bg-[#0d1d33]/80 border-[#1e3c61]/80 text-light-aquifer-canvas/80 hover:bg-[#162f50] hover:text-white"
                    }`}
                  >
                    <span className="text-xs font-bold">{city.name}</span>
                    <span className="text-[10px] opacity-80 font-mono">{city.rainfall} mm/yr</span>
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs text-light-aquifer-canvas/70">
                  <span>Custom rainfall intensity</span>
                  <span className="font-mono font-bold text-moss">{activeRainfall} mm</span>
                </div>
                <input
                  id={rainfallInputId}
                  type="range"
                  min={300}
                  max={5000}
                  step={50}
                  value={activeRainfall}
                  onChange={(e) => { setCustomRainfall(Number(e.target.value)); setIsCustomRainfall(true); }}
                  className="w-full accent-moss cursor-pointer"
                />
              </div>
            </div>

            {/* Coefficient Note */}
            <div className="border-t border-[#22446d] pt-3 flex items-center justify-between font-mono text-xs text-light-aquifer-canvas/60">
              <span>Runoff efficiency coefficient</span>
              <span className="font-semibold text-moss">0.85 (85% net retention)</span>
            </div>
          </div>

          {/* Result + CTA — Right */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0f1f35] p-6 sm:p-8">
            <div className="flex flex-col gap-6">
              {/* Live badge + label */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#86b5db]/80 font-medium">Estimated annual yield</span>
                <span className="inline-flex items-center gap-1.5 rounded-[4px] border border-[#22446d] bg-[#0d1d33] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[#86b5db]">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-moss animate-pulse" />
                  Calculated live
                </span>
              </div>

              {/* Big number */}
              <div>
                <motion.div
                  key={annualLiters}
                  initial={{ scale: 0.95, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-5xl sm:text-6xl font-bold tracking-tight text-white leading-none"
                >
                  {(annualLiters / 1000).toFixed(1)}
                  <span className="text-moss text-2xl font-bold ml-2">kL</span>
                </motion.div>
                <p className="mt-2 font-mono text-xs text-[#86b5db]/60">
                  ≈ {annualLiters.toLocaleString()} Liters captured per year
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#22446d]" />

              {/* Context note */}
              <p className="font-body-primary text-xs text-[#86b5db]/60 leading-relaxed">
                Based on standard impervious surface runoff coefficient (0.85). Actual yield may vary with roof material, slope, and local weather patterns. Contact us for a detailed site assessment.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href={`/contact?area=${areaSqFt}${unit}&rainfall=${activeRainfall}&yield=${annualLiters}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-moss hover:bg-[#6ca832] text-deep-aquifer font-button-text font-bold text-sm px-5 py-3.5 rounded-[6px] transition-all duration-300 group"
              >
                <span>Request Feasibility Assessment</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
