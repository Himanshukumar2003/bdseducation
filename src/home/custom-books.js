"use client";

import { fetchBooks } from "@/lib/features/productsSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Books() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.products);

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

  if (!books || books.length === 0) return null;

  // ✅ Separate categories
  const gradeBooks = books.filter(
    (b) => b.category_name?.toLowerCase() === "grade wise (1 to 11)"
  );
  const smartBooks = books.filter(
    (b) => b.category_name?.toLowerCase() === "smart books"
  );
  const techFoundation = books.filter(
    (b) => b.category_name?.toLowerCase() === "tech foundation"
  );

  // ✅ Sort grade books by grade number (1 → 11)
  const sortedGrades = gradeBooks.sort((a, b) => {
    const gradeA = parseInt(a.category_name.replace(/\D/g, ""));
    const gradeB = parseInt(b.category_name.replace(/\D/g, ""));
    return gradeA - gradeB;
  });

  // ✅ Helper function to render book cards
  const renderBooks = (bookArray) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {bookArray.slice(0, 3).map((item, index) => {
        const bgColor = bgColors[index % bgColors.length];
        const titleColor = titleColors[index % titleColors.length];

        return (
          <Link key={item.id} href={`books/${item.slug}`}>
            <div
              className={`${bgColor} rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h2
                    className={`text-lg font-bold ${titleColor} mb-2 leading-snug`}
                  >
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    width={180}
                    height={220}
                    src={`${process.env.NEXT_PUBLIC_BDS_FILE_BASE}${item.pictures[0]}`}
                    alt={item.title}
                    className="w-24 h-36 md:w-28 md:h-40 lg:w-32 lg:h-44 object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );

  return (
    <div className="section">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Books</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our complete range of books is based on the TIY (Teach-It-Yourself)
            concept, making both teaching and learning fun and engaging.
          </p>
        </div>

        {sortedGrades.length > 0 && (
          <div className="mb-10">{renderBooks(sortedGrades)}</div>
        )}

        {smartBooks.length > 0 && (
          <div className="mb-10">{renderBooks(smartBooks)}</div>
        )}

        {techFoundation.length > 0 && (
          <div className="mb-10">{renderBooks(techFoundation)}</div>
        )}

        <div className="mt-5 text-center">
          <Link href="/books" className="btn">
            See More Books
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Books;
