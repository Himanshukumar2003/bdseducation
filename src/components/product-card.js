"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem, toggleCart } from "@/lib/features/slice";
import Link from "next/link";
import AddToCartButton from "./cart-button";

export default function ProductCard({ product }) {
  const {
    title,
    description,
    price,
    originalPrice,
    category,
    discount,
    image,
    slug,
  } = product;

  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl h-full flex flex-col group">
      <div className="relative overflow-hidden h-72">
        {product.pictures?.length > 0 && (
          <Image
            src={`${process.env.NEXT_PUBLIC_FILE_BASE}${product.pictures[0]}`}
            alt={title}
            fill
          />
        )}

        {/* <div className="absolute top-5 left-5 bg-[var(--primary-700)] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
          Robot
        </div> */}
        {discount && (
          <div className="absolute top-5 right-5 text-[var(--primary-blue)] text-sm font-bold uppercase tracking-widest">
            {discount}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8 flex-1 flex flex-col">
        <h4 className="text-xl font-normal text-gray-800 mb-4 leading-tight    line-clamp-2">
          {title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-[var(--primary-700)] font-normal text-xl italic">
            ₹{price}
          </span>
          {/* {originalPrice && (
            <span className="text-gray-400 line-through">{originalPrice}</span>
          )} */}
        </div>

        <div className="flex justify-between items-center  gap-4">
          <div>
            <Link
              href={`/product/${slug}`}
              className="flex-1 bg-transparent text-gray-800 border-2 border-gray-200 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-[var(--primary-800)] hover:text-white hover:border-[var(--primary-700)] hover:-translate-y-1"
            >
              READ MORE
            </Link>
          </div>

          <AddToCartButton
            product={{
              item_id: product.id,
              item_type: "product",
            }}
          />

          {/* <button
            onClick={handleAddToCart}
            className="w-12 h-12 bg-[var(--primary-700)] text-white rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg relative overflow-hidden group"
          >
            <ShoppingCart className="w-5 h-5 relative z-10" />
            <div className="absolute inset-0 bg-white/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </button> */}
        </div>
      </div>
    </div>
  );
}
