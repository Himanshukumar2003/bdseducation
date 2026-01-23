import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="w-full bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              ROBOTICS, AI & STEM LAB PROVIDER
              <br />
              <span className="text-[#cce6ff]">IN INDIA</span>
            </h1>

            <p className="mt-4 text-white/80 text-base md:text-lg max-w-xl">
              BDS Education is a leading robotics, AI and STEM lab provider in
              India, offering complete lab setup, curriculum, kits and faculty
              training for schools and colleges.
            </p>

            <button className="mt-6 bg-white text-[#0f3c68] font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition">
              Join Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative flex justify-center md:justify-end items-end
"
          >
            <Image
              src="/images/robot.png"
              alt="AI Robot"
              width={500}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
