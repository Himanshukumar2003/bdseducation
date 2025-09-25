import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/hero-video.mp4" // apna video path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay color (optional for readability) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-6">
          Experience innovation, creativity, and excellence with us.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium">
          Get Started
        </button>
      </div>
    </section>
  );
}
