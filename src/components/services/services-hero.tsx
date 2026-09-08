import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { CheckCircleIcon, TruckIcon, MedalIcon } from "@/components/icons/service-icons";
import { DropletIcon } from "@/components/icons/metric-icons";
import { WHATSAPP_HREF } from "@/lib/nav";

const HIGHLIGHTS = [
  { label: "100% On-Site Capture", Icon: CheckCircleIcon, tone: "text-brand-green" },
  { label: "Aquifer Rejuvenation", Icon: DropletIcon, tone: "text-brand-teal" },
  { label: "Zero Structural Risk", Icon: MedalIcon, tone: "text-emerald-400" },
] as const;

const METRICS = [
  { Icon: TruckIcon, label: "Annual Impact", value: "1.2M+ L", tone: "text-brand-green", description: "Pure rainwater captured and redirected on average per commercial installation." },
  { Icon: TruckIcon, label: "Cost Elimination", value: "Zero", tone: "text-brand-teal", description: "Tanker reliance during peak summer months across multi-tier residential setups." },
  { Icon: MedalIcon, label: "Engineering Quality", value: "100%", tone: "text-sky-600", description: "Turnkey design, hydro-geological survey, civil installation, and sensor deployment." },
] as const;

/** Services Hero (Dark Oceanic Cinematic Anchor). Source: HTML reference build. */
export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-brand-teal/10 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-brand-green/10 blur-[110px]" />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-ink-elevated px-4 py-2 text-brand-teal">
            <span aria-hidden="true" className="size-2 animate-pulse rounded-full bg-brand-teal" />
            <span className="text-[11px] font-bold uppercase tracking-widest">Integrated Water Solutions</span>
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[56px] lg:leading-[64px]">
            Integrated Water Solutions for{" "}
            <span className="bg-gradient-to-r from-brand-teal via-teal-400 to-brand-green bg-clip-text text-transparent">
              Complete Resource Independence
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            {"Secure your property's future with end-to-end water management. We transform seasonal rainfall into a permanent, independent resource, reducing dependency on external supply and protecting your infrastructure."}
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {HIGHLIGHTS.map(({ label, Icon, tone }) => (
              <div key={label} className="inline-flex items-center gap-2 rounded-full bg-ink-elevated px-4 py-2 text-sm font-semibold text-white shadow-sm">
                <Icon className={`size-4.5 ${tone}`} />
                {label}
              </div>
            ))}
          </div>

          <div className="mb-16 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <CtaButton href="#contact" variant="primary" icon={<ArrowRightIcon className="size-4" />} className="w-full flex-row-reverse sm:w-auto">
              Request Technical Audit
            </CtaButton>
            <CtaButton href={WHATSAPP_HREF} external variant="dark" icon={<WhatsAppIcon className="size-4 text-brand-green" />} className="w-full sm:w-auto">
              Chat on WhatsApp
            </CtaButton>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {METRICS.map(({ Icon, label, value, tone, description }) => (
            <div key={label} className="flex flex-col gap-2 rounded-2xl bg-ink-elevated/80 p-6 shadow-md backdrop-blur-md">
              <div className={`flex items-center gap-2 ${tone}`}>
                <Icon className="size-5" />
                <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
              </div>
              <div className="text-4xl font-extrabold tracking-tight text-white">{value}</div>
              <p className="text-sm text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
