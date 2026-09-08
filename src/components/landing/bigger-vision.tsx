import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaButton } from "@/components/ui/button";
import { VisionPillar } from "@/components/landing/vision-pillar";
import { CheckIcon, CommunityIcon } from "@/components/icons/vision-icons";
import { HarvestRainwaterIcon } from "@/components/icons/solution-icons";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";

/** The Bigger Vision Section (Dark Theme). Source: Figma node 1:460. */
export function BiggerVision() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink py-24 text-white" id="vision">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <Eyebrow color="green">The Bigger Vision</Eyebrow>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              A future where every drop has a purpose.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              SkyRa starts in Kerala, and grows across India — helping homes,
              businesses and communities build water security and a healthier,
              drought-resilient planet.
            </p>
            <div className="pt-4">
              <CtaButton href="#contact" icon={<ArrowRightIcon className="size-4" />} className="flex-row-reverse" size="sm">
                Our Vision &amp; Mission
              </CtaButton>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <VisionPillar
              icon={<CheckIcon className="size-5 text-brand-teal" />}
              tone="bg-brand-teal/20"
              title="Conserve Water"
              description="Prevent precious freshwater from ending up as polluted stormwater drainage."
            />
            <VisionPillar
              icon={<HarvestRainwaterIcon className="size-5 text-brand-green" />}
              tone="bg-brand-green/20"
              title="Recharge Groundwater"
              description="Actively replenish subterranean tables to eliminate summer well drought."
            />
            <VisionPillar
              icon={<CommunityIcon className="size-5 text-sky-600" />}
              tone="bg-sky-600/20"
              title="Build Sustainable Communities"
              description="Decentralize water security for self-sufficient neighborhoods and farms."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
