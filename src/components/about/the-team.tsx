import { Container } from "@/components/ui/container";
import { CheckCircleIcon, BuildingIcon, WrenchIcon, LeafIcon } from "@/components/icons/service-icons";

const TEAM = [
  {
    initials: "JD",
    tag: "Executive Council",
    name: "Jane Doe",
    role: "Co-Founder & Chief Executive Officer",
    bio: "With over a decade of experience in sustainable business scaling, Jane leads the strategic vision of Skyra, ensuring our solutions reach the communities that need them most.",
    FooterIcon: CheckCircleIcon,
    footer: "Policy & strategic scalability",
  },
  {
    initials: "JS",
    tag: "Fluid Dynamics • R&D",
    name: "John Smith",
    role: "Co-Founder & Head of Engineering",
    bio: "John brings deep technical expertise in fluid dynamics and civil integration, designing robust rainwater harvesting systems tailored to complex geographical layouts.",
    FooterIcon: BuildingIcon,
    footer: "Civil infrastructure systems",
  },
  {
    initials: "JS",
    tag: "Operations • Delivery",
    name: "Jane Smith",
    role: "Co-Founder & Director of Operations",
    bio: "Focused on precise execution, Jane oversees our end-to-end implementation process, ensuring every project is delivered on time, with total transparency.",
    FooterIcon: WrenchIcon,
    footer: "Field logistics & quality control",
  },
  {
    initials: "JD",
    tag: "Aquifer Restoration",
    name: "John Doe",
    role: "Co-Founder & Sustainability Lead",
    bio: "Driving our environmental impact, John ensures that every system we build actively contributes to local groundwater restoration and ecological balance.",
    FooterIcon: LeafIcon,
    footer: "Hydrologic environmental impact",
  },
] as const;

export function TheTeam() {
  return (
    <section className="bg-[#F8FCFE] py-14 lg:py-20 border-b border-muted-aquifer/15">
      <Container>
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-moss">Leadership &amp; expertise</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-deep-aquifer sm:text-3xl">
            The team behind the vision
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700">
            Skyra is led by a team of passionate engineers, sustainability
            experts, and innovators dedicated to building a water-secure
            future.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TEAM.map(({ initials, tag, name, role, bio, FooterIcon, footer }) => (
            <div key={`${name}-${role}`} className="flex flex-col justify-between rounded-[4px] bg-white p-6 border border-muted-aquifer/20 shadow-xs">
              <div>
                <div className="flex aspect-square w-full flex-col items-center justify-center rounded-[4px] bg-[#F1F7F9] border border-muted-aquifer/15">
                  <div className="flex size-16 items-center justify-center rounded-[4px] bg-moss/10 text-lg font-bold text-moss">
                    {initials}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-moss">
                    <span aria-hidden="true" className="size-2 rounded-[2px] bg-moss" />
                    {tag}
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-base font-bold text-deep-aquifer">{name}</h3>
                  <p className="mt-0.5 text-xs font-semibold text-moss">{role}</p>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600">{bio}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-muted-aquifer/20 pt-3.5 text-xs text-slate-500">
                <FooterIcon className="size-4 text-moss" />
                {footer}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

