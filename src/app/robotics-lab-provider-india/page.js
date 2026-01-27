import { Breadcrumb } from "@/components/breadcrumb";
import Solutions from "./_components/solutions";
import Image from "next/image";
import { ContactForm } from "../contact/_componet/contact-form";
import { TestimonialsSection } from "../contact/_componet/testimonials-section";

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

      <div className="" id="contact">
        <ContactForm />
        <TestimonialsSection />
      </div>
    </>
  );
}
