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
      {/* Ambient background atmosphere */}
      <div aria-hidden="true" className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full bg-forest-slate/40 blur-[140px] pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-32 -right-20 w-[600px] h-[600px] rounded-full bg-moss/20 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-12 sm:gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="inline-flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-full bg-moss animate-pulse"></span>
            <span className="font-technical-label text-body-sm text-moss font-semibold uppercase tracking-wider">
              INTERACTIVE FEASIBILITY TOOL
            </span>
          </div>
          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white tracking-tight leading-tight">
            Rainwater Harvesting Yield Calculator
          </h2>
          <p className="font-body-large text-body-large text-light-aquifer-canvas/80 leading-relaxed">
            Estimate your parcel’s annual water yield based on catchment footprint, localized rainfall data, and high-efficiency runoff coefficients.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Controls Column (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8 rounded-3xl bg-surface-container-low/10 p-6 sm:p-10 border border-white/10 backdrop-blur-md">
            {/* Step 1: Area Input */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <label htmlFor={areaInputId} className="font-body-sm text-sm font-semibold text-white flex items-center gap-2">
                  <span className="size-6 rounded-full bg-moss/20 text-moss flex items-center justify-center text-xs font-bold">1</span>
                  Rooftop / Catchment Footprint
                </label>
                <div className="inline-flex rounded-full bg-white/10 p-1 border border-white/10 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => {
                      if (unit === "m2") {
                        setAreaSqFt(Math.round(areaSqFt * 10.7639));
                        setUnit("sqft");
                      }
                    }}
                    className={`px-3 py-1 rounded-full transition-all ${
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
                    className={`px-3 py-1 rounded-full transition-all ${
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
                  className="w-36 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white font-metric-mono-lg text-lg font-bold focus:outline-none focus:border-moss"
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
                <span className="size-6 rounded-full bg-moss/20 text-moss flex items-center justify-center text-xs font-bold">2</span>
                Average Annual Rainfall
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {CITY_PRESETS.map((city) => (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => handleCitySelect(city.name)}
                    className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                      !isCustomRainfall && selectedCity === city.name
                        ? "bg-moss/20 border-moss text-white shadow-sm"
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
                  <span>Custom Rainfall Intensity</span>
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
              <span>Runoff Efficiency Coefficient</span>
              <span className="font-mono font-semibold text-moss">0.85 (85% Net Retention)</span>
            </div>
          </div>

          {/* Results Output Column (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-white text-deep-aquifer p-6 sm:p-10 shadow-2xl border border-white/20 relative overflow-hidden">
            {/* Watermark accent */}
            <div className="absolute -right-10 -bottom-10 size-48 rounded-full bg-moss/10 blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                  ESTIMATED ANNUAL YIELD
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-moss/30 bg-moss/10 px-2.5 py-0.5 text-xs font-semibold text-moss">
                  <span aria-hidden="true" className="size-1.5 animate-pulse rounded-full bg-moss" />
                  Calculated Live
                </span>
              </div>

              {/* Main Liters Metric */}
              <div>
                <motion.div
                  key={annualLiters}
                  initial={{ scale: 0.95, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="font-metric-mono-lg text-5xl sm:text-6xl font-extrabold tracking-tight text-deep-aquifer"
                >
                  {(annualLiters / 1000).toFixed(1)} <span className="text-moss text-3xl font-bold">kL</span>
                </motion.div>
                <p className="mt-1 font-body-sm text-sm text-deep-aquifer/75 font-medium">
                  ≈ {annualLiters.toLocaleString()} Liters of pure rainwater captured per year.
                </p>
              </div>

              {/* Secondary Impact Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-muted-aquifer/15">
                <div className="flex flex-col gap-1 p-3.5 rounded-2xl bg-light-aquifer-canvas border border-muted-aquifer/15">
                  <span className="font-body-sm text-xs text-secondary font-medium">Tankers Replaced</span>
                  <span className="font-metric-mono-lg text-2xl font-bold text-deep-aquifer">
                    {tankersSaved} <span className="text-xs text-moss">Trip{tankersSaved === 1 ? "" : "s"}</span>
                  </span>
                  <span className="text-[11px] text-deep-aquifer/60">12,000L standard tanker</span>
                </div>

                <div className="flex flex-col gap-1 p-3.5 rounded-2xl bg-light-aquifer-canvas border border-muted-aquifer/15">
                  <span className="font-body-sm text-xs text-secondary font-medium">Estimated Value</span>
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
                className="w-full inline-flex items-center justify-center gap-2.5 bg-deep-aquifer hover:bg-forest-slate text-light-aquifer-canvas font-button-text text-button-text px-6 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <span>Request Feasibility Assessment</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
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
