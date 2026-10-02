import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found · Skyra",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-24 text-center bg-light-aquifer-canvas text-deep-aquifer">
      <div className="flex flex-col items-center max-w-md gap-6">
        <span className="font-mono text-sm font-semibold tracking-wider uppercase text-moss px-3 py-1 rounded-[4px] bg-moss/10 border border-moss/20">
          Error 404
        </span>
        <h1 className="font-headline-h2 text-headline-h2-mobile sm:text-headline-h2 font-bold tracking-tight text-deep-aquifer">
          Page not found
        </h1>
        <p className="font-body-large text-body-large text-deep-aquifer/75 leading-relaxed">
          The page you are looking for does not exist or has been moved. Explore our rainwater harvesting solutions or return home.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-[6px] bg-deep-aquifer text-white font-medium text-[15px] hover:bg-forest-slate transition-colors shadow-xs"
          >
            Return to Home
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-[6px] border border-muted-aquifer/30 bg-white text-deep-aquifer font-medium text-[15px] hover:bg-slate-50 transition-colors shadow-xs"
          >
            Book a site survey
          </Link>
        </div>
      </div>
    </div>
  );
}
