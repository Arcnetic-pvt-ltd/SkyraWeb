import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { CheckCircleIcon, TruckIcon, MedalIcon } from "@/components/icons/service-icons";
import { DropletIcon } from "@/components/icons/metric-icons";
import { WHATSAPP_HREF } from "@/lib/nav";

const HIGHLIGHTS = [
  { label: "100% on-site capture", Icon: CheckCircleIcon, tone: "text-brand-green" },
  { label: "Aquifer rejuvenation", Icon: DropletIcon, tone: "text-brand-teal" },
  { label: "Zero structural risk", Icon: MedalIcon, tone: "text-emerald-400" },
] as const;

const METRICS = [
  { Icon: TruckIcon, label: "Annual impact", value: "1.2M+ L", tone: "text-brand-green", description: "Pure rainwater captured and redirected on average per commercial installation." },
  { Icon: TruckIcon, label: "Cost elimination", value: "Zero", tone: "text-brand-teal", description: "Tanker reliance during peak summer months across multi-tier residential setups." },
  { Icon: MedalIcon, label: "Engineering quality", value: "100%", tone: "text-sky-600", description: "Turnkey design, hydro-geological survey, civil installation, and sensor deployment." },
] as const;

/**
 * Services Hero (Dark Oceanic Cinematic Anchor). Source: HTML reference build.
 *
 * Top padding (pt-28/pt-32) clears the fixed 80px header at every
 * breakpoint — a cross-page diff pass caught the eyebrow badge sitting
 * partially behind the header on mobile/tablet at the original py-16.
 */
export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-brand-teal/10 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-brand-green/10 blur-[110px]" />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-ink-elevated px-4 py-2 text-brand-teal">
            <span aria-hidden="true" className="size-2 animate-pulse rounded-full bg-brand-teal" />
            <span className="font-mono text-xs font-medium">Integrated water solutions</span>
          </div>

          <h1 className="mb-4 text-[38px] sm:text-5xl lg:text-[56px] font-bold font-headline-hero tracking-tight text-white leading-[1.15]">
            Integrated water solutions for complete resource independence
          </h1>

          <p className="mb-8 max-w-2xl text-base font-normal font-body-primary leading-relaxed text-slate-300">
            {"Secure your property's future with end-to-end water management. We transform seasonal rainfall into a permanent, independent resource, reducing dependency on external supply and protecting your infrastructure."}
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {HIGHLIGHTS.map(({ label, Icon, tone }) => (
              <div key={label} className="inline-flex items-center gap-2 rounded-full bg-ink-elevated px-4 py-2 font-mono text-xs font-medium text-white shadow-sm">
                <Icon className={`size-4.5 ${tone}`} />
                {label}
              </div>
            ))}
          </div>

          <div className="mb-16 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <CtaButton href="#contact" variant="primary" icon={<ArrowRightIcon className="size-4" />} className="w-full flex-row-reverse sm:w-auto">
              Request technical audit
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
                <span className="font-mono text-xs font-medium text-white/80">{label}</span>
              </div>
              <div className="font-metric-mono-lg text-4xl font-bold tracking-tight text-white">{value}</div>
              <p className="text-base font-normal font-body-primary text-slate-300 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
