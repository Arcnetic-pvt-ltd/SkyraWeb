import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_HREF } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Skyra Rainsink · Skyra",
  description:
    "Skyra Rainsink: Groundwater recharge pit featuring six concrete rings with silex and activated carbon layers.",
};

export default function RainsinkPage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 py-4 text-left">
      {/* Header */}
      <section className="flex flex-col gap-4">
        <div className="text-skyra-label text-[#748D8C]">
          CATCHMENT 120 M² · RECHARGE PIT 2
        </div>
        <h1 className="text-skyra-h1 text-[#1D293B] margin-0">
          Groundwater recharge for apartment communities
        </h1>
        <p className="text-skyra-body text-[#1D293B]/85 max-w-2xl margin-0">
          Skyra Rainsink is a modular groundwater recharge unit engineered to capture heavy monsoon downpours and filter water prior to subsoil aquifer entry.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="skyra-btn-primary"
          >
            Book a site survey
          </a>
          <Link href="/services" className="skyra-btn-secondary">
            Explore all solutions
          </Link>
        </div>
      </section>

      {/* Specifications Card */}
      <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-8 flex flex-col gap-6">
        <div className="text-skyra-label text-[#7D9D3D]">
          Technical Specifications
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-skyra-body">
          <div className="border-b border-[#1D293B]/10 pb-4">
            <span className="font-semibold text-[#1D293B] block mb-1">FILTRATION MEDIA</span>
            Six concrete rings with silex aggregate and activated carbon layers for natural clarification.
          </div>

          <div className="border-b border-[#1D293B]/10 pb-4">
            <span className="font-semibold text-[#1D293B] block mb-1">NATIONAL STANDARD</span>
            Designed strictly to IS 15797:2008, the national guideline for artificial groundwater recharge.
          </div>

          <div className="border-b border-[#1D293B]/10 pb-4 md:border-b-0">
            <span className="font-semibold text-[#1D293B] block mb-1">CATCHMENT RATING</span>
            Calculated for rooftops and paved areas from 120 m² per unit up to commercial campus scale.
          </div>

          <div>
            <span className="font-semibold text-[#1D293B] block mb-1">MAINTENANCE SCHEDULE</span>
            Simple annual check and silt chamber cleaning before the monsoon season starts.
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="flex flex-col gap-6">
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          How Rainsink is installed
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="skyra-card flex flex-col gap-3">
            <div className="text-skyra-label text-[#748D8C]">STEP 01</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">Site assessment</h3>
            <p className="text-skyra-body text-[#1D293B]/80 margin-0">
              We test soil absorption rate and verify groundwater depth at your site.
            </p>
          </div>

          <div className="skyra-card flex flex-col gap-3">
            <div className="text-skyra-label text-[#748D8C]">STEP 02</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">Chamber placing</h3>
            <p className="text-skyra-body text-[#1D293B]/80 margin-0">
              Concrete rings and filter media are placed with minimal disruption to surrounding paving.
            </p>
          </div>

          <div className="skyra-card flex flex-col gap-3">
            <div className="text-skyra-label text-[#748D8C]">STEP 03</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">Inlet connection</h3>
            <p className="text-skyra-body text-[#1D293B]/80 margin-0">
              Stormwater drain lines are connected with silt traps to complete the system.
            </p>
          </div>
        </div>
      </section>

      {/* Survey CTA */}
      <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-8 flex flex-col gap-4">
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          Book a site survey for your property
        </h2>
        <p className="text-skyra-body text-[#1D293B]/80 margin-0 max-w-xl">
          We measure your roof, test how fast the soil absorbs water, and check your well. You receive a written report and quote before any work starts.
        </p>
        <div className="pt-2">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="skyra-btn-primary"
          >
            Book a site survey
          </a>
        </div>
      </section>
    </div>
  );
}
