import { Hero } from "@/components/landing/hero";
import { ProblemSection } from "@/components/landing/problem-section";
import { OpportunityBanner } from "@/components/landing/opportunity-banner";
import { CoreSolutions } from "@/components/landing/core-solutions";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ImpactMetrics } from "@/components/landing/impact-metrics";
import { BiggerVision } from "@/components/landing/bigger-vision";
import { FinalCta } from "@/components/landing/final-cta";

/**
 * Landing page. Source: Figma node 1:2 (sections 1:3, 1:32, 1:90, 1:141,
 * 1:311, 1:366, 1:460, 1:508), cross-checked against the project's HTML
 * reference build for copy and asset URLs after the Figma MCP quota was
 * exhausted mid-build (see conversation for details).
 *
 * Responsive assumptions applied throughout (Phase 4 — the Figma file has
 * desktop frames only): multi-column grids collapse to one column below
 * `md`/`lg`; the Opportunity Banner's flow diagram wraps instead of using
 * fixed absolute offsets; section vertical padding is unchanged from
 * desktop values (already Tailwind's default spacing scale, which reads
 * fine at mobile widths for this design); the Impact Metrics dashboard's
 * 3-column grid stacks to one column below `lg`, count-up/progress
 * animations unaffected.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <OpportunityBanner />
      <CoreSolutions />
      <HowItWorks />
      <ImpactMetrics />
      <BiggerVision />
      <FinalCta />
    </>
  );
}
