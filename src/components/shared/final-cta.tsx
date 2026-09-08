import { Container } from "@/components/ui/container";
import { CtaButton } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { ArrowRightIcon } from "@/components/icons/arrow-right-icon";
import { LocationPinIcon, MailIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from "@/components/icons/contact-icons";
import { WHATSAPP_HREF, CONTACT } from "@/lib/nav";

const SOCIAL_LINKS = [
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
  { label: "LinkedIn", Icon: LinkedInIcon, href: "#" },
  { label: "YouTube", Icon: YouTubeIcon, href: "#" },
] as const;

/**
 * Final Conversion Call To Action (Contact Box). Source: Figma node 1:508.
 * Social links have no real destinations in the design — "#" placeholders.
 */
export function FinalCta() {
  return (
    <section className="bg-linear-to-b from-ink to-ink-elevated py-20 text-white" id="contact">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                <span className="block">Your water problem</span>
                <span className="block">has a solution.</span>
              </h2>
              <p className="text-xl font-bold text-brand-green sm:text-2xl">{"Let's find it together."}</p>
              <p className="max-w-lg text-sm text-slate-300 sm:text-base">
                Get an on-site feasibility evaluation, custom storage simulation,
                and transparent quote from our engineering consultants.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <CtaButton href={WHATSAPP_HREF} external icon={<WhatsAppIcon className="size-4" />}>
                  Chat on WhatsApp
                </CtaButton>
                <CtaButton
                  href={WHATSAPP_HREF}
                  external
                  variant="secondary-teal"
                  size="sm"
                  icon={<ArrowRightIcon className="size-4" />}
                  className="flex-row-reverse font-semibold"
                >
                  Request a Consultation
                </CtaButton>
              </div>
            </div>

            {/* Physical Location & Contact Micro-details */}
            <div className="space-y-4 rounded-2xl border border-white/10 bg-black/30 p-6 sm:p-8 lg:col-span-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-teal/20 text-brand-teal">
                  <LocationPinIcon className="size-4" />
                </div>
                <div className="text-xs text-slate-300 sm:text-sm">
                  <p className="font-bold text-white">SkyRa Headquarters</p>
                  <p className="mt-0.5 leading-relaxed">{CONTACT.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 pt-3 text-xs text-slate-300 sm:text-sm">
                <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-green/20 text-brand-green">
                  <MailIcon className="size-4" />
                </div>
                <div>
                  <p className="font-bold text-white">Direct Advisory</p>
                  <p className="mt-0.5">
                    {CONTACT.email} / {CONTACT.phoneDisplay}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-3 text-slate-400">
                <span className="text-xs">Follow:</span>
                {SOCIAL_LINKS.map(({ label, Icon, href }) => (
                  <a key={label} aria-label={label} href={href} className="transition-colors hover:text-brand-teal">
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
