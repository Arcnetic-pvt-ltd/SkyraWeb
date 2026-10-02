import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { CheckCircleIcon, TruckIcon, MedalIcon } from "@/components/icons/service-icons";
import { DropletIcon } from "@/components/icons/metric-icons";
import { WHATSAPP_HREF } from "@/lib/nav";

const HIGHLIGHTS = [
  { label: "100% on-site capture", Icon: CheckCircleIcon },
  { label: "Aquifer rejuvenation", Icon: DropletIcon },
  { label: "Zero structural risk", Icon: MedalIcon },
] as const;

const METRICS = [
  { Icon: TruckIcon, label: "Annual impact", value: "1.2M+ L", description: "Pure rainwater captured and redirected on average per commercial installation." },
  { Icon: TruckIcon, label: "Cost elimination", value: "Zero", description: "Tanker reliance during peak summer months across multi-tier residential setups." },
  { Icon: MedalIcon, label: "Engineering quality", value: "100%", description: "Turnkey design, hydro-geological survey, civil installation, and sensor deployment." },
] as const;

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFE] pb-14 pt-28 lg:pb-20 lg:pt-32 border-b border-muted-aquifer/15">
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-[4px] bg-[#F1F7F9] px-3.5 py-1 text-moss border border-muted-aquifer/20">
            <span className="text-[11px] font-bold uppercase tracking-widest">Integrated water solutions</span>
          </div>

          <h1 className="mb-4 font-heading-hero text-heading-hero-mobile sm:text-heading-hero font-bold tracking-tight text-deep-aquifer">
            Integrated water solutions for <span className="text-moss">complete resource independence</span>
          </h1>

          <p className="mb-6 max-w-2xl font-body-large text-body-large text-slate-700 leading-relaxed">
            {"Secure your property's future with end-to-end water management. We transform seasonal rainfall into a permanent, independent resource, reducing dependency on external supply and protecting your infrastructure."}
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            {HIGHLIGHTS.map(({ label, Icon }) => (
              <div key={label} className="inline-flex items-center gap-2 rounded-[4px] bg-white px-3.5 py-1.5 text-xs font-semibold text-deep-aquifer border border-muted-aquifer/20 shadow-xs">
                <Icon className="size-4 text-moss" />
                {label}
              </div>
            ))}
          </div>

          <div className="mb-12 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <CtaButton href={WHATSAPP_HREF} external variant="primary" icon={<WhatsAppIcon className="size-4" />}>
              Book a site survey
            </CtaButton>
            <CtaButton href="#contact" variant="secondary" icon={<ArrowRightIcon className="size-4" />} className="w-full flex-row-reverse sm:w-auto">
              Request technical audit
            </CtaButton>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {METRICS.map(({ Icon, label, value, description }) => (
            <div key={label} className="flex flex-col gap-2 rounded-[4px] bg-white p-6 border border-muted-aquifer/20 shadow-xs">
              <div className="flex items-center gap-2 text-moss">
                <Icon className="size-4.5" />
                <span className="text-xs font-bold uppercase tracking-widest text-deep-aquifer">{label}</span>
              </div>
              <div className="font-metric-mono-lg text-3xl font-extrabold tracking-tight text-deep-aquifer">{value}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

