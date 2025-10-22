"use client";

import { fetchBooks } from "@/lib/features/productsSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Books() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.products);

  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Define possible categories to filter by
  const categories = [
    "all",
    "smart books",
    "Tech Foundation",
    "Grade wise (1 to 11)",
  ];

  // Filter books by category
  const filteredBooks =
    selectedCategory === "all"
      ? books
      : books.filter((item) => item.category_name === selectedCategory);

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

  console.log(filteredBooks);

  return (
    <div className="bg-blue-50 py-16">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Category Filter Dropdown */}
        <div className="mb-8 ">
          <select
            className="p-2 border border-blue-500 rounded-lg capitalize"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((item, index) => {
            const bgColor = bgColors[index % bgColors.length];
            const titleColor = titleColors[index % titleColors.length];
            const grade = index + 1; // Dynamic grade 1,2,3...

            return (
              <Link key={index} href={`books/${item.slug}`}>
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Books;
