"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SparklesIcon } from "lucide-react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import { Badge } from "@/components/ui/badge";

export const CardCarousel = ({
  images,
  autoplayDelay = 1500,
  showPagination = false,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `;
  return (
    <section className="w-ace-y-4">
      <style>{css}</style>
      <div>
        <div className="flex w-full max-w-6xl mx-auto items-center justify-center gap-4">
          <div className="w-full">
            <Swiper
              spaceBetween={25}
              autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
              }}
              pagination={showPagination}
              navigation={
                showNavigation
                  ? {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }
                  : undefined
              }
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            >
              {images.map((card, index) => (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden shadow-lg group transition-transform duration-500 hover:scale-105"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {/* Card Image */}
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={400}
                      height={400}
                      className="w-full min-h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay (black → blue on hover) */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                              group-hover:from-blue-600/70 group-hover:via-blue-400/30 group-hover:to-transparent 
                              transition-colors duration-500"
                    ></div>

                    {/* Text Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                      <h3 className="text-white font-bold text-lg mb-2 drop-shadow-md">
                        {card.title}
                      </h3>
                      <p className="text-gray-200 text-sm line-clamp-4 drop-shadow-sm">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {images.map((card, index) => (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden shadow-lg group transition-transform duration-500 hover:scale-105"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {/* Card Image */}
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={400}
                      height={400}
                      className="w-full min-h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay (black → blue on hover) */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                              group-hover:from-blue-600/70 group-hover:via-blue-400/30 group-hover:to-transparent 
                              transition-colors duration-500"
                    ></div>

                    {/* Text Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                      <h3 className="text-white font-bold text-lg mb-2 drop-shadow-md">
                        {card.title}
                      </h3>
                      <p className="text-gray-200 text-sm line-clamp-4 drop-shadow-sm">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
