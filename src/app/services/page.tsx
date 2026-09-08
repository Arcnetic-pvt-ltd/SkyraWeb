import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { RainwaterHarvesting } from "@/components/services/rainwater-harvesting";
import { StormwaterManagement } from "@/components/services/stormwater-management";
import { ImplementationProcess } from "@/components/services/implementation-process";
import { SectorCapabilities } from "@/components/services/sector-capabilities";
import { FinalCta } from "@/components/shared/final-cta";

export const metadata: Metadata = {
  title: "Services & Solutions | SkyRa",
  description:
    "Integrated water solutions for complete resource independence: rainwater harvesting, groundwater recharge, intelligent stormwater management, and sector-tailored implementation.",
};

/**
 * Services & Solutions page.
 *
 * Source: the project's HTML reference build for this screen
 * (stitch_skyra_water_solutions_platform/skyra_services_solutions_contrast_white_sections),
 * used instead of Figma after the Figma MCP monthly quota was exhausted
 * (see conversation). That reference build uses a visibly different
 * design system than the Landing page's Figma-verified one — different
 * exact brand colors, Inter for body copy, a Material Symbols icon font,
 * and a raster logo image. None of that was carried over: this page
 * reuses the established SkyRa tokens (brand-teal / brand-green / ink),
 * Plus Jakarta Sans, the shared Header/Footer/WhatsApp widget, and new
 * inline SVG icons matching the existing icon system, so the two pages
 * read as one site rather than two different products.
 *
 * The Final CTA section is identical in copy and contact details to
 * Landing's — reused as a shared component (components/shared/final-cta)
 * rather than duplicated.
 *
 * Responsive assumptions (Phase 4): all multi-column grids collapse to
 * one column below `md`; the hero's metric/highlight rows wrap.
 */
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <RainwaterHarvesting />
      <StormwaterManagement />
      <ImplementationProcess />
      <SectorCapabilities />
      <FinalCta />
    </>
  );
}
