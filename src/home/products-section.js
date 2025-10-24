"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/lib/features/productsSlice";
import ProductCard from "@/components/product-card";
import Link from "next/link";

export default function ProductsSection({ sliceCount = null }) {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    // Fetch both APIs on mount
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
            OUR PRODUCTS
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Educational Kits & Components
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Discover our carefully selected collection of Educational Kits and
            learning Components designed to support your child&apos;s
            development and make learning fun.
          </p>
        </div>

        {/* {loading && <p className="text-center">Loading products...</p>}
        {error && <p className="text-center text-red-500">{error}</p>} */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(sliceCount ? products.slice(0, sliceCount) : products).map(
            (product) => (
              <ProductCard key={product.id} product={product} />
            )
          )}
        </div>
        {sliceCount && (
          <div className="mt-5 text-center">
            <Link href="/product" className="btn">
              See More Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
