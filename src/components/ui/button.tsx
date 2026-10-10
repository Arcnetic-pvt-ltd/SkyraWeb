import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondary-teal" | "dark";

const VARIANT_CLASSES: Record<Variant, string> = {
  // Flat Deep Aquifer solid button — matches DO THIS guide.
  primary:
    "bg-deep-aquifer text-white hover:bg-forest-slate focus-visible:outline-deep-aquifer border border-transparent",
  // Flat outline on light surfaces — matches DO THIS guide.
  secondary:
    "border border-muted-aquifer/30 bg-white text-deep-aquifer hover:bg-muted-aquifer/5 focus-visible:outline-deep-aquifer",
  // Secondary outline link.
  "secondary-teal":
    "border border-muted-aquifer/30 bg-white text-deep-aquifer hover:bg-muted-aquifer/5 focus-visible:outline-deep-aquifer",
  // Solid dark button.
  dark:
    "bg-deep-aquifer text-white hover:bg-forest-slate focus-visible:outline-deep-aquifer border border-transparent",
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
  const sizeClass = size === "md" ? "px-5 py-2.5 text-sm gap-2" : "px-4 py-2 text-sm gap-1.5";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center rounded-[6px] font-medium font-button-text transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${sizeClass} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
