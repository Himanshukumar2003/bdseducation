"use client";

import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const slides = [
    { id: 1, src: "/images/hero-1.jpg", alt: "Hero Image 1" },
    { id: 2, src: "/images/hero-2.jpg", alt: "Hero Image 2" },
    { id: 3, src: "/images/hero-3.jpg", alt: "Hero Image 3" },
    { id: 4, src: "/images/hero-4.jpg", alt: "Hero Image 4" },
    { id: 5, src: "/images/hero-5.jpg", alt: "Hero Image 5" },
  ];

  return (
    <section className="relative w-full  overflow-hidden">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
        style={{ padding: "0px" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={2000}
                height={2000}
                className=" w-full"
                priority={index === 0}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
