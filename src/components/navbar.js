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
  MoreHorizontalIcon,
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
import { usePathname } from "next/navigation";
import { fetchBooks } from "@/lib/features/productsSlice";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import ProductCard from "./product-card";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePackage, setActivePackage] = useState(null);
  const [menu, setMenu] = useState(false);

  const [activeSection, setActiveSection] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);
  const { books } = useSelector((state) => state.products);
  const bookItems = [...(books.map((i) => ({ ...i, type: "books" })) || [])];
  const dispatch = useDispatch();
  const { user } = useAuth();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const pathname = usePathname();

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
    { title: "ATL Products", href: "/atl-packages" },
    { title: "Non ATL Products", hasSubmenu: true },
    // { title: "Smart Kits Combo", href: "/smart-Kits-combo" },
    { title: "Books", hasSubmenu: true },
    // { title: "Web Recourse", href: "/web-recourse" },
    { title: "Become a Distributor", href: "/become-a-distributor" },
  ];

  const handleNavClick = (item) => {
    if (item.title === "ATL Products") {
      if (activeSection === "ATL") {
        setIsSidebarOpen(false);
        setActiveSection(null);
        setActivePackage(null);
      } else {
        setIsSidebarOpen(true);
        setMenu(false);
        setActiveSection("ATL");

        setActivePackage(atlPackages[0] || null);
        setMenu(false);
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
        setMenu(false);
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
        setMenu(false);
      }
    }
  };

  useEffect(() => {
    dispatch(fetchBooks());
    // dispatch(fetchCartItems());
  }, [dispatch]);

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

  // scrool stop

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup (important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  // back navgation off

  useEffect(() => {
    setIsSidebarOpen(false);
    setActiveSection(null);
    setActivePackage(null);
  }, [pathname]);

  return (
    <div className="sticky top-0 nav   bg-white z-99">
      <div className="bg-header px-4 w-full mx-auto flex justify-between h-full lg:pr-8   ">
        <div
          className="flex shrink-0 items-center bg-white h-ful w-full justify-between lg:w-auto  lg:pr-[70px] clipPath-logo "
          style={{ clipPath: "polygon(0 0, 100% 0%, 83% 100%, 0% 100%)" }}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Menu size={24} className="text-blue-900" />
            </SheetTrigger>
            <SheetTitle className={"sr-only"}></SheetTitle>
            <SheetContent side="left">
              {[
                { name: "About Us", link: "/about" },
                { name: "Software", link: "/software" },
                { name: "Blog", link: "/blog" },
                { name: "Gallery", link: "/gallery" },
                { name: "Contact Us", link: "/contact" },
              ].map((item, index) => (
                <SheetTrigger asChild key={index}>
                  <Link
                    href={item.link}
                    className=" py-4  px-5 text-left font-medium border-b capitalize hover:bg-gray-100 hover:text-blue-900"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.name}
                  </Link>
                </SheetTrigger>
              ))}
            </SheetContent>
          </Sheet>

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
                  onClick={() => setIsSidebarOpen(false)}
                  className="px-4 nav-links  py-6 border-b-4 text-white font-semibold border-[#0053a3] flex items-center hover:border-white"
                >
                  {item.title}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(item)}
                  className="px-4 nav-links py-6 border-b-4 border-[#0053a3] text-white font-semibold flex items-center hover:border-white"
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
            {user && (
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Image
                    src="/user-profile.png"
                    alt="profile"
                    width={50}
                    height={50}
                  ></Image>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 z-[999]" align="end">
                  <div className="py-2 pl-2">
                    <Link href="/dashboard">Dashboard</Link>
                  </div>
                  <DropdownMenuSeparator />

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1  bg-transparent  text-red-500 border-0 py-2 pl-2 "
                  >
                    Logout
                  </button>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            {!user && (
              <>
                <Link href="/login" className="btn flex gap-2 items-center">
                  <LogIn className="w-4 h-4" /> Login
                </Link>
              </>
            )}
          </div>
        </div>

        {mobileNav && <MobileMenu setMobileNav={setMobileNav} user={user} />}
      </div>

      {isSidebarOpen && (
        <div className=" hidden lg:flex h-[calc(100vh-91.36px)]     overflow-y-auto   ">
          <div
            className={cn(
              "fixed md:static gap-0 w-[33vw] top-0 left-0 bg-[#003366] text-white z-50 custom-clip  ",
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
                      "w-full border-t-1 border-blue-400      capitalize cursor-pointer text-left pl-[100px] pr-[80px] transition duration-300 font-bold text-md py-5 flex hover:bg-[#0d477b] hover:pl-[130px] justify-between items-center",
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
                  const bgColors = [
                    "bg-gradient-to-r from-yellow-100 to-yellow-50",
                    "bg-gradient-to-r from-pink-100 to-pink-50",
                    "bg-gradient-to-r from-blue-100 to-blue-50",
                    "bg-gradient-to-r from-green-100 to-green-50",
                    "bg-gradient-to-r from-purple-100 to-purple-50",
                  ];
                  const titleColors = [
                    "text-yellow-600",
                    "text-pink-600",
                    "text-blue-600",
                    "text-green-600",
                    "text-purple-600",
                  ];

                  const bgColor = bgColors[index % bgColors.length];
                  const titleColor = titleColors[index % titleColors.length];
                  const grade = index + 1;

                  return activeSection === "BOOKS" ? (
                    <Link
                      href={
                        activeSection === "BOOKS"
                          ? `/books/${cat.slug}`
                          : `/product/?pkgtypes=${activePackage.package_type}&packages=${activePackage.id}&categories=${cat.id}`
                      }
                      key={cat.id}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <div
                        className={`${bgColor} rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          {/* Left Side Text */}
                          <div className="flex-1">
                            <h2
                              className={`text-lg font-bold ${titleColor} mb-2 leading-snug flex items-center gap-2`}
                            >
                              {cat.title}
                              {/* <span
                                  className={`inline-block ${titleColor} bg-white rounded-full w-8 h-8 text-center leading-8 text-lg shadow-sm`}
                                >
                                  {grade}
                                </span> */}
                            </h2>
                            <p className="text-sm text-gray-700 line-clamp-3">
                              {cat.description}
                            </p>
                          </div>

                          {/* Right Side Image */}
                          <div className="flex-shrink-0">
                            <Image
                              width={180}
                              height={220}
                              src={`${process.env.NEXT_PUBLIC_BDS_FILE_BASE}${cat.pictures[0]}`}
                              alt="books"
                              className="w-24 h-36 md:w-28 md:h-40 lg:w-32 lg:h-44 object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    // Other Packages Cards
                    <ProductCard
                      product={cat}
                      type={"product"}
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
    </div>
  );
}
