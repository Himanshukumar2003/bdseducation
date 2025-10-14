"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  X,
  ShoppingCart,
  User,
  LogIn,
  Menu,
  ChevronDownIcon,
} from "lucide-react";
import { BsChevronRight } from "react-icons/bs";
import { cn } from "@/lib/utils";
import MobileMenu from "./mobilemenu";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/lib/features/slice";
import { useAuth, handleLogout } from "@/providers/auth-provider";
import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "@/services/cart-services";
import config from "@/config";
import { getNavMenu } from "@/services/nav-services";
import Loader from "./loader";
import { fetchBooks } from "@/lib/features/productsSlice";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePackage, setActivePackage] = useState(null);

  const [activeSection, setActiveSection] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);
  const { books } = useSelector((state) => state.products);
  const bookItems = [...(books.map((i) => ({ ...i, type: "books" })) || [])];
  console.log("books:", bookItems);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const { data: cartData } = useQuery({
    queryKey: ["cart", isCartOpen],
    queryFn: async () => {
      const { data } = await getCartItems();
      return data;
    },
    enabled: !!user,
  });

  const {
    data: packages,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["navMenu"],
    queryFn: async () => {
      const { data } = await getNavMenu();
      return data.packages;
    },
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

  const mainNavItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "ATL Products", hasSubmenu: true },
    { title: "Non ATL Products", hasSubmenu: true },
    { title: "Books", hasSubmenu: true },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
  ];

  const handleNavClick = (item) => {
    if (item.title === "ATL Products") {
      if (activeSection === "ATL") {
        setIsSidebarOpen(false);
        setActiveSection(null);
        setActivePackage(null);
      } else {
        setIsSidebarOpen(true);
        setActiveSection("ATL");
        setActivePackage(atlPackages[0] || null);
      }
    } else if (item.title === "Non ATL Products") {
      if (activeSection === "NON") {
        setIsSidebarOpen(false);
        setActiveSection(null);
        setActivePackage(null);
      } else {
        setIsSidebarOpen(true);
        setActiveSection("NON");
        setActivePackage(nonPackages[0] || null);
      }
    } else if (item.title === "Books") {
      if (activeSection === "BOOKS") {
        setIsSidebarOpen(false);
        setActiveSection(null);
        setActivePackage(null);
      } else {
        setIsSidebarOpen(true);
        setActiveSection("BOOKS");
        setActivePackage(booksByCategory[0] || null);
      }
    }
  };

  useEffect(() => {
    dispatch(fetchBooks());
    // dispatch(fetchCartItems());
  }, [dispatch]);

  // 🧠 Group books by category
  const booksByCategory = useMemo(() => {
    if (!books || books.length === 0) return [];
    const map = {};

    books.forEach((book) => {
      const category = book.category_name || "Uncategorized";
      if (!map[category]) {
        map[category] = [];
      }
      map[category].push(book);
    });

    // Convert object to array like other packages
    return Object.entries(map).map(([category, items]) => ({
      id: category,
      title: category,
      categories: items,
    }));
  }, [books]);

  // 🧠 Determine what to show on the sidebar
  const currentPackages =
    activeSection === "ATL"
      ? atlPackages
      : activeSection === "NON"
        ? nonPackages
        : activeSection === "BOOKS"
          ? booksByCategory
          : [];

  return (
    <div className="">
      {/* ------------------- MAIN NAVBAR ------------------- */}
      <div className="bg-header px-4 w-full mx-auto flex justify-between h-full lg:pr-8 relative">
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
            onClick={() => setMobileNav(true)}
            className="block lg:hidden p-2 text-blue-500 border border-blue-200/20 hover:bg-blue-900 ml-4 rounded"
          >
            {mobileNav ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center bg-[#0053a3] relative">
          {mainNavItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  className="px-4 py-6 border-b-4 text-white font-semibold border-[#0053a3] flex items-center hover:border-white"
                >
                  {item.title}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(item)}
                  className="px-4 py-6 border-b-4 border-[#0053a3] text-white font-semibold flex items-center hover:border-white"
                >
                  {item.title} <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              )}
            </div>
          ))}

          {/* Cart & Auth Buttons */}
          <div className="ml-4 flex items-center gap-2">
            {user && (
              <button
                className="relative p-3 text-white"
                onClick={() => dispatch(toggleCart())}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 text-xs flex items-center justify-center rounded-full text-white">
                    {totalCartItems}
                  </span>
                )}
              </button>
            )}

            {user ? (
              <>
                <Link href="/dashboard" className="btn">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 btn bg-transparent border-2 border-blue-500 text-white hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="btn flex gap-2 items-center">
                  <LogIn className="w-4 h-4" /> Login
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center gap-1 btn bg-transparent border-2 border-blue-500 text-white hover:text-white"
                >
                  <User className="w-4 h-4" /> Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        {mobileNav && <MobileMenu setMobileNav={setMobileNav} />}
      </div>

      {isSidebarOpen && (
        <div className="flex">
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
                <div key={pkg.id}>
                  <button
                    onClick={() => setActivePackage(pkg)}
                    className={cn(
                      "w-full border-t-1 border-blue-400      capitalize cursor-pointer text-left pl-[100px] pr-[80px] transition duration-300 font-bold text-lg py-6 flex hover:bg-[#0d477b] hover:pl-[130px] justify-between items-center",
                      {
                        "bg-blue-500": activePackage?.id === pkg.id,
                      }
                    )}
                  >
                    {pkg.title}
                    <BsChevronRight className="h-4 w-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="flex-1 p-8 border-t-1 border-gray-100">
            {isLoading ? (
              <Loader />
            ) : activePackage ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activePackage.categories.map((cat) => (
                  <Link
                    href={
                      activeSection == "BOOKS"
                        ? `/books/${cat.slug}`
                        : `/product/?pkgtypes=${activePackage.package_type}&packages=${activePackage.id}&categories=${cat.id}`
                    }
                    key={cat.id}
                    onClick={() => setIsSidebarOpen(false)}
                    className="relative h-[200px] rounded-[20px] overflow-hidden cursor-pointer transition-all duration-[600ms] shadow-[0_10px_30px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,193,7,0.1)] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,193,7,0.1)_0%,transparent_50%,rgba(255,193,7,0.1)_100%)] z-[1]"></div>

                    <Image
                      src={`${config.file_base}/${cat.pictures?.[0]}`}
                      width={400}
                      height={300}
                      alt={cat.title || "Category Image"}
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-70 filter brightness-[0.8] contrast-[1.2] z-[0]"
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-4 z-[2] bg-gradient-to-t from-black/80 to-transparent">
                      <h4 className="text-lg font-semibold text-white text-center">
                        {cat.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">
                Select a package to view categories
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
