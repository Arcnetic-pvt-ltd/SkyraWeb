import Image from "next/image";
import { CtaButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { WHATSAPP_HREF } from "@/lib/nav";
import { HeroMissionEngine } from "@/components/landing/hero-mission-engine";

/**
 * Hero Section. Source: Figma node 1:3.
 *
 * pt-27 (108px) accounts for the fixed 80px header floating on top, plus
 * the design's own extra top breathing room — see SiteHeader's doc
 * comment. The background photo is the source design's actual asset at
 * its native 512×279 resolution (a Google Stitch/AIDA-generated
 * placeholder, not a stock substitute) — it will look soft stretched to
 * full width; worth commissioning real photography before launch.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-light-aquifer-canvas pt-28 pb-16">
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-[4px] border border-muted-aquifer/20 bg-white px-3 py-1 text-xs font-medium text-deep-aquifer shadow-xs">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-moss" />
              Water resilience &amp; sustainable architecture
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-deep-aquifer sm:text-5xl lg:text-6xl leading-[1.1]">
              Stop letting your water run dry.
              <span className="block font-semibold text-deep-aquifer/90">Capture, recharge, secure.</span>
            </h1>

            <p className="mb-8 max-w-xl text-base font-normal leading-relaxed text-deep-aquifer/75 sm:text-lg">
              Transform seasonal rainfall into a permanent, independent water source
              with intelligent, cost-effective water management solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <CtaButton href="#contact" variant="primary">
                Book a site survey
              </CtaButton>
              <CtaButton href={WHATSAPP_HREF} external variant="secondary" icon={<WhatsAppIcon className="size-4 text-deep-aquifer" />}>
                Chat on WhatsApp
              </CtaButton>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <HeroMissionEngine />
          </div>
        </div>
      </Container>
    </section>
  );
}
