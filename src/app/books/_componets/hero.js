"use client";

import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem, toggleCart } from "@/lib/features/slice";
import BuyNowButton from "@/components/ui/buynow-btn";
import { AddToCartButtonProduct } from "@/components/cart-button";

export default function BookHero({ product }) {
  console.log(product);
  return (
    <section className="bg-blue-50 section overflow-hidden">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 items-center px-4">
        {/* Left Column: Product Info */}
        <div className="col-span-1 space-y-6 order-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            {product.title}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            {product.description}
          </p>

          {product.price > 0 && (
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 italic">
              <span className="text-[var(--primary-blue)] text-3xl sm:text-4xl">
                ₹
              </span>
              {product.price}/-
            </p>
          )}

          {/* Conditional Button */}
          <div className="flex flex-wrap gap-4">
            {product.price <= 0 && product.book_link ? (
              <Link href={product.book_link} className="btn">
                View demo
              </Link>
            ) : (
              <>
                <BuyNowButton
                  product={{
                    item_id: product.id,
                    item_type: "book",
                  }}
                />
                <AddToCartButtonProduct
                  product={{
                    item_id: product.id,
                    item_type: "book",
                  }}
                />
              </>
            )}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="col-span-1 flex justify-center order-1 ">
          {product.pictures?.length > 0 && (
            <Image
              src={`${process.env.NEXT_PUBLIC_FILE_BASE}${product.pictures[0]}`}
              alt={product.title}
              width={500}
              height={500}
              className="w-full object-contain  max-h-[500px]"
            />
          )}
        </div>
      </div>
    </section>
  );
}
