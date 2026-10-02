import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { DropletIcon } from "@/components/icons/metric-icons";
import { StormIcon } from "@/components/icons/service-icons";
import { WHATSAPP_HREF } from "@/lib/nav";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFE] pb-14 pt-28 lg:pb-20 lg:pt-32 border-b border-muted-aquifer/15">
      <Container className="relative z-10 flex flex-col items-start text-left">
        <div className="inline-flex items-center gap-2 rounded-[4px] bg-[#F1F7F9] px-3.5 py-1 text-moss border border-muted-aquifer/20">
          <DropletIcon className="size-4" />
          <span className="text-[11px] font-bold uppercase tracking-widest">About Skyra &bull; From sky, to life</span>
        </div>

        <h1 className="mt-5 max-w-4xl font-heading-hero text-heading-hero-mobile sm:text-heading-hero font-bold tracking-tight text-deep-aquifer">
          Re-engineering our relationship with <span className="text-moss">rain.</span>
        </h1>

        <p className="mt-5 max-w-3xl font-body-large text-body-large text-slate-700 leading-relaxed">
          Skyra was founded to solve a fundamental paradox: our regions receive
          abundant rainfall, yet we continually face seasonal water scarcity and
          groundwater depletion. We realized that to secure our future, we had
          to change how we interact with water today.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <CtaButton href={WHATSAPP_HREF} external variant="primary" icon={<WhatsAppIcon className="size-4" />}>
            Book a site survey
          </CtaButton>
          <CtaButton href="/services" variant="secondary" icon={<ArrowRightIcon className="size-4" />} className="flex-row-reverse">
            Explore our solutions
          </CtaButton>
        </div>

        <div className="mt-10 w-full max-w-4xl rounded-[4px] bg-white p-6 shadow-xs border border-muted-aquifer/20">
          <div className="flex flex-col items-start justify-between gap-4 text-left md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-[4px] bg-moss/10 text-moss">
                <StormIcon className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-moss">The Skyra paradigm</p>
                <p className="mt-0.5 text-sm text-deep-aquifer font-medium">
                  Transforming rainwater from lost surface runoff into a
                  permanent, secure resource for homes, businesses, and
                  communities.
                </p>
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2">
              <span aria-hidden="true" className="size-2 rounded-[2px] bg-moss" />
              <span className="text-xs font-semibold text-deep-aquifer">Decentralized hydrology</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

