"use client";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import Image from "next/image";


export const images = [
  { id: 1, src: "/images/Creativity-and-Innovation.png", alt: "Image 1" },
  { id: 10, src: "/images/Creativity-and-Innovation.png", alt: "Image 10" },
  { id: 12, src: "/images/Creativity-and-Innovation.png", alt: "Image 12" },
   { id: 13, src: "/images/Creativity-and-Innovation.png", alt: "Image 1" },
  { id: 4, src: "/images/Creativity-and-Innovation.png", alt: "Image 10" },
  { id: 5, src: "/images/Creativity-and-Innovation.png", alt: "Image 12" },
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
        <div className="container mx-auto">
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
          <div className="columns-1 md:columns-3 lg:columns-3 xl:columns-3 gap-4 space-y-4">
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
