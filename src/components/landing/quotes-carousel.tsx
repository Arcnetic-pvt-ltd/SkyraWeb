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
    role: "11th President of India",
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % QUOTES.length);
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-forest-slate text-light-aquifer-canvas py-20 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 relative overflow-hidden min-h-[543.5px] lg:min-h-[543.5px] flex items-center">
      {/* Background Images for Quotes (Synchronized with text transition) */}
      {QUOTES.map((item, idx) => {
        if (!item.image) return null;
        const isActive = idx === activeIndex;
        const isLeft = item.position === "left";

        return (
          <div
            key={`img-${idx}`}
            className={`absolute bottom-0 ${
              isLeft ? "left-0 justify-start" : "right-0 justify-end"
            } h-full max-h-[95%] pointer-events-none transition-all duration-700 ease-in-out z-0 hidden md:flex items-end ${
              isActive
                ? "opacity-100 translate-x-0"
                : isLeft
                ? "opacity-0 -translate-x-8"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative h-full flex items-end">
              {/* Soft Gradient Mask based on image position */}
              {isLeft ? (
                <div className="absolute inset-y-0 right-0 w-32 sm:w-56 bg-gradient-to-l from-forest-slate via-forest-slate/60 to-transparent z-10 pointer-events-none"></div>
              ) : (
                <div className="absolute inset-y-0 left-0 w-32 sm:w-56 bg-gradient-to-r from-forest-slate via-forest-slate/60 to-transparent z-10 pointer-events-none"></div>
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
              className={`lg:col-span-8 xl:col-span-7 ${
                isLeft ? "lg:col-start-5 xl:col-start-6" : "lg:col-start-1"
              } flex flex-col items-start text-left gap-6 transition-all duration-700 ease-in-out ${
                isActive
                  ? "opacity-100 relative z-10 translate-y-0 pointer-events-auto"
                  : "opacity-0 absolute inset-0 pointer-events-none translate-y-2"
              }`}
            >
              <div className="inline-flex items-center gap-2.5 text-moss/90">
                <span className="material-symbols-outlined text-[28px] text-tertiary-fixed">
                  water_drop
                </span>
                <span className="font-technical-label text-[12px] uppercase tracking-wider text-white/70">
                  National Vision
                </span>
              </div>

              <blockquote className="font-headline-h2 text-[26px] sm:text-[34px] lg:text-[38px] text-white font-normal leading-snug tracking-tight">
                {item.quote}
              </blockquote>

              <cite className="font-body-large text-body-large text-light-aquifer-canvas/90 not-italic block">
                <span className="font-semibold text-white">
                  — {item.author}
                </span>
                , <span className="text-white/70">{item.role}</span>
              </cite>

              {/* Carousel Dot Indicators */}
              <div className="flex items-center gap-3 pt-4">
                {QUOTES.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    aria-label={`Quote ${dotIdx + 1}`}
                    onClick={() => setActiveIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      dotIdx === activeIndex
                        ? "w-8 bg-white"
                        : "w-2.5 bg-white/40 hover:bg-white/70"
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
