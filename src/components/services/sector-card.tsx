"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import Link from "next/link";

export function SectorCard({
  image,
  icon,
  badgeTone,
  eyebrow,
  title,
  description,
  linkLabel,
  targetHref = "/contact",
}: {
  image: string;
  icon: ReactNode;
  badgeTone: string;
  eyebrow: string;
  title: string;
  description: string;
  linkLabel: string;
  targetHref?: string;
}) {
  return (
    <div className="flex h-full flex-col justify-between overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-5 shadow-xs">
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[4px] bg-slate-100 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover"
        />

        {/* Badge Tag */}
        <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-[4px] border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${badgeTone}`}>
          {icon}
          <span>{eyebrow}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-headline-h3 text-lg font-bold text-deep-aquifer tracking-tight mb-2">
            {title}
          </h3>
          <p className="font-body-sm text-xs leading-relaxed text-deep-aquifer/75 mb-5">
            {description}
          </p>
        </div>

        {/* Link / Action Tag */}
        <div className="pt-3 border-t border-muted-aquifer/15 flex items-center justify-between">
          <span className="font-technical-label text-xs font-semibold text-moss">
            {linkLabel}
          </span>
          <Link
            href={targetHref}
            className="size-7 rounded-[4px] bg-deep-aquifer text-white transition-colors flex items-center justify-center"
            aria-label={`Inquire about ${title}`}
          >
            <span className="material-symbols-outlined text-[15px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
