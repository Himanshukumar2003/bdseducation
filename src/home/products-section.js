"use client";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/lib/features/productsSlice";
import ProductCard from "@/components/product-card";
import Link from "next/link";

export default function ProductsSection({ sliceCount = null }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // ✅ useMemo — recompute only when products or sliceCount changes
  const displayedProducts = useMemo(
    () => (sliceCount ? products.slice(0, sliceCount) : products),
    [products, sliceCount]
  );

  return (
    <section className="py-16 bg-blue-50" aria-labelledby="products-heading">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
            OUR PRODUCTS
          </span>
          <h2
            id="products-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6"
          >
            Educational Kits & Components
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Discover our carefully selected collection of Educational Kits and
            learning Components designed to support your child&apos;s
            development and make learning fun.
          </p>
        </div>

        <div
          className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]"
          role="list"
          aria-label="Robotics and STEM educational kits and components"
        >
          {displayedProducts.map((product, index) => (
            <div role="listitem" key={product.slug ?? product.id ?? index}>
              <ProductCard product={product} priority={index < 3} />
            </div>
          ))}
        </div>

        {sliceCount && (
          <div className="mt-5 text-center">
            <Link
              href="/product"
              className="btn"
              aria-label="See all robotics and STEM educational kits by BDS Education"
            >
              See More Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
