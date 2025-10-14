import Image from "next/image";
import { CardCarousel } from "@/components/ui/card-carousel";
import { Breadcrumb } from "@/components/breadcrumb";
import Card from "@/components/productsCardTwo";

export default function About() {
  const categories = [
    {
      id: 1,
      title: "Smart Agree",
      slug: "smart-agree",
      img: "/images/img2.png", // Replace with the actual image path
    },
    {
      id: 2,
      title: "Smart Home",
      slug: "smart-home",
      img: "/images/img3.png", // Replace with the actual image path
    },
    {
      id: 3,
      title: "Smart dada dadi care",
      slug: "smart-dada-dadi-care",
      img: "/images/img1.png",
    },
    {
      id: 4,
      title: "Smart invoirement",
      slug: "smart-invoirement",
      img: "/images/img2.png",
    },
    {
      id: 5,
      title: "Smart Helth",
      slug: "smart-helth",
      img: "/images/img3.png",
    },
    {
      id: 6,
      title: "Smart Working",
      slug: "smart-working",
      img: "/images/img4.png",
    },
  ];

  return (
    <>
      <Breadcrumb
        title="Smart Books & Kits"
        backgroundImage="/img/header1.webp"
        items={[
          { label: "Smart Books & Kits", href: "/about", isCurrent: true },
        ]}
      />

      <div className="section">
        <div className="  container max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                title={category.title}
                slug={category.slug}
                img={category.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
