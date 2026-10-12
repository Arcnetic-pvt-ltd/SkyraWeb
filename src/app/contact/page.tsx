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
      <section className="relative w-full overflow-hidden bg-linear-to-b from-[#dceef8] via-[#e8f4fa] to-[#f2f8fc] pt-28 pb-16 sm:pt-32 sm:pb-24">
        {/* Soft organic ripple ring graphic */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg className="absolute top-12 right-10 w-96 h-96 text-muted-aquifer/10" fill="none" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="80" stroke="currentColor" strokeDasharray="3 6" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeDasharray="6 8" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="font-technical-label text-[13px] text-forest-slate uppercase tracking-wider font-semibold">
                    Direct hydrological consultation
                  </span>
                </div>
                <h1 className="font-headline-hero text-headline-hero-mobile sm:text-headline-hero text-deep-aquifer leading-[1.08] tracking-tight">
                  Start your water resilience journey
                </h1>
                <p className="mt-5 font-body-large text-body-large text-deep-aquifer/85 leading-relaxed font-normal">
                  Tell us a bit about your property, and we’ll show you what’s possible — no pressure, just a conversation.
                </p>
              </div>

              {/* Studio & Direct Connect Details */}
              <div className="pt-8 lg:pt-0 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0 text-forest-slate border border-muted-aquifer/20 shadow-xs">
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
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0 text-forest-slate border border-muted-aquifer/20 shadow-xs">
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
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0 text-forest-slate border border-muted-aquifer/20 shadow-xs">
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
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shrink-0 text-moss border border-muted-aquifer/20 shadow-xs">
                    <WhatsAppIcon className="size-[19px] text-moss" />
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
              <div className="rounded-xl bg-white/90 backdrop-blur-xl p-4 sm:p-5 border border-muted-aquifer/20 shadow-[0_8px_30px_rgba(29,41,59,0.03)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-moss shrink-0"></span>
                  <span className="font-mono text-xs text-deep-aquifer/70 font-medium">
                    Follow our field studies &amp; research
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <a
                    aria-label="YouTube"
                    className="h-9 w-9 rounded-lg bg-light-aquifer-canvas hover:bg-deep-aquifer hover:text-white text-deep-aquifer/75 transition-all duration-300 flex items-center justify-center border border-muted-aquifer/20 hover:border-deep-aquifer"
                    href="https://youtube.com/@skyrawater"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="YouTube"
                  >
                    <YouTubeIcon className="h-4 w-4" />
                  </a>
                  <a
                    aria-label="Instagram"
                    className="h-9 w-9 rounded-lg bg-light-aquifer-canvas hover:bg-deep-aquifer hover:text-white text-deep-aquifer/75 transition-all duration-300 flex items-center justify-center border border-muted-aquifer/20 hover:border-deep-aquifer"
                    href="https://instagram.com/skyrawater"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Instagram"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    aria-label="Facebook"
                    className="h-9 w-9 rounded-lg bg-light-aquifer-canvas hover:bg-deep-aquifer hover:text-white text-deep-aquifer/75 transition-all duration-300 flex items-center justify-center border border-muted-aquifer/20 hover:border-deep-aquifer"
                    href="https://facebook.com/skyrawater"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="Facebook"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a
                    aria-label="LinkedIn"
                    className="h-9 w-9 rounded-lg bg-light-aquifer-canvas hover:bg-deep-aquifer hover:text-white text-deep-aquifer/75 transition-all duration-300 flex items-center justify-center border border-muted-aquifer/20 hover:border-deep-aquifer"
                    href="https://linkedin.com/company/skyrawater"
                    rel="noopener noreferrer"
                    target="_blank"
                    title="LinkedIn"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                  </a>
                  <a
                    aria-label="X (formerly Twitter)"
                    className="h-9 w-9 rounded-lg bg-light-aquifer-canvas hover:bg-deep-aquifer hover:text-white text-deep-aquifer/75 transition-all duration-300 flex items-center justify-center border border-muted-aquifer/20 hover:border-deep-aquifer"
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
        </div>
      </section>

    </div>
  );
}

