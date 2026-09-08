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
    eyebrow: "Office Location",
    title: "Headquarters",
    detail: CONTACT.address,
    linkLabel: "Open in Google Maps",
    LinkIcon: ExternalLinkIcon,
  },
  {
    href: "tel:+919876543210",
    external: false,
    Icon: PhoneIcon,
    tone: "bg-sky-950/40 border-sky-500/30 text-sky-400",
    eyebrow: "Direct Line",
    title: "Phone Support",
    detail: CONTACT.phoneDisplay,
    detailMono: true,
    linkLabel: "Click to Call",
    LinkIcon: ExternalLinkIcon,
  },
  {
    href: `mailto:${CONTACT.email}`,
    external: false,
    Icon: MailIcon,
    tone: "bg-blue-950/40 border-blue-500/30 text-blue-400",
    eyebrow: "Inquiries",
    title: "Email Us",
    detail: CONTACT.email,
    detailMono: true,
    linkLabel: "Click to Email",
    LinkIcon: ExternalLinkIcon,
  },
];

/** Direct Contact Options — 4 clickable cards. */
export function ContactChannels() {
  return (
    <section className="relative z-10 bg-ink py-12">
      <Container>
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-teal">
            Get In Touch
          </span>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white">Direct Contact Channels</h2>
        </div>
        <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
          <span aria-hidden="true" className="size-2 rounded-full bg-emerald-400" />
          Fast response within working hours
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {CARDS.map(({ href, external, Icon, tone, eyebrow, title, detail, detailMono, linkLabel, LinkIcon }) => (
          <a
            key={title}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-ink-elevated/90 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-teal/60 hover:shadow-[0_10px_30px_rgba(0,152,166,0.12)]"
          >
            <div>
              <div className={`mb-5 flex size-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${tone}`}>
                <Icon className="size-5" />
              </div>
              <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-slate-400">{eyebrow}</span>
              <h3 className="mb-2 text-base font-semibold text-white transition-colors group-hover:text-brand-teal">{title}</h3>
              <p className={`mb-4 text-sm leading-relaxed text-slate-300 ${detailMono ? "font-mono tracking-wide" : ""}`}>
                {detail}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-teal transition-all group-hover:gap-2.5">
              {linkLabel}
              <LinkIcon className="size-3.5" />
            </div>
          </a>
        ))}

        {/* WhatsApp card (distinct styling — high-priority conversion channel) */}
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand-green/50 bg-linear-to-br from-ink-elevated to-emerald-950/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green hover:shadow-[0_10px_35px_rgba(16,185,129,0.25)]"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-8 -right-8 size-28 rounded-full bg-brand-green/15 blur-2xl transition-transform duration-500 group-hover:scale-150" />
          <div>
            <div className="relative mb-5 flex size-12 items-center justify-center rounded-xl border border-emerald-500/50 bg-emerald-950/80 text-emerald-400 transition-transform duration-300 group-hover:scale-110">
              <WhatsAppIcon className="size-5" />
              <span className="absolute -right-1 -top-1 flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
              </span>
            </div>
            <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-emerald-400">
              Instant Advisory
            </span>
            <h3 className="mb-2 text-base font-semibold text-white transition-colors group-hover:text-emerald-300">
              WhatsApp Desk
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-300">
              Direct chat with senior hydrological engineers.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 transition-all group-hover:gap-2.5">
            Chat on WhatsApp
            <WhatsAppIcon className="size-3.5" />
          </div>
        </a>
      </div>
      </Container>
    </section>
  );
}
