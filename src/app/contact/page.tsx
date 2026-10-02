import type { Metadata } from "next";
import { CONTACT, WHATSAPP_HREF } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact · Skyra",
  description:
    "Book a site survey for rainwater harvesting and groundwater recharge. Skyra office at Rajagiri Road, N. Kalamassery, Kerala.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 py-4 text-left">
      {/* Editorial Header & Contact Form (Page 10) */}
      <section className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 sm:p-10 flex flex-col gap-6 max-w-2xl">
        <div>
          <div className="text-skyra-label text-[#748D8C] mb-2">
            Skyra · Contact
          </div>
          <h1 className="text-skyra-h1 text-[#1D293B] margin-0">
            Tell us about your property
          </h1>
          <p className="text-skyra-body text-[#1D293B]/70 margin-0 mt-2">
            We'll reply on WhatsApp within one working day.
          </p>
        </div>

        <form action={WHATSAPP_HREF} target="_blank" className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-skyra-body font-medium text-[#1D293B]">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Maya Menon"
              className="skyra-input"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-skyra-body font-medium text-[#1D293B]">
              WhatsApp number
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Enter a 10-digit phone number"
              className="skyra-input"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-skyra-body font-medium text-[#1D293B]">
              Location
            </label>
            <input
              type="text"
              name="location"
              required
              placeholder="e.g. Kalamassery, Kochi"
              className="skyra-input"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <button type="submit" className="skyra-btn-primary">
              Book a site survey
            </button>
            <span className="text-skyra-body text-[14px] text-[#748D8C]">
              We'll reply on WhatsApp within one working day.
            </span>
          </div>
        </form>
      </section>

      {/* Office Address Details */}
      <section className="flex flex-col gap-6">
        <div className="text-skyra-label text-[#748D8C]">
          Office Address
        </div>
        <h2 className="text-skyra-h2 text-[#1D293B] margin-0">
          Skyra office and contact details
        </h2>
        <div className="bg-white border border-[#1D293B]/10 rounded-[4px] p-6 flex flex-col gap-4 text-skyra-body max-w-2xl">
          <div className="border-b border-[#1D293B]/10 pb-3">
            <span className="font-semibold text-[#1D293B]">ADDRESS:</span>{" "}
            {CONTACT.address}
          </div>
          <div className="border-b border-[#1D293B]/10 pb-3">
            <span className="font-semibold text-[#1D293B]">PHONE:</span>{" "}
            <a href={`tel:${CONTACT.phone}`} className="text-[#1D293B] font-medium no-underline">
              {CONTACT.phoneDisplay}
            </a>
          </div>
          <div>
            <span className="font-semibold text-[#1D293B]">EMAIL:</span>{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-[#1D293B] font-medium no-underline">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
