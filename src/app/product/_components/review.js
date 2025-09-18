"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Melissa Blue",
      title: "MANAGER CHO",
      rating: 5,
      content:
        "Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd. Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.",
      avatar: "/images/img1.png",
    },
    {
      id: 2,
      name: "Json Taylor",
      title: "CEO OF NOKIA",
      rating: 4,
      content:
        "Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd. Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.",
      avatar: "/images/img1.png",
    },
    {
      id: 3,
      name: "Sophia Green",
      title: "FOUNDER OF TECHSOFT",
      rating: 5,
      content:
        "Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd. Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.",
      avatar: "/images/img1.png",
    },
    {
      id: 4,
      name: "Michael Lee",
      title: "DIRECTOR, CREATIVE HUB",
      rating: 4,
      content:
        "Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd. Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.",
      avatar: "/images/img1.png",
    },
  ];

  function getInitials(name) {
    return name
      .split(" ")
      .map(function (n) {
        return n[0];
      })
      .join("")
      .toUpperCase();
  }

  function renderStars(rating) {
    const items = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating;
      items.push(
        <Star
          key={i}
          className="h-4 w-4"
          fill={filled ? "currentColor" : "none"}
          // stroke always shows; fill only when active
        />
      );
    }
    return (
      <div
        className="flex items-center gap-1 text-yellow-400"
        aria-label={`${rating} out of 5 stars`}
      >
        {items}
      </div>
    );
  }

  return (
    <div className="bg-gray-50/70 section py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            We never failed to reach expectations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Some of the reviews our clients gave which brings motivation to work
            for future projects.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto"
        >
          {testimonials.map(function (t) {
            return (
              <SwiperSlide key={t.id} className="py-2">
                <div className="group relative h-full rounded-2xl border border-gray-200 bg-gradient-to-br from-card to-card/95 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-300">
                  {/* soft accent glow */}
                  <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-blue-200/40 via-blue-100/30 to-transparent" />
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-5">
                      <Avatar className="h-14 w-14 ring-2 ring-blue-400/70 transition group-hover:ring-blue-500">
                        <AvatarImage
                          src={t.avatar || "/placeholder.svg"}
                          alt={t.name}
                        />
                        <AvatarFallback className="bg-blue-50 text-blue-700 text-sm font-semibold">
                          {getInitials(t.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3">
                          <div className="truncate">
                            <h3 className="font-semibold text-lg text-foreground truncate">
                              {t.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-blue-600 tracking-wide font-medium uppercase">
                              {t.title}
                            </p>
                          </div>
                          <Quote className="h-7 w-7 text-blue-400/80 flex-shrink-0 transition-transform group-hover:scale-110" />
                        </div>
                        <div className="mt-3">{renderStars(t.rating)}</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed italic relative pl-5 border-l-2 border-blue-300/60">
                      “{t.content}”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
