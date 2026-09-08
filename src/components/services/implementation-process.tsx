import { Container } from "@/components/ui/container";
import { ReceiptIcon, GavelIcon, MedalIcon } from "@/components/icons/service-icons";
import { UseWaterEffectivelyIcon } from "@/components/icons/solution-icons";

const PHASES = [
  {
    n: "01",
    tone: "bg-brand-teal/20 text-brand-teal",
    labelTone: "text-brand-teal",
    title: "Assess & Design",
    description: "Comprehensive site inspection, catchment runoff calculation, soil percolation testing, water quality analysis, and custom 3D capacity planning.",
    deliverables: ["Hydro-geological Survey", "Certified CAD Layout"],
  },
  {
    n: "02",
    tone: "bg-brand-green/20 text-brand-green",
    labelTone: "text-brand-green",
    title: "Build & Install",
    description: "Procurement of food-grade, corrosion-resistant tanks, UV/multimedia filtration modules, followed by precision civil, plumbing, and electrical installation.",
    deliverables: ["IS/ISO Grade Equipment", "Zero-Disruption Civil Work"],
  },
  {
    n: "03",
    tone: "bg-sky-600/20 text-sky-600",
    labelTone: "text-sky-600",
    title: "Commission",
    description: "Rigorous hydraulic pressure testing, flow validation, water potability validation, and comprehensive handover training for facility teams.",
    deliverables: ["Potability Lab Certificate", "As-Built Operation Manual"],
  },
  {
    n: "04",
    tone: "bg-brand-green/20 text-brand-green",
    labelTone: "text-brand-green",
    title: "Maintain",
    description: "Dedicated periodic maintenance, sensor calibration, automated filter flushing, water quality audits, and priority on-demand technical support.",
    deliverables: ["Bi-Annual Quality Tests", "Pre-Monsoon System Prep"],
  },
] as const;

const TRUST_BADGES = [
  { Icon: ReceiptIcon, tone: "text-brand-green", title: "Transparent Costing", description: "Zero hidden line-items or scope drift" },
  { Icon: GavelIcon, tone: "text-brand-teal", title: "Govt & PCB Compliant", description: "Meets state rainwater mandates" },
  { Icon: MedalIcon, tone: "text-sky-600", title: "25+ Years Durability", description: "High-density engineered polymers" },
  { Icon: UseWaterEffectivelyIcon, tone: "text-brand-green", title: "Rapid Execution", description: "7 to 21 days standard timeline" },
] as const;

/** The End-to-End Implementation Process (4-Phase Roadmap). */
export function ImplementationProcess() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 lg:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-green">
            Standardized Execution
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            The End-to-End Implementation Process
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            We handle every technical detail from the initial site audit to
            long-term maintenance, ensuring a frictionless experience,
            transparent pricing, and lasting return on investment.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PHASES.map(({ n, tone, labelTone, title, description, deliverables }) => (
            <div key={n} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-shadow hover:shadow-lg">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className={`text-xs font-bold uppercase tracking-widest ${labelTone}`}>
                    Phase {n}
                  </span>
                  <div className={`flex size-10 items-center justify-center rounded-full text-sm font-bold ${tone}`}>
                    {n}
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mb-4 text-sm text-slate-600">{description}</p>
              </div>
              <div className="flex flex-col gap-1 text-sm text-slate-500">
                <span className={`font-semibold ${labelTone}`}>Deliverables:</span>
                {deliverables.map((d) => (
                  <span key={d}>• {d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-300 bg-slate-100 p-6 shadow-sm lg:p-8">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {TRUST_BADGES.map(({ Icon, tone, title, description }) => (
              <div key={title} className="flex flex-col items-center gap-1">
                <Icon className={`size-6.5 ${tone}`} />
                <span className="font-semibold text-slate-900">{title}</span>
                <span className="text-sm text-slate-600">{description}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
