import Image from "next/image";
import { Puzzle, Heart, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left side - Image */}
          <div className="lg:w-5/12 mb-8 lg:mb-0">
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
          <div className="lg:w-7/12 lg:pl-8">
            <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
              ABOUT US
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              WHAT IS EARLY CHILDHOOD EDUCATION AND WHY IS IT IMPORTANT?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Early childhood education is the foundation of lifelong learning.
              Our kindergarten program focuses on developing essential skills
              through play-based learning, fostering creativity, and building
              strong social connections in a nurturing environment.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--primary-700)] text-white rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  <Puzzle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm uppercase tracking-wide mb-2">
                    LEARNING THROUGH PLAY
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Interactive activities that make learning fun and engaging
                    for young minds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--primary-700)] text-white rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm uppercase tracking-wide mb-2">
                    INDIVIDUAL ATTENTION
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Small class sizes ensure every child receives personalized
                    care and attention.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our experienced teachers create a safe and stimulating environment
              where children can explore, discover, and develop their unique
              talents and abilities.
            </p>

            <button className="btn">
              <span>
                READ MORE{" "}
                {/* Replaced FontAwesome arrow-right icon with Lucide ArrowRight icon */}
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
