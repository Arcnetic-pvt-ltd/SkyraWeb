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
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-muted-aquifer/15 bg-white/90 p-5 sm:p-6 shadow-[0_8px_30px_rgb(29,41,59,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-moss/40 hover:shadow-2xl">
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-container-low mb-5">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-aquifer/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

        {/* Badge Tag */}
        <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${badgeTone}`}>
          {icon}
          <span>{eyebrow}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-headline-h3 text-xl font-bold text-deep-aquifer tracking-tight mb-2 group-hover:text-forest-slate transition-colors">
            {title}
          </h3>
          <p className="font-body-sm text-xs leading-relaxed text-deep-aquifer/75 mb-6">
            {description}
          </p>
        </div>

        {/* Link / Action Tag */}
        <div className="pt-4 border-t border-muted-aquifer/15 flex items-center justify-between">
          <span className="font-technical-label text-xs font-semibold text-moss">
            {linkLabel}
          </span>
          <Link
            href={targetHref}
            className="size-8 rounded-full bg-deep-aquifer/5 text-deep-aquifer group-hover:bg-deep-aquifer group-hover:text-white transition-all flex items-center justify-center"
            aria-label={`Inquire about ${title}`}
          >
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
