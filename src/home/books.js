"use client";

import { fetchBooks } from "@/lib/features/productsSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

// ✅ Static arrays outside component — no re-creation on every render
const BG_COLORS = [
  "bg-cyan-100",
  "bg-purple-100",
  "bg-yellow-100",
  "bg-orange-100",
  "bg-green-100",
  "bg-red-100",
];

const TITLE_COLORS = [
  "text-cyan-600",
  "text-purple-700",
  "text-gray-700",
  "text-orange-500",
  "text-green-500",
  "text-red-500",
];

function Books({ sliceCount = null }) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const displayedBooks = useMemo(
    () => (sliceCount ? books.slice(0, sliceCount) : books),
    [books, sliceCount]
  );

  return (
    <section className="bg-blue-50 py-16" aria-labelledby="books-heading">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2
            id="books-heading"
            className="text-3xl sm:text-4xl font-bold text-balance"
          >
            Robotics & STEM Books for Schools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our complete range of books is based on the TIY (Teach-It-Yourself)
            concept, making both teaching and learning fun and engaging for
            students and educators.
          </p>
        </div>

        {/* Books Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          // ✅ Semantic list for screen readers & SEO crawlers
          role="list"
          aria-label="Educational robotics and STEM books"
        >
          {displayedBooks.map((item, index) => {
            const bgColor = BG_COLORS[index % BG_COLORS.length];
            const titleColor = TITLE_COLORS[index % TITLE_COLORS.length];
            // ✅ Only first 3 cards are above-the-fold — eager load them
            const isAboveFold = index < 3;

            return (
              <div role="listitem" key={item.slug ?? index}>
                <Link
                  href={`/books/${item.slug}`}
                  // ✅ Descriptive aria-label for screen readers & Google
                  aria-label={`${item.title} — Robotics & STEM book by BDS Education`}
                >
                  <div
                    className={`${bgColor} rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      {/* Left Side Text */}
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-bold ${titleColor} mb-2 leading-snug`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-700 line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex-shrink-0">
                        <Image
                          width={128}
                          height={176}
                          src={`${process.env.NEXT_PUBLIC_BDS_FILE_BASE}${item.pictures[0]}`}
                          alt={`${item.title} — Robotics and STEM educational book for school students by BDS Education`}
                          className="w-24 h-36 md:w-28 md:h-40 lg:w-32 lg:h-44 object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                          loading={isAboveFold ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* See More Button */}
        {sliceCount && (
          <div className="text-center mt-10">
            <Link
              href="/books"
              className="btn"
              aria-label="See all robotics and STEM books by BDS Education"
            >
              See More Books
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Books;
