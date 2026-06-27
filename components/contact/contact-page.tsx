"use client";

import { useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import PageHero from "@/components/page-hero";
import { images } from "@/lib/images";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();
  const c = t.contact;

  const contactDetails = [
    {
      icon: Mail,
      label: c.labels.email,
      value: "partnerships@nexusharamain.com",
      href: "mailto:partnerships@nexusharamain.com",
    },
    {
      icon: Phone,
      label: c.labels.phone,
      value: "+966 (0) 11 000 0000",
      href: "tel:+966110000000",
    },
    {
      icon: MapPin,
      label: c.labels.headquarters,
      value: "King Fahd Road, Riyadh, Saudi Arabia",
    },
    {
      icon: Clock,
      label: c.labels.businessHours,
      value: "Sunday – Thursday, 9:00 AM – 6:00 PM (AST)",
    },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero image={images.business} alt="Partnership consultation">
        <p className="section-overtitle mb-4">{c.overtitle}</p>
        <h1 className="section-heading mb-6 max-w-3xl text-4xl font-bold sm:text-5xl">
          {c.title}
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed">
          {c.description}
        </p>
      </PageHero>

      <section className="section-dark bg-[#030f26] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <p className="section-overtitle mb-4">{c.directContact}</p>
              <h2 className="section-heading mb-6 text-2xl font-bold text-white sm:text-3xl">
                {c.directTitle}
              </h2>
              <p className="mb-10 leading-relaxed text-[#8a99ad]">
                {c.directDescription}
              </p>

              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c5a880]/10">
                      <detail.icon className="h-5 w-5 text-[#c5a880]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#c5a880]">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm text-white transition-colors hover:text-[#c5a880]"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 nexus-border-dark rounded-xl bg-[#081736] p-6">
                <p className="mb-2 text-sm font-semibold text-white">
                  {c.regionalPresence}
                </p>
                <p className="text-sm text-[#8a99ad]">{t.footer.cities}</p>
              </div>
            </div>

            <div className="nexus-border-dark rounded-2xl bg-[#081736] p-8">
              <h2 className="section-heading mb-2 text-xl font-bold text-white">
                {c.formTitle}
              </h2>
              <p className="mb-8 text-sm text-[#8a99ad]">{c.formDescription}</p>

              {submitted ? (
                <div className="rounded-xl border border-[#c5a880]/30 bg-[#c5a880]/10 p-8 text-center">
                  <p className="mb-2 font-serif text-xl font-semibold text-white">
                    {c.thankYou}
                  </p>
                  <p className="text-sm text-[#8a99ad]">{c.thankYouDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      {c.fullName}
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#8a99ad]/50 outline-none transition-colors focus:border-[#c5a880]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      {c.companyName}
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#8a99ad]/50 outline-none transition-colors focus:border-[#c5a880]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      {c.country}
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#8a99ad]/50 outline-none transition-colors focus:border-[#c5a880]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="entityType"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      {c.entityType}
                    </label>
                    <select
                      id="entityType"
                      name="entityType"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#c5a880]"
                    >
                      <option value="" disabled className="bg-[#081736]">
                        {c.selectEntity}
                      </option>
                      {c.entityTypes.map((type) => (
                        <option key={type} value={type} className="bg-[#081736]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="scope"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      {c.scope}
                    </label>
                    <textarea
                      id="scope"
                      name="scope"
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#8a99ad]/50 outline-none transition-colors focus:border-[#c5a880]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c5a880] px-6 py-3 text-sm font-medium text-[#030f26] transition-all hover:bg-[#dfc19b] sm:w-auto"
                  >
                    {c.submit}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
