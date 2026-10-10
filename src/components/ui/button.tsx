import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondary-teal" | "dark";

const VARIANT_CLASSES: Record<Variant, string> = {
  // Main site survey & primary CTA button — Deep Aquifer / Moss accent
  primary:
    "bg-deep-aquifer text-light-aquifer-canvas hover:bg-forest-slate focus-visible:outline-deep-aquifer border border-transparent shadow-sm",
  // Secondary CTA button with subtle border
  secondary:
    "border border-muted-aquifer/30 bg-white text-deep-aquifer hover:bg-slate-50 focus-visible:outline-deep-aquifer shadow-xs",
  // Moss accent CTA button
  "secondary-teal":
    "bg-moss text-deep-aquifer hover:bg-moss/90 focus-visible:outline-moss font-semibold border border-transparent shadow-sm",
  // Dark button variant
  dark: "bg-deep-aquifer text-white hover:bg-forest-slate focus-visible:outline-deep-aquifer border border-transparent shadow-sm",
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
  const sizeClass = size === "md" ? "px-6 py-3 min-h-[44px] text-button-text font-button-text gap-2.5" : "px-4 py-2.5 min-h-[44px] text-xs font-button-text gap-2";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center rounded-[6px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${sizeClass} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}

