"use client";

import { useEffect, useState } from "react";

const QUOTES = [
  {
    quote:
      "“We must adopt the mantra of ‘Reduce, Reuse, Recharge, and Recycle’ to secure the nation’s water future.”",
    author: "Shri Narendra Modi",
    role: "Prime Minister of India",
    image: "/images/assets/nmod_cropped.png",
  },
  {
    quote:
      "“Water harvesting and water recycling should become mandatory for all the states.”",
    author: "Dr. A. P. J. Abdul Kalam",
    role: "11th President of India",
  },
];

export function QuotesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % QUOTES.length);
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-forest-slate text-light-aquifer-canvas py-20 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-16 relative overflow-hidden min-h-[460px] flex items-center">
      {/* Background Full-size Image Flush on Right Bottom Corner */}
      {QUOTES.map((item, idx) => {
        if (!item.image) return null;
        const isActive = idx === activeIndex;
        return (
          <div
            key={`img-${idx}`}
            className={`absolute bottom-0 right-0 h-full max-h-[90%] pointer-events-none transition-all duration-1000 ease-in-out z-0 hidden md:flex items-end justify-end ${isActive
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
              }`}
          >
            <div className="relative h-full flex items-end justify-end">
              {/* Soft left fade to seamlessly blend background */}
              <div className="absolute inset-y-0 left-0 w-32 sm:w-56 bg-gradient-to-r from-forest-slate via-forest-slate/60 to-transparent z-10 pointer-events-none"></div>
              {/* Soft top fade for flawless upper transition */}
              <div className="absolute inset-x-0 top-0 h-16 from-forest-slate to-transparent z-10 pointer-events-none"></div>

              <img
                src={item.image}
                alt={item.author}
                className="h-full w-auto object-contain object-bottom block max-w-none"
              />
            </div>
          </div>
        );
      })}

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start text-left gap-6">
          <div className="inline-flex items-center gap-2.5 text-moss/90">
            <span className="material-symbols-outlined text-[28px] text-tertiary-fixed">
              water_drop
            </span>
            <span className="font-technical-label text-[12px] uppercase tracking-wider text-white/70">
              National Vision
            </span>
          </div>

          <div className="min-h-[180px] sm:min-h-[160px] flex items-center relative w-full">
            {QUOTES.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={idx}
                  className={`transition-all duration-1000 ease-in-out flex flex-col items-start gap-4 ${isActive
                    ? "opacity-100 relative z-10 translate-y-0"
                    : "opacity-0 pointer-events-none absolute inset-0 justify-center -translate-y-2"
                    }`}
                >
                  <blockquote className="font-headline-h2 text-[26px] sm:text-[34px] lg:text-[38px] text-white font-normal leading-snug tracking-tight">
                    {item.quote}
                  </blockquote>
                  <cite className="font-body-large text-body-large text-light-aquifer-canvas/90 not-italic block">
                    <span className="font-semibold text-white">
                      — {item.author}
                    </span>
                    , <span className="text-white/70">{item.role}</span>
                  </cite>
                </div>
              );
            })}
          </div>

          {/* Carousel Dot Indicators */}
          <div className="flex items-center gap-3 pt-2">
            {QUOTES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Quote ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeIndex
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
