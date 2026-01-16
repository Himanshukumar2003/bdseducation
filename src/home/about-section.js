import Image from "next/image";
import { Puzzle, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="section bg-blue-50 ">
      <div className="container  mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left side - Image */}
          <div className="lg:w-5/12 mb-8 lg:mb-0  order-2 lg:order-1">
            <div className="text-center relative">
              <Image
                src="/images/about.png"
                alt="Kindergarten Teacher"
                width={500}
                height={400}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-7/12 lg:pl-8 order-1 lg:order-2">
            <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
              ABOUT US
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              At BDS Education, we believe that true learning happens when
              curiosity meets creation.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Teach It Yourself (TIY) model and Knowledge-Through-Projects
              approach. <br></br>Founded by Armed Forces veterans, academicians,
              and innovators, BDS Education is driven by one purpose — Nation
              Building Through Its Youth. From Smart Agri to Smart Home and
              Smart Dada-Dadi Care, our hands-on learning kits help students
              apply technology with empathy and purpose. We partner with
              schools, colleges, and institutions across India to empower
              educators, inspire students, and build a generation ready for the
              challenges of tomorrow.
            </p>

            <Link href="/about" className="btn">
              <span>
                READ MORE{" "}
                {/* Replaced FontAwesome arrow-right icon with Lucide ArrowRight icon */}
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
