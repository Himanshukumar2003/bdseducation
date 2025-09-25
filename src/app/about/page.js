import Image from "next/image";
import {
  Puzzle,
  Heart,
  ArrowRight,
  CheckCircle,
  Flag,
  Settings,
  Eye,
} from "lucide-react";
import { CardCarousel } from "@/components/ui/card-carousel";
import { Breadcrumb } from "@/components/breadcrumb";

export default function About() {
  const stats = [
    { value: "260+", label: "Projects Completed" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "200+", label: "Satisfied Clients" },
    { value: "100+", label: "Qualified Engineers" },
  ];

  const features = [
    "Always building quality industrial",
    "Best manufacturing service provider",
    "Using the newest manufacturing tech",
    "Experienced trusted contractor",
  ];

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

  const cards = [
    {
      title: "Our Mission",
      description:
        "At Jangid Stone & Interior, our mission is to transform spaces with superior stone solutions. We are dedicated to delivering exceptional installation and restoration services that enhance the beauty, durability, and value of residential and commercial properties.",
      color: "blue",
      icon: <Flag />,
    },
    {
      title: "Our Approach",
      description:
        "We believe in a client-first approach, combining traditional artistry with modern techniques to create timeless designs. Every project is executed with meticulous attention to detail, ensuring a seamless experience from concept to completion.",
      color: "green",
      icon: <Settings />,
    },
    {
      title: "Our Vision",
      description:
        "To be the most trusted name in the stone industry, recognized for our commitment to precision, innovation, and customer satisfaction. We strive to set new benchmarks in quality, craftsmanship, and service excellence across the country.",
      color: "purple",
      icon: <Eye />,
    },
  ];

  return (
    <>
      {/* About Section */}
      <Breadcrumb
        title="About Us"
        backgroundImage="/img/header1.webp"
        items={[{ label: "About", href: "/about", isCurrent: true }]}
      />

      <section className="section  relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image */}
            <div className="lg:w-5/12 relative">
              <div className="overflow-hidden">
                <Image
                  src="/images/about.png"
                  alt="Kindergarten Teacher"
                  width={500}
                  height={400}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--primary-blue)] opacity-10 rounded-full blur-2xl"></div>
            </div>

            {/* Right side - Content */}
            <div className="lg:w-7/12">
              <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
                ABOUT US
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6 leading-snug">
                WHAT IS EARLY CHILDHOOD EDUCATION AND WHY IS IT IMPORTANT?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Early childhood education is the foundation of lifelong
                learning. Our kindergarten program focuses on developing
                essential skills through play-based learning, fostering
                creativity, and building strong social connections in a
                nurturing environment.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our experienced teachers create a safe and stimulating
                environment where children can explore, discover, and develop
                their unique talents and abilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=" bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Our Legacy of Excellence
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-5xl mx-auto">
            With our expertise as well as innovative excellence, we, Sai Rubber,
            have crafted a benchmark in the rubber components sector. We are a
            trustworthy manufacturer of EPDM Rubber Beading, EPDM Rubber Sheet,
            Natural Rubber Sheers, Natural Rubber Beading, Glass Beading, Bus,
            Truck body fitting Rubber, Wheel chowmk, Rubber Gasket, Door Rubber
            Profile, EPDM Rubber Profile, Rubber Seal For Expansion joints, Co
            Extrusion Rubber Profile. Our Product have wide application in the
            automotive and other major industrial sectors. The designs are
            crafted in accordance with the clients&apos; specific requirements.
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gray-800   italic mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white border border-blue-700 rounded-full px-6 py-3 "
              >
                <div className="h-8 w-8 rounded-full bg-blue-700 flex justify-center items-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-4xl font-bold text-gray-800 mb-6">
              Testimonials Endorsements from Global Users
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              We value customers&apos; voices because they help us grow. We
              value customers&apos; voices because they help us grow. We value
              customers`&apos; voices because they help us grow.
            </p>
          </div>

          <CardCarousel
            images={images}
            autoplayDelay={2000}
            // showPagination={true}
            // showNavigation={true}
          />
        </div>
      </div>
      <section className="section px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group  bg-white p-8 transition-all duration-300 cursor-pointer relative 
             before:content-[''] before:absolute before:top-0 before:left-0 
             before:h-0.5 before:w-full before:bg-blue-600 
             before:scale-x-0 before:origin-left 
             before:transition-transform before:duration-500 
             group-hover:before:scale-x-100 before:z-10"
              >
                <div className="mb-6">
                  <div
                    className="w-16 h-16 bg-gray-100 rounded-full text-blue-500 text-2xl flex items-center justify-center 
                 group-hover:scale-110 transition-transform duration-300"
                  >
                    {card.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 ">
                  {card.title}
                </h3>
                <div className="border-b-2 border-blue-600 w-[100px] my-4"></div>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
