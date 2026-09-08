import Image from "next/image";
import { CtaButton } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { WHATSAPP_HREF } from "@/lib/nav";

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
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-ink pt-27 pb-19">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-rainfall.jpg"
          alt="Lush rainfall over modern architecture and water reservoir"
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-center brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/40" />
      </div>

      <Container className="relative z-10 w-full py-12">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.25 py-1.75 text-xs font-medium uppercase tracking-wide text-brand-green backdrop-blur-md">
            <span aria-hidden="true" className="size-2 rounded-full bg-brand-green" />
            Water Resilience &amp; Sustainable Architecture
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">Stop Letting Your</span>
            <span className="block">Water Run Dry.</span>
            <span className="block font-semibold text-brand-teal">Capture, Recharge,</span>
            <span className="block font-semibold text-brand-teal">Secure.</span>
          </h1>

          <p className="mb-8 max-w-xl text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
            Transform seasonal rainfall into a permanent, independent water source
            with intelligent, cost-effective water management solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <CtaButton href={WHATSAPP_HREF} external icon={<WhatsAppIcon className="size-4" />}>
              Chat on WhatsApp
            </CtaButton>
            <CtaButton href="#contact" variant="secondary" icon={<ArrowRightIcon className="size-4 text-brand-teal" />} className="flex-row-reverse">
              Request a Consultation
            </CtaButton>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-6 right-8 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-slate-400 md:flex">
        <span aria-hidden="true" className="h-px w-8 bg-brand-green/60" />
        From Sky, To Life
      </div>
    </section>
  );
}
