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
    <div className="group flex flex-col overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white shadow-xs transition-colors duration-200 hover:border-deep-aquifer/40">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-aquifer/60 to-transparent" />
        <span className="absolute right-3 top-3 rounded-[4px] bg-white px-2.5 py-0.5 text-[11px] font-bold text-deep-aquifer shadow-xs">
          {badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h4 className="text-base font-bold text-deep-aquifer transition-colors group-hover:text-moss">
            {title}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-deep-aquifer/75">{description}</p>
        </div>
        <div className="mt-4 flex items-center border-t border-muted-aquifer/15 pt-3 text-xs font-bold text-moss">
          Explore solution details →
        </div>
      </div>
    </div>
  );
}
