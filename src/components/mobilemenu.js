"use client";

import { useState, useMemo, useEffect } from "react";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getNavMenu } from "@/services/nav-services";
import { fetchBooks } from "@/lib/features/productsSlice";
import Loader from "./loader";
import { useQuery } from "@tanstack/react-query";

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

  const dynamicMenuItems = [
    { id: "atl", title: "ATL Products", items: atlPackages },
    { id: "non", title: "Non ATL Products", items: nonPackages },
    { id: "books", title: "Books", items: booksByCategory },
  ];

  const [activeCategory, setActiveCategory] = useState(null);
  const [activePackage, setActivePackage] = useState(null); // Added state for active package

  console.log(atlPackages);

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
        {activeCategory === null && activePackage === null ? (
          <motion.div
            key="main-menu"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
          >
            {/* 🔹 Quick Links */}
            <Link href="/" passHref>
              <button className="w-full py-4 px-5 text-left font-medium border-b capitalize">
                Home
              </button>
            </Link>
            <Link href="/about" passHref>
              <button className="w-full py-4 px-5 text-left font-medium border-b capitalize">
                About
              </button>
            </Link>

            {/* 🔹 Dynamic Product Menus */}
            {dynamicMenuItems.map((item) => (
              <div key={item.id} className="border-b">
                <button
                  onClick={() => {
                    if (item.id === "atl" || item.id === "non") {
                      setActivePackage(item.id);
                    } else {
                      setActiveCategory(item.id);
                    }
                  }}
                  className="w-full py-4 px-5 flex justify-between items-center text-left font-medium"
                >
                  {item.title}
                  <ChevronDown className="h-5 w-5 text-blue-500" />
                </button>
              </div>
            ))}
          </motion.div>
        ) : activePackage && activeCategory === null ? (
          <motion.div
            key="package-category-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
          >
            {/* 🔹 Back Button */}
            <div className="border-b sticky top-0 bg-white z-10">
              <button
                onClick={() => {
                  setActivePackage(null);
                  setActiveCategory(null);
                }}
                className="w-full py-4 px-5 flex items-center text-left font-medium"
              >
                <ChevronLeft className="h-5 w-5 text-blue-500 mr-2" />
                {dynamicMenuItems.find((i) => i.id === activePackage)?.title}
              </button>
            </div>

            <div>
              {dynamicMenuItems
                .find((i) => i.id === activePackage)
                ?.items?.map((pkgItem) => (
                  <div key={pkgItem.id} className="border-b">
                    <button
                      onClick={() => setActiveCategory(pkgItem.id)}
                      className="w-full py-4 px-5 text-left"
                    >
                      {pkgItem.title || pkgItem.category_name}
                    </button>
                  </div>
                ))}
            </div>
          </motion.div>
        ) : activeCategory !== null ? (
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
                className="w-full py-4 px-5 flex items-center text-left font-medium"
              >
                <ChevronLeft className="h-5 w-5 text-blue-500 mr-2" />
                {
                  dynamicMenuItems
                    .find((i) => i.id === activePackage)
                    ?.items?.find((i) => i.id === activeCategory)?.title
                }
              </button>
            </div>

            {/* 🔹 Submenu Items */}
            <div>
              {dynamicMenuItems
                .find((i) => i.id === activePackage)
                ?.items?.find((i) => i.id === activeCategory)
                ?.items?.map((subItem) => (
                  <div key={subItem.id} className="border-b">
                    <Link
                      href={
                        activePackage === "books"
                          ? `/books/${subItem.id}` // For books category, using book ID in the URL
                          : `/product/?pkgtypes=${activePackage}&packages=${subItem.id}&categories=${subItem.id}`
                      }
                    >
                      <button className="w-full py-4 px-5 text-left">
                        {subItem.title || subItem.category_name || subItem.id}
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
