

import Link from "next/link";
import Interactive from "../_components/interactive";
import GetInTouch from "@/components/cta";
import TableVariation from "../_components/table";
import VideoSection from "../_components/video";
import TestimonialsSection from "../_components/review";
import Tabs from "../_components/nav";
import Image from "next/image";
import { FILE_BASE_URL } from "@/lib/features/productsSlice";


export default async function Page({ params }) {
 const { slug } = await params;


  const response = await fetch(
    `https://bdsapi.bwdemo.in/v1/products/${slug}`,
    
  );
  const data = await response.json();

console.log(data)

  if (!data?.data) {
    return <div>Not Found</div>;
  }

  const product = data.data;

  return (
    <>
      {/* <Tabs /> */}

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
              <button className="btn outline-btn">Add to cart</button>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-center">
            {product.pictures?.length > 0 && (
              <Image
                // src={product.pictures[0].replace("public", "")}
                   src={`https://bdsapi.bwdemo.in/${product.pictures[0]}`}


                alt={product.title}
                width={2000}
                height={2000}
                className="w-full object-contain"
              />
            )}
          </div>
        </div>
      </section>

      <Interactive features={product.features} />
      <TestimonialsSection />
      <GetInTouch />
      <VideoSection videos={product.youtube_urls} />
      <TableVariation specifications={product.specifications} />
    </>
  );
}
