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
    tagTone: "bg-muted-aquifer",
    name: "Jane Doe",
    role: "Co-Founder & Chief Executive Officer",
    bio: "With over a decade of experience in sustainable business scaling, Jane leads the strategic vision of Skyra, ensuring our solutions reach the communities that need them most.",
    FooterIcon: CheckCircleIcon,
    footer: "Policy & strategic scalability",
  },
  {
    initials: "JS",
    tag: "Fluid Dynamics • R&D",
    tagTone: "bg-moss",
    name: "John Smith",
    role: "Co-Founder & Head of Engineering",
    bio: "John brings deep technical expertise in fluid dynamics and civil integration, designing robust rainwater harvesting systems tailored to complex geographical layouts.",
    FooterIcon: BuildingIcon,
    footer: "Civil infrastructure systems",
  },
  {
    initials: "JS",
    tag: "Operations • Delivery",
    tagTone: "bg-moss",
    name: "Jane Smith",
    role: "Co-Founder & Director of Operations",
    bio: "Focused on seamless execution, Jane oversees our end-to-end implementation process, ensuring every project is delivered on time, with total transparency.",
    FooterIcon: WrenchIcon,
    footer: "Field logistics & quality control",
  },
  {
    initials: "JD",
    tag: "Aquifer Restoration",
    tagTone: "bg-moss",
    name: "John Doe",
    role: "Co-Founder & Sustainability Lead",
    bio: "Driving our environmental impact, John ensures that every system we build actively contributes to local groundwater restoration and ecological balance.",
    FooterIcon: LeafIcon,
    footer: "Hydrologic environmental impact",
  },
] as const;

export function TheTeam() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-medium text-muted-aquifer">Leadership &amp; expertise</span>
          <h2 className="mt-2 font-headline-h2 text-[28px] sm:text-[36px] font-semibold tracking-tight text-white">
            The team behind the vision
          </h2>
          <p className="mt-3 font-body-primary text-base font-normal leading-relaxed text-slate-300">
            Skyra is led by a team of passionate engineers, sustainability
            experts, and innovators dedicated to building a water-secure
            future.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TEAM.map(({ initials, tag, tagTone, name, role, bio, FooterIcon, footer }) => (
            <div key={`${name}-${role}`} className="flex flex-col justify-between rounded-[4px] bg-ink-elevated p-6 border border-white/10">
              <div>
                <div className="flex aspect-square w-full flex-col items-center justify-center rounded-[4px] bg-white/5 border border-white/5">
                  <div className="flex size-16 items-center justify-center rounded-[6px] bg-ink border border-white/10 text-xl font-bold text-muted-aquifer">
                    {initials}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 font-mono text-xs font-medium text-slate-400">
                    <span aria-hidden="true" className={`size-2 rounded-full ${tagTone}`} />
                    {tag}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-white">{name}</h3>
                  <p className="mt-1 font-mono text-xs font-medium text-muted-aquifer">{role}</p>
                  <p className="mt-3 font-body-primary text-base font-normal leading-relaxed text-slate-300">{bio}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-xs font-medium text-slate-400">
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
