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
    <section className="relative overflow-hidden bg-light-aquifer-canvas pb-16 pt-28 lg:pt-36">
      <Container className="relative z-10 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-[4px] border border-muted-aquifer/20 bg-white px-3 py-1 text-xs font-medium text-deep-aquifer shadow-xs">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-moss"
          />
          Contact Skyra · From sky, to life
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-deep-aquifer md:text-5xl lg:text-6xl max-w-3xl mx-auto">
          Your water problem has a solution.
          <br className="hidden sm:inline" />
          {" "}
          {"Let's find it together."}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-deep-aquifer/75">
          We are ready to help you capture, conserve, and secure your{" "}
          {"property's"} water future. Reach out to our engineering team to
          schedule a site assessment or ask a question.
        </p>
      </Container>
    </section>
  );
}
