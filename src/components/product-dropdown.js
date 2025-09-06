"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Bot, Cpu, Gamepad2, Printer, Zap } from "lucide-react";

const productCategories = [
  {
    title: "Age 4+",
    products: [
      { name: "mTiny", icon: Bot, badge: null },
      { name: "xLight", icon: Zap, badge: null },
    ],
  },
  {
    title: "Age 6+",
    products: [
      { name: "Codey Rocky", icon: Bot, badge: null },
      { name: "mBot", icon: Bot, badge: null },
      { name: "mBot2", icon: Bot, badge: "Hot" },
    ],
  },
  {
    title: "Age 8+",
    products: [
      { name: "mBot Ranger", icon: Bot, badge: null },
      { name: "NextMaker", icon: Cpu, badge: null },
    ],
  },
  {
    title: "Age 12+",
    products: [
      { name: "mBot2 Rover", icon: Bot, badge: "New" },
      { name: "mBot Ultimate", icon: Bot, badge: null },
      { name: "CyberPi", icon: Gamepad2, badge: null },
    ],
  },
  {
    title: "All ages",
    products: [
      { name: "xTool P2S", icon: Printer, badge: "Hot" },
      { name: "xTool Screen Printer", icon: Printer, badge: null },
      { name: "xTool F1 Ultra", icon: Printer, badge: "New" },
    ],
  },
];

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="nav-link flex items-center gap-1"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Products
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border z-50 min-w-[800px]"
          style={{ borderColor: "var(--border)" }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="p-6">
            <div className="grid grid-cols-5 gap-6">
              {productCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-3">
                  <h3
                    className="font-bold text-sm uppercase tracking-wide border-b pb-2"
                    style={{
                      color: "var(--primary-blue)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {category.title}
                    <span
                      className="text-xs ml-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Shop All &gt;
                    </span>
                  </h3>
                  <div className="space-y-2">
                    {category.products.map((product, productIndex) => (
                      <Link
                        key={productIndex}
                        href="#"
                        className="flex items-center gap-3 p-2 rounded-md transition-colors group product-link"
                      >
                        <div
                          className="w-8 h-8 rounded-md flex items-center justify-center transition-colors product-icon"
                          style={{
                            backgroundColor: "var(--primary-10)",
                          }}
                        >
                          <product.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span
                              className="text-sm font-medium transition-colors product-name"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {product.name}
                            </span>
                            {product.badge && (
                              <span
                                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                  product.badge === "Hot"
                                    ? "badge-hot"
                                    : "badge-new"
                                }`}
                              >
                                {product.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
          background: none;
          border: none;
          cursor: pointer;
        }

        .nav-link:hover {
          background-color: var(--primary-10);
          color: var(--primary-blue);
        }

        .product-link:hover {
          background-color: var(--primary-10);
        }

        .product-link:hover .product-icon {
          background-color: var(--primary-blue) !important;
          color: var(--white);
        }

        .product-link:hover .product-name {
          color: var(--primary-blue) !important;
        }

        .badge-hot {
          background-color: rgba(255, 107, 53, 0.1);
          color: var(--accent-red);
        }

        .badge-new {
          background-color: rgba(78, 205, 196, 0.1);
          color: var(--accent-green);
        }
      `}</style>
    </div>
  );
}
