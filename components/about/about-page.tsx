"use client";

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
import { useLanguage } from "@/components/language-provider";
import HorizontalScroll from "@/components/horizontal-scroll";
import { images } from "@/lib/images";

export default function AboutPage() {
  const { locale, t } = useLanguage();
  const a = t.about;

  const visionPillars = [
    {
      icon: Target,
      titleEn: "Vision 2030 Alignment",
      titleAr: "التوافق مع رؤية 2030",
      descEn:
        "Nexus Haramain operates at the intersection of Saudi Arabia's Vision 2030 pilgrimage and hospitality ambitions — connecting international demand with the Kingdom's expanding supplier ecosystem.",
      descAr:
        "تعمل نكسس الحرمين عند تقاطع طموحات رؤية 2030 السعودية في الحج والعمرة والضيافة — وربط الطلب الدولي بالمنظومة المتوسعة للموردين في المملكة.",
    },
    {
      icon: Landmark,
      titleEn: "Institutional Credibility",
      titleAr: "المصداقية المؤسسية",
      descEn:
        "We represent organizations with the professionalism expected by government delegations, religious institutions, and multinational hospitality groups operating in sacred markets.",
      descAr:
        "نمثل المنظمات بالاحترافية التي تتوقعها الوفود الحكومية والمؤسسات الدينية ومجموعات الضيافة متعددة الجنسيات العاملة في الأسواق المقدسة.",
    },
    {
      icon: Globe2,
      titleEn: "Global Source Market Presence",
      titleAr: "حضور عالمي في أسواق المصدر",
      descEn:
        "Active commercial representation across 20+ primary Hajj and Umrah source markets, ensuring Saudi suppliers maintain year-round visibility beyond seasonal peaks.",
      descAr:
        "تمثيل تجاري نشط عبر أكثر من 20 سوق مصدر رئيسي للحج والعمرة، مما يضمن بقاء الموردين السعوديين مرئيين على مدار العام بعيداً عن ذروات المواسم.",
    },
  ];

  const infrastructure = [
    {
      icon: Building,
      titleEn: "Riyadh Headquarters",
      titleAr: "المقر الرئيسي في الرياض",
      descEn:
        "Central command for partnership development, contract management, and strategic planning — positioned on King Fahd Road in the Kingdom's commercial capital.",
      descAr:
        "القيادة المركزية لتطوير الشراكات وإدارة العقود والتخطيط الاستراتيجي — على طريق الملك فهد في العاصمة التجارية للمملكة.",
    },
    {
      icon: Users2,
      titleEn: "Holy Cities Operations",
      titleAr: "عمليات المدن المقدسة",
      descEn:
        "On-ground presence across Makkah, Madinah, and Jeddah enabling real-time supplier coordination, quality assurance, and seasonal operations support.",
      descAr:
        "حضور ميداني في مكة والمدينة وجدة يتيح تنسيق الموردين في الوقت الفعلي وضمان الجودة ودعم العمليات الموسمية.",
    },
    {
      icon: ShieldCheck,
      titleEn: "Partner Network",
      titleAr: "شبكة الشركاء",
      descEn:
        "A vetted ecosystem of 50+ active partners spanning hospitality, transport, technology, connectivity, and ground operations across the pilgrimage value chain.",
      descAr:
        "منظومة مُدققة من أكثر من 50 شريكاً نشطاً تشمل الضيافة والنقل والتقنية والاتصال وعمليات الأرض عبر سلسلة قيمة الحج والعمرة.",
    },
    {
      icon: Award,
      titleEn: "Multi-Season Track Record",
      titleAr: "سجل متعدد المواسم",
      descEn:
        "Partnerships engineered for sustained performance across pilgrimage seasons — with infrastructure supporting 3M+ pilgrims served through our partner network.",
      descAr:
        "شراكات مصممة لأداء مستدام عبر مواسم الحج والعمرة — مع بنية تدعم خدمة أكثر من 3 ملايين حاج عبر شبكة شركائنا.",
    },
  ];

  const complianceItemsEn = [
    "Regulatory navigation for international entities entering Saudi pilgrimage markets",
    "Supplier qualification aligned with mission and operator standards",
    "Contract frameworks designed for multi-season pilgrimage programs",
    "Cross-border partnership structuring and commercial representation",
    "Quality assurance protocols across hospitality and ground operations",
    "Technology and data compliance for smart pilgrim solutions",
  ];

  const complianceItemsAr = [
    "التنقل التنظيمي للجهات الدولية الداخلة لأسواق الحج والعمرة السعودية",
    "تأهيل الموردين بما يتوافق مع معايير البعثات والمشغلين",
    "أطر عقود مصممة لبرامج الحج والعمرة متعددة المواسم",
    "هيكلة الشراكات عبر الحدود والتمثيل التجاري",
    "بروتوكولات ضمان الجودة في الضيافة وعمليات الأرض",
    "امتثال التقنية والبيانات لحلول الحاج الذكية",
  ];

  const values = [
    {
      titleEn: "Trust",
      titleAr: "الثقة",
      descEn:
        "Sacred journeys demand partners who operate with integrity, transparency, and accountability at every touchpoint.",
      descAr:
        "الرحلات المقدسة تتطلب شركاء يعملون بنزاهة وشفافية ومساءلة في كل نقطة اتصال.",
    },
    {
      titleEn: "Excellence",
      titleAr: "التميز",
      descEn:
        "We hold ourselves and our partners to the highest standards — because pilgrimage service is never ordinary.",
      descAr:
        "نلتزم نحن وشركاؤنا بأعلى المعايير — لأن خدمة الحج والعمرة ليست عادية أبداً.",
    },
    {
      titleEn: "Partnership",
      titleAr: "الشراكة",
      descEn:
        "We succeed when our partners succeed. Every engagement is structured for mutual, long-term growth.",
      descAr:
        "ننجح عندما ينجح شركاؤنا. كل تعامل مُهيكل لنمو متبادل وطويل الأمد.",
    },
    {
      titleEn: "Innovation",
      titleAr: "الابتكار",
      descEn:
        "From smart pilgrim technology to connectivity at scale, we bring forward-looking solutions to an industry rooted in tradition.",
      descAr:
        "من تقنية الحاج الذكية إلى الاتصال على نطاق واسع، نقدم حلولاً مستقبلية لصناعة متجذرة في التقاليد.",
    },
  ];

  const missionParagraphsEn = [
    "The Hajj and Umrah industry depends on strong partnerships, trusted service providers, and seamless collaboration between stakeholders spanning continents.",
    "Nexus Haramain serves as the commercial infrastructure layer — enabling Saudi suppliers to reach international buyers and helping global organizations access reliable partners within the Kingdom.",
    "Through business development, representation, market expansion, and strategic networking, we strengthen the overall pilgrimage experience while creating sustainable growth for every partner in our ecosystem.",
  ];

  const missionParagraphsAr = [
    "تعتمد صناعة الحج والعمرة على شراكات قوية ومزودي خدمات موثوقين وتعاون سلس بين أصحاب المصلحة عبر القارات.",
    "تعمل نكسس الحرمين كطبقة البنية التجارية — تمكين الموردين السعوديين من الوصول للمشترين الدوليين ومساعدة المنظمات العالمية على الوصول لشركاء موثوقين داخل المملكة.",
    "من خلال تطوير الأعمال والتمثيل والتوسع في الأسواق والشبكات الاستراتيجية، نعزز تجربة الحج والعمرة بشكل عام مع خلق نمو مستدام لكل شريك في منظومتنا.",
  ];

  const complianceItems = locale === "ar" ? complianceItemsAr : complianceItemsEn;
  const missionParagraphs = locale === "ar" ? missionParagraphsAr : missionParagraphsEn;

  return (
    <>
      <section className="relative overflow-hidden section-dark bg-[#030f26]">
        <div className="absolute inset-0">
          <Image
            src={images.heroMakkah}
            alt="Makkah skyline"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030f26] via-[#030f26]/95 to-[#030f26]/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="section-overtitle mb-4">{a.overtitle}</p>
          <h1 className="section-heading mb-6 max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            {a.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#8a99ad]">
            {a.description}
          </p>
        </div>
      </section>

      <section className="section-light bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-overtitle section-overtitle-light mb-4">
              {a.vision.overtitle}
            </p>
            <h2 className="section-heading text-3xl font-bold text-[#0f1a2e] sm:text-4xl">
              {a.vision.title}
            </h2>
          </div>
          <HorizontalScroll className="md:grid-cols-3">
            {visionPillars.map((pillar) => (
              <div
                key={pillar.titleEn}
                className="card-equal min-w-[280px] snap-center nexus-border-light rounded-2xl bg-[#f8f9fb] p-8 md:min-w-0"
              >
                <pillar.icon className="mb-4 h-8 w-8 text-[#c5a880]" />
                <h3 className="mb-3 font-serif text-xl font-semibold text-[#0f1a2e]">
                  {locale === "ar" ? pillar.titleAr : pillar.titleEn}
                </h3>
                <p className="text-sm leading-relaxed text-[#5a6478]">
                  {locale === "ar" ? pillar.descAr : pillar.descEn}
                </p>
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      <section className="section-dark bg-[#030f26] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="section-overtitle mb-4">{a.mission.overtitle}</p>
              <h2 className="section-heading mb-6 text-3xl font-bold text-white sm:text-4xl">
                {a.mission.title}
              </h2>
              {missionParagraphs.map((p) => (
                <p key={p.slice(0, 20)} className="mb-4 leading-relaxed text-[#8a99ad]">
                  {p}
                </p>
              ))}
            </div>
            <div className="relative h-80 overflow-hidden rounded-2xl nexus-border-dark lg:h-96">
              <Image
                src={images.hospitalityLobby}
                alt="Luxury hospitality"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030f26]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-light bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="section-overtitle section-overtitle-light mb-4">
              {a.infrastructure.overtitle}
            </p>
            <h2 className="section-heading text-3xl font-bold text-[#0f1a2e] sm:text-4xl">
              {a.infrastructure.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#5a6478]">
              {a.infrastructure.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {infrastructure.map((item) => (
              <div
                key={item.titleEn}
                className="nexus-border-light flex gap-6 rounded-2xl bg-[#f8f9fb] p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c5a880]/10">
                  <item.icon className="h-6 w-6 text-[#c5a880]" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-[#0f1a2e]">
                    {locale === "ar" ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5a6478]">
                    {locale === "ar" ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark bg-[#030f26] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="section-overtitle mb-4">{a.compliance.overtitle}</p>
              <h2 className="section-heading mb-6 text-3xl font-bold text-white sm:text-4xl">
                {a.compliance.title}
              </h2>
              <p className="mb-6 leading-relaxed text-[#8a99ad]">
                {locale === "ar"
                  ? "تواجه المنظمات الدولية الداخلة لأسواق الحج والعمرة السعودية مشهداً من المتطلبات التنظيمية ومعايير الموردين وأطر العقود الفريدة لصناعة الحج والعمرة. تعمل نكسس الحرمين كجسر امتثال — تحوّل المتطلبات المؤسسية إلى مسارات شراكة قابلة للتنفيذ."
                  : "International organizations entering Saudi pilgrimage markets face a landscape of regulatory requirements, supplier standards, and contractual frameworks unique to the Hajj and Umrah industry. Nexus Haramain serves as the compliance bridge — translating institutional requirements into actionable partnership pathways."}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#c5a880] transition-colors hover:text-white"
              >
                {a.compliance.discuss}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
            <ul className="space-y-4">
              {complianceItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 nexus-border-dark rounded-lg bg-[#081736] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#c5a880]" />
                  <span className="text-sm text-[#8a99ad]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-light bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="section-overtitle section-overtitle-light mb-4">
              {a.values.overtitle}
            </p>
            <h2 className="section-heading text-3xl font-bold text-[#0f1a2e] sm:text-4xl">
              {a.values.title}
            </h2>
          </div>
          <HorizontalScroll className="md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.titleEn}
                className="min-w-[240px] snap-center nexus-border-light rounded-2xl bg-[#f8f9fb] p-6 text-center md:min-w-0"
              >
                <h3 className="mb-3 font-serif text-xl font-semibold text-[#c5a880]">
                  {locale === "ar" ? value.titleAr : value.titleEn}
                </h3>
                <p className="text-sm leading-relaxed text-[#5a6478]">
                  {locale === "ar" ? value.descAr : value.descEn}
                </p>
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      <section className="section-light bg-white pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="partnership-card relative overflow-hidden rounded-3xl">
            <Image
              src={images.mosqueNight}
              alt="Illuminated mosque"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030f26]/95 via-[#030f26]/85 to-[#030f26]/70" />
            <div className="relative px-8 py-16 text-center sm:px-16">
              <Scale className="mx-auto mb-6 h-10 w-10 text-[#c5a880]" />
              <h2 className="section-heading mb-4 text-3xl font-bold text-white">
                {a.ctaTitle}
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-white/80">
                {a.ctaDescription}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#c5a880] px-6 py-3 text-sm font-medium text-[#030f26] transition-all hover:bg-[#dfc19b]"
              >
                {t.nav.becomePartner}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
