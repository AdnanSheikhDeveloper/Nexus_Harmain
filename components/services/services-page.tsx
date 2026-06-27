"use client";

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
import { useLanguage } from "@/components/language-provider";
import ImageBanner from "@/components/image-banner";
import PageHero from "@/components/page-hero";
import { images } from "@/lib/images";

const serviceMeta: {
  id: string;
  icon: LucideIcon;
  image: string;
  capabilitiesEn: string[];
  capabilitiesAr: string[];
  taglineEn: string;
  taglineAr: string;
  descriptionEn: string;
  descriptionAr: string;
}[] = [
  {
    id: "global-marketing",
    icon: Megaphone,
    image: images.serviceCards[0],
    taglineEn: "Commercial presence where your buyers are",
    taglineAr: "حضور تجاري حيث يتواجد مشتريك",
    descriptionEn:
      "We deliver strategic marketing, trade exhibitions, business networking, and commercial representation tailored to the Hajj, Umrah, and hospitality sectors. Our teams operate across primary source markets, positioning Saudi suppliers in front of the missions, operators, and institutions that drive pilgrimage volume.",
    descriptionAr:
      "نقدم تسويقاً استراتيجياً ومعارض تجارية وشبكات أعمال وتمثيلاً تجارياً مخصصاً لقطاعات الحج والعمرة والضيافة. تعمل فرقنا عبر أسواق المصدر الرئيسية، وتضع الموردين السعوديين أمام البعثات والمشغلين والمؤسسات التي تدفع حجم الحج والعمرة.",
    capabilitiesEn: [
      "Trade show representation and booth management",
      "Source market roadshows and buyer meetings",
      "Brand positioning for Saudi hospitality and pilgrimage suppliers",
      "Mission and operator relationship development",
      "Multi-market campaign coordination",
      "Commercial representation agreements",
    ],
    capabilitiesAr: [
      "تمثيل المعارض التجارية وإدارة الأجنحة",
      "جولات أسواق المصدر ولقاءات المشترين",
      "تموضع العلامة التجارية لموردي الضيافة والحج السعوديين",
      "تطوير علاقات البعثات والمشغلين",
      "تنسيق الحملات متعددة الأسواق",
      "اتفاقيات التمثيل التجاري",
    ],
  },
  {
    id: "hospitality",
    icon: Building2,
    image: images.serviceCards[1],
    taglineEn: "Connecting rooms to pilgrimage demand",
    taglineAr: "ربط الغرف بطلب الحج والعمرة",
    descriptionEn:
      "We connect hospitality providers with Hajj Missions, Umrah operators, and international travel partners seeking reliable accommodation across Makkah, Madinah, Jeddah, and beyond.",
    descriptionAr:
      "نربط مزودي الضيافة ببعثات الحج ومشغلي العمرة وشركاء السفر الدوليين الباحثين عن إقامة موثوقة في مكة والمدينة وجدة وما بعدها.",
    capabilitiesEn: [
      "Mission and operator hotel sourcing",
      "Seasonal contract structuring",
      "Group accommodation pipeline development",
      "Quality assurance and partner vetting",
      "Rate negotiation and allocation management",
      "Multi-property portfolio representation",
    ],
    capabilitiesAr: [
      "توفير فنادق للبعثات والمشغلين",
      "هيكلة العقود الموسمية",
      "تطوير خط أنابيب الإقامة الجماعية",
      "ضمان الجودة وتدقيق الشركاء",
      "تفاوض الأسعار وإدارة التخصيص",
      "تمثيل محافظ متعددة العقارات",
    ],
  },
  {
    id: "hajj-umrah",
    icon: Users,
    image: images.serviceCards[2],
    taglineEn: "End-to-end pilgrimage operational support",
    taglineAr: "دعم تشغيلي شامل للحج والعمرة",
    descriptionEn:
      "Comprehensive pilgrimage support designed for Hajj Missions, Umrah operators, and pilgrimage organizations. We help international entities navigate the Saudi ecosystem.",
    descriptionAr:
      "دعم شامل للحج والعمرة مصمم لبعثات الحج ومشغلي العمرة ومنظمات الحج. نساعد الجهات الدولية على التنقل في المنظومة السعودية.",
    capabilitiesEn: [
      "Mission and operator onboarding",
      "Ground handler and transport coordination",
      "Pilgrimage program design and optimization",
      "Supplier network access across the Holy Cities",
      "Seasonal operations planning",
      "Cross-border partnership facilitation",
    ],
    capabilitiesAr: [
      "إدماج البعثات والمشغلين",
      "تنسيق مشغلي الأرض والنقل",
      "تصميم وتحسين برامج الحج والعمرة",
      "الوصول لشبكة الموردين في المدن المقدسة",
      "تخطيط العمليات الموسمية",
      "تسهيل الشراكات عبر الحدود",
    ],
  },
  {
    id: "smart-pilgrim",
    icon: Smartphone,
    image: images.serviceCards[3],
    taglineEn: "Safety and visibility at scale",
    taglineAr: "السلامة والرؤية على نطاق واسع",
    descriptionEn:
      "Wearable safety, GPS tracking, health monitoring, emergency alerts, and centralized mission dashboards — purpose-built for organizations managing pilgrims at scale.",
    descriptionAr:
      "أجهزة قابلة للارتداء للسلامة وتتبع GPS ومراقبة الصحة وتنبيهات الطوارئ ولوحات تحكم مركزية للبعثات — مصممة للمنظمات التي تدير الحجاج على نطاق واسع.",
    capabilitiesEn: [
      "Wearable safety and location tracking",
      "Health monitoring and emergency alert systems",
      "Centralized mission control dashboards",
      "Group movement and geofencing",
      "Integration with existing operator systems",
      "Pilot programs and phased deployment",
    ],
    capabilitiesAr: [
      "أجهزة السلامة وتتبع الموقع",
      "مراقبة الصحة وأنظمة تنبيه الطوارئ",
      "لوحات تحكم مركزية للبعثات",
      "حركة المجموعات والسياج الجغرافي",
      "التكامل مع أنظمة المشغلين الحالية",
      "برامج تجريبية ونشر مرحلي",
    ],
  },
  {
    id: "connectivity",
    icon: Wifi,
    image: images.serviceCards[4],
    taglineEn: "Connected before, during, and after the journey",
    taglineAr: "متصل قبل وأثناء وبعد الرحلة",
    descriptionEn:
      "Pre-activated SIM and eSIM solutions keeping pilgrims connected before, during, and after their journey. We partner with leading telecom providers to deliver bulk connectivity programs.",
    descriptionAr:
      "حلول SIM وeSIM مفعّلة مسبقاً تبقي الحجاج متصلين قبل وأثناء وبعد رحلتهم. نتشارك مع مزودي الاتصالات الرائدين لتقديم برامج اتصال جماعية.",
    capabilitiesEn: [
      "Pre-activated SIM and eSIM distribution",
      "Bulk connectivity programs for missions",
      "Arrival-ready connectivity packages",
      "Multi-carrier coverage across Saudi Arabia",
      "Usage analytics and group management",
      "White-label connectivity for operators",
    ],
    capabilitiesAr: [
      "توزيع SIM وeSIM مفعّلة مسبقاً",
      "برامج اتصال جماعية للبعثات",
      "حزم اتصال جاهزة عند الوصول",
      "تغطية متعددة المشغلين في السعودية",
      "تحليلات الاستخدام وإدارة المجموعات",
      "اتصال بعلامة بيضاء للمشغلين",
    ],
  },
];

