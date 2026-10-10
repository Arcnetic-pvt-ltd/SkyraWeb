import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { InlineCtaBox } from "@/components/services/inline-cta-box";
import { StormIcon, GavelIcon, LeafIcon, CheckCircleIcon, XCircleIcon } from "@/components/icons/service-icons";
import { WaterSecurityIcon } from "@/components/icons/solution-icons";

const PILLARS = [
  {
    Icon: StormIcon,
    tone: "bg-muted-aquifer/10 text-muted-aquifer",
    title: "Flood prevention",
    description: "Protect basements, underground parking, delicate landscaping, and foundational piles from dangerous hydrostatic pressure with hydro-engineered bioswales and high-flow retention cells.",
    footer: "Zero foundation inundation",
  },
  {
    Icon: GavelIcon,
    tone: "bg-moss/10 text-moss",
    title: "Regulatory compliance",
    description: "Effortlessly meet and exceed green building certifications (IGBC, GRIHA, LEED) and State Pollution Control Board discharge standards without administrative delays.",
    footer: "Statutory clearance ready",
  },
  {
    Icon: LeafIcon,
    tone: "bg-forest-slate/10 text-forest-slate",
    title: "Aesthetic integration",
    description: "Solutions engineered to blend harmoniously into landscape design: permeable interlocking pavers, discreetly submerged retention arches, and decorative gravel swales.",
    footer: "Invisible urban footprint",
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
    <section className="relative bg-ink py-16 sm:py-24 text-white">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow color="teal">
            <StormIcon className="size-3.5" /> Primary intervention 02
          </Eyebrow>
          <h2 className="mt-3 font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white tracking-tight leading-[1.2]">
            Intelligent stormwater management
          </h2>
          <p className="mt-3 text-base font-normal font-body-primary leading-relaxed text-slate-300">
            Heavy monsoons do not have to mean flooded properties and lost
            resources. We design robust drainage and routing systems that
            manage heavy surface runoff, preventing structural damage while
            redirecting water securely back into the earth.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map(({ Icon, tone, title, description, footer }) => (
            <div key={title} className="flex flex-col gap-4 rounded-[4px] bg-ink-elevated p-6 border border-white/10">
              <div className={`flex size-10 items-center justify-center rounded-[4px] border border-white/10 ${tone}`}>
                <Icon className="size-5" />
              </div>
              <h3 className="font-headline-h3 text-[24px] font-medium text-white leading-[1.3]">{title}</h3>
              <p className="text-base font-normal font-body-primary leading-relaxed text-slate-300">{description}</p>
              <div className="mt-auto flex items-center gap-2 font-mono text-xs font-medium text-muted-aquifer">
                <CheckCircleIcon className="size-4" />
                {footer}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Spec Comparison Matrix */}
        <div className="mb-12 rounded-[4px] bg-ink-elevated p-6 border border-white/10 lg:p-10">
          <div className="mb-8 max-w-xl">
            <span className="font-mono text-xs font-medium text-muted-aquifer">
              Hydrological engineering comparison
            </span>
            <h3 className="mt-1 font-headline-h3 text-[24px] font-medium text-white leading-[1.3]">
              Conventional runoff vs. Skyra managed infrastructure
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-[4px] bg-ink p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <span className="rounded-[4px] bg-red-950/60 border border-red-500/30 px-2.5 py-1 font-mono text-xs font-medium text-red-300">
                  Traditional disposal
                </span>
                <XCircleIcon className="size-5 text-red-400" />
              </div>
              <h4 className="font-headline-h3 text-lg font-medium text-white leading-snug">Unmanaged surface discharge</h4>
              <ul className="flex flex-col gap-3 text-base font-normal font-body-primary text-slate-300 leading-relaxed">
                {TRADITIONAL_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-2.5 size-1 flex-shrink-0 rounded-full bg-slate-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 rounded-[4px] bg-ink-elevated p-6 border border-white/15">
              <div className="flex items-center justify-between">
                <span className="rounded-[4px] bg-moss/10 border border-moss/20 px-2.5 py-1 font-mono text-xs font-medium text-moss">
                  Skyra engineered system
                </span>
                <CheckCircleIcon className="size-5 text-moss" />
              </div>
              <h4 className="font-headline-h3 text-lg font-medium text-white leading-snug">Sub-surface controlled hydrology</h4>
              <ul className="flex flex-col gap-3 text-base font-normal font-body-primary text-white leading-relaxed">
                {SKYRA_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-2.5 size-1 flex-shrink-0 rounded-full bg-moss" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <InlineCtaBox
          icon={<WaterSecurityIcon className="size-7" />}
          iconTone="bg-muted-aquifer/10 text-muted-aquifer"
          title="Secure your property ahead of the monsoon season."
          description="Click to request a consultation and safeguard your foundation against unmanaged heavy storm runoff."
          href="#contact"
          buttonLabel="Request a consultation"
          buttonIcon={<ArrowRightIcon className="size-4" />}
          tone="dark"
        />
      </Container>
    </section>
  );
}
