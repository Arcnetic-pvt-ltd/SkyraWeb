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
        <h4 className="text-base font-bold text-white">{title}</h4>
        <p className="mt-1 text-xs text-slate-300">{description}</p>
      </div>
    </div>
  );
}
