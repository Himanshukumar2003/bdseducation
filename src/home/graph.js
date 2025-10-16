"use client";
import Image from "next/image";
import { CardCarousel } from "@/components/ui/card-carousel";

const images = [
  {
    img: "/images/img1.png",
    title: "Robot Camps in the United States",
    desc: "Students in 7th grade use the P2 to create blades for wind-powered turbines to understand physics and engineering.",
  },
  {
    img: "/images/img5.png",
    title: "Hands-on Museum in the United States",
    desc: "Kids use mBot Ultimate to take on their basic challenge and try to deliver LEGO pieces to the goal.",
  },
  {
    img: "/images/img4.png",
    title: "Embracing Homeschooling",
    desc: "Let children explore, learn, and thrive in a supportive environment with mBot Ranger.",
  },
  {
    img: "/images/img3.png",
    title: "Teacher Training in South Korea",
    desc: "Teacher training conducted by Makeblock's Partners in South Korea, empowering teachers with mTiny.",
  },
  {
    img: "/images/img2.png",
    title: "Engaging Outdoor Learning",
    desc: "They had fun with mBot Ranger outdoors and explored natural beauty.",
  },
];

export default function UserGraphCards() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
            OUR BLOG
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Latest News & Articles
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and stories from our
            kindergarten community. Discover helpful parenting advice,
            educational activities, and exciting school updates.
          </p>
        </div>

        <CardCarousel images={images} autoplayDelay={2000} />
      </div>
    </div>
  );
}
