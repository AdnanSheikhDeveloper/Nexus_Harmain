"use client";

import { useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";

const entityTypes = [
  "Hajj Mission",
  "Umrah Operator",
  "Hotel / Hospitality Group",
  "Transport Company",
  "Travel Agency",
  "Technology Provider",
  "Government Delegation",
  "Other",
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "partnerships@nexusharamain.com",
    href: "mailto:partnerships@nexusharamain.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+966 (0) 11 000 0000",
    href: "tel:+966110000000",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "King Fahd Road, Riyadh, Saudi Arabia",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Sunday – Thursday, 9:00 AM – 6:00 PM (AST)",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Page Hero */}
      <section className="border-b border-white/[0.08] bg-[#081736]/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="section-overtitle mb-4">Contact</p>
          <h1 className="section-heading mb-6 max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            Let&apos;s start the conversation.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#8a99ad]">
            Whether you&apos;re a Saudi supplier seeking international reach or
            an international organization looking for trusted pilgrimage
            partners, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Contact Intelligence */}
          <div>
            <p className="section-overtitle mb-4">Direct Contact</p>
            <h2 className="section-heading mb-6 text-2xl font-bold text-white sm:text-3xl">
              Partnership inquiries welcome.
            </h2>
            <p className="mb-10 leading-relaxed text-[#8a99ad]">
              Our partnerships team responds to all inquiries within one
              business day. For urgent seasonal matters, please indicate your
              timeline in the scope of inquiry.
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

            <div className="mt-10 nexus-border rounded-xl bg-[#081736] p-6">
              <p className="mb-2 text-sm font-semibold text-white">
                Regional Presence
              </p>
              <p className="text-sm text-[#8a99ad]">
                Riyadh · Jeddah · Makkah · Madinah
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="nexus-border rounded-2xl bg-[#081736] p-8">
            <h2 className="section-heading mb-2 text-xl font-bold text-white">
              Partnership Inquiry Form
            </h2>
            <p className="mb-8 text-sm text-[#8a99ad]">
              Complete the form below and a member of our partnerships team will
              be in touch.
            </p>

            {submitted ? (
              <div className="rounded-xl border border-[#c5a880]/30 bg-[#c5a880]/10 p-8 text-center">
                <p className="mb-2 font-serif text-xl font-semibold text-white">
                  Thank you for your inquiry.
                </p>
                <p className="text-sm text-[#8a99ad]">
                  A member of our partnerships team will respond within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#8a99ad]/50 outline-none transition-colors focus:border-[#c5a880]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#8a99ad]/50 outline-none transition-colors focus:border-[#c5a880]"
                    placeholder="Your organization"
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#8a99ad]/50 outline-none transition-colors focus:border-[#c5a880]"
                    placeholder="Country of operation"
                  />
                </div>

                <div>
                  <label
                    htmlFor="entityType"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Entity Type
                  </label>
                  <select
                    id="entityType"
                    name="entityType"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#c5a880]"
                  >
                    <option value="" disabled className="bg-[#081736]">
                      Select entity type
                    </option>
                    {entityTypes.map((type) => (
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
                    Scope of Inquiry
                  </label>
                  <textarea
                    id="scope"
                    name="scope"
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#8a99ad]/50 outline-none transition-colors focus:border-[#c5a880]"
                    placeholder="Describe your partnership objectives, target markets, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#030f26] transition-all hover:bg-[#c5a880] hover:text-white sm:w-auto"
                >
                  Submit Inquiry
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
