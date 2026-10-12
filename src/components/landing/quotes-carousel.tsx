"use client";

import { useEffect, useState } from "react";

interface QuoteItem {
  quote: string;
  author: string;
  role: string;
}

const QUOTES: QuoteItem[] = [
  {
    quote:
      "“We must adopt the mantra of ‘Reduce, Reuse, Recharge, and Recycle’ to secure the nation’s water future.”",
    author: "Shri Narendra Modi",
    role: "Prime Minister of India",
  },
  {
    quote:
      "“Water harvesting and water recycling should become mandatory for all the states.”",
    author: "Dr. A. P. J. Abdul Kalam",
    role: "Former President of India",
  },
];

export function QuotesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic rotation between quotes (every 7 seconds) with hover-pause
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % QUOTES.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  return (
    <section
      className="w-full bg-linear-to-br from-[#0c1a2d] via-[#10243d] to-[#173050] text-light-aquifer-canvas py-16 sm:py-24 relative overflow-hidden flex items-center border-y border-[#22446d]/40"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Rainfall Overlay Element */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="quotesRainPattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <line x1="20" y1="0" x2="10" y2="35" stroke="#748D8C" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="12 18" />
              <line x1="70" y1="40" x2="60" y2="75" stroke="#7D9D3D" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="10 20" />
              <line x1="110" y1="20" x2="100" y2="55" stroke="#86b5db" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="8 16" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#quotesRainPattern)" className="animate-subtle-rain" />
        </svg>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start gap-6">
        <div className="inline-flex items-center gap-2.5 text-moss/90">
          <span className="material-symbols-outlined text-[28px] text-moss">
            water_drop
          </span>
          <span className="font-technical-label text-xs uppercase tracking-wider text-[#86b5db] font-semibold">
            National vision
          </span>
        </div>

        <div className="w-full grid grid-cols-1 grid-rows-1 items-start min-h-[140px] sm:min-h-[120px]">
          {QUOTES.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={`text-${idx}`}
                className={`col-start-1 row-start-1 w-full flex flex-col items-start text-left gap-4 transition-opacity duration-500 ease-in-out ${
                  isActive
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <blockquote className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white font-normal leading-snug tracking-tight min-h-[4.5rem] sm:min-h-[5.5rem]">
                  {item.quote}
                </blockquote>

                <cite className="font-body-large text-body-large text-light-aquifer-canvas/90 not-italic block font-normal">
                  <span className="font-semibold text-white">
                    — {item.author}
                  </span>
                  , <span className="text-[#86b5db]/90">{item.role}</span>
                </cite>
              </div>
            );
          })}
        </div>

        {/* Carousel Dot Indicators */}
        <div className="flex items-center gap-1.5 pt-1">
          {QUOTES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              aria-label={`Quote ${dotIdx + 1}`}
              onClick={() => setActiveIndex(dotIdx)}
              className="py-2.5 px-1 cursor-pointer focus:outline-none"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  dotIdx === activeIndex
                    ? "w-8 bg-[#86b5db]"
                    : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
