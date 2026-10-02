"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, WHATSAPP_HREF } from "@/lib/nav";
import { SkyraLogo } from "@/components/layout/skyra-logo";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#F4F7F6] border-b border-[#1D293B]/10 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 text-[#1D293B] no-underline">
          <SkyraLogo />
        </Link>

        {/* Desktop Navigation Menu (4 items + CTA) */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium no-underline transition-colors ${
                  isActive
                    ? "text-[#1D293B] font-semibold"
                    : "text-[#1D293B]/70 hover:text-[#1D293B]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="skyra-btn-primary"
          >
            Chat on WhatsApp
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1D293B] bg-transparent border-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#1D293B]/10 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[16px] font-medium no-underline ${
                  isActive ? "text-[#1D293B] font-semibold" : "text-[#1D293B]/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="skyra-btn-primary text-center"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
