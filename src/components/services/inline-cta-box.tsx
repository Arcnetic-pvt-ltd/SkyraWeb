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
      className="flex flex-col items-center gap-6 rounded-[4px] border border-muted-aquifer/20 bg-white p-6 sm:p-8 shadow-xs md:flex-row md:justify-between"
    >
      <div className="flex items-center gap-4">
        <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-[4px] bg-slate-100 text-deep-aquifer">
          {icon}
        </div>
        <div>
          <h3 className="text-base font-bold text-deep-aquifer">
            {title}
          </h3>
          <p className="text-xs text-deep-aquifer/75 leading-relaxed">{description}</p>
        </div>
      </div>
      <CtaButton href={href} external={external} variant="primary" icon={buttonIcon} className="w-full flex-shrink-0 md:w-auto">
        {buttonLabel}
      </CtaButton>
    </div>
  );
}
