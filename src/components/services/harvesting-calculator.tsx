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
  const [areaSqFt, setAreaSqFt] = useState<number>(2000); // default 2000 sq ft (~185.8 m²)
  const [unit, setUnit] = useState<"sqft" | "m2">("sqft");
  const [selectedCity, setSelectedCity] = useState<string>("Bengaluru");
  const [customRainfall, setCustomRainfall] = useState<number>(950);
  const [isCustomRainfall, setIsCustomRainfall] = useState<boolean>(false);

  const RUNOFF_COEFFICIENT = 0.85; // Standard high-efficiency impervious surface coefficient

  // Convert area to m²
  const areaInM2 = unit === "sqft" ? areaSqFt / 10.7639 : areaSqFt;

  // Active rainfall in mm
  const activeRainfall = isCustomRainfall
    ? customRainfall
    : CITY_PRESETS.find((c) => c.name === selectedCity)?.rainfall || 950;

  // Formula: Water harvesting potential = catchment area in m2 * avg rainfall in mm * runoff coefficient (0.85)
  const annualLiters = Math.round(areaInM2 * activeRainfall * RUNOFF_COEFFICIENT);
  const tankersSaved = Math.round(annualLiters / 12000); // Standard 12,000L commercial tanker
  const estimatedSavingsInRupees = Math.round(annualLiters * 1.15); // ~₹1.15 / Liter average tanker cost

  const handleCitySelect = (cityName: string) => {
    setSelectedCity(cityName);
    setIsCustomRainfall(false);
    const city = CITY_PRESETS.find((c) => c.name === cityName);
    if (city) {
      setCustomRainfall(city.rainfall);
    }
  };

  return (
    <section className="relative w-full bg-deep-aquifer py-20 sm:py-28 px-6 sm:px-10 lg:px-16 text-light-aquifer-canvas overflow-hidden" id="calculator">
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col gap-12 sm:gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="inline-flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-[2px] bg-moss"></span>
            <span className="font-technical-label text-body-sm text-moss font-semibold uppercase tracking-wider">
              Interactive feasibility tool
            </span>
          </div>
          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white tracking-tight leading-tight">
            Rainwater harvesting yield calculator
          </h2>
          <p className="font-body-large text-body-large text-light-aquifer-canvas/80 leading-relaxed">
            Estimate your parcel’s annual water yield based on catchment footprint, localized rainfall data, and high-efficiency runoff coefficients.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Controls Column (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8 rounded-[4px] bg-white/5 p-6 sm:p-10 border border-white/10">
            {/* Step 1: Area Input */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <label htmlFor={areaInputId} className="font-body-sm text-sm font-semibold text-white flex items-center gap-2">
                  <span className="size-6 rounded-[4px] bg-moss/20 text-moss flex items-center justify-center text-xs font-bold">1</span>
                  Rooftop / catchment footprint
                </label>
                <div className="inline-flex rounded-[4px] bg-white/10 p-1 border border-white/10 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => {
                      if (unit === "m2") {
                        setAreaSqFt(Math.round(areaSqFt * 10.7639));
                        setUnit("sqft");
                      }
                    }}
                    className={`px-3 py-1 rounded-[4px] transition-colors ${
                      unit === "sqft" ? "bg-moss text-deep-aquifer font-bold" : "text-light-aquifer-canvas/70 hover:text-white"
                    }`}
                  >
                    sq. ft.
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (unit === "sqft") {
                        setAreaSqFt(Math.round(areaSqFt / 10.7639));
                        setUnit("m2");
                      }
                    }}
                    className={`px-3 py-1 rounded-[4px] transition-colors ${
                      unit === "m2" ? "bg-moss text-deep-aquifer font-bold" : "text-light-aquifer-canvas/70 hover:text-white"
                    }`}
                  >
                    m²
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <input
                  id={areaInputId}
                  type="number"
                  min={10}
                  max={500000}
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Math.max(0, Number(e.target.value)))}
                  className="w-36 bg-white/10 border border-white/20 rounded-[6px] px-4 py-2.5 text-white font-metric-mono-lg text-lg font-bold focus:outline-none focus:border-moss"
                />
                <span className="text-sm text-light-aquifer-canvas/60">
                  ≈ {areaInM2.toFixed(1)} m² catchment area
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

            {/* Step 2: Location / Rainfall Preset */}
            <div className="flex flex-col gap-4">
              <label htmlFor={rainfallInputId} className="font-body-sm text-sm font-semibold text-white flex items-center gap-2">
                <span className="size-6 rounded-[4px] bg-moss/20 text-moss flex items-center justify-center text-xs font-bold">2</span>
                Average annual rainfall
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {CITY_PRESETS.map((city) => (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => handleCitySelect(city.name)}
                    className={`flex flex-col items-start p-3 rounded-[4px] border text-left transition-colors ${
                      !isCustomRainfall && selectedCity === city.name
                        ? "bg-moss/20 border-moss text-white shadow-xs"
                        : "bg-white/5 border-white/10 text-light-aquifer-canvas/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="text-xs font-bold">{city.name}</span>
                    <span className="text-[11px] opacity-75 font-mono">{city.rainfall} mm/yr</span>
                  </button>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-2">
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
                  onChange={(e) => {
                    setCustomRainfall(Number(e.target.value));
                    setIsCustomRainfall(true);
                  }}
                  className="w-full accent-moss cursor-pointer"
                />
              </div>
            </div>

            {/* Coefficient Note */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-light-aquifer-canvas/60">
              <span>Runoff efficiency coefficient</span>
              <span className="font-mono font-semibold text-moss">0.85 (85% net retention)</span>
            </div>
          </div>

          {/* Results Output Column (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[4px] bg-white text-deep-aquifer p-6 sm:p-10 border border-white/20 relative overflow-hidden shadow-xs">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-aquifer font-semibold">
                  ESTIMATED ANNUAL YIELD
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-[4px] border border-moss/30 bg-moss/10 px-2.5 py-0.5 text-xs font-semibold text-moss">
                  Calculated live
                </span>
              </div>

              {/* Main Liters Metric */}
              <div>
                <motion.div
                  key={annualLiters}
                  initial={{ scale: 0.98, opacity: 0.9 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="font-metric-mono-lg text-5xl sm:text-6xl font-extrabold tracking-tight text-deep-aquifer"
                >
                  {(annualLiters / 1000).toFixed(1)} <span className="text-moss text-3xl font-bold">kL</span>
                </motion.div>
                <p className="mt-1 font-body-sm text-sm text-deep-aquifer/75 font-medium">
                  ≈ {annualLiters.toLocaleString()} liters of pure rainwater captured per year.
                </p>
              </div>

              {/* Secondary Impact Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-muted-aquifer/15">
                <div className="flex flex-col gap-1 p-3.5 rounded-[4px] bg-[#F1F7F9] border border-muted-aquifer/15">
                  <span className="font-body-sm text-xs font-bold text-moss">Skyra Rainsink units</span>
                  <span className="font-metric-mono-lg text-2xl font-bold text-deep-aquifer">
                    {Math.max(1, Math.ceil(annualLiters / 30000))} <span className="text-xs text-moss">unit{Math.max(1, Math.ceil(annualLiters / 30000)) === 1 ? "" : "s"}</span>
                  </span>
                  <span className="text-[11px] text-deep-aquifer/60">Percolation capacity</span>
                </div>

                <div className="flex flex-col gap-1 p-3.5 rounded-[4px] bg-[#F1F7F9] border border-muted-aquifer/15">
                  <span className="font-body-sm text-xs font-medium text-slate-700">Estimated value</span>
                  <span className="font-metric-mono-lg text-2xl font-bold text-deep-aquifer">
                    ₹{(estimatedSavingsInRupees / 1000).toFixed(1)} <span className="text-xs text-moss">k/yr</span>
                  </span>
                  <span className="text-[11px] text-deep-aquifer/60">Annual water cost offset</span>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="pt-8 relative z-10">
              <Link
                href={`/contact?area=${areaSqFt}${unit}&rainfall=${activeRainfall}&yield=${annualLiters}`}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-medium text-[15px] px-6 py-3.5 rounded-[6px] transition-colors shadow-xs group"
              >
                <span>Book a site survey</span>
                <span className="material-symbols-outlined text-[18px]">
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
