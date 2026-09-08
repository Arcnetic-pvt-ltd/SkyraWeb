import { Container } from "@/components/ui/container";

/** Contact Hero. Source: HTML reference build. */
export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-12 lg:pt-38">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 size-96 -translate-x-1/2 rounded-full bg-brand-teal/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-1/3 size-72 rounded-full bg-brand-green/10 blur-3xl"
      />

      <Container className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-elevated px-4 py-1.5 text-xs font-medium text-slate-300 shadow-sm">
          <span
            aria-hidden="true"
            className="size-2 animate-pulse rounded-full bg-emerald-400"
          />
          Contact SkyRa • From Sky, To Life
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Your water problem{" "}
          <span className="bg-gradient-to-br from-brand-teal to-emerald-500 bg-clip-text text-transparent">
            has a solution.
          </span>
          <br className="hidden sm:inline" />
          {"Let's find it together."}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          We are ready to help you capture, conserve, and secure your{" "}
          {"property's"} water future. Reach out to our engineering team to
          schedule a site assessment or ask a question.
        </p>
      </Container>
    </section>
  );
}
