"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductDropdown from "./product-dropdown";
import MobileProductMenu from "./mobile-product-menu";
import { useDispatch } from "react-redux";
import { toggleCart } from "@/lib/features/slice";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm h-[100px] py-4 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between ">
          <Link href="/" className="flex items-center text-decoration-none">
         <Image src="/images/logo.png" alt="" height={300} width={300} className="w-full" ></Image>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-link active">
              Home
            </Link>
            <Link href="/product" className="nav-link">
              product
            </Link>
            <ProductDropdown />
            <Link href="/product-details" className="nav-link">
              Product Details
            </Link>
            <Link href="#" className="nav-link">
              Gallery
            </Link>
            <Link href="#" className="nav-link">
              Shop
            </Link>
            <Link href="#" className="nav-link">
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
              <Link href="#" className="auth-link">
                Login
              </Link>
              <span style={{ color: "var(--text-muted)" }}>|</span>
              <Link href="#" className="auth-link">
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
              <MobileProductMenu />
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
