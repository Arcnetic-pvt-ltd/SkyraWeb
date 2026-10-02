import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget";

export const metadata: Metadata = {
  title: "Rainwater harvesting · Skyra",
  description:
    "Rainwater harvesting and groundwater recharge systems for homes, apartments, industries and campuses across South India.",
  icons: {
    icon: "/images/skyra-logo.png",
    shortcut: "/images/skyra-logo.png",
    apple: "/images/skyra-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F4F7F6]">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F4F7F6] text-[#1D293B]">
        <SiteHeader />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 bg-[#F4F7F6]">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
