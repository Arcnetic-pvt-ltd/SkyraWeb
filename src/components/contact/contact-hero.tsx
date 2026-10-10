import { Container } from "@/components/ui/container";

/**
 * Contact Hero. Source: HTML reference build.
 *
 * Top padding (pt-28/pt-38) clears the fixed 80px header at every
 * breakpoint — a cross-page diff pass caught the eyebrow badge sitting
 * partially behind the header on mobile/tablet at the original pt-12.
 */
export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#0c1a2c] via-[#10233b] to-[#162c47] pt-28 sm:pt-32 pb-16 sm:pb-24">
      {/* Subtle Rainfall Overlay Element */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none overflow-hidden select-none opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contactHeroRainPattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <line x1="15" y1="0" x2="5" y2="35" stroke="#748D8C" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="12 18" />
              <line x1="65" y1="40" x2="55" y2="75" stroke="#7D9D3D" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="10 20" />
              <line x1="105" y1="20" x2="95" y2="55" stroke="#86b5db" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="8 16" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactHeroRainPattern)" className="animate-subtle-rain" />
        </svg>
      </div>

      <Container className="relative z-10 text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-[4px] border border-[#22446d] bg-[#132742] px-3 py-1 font-mono text-xs font-medium text-[#86b5db]">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-moss"
          />
          Contact Skyra • From sky, to life
        </div>

        <h1 className="max-w-4xl font-headline-hero text-[38px] sm:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight text-white">
          Your water problem has a solution.
          <br className="hidden sm:inline" />
          {" "}
          {"Let's find it together."}
        </h1>

        <p className="mt-6 max-w-2xl font-body-primary text-base font-normal leading-relaxed text-slate-300">
          We are ready to help you capture, conserve, and secure your{" "}
          {"property's"} water future. Reach out to our engineering team to
          schedule a site assessment or ask a question.
        </p>
      </Container>
    </section>
  );
}
