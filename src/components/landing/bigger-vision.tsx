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
    <section className="relative overflow-hidden border-b border-[#203e63]/40 bg-linear-to-b from-[#0a1727] via-[#0f2137] to-[#142944] py-16 sm:py-24 text-white" id="vision">
      {/* Subtle Rainfall Overlay Element */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none overflow-hidden select-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="visionRainPattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <line x1="20" y1="0" x2="10" y2="35" stroke="#748D8C" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="12 18" />
              <line x1="70" y1="40" x2="60" y2="75" stroke="#7D9D3D" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="10 20" />
              <line x1="110" y1="20" x2="100" y2="55" stroke="#86b5db" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="8 16" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#visionRainPattern)" className="animate-subtle-rain" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <Eyebrow color="green">The bigger vision</Eyebrow>
            <h2 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 text-white leading-[1.2] tracking-tight">
              A future where every drop has a purpose.
            </h2>
            <p className="max-w-xl text-base font-normal font-body-primary leading-relaxed text-slate-300">
              Skyra starts in Kerala, and grows across India — helping homes,
              businesses and communities build water security and a healthier,
              drought-resilient planet.
            </p>
            <div className="pt-4">
              <CtaButton href="#contact" icon={<ArrowRightIcon className="size-4" />} className="flex-row-reverse" size="sm">
                Our vision &amp; mission
              </CtaButton>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <VisionPillar
              icon={<CheckIcon className="size-5 text-muted-aquifer" />}
              tone="bg-muted-aquifer/10"
              title="Conserve water"
              description="Prevent precious freshwater from ending up as polluted stormwater drainage."
            />
            <VisionPillar
              icon={<HarvestRainwaterIcon className="size-5 text-moss" />}
              tone="bg-moss/10"
              title="Recharge groundwater"
              description="Actively replenish subterranean tables to eliminate summer well drought."
            />
            <VisionPillar
              icon={<CommunityIcon className="size-5 text-muted-aquifer" />}
              tone="bg-muted-aquifer/10"
              title="Build sustainable communities"
              description="Decentralize water security for self-sufficient neighborhoods and farms."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
