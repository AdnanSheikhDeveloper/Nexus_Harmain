import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Globe,
  Handshake,
  Lightbulb,
  Network,
  Shield,
  TrendingUp,
} from "lucide-react";

const stats = [
  { value: "20+", label: "Source Markets" },
  { value: "50+", label: "Active Partners" },
  { value: "3M+", label: "Pilgrims Served" },
  { value: "Riyadh", label: "Headquarters" },
];

const pillars = [
  {
    icon: Globe,
    title: "Representation",
    description: "Commercial presence in source markets",
  },
  {
    icon: Network,
    title: "Access",
    description: "Direct lines into missions & operators",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Multi-season pipeline and contracts",
  },
];

const services = [
  {
    title: "Global Marketing, Exhibitions & Representation",
    description:
      "Strategic marketing, trade exhibitions, business networking, and commercial representation for Hajj, Umrah, and hospitality sectors.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    href: "/services#global-marketing",
  },
  {
    title: "Hospitality Solutions",
    description:
      "Connecting hospitality providers with Hajj Missions, Umrah operators, and international travel partners.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    href: "/services#hospitality",
  },
  {
    title: "Hajj & Umrah Solutions",
    description:
      "Comprehensive pilgrimage support designed for Hajj Missions, Umrah operators, and pilgrimage organizations.",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f1c9?w=800&q=80",
    href: "/services#hajj-umrah",
  },
  {
    title: "Smart Pilgrim Technology",
    description:
      "Wearable safety, GPS tracking, health monitoring, emergency alerts, and centralized mission dashboards.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    href: "/services#smart-pilgrim",
  },
  {
    title: "Pilgrim Connectivity Solutions",
    description:
      "Pre-activated SIM and eSIM solutions keeping pilgrims connected before, during, and after their journey.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    href: "/services#connectivity",
  },
];

const industries = [
  "Hajj Missions",
  "Umrah Operators",
  "Hotels & Hospitality Groups",
  "Transport Companies",
  "Travel Agencies",
  "Government Delegations",
  "Religious Organizations",
  "Technology Providers",
];

const whyUs = [
  {
    icon: Shield,
    title: "Industry Expertise",
    description:
      "Deep knowledge of the Saudi pilgrimage ecosystem and international buyer landscape.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Trusted relationships with operators, missions, hotels, and government stakeholders.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Active commercial presence across primary Hajj and Umrah source markets.",
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description:
      "Pipeline-driven growth — leads, contracts, and sustainable revenue programs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Technology",
    description:
      "Smart pilgrim solutions, connectivity, and operational tooling at scale.",
  },
  {
    icon: Building2,
    title: "Long-Term Growth Focus",
    description:
      "Partnerships engineered for multi-season performance, not transactions.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f1c9?w=1920&q=80"
            alt="Aerial view of Makkah and Masjid al-Haram at golden hour"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030f26]/60 via-[#030f26]/80 to-[#030f26]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <p className="section-overtitle mb-6">Strategic Business Development</p>
          <h1 className="section-heading mb-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Connecting Global Pilgrimage Demand with{" "}
            <span className="text-[#c5a880]">Saudi Excellence.</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#8a99ad]">
            Nexus Haramain is a strategic business development, representation,
            and market access company connecting Saudi-based hospitality
            providers, Hajj & Umrah suppliers, transport operators, technology
            companies, and pilgrim service organizations with international
            buyers, operators, and institutions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#030f26] transition-all hover:bg-[#c5a880] hover:text-white"
            >
              Become a Partner
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#c5a880] hover:text-[#c5a880]"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl px-6 py-8 text-center"
            >
              <p className="font-serif text-3xl font-bold text-[#c5a880] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[#8a99ad]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="section-overtitle mb-4">Who We Are</p>
            <h2 className="section-heading mb-6 text-3xl font-bold text-white sm:text-4xl">
              A strategic bridge across the pilgrimage ecosystem.
            </h2>
            <p className="mb-4 text-[#8a99ad] leading-relaxed">
              The Hajj and Umrah industry depends on strong partnerships,
              trusted service providers, and seamless collaboration between
              stakeholders.
            </p>
            <p className="mb-4 text-[#8a99ad] leading-relaxed">
              Nexus Haramain serves as a strategic connector between Saudi-based
              suppliers and international organizations seeking reliable partners
              within the pilgrimage sector.
            </p>
            <p className="text-[#8a99ad] leading-relaxed">
              Through business development, representation, market expansion, and
              strategic networking, we help organizations access new
              opportunities while strengthening the overall pilgrimage
              experience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="nexus-border rounded-xl bg-[#081736] p-6"
              >
                <pillar.icon className="mb-4 h-8 w-8 text-[#c5a880]" />
                <h3 className="mb-2 font-serif text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#8a99ad]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-[#081736]/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-overtitle mb-4">What We Do</p>
              <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
                Premium services for the modern pilgrimage economy.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#c5a880] transition-colors hover:text-white"
            >
              Explore all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-xl nexus-border"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030f26] via-[#030f26]/70 to-transparent" />
                </div>
                <div className="relative bg-[#081736] p-6">
                  <h3 className="mb-3 font-serif text-lg font-semibold text-white transition-colors group-hover:text-[#c5a880]">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#8a99ad]">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#c5a880]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-overtitle mb-4">Industries We Serve</p>
          <h2 className="section-heading mb-4 text-3xl font-bold text-white sm:text-4xl">
            Partners across the full pilgrimage value chain.
          </h2>
          <p className="mx-auto max-w-2xl text-[#8a99ad]">
            From mission delegations and hotel groups to technology providers and
            ground operators — we work with the organizations that move pilgrims
            at scale.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-white/[0.08] bg-[#081736] px-5 py-2.5 text-sm text-white transition-colors hover:border-[#c5a880] hover:text-[#c5a880]"
            >
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* Why Nexus Haramain */}
      <section className="bg-[#081736]/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="section-overtitle mb-4">Why Nexus Haramain</p>
            <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
              Built for organizations that think in decades, not seasons.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="nexus-border rounded-xl bg-[#081736] p-8 transition-colors hover:border-[#c5a880]/30"
              >
                <item.icon className="mb-4 h-8 w-8 text-[#c5a880]" />
                <h3 className="mb-3 font-serif text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#8a99ad]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="nexus-border relative overflow-hidden rounded-2xl bg-[#081736] px-8 py-16 text-center sm:px-16">
          <div className="absolute inset-0 bg-gradient-to-r from-[#c5a880]/5 to-transparent" />
          <div className="relative">
            <p className="section-overtitle mb-4">Partnership</p>
            <h2 className="section-heading mb-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to expand your reach?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[#8a99ad]">
              Partner with Nexus Haramain to unlock new markets, strengthen
              industry relationships, and create sustainable growth across the
              global pilgrimage economy.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#030f26] transition-all hover:bg-[#c5a880] hover:text-white"
            >
              Become a Partner
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
