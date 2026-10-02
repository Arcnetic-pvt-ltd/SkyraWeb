"use client";

import { useState } from "react";

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
    role: "Former President of India",
  },
];

export function QuotesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-8 flex flex-col gap-6 text-left">
      <div className="text-skyra-label text-[#748D8C]">
        National Vision for Water Harvesting
      </div>

      <div className="flex flex-col gap-4">
        <blockquote className="text-skyra-h2 text-[#1D293B] font-normal leading-snug margin-0">
          {QUOTES[activeIndex].quote}
        </blockquote>

        <cite className="text-skyra-body text-[#1D293B]/80 not-italic">
          <span className="font-semibold text-[#1D293B]">
            — {QUOTES[activeIndex].author}
          </span>
          , {QUOTES[activeIndex].role}
        </cite>
      </div>

      {/* Manual Selection Buttons (Page 08: Still until touched) */}
      <div className="flex items-center gap-3 pt-2">
        {QUOTES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className={`skyra-btn-secondary py-1 px-3 text-[13px] ${
              idx === activeIndex ? "bg-[#1D293B] text-white" : ""
            }`}
          >
            Quote {idx + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
