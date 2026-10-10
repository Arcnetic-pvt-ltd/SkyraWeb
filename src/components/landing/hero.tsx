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
    <section className="relative flex items-center justify-center overflow-hidden bg-linear-to-b from-[#0a1727] via-[#0f2137] to-[#152a44] pt-28 sm:pt-32 pb-16 sm:pb-24">
      {/* Photo Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-rainfall.jpg"
          alt="Lush rainfall over modern architecture and water reservoir"
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-center brightness-75 contrast-125 opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0a1727] via-[#0a1727]/85 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a1727] via-transparent to-[#0a1727]/40" />
      </div>

      {/* Subtle Rainfall Overlay Element */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none overflow-hidden select-none opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroRainPattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <line x1="20" y1="0" x2="10" y2="35" stroke="#748D8C" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="12 18" />
              <line x1="70" y1="40" x2="60" y2="75" stroke="#7D9D3D" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="10 20" />
              <line x1="110" y1="20" x2="100" y2="55" stroke="#86b5db" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="8 16" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroRainPattern)" className="animate-subtle-rain" />
        </svg>
      </div>

      <Container className="relative z-10 w-full py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-[4px] border border-[#22446d] bg-[#122742]/70 px-3 py-1.5 font-mono text-xs font-medium text-[#86b5db]">
              <span aria-hidden="true" className="size-2 rounded-full bg-moss" />
              Water resilience &amp; sustainable architecture
            </div>

            <h1 className="mb-6 text-[38px] sm:text-5xl lg:text-[56px] font-bold font-headline-hero tracking-tight text-white leading-[1.15]">
              <span className="block">Stop letting your</span>
              <span className="block">water run dry.</span>
              <span className="block">Capture, recharge, secure.</span>
            </h1>

            <p className="mb-8 max-w-xl text-base font-normal leading-relaxed text-slate-300 font-body-primary">
              Transform seasonal rainfall into a permanent, independent water source
              with intelligent, cost-effective water management solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <CtaButton href={WHATSAPP_HREF} external icon={<WhatsAppIcon className="size-4" />}>
                Chat on WhatsApp
              </CtaButton>
              <CtaButton href="#contact" variant="secondary" icon={<ArrowRightIcon className="size-4 text-muted-aquifer" />} className="flex-row-reverse">
                Request a consultation
              </CtaButton>
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <HeroMissionEngine />
          </div>
        </div>
      </Container>

      <div className="absolute bottom-6 right-8 hidden items-center gap-2 font-mono text-xs font-medium text-slate-400 md:flex">
        <span aria-hidden="true" className="h-px w-8 bg-moss/60" />
        From sky, to life
      </div>
    </section>
  );
}
