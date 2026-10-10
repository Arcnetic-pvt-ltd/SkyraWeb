import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WaterSecurityIcon } from "@/components/icons/solution-icons";
import { DropletIcon } from "@/components/icons/metric-icons";
import { RefreshIcon, EyeIcon } from "@/components/icons/about-icons";
import { RechargeGroundwaterIcon } from "@/components/icons/solution-icons";
import { CheckCircleIcon } from "@/components/icons/service-icons";

const PILLARS = [
  {
    Icon: WaterSecurityIcon,
    tone: "text-muted-aquifer",
    title: "Trust",
    description: "We use verified data and proven technologies to deliver solutions that actually work, ensuring your property is protected for decades.",
    FooterIcon: CheckCircleIcon,
    footer: "Hydro-geological precision",
  },
  {
    Icon: DropletIcon,
    tone: "text-moss",
    title: "Transparency",
    description: "From our initial site assessment to the final drop harvested, we provide clear communication, honest timelines, and no hidden costs.",
    FooterIcon: EyeIcon,
    footer: "Open milestones & audit logs",
  },
  {
    Icon: RefreshIcon,
    tone: "text-muted-aquifer",
    title: "Affordability",
    description: "Premium sustainability should not be out of reach. We engineer cost-effective systems that deliver a true long-term return on investment.",
    FooterIcon: RechargeGroundwaterIcon,
    footer: "Rapid tanker-cost amortization",
  },
] as const;

/** What Drives Us — three guiding-principle pillars. */
export function WhatDrivesUs() {
  return (
    <section className="bg-linear-to-b from-[#0a1829] via-[#0f233b] to-[#142c48] py-16 sm:py-24 border-t border-[#22446d]/40">
      <Container>
        <div className="max-w-2xl text-left">
          <Eyebrow color="green">Core guiding principles</Eyebrow>
          <h2 className="mt-2 font-headline-h2 text-[28px] sm:text-[36px] font-semibold tracking-tight text-white">
            What drives us
          </h2>
          <p className="mt-3 font-body-primary text-base font-normal leading-relaxed text-slate-300">
            Moving the industry away from traditional, opaque engineering
            practices with three unwavering pillars.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map(({ Icon, tone, title, description, FooterIcon, footer }) => (
            <div key={title} className="group flex flex-col justify-between rounded-[4px] bg-[#132742]/85 p-8 border border-[#22446d]/80 hover:border-[#386ba3]/60 transition-colors">
              <div>
                <div className={`flex size-10 items-center justify-center rounded-[4px] border border-[#22446d] bg-[#1a3459]/50 ${tone}`}>
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-headline-h3 text-[24px] font-medium leading-[1.3] text-white">{title}</h3>
                <p className="mt-2 font-body-primary text-base font-normal leading-relaxed text-slate-300">{description}</p>
              </div>
              <div className={`mt-6 flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-xs font-medium ${tone}`}>
                <FooterIcon className="size-4" />
                {footer}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
