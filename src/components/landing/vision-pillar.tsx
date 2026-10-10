import type { ReactNode } from "react";

/** One card in "Three Vision Value Pillars". Source: Figma node 1:460. */
export function VisionPillar({
  icon,
  tone,
  title,
  description,
}: {
  icon: ReactNode;
  tone: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className={`mt-1 flex size-10 flex-shrink-0 items-center justify-center rounded-xl ${tone}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-headline-h3 text-lg sm:text-[24px] font-medium text-white leading-snug">{title}</h3>
        <p className="mt-2 text-base font-normal font-body-primary text-slate-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
