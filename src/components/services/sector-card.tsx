import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";

/** One card in "Sector Capabilities & Built Environments". */
export function SectorCard({
  image,
  icon,
  tone,
  eyebrow,
  title,
  description,
  linkLabel,
}: {
  image: string;
  icon: ReactNode;
  tone: string;
  eyebrow: string;
  title: string;
  description: string;
  linkLabel: string;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-ink-elevated shadow-md transition-colors hover:bg-white/[0.07]">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className={`mb-2 flex items-center gap-2 ${tone}`}>
            {icon}
            <span className="text-xs font-bold uppercase tracking-widest">{eyebrow}</span>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
          <p className="mb-4 text-sm text-slate-300">{description}</p>
        </div>
        <div className="flex items-center gap-2 pt-2 text-sm font-semibold text-brand-teal">
          {linkLabel}
          <ArrowRightIcon className="size-4" />
        </div>
      </div>
    </div>
  );
}
