"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    src: "/images/hero-1.jpg",
    alt: "Students exploring robotics kits in a BDS Education STEM lab — hands-on learning",
    priority: true,
  },
  {
    id: 2,
    src: "/images/hero-2.jpg",
    alt: "Young student building an ATL robotics project at school",
    priority: false,
  },
  {
    id: 3,
    src: "/images/hero-3.jpg",
    alt: "Children engaged in AI and coding activities in a BDS Education classroom",
    priority: false,
  },
  {
    id: 4,
    src: "/images/hero-4.jpg",
    alt: "Grade 6 students assembling STEM kits as part of the BDS Non-ATL programme",
    priority: false,
  },
  {
    id: 5,
    src: "/images/hero-5.jpg",
    alt: "Teacher-led robotics session using BDS Education's Teach It Yourself (TIY) model",
    priority: false,
  },
];

export default function HeroSection() {
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <section
      aria-label="BDS Education — Robotics and STEM Learning Showcase"
      className="relative w-full overflow-hidden"
    >
      <h1 className="sr-only">
        BDS Education — Robotics, AI &amp; STEM Lab Provider for Schools in
        India
      </h1>

      <div
        aria-hidden={swiperReady}
        style={{
          opacity: swiperReady ? 0 : 1,
          transition: "opacity 0.5s ease",
          position: "relative",
          pointerEvents: swiperReady ? "none" : "auto",
        }}
      >
        <Image
          src={slides[0].src}
          alt={slides[0].alt}
          width={1920}
          height={1080}
          priority
          fetchPriority="high"
          quality={75}
          sizes="100vw"
          className="w-full h-auto block"
        />
      </div>

      <div
        style={{
          opacity: swiperReady ? 1 : 0,
          transition: "opacity 0.5s ease",
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          className="w-full h-full"
          onSwiper={() => setSwiperReady(true)}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1920}
                height={1080}
                priority={slide.priority}
                loading={slide.priority ? "eager" : "lazy"}
                quality={75}
                sizes="100vw"
                className="w-full h-auto block"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
