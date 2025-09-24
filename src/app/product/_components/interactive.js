"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Interactive({ features }) {
  return (
    <section className="py-16 px-4">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Start a Journey with a Buildable Robotics Kit
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden rounded-0">
              <Image
                src={`${process.env.NEXT_PUBLIC_FILE_BASE}${feature.image}`}
                alt={feature.title}
                width={500}
                height={500}
                className="w-full object-cover rounded-2xl h-60"
              />
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
