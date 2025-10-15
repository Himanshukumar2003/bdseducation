import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
export default function Products() {
  const products = [
    {
      title: "Teaching Portal",
      description:
        "An interactive platform designed for educators and learners, offering courses, assessments, and real-time progress tracking.",
      imagePath: "/images/hero-2.png",
      href: "/images/hero3.jpeg",
      id: "1",
    },
    {
      title: "Code Library",
      description:
        "A comprehensive collection of reusable code snippets, modules, and frameworks to accelerate software development.",
      imagePath: "/images/hero-3.png",
      href: "/images/hero-3.png",
      id: "2",
    },
  ];

  return (
    <>
      <Breadcrumb
        title="Web Recourse"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "web-recourse",
            href: "/web-recourse",
            isCurrent: true,
          },
        ]}
      />
      <div className="section bg-gray-100" id="products">
        <div className="   container max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {products.map((product, index) => {
              return (
                <div key={index}>
                  <Link
                    href={product.href}
                    className="group relative block overflow-hidden h-[400px] transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="absolute inset-0 transition-all duration-300 bg-[rgba(0,61,116,0.7)] z-10 group-hover:bg-blue-900"></div>

                    {/* Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={product.imagePath || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
                        priority
                      />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6 text-white z-10">
                      <div>
                        <h2 className="text-4xl font-bold mb-2">
                          {product.title}
                        </h2>
                        <p className="text-lg   font-semibold">
                          {product.description}
                        </p>
                      </div>
                      <div className="self-end">
                        <div className="bg-white p-2 rounded-full group-hover:bg-blue-100 transition-colors">
                          <ArrowRight className="h-6 w-6 text-blue-900" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
