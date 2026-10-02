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
    <section className="bg-light-aquifer-canvas py-20 border-b border-muted-aquifer/20" id="solutions">
      <Container>
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <Eyebrow color="green">The Skyra solution</Eyebrow>
          <h2 className="text-3xl font-extrabold tracking-tight text-deep-aquifer sm:text-4xl lg:text-5xl">
            Integrated water solutions for a sustainable future.
          </h2>
          <p className="text-base leading-relaxed text-deep-aquifer/75 sm:text-lg">
            Skyra helps properties manage, harvest, recharge and use water more
            effectively — from rooftop to groundwater. Built on trust, engineering
            precision, and true long-term value.
          </p>
          <CtaButton href="#services-grid" variant="primary" size="sm" icon={<ChevronDownIcon className="size-4 text-white" />} className="flex-row-reverse">
            Explore solutions
          </CtaButton>
        </div>

        {/* Capability Feature Badges / Highlights */}
        <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CAPABILITIES.map(({ label, Icon }) => (
            <div key={label} className="flex flex-col items-center justify-center gap-2 rounded-[4px] border border-muted-aquifer/20 bg-white p-4 text-center shadow-xs">
              <div className="flex size-9 items-center justify-center rounded-[4px] bg-slate-100 text-deep-aquifer">
                <Icon className="size-5" />
              </div>
              <span className="text-xs font-bold text-deep-aquifer">{label}</span>
            </div>
          ))}
        </div>

        {/* Services Grid: Solutions for Every Space */}
        <div className="border-t border-muted-aquifer/15 pt-4" id="services-grid">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-moss">Our services</span>
              <h3 className="mt-1 text-2xl font-extrabold text-deep-aquifer sm:text-3xl">
                Solutions for every space.
              </h3>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-semibold text-deep-aquifer/70">
              {SECTORS.map((sector, i) => (
                <span key={sector} className="contents">
                  <span className="font-bold text-deep-aquifer">{sector}</span>
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
