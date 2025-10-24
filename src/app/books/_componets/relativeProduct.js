"use client";

import { fetchBooks } from "@/lib/features/productsSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // to get current URL slug

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Books() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.products);

  const pathname = usePathname(); // e.g. /books/some-slug
  // Extract slug from pathname
  const currentSlug = pathname?.split("/").pop();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const bgColors = [
    "bg-cyan-100",
    "bg-purple-100",
    "bg-yellow-100",
    "bg-orange-100",
    "bg-green-100",
    "bg-red-100",
  ];

  const titleColors = [
    "text-cyan-600",
    "text-purple-700",
    "text-gray-700",
    "text-orange-500",
    "text-green-500",
    "text-red-500",
  ];

  // Filter out the book matching the current slug
  const filteredBooks = books.filter((book) => book.slug !== currentSlug);

  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Books
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Our Related Books
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Explore more books from our Easy Computers & Coding series. Each
            book is designed to make learning fun, interactive, and effective
            for students across different grades.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          breakpoints={{
            // Responsive behavior
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {filteredBooks.map((item, index) => {
            const bgColor = bgColors[index % bgColors.length];
            const titleColor = titleColors[index % titleColors.length];
            const grade = index + 1; // Dynamic grade 1,2,3...

            return (
              <SwiperSlide key={item.slug} className="py-3">
                <Link href={`/books/${item.slug}`}>
                  <div
                    className={`${bgColor} rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      {/* Left Side Text */}
                      <div className="flex-1">
                        <h2
                          className={`text-lg font-bold ${titleColor} mb-2 leading-snug`}
                        >
                          Easy Computers & <br />
                          Coding Grade{" "}
                          {/* <span
                            className={`inline-block ${titleColor} bg-white rounded-full w-8 h-8 text-center leading-8 text-lg shadow-sm`}
                          >
                            {grade}
                          </span> */}
                        </h2>
                        <p className="text-sm text-gray-700 line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      {/* Right Side Image */}
                      <div className="flex-shrink-0">
                        <Image
                          width={180}
                          height={220}
                          src={`${process.env.NEXT_PUBLIC_FILE_BASE}${item.pictures[0]}`}
                          alt={`Grade ${grade} Book`}
                          className="w-24 h-36 md:w-28 md:h-40 lg:w-32 lg:h-44 object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Books;
