import { Container } from "@/components/ui/container";
import { LocationPinIcon, MailIcon } from "@/components/icons/contact-icons";
import { PhoneIcon } from "@/components/icons/service-icons";
import { ExternalLinkIcon } from "@/components/icons/contact-form-icons";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { WHATSAPP_HREF, CONTACT } from "@/lib/nav";

const CARDS: {
  href: string;
  external: boolean;
  Icon: typeof LocationPinIcon;
  tone: string;
  eyebrow: string;
  title: string;
  detail: string;
  detailMono?: boolean;
  linkLabel: string;
  LinkIcon: typeof ExternalLinkIcon;
}[] = [
  {
    href: "https://maps.google.com/?q=Rajagiri+Road+Kalamassery+Kerala",
    external: true,
    Icon: LocationPinIcon,
    tone: "bg-brand-teal/10 border-brand-teal/30 text-brand-teal",
    eyebrow: "Office location",
    title: "Headquarters",
    detail: CONTACT.address,
    linkLabel: "Open in Google Maps",
    LinkIcon: ExternalLinkIcon,
  },
  {
    href: `tel:${CONTACT.phone}`,
    external: false,
    Icon: PhoneIcon,
    tone: "bg-sky-950/40 border-sky-500/30 text-sky-400",
    eyebrow: "Direct line",
    title: "Phone support",
    detail: CONTACT.phoneDisplay,
    detailMono: true,
    linkLabel: "Click to call",
    LinkIcon: ExternalLinkIcon,
  },
  {
    href: `mailto:${CONTACT.email}`,
    external: false,
    Icon: MailIcon,
    tone: "bg-blue-950/40 border-blue-500/30 text-blue-400",
    eyebrow: "Inquiries",
    title: "Email us",
    detail: CONTACT.email,
    detailMono: true,
    linkLabel: "Click to email",
    LinkIcon: ExternalLinkIcon,
  },
];

/** Direct Contact Options — 4 clickable cards. */
export function ContactChannels() {
  return (
    <section className="relative z-10 bg-ink py-16 sm:py-24">
      <Container>
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs font-medium text-muted-aquifer">
            Get in touch
          </span>
          <h2 className="mt-1 font-headline-h2 text-[28px] sm:text-[36px] font-semibold tracking-tight text-white">Direct contact channels</h2>
        </div>
        <div className="hidden items-center gap-2 font-mono text-xs text-slate-400 sm:flex">
          <span aria-hidden="true" className="size-2 rounded-full bg-moss" />
          Fast response within working hours
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {CARDS.map(({ href, external, Icon, tone, eyebrow, title, detail, detailMono, linkLabel, LinkIcon }) => (
          <a
            key={title}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex flex-col justify-between rounded-[4px] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-moss/60"
          >
            <div>
              <div className="mb-5 flex size-10 items-center justify-center rounded-[6px] border border-white/10 bg-white/10 text-moss">
                <Icon className="size-5" />
              </div>
              <span className="mb-1 block font-mono text-xs text-slate-400 font-medium">{eyebrow}</span>
              <h3 className="mb-2 font-headline-h3 text-[20px] sm:text-[24px] font-medium leading-[1.3] text-white transition-colors group-hover:text-moss">{title}</h3>
              <p className={`mb-4 font-body-primary text-base font-normal leading-relaxed text-slate-300 ${detailMono ? "font-mono" : ""}`}>
                {detail}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-moss transition-all group-hover:gap-2.5">
              {linkLabel}
              <LinkIcon className="size-3.5" />
            </div>
          </a>
        ))}

        {/* WhatsApp card */}
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-between overflow-hidden rounded-[4px] border border-moss/40 bg-white/5 p-6 transition-all duration-300 hover:border-moss"
        >
          <div>
            <div className="relative mb-5 flex size-10 items-center justify-center rounded-[6px] border border-moss/30 bg-moss/10 text-moss">
              <WhatsAppIcon className="size-5" />
            </div>
            <span className="mb-1 block font-mono text-xs text-moss font-medium">
              Instant advisory
            </span>
            <h3 className="mb-2 font-headline-h3 text-[20px] sm:text-[24px] font-medium leading-[1.3] text-white transition-colors group-hover:text-moss">
              WhatsApp desk
            </h3>
            <p className="mb-4 font-body-primary text-base font-normal leading-relaxed text-slate-300">
              Direct chat with senior hydrological engineers.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-moss transition-all group-hover:gap-2.5">
            Chat on WhatsApp
            <WhatsAppIcon className="size-3.5" />
          </div>
        </a>
      </div>
      </Container>
    </section>
  );
}
