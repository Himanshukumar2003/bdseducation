"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Interactive from "./_components/interactive";
import GetInTouch from "@/components/cta";
import TableVariation from "./_components/table";
import VideoSection from "./_components/video";
import TestimonialsSection from "./_components/review";
import Tabs from "./_components/nav";

export default function MTinySection() {
  return (
    <>
      <Tabs />
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto grid grid-cols-12 gap-10 items-center px-6">
          {/* Left Content (6 cols) */}
          <div className="col-span-12 md:col-span-6 space-y-6">
            <h2 className="text-5xl font-bold text-gray-900">
              Makeblock mTiny
            </h2>
            <p className="text-gray-600 text-lg">
              Screen-free learning toddler toy for tangible learning Screen-free
              learning toddler toy for tangible learning. Screen-free learning
              toddler toy for tangible learning.Screen-free learning toddler toy
              for tangible learning.
            </p>
            <p className="text-2xl font-semibold text-gray-900 italic">
              <span className="text-[var(--primary-blue)] text-4xl">₹</span>{" "}
              229.99/-
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="" className="btn">
                Shop Now
              </Link>
              <button className="btn outline-btn">Add to cart</button>
            </div>
          </div>

          {/* Right Image (6 cols) */}
          <div className="col-span-12 md:col-span-6 flex justify-center">
          
          </div>
        </div>
      </section>
      <Interactive />
      <TestimonialsSection></TestimonialsSection>
      <GetInTouch></GetInTouch>
      <VideoSection></VideoSection>
      <TableVariation></TableVariation>
    </>
  );
}
