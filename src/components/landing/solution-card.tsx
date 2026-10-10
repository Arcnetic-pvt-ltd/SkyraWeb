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
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-mono text-xs font-medium text-deep-aquifer backdrop-blur-sm">
          {badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="font-headline-h3 text-[24px] font-medium text-deep-aquifer transition-colors group-hover:text-brand-teal leading-[1.3]">
            {title}
          </h3>
          <p className="mt-2 text-base font-normal font-body-primary leading-relaxed text-deep-aquifer">{description}</p>
        </div>
        <div className="mt-4 flex items-center border-t border-slate-100 pt-4 font-button-text text-sm font-semibold text-brand-teal transition-colors group-hover:text-brand-green">
          Learn more →
        </div>
      </div>
    </div>
  );
}
