import Link from "next/link";
import { CONTACT, WHATSAPP_HREF } from "@/lib/nav";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 py-4">
      {/* SECTION 1: HERO (Shaped by its content per Page 02) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7 flex flex-col gap-5 text-left">
          <div className="text-skyra-label text-[#748D8C]">
            Skyra · Rainwater Harvesting
          </div>
          <h1 className="text-skyra-h1 text-[#1D293B] margin-0">
            Rainwater harvesting and groundwater recharge across India
          </h1>
          <p className="text-skyra-body text-[#1D293B]/85 max-w-xl margin-0">
            We measure your roof, test how fast the soil absorbs water, and check your well. Systems engineered for logistics hubs, factories, apartment communities, and institutions.
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
              Explore solutions
            </Link>
          </div>
        </div>

        {/* Right Column: Site Survey Overview Box */}
        <div className="md:col-span-5 bg-white border border-[#1D293B]/10 rounded-[4px] p-6 flex flex-col gap-4">
          <div className="text-skyra-label text-[#748D8C]">
            Site Survey Overview
          </div>
          <div className="flex flex-col gap-3 text-skyra-body">
            <div className="border-b border-[#1D293B]/10 pb-3">
              <span className="font-semibold text-[#1D293B]">SURVEY:</span>{" "}
              Roof, soil and well checked on site
            </div>
            <div className="border-b border-[#1D293B]/10 pb-3">
              <span className="font-semibold text-[#1D293B]">DESIGN:</span>{" "}
              Written report and quote before work starts
            </div>
            <div>
              <span className="font-semibold text-[#1D293B]">INSTALL:</span>{" "}
              With little disruption
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW A SITE SURVEY WORKS (Page 02 & 06) */}
      <section className="flex flex-col gap-6 text-left border-t border-[#1D293B]/10 pt-12">
        <div className="text-skyra-label text-[#748D8C]">
          How We Work
        </div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          How a site survey works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="skyra-card flex flex-col gap-3">
            <div className="text-skyra-label text-[#7D9D3D]">01 · Measurement</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">Roof and runoff</h3>
            <p className="text-skyra-body text-[#1D293B]/80 margin-0">
              We measure catchment areas across rooftops and paved courtyards to calculate peak monsoon water volumes.
            </p>
          </div>
          <div className="skyra-card flex flex-col gap-3">
            <div className="text-skyra-label text-[#7D9D3D]">02 · Infiltration</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">Soil percolation</h3>
            <p className="text-skyra-body text-[#1D293B]/80 margin-0">
              We test subsoil absorption speeds and check well depths to determine exact recharge chamber sizing.
            </p>
          </div>
          <div className="skyra-card flex flex-col gap-3">
            <div className="text-skyra-label text-[#7D9D3D]">03 · Proposal</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">Report and quote</h3>
            <p className="text-skyra-body text-[#1D293B]/80 margin-0">
              You receive a written engineering plan and fixed cost estimate before any construction or digging begins.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SECTOR CAPABILITIES (Restyled per Page 02 & 04) */}
      <section className="flex flex-col gap-6 text-left border-t border-[#1D293B]/10 pt-12">
        <div className="text-skyra-label text-[#748D8C]">
          Sectors We Serve
        </div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          Solutions for every property type
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="skyra-card flex flex-col gap-3">
            <div className="text-skyra-label text-[#748D8C]">Industrial & Logistics</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">Factories and warehouses</h3>
            <p className="text-skyra-body text-[#1D293B]/80 margin-0">
              High-capacity recharge shafts designed for large roof areas and paved yards, helping meet statutory CGWA NOC guidelines.
            </p>
          </div>

          <div className="skyra-card flex flex-col gap-3">
            <div className="text-skyra-label text-[#748D8C]">Commercial Corridors</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">IT parks and commercial centers</h3>
            <p className="text-skyra-body text-[#1D293B]/80 margin-0">
              Subsurface infiltration networks that handle monsoon downpours without taking up surface parking or green space.
            </p>
          </div>

          <div className="skyra-card flex flex-col gap-3">
            <div className="text-skyra-label text-[#748D8C]">Residential Communities</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">Apartments and gated villas</h3>
            <p className="text-skyra-body text-[#1D293B]/80 margin-0">
              Rainsink units and filter pits that recharge open wells and groundwater tables for year-round community use.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: SKYRA RAINSINK FEATURE (Page 05) */}
      <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-8 flex flex-col gap-6 text-left">
        <div className="text-skyra-label text-[#748D8C]">
          CATCHMENT 120 M² · RECHARGE PIT 2
        </div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          Groundwater recharge for apartment communities
        </h2>
        <p className="text-skyra-body text-[#1D293B]/85 max-w-2xl margin-0">
          Skyra Rainsink uses six concrete rings with silex and activated carbon layers to filter roof runoff before it enters unconfined aquifers.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="skyra-btn-primary"
          >
            Book a site survey
          </a>
          <Link href="/products/rainsink" className="skyra-btn-secondary">
            Explore Rainsink details
          </Link>
        </div>
      </section>

      {/* SECTION 5: PROOF AND TRUST (Page 07) */}
      <section className="flex flex-col gap-6 text-left border-t border-[#1D293B]/10 pt-12">
        <div className="text-skyra-label text-[#748D8C]">
          Proof and Trust
        </div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          Facts a visitor can check
        </h2>
        <div className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 border-b border-[#1D293B]/10 pb-4 text-skyra-body">
            <div className="sm:col-span-3 text-skyra-label text-[#748D8C]">STANDARD</div>
            <div className="sm:col-span-9 text-[#1D293B]">
              Designed to IS 15797:2008, the national guideline for rainwater harvesting.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 border-b border-[#1D293B]/10 pb-4 text-skyra-body">
            <div className="sm:col-span-3 text-skyra-label text-[#748D8C]">PROCESS</div>
            <div className="sm:col-span-9 text-[#1D293B]">
              Written report and quote before any work starts on site.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 border-b border-[#1D293B]/10 pb-4 text-skyra-body">
            <div className="sm:col-span-3 text-skyra-label text-[#748D8C]">OFFICE</div>
            <div className="sm:col-span-9 text-[#1D293B]">
              {CONTACT.address}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 text-skyra-body">
            <div className="sm:col-span-3 text-skyra-label text-[#748D8C]">FIGURE</div>
            <div className="sm:col-span-9 text-[#1D293B]">
              3,100 mm average yearly rain in Kerala (Source: Kerala State Planning Board).
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT FORM (Page 10) */}
      <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-10 flex flex-col gap-6 text-left">
        <div>
          <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
            Tell us about your property
          </h2>
          <p className="text-skyra-body text-[#1D293B]/70 margin-0 mt-1">
            We'll reply on WhatsApp within one working day.
          </p>
        </div>

        <form action={WHATSAPP_HREF} target="_blank" className="flex flex-col gap-4 max-w-xl">
          <div className="flex flex-col gap-1.5">
            <label className="text-skyra-body font-medium text-[#1D293B]">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Maya Menon"
              className="skyra-input"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-skyra-body font-medium text-[#1D293B]">WhatsApp number</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter a 10-digit phone number"
              className="skyra-input"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-skyra-body font-medium text-[#1D293B]">Location</label>
            <input
              type="text"
              name="location"
              required
              placeholder="e.g. Kalamassery, Kochi"
              className="skyra-input"
            />
          </div>

          <div className="pt-2">
            <button type="submit" className="skyra-btn-primary w-full sm:w-auto">
              Book a site survey
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
