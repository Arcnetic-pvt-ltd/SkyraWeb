import Image from "next/image";

/** One card in the "Solutions for every space" grid. Source: Figma node 1:141 (Cards 1-6). */
export function SolutionCard({
  image,
  badge,
  title,
  description,
}: {
  image: string;
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-ink backdrop-blur-sm">
          {badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h4 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-brand-teal">
            {title}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
        </div>
        <div className="mt-4 flex items-center border-t border-slate-100 pt-4 text-xs font-bold text-brand-teal transition-colors group-hover:text-brand-green">
          Learn more →
        </div>
      </div>
    </div>
  );
}
