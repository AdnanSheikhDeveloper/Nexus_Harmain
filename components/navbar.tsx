"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const toggleLocale = () => setLocale(locale === "en" ? "ar" : "en");

  return (
    <header className="sticky top-0 z-50 border-b border-[#0f1a2e]/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#030f26] font-serif text-xl font-bold text-[#c5a880]">
            N
          </div>
          <div>
            <p className="font-serif text-base font-semibold leading-tight text-[#0f1a2e] sm:text-lg">
              {t.brand.name}
            </p>
            <p className="text-[10px] uppercase tracking-widest leading-tight text-[#8a99ad]">
              {t.brand.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#c5a880] ${
                isActive(link.href) ? "text-[#0f1a2e]" : "text-[#5a6478]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#0f1a2e]/10 px-3 py-2 text-sm font-medium text-[#5a6478] transition-colors hover:border-[#c5a880] hover:text-[#c5a880]"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            {t.nav.language}
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 rounded-full bg-[#030f26] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#c5a880]"
          >
            {t.nav.becomePartner}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#5a6478]"
            aria-label="Toggle language"
          >
            <Globe className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#0f1a2e]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#0f1a2e]/10 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-[#c5a880] ${
                  isActive(link.href) ? "text-[#0f1a2e]" : "text-[#5a6478]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1 rounded-full bg-[#030f26] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#c5a880]"
            >
              {t.nav.becomePartner}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
