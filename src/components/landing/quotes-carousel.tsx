"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface QuoteItem {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export const DEFAULT_QUOTES: QuoteItem[] = [
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

export const LANDING_QUOTES: QuoteItem[] = [
  {
    quote:
      "“There must be a better way to make the things we want, a way that doesn't spoil the sky, or the rain or the land.”",
    author: "Paul McCartney",
    role: "Musician",
    image: "/images/assets/paul_mccartney_aura.png",
  },
  {
    quote: "“The environment is not a luxury, but a necessity of life.”",
    author: "Mahatma Gandhi",
    role: "Father of the Nation",
    image: "/images/assets/gandhi_aura.png",
  },
];

export function QuotesCarousel({
  quotes = DEFAULT_QUOTES,
}: {
  quotes?: QuoteItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic rotation between quotes (every 7 seconds) with hover-pause
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
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
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-20"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="quotesRainPattern"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="20"
                y1="0"
                x2="10"
                y2="35"
                stroke="#748D8C"
                strokeWidth="1"
                strokeOpacity="0.4"
                strokeDasharray="12 18"
              />
              <line
                x1="70"
                y1="40"
                x2="60"
                y2="75"
                stroke="#7D9D3D"
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeDasharray="10 20"
              />
              <line
                x1="110"
                y1="20"
                x2="100"
                y2="55"
                stroke="#86b5db"
                strokeWidth="0.8"
                strokeOpacity="0.35"
                strokeDasharray="8 16"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#quotesRainPattern)"
            className="animate-subtle-rain"
          />
        </svg>
      </div>

      {/* Portraits sit on the section's bottom edge, aligned to the content column */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute inset-y-0 inset-x-0 z-[5] pointer-events-none"
      >
        <div className="relative h-full w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {quotes.map(
            (item, idx) =>
              item.image && (
                <Image
                  key={`img-${idx}`}
                  src={item.image}
                  alt=""
                  width={1043}
                  height={877}
                  className={`absolute bottom-0 right-4 sm:right-6 lg:right-8 h-[133%] translate-x-[28.8%] w-auto max-w-none object-contain object-bottom transition-opacity duration-500 ease-in-out ${
                    idx === activeIndex ? "opacity-90" : "opacity-0"
                  }`}
                />
              ),
          )}
        </div>
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

        <div className="w-full grid grid-cols-1 grid-rows-1 items-start min-h-[160px] sm:min-h-[120px]">
          {quotes.map((item, idx) => {
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
                <div
                  className={`flex flex-col items-start gap-4 ${
                    item.image ? "sm:pr-52 lg:pr-64" : ""
                  }`}
                >
                  <blockquote className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white font-normal leading-snug tracking-tight min-h-[5.5rem] sm:min-h-[5.5rem]">
                    {item.quote}
                  </blockquote>

                  <cite className="font-body-large text-body-large text-light-aquifer-canvas/90 not-italic block font-normal">
                    <span className="font-semibold text-white">
                      — {item.author}
                    </span>
                    , <span className="text-[#86b5db]/90">{item.role}</span>
                  </cite>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Dot Indicators */}
        <div className="flex items-center gap-1.5 pt-1">
          {quotes.map((_, dotIdx) => (
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
