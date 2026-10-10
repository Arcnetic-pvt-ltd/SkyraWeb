import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { InlineCtaBox } from "@/components/services/inline-cta-box";
import { CheckCircleIcon, HomeIcon, FunnelIcon, WrenchIcon, LayersIcon, BuildingIcon, CalculatorIcon } from "@/components/icons/service-icons";
import { DropletIcon } from "@/components/icons/metric-icons";
import { WHATSAPP_HREF } from "@/lib/nav";

const FEATURES = [
  {
    Icon: DropletIcon,
    tone: "bg-brand-green/10 text-brand-green",
    tag: "Up to 80% tanker reduction",
    tagTone: "bg-brand-green/15 text-brand-green",
    title: "Total water independence",
    description: "Drastically cut reliance on expensive private water tankers and unpredictable municipal distribution grids with on-site, purified rainwater reservoirs.",
    footer: "Immediate OPEX reduction",
    footerTone: "text-brand-green",
  },
  {
    Icon: LayersIcon,
    tone: "bg-brand-teal/10 text-brand-teal",
    tag: "Subterranean rejuvenation",
    tagTone: "bg-brand-teal/15 text-brand-teal",
    title: "Groundwater restoration",
    description: "Actively replenish depleted local aquifers through multi-stage percolation shafts and recharge filtration wells that restore deep water tables permanently.",
    footer: "Hydro-geologically certified",
    footerTone: "text-brand-teal",
  },
  {
    Icon: BuildingIcon,
    tone: "bg-sky-600/10 text-sky-600",
    tag: "Modular capacities",
    tagTone: "bg-sky-600/15 text-sky-600",
    title: "Scalable architecture",
    description: "Engineered specifically for individual residences, luxury gated communities, corporate IT parks, and sprawling 50+ acre educational campuses.",
    footer: "Tailored 3D schematics",
    footerTone: "text-sky-600",
  },
] as const;

const WORKFLOW_STEPS = [
  { n: 1, Icon: HomeIcon, title: "Rooftop catchment", description: "High-efficiency gutter manifolds aggregate high-volume seasonal rain with non-corrosive UV leaf guards.", tone: "bg-brand-teal/20 text-brand-teal" },
  { n: 2, Icon: FunnelIcon, title: "First-flush diverter", description: "Automated hydraulic float chambers discard the initial 15-minute particulate-heavy runoff cleanly.", tone: "bg-brand-teal/20 text-brand-teal" },
  { n: 3, Icon: WrenchIcon, title: "Dual-media filtration", description: "Activated silica and micro-mesh filtration pods extract suspended silt down to 5 microns without chemicals.", tone: "bg-brand-teal/20 text-brand-teal" },
  { n: 4, Icon: DropletIcon, title: "Cistern & deep aquifer", description: "Dual-routed into food-grade potable holding tanks or gravel recharge pits injecting clean rain to subsoil strata.", tone: "bg-brand-green/20 text-brand-green" },
] as const;

/** Service Deep Dive 1: Rainwater Harvesting & Groundwater Recharge. */
export function RainwaterHarvesting() {
  return (
    <section className="relative border-y border-slate-200 bg-white py-16 lg:py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow color="green">
              <DropletIcon className="size-3.5" /> Primary intervention 01
            </Eyebrow>
            <h2 className="mt-3 font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight leading-[1.2]">
              Rainwater harvesting &amp; groundwater recharge
            </h2>
            <p className="mt-3 text-base font-normal font-body-primary leading-relaxed text-deep-aquifer">
              Eliminate seasonal water scarcity by capturing rooftop and surface
              water. Our systems are engineered to filter, store, and
              intelligently route rainwater directly into your existing supply
              or recharge the local aquifer to ensure year-round availability.
            </p>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map(({ Icon, tone, tag, tagTone, title, description, footer, footerTone }) => (
            <div key={title} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-shadow hover:shadow-lg">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className={`flex size-12 items-center justify-center rounded-full ${tone}`}>
                    <Icon className="size-6" />
                  </div>
                  <span className={`rounded-full px-3 py-1 font-mono text-xs font-medium ${tagTone}`}>
                    {tag}
                  </span>
                </div>
                <h3 className="mb-2 font-headline-h3 text-[24px] font-medium text-slate-900 leading-[1.3]">{title}</h3>
                <p className="mb-4 text-base font-normal font-body-primary text-slate-600 leading-relaxed">{description}</p>
              </div>
              <div className={`flex items-center gap-2 pt-2 font-mono text-xs font-medium ${footerTone}`}>
                <CheckCircleIcon className="size-4.5" />
                {footer}
              </div>
            </div>
          ))}
        </div>

        {/* Hydrologic Engineering Workflow */}
        <div className="mb-12 rounded-2xl border border-slate-300 bg-slate-100 p-6 shadow-md lg:p-10">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="font-mono text-xs font-medium text-brand-teal">
                Hydrologic engineering workflow
              </span>
              <h3 className="mt-1 font-headline-h3 text-[24px] font-medium text-deep-aquifer leading-[1.3]">
                Precision filtration &amp; aquifer direct-injection pipeline
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-medium text-slate-600">
              <span aria-hidden="true" className="size-2 rounded-full bg-brand-green" />
              Zero sludge gravity assist
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW_STEPS.map(({ n, Icon, title, description, tone }) => (
              <div key={n} className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className={`flex size-10 items-center justify-center rounded-full font-mono text-xs font-bold ${tone}`}>
                    {n}
                  </div>
                  <Icon className="size-5 text-slate-500" />
                </div>
                <h4 className="font-headline-h3 text-lg font-medium text-slate-900 leading-snug">{title}</h4>
                <p className="text-base font-normal font-body-primary text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <InlineCtaBox
          icon={<CalculatorIcon className="size-7" />}
          iconTone="bg-brand-green/20 text-brand-green"
          title="Ready to calculate your catchment capacity?"
          description="Tap to Chat on WhatsApp and evaluate your property's harvesting potential with a senior hydrologist."
          href={WHATSAPP_HREF}
          external
          buttonLabel="Chat on WhatsApp"
          buttonIcon={<WhatsAppIcon className="size-4" />}
        />
      </Container>
    </section>
  );
}
