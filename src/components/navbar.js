"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/lib/features/slice";
import {
  fetchBooks,
  fetchProducts,
  fetchProducts2,
} from "@/lib/features/productsSlice";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ListItem from "./product-dropdown";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/auth-provider";
import UserDropdown, { NavUser } from "./user-dropdown";
import { handleLogout } from "@/providers/auth-provider";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();

  const { products, products2, loading, error } = useSelector(
    (state) => state.products
  );
  const { books } = useSelector((state) => state.products);

  const { user, isUserLoading } = useAuth();
  console.log({ isUserLoading });
  // Combine product types
  const combinedItems = [
    ...(products2?.map((i) => ({ ...i, type: "type-2" })) || []),
    ...(products?.map((i) => ({ ...i, type: "type-1" })) || []),
  ];

  const bookItems = [...(books.map((i) => ({ ...i, type: "books" })) || [])];

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProducts2());
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const total = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop + Mobile Navbar */}
      <nav
        className={`sticky top-0 z-40 w-full transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white shadow-sm"
        } h-[100px] py-4 flex justify-center items-center`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  height={60}
                  width={120}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}

              {/* Products Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="nav-link">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="animate-in slide-in-from-top-2 duration-300">
                      <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px] xl:w-[1000px] lg:grid-cols-3 xl:grid-cols-4">
                        {combinedItems.length > 0 ? (
                          combinedItems.map((component, index) => (
                            <ListItem
                              key={index}
                              title={component.title}
                              href={`/${
                                component.type === "type-1"
                                  ? "product"
                                  : "product-two"
                              }/${component.slug}`}
                              image={component.pictures}
                            >
                              {component.description}
                            </ListItem>
                          ))
                        ) : (
                          <div>No products available</div>
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="nav-link">
                      Books
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="animate-in slide-in-from-top-2 duration-300">
                      <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px] xl:w-[1000px] lg:grid-cols-3 xl:grid-cols-4">
                        {bookItems.length > 0 ? (
                          bookItems.map((component, index) => (
                            <ListItem
                              key={index}
                              title={component.title}
                              href={`books/${component.slug}`}
                              image={component.pictures}
                            >
                              {component.description}
                            </ListItem>
                          ))
                        ) : (
                          <div>No products available</div>
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {user && (
                <Link
                  href="/dashboard"
                  className="nav-link font-semibold text-blue-600"
                >
                  Dashboard
                </Link>
              )}
            </div>

            {/* Right Section Desktop */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="cart-btn relative"
                  onClick={() => dispatch(toggleCart())}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {total > 0 && (
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 text-xs font-bold rounded-full flex items-center justify-center p-0 bg-red-500 text-white">
                      {total}
                    </Badge>
                  )}
                </Button>
              </div>

              {user ? (
                <div className="flex items-center gap-3">
                  <UserDropdown user={user} />
                  <button
                    onClick={handleLogout}
                    className="btn font-medium text-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm">
                  <Link href="/login" className=" btn flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    className="flex items-center gap-1 btn bg-transparent border-2 border-blue-500 text-blue-500 hover:text-white"
                  >
                    <User className="w-4 h-4" />
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-all duration-200 relative z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
