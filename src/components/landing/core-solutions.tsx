import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaButton } from "@/components/ui/button";
import { SolutionCard } from "@/components/landing/solution-card";
import {
  ManageWaterIcon,
  HarvestRainwaterIcon,
  RechargeGroundwaterIcon,
  ConserveWaterIcon,
  WaterSecurityIcon,
  UseWaterEffectivelyIcon,
  ChevronDownIcon,
} from "@/components/icons/solution-icons";

const CAPABILITIES = [
  { label: "Manage Water", Icon: ManageWaterIcon, bg: "bg-emerald-50", tone: "text-brand-green" },
  { label: "Harvest Rainwater", Icon: HarvestRainwaterIcon, bg: "bg-cyan-50", tone: "text-brand-teal" },
  { label: "Recharge Groundwater", Icon: RechargeGroundwaterIcon, bg: "bg-teal-50", tone: "text-teal-600" },
  { label: "Conserve Water", Icon: ConserveWaterIcon, bg: "bg-blue-50", tone: "text-blue-600" },
  { label: "Improve Water Security", Icon: WaterSecurityIcon, bg: "bg-emerald-50", tone: "text-brand-green" },
  { label: "Use Water Effectively", Icon: UseWaterEffectivelyIcon, bg: "bg-cyan-50", tone: "text-brand-teal" },
] as const;

const SECTORS = ["Residential", "Commercial", "Industrial", "Agricultural"] as const;

const SOLUTIONS = [
  {
    image: "/images/solution-residential.jpg",
    badge: "Residential",
    title: "Residential",
    description: "Tailored rooftop rainwater harvesting and sub-surface filtration for homes & villas.",
  },
  {
    image: "/images/solution-commercial.jpg",
    badge: "Commercial",
    title: "Commercial",
    description: "High-volume rainwater capture systems for office parks, malls, institutions.",
  },
  {
    image: "/images/solution-industrial.jpg",
    badge: "Industrial",
    title: "Industrial",
    description: "Heavy-duty runoff management, process water recycling & groundwater recharge.",
  },
  {
    image: "/images/dew-drops-leaves.jpg",
    badge: "Agricultural",
    title: "Agricultural",
    description: "Farm pond runoff collection, open-well rejuvenation, soil aquifer stabilization.",
  },
  {
    image: "/images/solution-filtration.jpg",
    badge: "Filtration",
    title: "Water Filtration Systems",
    description: "Automatic backwash media filters, UV sterilizers, and carbon filters ensuring potable and kitchen-safe water.",
  },
  {
    image: "/images/solution-maintenance.jpg",
    badge: "Maintenance",
    title: "Maintenance & Monitoring",
    description: "System maintenance, filter inspections, and certified water quality lab testing.",
  },
] as const;

/** Core Solutions Ecosystem. Source: Figma node 1:141. */
export function CoreSolutions() {
  return (
    <section className="bg-slate-50 py-24" id="solutions">
      <Container>
        {/* Section Header */}
        <div className="mb-16 max-w-3xl space-y-4">
          <Eyebrow color="teal">The SkyRa Solution</Eyebrow>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Integrated water solutions for a sustainable future.
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            SkyRa helps properties manage, harvest, recharge and use water more
            effectively — from rooftop to groundwater. Built on trust, engineering
            precision, and true long-term value.
          </p>
          <CtaButton href="#services-grid" variant="dark" size="sm" icon={<ChevronDownIcon className="size-4 text-brand-green" />} className="flex-row-reverse">
            Explore Services
          </CtaButton>
        </div>

        {/* Capability Feature Badges / Highlights */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CAPABILITIES.map(({ label, Icon, bg, tone }) => (
            <div key={label} className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white p-4 text-center shadow-sm">
              <div className={`flex size-10 items-center justify-center rounded-full ${bg} ${tone}`}>
                <Icon className="size-5" />
              </div>
              <span className="text-xs font-bold text-slate-800">{label}</span>
            </div>
          ))}
        </div>

        {/* Services Grid: Solutions for Every Space */}
        <div className="border-t border-slate-200 pt-4" id="services-grid">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Our Services</span>
              <h3 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Solutions for every space.
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-500">
              {SECTORS.map((sector, i) => (
                <span key={sector} className="contents">
                  <span className="font-bold text-brand-teal">{sector}</span>
                  {i < SECTORS.length - 1 && <span aria-hidden="true">•</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((s) => (
              <SolutionCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
