import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondary-teal" | "dark";

const VARIANT_CLASSES: Record<Variant, string> = {
  // Solid brand-green pill w/ glow shadow — main WhatsApp/conversion CTA.
  primary:
    "bg-brand-green text-ink shadow-cta-glow hover:bg-emerald-400 focus-visible:outline-white",
  // Translucent white outline on dark surfaces — Hero's secondary CTA.
  secondary:
    "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 focus-visible:outline-white",
  // Teal outline on dark surfaces — Final CTA's secondary link.
  "secondary-teal":
    "border border-brand-teal/60 text-brand-teal hover:border-brand-teal hover:text-white focus-visible:outline-brand-teal",
  // Solid dark pill — "Explore Services".
  dark: "bg-ink-elevated text-white hover:bg-ink focus-visible:outline-brand-green",
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  icon,
  size = "md",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  size?: "sm" | "md";
  external?: boolean;
  className?: string;
}) {
  const sizeClass = size === "md" ? "px-6 py-3.5 text-sm gap-2.5" : "px-5 py-2.5 text-sm gap-2";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center rounded-full font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${sizeClass} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
