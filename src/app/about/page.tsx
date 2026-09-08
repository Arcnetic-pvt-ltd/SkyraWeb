import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { OurStory } from "@/components/about/our-story";
import { WhatDrivesUs } from "@/components/about/what-drives-us";
import { OurReach } from "@/components/about/our-reach";
import { TheTeam } from "@/components/about/the-team";
import { FinalCta } from "@/components/shared/final-cta";

export const metadata: Metadata = {
  title: "About Us | SkyRa",
  description:
    "SkyRa re-engineers the relationship with rain — decentralized water security for homes, businesses, and communities across South India and beyond.",
};

/**
 * About page. Source: the project's HTML reference build
 * (stitch_skyra_water_solutions_platform/about_skyra_from_sky_to_life),
 * re-skinned onto the established SkyRa tokens/components (same rationale
 * as the Services page — see its file for detail).
 *
 * The Team section's four profiles are placeholder content in the source
 * itself (generic names, initials-only avatars, explicitly commented
 * "Skeleton Avatar Placeholder") — kept as given, flagged as a TODO for
 * real founder data before launch.
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <WhatDrivesUs />
      <OurReach />
      <TheTeam />
      <FinalCta />
    </>
  );
}
