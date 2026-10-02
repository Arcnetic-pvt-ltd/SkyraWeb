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
    title: "Trust",
    description: "We use verified data and proven technologies to deliver solutions that actually work, ensuring your property is protected for decades.",
    FooterIcon: CheckCircleIcon,
    footer: "Hydro-geological precision",
  },
  {
    Icon: DropletIcon,
    title: "Transparency",
    description: "From our initial site assessment to the final drop harvested, we provide clear communication, honest timelines, and no hidden costs.",
    FooterIcon: EyeIcon,
    footer: "Open milestones & audit logs",
  },
  {
    Icon: RefreshIcon,
    title: "Affordability",
    description: "Premium sustainability should not be out of reach. We engineer cost-effective systems that deliver a true long-term return on investment.",
    FooterIcon: RechargeGroundwaterIcon,
    footer: "Rapid tanker-cost amortization",
  },
] as const;

export function WhatDrivesUs() {
  return (
    <section className="bg-[#F8FCFE] py-14 lg:py-20 border-b border-muted-aquifer/15">
      <Container className="flex flex-col items-center">
        <div className="max-w-2xl text-center">
          <Eyebrow color="green" center>Core guiding principles</Eyebrow>
          <h2 className="mt-2 font-heading-h2 text-heading-h2-mobile sm:text-headline-h2 font-bold tracking-tight text-deep-aquifer">
            What drives us
          </h2>
          <p className="mt-3 font-body-large text-body-large text-slate-700 leading-relaxed">
            Moving the industry away from traditional, opaque engineering
            practices with three unwavering pillars.
          </p>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map(({ Icon, title, description, FooterIcon, footer }) => (
            <div key={title} className="group flex flex-col justify-between rounded-[4px] bg-white p-6 sm:p-8 border border-muted-aquifer/20 shadow-xs">
              <div>
                <div className="flex size-12 items-center justify-center rounded-[4px] bg-moss/10 text-moss">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-deep-aquifer">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-muted-aquifer/20 pt-4 text-xs font-semibold text-moss">
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

