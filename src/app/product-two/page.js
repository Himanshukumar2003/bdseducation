"use client";

import { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, FILE_BASE_URL } from "@/lib/features/productsSlice";

export default function BookPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);

  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading)
    return (
      <p className="text-center text-lg font-medium">📚 Loading Books...</p>
    );
  if (error)
    return <p className="text-center text-red-500 font-semibold">{error}</p>;
  if (!books || books.length === 0)
    return <p className="text-center text-gray-600">No books available</p>;

  const book = books[3];
  const bookImages = products.pictures?.length
    ? book.pictures.map((img) => `${FILE_BASE_URL}${img}`)
    : ["/placeholder.svg"];

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(index);
    }
  };
  // Remove empty tags and multiple spaces
  const cleanContent = book.content
    .replace(/<[^/>][^>]*><\/[^>]+>/g, "") // remove empty tags
    .replace(/\s{2,}/g, " ") // replace multiple spaces with single
    .trim();

  return (
    <>
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Sidebar - Thumbnails */}
        <div className="lg:col-span-1">
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
            {bookImages.map((src, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:scale-105 ${
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
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Book Image with Swiper */}
        <div className="lg:col-span-6">
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
                    <div className="flex justify-center items-center h-full max-h-[480px]">
                      <Image
                        width={550}
                        height={550}
                        src={src}
                        alt={`Book image ${index + 1}`}
                        className="aspect-square object-cover rounded-xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-5 space-x-2 ">
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
        <div className="lg:col-span-5 space-y-6">
          <h1 className="text-3xl font-semibold  leading-snug">
            {book.title || "Untitled Book"}
          </h1>

          <p className="text-gray-700 leading-relaxed text-base">
            {book.description || "No description available for this book."}
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
              ${book.price || "0.00"}
            </span>
            {book.oldPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${book.oldPrice}
              </span>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button class="btn">
              <span>
                BUY NOW{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right w-4 h-4 ml-2 inline"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </button>

            <button class="btn     bg-transparent  border-2 border-blue-700 text-blue-500 hover:text-white">
              <span>
                Add TO CART{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right w-4 h-4 ml-2 inline"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="section bg-gray-100">

    <div className="max-w-7xl mx-auto py-5 px-4     container">
       
        <h2 className="text-left text-5xl text-blue-500  mb-4   font-bold">
          Product information
        </h2>
   
     <div
  className="prose lg:prose-lg max-w-7xl 
       prose-headings:text-gray-900
       prose-headings:mb-3
       prose-p:text-gray-700
       prose-p:text-lg
       prose-p:m-0
       prose-ul:list-disc
       prose-ol:list-decimal
       prose-li:ml-6
       prose-li:m-0
       prose-ul:marker:text-blue-600  /* bullet/dot blue */
       prose-img:rounded-lg prose-img:m-0 prose-img:mx-auto
       prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:text-gray-600 
       prose-a:text-blue-600 hover:prose-a:underline transition-all
       prose-table:border prose-table:border-gray-300 prose-table:rounded-lg prose-table:overflow-x-auto
       prose-th:bg-gray-100 prose-th:font-semibold prose-th:px-4 prose-th:py-2
       prose-td:px-4 prose-td:py-2
       prose-code:bg-gray-100 prose-code:rounded px-1 prose-code:text-red-600
       "
  dangerouslySetInnerHTML={{ __html: cleanContent }}
/>
</div>
      </div>
    </>
  );
}
