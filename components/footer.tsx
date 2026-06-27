"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export default function Footer() {
  const { t } = useLanguage();

  const companyLinks = [
    { href: "/about", label: t.footer.about },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ];

  const solutionLinks = [
    { href: "/services#hospitality", label: t.footer.hospitality },
    { href: "/services#hajj-umrah", label: t.footer.hajjUmrah },
    { href: "/services#smart-pilgrim", label: t.footer.smartPilgrim },
    { href: "/services#connectivity", label: t.footer.connectivity },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#030f26] section-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#030f26] border border-[#c5a880]/30 font-serif text-xl font-bold text-[#c5a880]">
                N
              </div>
              <p className="font-serif text-lg font-semibold text-white">
                {t.brand.name}
              </p>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-[#8a99ad]">
              {t.footer.bio}
            </p>
            <div className="inline-flex rounded-full nexus-border-dark bg-[#081736] px-4 py-2 text-xs text-[#8a99ad]">
              {t.footer.cities}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              {t.footer.company}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8a99ad] transition-colors hover:text-[#c5a880]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              {t.footer.solutions}
            </h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8a99ad] transition-colors hover:text-[#c5a880]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              {t.footer.contact}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:partnerships@nexusharamain.com"
                  className="flex items-start gap-3 text-sm text-[#8a99ad] transition-colors hover:text-[#c5a880]"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#c5a880]" />
                  partnerships@nexusharamain.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+966110000000"
                  className="flex items-start gap-3 text-sm text-[#8a99ad] transition-colors hover:text-[#c5a880]"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#c5a880]" />
                  +966 (0) 11 000 0000
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-[#8a99ad]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c5a880]" />
                  King Fahd Road, Riyadh
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-[#8a99ad] sm:flex-row sm:px-6 lg:px-8">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <p className="text-center sm:text-right">{t.footer.tagline}</p>
            <span className="hidden sm:inline text-white/20">|</span>
            <p>
              {t.footer.poweredBy}{" "}
              <a
                href="https://www.pandalabsdigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#c5a880] transition-colors hover:text-white"
              >
                {t.footer.pandaLabs}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
