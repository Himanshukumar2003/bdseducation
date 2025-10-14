"use client";

import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { getNavMenu } from "@/services/nav-services";
import { fetchBooks } from "@/lib/features/productsSlice";
import Loader from "./loader";
import config from "@/config";

export default function MobileMenu() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.products);
  const {
    data: packages,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["navMenuMobile"],
    queryFn: async () => {
      const { data } = await getNavMenu();
      return data.packages;
    },
  });

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // 🧩 Separate ATL / Non-ATL
  const atlPackages = useMemo(
    () => packages?.filter((pkg) => pkg.package_type === "atl") ?? [],
    [packages]
  );

  const nonPackages = useMemo(
    () => packages?.filter((pkg) => pkg.package_type === "non-atl") ?? [],
    [packages]
  );

  // 🧩 Group Books by category
  const booksByCategory = useMemo(() => {
    if (!books || books.length === 0) return [];
    const map = {};
    books.forEach((book) => {
      const category = book.category_name || "Uncategorized";
      if (!map[category]) map[category] = [];
      map[category].push(book);
    });
    return Object.entries(map).map(([category, items]) => ({
      id: category,
      title: category,
      categories: items,
    }));
  }, [books]);

  // 🧩 Quick navigation items
  const quickLinks = [
    { title: "Home", slug: "/" },
    { title: "About", slug: "/about" },
    { title: "Gallery", slug: "/gallery" },
    { title: "Contact", slug: "/contact" },
  ];

  // 🧩 Dynamic dropdowns same as desktop
  const dynamicMenuItems = [
    { id: "ATL", title: "ATL Products", items: atlPackages },
    { id: "NON", title: "Non ATL Products", items: nonPackages },
    { id: "BOOKS", title: "Books", items: booksByCategory },
  ];

  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const slideVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", duration: 0.3 } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
  };

  if (isLoading) return <Loader />;
  if (isError) return <p className="text-center py-6">Failed to load menu.</p>;

  const currentMain = dynamicMenuItems.find((i) => i.id === activeCategory);
  const currentSub = activeSubCategory;

  return (
    <div className="fixed -bottom-20 left-0 w-full h-screen bg-white z-[9999] overflow-y-auto shadow-lg">
      <AnimatePresence mode="wait">
        {activeCategory === null ? (
          <motion.div
            key="main-menu"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
          >
            {/* Quick Links */}
            {quickLinks.map((link) => (
              <Link key={link.title} href={link.slug}>
                <button className="w-full py-4 px-5 text-left font-medium border-b capitalize hover:bg-gray-100">
                  {link.title}
                </button>
              </Link>
            ))}

            {/* Dynamic Sections */}
            {dynamicMenuItems.map((item) => (
              <div key={item.id} className="border-b">
                <button
                  onClick={() => setActiveCategory(item.id)}
                  className="w-full py-4 px-5 flex justify-between items-center text-left font-medium hover:bg-gray-100"
                >
                  {item.title}
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                </button>
              </div>
            ))}
          </motion.div>
        ) : activeSubCategory === null ? (
          <motion.div
            key="sub-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
          >
            <div className="border-b sticky top-0 bg-white z-10">
              <button
                className="w-full py-4 px-5 flex items-center text-left font-medium hover:bg-gray-100"
                onClick={() => setActiveCategory(null)}
              >
                <ChevronLeft className="h-5 w-5 text-blue-600 mr-2" />
                {currentMain.title}
              </button>
            </div>

            <div>
              {currentMain.items?.map((pkg) => (
                <div key={pkg.id} className="border-b">
                  <button
                    onClick={() => setActiveSubCategory(pkg)}
                    className="w-full py-4 px-5 text-left font-medium hover:bg-gray-100"
                  >
                    {pkg.title}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="category-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
          >
            <div className="border-b sticky top-0 bg-white z-10">
              <button
                className="w-full py-4 px-5 flex items-center text-left font-medium hover:bg-gray-100"
                onClick={() => setActiveSubCategory(null)}
              >
                <ChevronLeft className="h-5 w-5 text-blue-600 mr-2" />
                {activeSubCategory.title}
              </button>
            </div>

            {/* Categories (Text Only, No Images) */}
            <div>
              {activeCategory === "BOOKS"
                ? activeSubCategory.categories.map((book, index) => (
                    <Link href={`/books/${book.slug}`} key={index}>
                      <button className="w-full py-4 px-5 text-left border-b hover:bg-gray-100 capitalize">
                        {book.title || book.category_name}
                      </button>
                    </Link>
                  ))
                : activeSubCategory.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/product/?pkgtypes=${activeSubCategory.package_type}&packages=${activeSubCategory.id}&categories=${cat.id}`}
                    >
                      <button className="w-full py-4 px-5 text-left border-b hover:bg-gray-100 capitalize">
                        {cat.title}
                      </button>
                    </Link>
                  ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
