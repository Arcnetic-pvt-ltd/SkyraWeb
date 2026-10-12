import { Container } from "@/components/ui/container";
import { ReceiptIcon, GavelIcon, MedalIcon } from "@/components/icons/service-icons";
import { UseWaterEffectivelyIcon } from "@/components/icons/solution-icons";

const PHASES = [
  {
    n: "01",
    tone: "bg-muted-aquifer/10 text-muted-aquifer",
    labelTone: "text-muted-aquifer",
    title: "Assess & design",
    description: "Comprehensive site inspection, catchment runoff calculation, soil percolation testing, water quality analysis, and custom 3D capacity planning.",
    deliverables: ["Hydro-geological survey", "Certified CAD layout"],
  },
  {
    n: "02",
    tone: "bg-moss/10 text-moss",
    labelTone: "text-moss",
    title: "Build & install",
    description: "Procurement of food-grade, corrosion-resistant tanks, UV/multimedia filtration modules, followed by precision civil, plumbing, and electrical installation.",
    deliverables: ["IS/ISO grade equipment", "Zero-disruption civil work"],
  },
  {
    n: "03",
    tone: "bg-forest-slate/10 text-forest-slate",
    labelTone: "text-forest-slate",
    title: "Commission",
    description: "Rigorous hydraulic pressure testing, flow validation, water potability validation, and comprehensive handover training for facility teams.",
    deliverables: ["Potability lab certificate", "As-built operation manual"],
  },
  {
    n: "04",
    tone: "bg-moss/10 text-moss",
    labelTone: "text-moss",
    title: "Maintain",
    description: "Dedicated periodic maintenance, sensor calibration, automated filter flushing, water quality audits, and priority on-demand technical support.",
    deliverables: ["Bi-annual quality tests", "Pre-monsoon system prep"],
  },
] as const;

const TRUST_BADGES = [
  { Icon: ReceiptIcon, tone: "text-moss", title: "Transparent costing", description: "Zero hidden line-items or scope drift" },
  { Icon: GavelIcon, tone: "text-muted-aquifer", title: "Govt & PCB compliant", description: "Meets state rainwater mandates" },
  { Icon: MedalIcon, tone: "text-forest-slate", title: "25+ years durability", description: "High-density engineered polymers" },
  { Icon: UseWaterEffectivelyIcon, tone: "text-moss", title: "Rapid execution", description: "7 to 21 days standard timeline" },
] as const;

/** The End-to-End Implementation Process (4-Phase Roadmap). */
export function ImplementationProcess() {
  return (
    <section className="border-b border-muted-aquifer/20 bg-light-aquifer-canvas py-16 sm:py-24">
      <Container>
        <div className="mb-12 max-w-2xl text-left">
          <span className="inline-block rounded-[4px] bg-moss/10 border border-moss/20 px-3 py-1 font-mono text-xs font-medium text-moss">
            Standardized execution
          </span>
          <h2 className="mt-3 font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-deep-aquifer tracking-tight leading-[1.2]">
            The end-to-end implementation process
          </h2>
          <p className="mt-3 text-base font-normal font-body-primary leading-relaxed text-deep-aquifer">
            We handle every technical detail from the initial site audit to
            long-term maintenance, ensuring a frictionless experience,
            transparent pricing, and lasting return on investment.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PHASES.map(({ n, tone, labelTone, title, description, deliverables }) => (
            <div key={n} className="flex flex-col justify-between rounded-[4px] border border-muted-aquifer/20 bg-white p-6">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className={`font-mono text-xs font-medium ${labelTone}`}>
                    Phase {n}
                  </span>
                  <div className={`flex size-8 items-center justify-center rounded-[2px] font-mono text-xs font-bold ${tone}`}>
                    {n}
                  </div>
                </div>
                <h3 className="mb-2 font-headline-h3 text-[24px] font-medium text-slate-900 leading-[1.3]">{title}</h3>
                <p className="mb-4 text-base font-normal font-body-primary text-slate-600 leading-relaxed">{description}</p>
              </div>
              <div className="flex flex-col gap-1 font-mono text-xs text-slate-600">
                <span className={`font-semibold ${labelTone}`}>Deliverables:</span>
                {deliverables.map((d) => (
                  <span key={d}>• {d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[4px] border border-muted-aquifer/20 bg-white p-6 lg:p-8">
          <div className="grid grid-cols-2 gap-6 text-left md:grid-cols-4">
            {TRUST_BADGES.map(({ Icon, tone, title, description }) => (
              <div key={title} className="flex flex-col items-start gap-1">
                <Icon className={`size-6.5 ${tone}`} />
                <span className="font-medium text-slate-900">{title}</span>
                <span className="text-base font-normal font-body-primary text-slate-600 leading-relaxed">{description}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
