import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { NAV_LINKS } from "@/lib/nav";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "KSPCB Compliance", href: "#" },
] as const;

/**
 * Global Footer. Source: Figma node 1:563.
 *
 * Legal links (Privacy/Terms/KSPCB Compliance) have no destination pages
 * in this design or in the four-page scope — left as "#" placeholders
 * rather than linking to pages that don't exist. TODO: wire these up once
 * those pages exist.
 *
 * Responsive assumption (Phase 4): both rows go from a 3-part horizontal
 * layout to a stacked, centered column below `md`.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <Logo variant="footer" />

          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-px w-6 bg-brand-green/60" />
            <span className="font-mono text-[11px] tracking-widest text-slate-400">
              FROM SKY, TO LIFE
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-slate-300">
            © 2026 SkyRa Water Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
