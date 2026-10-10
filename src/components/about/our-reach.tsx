import { Container } from "@/components/ui/container";
import { GlobeIcon } from "@/components/icons/about-icons";
import { FlowIcon } from "@/components/icons/service-icons";

const REGIONS = [
  {
    tag: "State Hub • Kerala",
    title: "Coastal aquifer & high-precipitation systems",
    description: "High-precipitation tropical catchment, coastal aquifer recharge, flood retention detention, and saline intrusion prevention throughout Kochi, Trivandrum, and Calicut.",
  },
  {
    tag: "Industrial Corridor • Tamil Nadu",
    title: "Urban rainwater harvesting & industrial compliance",
    description: "Urban rainwater harvesting, industrial green-building regulatory compliance, and rapid infiltration deep recharge boreholes across Chennai and Coimbatore.",
  },
  {
    tag: "Tech Ecosystem • Karnataka",
    title: "Commercial tech park & campus closed-loop autonomy",
    description: "Commercial tech park stormwater capture, campus closed-loop water autonomy, and decentralized storage solutions for Bangalore and Mysore.",
  },
] as const;

/** Our Reach & Regional Footprint. */
export function OurReach() {
  return (
    <section className="bg-slate-50 py-16 text-slate-950 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-medium text-brand-teal">Strategic expansion</span>
          <h2 className="mt-2 font-headline-h2 text-[28px] sm:text-[36px] font-semibold tracking-tight text-slate-950">
            Our reach: rooted in South India, scaling nationally
          </h2>
          <p className="mt-3 font-body-primary text-base font-normal leading-relaxed text-deep-aquifer/85">
            We are proudly rooted in South India, understanding the unique
            climatic, soil, and geographical challenges of the Western Ghats
            and Deccan Plateau.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-7">
            <p className="font-headline-h3 text-[20px] font-medium text-slate-950">Core focus areas</p>
            {REGIONS.map(({ tag, title, description }) => (
              <div key={tag} className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md border border-slate-100">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs font-medium text-brand-teal">{tag}</span>
                    <h4 className="mt-1 font-headline-h3 text-[18px] sm:text-[20px] font-medium text-slate-950">{title}</h4>
                  </div>
                  <span className="flex-shrink-0 rounded-full bg-emerald-100 px-3 py-1 font-mono text-xs font-medium text-emerald-800">
                    Active node
                  </span>
                </div>
                <p className="mt-2 font-body-primary text-base font-normal leading-relaxed text-deep-aquifer/85">{description}</p>
              </div>
            ))}
          </div>

          {/* National Vision Blueprint Card */}
          <div className="lg:col-span-5">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-slate-950 p-8 text-white shadow-xl">
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-16 size-64 rounded-full bg-brand-teal/20 blur-3xl" />
              <div>
                <div className="flex size-12 items-center justify-center rounded-full bg-brand-teal/20 text-brand-teal">
                  <GlobeIcon className="size-6" />
                </div>
                <span className="mt-6 block font-mono text-xs font-medium text-brand-teal">
                  Pan-India mandate
                </span>
                <h3 className="mt-1 font-headline-h3 text-[24px] font-medium leading-[1.3] text-white">National vision</h3>
                <p className="mt-3 font-body-primary text-base font-normal leading-relaxed text-slate-300">
                  Operating with a Pan-India scope, bringing sustainable
                  rainwater harvesting and groundwater recharge solutions to
                  properties across the country.
                </p>
                <p className="mt-2 font-body-primary text-base font-normal leading-relaxed text-slate-300">
                  Scaling proven decentralized water technology to
                  drought-prone industrial corridors, agricultural belts, and
                  residential developments nationwide.
                </p>

                <div className="mt-6 rounded-lg bg-black/30 p-4 backdrop-blur-sm">
                  <div className="mb-2 flex items-center justify-between font-mono text-xs text-slate-400">
                    <span>Network topology</span>
                    <span className="font-medium text-brand-green">Live strata sync</span>
                  </div>
                  <svg className="h-16 w-full text-brand-teal" fill="none" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 45 C 50 15, 70 50, 110 30 C 150 10, 180 40, 220 20 C 250 5, 275 35, 295 15"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                    <circle cx="110" cy="30" fill="currentColor" r="4" />
                    <circle cx="220" cy="20" fill="#10b981" r="4" />
                    <circle cx="295" cy="15" fill="currentColor" r="4" />
                  </svg>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-xs font-medium text-brand-green">
                <FlowIcon className="size-5" />
                Centralized diagnostics • Decentralized deployment
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
