import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { InlineCtaBox } from "@/components/services/inline-cta-box";
import { StormIcon, GavelIcon, LeafIcon, CheckCircleIcon, XCircleIcon } from "@/components/icons/service-icons";
import { WaterSecurityIcon } from "@/components/icons/solution-icons";

const PILLARS = [
  {
    Icon: StormIcon,
    tone: "bg-brand-teal/10 text-brand-teal",
    title: "Flood Prevention",
    description: "Protect basements, underground parking, delicate landscaping, and foundational piles from dangerous hydrostatic pressure with hydro-engineered bioswales and high-flow retention cells.",
    footer: "Zero Foundation Inundation",
  },
  {
    Icon: GavelIcon,
    tone: "bg-brand-green/10 text-brand-green",
    title: "Regulatory Compliance",
    description: "Effortlessly meet and exceed green building certifications (IGBC, GRIHA, LEED) and State Pollution Control Board discharge standards without administrative delays.",
    footer: "Statutory Clearance Ready",
  },
  {
    Icon: LeafIcon,
    tone: "bg-sky-600/10 text-sky-600",
    title: "Aesthetic Integration",
    description: "Solutions engineered to blend harmoniously into landscape design: permeable interlocking pavers, discreetly submerged retention arches, and decorative gravel swales.",
    footer: "Invisible Urban Footprint",
  },
] as const;

const TRADITIONAL_POINTS = [
  "Uncontrolled basement waterlogging and vehicular ramp submergence during heavy monsoon hours.",
  "Severe silt and asphalt debris buildup directly choking municipal gutters and creating local road floods.",
  "100% of potable potential storm runoff permanently drained away and wasted into overloaded storm drains.",
  "Foundation settlement risks caused by uncontrolled soil water saturation around structural plinths.",
];

const SKYRA_POINTS = [
  "Sub-surface modular detention crates dissipate peak flash-flood volumes within minutes of rainfall.",
  "Multi-chamber sediment settlement traps catch 99% of gravel and silt before secondary routing.",
  "Continuous managed percolation recharges subterranean water tables safely below structural pilings.",
  "Engineered geotextile filtration barriers protect basement retaining walls from hydrostatic stress.",
];

/** Service Deep Dive 2: Intelligent Stormwater Management. */
export function StormwaterManagement() {
  return (
    <section className="relative bg-ink py-16 text-white lg:py-24">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow color="teal">
            <StormIcon className="size-3.5" /> Primary Intervention 02
          </Eyebrow>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Intelligent Stormwater Management
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-300">
            Heavy monsoons do not have to mean flooded properties and lost
            resources. We design robust drainage and routing systems that
            manage heavy surface runoff, preventing structural damage while
            redirecting water securely back into the earth.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map(({ Icon, tone, title, description, footer }) => (
            <div key={title} className="flex flex-col gap-4 rounded-2xl bg-ink-elevated p-6 shadow-md">
              <div className={`flex size-12 items-center justify-center rounded-full ${tone}`}>
                <Icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-slate-300">{description}</p>
              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-brand-teal">
                <CheckCircleIcon className="size-4" />
                {footer}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Spec Comparison Matrix */}
        <div className="mb-12 rounded-2xl bg-ink-elevated p-6 shadow-xl lg:p-10">
          <div className="mb-8 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              Hydrological Engineering Comparison
            </span>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Conventional Runoff vs. SkyRa Managed Infrastructure
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-xl bg-ink p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-red-950 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-red-400">
                  Traditional Disposal
                </span>
                <XCircleIcon className="size-6 text-red-400" />
              </div>
              <h4 className="text-lg font-semibold text-white">Unmanaged Surface Discharge</h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-300">
                {TRADITIONAL_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <XCircleIcon className="mt-0.5 size-4.5 flex-shrink-0 text-red-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 rounded-xl bg-ink-elevated p-6 shadow-lg ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-brand-green/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-green">
                  SkyRa Engineered System
                </span>
                <CheckCircleIcon className="size-6 text-brand-green" />
              </div>
              <h4 className="text-lg font-semibold text-white">Sub-Surface Controlled Hydrology</h4>
              <ul className="flex flex-col gap-3 text-sm text-white">
                {SKYRA_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 size-4.5 flex-shrink-0 text-brand-green" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <InlineCtaBox
          icon={<WaterSecurityIcon className="size-7" />}
          iconTone="bg-brand-teal/20 text-brand-teal"
          title="Secure your property ahead of the monsoon season."
          description="Click to Request a Consultation and safeguard your foundation against unmanaged heavy storm runoff."
          href="#contact"
          buttonLabel="Request a Consultation"
          buttonIcon={<ArrowRightIcon className="size-4" />}
          tone="dark"
        />
      </Container>
    </section>
  );
}
