"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/nav";

import { SkyraLogo } from "@/components/layout/skyra-logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

  const scrollToTop = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="h-16 max-w-5xl mx-auto rounded-full bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(29,41,59,0.06)] border border-muted-aquifer/15 px-4 sm:px-6 flex items-center justify-between transition-all duration-300">
        <Link
          className="flex items-center gap-3 transition-opacity hover:opacity-85 text-deep-aquifer"
          href="/"
          onClick={scrollToTop}
        >
          <SkyraLogo className="text-deep-aquifer" />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={scrollToTop}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "transition-colors tracking-tight text-deep-aquifer font-medium"
                    : "font-button-text text-body-sm text-deep-aquifer/65 hover:text-deep-aquifer transition-colors tracking-tight"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="hidden sm:inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-button-text text-[13px] px-4 py-2.5 rounded-full transition-all duration-300 tracking-tight hover:shadow-[0_4px_20px_rgba(125,157,61,0.35)] active:scale-[0.98]"
            href="/contact"
            onClick={scrollToTop}
          >
            Start a Conversation
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-deep-aquifer hover:bg-surface-container/50 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-x-4 top-24 z-50 rounded-2xl bg-white/95 backdrop-blur-2xl p-6 shadow-2xl border border-muted-aquifer/20 flex flex-col gap-5">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={scrollToTop}
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? "text-deep-aquifer font-semibold"
                      : "text-deep-aquifer/70 hover:text-deep-aquifer"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-muted-aquifer/15">
            <Link
              className="w-full inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white font-button-text text-[14px] py-3 rounded-full transition-all"
              href="/contact"
              onClick={scrollToTop}
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

