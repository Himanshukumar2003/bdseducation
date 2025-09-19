"use client";
import Link from "next/link"
import Image from "next/image"
import { useDispatch } from "react-redux";
import { addItem, toggleCart } from "@/lib/features/slice";

export default function Hero({product}) {
        const dispatch = useDispatch();

     const handleAddToCart = () => {
          dispatch(addItem(product));
          dispatch(toggleCart()); // agar toggleCart use karna hai to import kar lena
        };
      
    return(
        <>
        <section className="bg-gray-50 py-16">
        <div className="container mx-auto grid grid-cols-12 gap-10 items-center px-6">
          <div className="col-span-12 md:col-span-6 space-y-6">
            <h2 className="text-5xl font-bold text-gray-900">{product.title}</h2>
            <p className="text-gray-600 text-lg">{product.description}</p>
            <p className="text-2xl font-semibold text-gray-900 italic">
              <span className="text-[var(--primary-blue)] text-4xl">₹</span>{" "}
              {product.price}/-
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="" className="btn">
                Shop Now
              </Link>
              <button   onClick={handleAddToCart} className="btn outline-btn">Add to cart</button>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-center">
            {product.pictures?.length > 0 && (
              <Image
                // src={product.pictures[0].replace("public", "")}
                     src={`${process.env.NEXT_PUBLIC_FILE_BASE_URL}${product.pictures[0]}`}



                alt={product.title}
                width={2000}
                height={2000}
                className="w-full object-contain"
              />
            )}
          </div>
        </div>
      </section>
        </>
    )
}

