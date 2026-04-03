"use client";

import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./cart-button";

export default function ProductCard({
  product,
  type,
  setIsSidebarOpen,
  priority = false,
}) {
  const { title, description, price, stock, slug } = product;

  const isPackage = type === "package";
  const href = isPackage ? `/atl-packages/${slug}` : `/product/${slug}`;
  const itemType = isPackage ? "package" : "product";
  const isOutOfStock = stock === 0;

  const imageAlt = `${title} — ${isPackage ? "ATL Robotics Package" : "Robotics & STEM Educational Kit"} by BDS Education`;

  return (
    <article
      className="bg-white relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl h-full flex flex-col group"
      aria-label={title}
    >
      <Link href={href} tabIndex={-1} aria-hidden="true">
        <div className="relative overflow-hidden h-45">
          {product.pictures?.length > 0 && (
            <Image
              src={`${process.env.NEXT_PUBLIC_BDS_FILE_BASE}${product.pictures[0]}`}
              alt={imageAlt}
              width={400}
              height={300}
              className="h-45 w-full object-contain"
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}

          {isOutOfStock && (
            <div
              className="absolute top-5 left-5 bg-red-600 rounded-lg text-white px-5 py-2 text-xs font-bold uppercase tracking-wide"
              aria-label="Out of stock"
            >
              Out of stock
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <Link href={href}>
          {/* ✅ h3 — correct hierarchy (parent section uses h2) */}
          <h3 className="text-xl font-normal text-gray-800 mb-4 leading-tight hover:text-blue-500 line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {description}
        </p>

        {/* Pricing */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-[var(--primary-700)] font-normal text-xl italic"
            aria-label={`Price: ₹${price}`}
          >
            ₹{price}
          </span>
          {product.display_price && (
            <span
              className="text-lg text-gray-500 line-through"
              aria-label={`Original price: ₹${product.display_price}`}
            >
              ₹{product.display_price}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center gap-4">
          <div>
            {" "}
            <Link
              href={href}
              onClick={() => setIsSidebarOpen?.(false)}
              aria-label={`Read more about ${title}`}
              className="flex-1 flex bg-transparent text-gray-800 border-2 border-gray-200 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-[var(--primary-800)] hover:text-white hover:border-[var(--primary-700)] hover:-translate-y-1"
            >
              READ MORE
            </Link>
          </div>

          {!isOutOfStock && (
            <AddToCartButton
              product={{
                item_id: product.id,
                item_type: itemType,
              }}
            />
          )}
        </div>
      </div>
    </article>
  );
}
