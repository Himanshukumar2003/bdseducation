"use client";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem, toggleCart } from "@/lib/features/slice";

export default function Hero({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
    dispatch(toggleCart()); // Toggle cart functionality
  };

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 items-center px-4">
        {/* Left Column: Product Info */}
        <div className="col-span-1 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {product.title}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            {product.description}
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 italic">
            <span className="text-[var(--primary-blue)] text-3xl sm:text-4xl">
              ₹
            </span>{" "}
            {product.price}/-
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="" className="btn text-sm sm:text-base">
              Shop Now
            </Link>
            <button
              onClick={handleAddToCart}
              className="btn outline-btn text-sm sm:text-base"
            >
              Add to cart
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="col-span-1 flex justify-center">
          {product.pictures?.length > 0 && (
            <Image
              // src={product.pictures[0].replace("public", "")}
              src={`${process.env.NEXT_PUBLIC_FILE_BASE_URL}${product.pictures[0]}`}
              alt={product.title}
              width={2000}
              height={2000}
              className="w-full object-contain max-w-md sm:max-w-lg md:max-w-xl"
            />
          )}
        </div>
      </div>
    </section>
  );
}
