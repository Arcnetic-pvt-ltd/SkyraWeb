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
    eyebrow: "Inquiries",
    title: "Email us",
    detail: CONTACT.email,
    detailMono: true,
    linkLabel: "Click to email",
    LinkIcon: ExternalLinkIcon,
  },
];

export function ContactChannels() {
  return (
    <section className="relative z-10 bg-[#F8FCFE] py-10 border-b border-muted-aquifer/15">
      <Container>
        <div className="mb-6 flex items-center justify-between border-b border-muted-aquifer/20 pb-4">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-moss">
              Get in touch
            </span>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-deep-aquifer">Direct contact channels</h2>
          </div>
          <div className="hidden items-center gap-2 text-xs text-slate-600 sm:flex">
            <span aria-hidden="true" className="size-2 rounded-[2px] bg-moss" />
            Fast response within working hours
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ href, external, Icon, eyebrow, title, detail, detailMono, linkLabel, LinkIcon }) => (
            <a
              key={title}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex flex-col justify-between rounded-[4px] border border-muted-aquifer/20 bg-white p-5 shadow-xs hover:border-moss/40 transition-colors"
            >
              <div>
                <div className="mb-4 flex size-10 items-center justify-center rounded-[4px] border border-muted-aquifer/20 bg-[#F1F7F9] text-moss">
                  <Icon className="size-4.5" />
                </div>
                <span className="mb-1 block font-mono text-[11px] uppercase tracking-wider text-muted-aquifer">{eyebrow}</span>
                <h3 className="mb-1 text-base font-bold text-deep-aquifer">{title}</h3>
                <p className={`mb-4 text-xs leading-relaxed text-slate-600 ${detailMono ? "font-mono" : ""}`}>
                  {detail}
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-moss">
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
            className="group relative flex flex-col justify-between rounded-[4px] border border-moss/30 bg-[#F1F7F9] p-5 shadow-xs hover:border-moss transition-colors"
          >
            <div>
              <div className="relative mb-4 flex size-10 items-center justify-center rounded-[4px] bg-moss/10 text-moss">
                <WhatsAppIcon className="size-4.5" />
              </div>
              <span className="mb-1 block font-mono text-[11px] uppercase tracking-wider text-moss font-semibold">
                Instant advisory
              </span>
              <h3 className="mb-1 text-base font-bold text-deep-aquifer">
                WhatsApp desk
              </h3>
              <p className="mb-4 text-xs leading-relaxed text-slate-600">
                Direct chat with senior hydrological engineers.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-moss">
              Chat on WhatsApp
              <WhatsAppIcon className="size-3.5" />
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}

