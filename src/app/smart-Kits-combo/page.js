"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const kitCombos = [
    {
      title: "Smart Agree Kits Combo",
      category: "Product",
      description: "All-in-one kit for agricultural and farming needs.",
      img: "/images/img5.png",
      slug: "/image/smart-agree-kits-combo",
      type: "Product",
    },
    {
      title: "Smart Home Kits Combo",
      category: "Product",
      description: "A complete smart home automation combo kit.",
      img: "/images/Smart-Home.jpg",
      slug: "/image/smart-home-kits-combo",
      type: "Product",
    },
    {
      title: "Smart dada dadi care Kits Combo",
      category: "Product",
      description: "Care combo specially designed for elderly (grandparents).",
      img: "/images/Smart-Dada-Dadi.jpg",
      slug: "/image/smart-dada-dadi-care-kits-combo",
      type: "Product",
    },
    {
      title: "Smart Environment Kits Combo",
      category: "Product",
      description: "Environment-friendly kits for sustainable living.",
      img: "/images/smart-environment.jpg",
      slug: "/image/smart-invoirement-kits-combo",
      type: "Product",
    },
    {
      title: "Smart Helth Kits Combo",
      category: "Product",
      description: "Health and wellness kit combo for smart living.",
      img: "/images/img5.png",
      slug: "/image/smart-helth-kits-combo",
      type: "Product",
    },
    {
      title: "Smart Working Kits Combo",
      category: "Product",
      description: "Smart kits combo designed for working professionals.",
      img: "/images/img5.png",
      slug: "/image/smart-working-kits-combo",
      type: "Product",
    },
  ];

  return (
    <>
      <Breadcrumb
        title="Smart Kits Combo"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "smart-kits-combo",
            href: "/smart-Kits-combo",
            isCurrent: true,
          },
        ]}
      />
      <section className="section">
        <div className=" contanier max-w-7xl mx-auto px-4">
          <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {kitCombos.map((kit, index) => (
              <Card
                key={index}
                className="group   hover:-translate-y-5 hover:shadow-xl transition-all duration-500 ease-in-out overflow-hidden bg-gray-50 p-6 pt-0 hover:bg-blue-900  gap-0"
              >
                <Image
                  src="/images/img3.png"
                  alt={kit.title}
                  width={400}
                  height={250}
                  className="w-full   h-auto aspect-square rounded-b-xl mb-6"
                />

                <CardHeader className="p-0 mb-0">
                  <CardTitle className="text-lg  transition-colors duration-500 ease-in-out group-hover:text-white">
                    {kit.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex justify-between gap-4 p-0">
                  <p className="transition-colors duration-500 ease-in-out group-hover:text-white">
                    {kit.description}
                  </p>

                  <div>
                    <div className="bg-blue-900 p-2 rounded-full transition-all duration-500 ease-in-out group-hover:bg-white">
                      <ArrowRight className="h-6 w-6 text-white transition-all duration-500 ease-in-out group-hover:text-blue-900 group-hover:-rotate-45" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </main>
        </div>
      </section>
    </>
  );
}
