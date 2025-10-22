"use client";

import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem, toggleCart } from "@/lib/features/slice";
import BuyNowButton from "@/components/ui/buynow-btn";
import { Breadcrumb } from "@/components/breadcrumb";
import { AddToCartButtonProduct } from "@/components/cart-button";

export default function BookImageGallery({ bookImages, product }) {
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(index);
    }
  };

  const handleAddToCart = () => {
    dispatch(addItem(product));
    dispatch(toggleCart()); // agar toggleCart use karna hai to import kar lena
  };

  return (
    <>
      <Breadcrumb
        title={product.title}
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: product.title,
            href: product.title,
            isCurrent: true,
          },
        ]}
      />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Sidebar - Thumbnails */}
          <div className="md:col-span-1 order-2 md:order-1">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
              {bookImages.map((src, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 shadow-sm ${
                    activeIndex === index
                      ? "border-blue-600 ring-2 ring-blue-300"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Book view ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full aspect-square  object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main Book Image with Swiper */}
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="relative">
              <Badge className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md z-10 shadow-md">
                {activeIndex + 1}/{bookImages.length}
              </Badge>

              <div className="rounded-2xl relative overflow-hidden">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  onSwiper={(swiper) => {
                    mainSwiperRef.current = swiper;
                  }}
                  navigation
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                  {bookImages.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex justify-center items-center h-full ">
                        <Image
                          width={550}
                          height={550}
                          src={src}
                          alt={`Book image ${index + 1}`}
                          className="aspect-square  max-h-[350px]  object-contain rounded-xl"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Indicators */}
              <div className="flex justify-center mt-5 space-x-2">
                {bookImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-blue-600 w-6"
                        : "bg-gray-300 hover:bg-gray-400 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Book Details */}
          <div className="md:col-span-5 space-y-6 order-3 ">
            <h1 className="text-3xl font-semibold leading-snug">
              {product.title || "Untitled Book"}
            </h1>

            <p className="text-gray-700 leading-relaxed text-base">
              {product.description || "No description available for this book."}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">(5.0 Reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-4xl text-blue-500 drop-shadow-sm italic">
                ${product.price || "0.00"}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <BuyNowButton
                product={{
                  item_id: product.id,
                  item_type: "product",
                }}
              />

              <AddToCartButtonProduct
                product={{
                  item_id: product.id,
                  item_type: "product",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
