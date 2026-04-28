"use client";

import { fetchBooks } from "@/lib/features/productsSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

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

function getImageUrl(item) {
  if (!item?.pictures?.length) return null;
  return `${process.env.NEXT_PUBLIC_BDS_FILE_BASE}${item.pictures[0]}`;
}

function BookSkeleton() {
  return (
    <li aria-hidden="true">
      <div className="bg-gray-100 rounded-2xl p-4 shadow h-full animate-pulse">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-3">
            <div className="h-5 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
          </div>
          <div className="w-24 h-36 md:w-28 md:h-40 lg:w-32 lg:h-44 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </li>
  );
}

function Books({ sliceCount = null }) {
  const dispatch = useDispatch();
  const { books, booksStatus, booksError } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (booksStatus === "idle") {
      dispatch(fetchBooks());
    }
  }, [dispatch, booksStatus]);

  const displayedBooks = useMemo(() => {
    if (!books) return [];
    return sliceCount != null ? books.slice(0, sliceCount) : books;
  }, [books, sliceCount]);

  const isLoading = booksStatus === "idle" || booksStatus === "loading";

  return (
    <section className="bg-blue-50 py-16" aria-labelledby="books-heading">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="books-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
          >
            Robotics & STEM Books for Schools
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our collection of robotics and STEM books designed to make
            learning practical, engaging, and easy for students and teachers.
          </p>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading &&
            Array.from({ length: sliceCount ?? 6 }).map((_, i) => (
              <BookSkeleton key={i} />
            ))}

          {booksError && (
            <li className="col-span-full text-center text-red-500 py-8">
              Unable to load books. Please refresh the page.
            </li>
          )}

          {!isLoading &&
            !booksError &&
            displayedBooks.map((item, index) => {
              const bgColor = BG_COLORS[index % BG_COLORS.length];
              const titleColor = TITLE_COLORS[index % TITLE_COLORS.length];
              const isAboveFold = index < 2;
              const imageUrl = getImageUrl(item);

              return (
                <li key={item.slug ?? index}>
                  <Link
                    href={`/books/${item.slug}`}
                    prefetch={false}
                    aria-label={`View details of ${item.title}`}
                  >
                    <div
                      className={`${bgColor} rounded-2xl p-4 shadow-lg h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3
                            className={`text-lg font-bold ${titleColor} mb-2`}
                          >
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-700 line-clamp-3">
                            {item.description}
                          </p>
                        </div>

                        <div style={{ width: 128, height: 176 }}>
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={`${item.title} book cover`}
                              width={128}
                              height={176}
                              loading={isAboveFold ? "eager" : "lazy"}
                              sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                              className="w-24 h-36 md:w-28 md:h-40 lg:w-32 lg:h-44 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-24 h-36 md:w-28 md:h-40 lg:w-32 lg:h-44 bg-gray-200 rounded-lg flex items-center justify-center">
                              <span className="text-xs text-gray-400">
                                No image
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>

        {/* CTA */}
        {sliceCount != null && books.length > sliceCount && (
          <div className="text-center mt-10">
            <Link href="/books" className="btn">
              View All Books
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Books;
