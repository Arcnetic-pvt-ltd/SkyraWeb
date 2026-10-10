"use client";

import { useEffect, useState } from "react";

interface QuoteItem {
  quote: string;
  author: string;
  role: string;
  image?: string;
  position?: "left" | "right";
}

const QUOTES: QuoteItem[] = [
  {
    quote:
      "“We must adopt the mantra of ‘Reduce, Reuse, Recharge, and Recycle’ to secure the nation’s water future.”",
    author: "Shri Narendra Modi",
    role: "Prime Minister of India",
    image: "/images/assets/nmod_cropped.png",
    position: "right",
  },
  {
    quote:
      "“Water harvesting and water recycling should become mandatory for all the states.”",
    author: "Dr. A. P. J. Abdul Kalam",
    role: "Former President of India",
    image: "/images/assets/kalam_no_bg.png",
    position: "left",
  },
];

export function QuotesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Preload all carousel images into browser memory to eliminate image load lag
  useEffect(() => {
    QUOTES.forEach((item) => {
      if (item.image) {
        const img = new Image();
        img.src = item.image;
      }
    });
  }, []);

  // User controls active quote via dot indicators below

  return (
    <section className="w-full bg-linear-to-br from-[#0c1a2d] via-[#10243d] to-[#173050] text-light-aquifer-canvas py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[543.5px] flex items-center border-y border-[#22446d]/40">
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

      {/* Background Images for Quotes (Synchronized with text transition) */}
      {QUOTES.map((item, idx) => {
        if (!item.image) return null;
        const isActive = idx === activeIndex;
        const isLeft = item.position === "left";

        return (
          <div
            key={`img-${idx}`}
            className={`absolute bottom-0 ${isLeft ? "left-0 justify-start" : "right-0 justify-end"
              } h-full max-h-[95%] pointer-events-none transition-all duration-700 ease-in-out z-0 hidden md:flex items-end ${isActive
                ? "opacity-100 translate-x-0"
                : isLeft
                  ? "opacity-0 -translate-x-8"
                  : "opacity-0 translate-x-8"
              }`}
          >
            <div className="relative h-full flex items-end">
              {/* Soft Gradient Mask based on image position */}
              {isLeft ? (
                <div className="absolute inset-y-0 right-0 w-32 sm:w-56 bg-gradient-to-l from-[#10243d] via-[#10243d]/70 to-transparent z-10 pointer-events-none"></div>
              ) : (
                <div className="absolute inset-y-0 left-0 w-32 sm:w-56 bg-gradient-to-r from-[#10243d] via-[#10243d]/70 to-transparent z-10 pointer-events-none"></div>
              )}

              <img
                src={item.image}
                alt={item.author}
                className="h-full w-auto object-contain object-bottom block max-w-none"
              />
            </div>
          </div>
        );
      })}

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[280px]">
        {QUOTES.map((item, idx) => {
          const isActive = idx === activeIndex;
          const isLeft = item.position === "left";

          return (
            <div
              key={`text-${idx}`}
              className={`lg:col-span-8 xl:col-span-7 ${isLeft ? "lg:col-start-5 xl:col-start-6" : "lg:col-start-1"
                } flex flex-col items-start text-left gap-6 transition-all duration-700 ease-in-out ${isActive
                  ? "opacity-100 relative z-10 translate-y-0 pointer-events-auto"
                  : "opacity-0 absolute inset-0 pointer-events-none translate-y-2"
                }`}
            >
              <div className="inline-flex items-center gap-2.5 text-moss/90">
                <span className="material-symbols-outlined text-[28px] text-moss">
                  water_drop
                </span>
                <span className="font-mono text-xs text-[#86b5db] font-medium">
                  National vision
                </span>
              </div>

              <blockquote className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white font-normal leading-snug tracking-tight">
                {item.quote}
              </blockquote>

              <cite className="font-body-primary text-base text-light-aquifer-canvas/90 not-italic block font-normal">
                <span className="font-semibold text-white">
                  — {item.author}
                </span>
                , <span className="text-[#86b5db]/90">{item.role}</span>
              </cite>

              {/* Carousel Dot Indicators */}
              <div className="flex items-center gap-3 pt-4">
                {QUOTES.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    aria-label={`Quote ${dotIdx + 1}`}
                    onClick={() => setActiveIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${dotIdx === activeIndex
                        ? "w-8 bg-[#86b5db]"
                        : "w-2.5 bg-white/30 hover:bg-white/60"
                      }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
