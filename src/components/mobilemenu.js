"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight, LogIn, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { getNavMenu } from "@/services/nav-services";
import { fetchBooks } from "@/lib/features/productsSlice";
import Loader from "./loader";
import Image from "next/image";
import { handleLogout } from "@/providers/auth-provider";

// ✅ Static data outside component
const QUICK_LINKS = [
  { title: "Home", slug: "/" },
  { title: "ATL Products", slug: "/atl-packages" },
  { title: "Smart Kits Combo", slug: "/smart-Kits-combo" },
  { title: "Web Resources", slug: "/web-recourse" },
  { title: "Become a Distributor", slug: "/become-a-distributor" },
];

// ✅ Animation variants outside component
const SLIDE_VARIANTS = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "tween", duration: 0.25 } },
  exit: { x: "100%", transition: { type: "tween", duration: 0.25 } },
};

export default function MobileMenu({ setMobileNav, user, handleConversion }) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.products);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

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
    // ✅ Cache nav menu — it rarely changes
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // ✅ Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const nonAtlProducts = useMemo(() => {
    if (!packages) return [];
    return packages
      .filter((pkg) => pkg.package_type === "non-atl")
      .flatMap(
        (pkg) =>
          pkg.products?.map((cat) => ({
            ...cat,
            package_type: pkg.package_type,
            pkgId: pkg.id,
          })) ?? []
      );
  }, [packages]);

  const booksByCategory = useMemo(() => {
    if (!books?.length) return [];
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

  const dynamicMenuItems = useMemo(
    () => [
      {
        id: "NON",
        title: "Non ATL Products",
        items: nonAtlProducts,
        direct: true,
      },
      { id: "BOOKS", title: "Books", items: booksByCategory, direct: false },
    ],
    [nonAtlProducts, booksByCategory]
  );

  // ✅ useCallback for stable refs
  const closeMobileNav = useCallback(() => setMobileNav(false), [setMobileNav]);

  const currentMain = dynamicMenuItems.find((i) => i.id === activeCategory);

  if (isLoading) return <Loader />;
  if (isError) return <p className="text-center py-6">Failed to load menu.</p>;

  return (
    // ✅ <nav> with aria-label for accessibility & SEO
    <nav
      aria-label="Mobile navigation"
      className="fixed top-0 left-0 w-full h-screen bg-white z-[9999] overflow-y-auto shadow-lg"
    >
      {/* Header */}
      <div
        className="flex shrink-0 items-center bg-white w-full justify-between clipPath-logo"
        style={{ clipPath: "polygon(0 0, 100% 0%, 83% 100%, 0% 100%)" }}
      >
        <Link
          href="/"
          className="py-4 pl-0"
          aria-label="BDS Education — Home"
          onClick={closeMobileNav}
        >
          <Image
            src="/images/logo.png"
            width={150}
            height={60}
            alt="BDS Education — Robotics, AI & STEM Lab Provider"
            className="ml-5 bg-white p-2 w-[150px] max-h-[60px] rounded-sm"
            priority
          />
        </Link>
        <button
          onClick={closeMobileNav}
          aria-label="Close mobile navigation"
          className="block p-2 text-blue-500 border border-blue-200/20 hover:bg-blue-900 ml-4 rounded"
        >
          <X size={24} aria-hidden="true" />
        </button>
      </div>

      {/* MENU BODY */}
      <AnimatePresence mode="wait">
        {activeCategory === null ? (
          <motion.div
            key="main-menu"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
          >
            {/* Static links */}
            {QUICK_LINKS.map((link) => (
              <Link key={link.slug} href={link.slug} onClick={closeMobileNav}>
                <div className="w-full py-4 px-5 text-left font-medium border-b capitalize hover:bg-gray-100">
                  {link.title}
                </div>
              </Link>
            ))}

            {/* Dynamic sections */}
            {dynamicMenuItems.map((item) => (
              <div key={item.id} className="border-b">
                <button
                  onClick={() => setActiveCategory(item.id)}
                  aria-haspopup="true"
                  aria-expanded={activeCategory === item.id}
                  className="w-full py-4 px-5 flex justify-between items-center text-left font-medium hover:bg-gray-100"
                >
                  {item.title}
                  <ChevronRight
                    className="h-5 w-5 text-blue-600"
                    aria-hidden="true"
                  />
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
            variants={SLIDE_VARIANTS}
          >
            <div className="border-b sticky top-0 bg-white z-10">
              <button
                className="w-full py-4 px-5 flex items-center text-left font-medium hover:bg-gray-100"
                onClick={() => setActiveCategory(null)}
                aria-label={`Back to main menu from ${currentMain?.title}`}
              >
                <ChevronLeft
                  className="h-5 w-5 text-blue-600 mr-2"
                  aria-hidden="true"
                />
                {currentMain?.title}
              </button>
            </div>

            <div>
              {currentMain?.id === "NON"
                ? currentMain.items.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/product/${cat.slug}`}
                      onClick={closeMobileNav}
                    >
                      <div className="w-full py-4 px-5 text-left border-b hover:bg-gray-100 capitalize">
                        {cat.title}
                      </div>
                    </Link>
                  ))
                : currentMain?.items.map((pkg) => (
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
        )}

        {/* Book subcategory */}
        {activeSubCategory && (
          <motion.div
            key="category-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={SLIDE_VARIANTS}
          >
            <div className="border-b sticky top-0 bg-white z-10">
              <button
                className="w-full py-4 px-5 flex items-center text-left font-medium hover:bg-gray-100"
                onClick={() => setActiveSubCategory(null)}
                aria-label={`Back to ${currentMain?.title}`}
              >
                <ChevronLeft
                  className="h-5 w-5 text-blue-600 mr-2"
                  aria-hidden="true"
                />
                {activeSubCategory.title}
              </button>
            </div>

            {activeSubCategory.categories.map((book) => (
              <Link
                href={`/books/${book.slug}`}
                key={book.slug ?? book.id}
                onClick={closeMobileNav}
              >
                <div className="w-full py-4 px-5 text-left border-b hover:bg-gray-100 capitalize">
                  {book.title || book.category_name}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* AUTH BUTTONS */}
      {user ? (
        <div className="px-4 mt-4">
          <Link
            href="/dashboard"
            className="btn mb-4 block"
            onClick={closeMobileNav}
          >
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
          <button
            onClick={() => {
              handleConversion();
              closeMobileNav();
            }}
            className="btn flex mb-4 gap-2 items-center w-full justify-center"
          >
            <LogIn className="w-4 h-4" aria-hidden="true" /> Login
          </button>
          <Link
            href="/signup"
            onClick={closeMobileNav}
            className="flex mb-4 items-center gap-1 btn bg-transparent border-2 border-blue-500 text-blue-500 hover:text-white"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
