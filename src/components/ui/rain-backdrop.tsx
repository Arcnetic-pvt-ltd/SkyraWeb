"use client";

import { useSyncExternalStore } from "react";

interface RainDrop {
  id: number;
  left: number;
  height: number;
  duration: number;
  delay: number;
  opacity: number;
}

const RAIN_DROPS: RainDrop[] = [
  { id: 1, left: 3, height: 26, duration: 4.2, delay: -1.4, opacity: 0.15 },
  { id: 2, left: 8, height: 32, duration: 5.1, delay: -3.2, opacity: 0.2 },
  { id: 3, left: 14, height: 22, duration: 4.8, delay: -0.6, opacity: 0.12 },
  { id: 4, left: 19, height: 36, duration: 3.9, delay: -2.8, opacity: 0.18 },
  { id: 5, left: 25, height: 28, duration: 5.6, delay: -4.1, opacity: 0.14 },
  { id: 6, left: 31, height: 34, duration: 4.4, delay: -1.9, opacity: 0.2 },
  { id: 7, left: 37, height: 24, duration: 5.3, delay: -3.7, opacity: 0.12 },
  { id: 8, left: 42, height: 38, duration: 4.1, delay: -0.8, opacity: 0.16 },
  { id: 9, left: 48, height: 26, duration: 5.8, delay: -2.3, opacity: 0.14 },
  { id: 10, left: 53, height: 30, duration: 4.6, delay: -4.5, opacity: 0.18 },
  { id: 11, left: 59, height: 22, duration: 5.0, delay: -1.2, opacity: 0.13 },
  { id: 12, left: 65, height: 34, duration: 4.3, delay: -3.4, opacity: 0.2 },
  { id: 13, left: 71, height: 28, duration: 5.4, delay: -2.1, opacity: 0.15 },
  { id: 14, left: 76, height: 36, duration: 4.0, delay: -0.4, opacity: 0.17 },
  { id: 15, left: 82, height: 24, duration: 5.2, delay: -3.9, opacity: 0.14 },
  { id: 16, left: 88, height: 32, duration: 4.7, delay: -1.7, opacity: 0.19 },
  { id: 17, left: 93, height: 26, duration: 5.5, delay: -4.2, opacity: 0.13 },
  { id: 18, left: 97, height: 30, duration: 4.5, delay: -2.6, opacity: 0.16 },
];

const emptySubscribe = () => () => {};

export function RainBackdrop() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[30] overflow-hidden select-none"
    >
      {RAIN_DROPS.map((drop) => (
        <span
          key={drop.id}
          className="absolute block w-[1px] bg-gradient-to-b from-transparent via-muted-aquifer to-transparent animate-subtle-rain"
          style={{
            left: `${drop.left}%`,
            height: `${drop.height}px`,
            opacity: drop.opacity,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
