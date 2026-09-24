import type { Metadata } from "next";
import { ConsultationIntakeForm } from "@/components/contact/consultation-intake-form";
import { WHATSAPP_HREF, CONTACT } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Start Your Water Resilience Journey | Skyra Contact",
  description:
    "Schedule a direct hydrological consultation with Skyra's civil hydrologists. Kalamassery engineering labs, priority desk, and direct WhatsApp support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-light-aquifer-canvas pt-28 pb-12 lg:pt-32 lg:pb-20">
        {/* Ambient gentle drifting water atmosphere blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-secondary-container/40 blur-[120px] animate-pulse"></div>
          <div className="absolute top-1/3 -right-48 h-[640px] w-[640px] rounded-full bg-surface-container-low/70 blur-[140px] animate-pulse"></div>
          <div className="absolute bottom-10 left-1/4 h-[420px] w-[420px] rounded-full bg-tertiary-fixed-dim/20 blur-[110px] animate-pulse"></div>
          <svg className="absolute top-12 right-10 w-96 h-96 text-muted-aquifer/10 select-none" fill="none" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="80" stroke="currentColor" strokeDasharray="3 6" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeDasharray="6 8" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-6">
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2.5 mb-5">
                  <span className="inline-block h-2 w-2 rounded-full bg-moss"></span>
                  <span className="font-button-text text-body-sm text-forest-slate tracking-normal font-semibold">
                    Direct Hydrological Consultation
                  </span>
                </div>
                <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer leading-[1.08] tracking-tight">
                  Start Your Water Resilience Journey
                </h1>
                <p className="mt-6 font-body-large text-body-large text-deep-aquifer/75 leading-relaxed font-light">
                  Tell us a bit about your property, and we’ll show you what’s possible — no pressure, just a conversation.
                </p>

                <div className="mt-10 rounded-xl bg-surface-container/50 p-6 backdrop-blur-md border border-muted-aquifer/15">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-moss text-[22px]">
                      water_drop
                    </span>
                    <span className="font-headline-h3 text-body-primary font-semibold text-deep-aquifer">
                      An easy, collaborative process
                    </span>
                  </div>
                  <p className="mt-2 font-body-sm text-body-sm text-deep-aquifer/70 leading-relaxed">
                    Whether you oversee a multi-acre campus or are securing water autonomy for a regional estate, our team listens first, models aquifer capacity second, and designs purely around your geography.
                  </p>
                </div>
              </div>

              {/* Studio & Direct Connect Details */}
              <div className="mt-12 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-forest-slate border border-muted-aquifer/15">
                    <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                  </div>
                  <div>
                    <span className="font-headline-h3 text-[15px] font-semibold text-deep-aquifer block">
                      Kalamassery Engineering Labs
                    </span>
                    <span className="font-body-sm text-body-sm text-deep-aquifer/65">
                      {CONTACT.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-forest-slate border border-muted-aquifer/15">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <div>
                    <span className="font-headline-h3 text-[15px] font-semibold text-deep-aquifer block">
                      Priority Desk
                    </span>
                    <a
                      className="font-body-sm text-body-sm text-forest-slate hover:text-deep-aquifer transition-colors font-medium"
                      href={`tel:${CONTACT.phone}`}
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                    <span className="font-body-sm text-[12px] text-deep-aquifer/50 block mt-0.5">
                      Mon – Fri, 9:00 AM – 6:00 PM IST
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-forest-slate border border-muted-aquifer/15">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <span className="font-headline-h3 text-[15px] font-semibold text-deep-aquifer block">
                      Email Inquiries
                    </span>
                    <a
                      className="font-body-sm text-body-sm text-forest-slate hover:text-deep-aquifer transition-colors font-medium"
                      href={`mailto:${CONTACT.email}`}
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-secondary-container/60 shadow-sm flex items-center justify-center shrink-0 text-forest-slate border border-muted-aquifer/15">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <div>
                    <span className="font-headline-h3 text-[15px] font-semibold text-deep-aquifer block">
                      Chat on WhatsApp
                    </span>
                    <a
                      className="inline-flex items-center gap-1.5 font-button-text text-body-sm text-moss hover:text-forest-slate transition-colors font-medium"
                      href={WHATSAPP_HREF}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Connect directly on WhatsApp
                      <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Intake Form */}
            <div className="lg:col-span-7">
              <ConsultationIntakeForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Photo Banner */}
      <section className="w-full bg-surface-container/30 py-16 border-t border-muted-aquifer/15">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-muted-aquifer/15 flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  alt="Passive Hydrology"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_gYGxOvSB1xUcnePzJOQ1xkSIQRH2EIRAX8-A1qZMobI01idGo4Qmwy1VulPUA6D7IRfmUdELa2MTVvAs_9Kr9kqJ0dVf9BEZRWjUgEET_n-FAWLGcwRNeezF86nKm7YgcRmisWf4WMrlc1ZcqnPevzWSmFgp27DfAJ-q7nBE-4hSnKdn3QQEAm4CbnMzx81oGUFvvUOqRc6VAeTPyfilhcTaY4js9ie5ren3J3bD"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <span className="font-button-text text-[12px] uppercase text-moss font-semibold tracking-wider">
                  Passive Hydrology
                </span>
                <p className="mt-2 font-body-sm text-body-sm text-deep-aquifer/80">
                  Every drop guided into soil strata naturally, maintaining steady subsoil hydration.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-muted-aquifer/15 flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  alt="Subterranean Infiltration"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnJWw-UYy7RpoNvRlYwfQyENjCN9B4Kbl-4nTw03IH9OMMddfHAI4iHK7I98gMdDhIvz1zgnAU6T77URBqw9syC0agA6ocbso62gWwnfrRa0YUPR8YOIzIZ-N6zQnkGuBt1VDoNayCtsCTCfArSz3mWmyimPIdVaOHXBQ1P8pvMGxIWDxdY8-H3Q25Enqnw91RBPPsuHLeysu2RG89fkTQla1VUGRWZJYIw5-gEoOy"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <span className="font-button-text text-[12px] uppercase text-moss font-semibold tracking-wider">
                  Subterranean Infiltration
                </span>
                <p className="mt-2 font-body-sm text-body-sm text-deep-aquifer/80">
                  Quiet modular recharge chambers designed to outlast concrete retention pits.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-muted-aquifer/15 flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  alt="Kochi Research Hub"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzts_ScykQaZoNLIAf96IPK1L0aF2UM9vjffPj2NbOqZZ6Ipv-BI6D5iHB5nb9qpy7zgsRMrHxAPoqgwqsyl_UX3oKS_GqdF9Klq2khjUaj-UelP6Q0TDadsATLzVkzplylWcGRUOCINxakZ0FXIuXhchnQbs7kQC93Eevl69RI-OHQW4rqC7ZtJtQCwlVuroP_cDKpcK7BdCYVdRgrwZiKgGtA2anacMRbaO769Sx"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <span className="font-button-text text-[12px] uppercase text-moss font-semibold tracking-wider">
                  Kochi Research Hub
                </span>
                <p className="mt-2 font-body-sm text-body-sm text-deep-aquifer/80">
                  Our engineering desk translates local precipitation records into reliable year-round yield.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

