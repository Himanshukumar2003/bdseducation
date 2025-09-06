"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function VideoSection() {
  const videos = [
    "https://www.youtube.com/embed/pDRkHkmHdx0?si=0EVaPmReTFUJ6O67",
    "https://www.youtube.com/embed/pDRkHkmHdx0?si=0EVaPmReTFUJ6O67",
    "https://www.youtube.com/embed/pDRkHkmHdx0?si=0EVaPmReTFUJ6O67",
    "https://www.youtube.com/embed/pDRkHkmHdx0?si=0EVaPmReTFUJ6O67",
    "https://www.youtube.com/embed/pDRkHkmHdx0?si=0EVaPmReTFUJ6O67",
    "https://www.youtube.com/embed/pDRkHkmHdx0?si=0EVaPmReTFUJ6O67",
    "https://www.youtube.com/embed/pDRkHkmHdx0?si=0EVaPmReTFUJ6O67",
    "https://www.youtube.com/embed/pDRkHkmHdx0?si=0EVaPmReTFUJ6O67",
    "https://www.youtube.com/embed/pDRkHkmHdx0?si=0EVaPmReTFUJ6O67",
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Start a Journey with a Buildable Robotics Kit
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {videos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className=" w-full overflow-hidden rounded-lg shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src={src}
                  title={`YouTube video ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
                  allowFullScreen
                  className="min-h-[350px]"
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
