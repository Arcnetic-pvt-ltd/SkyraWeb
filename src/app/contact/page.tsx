import type { Metadata } from "next";
import { ConsultationIntakeForm } from "@/components/contact/consultation-intake-form";
import { WHATSAPP_HREF, CONTACT, SOCIAL_LINKS } from "@/lib/nav";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import {
  YouTubeIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons/social-icons";


export const metadata: Metadata = {
  title: "Start Your Water Resilience Journey | Skyra Contact",
  description:
    "Schedule a direct hydrological consultation with Skyra's civil hydrologists. Kalamassery engineering labs, priority desk, and direct WhatsApp support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-light-aquifer-canvas pt-28 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-6">
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2.5 mb-5">
                  <span className="inline-block h-2 w-2 rounded-full bg-moss"></span>
                  <span className="font-mono text-xs font-medium text-forest-slate">
                    Direct hydrological consultation
                  </span>
                </div>
                <h1 className="font-headline-hero text-[38px] sm:text-5xl lg:text-[56px] font-bold text-deep-aquifer leading-[1.08] tracking-tight">
                  Start your water resilience journey
                </h1>
                <p className="mt-6 font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
                  Tell us a bit about your property, and we’ll show you what’s possible — no pressure, just a conversation.
                </p>

                <div className="mt-10 rounded-[4px] bg-white p-6 border border-muted-aquifer/20">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-moss text-[22px]">
                      water_drop
                    </span>
                    <span className="font-headline-h3 text-[24px] font-medium leading-[1.3] text-deep-aquifer">
                      An easy, collaborative process
                    </span>
                  </div>
                  <p className="mt-2 font-body-primary text-base font-normal text-deep-aquifer leading-relaxed">
                    Whether you oversee a multi-acre campus or are securing water autonomy for a regional estate, our team listens first, models aquifer capacity second, and designs purely around your geography.
                  </p>
                </div>
              </div>

              {/* Studio & Direct Connect Details */}
              <div className="mt-12 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-[6px] bg-white flex items-center justify-center shrink-0 text-deep-aquifer border border-muted-aquifer/20">
                    <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                  </div>
                  <div>
                    <span className="font-headline-h3 text-base font-medium text-deep-aquifer block">
                      Kalamassery engineering labs
                    </span>
                    <span className="font-mono text-xs text-deep-aquifer/65">
                      {CONTACT.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-[6px] bg-white flex items-center justify-center shrink-0 text-deep-aquifer border border-muted-aquifer/20">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <div>
                    <span className="font-headline-h3 text-base font-medium text-deep-aquifer block">
                      Priority desk
                    </span>
                    <a
                      className="font-mono text-xs text-forest-slate hover:text-deep-aquifer transition-colors font-medium block"
                      href={`tel:${CONTACT.phone}`}
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                    <span className="font-mono text-xs text-deep-aquifer/50 block mt-0.5">
                      Mon – Fri, 9:00 AM – 6:00 PM IST
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-[6px] bg-white flex items-center justify-center shrink-0 text-deep-aquifer border border-muted-aquifer/20">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <span className="font-headline-h3 text-base font-medium text-deep-aquifer block">
                      Email inquiries
                    </span>
                    <a
                      className="font-mono text-xs text-forest-slate hover:text-deep-aquifer transition-colors font-medium block"
                      href={`mailto:${CONTACT.email}`}
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-[6px] bg-white flex items-center justify-center shrink-0 text-deep-aquifer border border-muted-aquifer/20">
                    <WhatsAppIcon className="size-[19px] text-deep-aquifer" />
                  </div>
                  <div>
                    <span className="font-headline-h3 text-base font-medium text-deep-aquifer block">
                      Chat on WhatsApp
                    </span>
                    <a
                      className="inline-flex items-center gap-1.5 font-button-text font-semibold text-xs text-moss hover:text-forest-slate transition-colors"
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

            {/* Right Column Intake Form & Social Links */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <ConsultationIntakeForm />

              {/* Social Media Channels */}
              <div className="rounded-[4px] bg-white p-4 sm:p-5 border border-[#bcd7e8]/60 shadow-[0_2px_12px_rgba(15,35,60,0.03)] flex items-center justify-center gap-3.5 sm:gap-4">
                <a
                  aria-label="YouTube"
                  className="h-10 w-10 rounded-[6px] bg-light-aquifer-canvas hover:bg-deep-aquifer hover:text-white text-deep-aquifer/75 transition-all duration-300 flex items-center justify-center border border-muted-aquifer/20 hover:border-deep-aquifer"
                  href="https://youtube.com/@skyrawater"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="YouTube"
                >
                  <YouTubeIcon className="h-4 w-4" />
                </a>
                <a
                  aria-label="Instagram"
                  className="h-10 w-10 rounded-[6px] bg-light-aquifer-canvas hover:bg-deep-aquifer hover:text-white text-deep-aquifer/75 transition-all duration-300 flex items-center justify-center border border-muted-aquifer/20 hover:border-deep-aquifer"
                  href="https://instagram.com/skyrawater"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  aria-label="Facebook"
                  className="h-10 w-10 rounded-[6px] bg-light-aquifer-canvas hover:bg-deep-aquifer hover:text-white text-deep-aquifer/75 transition-all duration-300 flex items-center justify-center border border-muted-aquifer/20 hover:border-deep-aquifer"
                  href="https://facebook.com/skyrawater"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Facebook"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  aria-label="LinkedIn"
                  className="h-10 w-10 rounded-[6px] bg-light-aquifer-canvas hover:bg-deep-aquifer hover:text-white text-deep-aquifer/75 transition-all duration-300 flex items-center justify-center border border-muted-aquifer/20 hover:border-deep-aquifer"
                  href="https://linkedin.com/company/skyrawater"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  aria-label="X (formerly Twitter)"
                  className="h-10 w-10 rounded-[6px] bg-light-aquifer-canvas hover:bg-deep-aquifer hover:text-white text-deep-aquifer/75 transition-all duration-300 flex items-center justify-center border border-muted-aquifer/20 hover:border-deep-aquifer"
                  href="https://x.com/skyrawater"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="X"
                >
                  <XIcon className="h-4 w-4" />
                </a>
              </div>
            </div>




          </div>
        </div>
      </section>

      {/* Contextual Photo Banner */}
      <section className="w-full bg-linear-to-b from-[#edf6fa] via-[#e5f1f7] to-[#edf6fa] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-[#c8e0ee]/60">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[4px] overflow-hidden bg-white/95 border border-[#bcd7e8]/60 shadow-[0_1px_3px_rgba(20,50,80,0.03)] flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  alt="Passive Hydrology"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_gYGxOvSB1xUcnePzJOQ1xkSIQRH2EIRAX8-A1qZMobI01idGo4Qmwy1VulPUA6D7IRfmUdELa2MTVvAs_9Kr9kqJ0dVf9BEZRWjUgEET_n-FAWLGcwRNeezF86nKm7YgcRmisWf4WMrlc1ZcqnPevzWSmFgp27DfAJ-q7nBE-4hSnKdn3QQEAm4CbnMzx81oGUFvvUOqRc6VAeTPyfilhcTaY4js9ie5ren3J3bD"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <span className="font-mono text-xs text-moss font-medium">
                  Passive hydrology
                </span>
                <p className="mt-2 font-body-primary text-base font-normal text-deep-aquifer/80 leading-relaxed">
                  Every drop guided into soil strata naturally, maintaining steady subsoil hydration.
                </p>
              </div>
            </div>

            <div className="rounded-[4px] overflow-hidden bg-white/95 border border-[#bcd7e8]/60 shadow-[0_1px_3px_rgba(20,50,80,0.03)] flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  alt="Subterranean Infiltration"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnJWw-UYy7RpoNvRlYwfQyENjCN9B4Kbl-4nTw03IH9OMMddfHAI4iHK7I98gMdDhIvz1zgnAU6T77URBqw9syC0agA6ocbso62gWwnfrRa0YUPR8YOIzIZ-N6zQnkGuBt1VDoNayCtsCTCfArSz3mWmyimPIdVaOHXBQ1P8pvMGxIWDxdY8-H3Q25Enqnw91RBPPsuHLeysu2RG89fkTQla1VUGRWZJYIw5-gEoOy"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <span className="font-mono text-xs text-moss font-medium">
                  Subterranean infiltration
                </span>
                <p className="mt-2 font-body-primary text-base font-normal text-deep-aquifer/80 leading-relaxed">
                  Quiet modular recharge chambers designed to outlast concrete retention pits.
                </p>
              </div>
            </div>

            <div className="rounded-[4px] overflow-hidden bg-white/95 border border-[#bcd7e8]/60 shadow-[0_1px_3px_rgba(20,50,80,0.03)] flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  alt="Kochi Research Hub"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzts_ScykQaZoNLIAf96IPK1L0aF2UM9vjffPj2NbOqZZ6Ipv-BI6D5iHB5nb9qpy7zgsRMrHxAPoqgwqsyl_UX3oKS_GqdF9Klq2khjUaj-UelP6Q0TDadsATLzVkzplylWcGRUOCINxakZ0FXIuXhchnQbs7kQC93Eevl69RI-OHQW4rqC7ZtJtQCwlVuroP_cDKpcK7BdCYVdRgrwZiKgGtA2anacMRbaO769Sx"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <span className="font-mono text-xs text-moss font-medium">
                  Kochi research hub
                </span>
                <p className="mt-2 font-body-primary text-base font-normal text-deep-aquifer/80 leading-relaxed">
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

