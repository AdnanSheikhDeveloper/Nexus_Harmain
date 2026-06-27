"use client";

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
import { useLanguage } from "@/components/language-provider";
import HorizontalScroll from "@/components/horizontal-scroll";
import { images } from "@/lib/images";

const serviceHrefs = [
  "/services#global-marketing",
  "/services#hospitality",
  "/services#hajj-umrah",
  "/services#smart-pilgrim",
  "/services#connectivity",
];

const pillarIcons = [Globe, Network, TrendingUp];
const whyIcons = [Shield, Handshake, Globe, TrendingUp, Lightbulb, Building2];

export default function HomePage() {
  const { t } = useLanguage();
  const h = t.home;

  const stats = [
    { value: "20+", label: h.stats.sourceMarkets },
    { value: "50+", label: h.stats.activePartners },
    { value: "3M+", label: h.stats.pilgrimsServed },
    { value: "Riyadh", label: h.stats.headquarters },
  ];

  const pillars = [
    {
      icon: pillarIcons[0],
      title: h.whoWeAre.representation,
      description: h.whoWeAre.representationDesc,
    },
    {
      icon: pillarIcons[1],
      title: h.whoWeAre.access,
      description: h.whoWeAre.accessDesc,
    },
    {
      icon: pillarIcons[2],
      title: h.whoWeAre.growth,
      description: h.whoWeAre.growthDesc,
    },
  ];

  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden section-dark bg-[#030f26]">
        <div className="absolute inset-0">
          <Image
            src={images.heroMakkah}
            alt="Aerial view of Makkah and Masjid al-Haram at golden hour"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030f26]/92 via-[#030f26]/75 to-[#030f26]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030f26]/80 via-transparent to-[#030f26]/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-44">
          <p className="section-overtitle mb-6">{h.heroOvertitle}</p>
          <h1 className="section-heading mb-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {h.heroTitle}{" "}
            <span className="text-[#c5a880]">{h.heroTitleAccent}</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-[#c5d0de]">
            {h.heroDescription}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#030f26] transition-all hover:bg-[#c5a880] hover:text-white"
            >
              {t.nav.becomePartner}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-[#c5a880] hover:bg-white/15"
            >
              {h.scheduleConsultation}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats + Who We Are */}
      <section className="section-light bg-[#f4f6f9]">
        <div className="mx-auto max-w-7xl px-4 pt-0 pb-24 sm:px-6 lg:px-8">
          <div className="relative z-10 -mt-14 mb-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-card rounded-2xl px-4 py-8 text-center sm:px-6"
              >
                <p className="font-serif text-2xl font-bold text-[#c5a880] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium text-[#a8b4c4] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="section-overtitle section-overtitle-light mb-4">
                {h.whoWeAre.overtitle}
              </p>
              <h2 className="section-heading mb-6 text-3xl font-bold text-[#0f1a2e] sm:text-4xl">
                {h.whoWeAre.title}
              </h2>
              <p className="mb-4 leading-relaxed text-[#4a5568]">{h.whoWeAre.p1}</p>
              <p className="mb-4 leading-relaxed text-[#4a5568]">{h.whoWeAre.p2}</p>
              <p className="leading-relaxed text-[#4a5568]">{h.whoWeAre.p3}</p>
            </div>

            <HorizontalScroll className="md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="pillar-card card-equal min-w-[260px] snap-center rounded-2xl p-6 md:min-w-0"
                >
                  <div className="pillar-icon-wrap mb-5">
                    <pillar.icon className="h-6 w-6 text-[#c5a880]" />
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-[#0f1a2e]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a5568]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </HorizontalScroll>
          </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="section-dark bg-[#030f26] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="section-overtitle mb-4">{h.whatWeDo.overtitle}</p>
              <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
                {h.whatWeDo.title}
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#c5a880] transition-colors hover:text-white"
            >
              {h.whatWeDo.exploreAll}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>

          <HorizontalScroll className="md:grid-cols-2 lg:grid-cols-3">
            {h.whatWeDo.services.map((service, i) => (
              <Link
                key={service.title}
                href={serviceHrefs[i]}
                className="card-equal group min-w-[300px] snap-center overflow-hidden rounded-2xl border border-white/[0.08] md:min-w-0"
              >
                <div className="relative h-52 shrink-0">
                  <Image
                    src={images.serviceCards[i]}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 300px, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081736] via-[#030f26]/40 to-transparent" />
                </div>
                <div className="card-equal-body bg-[#081736] p-6">
                  <h3 className="mb-3 font-serif text-lg font-semibold text-white transition-colors group-hover:text-[#c5a880]">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-[#8a99ad]">
                    {service.description}
                  </p>
                  <span className="card-equal-footer inline-flex items-center gap-1 text-sm font-medium text-[#c5a880]">
                    {h.whatWeDo.learnMore}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </HorizontalScroll>
        </div>
      </section>

      {/* 4. Industries */}
      <section className="section-light bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="section-overtitle section-overtitle-light mb-4">
              {h.industries.overtitle}
            </p>
            <h2 className="section-heading mb-4 text-3xl font-bold text-[#0f1a2e] sm:text-4xl">
              {h.industries.title}
            </h2>
            <p className="mx-auto max-w-2xl text-[#4a5568]">
              {h.industries.description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {h.industries.items.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-[#0f1a2e]/10 bg-[#f8f9fb] px-5 py-2.5 text-sm text-[#0f1a2e] transition-colors hover:border-[#c5a880] hover:text-[#c5a880]"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Nexus */}
      <section className="section-dark bg-[#030f26] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="section-overtitle mb-4">{h.whyUs.overtitle}</p>
            <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
              {h.whyUs.title}
            </h2>
          </div>

          <HorizontalScroll className="md:grid-cols-2 lg:grid-cols-3">
            {h.whyUs.items.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <div
                  key={item.title}
                  className="card-equal min-w-[280px] snap-center rounded-2xl border border-white/[0.08] bg-[#081736] p-8 transition-colors hover:border-[#c5a880]/35 md:min-w-0"
                >
                  <Icon className="mb-4 h-8 w-8 text-[#c5a880]" />
                  <h3 className="mb-3 font-serif text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#8a99ad]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </HorizontalScroll>
        </div>
      </section>

      {/* 6. Partnership CTA */}
      <section className="section-light bg-[#f4f6f9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="partnership-card relative overflow-hidden rounded-3xl">
            <Image
              src={images.mosqueNight}
              alt="Illuminated mosque at night"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030f26]/97 via-[#030f26]/88 to-[#030f26]/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030f26]/60 via-transparent to-transparent" />

            <div className="relative flex min-h-[22rem] flex-col justify-center px-8 py-14 sm:min-h-[26rem] sm:px-12 sm:py-20 lg:min-h-[30rem] lg:max-w-2xl lg:px-16">
              <p className="section-overtitle section-overtitle-with-line section-overtitle-on-dark mb-5">
                {h.partnership.overtitle}
              </p>
              <h2 className="section-heading mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {h.partnership.title}
              </h2>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-[#c5d0de] sm:text-lg">
                {h.partnership.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#c5a880] px-7 py-3.5 text-sm font-semibold text-[#030f26] shadow-lg shadow-black/20 transition-all hover:bg-[#dfc19b]"
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
