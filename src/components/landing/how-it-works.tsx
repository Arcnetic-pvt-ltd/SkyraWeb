import { Container } from "@/components/ui/container";

const STEPS = [
  {
    n: "01",
    title: "Assess",
    description: "Site inspection & rainfall catchment analysis",
  },
  {
    n: "02",
    title: "Design",
    description: "Custom hydraulic sizing & 3D pipe layout",
  },
  {
    n: "03",
    title: "Build",
    description: "Procure food-grade tanks & filter hardware",
  },
  {
    n: "04",
    title: "Install",
    description: "Professional civil, plumbing & electrical fit",
  },
  {
    n: "05",
    title: "Commission",
    description: "Water lab testing & handover training",
  },
  {
    n: "06",
    title: "Maintain",
    description: "Filter flushes, upgrades & support",
  },
] as const;

/** How SkyRa Works (Process Strip). Source: Figma node 1:311. */
export function HowItWorks() {
  return (
    <section className="border-y border-slate-200 bg-white py-16">
      <Container>
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
            How SkyRa Works
          </span>
          <h3 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            A simple process. A lasting impact.
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {STEPS.map(({ n, title, description }) => (
            <div
              key={n}
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-3 flex size-12 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-100 text-sm font-extrabold text-brand-green shadow-sm transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                {n}
              </div>
              <h5 className="text-sm font-bold text-slate-900">{title}</h5>
              <p className="mt-1 text-xs text-slate-500">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
