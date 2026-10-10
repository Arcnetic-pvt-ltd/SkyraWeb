import type { ReactNode } from "react";

/**
 * Small uppercase section kicker ("THE PROBLEM", "THE SKYRA SOLUTION", …).
 * Most instances lead with a short horizontal divider bar; "HOW SKYRA
 * WORKS" and "OUR SERVICES" don't — pass `dash={false}` for those.
 * `THE OPPORTUNITY` uniquely has a dash on both sides — pass `dash="both"`.
 */
export function Eyebrow({
  children,
  color = "teal",
  dash = true,
  center = false,
}: {
  children: ReactNode;
  color?: "teal" | "green";
  dash?: boolean | "both";
  center?: boolean;
}) {
  const colorClass = "text-moss font-bold uppercase tracking-widest text-[11px]";
  const barClass = "bg-moss";
  const bar = <span aria-hidden="true" className={`h-0.5 w-5 ${barClass}`} />;

  return (
    <div className={`inline-flex items-center gap-2 ${colorClass} ${center ? "justify-center" : ""}`}>
      {dash && bar}
      {children}
      {dash === "both" && bar}
    </div>
  );
}
