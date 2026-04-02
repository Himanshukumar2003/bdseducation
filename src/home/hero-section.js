"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    src: "/images/hero-1.jpg",
    alt: "Happy child taking first steps in early childhood learning journey — Step 1: Spark of Discovery",
    priority: true,
  },
  {
    id: 2,
    src: "/images/hero-2.jpg",
    alt: "Young student exploring curiosity and creativity in a nurturing school environment",
    priority: false,
  },
  {
    id: 3,
    src: "/images/hero-3.jpg",
    alt: "Child developing confidence and social skills through guided play-based learning",
    priority: false,
  },
  {
    id: 4,
    src: "/images/hero-4.jpg",
    alt: "Kids engaged in hands-on STEM activities as part of their educational journey",
    priority: false,
  },
  {
    id: 5,
    src: "/images/hero-5.jpg",
    alt: "Joyful classroom moment celebrating growth milestones in a child's learning path",
    priority: false,
  },
];

export default function HeroSection() {
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <section
      aria-label="Child's Learning Journey — Hero Slideshow"
      className="relative w-full overflow-hidden"
    >
      <div
        className="w-full transition-opacity duration-700"
        style={{
          opacity: swiperReady ? 0 : 1,
          // Keep it in DOM but invisible so no layout shift
          position: swiperReady ? "absolute" : "relative",
          inset: 0,
          zIndex: swiperReady ? 0 : 1,
          pointerEvents: "none",
        }}
        aria-hidden={swiperReady}
      >
        <Image
          src={slides[0].src}
          alt={slides[0].alt}
          width={1920}
          height={1080}
          priority
          quality={75}
          sizes="100vw"
          className="w-full h-auto object-cover"
          style={{ display: "block" }}
        />
      </div>

      {/* ✅ Swiper — fades in once initialized */}
      <div
        className="w-full transition-opacity duration-700"
        style={{
          opacity: swiperReady ? 1 : 0,
          position: swiperReady ? "relative" : "absolute",
          inset: 0,
          zIndex: swiperReady ? 1 : 0,
        }}
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          style={{ padding: 0, margin: 0 }}
          className="w-full h-full"
          onSwiper={() => setSwiperReady(true)} // ✅ fires when Swiper is mounted & ready
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1920}
                  height={1080}
                  priority={slide.priority}
                  loading={slide.priority ? "eager" : "lazy"}
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
                  className="w-full h-auto object-cover"
                  style={{ display: "block" }}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
