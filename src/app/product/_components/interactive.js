"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Interactive() {
  const roboticsKits = [
    {
      title: "3-in-1 Robotics Kit for Kids to Build, Code, and Play",
      description:
        "This kit allows children to build and code their own AI robot. It includes everything needed to create, program, and play with their robotic creation.",
      image: "/images/hero-1.png",
    },
    {
      title: "All-terrain RC Robot Tank",
      description:
        "Build your own radio-controlled robot tank that can navigate any terrain. Perfect for outdoor adventures and learning about mechanics and control systems.",
      image: "/images/hero-1.png",
    },
    {
      title: "Make Coding Learning Easy",
      description:
        "Coding learning is just like building with blocks. Our visual programming interface makes it simple for kids to understand programming concepts through play.",
      image: "/images/hero-3.png",
    },
    {
      title: "STEM Learning Through Fun",
      description:
        "STEM education combined with fun activities. Our approach makes learning science, technology, engineering, and math engaging through hands-on robotics projects.",
      image: "/images/hero-3.png",
    },
    {
      title: "The Programmable Robot for Education",
      description:
        "Designed specifically for educational environments. This programmable robot helps students learn coding, problem-solving, and critical thinking skills.",
      image: "/images/hero-2.png",
    },
    {
      title: "Turning Imagination into Reality",
      description:
        "Transform creative ideas into working robots. Our comprehensive kit provides all the tools needed to bring imaginative robotic concepts to life.",
      image: "/images/hero-1.png",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="contanier px-6 mx-auto">
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Start a Journey with a Buildable Robotics Kit
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roboticsKits.map((kit, index) => (
            <Card key={index} className="overflow-hidden rounded-0">
              <Image
                src={kit.image || "/placeholder.svg"}
                alt={kit.title}
                width={500}
                height={500}
                className="w-full object-cover   rounded-2xl h-60"
              />
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2">
                  {kit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {kit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
