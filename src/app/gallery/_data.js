"use client";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import Image from "next/image";

export const images = [
  { id: 1, src: "/images/Gallery/img.png", alt: "Image 1" },
  { id: 3, src: "/images/Gallery/img-2.png", alt: "Image 3" },
  { id: 4, src: "/images/Gallery/img-3.png", alt: "Image 4" },
  { id: 5, src: "/images/Gallery/img-4.png", alt: "Image 5" },
  { id: 6, src: "/images/Gallery/img-5.png", alt: "Image 6" },
  { id: 7, src: "/images/Gallery/img-6.png", alt: "Image 7" },
  { id: 8, src: "/images/Gallery/img-7.png", alt: "Image 8" },
];

export default function Gallery() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
      Toolbar: true,
    });

    return () => {
      Fancybox.unbind("[data-fancybox='gallery']");
    };
  }, []);

  return (
    <>
      <div className="section py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-[600px] mx-auto">
            <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
              Gallery
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Gallery
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Stay updated with the latest insights, tips, and stories from our
              kindergarten community. Discover helpful parenting advice,
              educational activities, and exciting school updates.
            </p>
          </div>
          <div className="columns-1 md:columns-3 lg:columns-4 xl:columns-4 gap-4 space-y-4">
            {images.map((image) => (
              <a
                key={image.id}
                data-fancybox="gallery"
                href={image.src}
                data-caption={image.alt}
                className="break-inside-avoid block"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={700}
                  className="w-full  rounded-lg shadow-md hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
