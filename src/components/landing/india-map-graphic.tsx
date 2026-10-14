import Image from "next/image";

export function IndiaMapGraphic() {
  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden select-none bg-white">
      <Image
        src="/images/india-map-southern-coverage-keralam.png"
        alt="Map of India highlighting the entire states of Keralam in teal and Tamil Nadu in green, with Bangalore and Hyderabad marked"
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-contain"
        priority
      />
    </div>
  );
}
