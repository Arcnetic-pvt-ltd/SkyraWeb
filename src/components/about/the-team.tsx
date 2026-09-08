import { Container } from "@/components/ui/container";
import { CheckCircleIcon, BuildingIcon, WrenchIcon, LeafIcon } from "@/components/icons/service-icons";

/**
 * The Team Behind the Vision.
 *
 * TODO: the HTML reference build for this page has no real team data — it
 * explicitly labels this a "Sleek Skeleton Avatar Placeholder (Geometric
 * Minimalist Wireframe)" with generic names (Jane Doe / John Smith / Jane
 * Smith / John Doe) and initials-only avatars. Kept as-is since it's the
 * given content, but this needs real founder photos, names, and bios
 * before launch.
 */
const TEAM = [
  {
    initials: "JD",
    tag: "Executive Council",
    tagTone: "bg-brand-teal",
    name: "Jane Doe",
    role: "Co-Founder & Chief Executive Officer",
    bio: "With over a decade of experience in sustainable business scaling, Jane leads the strategic vision of SkyRa, ensuring our solutions reach the communities that need them most.",
    FooterIcon: CheckCircleIcon,
    footer: "Policy & Strategic Scalability",
  },
  {
    initials: "JS",
    tag: "Fluid Dynamics • R&D",
    tagTone: "bg-brand-green",
    name: "John Smith",
    role: "Co-Founder & Head of Engineering",
    bio: "John brings deep technical expertise in fluid dynamics and civil integration, designing robust rainwater harvesting systems tailored to complex geographical layouts.",
    FooterIcon: BuildingIcon,
    footer: "Civil Infrastructure Systems",
  },
  {
    initials: "JS",
    tag: "Operations • Delivery",
    tagTone: "bg-emerald-400",
    name: "Jane Smith",
    role: "Co-Founder & Director of Operations",
    bio: "Focused on seamless execution, Jane oversees our end-to-end implementation process, ensuring every project is delivered on time, with total transparency.",
    FooterIcon: WrenchIcon,
    footer: "Field Logistics & Quality Control",
  },
  {
    initials: "JD",
    tag: "Aquifer Restoration",
    tagTone: "bg-brand-green",
    name: "John Doe",
    role: "Co-Founder & Sustainability Lead",
    bio: "Driving our environmental impact, John ensures that every system we build actively contributes to local groundwater restoration and ecological balance.",
    FooterIcon: LeafIcon,
    footer: "Hydrologic Environmental Impact",
  },
] as const;

export function TheTeam() {
  return (
    <section className="bg-ink py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Leadership &amp; Expertise</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Team Behind the Vision
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            SkyRa is led by a team of passionate engineers, sustainability
            experts, and innovators dedicated to building a water-secure
            future.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TEAM.map(({ initials, tag, tagTone, name, role, bio, FooterIcon, footer }) => (
            <div key={`${name}-${role}`} className="flex flex-col justify-between rounded-2xl bg-ink-elevated p-6 shadow-lg transition-colors hover:bg-white/[0.07]">
              <div>
                <div className="flex aspect-square w-full flex-col items-center justify-center rounded-xl bg-white/5">
                  <div className="flex size-20 items-center justify-center rounded-full bg-ink text-xl font-bold text-brand-teal shadow-inner">
                    {initials}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    <span aria-hidden="true" className={`size-2 rounded-full ${tagTone}`} />
                    {tag}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white">{name}</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-teal">{role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{bio}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-slate-400">
                <FooterIcon className="size-4.5" />
                {footer}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
