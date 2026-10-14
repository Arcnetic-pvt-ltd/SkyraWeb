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

export const SOCIAL_LINKS = [
  {
    name: "YouTube",
    href: process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://youtube.com/",
    icon: "youtube",
  },
  {
    name: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/",
    icon: "facebook",
  },
  {
    name: "LinkedIn",
    href:
      process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/",
    icon: "linkedin",
  },
  {
    name: "X",
    href: process.env.NEXT_PUBLIC_X_URL || "https://x.com/",
    icon: "x",
  },
] as const;
