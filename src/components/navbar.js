"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/lib/features/slice";
import { fetchBooks, fetchProducts } from "@/lib/features/productsSlice";
import { logout } from "@/lib/features/authSlice";
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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { books, products } = useSelector((state) => state.products);
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const combinedItems = [
    ...(books?.map((i) => ({ ...i, type: "type-2" })) || []),
    ...(products?.map((i) => ({ ...i, type: "type-1" })) || []),
  ];

  useEffect(() => {
    dispatch(fetchProducts());
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

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

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
                        {combinedItems.map((component, index) => (
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
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {isAuthenticated && (
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

              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  {user?.avatar ? (
                    <Image
                      src={user.avatar}
                      alt={user.firstName}
                      width={100}
                      height={100}
                      className="w-9 h-9 rounded-full object-cover border"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center capitalize rounded-full bg-gray-200 text-blue-500 font-bold">
                      {user?.firstName ? user.firstName.charAt(0) : "U"}
                    </div>
                  )}
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

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Logo"
                height={40}
                width={80}
                className="h-8 w-auto object-contain"
              />
              <span className="font-bold text-lg text-gray-800">Menu</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto py-6 px-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block p-3 rounded-lg hover:bg-gray-100 text-gray-800 font-semibold"
              >
                {item.label}
              </Link>
            ))}

            {isAuthenticated && (
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block p-3 mt-2 rounded-lg hover:bg-gray-100 text-gray-800 font-semibold"
              >
                Dashboard
              </Link>
            )}

            {/* Account Section */}
            <div className="mt-8 bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Account</h3>
              {isAuthenticated ? (
                <Link href="/dashboard" className="flex items-center gap-3">
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      className="w-9 h-9 rounded-full border"
                    />
                  ) : (
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                      {user?.firstName ? user.firstName.charAt(0) : "U"}
                    </div>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="btn font-medium text-sm"
                  >
                    Logout
                  </button>
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white"
                  >
                    <LogIn className="w-4 h-4 text-primary" />
                    <span>Login</span>
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white"
                  >
                    <User className="w-4 h-4 text-primary" />
                    <span>Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Footer - Cart */}
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  dispatch(toggleCart());
                  setIsOpen(false);
                }}
                className="cart-btn relative"
              >
                <ShoppingCart className="w-5 h-5" />
                {total > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 text-xs font-bold flex items-center justify-center p-0 bg-red-500 text-white">
                    {total}
                  </Badge>
                )}
              </Button>
              <span className="text-sm text-gray-600">
                Cart ({total} items)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .nav-link {
          font-weight: 700;
          color: hsl(var(--foreground));
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 0.5px;
        }
        .nav-link:hover {
          background-color: hsl(var(--primary) / 0.1);
          color: hsl(var(--primary));
        }
        .nav-link.active {
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
      `}</style>
    </>
  );
}

export default Navbar;
