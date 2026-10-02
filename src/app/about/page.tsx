import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, WHATSAPP_HREF } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Mission · Skyra",
  description:
    "Skyra designs rainwater harvesting and groundwater recharge systems across South India. Based in Kalamassery, Kerala.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 py-4 text-left">
      {/* Editorial Header */}
      <section className="flex flex-col gap-4">
        <div className="text-skyra-label text-[#748D8C]">
          Skyra · Mission
        </div>
        <h1 className="text-skyra-h1 text-[#1D293B] margin-0">
          Rainwater harvesting and groundwater recharge across India
        </h1>
        <p className="text-skyra-body text-[#1D293B]/85 max-w-2xl margin-0">
          Skyra designs harvesting and recharge systems that catch rainfall where it falls, and put it back where it belongs — underground, where it lasts.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-8 flex flex-col gap-5">
        <div className="text-skyra-label text-[#7D9D3D]">
          Our Story
        </div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          Engineered in Kalamassery, built for South India
        </h2>
        <p className="text-skyra-body text-[#1D293B]/85 margin-0 max-w-2xl">
          Across South India, monsoon rain often runs straight off hard roofs and paved courtyards into drains before the soil can absorb it. Skyra builds filtration shafts and recharge pits that direct this runoff directly into subsoil layers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-skyra-body">
          <div className="border-l-2 border-[#7D9D3D] pl-3">
            <span className="font-semibold text-[#1D293B]">Plain and specific:</span> We measure your property carefully and explain what will be done in simple, clear terms.
          </div>
          <div className="border-l-2 border-[#7D9D3D] pl-3">
            <span className="font-semibold text-[#1D293B]">Verified standards:</span> Systems designed according to IS 15797:2008 national guidelines.
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="flex flex-col gap-6">
        <div className="text-skyra-label text-[#748D8C]">
          Core Principles
        </div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          What drives our engineering work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="skyra-card flex flex-col gap-3">
            <div className="text-skyra-label text-[#748D8C]">01 · Geology first</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">Site-specific analysis</h3>
            <p className="text-skyra-body text-[#1D293B]/80 margin-0">
              We test soil absorption rates and well depths before proposing any recharge chamber size or filter media layout.
            </p>
          </div>

          <div className="skyra-card flex flex-col gap-3">
            <div className="text-skyra-label text-[#748D8C]">02 · Long-term resilience</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">Passive infiltration</h3>
            <p className="text-skyra-body text-[#1D293B]/80 margin-0">
              Gravity-fed systems engineered to operate quietly for decades with minimal maintenance requirements.
            </p>
          </div>

          <div className="skyra-card flex flex-col gap-3">
            <div className="text-skyra-label text-[#748D8C]">03 · Full transparency</div>
            <h3 className="text-skyra-h3 text-[#1D293B] margin-0">Clear written quotes</h3>
            <p className="text-skyra-body text-[#1D293B]/80 margin-0">
              You receive a written engineering plan and fixed quote before work starts on site.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Reach */}
      <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-8 flex flex-col gap-5">
        <div className="text-skyra-label text-[#7D9D3D]">
          Regional Coverage
        </div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          Active across South India
        </h2>
        <p className="text-skyra-body text-[#1D293B]/85 margin-0 max-w-2xl">
          Our engineering team operates across active corridors in Kerala, Karnataka, and Telangana, working with residential communities, IT parks, and logistics facilities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-skyra-body">
          <div className="border-l-2 border-[#7D9D3D] pl-3">
            <span className="font-semibold text-[#1D293B]">Kochi Hub:</span> Kalamassery engineering desk and coastal hydrology testing.
          </div>
          <div className="border-l-2 border-[#7D9D3D] pl-3">
            <span className="font-semibold text-[#1D293B]">Bengaluru:</span> Hard-rock aquifer recharge and compliance systems.
          </div>
          <div className="border-l-2 border-[#7D9D3D] pl-3">
            <span className="font-semibold text-[#1D293B]">Hyderabad:</span> Campus rainwater harvesting and industrial runoff management.
          </div>
        </div>
      </section>

      {/* Office and Location */}
      <section className="flex flex-col gap-6">
        <div className="text-skyra-label text-[#748D8C]">
          Office and Location
        </div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          Skyra engineering labs
        </h2>
        <div className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 flex flex-col gap-4 text-skyra-body">
          <div className="border-b border-[#1D293B]/10 pb-3">
            <span className="font-semibold text-[#1D293B]">ADDRESS:</span>{" "}
            {CONTACT.address}
          </div>
          <div className="border-b border-[#1D293B]/10 pb-3">
            <span className="font-semibold text-[#1D293B]">PHONE:</span>{" "}
            {CONTACT.phoneDisplay}
          </div>
          <div>
            <span className="font-semibold text-[#1D293B]">EMAIL:</span>{" "}
            {CONTACT.email}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-8 flex flex-col gap-4">
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          Book a site survey for your property
        </h2>
        <p className="text-skyra-body text-[#1D293B]/80 margin-0 max-w-xl">
          Talk with us to assess your property's percolation potential and groundwater recharge capability.
        </p>
        <div className="pt-2 flex flex-wrap gap-4">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="skyra-btn-primary"
          >
            Book a site survey
          </a>
          <Link href="/contact" className="skyra-btn-secondary">
            Send us a message
          </Link>
        </div>
      </section>
    </div>
  );
}
