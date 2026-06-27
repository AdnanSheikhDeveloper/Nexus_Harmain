import type { Metadata } from "next";
import {
  Amiri,
  DM_Sans,
  Noto_Sans_Arabic,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Nexus Haramain — Connecting Global Pilgrimage Demand with Saudi Excellence",
  description:
    "Nexus Haramain is a strategic business development, representation, and market access company connecting Saudi-based hospitality providers, Hajj & Umrah suppliers, transport operators, technology companies, and pilgrim service organizations with international buyers, operators, and institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable} ${notoSansArabic.variable} ${amiri.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
