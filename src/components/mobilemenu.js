"use client";

import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, LogIn, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { getNavMenu } from "@/services/nav-services";
import { fetchBooks } from "@/lib/features/productsSlice";
import Loader from "./loader";
import config from "@/config";
import Image from "next/image";
import { handleLogout } from "@/providers/auth-provider";

export default function MobileMenu({ setMobileNav, user }) {
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

  const quickLinks = [
    { title: "Home", slug: "/" },
    { title: "ATL ", slug: "/atl-packages" },
    { title: "Smart Kits Combo", slug: "/smart-Kits-combo" },
    { title: "Web Recourse", slug: "/web-recourse" },
    { title: "Become a Distributor", slug: "/become-a-distributor" },
  ];

  // 🧩 Dynamic dropdowns same as desktop
  const dynamicMenuItems = [
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
    <div className="fixed top-0 left-0 w-full h-screen bg-white z-[9999] overflow-y-auto shadow-lg">
      <div
        className="flex shrink-0 items-center bg-white h-ful w-full justify-between lg:w-auto  lg:pr-[70px] clipPath-logo "
        style={{ clipPath: "polygon(0 0, 100% 0%, 83% 100%, 0% 100%)" }}
      >
        <Link href="/" className="py-4 pl-0 lg:pl-2">
          <Image
            src="/images/logo.png"
            width={200}
            height={200}
            alt="Logo"
            className="ml-5 bg-white p-2 w-[150px] max-h-[120px] rounded-sm"
          />
        </Link>

        <button
          onClick={() => setMobileNav(false)}
          className="block lg:hidden p-2 text-blue-500 border border-blue-200/20 hover:bg-blue-900 ml-4 rounded"
        >
          <X size={24} />
        </button>
      </div>
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
                <button
                  onClick={() => setMobileNav(false)}
                  className="w-full py-4 px-5 text-left font-medium border-b capitalize hover:bg-gray-100"
                >
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
                    <Link
                      onClick={() => setMobileNav(false)}
                      href={`/books/${book.slug}`}
                      key={index}
                    >
                      <button className="w-full py-4 px-5 text-left border-b hover:bg-gray-100 capitalize">
                        {book.title || book.category_name}
                      </button>
                    </Link>
                  ))
                : activeSubCategory.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      onClick={() => setMobileNav(false)}
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

        {user ? (
          <div className="px-4 mt-4">
            <Link href="/dashboard" className="btn mb-4">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="flex mb-4 items-center gap-1 btn bg-transparent border-2 border-blue-500 text-blue-500 hover:text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="px-4 w-auto mt-4">
            <Link
              href="/login"
              onClick={() => setMobileNav(false)}
              className="btn flex mb-4 gap-2 items-center"
            >
              <LogIn className="w-4 h-4" /> Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileNav(false)}
              className="flex mb-4 items-center gap-1 btn bg-transparent border-2 border-blue-500 text-blue-500 hover:text-white"
            >
              Sign Up
            </Link>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
