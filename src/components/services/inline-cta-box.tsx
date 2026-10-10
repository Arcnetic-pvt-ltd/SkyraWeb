import type { ReactNode } from "react";
import { CtaButton } from "@/components/ui/button";

/** Small inline conversion prompt reused after each service deep-dive. */
export function InlineCtaBox({
  icon,
  iconTone,
  title,
  description,
  href,
  buttonLabel,
  buttonIcon,
  external = false,
  tone = "light",
}: {
  icon: ReactNode;
  iconTone: string;
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  buttonIcon: ReactNode;
  external?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`flex flex-col items-center gap-6 rounded-2xl border p-8 shadow-sm md:flex-row md:justify-between ${
        tone === "light" ? "border-slate-200 bg-slate-50" : "border-white/10 bg-ink-elevated"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`flex size-14 flex-shrink-0 items-center justify-center rounded-full ${iconTone}`}>
          {icon}
        </div>
        <div>
          <h3 className={`font-headline-h3 text-[24px] font-medium leading-[1.3] ${tone === "light" ? "text-deep-aquifer" : "text-white"}`}>
            {title}
          </h3>
          <p className={`font-body-primary text-base font-normal leading-relaxed mt-1 ${tone === "light" ? "text-deep-aquifer/85" : "text-slate-300"}`}>{description}</p>
        </div>
      </div>
      <CtaButton href={href} external={external} variant="primary" icon={buttonIcon} className="w-full flex-shrink-0 md:w-auto">
        {buttonLabel}
      </CtaButton>
    </div>
  );
}
