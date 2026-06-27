import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Globe,
  Headphones,
  Megaphone,
  Shield,
  Smartphone,
  Users,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceBlock {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  image: string;
}

const services: ServiceBlock[] = [
  {
    id: "global-marketing",
    icon: Megaphone,
    title: "Global Marketing, Exhibitions & Representation",
    tagline: "Commercial presence where your buyers are",
    description:
      "We deliver strategic marketing, trade exhibitions, business networking, and commercial representation tailored to the Hajj, Umrah, and hospitality sectors. Our teams operate across primary source markets, positioning Saudi suppliers in front of the missions, operators, and institutions that drive pilgrimage volume.",
    capabilities: [
      "Trade show representation and booth management",
      "Source market roadshows and buyer meetings",
      "Brand positioning for Saudi hospitality and pilgrimage suppliers",
      "Mission and operator relationship development",
      "Multi-market campaign coordination",
      "Commercial representation agreements",
    ],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
  },
  {
    id: "hospitality",
    icon: Building2,
    title: "Hospitality Solutions",
    tagline: "Connecting rooms to pilgrimage demand",
    description:
      "We connect hospitality providers with Hajj Missions, Umrah operators, and international travel partners seeking reliable accommodation across Makkah, Madinah, Jeddah, and beyond. From contract negotiation to seasonal capacity planning, we structure partnerships that perform across multiple pilgrimage cycles.",
    capabilities: [
      "Mission and operator hotel sourcing",
      "Seasonal contract structuring",
      "Group accommodation pipeline development",
      "Quality assurance and partner vetting",
      "Rate negotiation and allocation management",
      "Multi-property portfolio representation",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
  },
  {
    id: "hajj-umrah",
    icon: Users,
    title: "Hajj & Umrah Solutions",
    tagline: "End-to-end pilgrimage operational support",
    description:
      "Comprehensive pilgrimage support designed for Hajj Missions, Umrah operators, and pilgrimage organizations. We help international entities navigate the Saudi ecosystem — from supplier onboarding and ground operations to compliance coordination and multi-season program design.",
    capabilities: [
      "Mission and operator onboarding",
      "Ground handler and transport coordination",
      "Pilgrimage program design and optimization",
      "Supplier network access across the Holy Cities",
      "Seasonal operations planning",
      "Cross-border partnership facilitation",
    ],
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f1c9?w=1200&q=80",
  },
  {
    id: "smart-pilgrim",
    icon: Smartphone,
    title: "Smart Pilgrim Technology",
    tagline: "Safety and visibility at scale",
    description:
      "Wearable safety, GPS tracking, health monitoring, emergency alerts, and centralized mission dashboards — purpose-built for organizations managing pilgrims at scale. Our technology partnerships bring enterprise-grade pilgrim safety solutions to missions and operators who need real-time operational intelligence.",
    capabilities: [
      "Wearable safety and location tracking",
      "Health monitoring and emergency alert systems",
      "Centralized mission control dashboards",
      "Group movement and geofencing",
      "Integration with existing operator systems",
      "Pilot programs and phased deployment",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  {
    id: "connectivity",
    icon: Wifi,
    title: "Pilgrim Connectivity Solutions",
    tagline: "Connected before, during, and after the journey",
    description:
      "Pre-activated SIM and eSIM solutions keeping pilgrims connected before, during, and after their journey. We partner with leading telecom providers to deliver bulk connectivity programs for missions and operators — eliminating friction at arrival and ensuring pilgrims remain reachable throughout their pilgrimage.",
    capabilities: [
      "Pre-activated SIM and eSIM distribution",
      "Bulk connectivity programs for missions",
      "Arrival-ready connectivity packages",
      "Multi-carrier coverage across Saudi Arabia",
      "Usage analytics and group management",
      "White-label connectivity for operators",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="border-b border-white/[0.08] bg-[#081736]/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="section-overtitle mb-4">Our Services</p>
          <h1 className="section-heading mb-6 max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Premium services for the modern pilgrimage economy.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#8a99ad]">
            From global representation to smart pilgrim technology, Nexus
            Haramain delivers the commercial infrastructure organizations need to
            access Saudi pilgrimage markets and scale with confidence.
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
            >
              <div
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-72 overflow-hidden rounded-2xl nexus-border sm:h-96">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030f26]/80 to-transparent" />
                </div>

                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c5a880]/10">
                    <service.icon className="h-6 w-6 text-[#c5a880]" />
                  </div>
                  <p className="section-overtitle mb-3">{service.tagline}</p>
                  <h2 className="section-heading mb-4 text-2xl font-bold text-white sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mb-6 leading-relaxed text-[#8a99ad]">
                    {service.description}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {service.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-3 text-sm text-[#8a99ad]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a880]" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#030f26] transition-all hover:bg-[#c5a880] hover:text-white"
                  >
                    Consult on this service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Supporting capabilities */}
      <section className="border-t border-white/[0.08] bg-[#081736]/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="section-overtitle mb-4">How We Deliver</p>
            <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
              Institutional-grade execution across every engagement.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Globe,
                title: "Market Intelligence",
                text: "Source market analysis and buyer mapping",
              },
              {
                icon: Shield,
                title: "Partner Vetting",
                text: "Rigorous supplier qualification and due diligence",
              },
              {
                icon: BarChart3,
                title: "Pipeline Management",
                text: "CRM-driven lead tracking and contract progression",
              },
              {
                icon: Headphones,
                title: "Dedicated Support",
                text: "Account management across time zones",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="nexus-border rounded-xl bg-[#081736] p-6 text-center"
              >
                <item.icon className="mx-auto mb-4 h-8 w-8 text-[#c5a880]" />
                <h3 className="mb-2 font-serif text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-[#8a99ad]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="nexus-border rounded-2xl bg-[#081736] px-8 py-16 text-center">
          <h2 className="section-heading mb-4 text-3xl font-bold text-white">
            Not sure which service fits your organization?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-[#8a99ad]">
            Schedule a consultation and our team will map the right combination
            of services to your market objectives.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#030f26] transition-all hover:bg-[#c5a880] hover:text-white"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
