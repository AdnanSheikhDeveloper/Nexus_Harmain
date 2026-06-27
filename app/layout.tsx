import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Nexus Haramain — Connecting Global Pilgrimage Demand with Saudi Excellence",
  description:
    "Nexus Haramain is a strategic business development, representation, and market access company connecting Saudi-based hospitality providers, Hajj & Umrah suppliers, transport operators, technology companies, and pilgrim service organizations with international buyers, operators, and institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
