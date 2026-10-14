"use client";

import { useSyncExternalStore } from "react";
import { useScrollToTop } from "@/components/providers/smooth-scroll";

function subscribe(onScroll: () => void) {
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}

function getSnapshot() {
  return window.scrollY > 300;
}

function getServerSnapshot() {
  return false;
}

export function ScrollToTop() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const scrollToTop = useScrollToTop();

  if (!visible || !scrollToTop) return null;

  return (
    <button
      type="button"
      aria-label="Go to top"
      title="Go to top"
      onClick={scrollToTop}
      className="fixed bottom-20 right-4 z-40 flex size-11 items-center justify-center rounded-[6px] border border-muted-aquifer/20 bg-white text-forest-slate shadow-md transition-colors hover:border-moss hover:bg-forest-slate hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-slate motion-reduce:transition-none sm:bottom-24 sm:right-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="m6 12 6-6 6 6M12 6v14M5 3h14" />
      </svg>
    </button>
  );
}
