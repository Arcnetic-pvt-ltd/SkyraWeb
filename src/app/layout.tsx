import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SkyRa — From Sky, To Life",
  description:
    "SkyRa helps properties manage, harvest, recharge and use water more effectively — from rooftop to groundwater.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      {/*
        No top padding is added here for the fixed header: each page's
        first section bakes in its own top offset to clear the 80px
        header (e.g. the Landing Hero's Figma-authored pt-[108px]),
        matching how the design itself accounts for the header floating
        over page content. Adding a second offset here would double it.
      */}
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
