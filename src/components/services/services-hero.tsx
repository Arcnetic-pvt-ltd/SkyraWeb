import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { CheckCircleIcon, TruckIcon, MedalIcon } from "@/components/icons/service-icons";
import { DropletIcon } from "@/components/icons/metric-icons";
import { WHATSAPP_HREF } from "@/lib/nav";

const HIGHLIGHTS = [
  { label: "100% on-site capture", Icon: CheckCircleIcon, tone: "text-moss" },
  { label: "Aquifer rejuvenation", Icon: DropletIcon, tone: "text-muted-aquifer" },
  { label: "Zero structural risk", Icon: MedalIcon, tone: "text-forest-slate" },
] as const;

const METRICS = [
  { Icon: TruckIcon, label: "Annual impact", value: "1.2M+ L", tone: "text-moss", description: "Pure rainwater captured and redirected on average per commercial installation." },
  { Icon: TruckIcon, label: "Cost elimination", value: "Zero", tone: "text-muted-aquifer", description: "Tanker reliance during peak summer months across multi-tier residential setups." },
  { Icon: MedalIcon, label: "Engineering quality", value: "100%", tone: "text-forest-slate", description: "Turnkey design, hydro-geological survey, civil installation, and sensor deployment." },
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
    <section className="relative overflow-hidden bg-linear-to-b from-[#0c1a2c] via-[#10233b] to-[#162c47] pt-28 sm:pt-32 pb-16 sm:pb-24">
      {/* Subtle Rainfall Overlay Element */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none overflow-hidden select-none opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="servicesHeroRainPattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <line x1="30" y1="0" x2="20" y2="35" stroke="#748D8C" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="12 18" />
              <line x1="80" y1="40" x2="70" y2="75" stroke="#7D9D3D" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="10 20" />
              <line x1="120" y1="20" x2="110" y2="55" stroke="#86b5db" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="8 16" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#servicesHeroRainPattern)" className="animate-subtle-rain" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="flex max-w-4xl flex-col items-start text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-[4px] bg-[#132742] border border-[#22446d] px-3 py-1.5 text-[#86b5db]">
            <span aria-hidden="true" className="size-2 rounded-full bg-moss" />
            <span className="font-mono text-xs font-medium">Integrated water solutions</span>
          </div>

          <h1 className="mb-4 text-[38px] sm:text-5xl lg:text-[56px] font-bold font-headline-hero tracking-tight text-white leading-[1.15]">
            Integrated water solutions for complete resource independence
          </h1>

          <p className="mb-8 max-w-2xl text-base font-normal font-body-primary leading-relaxed text-slate-300">
            {"Secure your property's future with end-to-end water management. We transform seasonal rainfall into a permanent, independent resource, reducing dependency on external supply and protecting your infrastructure."}
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-start gap-2">
            {HIGHLIGHTS.map(({ label, Icon, tone }) => (
              <div key={label} className="inline-flex items-center gap-2 rounded-[4px] bg-[#132742] border border-[#22446d]/80 px-3 py-1.5 font-mono text-xs font-medium text-white">
                <Icon className={`size-4.5 ${tone}`} />
                {label}
              </div>
            ))}
          </div>

          <div className="mb-16 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row">
            <CtaButton href="#contact" variant="primary" icon={<ArrowRightIcon className="size-4" />} className="w-full flex-row-reverse sm:w-auto">
              Request technical audit
            </CtaButton>
            <CtaButton href={WHATSAPP_HREF} external variant="dark" icon={<WhatsAppIcon className="size-4 text-moss" />} className="w-full sm:w-auto">
              Chat on WhatsApp
            </CtaButton>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {METRICS.map(({ Icon, label, value, tone, description }) => (
            <div key={label} className="flex flex-col gap-2 rounded-[4px] bg-[#132742]/90 border border-[#22446d]/80 p-6">
              <div className={`flex items-center gap-2 ${tone}`}>
                <Icon className="size-5" />
                <span className="font-mono text-xs font-medium text-[#86b5db]">{label}</span>
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
