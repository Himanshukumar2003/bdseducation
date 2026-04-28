"use client";

import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./cart-button";

const priceFormatter = new Intl.NumberFormat("en-IN", {
  maximumFractionDigits: 0,
});

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

  const handleNavigate = () => setIsSidebarOpen?.(false);

  const imageAlt = `${title} — ${
    isPackage ? "ATL Robotics Package" : "Robotics & STEM Educational Kit"
  } by BDS Education`;

  return (
    <article
      className="bg-white relative rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl h-full flex flex-col group"
      aria-label={`${isPackage ? "ATL Package" : "Product"}: ${title}`}
    >
      {/* Single Link (Image + Title) */}
      <Link
        href={href}
        onClick={handleNavigate}
        className="block group/link"
        aria-label={`View details for ${title}`}
      >
        <div className="relative overflow-hidden h-[180px]">
          {product.pictures?.length > 0 ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_BDS_FILE_BASE}${product.pictures[0]}`}
              alt={imageAlt}
              width={400}
              height={300}
              className="h-[180px] w-full object-contain transition-transform duration-300 group-hover/link:scale-105"
              priority={priority}
              {...(!priority && { loading: "lazy" })}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="h-[180px] w-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm">No image</span>
            </div>
          )}

          {isOutOfStock && (
            <div
              role="status"
              className="absolute top-5 left-5 bg-red-600 rounded-lg text-white px-5 py-2 text-xs font-bold uppercase tracking-wide"
            >
              Out of stock
            </div>
          )}
        </div>

        <div className="px-8 pt-8 pb-0">
          <h3 className="text-xl font-normal text-gray-800 mb-4 leading-tight group-hover/link:text-blue-500 line-clamp-2">
            {title}
          </h3>
        </div>
      </Link>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-[var(--primary-700)] font-normal text-xl italic"
            aria-label={`Price: ₹${priceFormatter.format(price)}`}
          >
            ₹{priceFormatter.format(price)}
          </span>

          {product.display_price && (
            <span
              className="text-lg text-gray-500 line-through"
              aria-label={`Original price: ₹${priceFormatter.format(
                product.display_price
              )}`}
            >
              ₹{priceFormatter.format(product.display_price)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center gap-4">
          <Link
            href={href}
            onClick={handleNavigate}
            aria-label={`Read more about ${title}`}
            className="flex-1 flex justify-center bg-transparent text-gray-800 border-2 border-gray-200 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-[var(--primary-800)] hover:text-white hover:border-[var(--primary-700)] hover:-translate-y-1"
          >
            READ MORE
          </Link>

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
