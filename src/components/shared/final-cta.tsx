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

export function FinalCta() {
  return (
    <section className="bg-[#F8FCFE] py-16 text-deep-aquifer border-t border-muted-aquifer/15" id="contact">
      <Container>
        <div className="relative overflow-hidden rounded-[4px] border border-muted-aquifer/20 bg-white p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <h2 className="font-heading-hero text-heading-md font-bold tracking-tight text-deep-aquifer">
                <span className="block">Your water problem</span>
                <span className="block text-moss">has a solution.</span>
              </h2>
              <p className="font-body-regular text-body-base text-slate-600 max-w-lg">
                Get an on-site feasibility evaluation, custom storage simulation,
                and transparent quote from our engineering consultants.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <CtaButton href={WHATSAPP_HREF} external icon={<WhatsAppIcon className="size-4" />}>
                  Book a site survey
                </CtaButton>
                <CtaButton
                  href={WHATSAPP_HREF}
                  external
                  variant="secondary"
                  size="md"
                  icon={<WhatsAppIcon className="size-4" />}
                >
                  Chat on WhatsApp
                </CtaButton>
              </div>
            </div>

            {/* Physical Location & Contact Micro-details */}
            <div className="space-y-4 rounded-[4px] border border-muted-aquifer/20 bg-[#F1F7F9] p-6 lg:col-span-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-7 flex-shrink-0 items-center justify-center rounded-[4px] bg-moss/10 text-moss">
                  <LocationPinIcon className="size-4" />
                </div>
                <div className="font-body-sm text-body-sm text-slate-700">
                  <p className="font-bold text-deep-aquifer">Skyra headquarters</p>
                  <p className="mt-0.5 leading-relaxed">{CONTACT.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-muted-aquifer/20 pt-3 font-body-sm text-body-sm text-slate-700">
                <div className="flex size-7 flex-shrink-0 items-center justify-center rounded-[4px] bg-moss/10 text-moss">
                  <MailIcon className="size-4" />
                </div>
                <div>
                  <p className="font-bold text-deep-aquifer">Direct advisory</p>
                  <p className="mt-0.5">
                    {CONTACT.email} / {CONTACT.phoneDisplay}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-muted-aquifer/20 pt-3 text-slate-500 font-body-sm text-body-sm">
                <span className="text-xs">Follow:</span>
                {SOCIAL_LINKS.map(({ label, Icon, href }) => (
                  <a key={label} aria-label={label} href={href} className="transition-colors hover:text-moss">
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

