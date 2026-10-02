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
      <div className="h-16 max-w-5xl mx-auto rounded-[6px] bg-white border border-muted-aquifer/20 px-4 sm:px-6 flex items-center justify-between transition-colors shadow-xs">
        <Link
          className="flex items-center gap-3 transition-opacity hover:opacity-85 text-deep-aquifer"
          href="/"
          onClick={scrollToTop}
        >
          <SkyraLogo className="text-deep-aquifer" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
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
                    ? "transition-colors text-deep-aquifer font-semibold text-[15px]"
                    : "text-[15px] text-deep-aquifer/75 hover:text-deep-aquifer transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="hidden sm:inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white text-[14px] px-4 py-2.5 rounded-[6px] transition-colors font-medium"
            href="/contact"
            onClick={scrollToTop}
          >
            Book a site survey
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-[6px] text-deep-aquifer hover:bg-slate-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-x-4 top-24 z-50 rounded-[6px] bg-white p-6 shadow-lg border border-muted-aquifer/20 flex flex-col gap-5">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={scrollToTop}
                  className={`text-[15px] transition-colors ${
                    isActive
                      ? "text-deep-aquifer font-semibold"
                      : "text-deep-aquifer/75 hover:text-deep-aquifer"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-muted-aquifer/15">
            <Link
              className="w-full inline-flex items-center justify-center bg-deep-aquifer hover:bg-forest-slate text-white text-[14px] py-3 rounded-[6px] transition-colors font-medium"
              href="/contact"
              onClick={scrollToTop}
            >
              Book a site survey
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

