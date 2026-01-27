"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem, toggleCart } from "@/lib/features/slice";
import Link from "next/link";
import AddToCartButton from "./cart-button";

export default function ProductCard({ product, type, setIsSidebarOpen }) {
  const {
    title,
    description,
    price,
    originalPrice,
    category,
    discount,
    image,
    stock,
    slug,
  } = product;

  const dispatch = useDispatch();

  const types = type == "package" ? "package" : "product";
  return (
    <div className="bg-white relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl h-full flex flex-col group">
      <Link
        key={title}
        href={
          type === "package"
            ? `/atl-packages/${product.slug}`
            : `/product/${product.slug}`
        }
      >
        <div className="relative overflow-hidden h-45">
          {product.pictures?.length > 0 && (
            <Image
              src={`${process.env.NEXT_PUBLIC_BDS_FILE_BASE}${product.pictures[0]}`}
              alt={title}
              width={500}
              height={500}
              className="  h-45 object-contain"
            />
          )}
          {stock == 0 && (
            <div className="absolute top-5 left-5 bg-red-600 rounded-lg text-white px-5 py-2 text-xs font-bold uppercase tracking-wide">
              Out of stock
            </div>
          )}
        </div>
      </Link>
      {/* Content Section */}
      <div className="p-8 flex-1 flex flex-col">
        <Link
          href={
            type === "package"
              ? `/atl-packages/${product.slug}`
              : `/product/${product.slug}`
          }
        >
          <h4 className="text-xl font-normal text-gray-800 mb-4 leading-tight hover:text-blue-500 line-clamp-2">
            {title}
          </h4>
        </Link>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[var(--primary-700)] font-normal text-xl italic">
            ₹{price}
          </span>
          <span className="text-lg text-gray-500 line-through">
            ₹{product.display_price}
          </span>
        </div>

        <div className="flex  justify-between items-center gap-4">
          <div>
            <Link
              href={
                type === "package"
                  ? `/atl-packages/${product.slug}`
                  : `/product/${product.slug}`
              }
              onClick={() => setIsSidebarOpen(false)}
              className="flex-1    flex bg-transparent text-gray-800 border-2 border-gray-200 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-[var(--primary-800)] hover:text-white hover:border-[var(--primary-700)] hover:-translate-y-1"
            >
              READ MORE
            </Link>
          </div>
          {!stock == 0 && (
            <AddToCartButton
              product={{
                item_id: product.id,
                item_type: types,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
