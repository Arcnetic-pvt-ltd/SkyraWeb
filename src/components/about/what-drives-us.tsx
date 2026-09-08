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
    tone: "text-brand-teal",
    hoverBg: "group-hover:bg-brand-teal",
    title: "Trust",
    description: "We use verified data and proven technologies to deliver solutions that actually work, ensuring your property is protected for decades.",
    FooterIcon: CheckCircleIcon,
    footer: "Hydro-Geological Precision",
  },
  {
    Icon: DropletIcon,
    tone: "text-brand-green",
    hoverBg: "group-hover:bg-brand-green",
    title: "Transparency",
    description: "From our initial site assessment to the final drop harvested, we provide clear communication, honest timelines, and no hidden costs.",
    FooterIcon: EyeIcon,
    footer: "Open Milestones & Audit Logs",
  },
  {
    Icon: RefreshIcon,
    tone: "text-emerald-400",
    hoverBg: "group-hover:bg-emerald-400",
    title: "Affordability",
    description: "Premium sustainability should not be out of reach. We engineer cost-effective systems that deliver a true long-term return on investment.",
    FooterIcon: RechargeGroundwaterIcon,
    footer: "Rapid Tanker-Cost Amortization",
  },
] as const;

/** What Drives Us — three guiding-principle pillars. */
export function WhatDrivesUs() {
  return (
    <section className="bg-ink-elevated py-16 lg:py-24">
      <Container className="flex flex-col items-center">
        <div className="max-w-2xl text-center">
          <Eyebrow color="green" center>Core Guiding Principles</Eyebrow>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Drives Us
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            Moving the industry away from traditional, opaque engineering
            practices with three unwavering pillars.
          </p>
        </div>

        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map(({ Icon, tone, hoverBg, title, description, FooterIcon, footer }) => (
            <div key={title} className="group flex flex-col justify-between rounded-2xl bg-ink p-8 shadow-xl transition-transform duration-300 hover:-translate-y-1">
              <div>
                <div className={`flex size-14 items-center justify-center rounded-full bg-ink-elevated ${tone} ${hoverBg} transition-colors group-hover:text-ink`}>
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-400">{description}</p>
              </div>
              <div className={`mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-sm font-semibold ${tone}`}>
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
