"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductDropdown from "./product-dropdown";
import { useDispatch } from "react-redux";
import { toggleCart, totalItems } from "@/lib/features/slice";
import { fetchBooks } from "@/lib/features/productsSlice";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import ListItem from "./product-dropdown";

import { useSelector } from "react-redux";
import { fetchProducts } from "@/lib/features/productsSlice";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const { books, products, loading, error } = useSelector(
    (state) => state.products
  );
  const combinedItems = [
    ...(books.map((i) => ({ ...i, type: "type-2" })) || []),
    ...(products.map((i) => ({ ...i, type: "type-1" })) || []),
  ];
  console.log({ combinedItems });
  useEffect(() => {
    // Fetch both APIs on mount
    dispatch(fetchProducts());
    dispatch(fetchBooks());
  }, [dispatch]);

  const total = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm h-[100px] py-4 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between ">
          <Link href="/" className="flex items-center text-decoration-none">
            <Image
              src="/images/logo.png"
              alt=""
              height={300}
              width={300}
              className="w-full"
            ></Image>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-link active">
              Home
            </Link>
            <Link href="/about" className="nav-link active">
              About
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid  w-[400px] gap-2 md:w-[500px] md:grid-cols-4 lg:w-[1200px]">
                      {combinedItems.map((component, index) => (
                        <ListItem
                          key={index}
                          title={component.title}
                          href={`/${component.type === "type-1" ? "product" : "product-two"}/${component.slug}`}
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

            <Link href="gallery" className="nav-link">
              Gallery
            </Link>
            <Link href="gallery" className="nav-link">
              Blogs
            </Link>
            <Link href="#" className="nav-link">
              Shop
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* <Button
              variant="default"
              size="icon"
              className="w-10 h-10 rounded-md transition-all duration-300 hover:transform hover:-translate-y-0.5"
              style={{
                background: "var(--primary-blue)",
                color: "var(--primary-contrast)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--primary-700)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--primary-blue)")
              }
            >
              <Search className="w-5 h-5" />
            </Button> */}

            <div className="flex items-center gap-2 text-sm">
              <Link href="#" className="auth-link nav-link">
                Login
              </Link>
              <span style={{ color: "var(--text-muted)" }}>|</span>
              <Link href="#" className="auth-link nav-link">
                Register
              </Link>
            </div>

            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="cart-btn"
                onClick={() => dispatch(toggleCart())}
              >
                <ShoppingCart className="w-5 h-5" />
              </Button>
              {total > 0 && (
                <Badge
                  className="absolute -top-2 -right-2 w-4 h-4 text-xs font-bold rounded-full flex items-center justify-center p-0"
                  style={{
                    background: "var(--accent-red)",
                    color: "var(--white)",
                  }}
                >
                  {total}
                </Badge>
              )}
            </div>

            <button className="btn">
              <span>Contact Us</span>
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X
                className="w-6 h-6"
                style={{ color: "var(--text-secondary)" }}
              />
            ) : (
              <Menu
                className="w-6 h-6"
                style={{ color: "var(--text-secondary)" }}
              />
            )}
          </Button>
        </div>

        {isOpen && (
          <div
            className="lg:hidden border-t bg-white"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="py-4 space-y-1">
              <Link href="#" className="nav-link-mobile block">
                Home
              </Link>
              <Link href="#" className="nav-link-mobile block">
                Courses
              </Link>
              <Link href="#" className="nav-link-mobile block">
                Blog
              </Link>
              <Link href="#" className="nav-link-mobile block">
                Gallery
              </Link>
              <Link href="#" className="nav-link-mobile block">
                Shop
              </Link>
              <Link href="#" className="nav-link-mobile block">
                Contact
              </Link>
            </div>

            <div
              className="px-4 py-4 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="default"
                    size="icon"
                    className="w-10 h-10 rounded-md"
                    style={{
                      background: "var(--primary-blue)",
                      color: "var(--primary-contrast)",
                    }}
                  >
                    <Search className="w-5 h-5" />
                  </Button>

                  <div className="relative">
                    <Button variant="ghost" size="icon" className="cart-btn">
                      <ShoppingCart className="w-5 h-5" />
                    </Button>
                    <Badge
                      className="absolute -top-2 -right-2 w-4 h-4 text-xs font-bold rounded-full flex items-center justify-center p-0"
                      style={{
                        background: "var(--accent-red)",
                        color: "var(--white)",
                      }}
                    >
                      3
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Link href="#" className="auth-link">
                    Login
                  </Link>
                  <span style={{ color: "var(--text-muted)" }}>|</span>
                  <Link href="#" className="auth-link">
                    Register
                  </Link>
                </div>
              </div>

              <Button className="btn w-full">
                <span>Contact Us</span>
              </Button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .nav-link {
          font-family: "Patrick Hand", cursive;
          font-weight: 600;
          color: var(--black);
          padding: 8px 16px;
          border-radius: 6px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 0.5px;
          font-weight: 900;
          text-decoration: none;
        }

        .nav-link:hover {
          background-color: var(--primary-10);
          color: var(--primary-blue);
        }

        .nav-link.active {
          background-color: transparent;
          color: var(--text-primary);
          border: 2px solid var(--text-primary);
        }

        .nav-link-mobile {
          font-family: "Patrick Hand", cursive;
          font-weight: 600;
          color: var(--black);
          padding: 12px 0;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 0.5px;
          font-weight: 900;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-link-mobile:hover {
          color: var(--primary-blue);
        }

        .auth-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .auth-link:hover {
          color: var(--primary-blue);
        }

        .cart-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .cart-btn:hover {
          color: var(--primary-blue);
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
