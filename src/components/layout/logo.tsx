import Link from "next/link";

/**
 * SkyRa wordmark. Source: Figma node 1:593 (header, 30px) and 1:566
 * (footer, 24px) — same two-tone mark ("Sky" brand-teal, "Ra" emerald-500)
 * with a small accent dot, just at two sizes and two trailing-space tint
 * colors.
 */
export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  const isHeader = variant === "header";
  return (
    <Link
      href="/"
      aria-label="SkyRa homepage"
      className={`relative inline-flex items-center font-extrabold tracking-tight ${
        isHeader ? "text-[30px] leading-9" : "text-2xl leading-8"
      }`}
    >
      <span className="text-brand-teal">Sky</span>
      <span className="text-emerald-500">Ra</span>
      <span className={isHeader ? "text-slate-100" : "text-slate-400"}>&nbsp;</span>
      <span
        aria-hidden="true"
        className={`absolute top-1/2 -translate-y-1/2 size-1.5 rounded-full bg-emerald-500 ${
          isHeader ? "left-23.75" : "left-19.25"
        }`}
      />
    </Link>
  );
}
