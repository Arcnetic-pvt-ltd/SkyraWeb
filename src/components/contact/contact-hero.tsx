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
    <section className="relative overflow-hidden bg-ink pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 size-96 -translate-x-1/2 rounded-full bg-brand-teal/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-1/3 size-72 rounded-full bg-brand-green/10 blur-3xl"
      />

      <Container className="relative z-10 text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-elevated px-4 py-1.5 font-mono text-xs font-medium text-slate-300 shadow-sm">
          <span
            aria-hidden="true"
            className="size-2 animate-pulse rounded-full bg-emerald-400"
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
