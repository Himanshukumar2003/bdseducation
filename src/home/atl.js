"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const PRODUCT_LINES = [
  {
    id: "atl",
    bg: "bg-blue-50",
    imageLeft: true,
    image: {
      src: "/images/atl.jpg",
      alt: "ATL Atal Tinkering Lab full setup for schools — BDS Education robotics lab provider",
    },
    label: "ATL PRODUCT LINE",
    heading: "ATL Product Line",
    description:
      "This offering is designed for schools that wish to set up an Atal Tinkering Lab (ATL). Under this product line, we offer two types of lab setups tailored to your institution's needs and resources.",
    features: [
      {
        number: 1,
        title: "Full Lab",
        detail: "As per NITI Aayog guidelines.",
      },
      {
        number: 2,
        title: "Truncated Lab",
        detail: "Customized as per the specific needs of the school.",
      },
    ],
    cta: { label: "View all Packages", href: "/atl-packages" },
  },
  {
    id: "non-atl",
    bg: "",
    imageLeft: false,
    image: {
      src: "/images/non-atl.webp",
      alt: "Non-ATL robotics and STEM product kits for schools teaching technology from Grade 1 — BDS Education",
    },
    label: "NON-ATL PRODUCT LINE",
    heading: "Non-ATL Product Line",
    paragraphs: [
      "This offering is designed for schools that wish to start teaching technology and innovation from Grade 1 onwards.",
      "It consists of assembled products and DIY kits, enabling hands-on learning experiences for students.",
      "It comes with comprehensive TIY (Teach-It-Yourself) content for teachers and students.",
    ],
    cta: { label: "View all Products", href: "/product" },
  },
  {
    id: "smart-kits",
    bg: "bg-blue-50",
    imageLeft: true,
    image: {
      src: "/images/smart-kits.webp",
      alt: "Smart Kits Combo — theme-based robotics learning kits for children at school and home by BDS Education",
    },
    label: "SMART KITS COMBO",
    heading: "Smart Kits Combo",
    paragraphs: [
      "These specially designed combo packs contain theme-based kits along with TIY content.",
      "It offers a practical and engaging way for children to learn technology at school and home.",
    ],
    cta: { label: "View all Products", href: "/smart-Kits-combo" },
  },
];

function AtlProductLine() {
  return (
    <>
      {PRODUCT_LINES.map((line, index) => {
        const isLCP = index === 0; // 👈 ONLY first image priority

        return (
          <section
            key={line.id}
            className={`section ${line.bg}`}
            aria-labelledby={`${line.id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* IMAGE */}
                <div
                  className={`flex justify-center ${
                    line.imageLeft ? "order-2 md:order-1" : "order-2"
                  }`}
                >
                  <div className="relative w-full max-w-md aspect-[5/4]">
                    <Image
                      src={line.image.src}
                      alt={line.image.alt}
                      fill
                      className="rounded-2xl shadow-2xl object-cover hover:shadow-3xl transition-shadow duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 448px"
                      priority={isLCP}
                      fetchPriority={isLCP ? "high" : "auto"}
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className={`space-y-4 ${
                    line.imageLeft ? "order-1 md:order-2" : "order-1"
                  }`}
                >
                  <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase block">
                    {line.label}
                  </span>

                  <h2
                    id={`${line.id}-heading`}
                    className="text-3xl sm:text-4xl font-bold text-balance"
                  >
                    {line.heading} – Robotics & STEM Solutions
                  </h2>

                  {line.description && (
                    <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                      {line.description}
                    </p>
                  )}

                  {line.features && (
                    <ul
                      className="space-y-4"
                      aria-label="ATL lab setup options"
                    >
                      {line.features.map((f) => (
                        <li key={f.number} className="flex gap-4 items-start">
                          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-b from-[#0053a3] to-[#3366cc] text-white flex items-center justify-center font-bold text-sm">
                            {f.number}
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 text-lg">
                              {f.title}
                            </h3>
                            <p className="text-slate-600 text-sm mt-1">
                              {f.detail}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  {line.paragraphs?.map((para, i) => (
                    <p
                      key={i}
                      className="text-lg text-slate-600 leading-relaxed max-w-lg"
                    >
                      {para}
                    </p>
                  ))}

                  <div>
                    <Link
                      href={line.cta.href}
                      className="btn"
                      aria-label={`${line.cta.label} — ${line.heading}`}
                      prefetch={false}
                    >
                      {line.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default memo(AtlProductLine);
