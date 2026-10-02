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
    <div className="flex items-start gap-4 rounded-[4px] border border-muted-aquifer/20 bg-white p-5 shadow-xs">
      <div className={`mt-0.5 flex size-9 flex-shrink-0 items-center justify-center rounded-[4px] bg-slate-100 text-deep-aquifer`}>
        {icon}
      </div>
      <div>
        <h4 className="text-base font-bold text-deep-aquifer">{title}</h4>
        <p className="mt-1 text-xs leading-relaxed text-deep-aquifer/75">{description}</p>
      </div>
    </div>
  );
}
