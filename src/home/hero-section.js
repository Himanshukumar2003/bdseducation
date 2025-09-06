"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/hero-1.png",
    title: "Welcome to Our Kindergarten",
    subtitle: "Where Learning Begins with Fun and Discovery",
    buttonText: "Explore Programs",
  },
  {
    image: "/images/hero-2.png",
    title: "Creative Learning Environment",
    subtitle: "Nurturing Young Minds Through Play and Education",
    buttonText: "Learn More",
  },
  {
    image: "/images/hero-3.png",
    title: "Safe & Secure Campus",
    subtitle: "A Protected Space for Your Child's Growth and Development",
    buttonText: "Visit Us",
  },
];

export default function HeroSection() {
  return (
    <div className="h-[80vh] relative overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={1000}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div className="text-center text-white z-20 relative max-w-3xl px-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase mb-4 fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 drop-shadow-lg fade-in-up-delayed">
                  {slide.subtitle}
                </p>
                <button className="btn fade-in-up-delayed">
                  <span>{slide.buttonText}</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
