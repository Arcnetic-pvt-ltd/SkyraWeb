import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { DropletIcon } from "@/components/icons/metric-icons";
import { StormIcon } from "@/components/icons/service-icons";
import { WHATSAPP_HREF } from "@/lib/nav";

/**
 * About Hero. Source: HTML reference build.
 *
 * Top padding (pt-28/pt-32) clears the fixed 80px header at every
 * breakpoint — a cross-page diff pass caught the eyebrow badge sitting
 * partially behind the header on mobile/tablet at the original py-16.
 */
export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#0c1a2c] via-[#10233b] to-[#162c47] pt-28 sm:pt-32 pb-16 sm:pb-24">
      {/* Subtle Rainfall Overlay Element */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none overflow-hidden select-none opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutHeroRainPattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <line x1="25" y1="0" x2="15" y2="35" stroke="#748D8C" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="12 18" />
              <line x1="75" y1="40" x2="65" y2="75" stroke="#7D9D3D" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="10 20" />
              <line x1="115" y1="20" x2="105" y2="55" stroke="#86b5db" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="8 16" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutHeroRainPattern)" className="animate-subtle-rain" />
        </svg>
      </div>

      <Container className="relative z-10 flex flex-col items-start text-left">
        <div className="inline-flex items-center gap-2 rounded-[4px] bg-[#132742] border border-[#22446d] px-3 py-1 text-[#86b5db]">
          <DropletIcon className="size-4" />
          <span className="font-mono text-xs font-medium">About Skyra • From sky, to life</span>
        </div>

        <h1 className="mt-6 max-w-4xl font-headline-hero text-[38px] sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-tight">
          Re-engineering our relationship with rain.
        </h1>

        <p className="mt-6 max-w-3xl font-body-primary text-base font-normal leading-relaxed text-slate-300">
          Skyra was founded to solve a fundamental paradox: our regions receive
          abundant rainfall, yet we continually face seasonal water scarcity and
          groundwater depletion. We realized that to secure our future, we had
          to change how we interact with water today.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
          <CtaButton href="/services" variant="primary" icon={<ArrowRightIcon className="size-4" />} className="flex-row-reverse">
            Explore our solutions
          </CtaButton>
          <CtaButton href={WHATSAPP_HREF} external variant="dark" icon={<WhatsAppIcon className="size-4 text-moss" />}>
            Connect on WhatsApp
          </CtaButton>
        </div>

        <div className="mt-12 w-full max-w-4xl rounded-[4px] bg-[#132742]/90 border border-[#22446d]/80 p-6">
          <div className="flex flex-col items-center justify-between gap-4 text-left md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-[4px] border border-[#22446d] bg-[#1a3254]/50 text-[#86b5db]">
                <StormIcon className="size-5" />
              </div>
              <div>
                <p className="font-mono text-xs font-medium text-moss">The Skyra paradigm</p>
                <p className="mt-1 font-body-primary text-base font-normal text-white/90">
                  Transforming rainwater from lost surface runoff into a
                  permanent, secure resource for homes, businesses, and
                  communities.
                </p>
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2">
              <span aria-hidden="true" className="size-2 rounded-full bg-moss" />
              <span className="font-mono text-xs font-medium text-moss">Decentralized hydrology</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
