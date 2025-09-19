

import Link from "next/link";
import Interactive from "../_components/interactive";
import GetInTouch from "@/components/cta";
import TableVariation from "../_components/table";
import VideoSection from "../_components/video";
import TestimonialsSection from "../_components/review";
import Tabs from "../_components/nav";
import Image from "next/image";
import Hero from "../_components/hero";


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

   <Hero product={product}></Hero>

      <Interactive features={product.features} />
      <TestimonialsSection />
      <GetInTouch />
      <VideoSection videos={product.youtube_urls} />
      <TableVariation specifications={product.specifications} />
    </>
  );
}
