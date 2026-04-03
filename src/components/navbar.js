"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, X, ShoppingCart, LogIn, Menu } from "lucide-react";
import { BsChevronRight } from "react-icons/bs";
import { cn } from "@/lib/utils";
import MobileMenu from "./mobilemenu";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/lib/features/slice";
import { useAuth, handleLogout } from "@/providers/auth-provider";
import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "@/services/cart-services";
import { getNavMenu } from "@/services/nav-services";
import Loader from "./loader";
import { usePathname, useRouter } from "next/navigation";
import { fetchBooks } from "@/lib/features/productsSlice";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import ProductCard from "./product-card";

// ✅ Moved outside component — no re-creation on every render
const SECONDARY_NAV_LINKS = [
  { name: "About Us", link: "/about" },
  { name: "Software", link: "/software" },
  { name: "Smart Kits Combo", link: "/smart-Kits-combo" },
  { name: "Web Resources", link: "/web-recourse" },
  { name: "Blog", link: "/blog" },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact Us", link: "/contact" },
];

const MAIN_NAV_ITEMS = [
  { title: "Home", href: "/" },
  { title: "ATL Products", href: "/atl-packages" },
  { title: "Non ATL Products", hasSubmenu: true },
  { title: "Books", hasSubmenu: true },
  { title: "Become a Distributor", href: "/become-a-distributor" },
];

