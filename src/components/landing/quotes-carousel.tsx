"use client";

import { useEffect, useState } from "react";

const QUOTES = [
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
    <section className="w-full bg-forest-slate text-light-aquifer-canvas py-28 sm:py-36 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="material-symbols-outlined text-[48px] text-tertiary-fixed opacity-40 mb-10">
          water_drop
        </span>

        <div className="min-h-[220px] flex items-center justify-center relative w-full">
          {QUOTES.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                className={`transition-opacity duration-1000 ease-in-out flex flex-col items-center gap-6 ${
                  isActive
                    ? "opacity-100 relative z-10"
                    : "opacity-0 pointer-events-none absolute inset-0 justify-center"
                }`}
              >
                <blockquote className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white font-normal leading-relaxed tracking-tight">
                  {item.quote}
                </blockquote>
                <cite className="font-body-large text-body-large text-light-aquifer-canvas/80 not-italic">
                  — {item.author},{" "}
                  <span className="text-white/60">{item.role}</span>
                </cite>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-3 mt-12 z-20">
          {QUOTES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Quote ${idx + 1}`}
              onClick={() => setActiveIndex(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === activeIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
