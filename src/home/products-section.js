"use client";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { fetchProducts } from "@/lib/features/productsSlice";
import Link from "next/link";

// ✅ Lazy load ProductCard (TBT reduce)
const ProductCard = dynamic(() => import("@/components/product-card"), {
  loading: () => (
    <div className="h-[300px] bg-gray-100 animate-pulse rounded-2xl" />
  ),
});

export default function ProductsSection({ sliceCount = null }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (!products?.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  const displayedProducts = useMemo(() => {
    if (!products) return [];
    return sliceCount ? products.slice(0, sliceCount) : products;
  }, [products, sliceCount]);

  return (
    <section className="py-16 bg-blue-50" aria-labelledby="products-heading">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
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

          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            Discover our collection of robotics, AI, and STEM kits designed to
            make learning practical and engaging for students.
          </p>
        </div>

        {/* Product Grid */}
        <div
          className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]"
          role="list"
        >
          {displayedProducts.map((product, index) => (
            <div role="listitem" key={product.slug ?? product.id ?? index}>
              <ProductCard
                product={product}
                priority={index < 2} // ✅ Only first 2 for LCP
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        {sliceCount && (
          <div className="mt-10 text-center">
            <Link
              href="/product"
              className="inline-block bg-[var(--primary-800)] text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-[var(--primary-700)] transition"
            >
              View All Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
