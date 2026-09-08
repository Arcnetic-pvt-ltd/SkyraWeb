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
    <section className="relative overflow-hidden bg-ink pb-16 pt-28 lg:pb-24 lg:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute -top-48 left-1/2 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-brand-teal/10 blur-[140px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-green/10 blur-[120px]" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-ink-elevated px-4 py-1.5 text-brand-teal shadow-md">
          <DropletIcon className="size-4" />
          <span className="text-[11px] font-bold uppercase tracking-widest">About SkyRa • From Sky, To Life</span>
        </div>

        <h1 className="mt-6 max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-[56px] lg:leading-[64px]">
          Re-engineering Our Relationship with{" "}
          <span className="bg-linear-to-r from-brand-teal via-teal-300 to-brand-green bg-clip-text text-transparent">
            Rain.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
          SkyRa was founded to solve a fundamental paradox: our regions receive
          abundant rainfall, yet we continually face seasonal water scarcity and
          groundwater depletion. We realized that to secure our future, we had
          to change how we interact with water today.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaButton href="/services" variant="primary" icon={<ArrowRightIcon className="size-4" />} className="flex-row-reverse">
            Explore Our Solutions
          </CtaButton>
          <CtaButton href={WHATSAPP_HREF} external variant="dark" icon={<WhatsAppIcon className="size-4 text-brand-green" />}>
            Connect on WhatsApp
          </CtaButton>
        </div>

        <div className="mt-12 w-full max-w-4xl rounded-2xl bg-ink-elevated/90 p-6 shadow-xl backdrop-blur-md">
          <div className="flex flex-col items-center justify-between gap-4 text-left md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                <StormIcon className="size-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-green">The SkyRa Paradigm</p>
                <p className="mt-1 text-sm text-white">
                  Transforming rainwater from lost surface runoff into a
                  permanent, secure resource for homes, businesses, and
                  communities.
                </p>
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2">
              <span aria-hidden="true" className="size-2.5 animate-ping rounded-full bg-brand-green" />
              <span className="text-sm font-semibold text-brand-green">Decentralized Hydrology</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
