import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const solutionLinks = [
  { href: "/services#hospitality", label: "Hospitality" },
  { href: "/services#hajj-umrah", label: "Hajj & Umrah" },
  { href: "/services#smart-pilgrim", label: "Smart Pilgrim Tech" },
  { href: "/services#connectivity", label: "Connectivity" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#030f26]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#dfc19b] font-serif text-xl font-bold text-[#030f26]">
                N
              </div>
              <p className="font-serif text-lg font-semibold text-white">
                Nexus Haramain
              </p>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-[#8a99ad]">
              A strategic bridge between Saudi-based pilgrimage providers and
              international buyers, missions, and institutions.
            </p>
            <div className="inline-flex rounded-full border border-white/[0.08] bg-[#081736] px-4 py-2 text-xs text-[#8a99ad]">
              Riyadh · Jeddah · Makkah · Madinah
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
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

          {/* Col 3: Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Solutions</h4>
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

          {/* Col 4: Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
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

      {/* Bottom tier */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-[#8a99ad] sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Nexus Haramain. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Connecting Global Pilgrimage Demand with Saudi Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
