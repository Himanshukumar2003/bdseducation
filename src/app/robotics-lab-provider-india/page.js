import { Breadcrumb } from "@/components/breadcrumb";
import Solutions from "./_components/solutions";
import Image from "next/image";
import { ContactForm } from "../contact/_componet/contact-form";
import { TestimonialsSection } from "../contact/_componet/testimonials-section";
import ServicesSection from "./_components/services";
import WhyChooseUs from "./_components/why-choose";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Robotics, AI & STEM Lab Provider in India | BDS Education",
  description:
    "BDS Education is a leading robotics, AI and STEM lab provider in India, offering complete lab setup, curriculum, kits and faculty training for schools and colleges.",
  keywords: [
    "	Robotics lab provider in India",
    "	STEM lab provider in India",
    "	Robotics lab setup in India",
    "	AI and robotics lab for schools in India",
    "	Turnkey robotics lab solutions in India",
    "	Robotics lab with training and curriculum in India",
    "	STEM and AI lab setup for schools and colleges in India",
  ],
};

export default function robotics(params) {
  const solutions = [
    {
      title: "Robotics Lab Setup for Schools & Colleges",
      img: "/images/card-3.png",
    },
    {
      title: "Curriculum & Learning Content",
      img: "/images/card-1.png",
    },
    {
      title: "AI & Coding Labs",
      img: "/images/card-4.png",
    },
    {
      title: "STEM Education Labs",
      img: "/images/card-2.png",
    },
    {
      title: "Educational Robotics Kits",
      img: "/images/card-6.png",
    },
    {
      title: "Faculty Training & Certification",
      img: "/images/card-5.png",
    },
  ];
  return (
    <>
      <Solutions></Solutions>
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* LEFT IMAGE */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/map-2.png"
                alt="Robotics India Map"
                width={520}
                height={420}
                className="object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f3c68] leading-snug">
                ROBOTICS, AI & STEM LAB PROVIDER
                <br />
                IN INDIA
              </h2>

              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                BDS Education is a trusted robotics, AI and STEM lab provider in
                India, delivering end-to-end lab solutions for schools,
                colleges, and educational institutions. We help institutions
                implement hands-on, future-ready learning environments through
                robotics, coding, AI, and STEM education.
              </p>

              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                With PAN-India presence, we support CBSE, ICSE, state board
                schools, colleges, and universities with complete lab setup,
                curriculum, training, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f8fafc] py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-center text-xl md:text-3xl font-semibold text-gray-800 mb-12">
            OUR ROBOTICS, AI & STEM LAB SOLUTIONS
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, index) => (
              <div key={index} className="">
                <div className="relative  ">
                  <Image
                    src={item.img}
                    alt={item.title}
                    height={1000}
                    width={1000}
                    className="w-full object-cover h-[300px] rounded-4xl overflow-hidden"
                  />
                </div>

                <p className="text-xl px-4 font-medium text-gray-700 text-center mt-4">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServicesSection></ServicesSection>
      <WhyChooseUs></WhyChooseUs>
      <div className="" id="contact">
        <ContactForm />
        <TestimonialsSection />
      </div>
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px]" />

        <div className="relative mx-auto max-w-4xl">
          <Card className="bg-[url('/images/bg-2.png')] bg-cover bg-center py-8 px-4 md:px-8 text-center text-white">
            {/* Badge */}

            <h2 className="mb-4 text-3xl sm:text-4xl font-bold ">
              Get Started Today!
            </h2>

            <p className="mb-5 text-lg  max-w-2xl mx-auto">
              We provide{" "}
              <span className="font-semibold text-blue-600">
                Robotics Lab Setup
              </span>{" "}
              with Training, Curriculum, Kits & Full Support for Schools and
              Colleges across India.
            </p>

            <div className="flex justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Our Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
