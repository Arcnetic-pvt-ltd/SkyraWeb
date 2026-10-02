import type { Metadata } from "next";
import { ConsultationIntakeForm } from "@/components/contact/consultation-intake-form";
import { CONTACT } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact · Skyra",
  description:
    "Tell us about your property. Book a site survey with Skyra hydrologists across South India.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-light-aquifer-canvas pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-4">
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="inline-block h-2 w-2 rounded-full bg-moss"></span>
                  <span className="font-technical-label text-[13px] text-forest-slate uppercase tracking-wider font-semibold">
                    Site survey &amp; consultation
                  </span>
                </div>
                <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer leading-[1.08] tracking-tight">
                  Book a site survey
                </h1>
                <p className="mt-5 font-body-large text-body-large text-deep-aquifer/85 leading-relaxed font-normal">
                  Tell us about your property, and we will measure your roof, test how fast the soil absorbs water, and check your well.
                </p>

                {/* "Easy Collaborative Process" card REMOVED per specification */}
              </div>

              {/* Studio & Direct Connect Details */}
              <div className="mt-8 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-[4px] bg-white flex items-center justify-center shrink-0 text-moss border border-muted-aquifer/20 shadow-xs">
                    <span className="material-symbols-outlined text-[18px]">corporate_fare</span>
                  </div>
                  <div>
                    <span className="font-headline-h3 text-[14px] font-bold text-deep-aquifer block">
                      Engineering Office
                    </span>
                    <span className="font-body-sm text-body-sm text-slate-600">
                      {CONTACT.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-[4px] bg-white flex items-center justify-center shrink-0 text-moss border border-muted-aquifer/20 shadow-xs">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                  </div>
                  <div>
                    <span className="font-headline-h3 text-[14px] font-bold text-deep-aquifer block">
                      Priority Desk
                    </span>
                    <a
                      className="font-body-sm text-body-sm text-slate-700 hover:text-moss transition-colors font-medium"
                      href={`tel:${CONTACT.phone}`}
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                    <span className="font-body-sm text-[12px] text-slate-500 block mt-0.5">
                      Mon – Fri, 9:00 AM – 6:00 PM IST
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-[4px] bg-white flex items-center justify-center shrink-0 text-moss border border-muted-aquifer/20 shadow-xs">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </div>
                  <div>
                    <span className="font-headline-h3 text-[14px] font-bold text-deep-aquifer block">
                      Email Inquiries
                    </span>
                    <a
                      className="font-body-sm text-body-sm text-slate-700 hover:text-moss transition-colors font-medium"
                      href={`mailto:${CONTACT.email}`}
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp link under Email Inquiries REMOVED per specification */}
              </div>
            </div>

            {/* Right Column Intake Form */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <ConsultationIntakeForm />
            </div>
          </div>
        </div>
      </section>

      {/* NO SECTIONS OR CARDS APPEAR AFTER THIS PER SPECIFICATION */}
    </div>
  );
}
