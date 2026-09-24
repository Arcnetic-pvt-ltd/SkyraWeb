import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget";

export const metadata: Metadata = {
  title: "Skyra — Securing India's Water Future",
  description:
    "Closed-loop hydrological stewardship and ecological infrastructure technology. Skyra transforms rainfall into water resilience, Pan India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-light-aquifer-canvas font-body-primary text-deep-aquifer selection:bg-moss/20 selection:text-deep-aquifer">
        <SiteHeader />
        <main className="flex-1 w-full bg-light-aquifer-canvas min-h-screen">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppWidget />
      </body>
    </html>
  );
}


