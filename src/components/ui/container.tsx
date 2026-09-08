import type { ReactNode } from "react";

/**
 * Shared content container. The Figma frames are four different widths
 * (1280 / 1417 / 1294 / 1280) but every section's actual content wrapper
 * measures max-w-[1280px] regardless of frame — the frame-width variance
 * is artboard padding, not four different designs (confirmed by sampling
 * Header, Hero, Footer, and Core Solutions, all of which hard-code
 * max-w-[1280px]). This component normalizes that to one container used
 * everywhere.
 *
 * Horizontal padding is 32px at the Figma desktop breakpoint; scaled down
 * on smaller viewports as a Phase 4 responsive assumption (not specified
 * in the desktop-only Figma file).
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
