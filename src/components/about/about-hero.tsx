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
    <section className="relative overflow-hidden bg-ink pt-28 sm:pt-32 pb-16 sm:pb-24">
      <Container className="relative z-10 flex flex-col items-start text-left">
        <div className="inline-flex items-center gap-2 rounded-[4px] bg-ink-elevated border border-white/10 px-3 py-1 text-muted-aquifer">
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

        <div className="mt-12 w-full max-w-4xl rounded-[4px] bg-ink-elevated border border-white/10 p-6">
          <div className="flex flex-col items-center justify-between gap-4 text-left md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-[4px] border border-white/10 bg-white/5 text-muted-aquifer">
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
