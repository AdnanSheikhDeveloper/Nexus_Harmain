import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building,
  CheckCircle2,
  Globe2,
  Landmark,
  Scale,
  ShieldCheck,
  Target,
  Users2,
} from "lucide-react";

const visionPillars = [
  {
    icon: Target,
    title: "Vision 2030 Alignment",
    description:
      "Nexus Haramain operates at the intersection of Saudi Arabia's Vision 2030 pilgrimage and hospitality ambitions — connecting international demand with the Kingdom's expanding supplier ecosystem.",
  },
  {
    icon: Landmark,
    title: "Institutional Credibility",
    description:
      "We represent organizations with the professionalism expected by government delegations, religious institutions, and multinational hospitality groups operating in sacred markets.",
  },
  {
    icon: Globe2,
    title: "Global Source Market Presence",
    description:
      "Active commercial representation across 20+ primary Hajj and Umrah source markets, ensuring Saudi suppliers maintain year-round visibility beyond seasonal peaks.",
  },
];

const infrastructure = [
  {
    icon: Building,
    title: "Riyadh Headquarters",
    description:
      "Central command for partnership development, contract management, and strategic planning — positioned on King Fahd Road in the Kingdom's commercial capital.",
  },
  {
    icon: Users2,
    title: "Holy Cities Operations",
    description:
      "On-ground presence across Makkah, Madinah, and Jeddah enabling real-time supplier coordination, quality assurance, and seasonal operations support.",
  },
  {
    icon: ShieldCheck,
    title: "Partner Network",
    description:
      "A vetted ecosystem of 50+ active partners spanning hospitality, transport, technology, connectivity, and ground operations across the pilgrimage value chain.",
  },
  {
    icon: Award,
    title: "Multi-Season Track Record",
    description:
      "Partnerships engineered for sustained performance across pilgrimage seasons — with infrastructure supporting 3M+ pilgrims served through our partner network.",
  },
];

const complianceItems = [
  "Regulatory navigation for international entities entering Saudi pilgrimage markets",
  "Supplier qualification aligned with mission and operator standards",
  "Contract frameworks designed for multi-season pilgrimage programs",
  "Cross-border partnership structuring and commercial representation",
  "Quality assurance protocols across hospitality and ground operations",
  "Technology and data compliance for smart pilgrim solutions",
];

const values = [
  {
    title: "Trust",
    description:
      "Sacred journeys demand partners who operate with integrity, transparency, and accountability at every touchpoint.",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves and our partners to the highest standards — because pilgrimage service is never ordinary.",
  },
  {
    title: "Partnership",
    description:
      "We succeed when our partners succeed. Every engagement is structured for mutual, long-term growth.",
  },
  {
    title: "Innovation",
    description:
      "From smart pilgrim technology to connectivity at scale, we bring forward-looking solutions to an industry rooted in tradition.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f1c9?w=1920&q=80"
            alt="Makkah skyline"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030f26] via-[#030f26]/95 to-[#030f26]/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="section-overtitle mb-4">About Nexus Haramain</p>
          <h1 className="section-heading mb-6 max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            A strategic bridge across the global pilgrimage ecosystem.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#8a99ad]">
            Nexus Haramain is a strategic business development, representation,
            and market access company headquartered in Riyadh — purpose-built to
            connect Saudi-based pilgrimage and hospitality providers with the
            international organizations that drive global pilgrimage demand.
          </p>
        </div>
      </section>

      {/* Saudi Vision */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="section-overtitle mb-4">Saudi Vision</p>
          <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
            Positioned for the Kingdom&apos;s pilgrimage future.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {visionPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="nexus-border rounded-xl bg-[#081736] p-8"
            >
              <pillar.icon className="mb-4 h-8 w-8 text-[#c5a880]" />
              <h3 className="mb-3 font-serif text-xl font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#8a99ad]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[#081736]/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="section-overtitle mb-4">Our Mission</p>
              <h2 className="section-heading mb-6 text-3xl font-bold text-white sm:text-4xl">
                Connecting supply with demand across sacred markets.
              </h2>
              <p className="mb-4 leading-relaxed text-[#8a99ad]">
                The Hajj and Umrah industry depends on strong partnerships,
                trusted service providers, and seamless collaboration between
                stakeholders spanning continents.
              </p>
              <p className="mb-4 leading-relaxed text-[#8a99ad]">
                Nexus Haramain serves as the commercial infrastructure layer —
                enabling Saudi suppliers to reach international buyers and
                helping global organizations access reliable partners within
                the Kingdom.
              </p>
              <p className="leading-relaxed text-[#8a99ad]">
                Through business development, representation, market expansion,
                and strategic networking, we strengthen the overall pilgrimage
                experience while creating sustainable growth for every partner
                in our ecosystem.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl nexus-border lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Luxury hospitality in Saudi Arabia"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030f26]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Operational Infrastructure */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-overtitle mb-4">Operational Infrastructure</p>
          <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
            Built to operate at institutional scale.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#8a99ad]">
            From Riyadh headquarters to Holy Cities operations, our infrastructure
            supports the complexity of multi-market pilgrimage partnerships.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {infrastructure.map((item) => (
            <div
              key={item.title}
              className="nexus-border flex gap-6 rounded-xl bg-[#081736] p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c5a880]/10">
                <item.icon className="h-6 w-6 text-[#c5a880]" />
              </div>
              <div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#8a99ad]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Bridge */}
      <section className="bg-[#081736]/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="section-overtitle mb-4">Compliance Bridge</p>
              <h2 className="section-heading mb-6 text-3xl font-bold text-white sm:text-4xl">
                Navigating complexity so your organization doesn&apos;t have to.
              </h2>
              <p className="mb-6 leading-relaxed text-[#8a99ad]">
                International organizations entering Saudi pilgrimage markets face
                a landscape of regulatory requirements, supplier standards, and
                contractual frameworks unique to the Hajj and Umrah industry.
                Nexus Haramain serves as the compliance bridge — translating
                institutional requirements into actionable partnership pathways.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#c5a880] transition-colors hover:text-white"
              >
                Discuss your compliance requirements
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-4">
              {complianceItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 nexus-border rounded-lg bg-[#081736] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#c5a880]" />
                  <span className="text-sm text-[#8a99ad]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-overtitle mb-4">Our Values</p>
          <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
            Principles that guide every partnership.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="nexus-border rounded-xl bg-[#081736] p-6 text-center"
            >
              <h3 className="mb-3 font-serif text-xl font-semibold text-[#c5a880]">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#8a99ad]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="nexus-border relative overflow-hidden rounded-2xl bg-[#081736] px-8 py-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#c5a880]/5 to-transparent" />
          <div className="relative">
            <Scale className="mx-auto mb-6 h-10 w-10 text-[#c5a880]" />
            <h2 className="section-heading mb-4 text-3xl font-bold text-white">
              Ready to build a lasting partnership?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-[#8a99ad]">
              Connect with our team to explore how Nexus Haramain can support
              your organization&apos;s pilgrimage market objectives.
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