const BG_COLORS = [
  "bg-gradient-to-r from-yellow-100 to-yellow-50",
  "bg-gradient-to-r from-pink-100 to-pink-50",
  "bg-gradient-to-r from-blue-100 to-blue-50",
  "bg-gradient-to-r from-green-100 to-green-50",
  "bg-gradient-to-r from-purple-100 to-purple-50",
];
const TITLE_COLORS = [
  "text-yellow-600",
  "text-pink-600",
  "text-blue-600",
  "text-green-600",
  "text-purple-600",
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePackage, setActivePackage] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);

  const { books } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const pathname = usePathname();
  const router = useRouter();

  const { data: cartData } = useQuery({
    queryKey: ["cart", isCartOpen],
    queryFn: async () => {
      const { data } = await getCartItems();
      return data;
    },
    enabled: !!user,
    // ✅ Don't refetch on window focus — reduces unnecessary network calls
    refetchOnWindowFocus: false,
  });

  const { data: packages, isLoading } = useQuery({
    queryKey: ["navMenu"],
    queryFn: async () => {
      const { data } = await getNavMenu();
      return data.packages;
    },
    // ✅ Nav menu rarely changes — cache for 5 mins
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const totalCartItems = useMemo(
    () => cartData?.reduce((sum, item) => sum + item.quantity, 0) ?? 0,
    [cartData]
  );

  const atlPackages = useMemo(
    () => packages?.filter((pkg) => pkg.package_type === "atl") ?? [],
    [packages]
  );
  const nonPackages = useMemo(
    () => packages?.filter((pkg) => pkg.package_type === "non-atl") ?? [],
    [packages]
  );

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

  // ✅ useCallback — stable reference, avoids child re-renders
  const handleNavClick = useCallback(
    (item) => {
      const sectionMap = {
        "ATL Products": { key: "ATL", list: atlPackages },
        "Non ATL Products": { key: "NON", list: nonPackages },
        Books: { key: "BOOKS", list: booksByCategory },
      };
      const target = sectionMap[item.title];
      if (!target) return;

      if (activeSection === target.key) {
        setIsSidebarOpen(false);
        setActiveSection(null);
        setActivePackage(null);
      } else {
        setIsSidebarOpen(true);
        setActiveSection(target.key);
        setActivePackage(target.list[0] || null);
      }
    },
    [activeSection, atlPackages, nonPackages, booksByCategory]
  );

  const currentPackages =
    activeSection === "ATL"
      ? atlPackages
      : activeSection === "NON"
        ? nonPackages
        : activeSection === "BOOKS"
          ? booksByCategory
          : [];

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // ✅ Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  // ✅ Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
    setActiveSection(null);
    setActivePackage(null);
  }, [pathname]);

  const handleConversion = useCallback(() => {
    gtag_report_conversion("/login");
    router.push("/login");
  }, [router]);

  return (
    // ✅ <nav> instead of <div> — semantic HTML for SEO & accessibility
    <nav
      aria-label="Main navigation"
      className="sticky top-0 nav bg-white z-[500]"
    >
      <div className="bg-header px-4 w-full mx-auto flex justify-between h-full lg:pr-8">
        {/* LOGO + HAMBURGER */}
        <div
          className="flex shrink-0 items-center bg-white h-full w-full justify-between lg:w-auto lg:pr-[70px] clipPath-logo"
          style={{ clipPath: "polygon(0 0, 100% 0%, 83% 100%, 0% 100%)" }}
        >
          <Sheet>
            <SheetTrigger asChild>
              {/* ✅ aria-label for screen readers */}
              <button aria-label="Open secondary menu">
                <Menu size={24} className="text-blue-900" />
              </button>
            </SheetTrigger>
            {/* ✅ Accessible sheet title */}
            <SheetTitle className="sr-only">Secondary Navigation</SheetTitle>
            <SheetContent side="left">
              {SECONDARY_NAV_LINKS.map((item) => (
                <SheetTrigger asChild key={item.link}>
                  <Link
                    href={item.link}
                    className="py-4 px-5 text-left font-medium border-b capitalize hover:bg-gray-100 hover:text-blue-900 block"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.name}
                  </Link>
                </SheetTrigger>
              ))}
            </SheetContent>
          </Sheet>

          {/* ✅ aria-label on logo link */}
          <Link
            href="/"
            className="py-4 pl-0 lg:pl-2"
            aria-label="BDS Education — Home"
          >
            <Image
              src="/images/logo.png"
              width={150}
              height={60}
              alt="BDS Education — Robotics, AI & STEM Lab Provider"
              className="ml-5 bg-white p-2 w-[150px] max-h-[60px] rounded-sm"
              // ✅ Logo is LCP candidate on mobile — priority load
              priority
            />
          </Link>

          <button
            onClick={() => setMobileNav(true)}
            aria-label="Open mobile navigation"
            aria-expanded={mobileNav}
            className="block lg:hidden p-2 text-blue-500 border border-blue-200/20 hover:bg-blue-900 ml-4 rounded"
          >
            {mobileNav ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center bg-[#0053a3] relative">
          {MAIN_NAV_ITEMS.map((item) => (
            <div key={item.title} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className="px-4 nav-links py-6 border-b-4 text-white font-semibold border-[#0053a3] flex items-center hover:border-white"
                >
                  {item.title}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(item)}
                  aria-expanded={activeSection !== null}
                  aria-haspopup="true"
                  className="px-4 nav-links py-6 border-b-4 border-[#0053a3] text-white font-semibold flex items-center hover:border-white"
                >
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          ))}

          {/* Cart & Auth */}
          <div className="ml-4 flex items-center gap-2">
            {user && (
              <button
                className="relative p-3 text-white"
                onClick={() => dispatch(toggleCart())}
                aria-label={`Shopping cart, ${totalCartItems} items`}
              >
                <ShoppingCart className="w-5 h-5" aria-hidden="true" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 text-xs flex items-center justify-center rounded-full text-white">
                    {totalCartItems}
                  </span>
                )}
              </button>
            )}

            {user && (
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <button aria-label="User profile menu">
                    <Image
                      src="/user-profile.png"
                      alt="User profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 z-[999]" align="end">
                  <div className="py-2 pl-2">
                    <Link href="/dashboard">Dashboard</Link>
                  </div>
                  <DropdownMenuSeparator />
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1 bg-transparent text-red-500 border-0 py-2 pl-2"
                  >
                    Logout
                  </button>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {!user && (
              <button
                onClick={handleConversion}
                className="btn flex gap-2 items-center"
              >
                <LogIn className="w-4 h-4" aria-hidden="true" /> Login
              </button>
            )}
          </div>
        </div>

        {mobileNav && (
          <MobileMenu
            setMobileNav={setMobileNav}
            user={user}
            handleConversion={handleConversion}
          />
        )}
      </div>

      {/* MEGA MENU SIDEBAR */}
      {isSidebarOpen && (
        <div className="hidden lg:flex h-[calc(100vh-91.36px)] overflow-y-auto">
          {/* Left panel */}
          <div
            className={cn(
              "fixed md:static gap-0 w-[33vw] top-0 left-0 bg-[#003366] text-white z-50 custom-clip",
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            )}
          >
            {isLoading ? (
              <Loader />
            ) : currentPackages.length === 0 ? (
              <p className="p-6 text-center">No packages available</p>
            ) : (
              currentPackages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setActivePackage(pkg)}
                  aria-pressed={activePackage?.id === pkg.id}
                  className={cn(
                    "w-full border-t-1 border-blue-400 capitalize cursor-pointer text-left pl-[100px] pr-[80px] transition duration-300 font-bold text-md py-5 flex hover:bg-[#0d477b] hover:pl-[130px] justify-between items-center",
                    { "bg-blue-500": activePackage?.id === pkg.id }
                  )}
                >
                  {pkg.title}
                  <BsChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              ))
            )}
          </div>

          {/* Right panel */}
          <div className="flex-1 p-8 border-t-1 border-gray-100 overflow-y-auto">
            {isLoading ? (
              <Loader />
            ) : activePackage ? (
              <div
                className={cn(
                  "grid gap-6",
                  activeSection === "BOOKS"
                    ? "lg:grid-cols-2"
                    : "grid-container"
                )}
              >
                {(activeSection === "BOOKS"
                  ? activePackage.categories
                  : activePackage.products
                ).map((cat, index) => {
                  const bgColor = BG_COLORS[index % BG_COLORS.length];
                  const titleColor = TITLE_COLORS[index % TITLE_COLORS.length];

                  return activeSection === "BOOKS" ? (
                    <Link
                      href={`/books/${cat.slug}`}
                      key={cat.id}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <div
                        className={`${bgColor} rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1">
                            <h3
                              className={`text-lg font-bold ${titleColor} mb-2 leading-snug`}
                            >
                              {cat.title}
                            </h3>
                            <p className="text-sm text-gray-700 line-clamp-3">
                              {cat.description}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <Image
                              width={128}
                              height={176}
                              src={`${process.env.NEXT_PUBLIC_BDS_FILE_BASE}${cat.pictures[0]}`}
                              // ✅ SEO-rich alt for book images
                              alt={`${cat.title} — Educational robotics book for students by BDS Education`}
                              className="w-24 h-36 md:w-28 md:h-40 lg:w-32 lg:h-44 object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                              sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <ProductCard
                      product={cat}
                      type="product"
                      key={cat.id}
                      setIsSidebarOpen={setIsSidebarOpen}
                    />
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-600">
                Select a package to view categories
              </p>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
