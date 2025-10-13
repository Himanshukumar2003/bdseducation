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

export default function MobileMenu() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.products);

  // Fetch product packages
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

  // Separate ATL / Non-ATL
  const atlPackages = useMemo(
    () => packages?.filter((pkg) => pkg.package_type === "atl") ?? [],
    [packages]
  );
  const nonPackages = useMemo(
    () => packages?.filter((pkg) => pkg.package_type === "non-atl") ?? [],
    [packages]
  );

  // Group Books by category
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
      items,
    }));
  }, [books]);

  const quickLinks = [
    { title: "Home", slug: "/" },
    { title: "About", slug: "/about" },
    { title: "Gallery", slug: "/gallery" },
    { title: "Contact", slug: "/contact" },
  ];

  const dynamicMenuItems = [
    { id: "atl", title: "ATL Products", items: atlPackages },
    { id: "non", title: "Non ATL Products", items: nonPackages },
    { id: "books", title: "Books", items: booksByCategory },
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  const slideVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", duration: 0.3 } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
  };

  if (isLoading) return <Loader />;
  if (isError) return <p className="text-center py-6">Failed to load menu.</p>;

  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-md shadow-lg">
      <AnimatePresence mode="wait">
        {activeCategory === null ? (
          <motion.div
            key="main-menu"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
          >
            {/* 🔹 Quick Links */}
            {quickLinks.map((link) => (
              <Link key={link.title} href={link.slug}>
                <button className="w-full py-4 px-5 text-left font-medium border-b capitalize">
                  {link.title}
                </button>
              </Link>
            ))}

            {/* 🔹 Dynamic Product Menus */}
            {dynamicMenuItems.map((item) => (
              <div key={item.id} className="border-b">
                <button
                  onClick={() => setActiveCategory(item.id)}
                  className="w-full py-4 px-5 flex justify-between items-center text-left font-medium"
                >
                  {item.title}
                  <ChevronRight className="h-5 w-5 text-blue-500" />
                </button>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="sub-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
          >
            {/* 🔹 Back Button */}
            <div className="border-b sticky top-0 bg-white z-10">
              <button
                onClick={() => setActiveCategory(null)}
                className="w-full py-4 px-5 flex items-center text-left font-medium  "
              >
                <ChevronLeft className="h-5 w-5 text-blue-500 mr-2" />
                {dynamicMenuItems.find((i) => i.id === activeCategory)?.title}
              </button>
            </div>

            {/* 🔹 Submenu Items */}
            <div>
              {dynamicMenuItems
                .find((i) => i.id === activeCategory)
                ?.items?.map((subItem) => (
                  <div key={subItem.id} className="border-b">
                    <Link
                      href={
                        activeSection == "BOOKS"
                          ? `/books/${cat.slug}`
                          : `/product/?pkgtypes=${activePackage.package_type}&packages=${activePackage.id}&categories=${cat.id}`
                      }
                    >
                      <button className="w-full py-4 px-5 text-left">
                        {subItem.title || subItem.category_name}
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
