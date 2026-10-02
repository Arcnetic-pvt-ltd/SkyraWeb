"use client";

import { useState, useId } from "react";
import Link from "next/link";

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
  const estimatedSavingsInRupees = Math.round(annualLiters * 1.15);

  const handleCitySelect = (cityName: string) => {
    setSelectedCity(cityName);
    setIsCustomRainfall(false);
    const city = CITY_PRESETS.find((c) => c.name === cityName);
    if (city) {
      setCustomRainfall(city.rainfall);
    }
  };

  return (
    <section className="relative w-full bg-light-aquifer-canvas py-16 sm:py-24 px-6 lg:px-8 text-deep-aquifer border-t border-muted-aquifer/15" id="calculator">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-moss"></span>
            <span className="font-technical-label text-[12px] text-forest-slate uppercase tracking-wider font-semibold">
              CALCULATOR
            </span>
          </div>
          <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight leading-tight">
            Rainwater harvesting yield calculator
          </h2>
          <p className="font-body-large text-body-large text-deep-aquifer/80 leading-relaxed">
            Estimate your annual rainwater yield based on roof area, rainfall, and retention coefficient (0.85).
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 rounded-[4px] border border-muted-aquifer/20 bg-white p-6 sm:p-8 shadow-xs">
            {/* Step 1: Area Input */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <label htmlFor={areaInputId} className="font-body-primary text-sm font-semibold text-deep-aquifer flex items-center gap-2">
                  <span className="size-5 rounded-[4px] bg-moss/15 text-forest-slate flex items-center justify-center text-xs font-bold font-mono">1</span>
                  Roof / catchment footprint
                </label>
                <div className="inline-flex rounded-[4px] bg-light-aquifer-canvas p-1 border border-muted-aquifer/20 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => {
                      if (unit === "m2") {
                        setAreaSqFt(Math.round(areaSqFt * 10.7639));
                        setUnit("sqft");
                      }
                    }}
                    className={`px-2.5 py-1 rounded-[4px] transition-colors cursor-pointer ${
                      unit === "sqft" ? "bg-deep-aquifer text-white font-semibold" : "text-deep-aquifer/70 hover:text-deep-aquifer"
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
                    className={`px-2.5 py-1 rounded-[4px] transition-colors cursor-pointer ${
                      unit === "m2" ? "bg-deep-aquifer text-white font-semibold" : "text-deep-aquifer/70 hover:text-deep-aquifer"
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
                  className="w-36 bg-light-aquifer-canvas border border-muted-aquifer/30 rounded-[6px] px-3.5 py-2 text-deep-aquifer font-technical-label text-base font-bold focus:outline-none focus:border-deep-aquifer"
                />
                <span className="text-xs font-mono text-deep-aquifer/70">
                  ≈ {areaInM2.toFixed(1)} m² catchment
                </span>
              </div>

              <input
                type="range"
                min={unit === "sqft" ? 200 : 20}
                max={unit === "sqft" ? 50000 : 5000}
                step={unit === "sqft" ? 100 : 10}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full accent-deep-aquifer cursor-pointer"
              />
            </div>

            {/* Step 2: Location / Rainfall Preset */}
            <div className="flex flex-col gap-4 pt-4 border-t border-muted-aquifer/15">
              <label htmlFor={rainfallInputId} className="font-body-primary text-sm font-semibold text-deep-aquifer flex items-center gap-2">
                <span className="size-5 rounded-[4px] bg-moss/15 text-forest-slate flex items-center justify-center text-xs font-bold font-mono">2</span>
                Average annual rainfall
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CITY_PRESETS.map((city) => (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => handleCitySelect(city.name)}
                    className={`flex flex-col items-start p-2.5 rounded-[4px] border text-left transition-colors cursor-pointer ${
                      !isCustomRainfall && selectedCity === city.name
                        ? "bg-deep-aquifer text-white border-deep-aquifer"
                        : "bg-light-aquifer-canvas border-muted-aquifer/20 text-deep-aquifer/80 hover:bg-slate-100"
                    }`}
                  >
                    <span className="text-xs font-bold">{city.name}</span>
                    <span className="text-[11px] opacity-80 font-mono">{city.rainfall} mm/yr</span>
                  </button>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs text-deep-aquifer/70 font-mono">
                  <span>Custom rainfall intensity</span>
                  <span className="font-bold text-moss">{activeRainfall} mm</span>
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
                  className="w-full accent-deep-aquifer cursor-pointer"
                />
              </div>
            </div>

            {/* Coefficient Note */}
            <div className="pt-3 border-t border-muted-aquifer/15 flex items-center justify-between text-xs text-deep-aquifer/70 font-mono">
              <span>Runoff coefficient</span>
              <span className="font-semibold text-forest-slate">0.85 (85% net retention)</span>
            </div>
          </div>

          {/* Results Output Column (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[4px] bg-white text-deep-aquifer p-6 sm:p-8 border border-muted-aquifer/20 shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-muted-aquifer/15 pb-3">
                <span className="font-technical-label text-xs uppercase tracking-wider text-forest-slate font-semibold">
                  ESTIMATED YIELD
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-[4px] border border-moss/30 bg-moss/10 px-2.5 py-0.5 text-xs font-semibold text-forest-slate">
                  IS 15797:2008 formula
                </span>
              </div>

              {/* Main Liters Metric */}
              <div>
                <div className="font-technical-label text-4xl sm:text-5xl font-extrabold tracking-tight text-deep-aquifer">
                  {(annualLiters / 1000).toFixed(1)} <span className="text-moss text-2xl font-bold">kL</span>
                </div>
                <p className="mt-2 font-body-primary text-sm text-deep-aquifer/75 leading-relaxed">
                  ≈ {annualLiters.toLocaleString()} liters of rainwater captured per year.
                </p>
              </div>

              {/* Secondary Impact Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-muted-aquifer/15">
                <div className="flex flex-col gap-1 p-3 rounded-[4px] bg-light-aquifer-canvas border border-muted-aquifer/15">
                  <span className="font-body-sm text-[11px] font-bold text-forest-slate uppercase">Rainsink units</span>
                  <span className="font-technical-label text-xl font-bold text-deep-aquifer">
                    {Math.max(1, Math.ceil(annualLiters / 30000))} <span className="text-xs text-moss">unit{Math.max(1, Math.ceil(annualLiters / 30000)) === 1 ? "" : "s"}</span>
                  </span>
                  <span className="text-[10px] text-deep-aquifer/60">Percolation capacity</span>
                </div>

                <div className="flex flex-col gap-1 p-3 rounded-[4px] bg-light-aquifer-canvas border border-muted-aquifer/15">
                  <span className="font-body-sm text-[11px] font-bold text-forest-slate uppercase">Estimated offset</span>
                  <span className="font-technical-label text-xl font-bold text-deep-aquifer">
                    ₹{(estimatedSavingsInRupees / 1000).toFixed(1)} <span className="text-xs text-moss">k/yr</span>
                  </span>
                  <span className="text-[10px] text-deep-aquifer/60">Water tanker cost offset</span>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="pt-6 border-t border-muted-aquifer/15">
              <Link
                href={`/contact?area=${areaSqFt}${unit}&rainfall=${activeRainfall}&yield=${annualLiters}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-deep-aquifer hover:bg-forest-slate text-white font-medium text-[15px] px-6 py-3.5 min-h-[44px] rounded-[6px] transition-colors shadow-xs"
              >
                Book a site survey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
