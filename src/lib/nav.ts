export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "SkyRa Rainsink", href: "/products/rainsink" },
  { label: "Solutions", href: "/services" },
  { label: "Mission", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const WHATSAPP_HREF = "https://wa.me/message/Z7BLOOAB2OFPM1";

export const CONTACT = {
  address: "Rajagiri Road, N. Kalamassery, Kochi, Keralam",
  email: "sustainablesykra@gmail.com",
  phone: "+919292292111",
  phoneDisplay: "+91 9292292111",
} as const;

export const SOCIAL_LINKS = ([
  {
    name: "YouTube",
    href: process.env.NEXT_PUBLIC_YOUTUBE_URL?.trim() || "",
    icon: "youtube",
  },
  {
    name: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() || "",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim() || "",
    icon: "facebook",
  },
  {
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "",
    icon: "linkedin",
  },
  {
    name: "X",
    href: process.env.NEXT_PUBLIC_X_URL?.trim() || "",
    icon: "x",
  },
] as const).filter(({ href }) => href.length > 0);