export default function ServicesPage() {
  const { locale, t } = useLanguage();
  const s = t.services;
  const serviceTitles = t.home.whatWeDo.services;

  return (
    <>
      <PageHero image={images.business} alt="Business partnership meeting">
        <p className="section-overtitle mb-4">{s.overtitle}</p>
        <h1 className="section-heading mb-6 max-w-3xl text-4xl font-bold sm:text-5xl">
          {s.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed">
          {s.description}
        </p>
      </PageHero>

      <section className="section-light bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {serviceMeta.map((service, index) => {
              const title = serviceTitles[index]?.title ?? "";
              const tagline = locale === "ar" ? service.taglineAr : service.taglineEn;
              const description = locale === "ar" ? service.descriptionAr : service.descriptionEn;
              const capabilities = locale === "ar" ? service.capabilitiesAr : service.capabilitiesEn;

              return (
                <article key={service.id} id={service.id} className="scroll-mt-24">
                  <div
                    className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative h-72 overflow-hidden rounded-2xl border border-[#0f1a2e]/10 sm:h-96">
                      <Image
                        src={service.image}
                        alt={title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    <div>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c5a880]/10">
                        <service.icon className="h-6 w-6 text-[#c5a880]" />
                      </div>
                      <p className="section-overtitle section-overtitle-light mb-3">
                        {tagline}
                      </p>
                      <h2 className="section-heading mb-4 text-2xl font-bold text-[#0f1a2e] sm:text-3xl">
                        {title}
                      </h2>
                      <p className="mb-6 leading-relaxed text-[#5a6478]">
                        {description}
                      </p>
                      <ul className="mb-8 space-y-3">
                        {capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-start gap-3 text-sm text-[#5a6478]"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a880]" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-[#030f26] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#c5a880]"
                      >
                        {s.consult}
                        <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-dark bg-[#030f26] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="section-overtitle mb-4">{s.howWeDeliver}</p>
            <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
              {s.howTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[Globe, Shield, BarChart3, Headphones].map((Icon, i) => (
              <div
                key={s.howItems[i].title}
                className="nexus-border-dark rounded-xl bg-[#081736] p-6 text-center"
              >
                <Icon className="mx-auto mb-4 h-8 w-8 text-[#c5a880]" />
                <h3 className="mb-2 font-serif text-lg font-semibold text-white">
                  {s.howItems[i].title}
                </h3>
                <p className="text-sm text-[#8a99ad]">{s.howItems[i].text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f9] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ImageBanner
            image={images.mosqueNight}
            alt="Illuminated mosque at night"
            align="center"
          >
            <h2 className="section-heading mb-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              {s.ctaTitle}
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed sm:text-lg">
              {s.ctaDescription}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#c5a880] px-6 py-3 text-sm font-semibold text-[#030f26] transition-all hover:bg-[#dfc19b]"
            >
              {s.scheduleConsultation}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </ImageBanner>
        </div>
      </section>
    </>
  );
}
