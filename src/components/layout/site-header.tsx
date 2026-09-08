"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { MenuIcon, CloseIcon } from "@/components/icons/menu-icon";
import { NAV_LINKS, WHATSAPP_HREF } from "@/lib/nav";

/**
 * Header / Navigation. Source: Figma node 1:591.
 *
 * Fixed + translucent + backdrop-blurred over the Hero, matching the
 * design's rgba(5,21,29,0.75) background and 6px blur — the Hero's own
 * 108px top padding (vs. the header's 80px height) already reserves space
 * for it, confirming it's meant to float over the hero rather than sit in
 * normal flow.
 *
 * Responsive assumption (Phase 4, not in the desktop-only Figma file):
 * nav links + CTA collapse to a hamburger below `md`, opening a
 * full-screen overlay menu.
 *
 * The blur/background/border live on an inner div, not on `<header>`
 * itself: `backdrop-filter` establishes a new containing block for
 * `position: fixed` descendants (same as `transform`/`filter`), which
 * would otherwise position the mobile overlay below relative to header's
 * own 80px box instead of the viewport, collapsing it to a sliver.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/8 bg-ink/75 backdrop-blur-[6px]">
        <Container className="flex h-20 items-center justify-between">
          <Logo variant="header" />

          <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/20 px-4 py-2 text-sm font-semibold text-brand-green shadow-sm transition-colors hover:bg-brand-green/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
          >
            <WhatsAppIcon className="size-4" />
            Chat on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex size-10 items-center justify-center rounded-full text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </Container>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col items-center gap-8 overflow-y-auto bg-ink px-6 pt-12 pb-10 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-slate-100 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/20 px-6 py-3 text-sm font-semibold text-brand-green"
          >
            <WhatsAppIcon className="size-4" />
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
