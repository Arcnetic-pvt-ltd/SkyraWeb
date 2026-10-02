import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found · Skyra",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6 py-16 text-left max-w-xl">
      <div className="text-skyra-label text-[#748D8C]">
        404 · Error
      </div>
      <h1 className="text-skyra-h1 text-[#1D293B] margin-0">
        Page not found
      </h1>
      <p className="text-skyra-body text-[#1D293B]/85 margin-0">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="pt-2">
        <Link href="/" className="skyra-btn-primary">
          Return to home page
        </Link>
      </div>
    </div>
  );
}
