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

export function OurReach() {
  return (
    <section className="bg-[#F8FCFE] py-14 text-deep-aquifer lg:py-20 border-b border-muted-aquifer/15">
      <Container>
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-moss">Strategic expansion</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-deep-aquifer sm:text-3xl">
            Our reach: rooted in South India, scaling nationally
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            We are proudly rooted in South India, understanding the unique
            climatic, soil, and geographical challenges of the Western Ghats
            and Deccan Plateau.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-7">
            <p className="text-sm font-bold text-deep-aquifer uppercase tracking-wider">Core focus areas</p>
            {REGIONS.map(({ tag, title, description }) => (
              <div key={tag} className="rounded-[4px] bg-white p-6 border border-muted-aquifer/20 shadow-xs">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-moss">{tag}</span>
                    <h4 className="mt-1 text-base font-semibold text-deep-aquifer">{title}</h4>
                  </div>
                  <span className="flex-shrink-0 rounded-[4px] bg-moss/10 px-2.5 py-1 text-xs font-semibold text-moss">
                    Active node
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          {/* National Vision Blueprint Card */}
          <div className="lg:col-span-5">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[4px] bg-[#F1F7F9] p-7 border border-muted-aquifer/20 shadow-xs">
              <div>
                <div className="flex size-10 items-center justify-center rounded-[4px] bg-moss/10 text-moss">
                  <GlobeIcon className="size-5" />
                </div>
                <span className="mt-5 block text-xs font-bold uppercase tracking-widest text-moss">
                  Pan-India mandate
                </span>
                <h3 className="mt-1 text-xl font-bold text-deep-aquifer">National vision</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                  Operating with a Pan-India scope, bringing sustainable
                  rainwater harvesting and groundwater recharge solutions to
                  properties across the country.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Scaling proven decentralized water technology to
                  drought-prone industrial corridors, agricultural belts, and
                  residential developments nationwide.
                </p>

                <div className="mt-5 rounded-[4px] bg-white p-4 border border-muted-aquifer/20">
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-600">
                    <span>Network topology</span>
                    <span className="font-semibold text-moss">Live strata sync</span>
                  </div>
                  <svg className="h-14 w-full text-moss" fill="none" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 45 C 50 15, 70 50, 110 30 C 150 10, 180 40, 220 20 C 250 5, 275 35, 295 15"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                    <circle cx="110" cy="30" fill="currentColor" r="4" />
                    <circle cx="220" cy="20" fill="#7D9D3D" r="4" />
                    <circle cx="295" cy="15" fill="currentColor" r="4" />
                  </svg>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-muted-aquifer/20 pt-4 text-xs font-semibold text-moss">
                <FlowIcon className="size-4" />
                Centralized Diagnostics &bull; Decentralized Deployment
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

