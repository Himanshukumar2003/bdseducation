import { Breadcrumb } from "@/components/breadcrumb";
import {
  Lightbulb,
  FileText,
  Cpu,
  GraduationCap,
  Quote,
  Rocket,
  ChartNoAxesCombined,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const journeyStages = [
    {
      icon: Lightbulb,
      title: "From Curiosity to Creation",
      description:
        "Every child is born curious. We help them transform that curiosity into real creations — one project, one discovery at a time.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Learn by Doing, Grow by Making",
      description:
        "Learning becomes meaningful when children build, test, and bring their ideas to life. That’s where true understanding begins.",
    },
    {
      icon: FileText,
      title: "Learn & Teach the TIY Way",
      description:
        "Our Teach It Yourself (TIY) approach empowers educators to guide hands-on learning that inspires curiosity and creativity in every classroom.",
    },
    {
      icon: Cpu,
      title: "Technology with a Purpose",
      description:
        "From Smart Agri to Smart Dada-Dadi Care, our projects show how technology can solve real-world problems with compassion and purpose.",
    },

    {
      icon: Rocket,
      title: "Migrate to our engineering series ",
      description:
        "Series starts with robotic arms, moves on to humanoid robots and more—",
    },

    {
      icon: GraduationCap,
      title: "Right to Education & Opportunity",
      description:
        "We provide a digital playground for all — enabling learners to explore, customize, and choose learning paths that suit them best.",
    },
  ];

  const partners = [
    { id: 1, logo: "/images/logos/logo-1.png" },
    { id: 2, logo: "/images/logos/logo-2.png" },
    { id: 3, logo: "/images/logos/logo-3.png" },
    { id: 4, logo: "/images/logos/logo-4.png" },
  ];

  return (
    <main className="w-full">
      <Breadcrumb
        title="About Us"
        backgroundImage="/img/header1.webp"
        items={[{ label: "About", href: "/about", isCurrent: true }]}
      />
      <section className="section bg-slate-50 ">
        <div className="container  mx-auto px-4">
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
                About
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                About BDS Education
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Our mission is to make Coding, Robotics, and Future Technologies
                accessible to every learner — from city classrooms to rural
                schools — through our Teach It Yourself (TIY) model and
                Knowledge-Through-Projects approach.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Founded by Armed Forces veterans, academicians, and innovators,
                BDS Education is driven by one purpose — Nation Building Through
                Its Youth.<br></br> From Smart Agri to Smart Home and Smart
                Dada-Dadi Care, our hands-on learning kits help students apply
                technology with empathy and purpose.<br></br>We partner with
                schools, colleges, and institutions across India to empower
                educators, inspire students, and build a generation ready for
                the challenges of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-10">
          Every Child’s six step Journey with BDS
        </h2>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-10  justify-center justify-items-center">
            {journeyStages.map((stage, index) => {
              const Icon = stage.icon;
              const stepNumber = String(index + 1).padStart(2, "0");
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center flex-1  rounded-2xl  transition duration-300"
                >
                  <div className="bg-blue-50 rounded-full p-6 mb-6 w-20 h-20 flex items-center justify-center shadow-sm">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold opacity-15 mb-4 group-hover:opacity-25 transition-opacity duration-300 ">
                    {stepNumber}
                  </div>
                  {/* Title */}
                  <h3 className="font-semibold text-slate-900 text-lg mb-3 leading-snug">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed opacity-90">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Indian Owned & Operated Section */}
      <section className="bg-slate-50 section">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Proudly Indian Owned & Operated
          </h2>
          <p className="text-lg text-muted-foreground max-w-6xl mx-auto text-pretty">
            BDS Education is founded and run by a team of Armed Forces veterans,
            academicians, and doctorates, united by one purpose —
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 ">
            {/* India Map Placeholder */}
            <div className="">
              <div>
                <Image
                  src="/images/india-map.png"
                  alt="India Map"
                  width={500}
                  height={500}
                  className="object-cover w-full "
                />

                <p className="text-lg text-center font-semibold text-foreground">
                  <span className="text-blue-500"> Founded By</span>: Veterans,
                  Academicians & Innovators
                </p>
              </div>
            </div>

            <div className="">
              <h3 className=" md:text-2xl   font-medium   italic text-foreground mb-4">
                Nation Building Through Its Youth
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our legacy traces back to Project Akshaya in Kerala — a
                decades-old mission that aimed to make one member of every
                family computer literate. Today, we carry that spirit forward as
                Akshaya 2.0, expanding digital and technical literacy to every
                corner of India.
              </p>
              <Image
                src="/images/hero-2.png"
                alt="Team Photo"
                width={500}
                height={500}
                className="object-cover w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="">
              <h3 className="text-2xl text-center font-bold text-slate-900 mb-8">
                OUR VISION
              </h3>
              <div className="bg-slate-50 rounded-lg px-12 py-6">
                <div className="text-5xl text-slate-300 mb-6"></div>
                <div className="space-y-3">
                  <div>
                    <Quote size={35} className="text-blue-500" />
                  </div>
                  <p className="capitalize text-lg font-medium h-[56px]">
                    Future needs it – NEP has it – CBSE wants it.
                  </p>
                  <p className="text-gray-600 italic  leading-relaxed mb-6">
                    We envision a technocrat in every family — empowering
                    individuals, uplifting communities, and advancing the
                    socio-economic strength of our nation.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div>
              {" "}
              <h3 className="text-2xl text-center font-bold text-slate-900 mb-8">
                OUR MISSION
              </h3>
              <div className="bg-slate-50 rounded-lg px-12 py-6 ">
                <div className="text-5xl text-slate-300 mb-6"></div>
                <div className="space-y-3">
                  <Quote size={35} className="text-blue-500" />

                  <p className=" text-lg capitalize font-medium ">
                    directly or by complementing government initiatives.
                  </p>

                  <p className="text-gray-600  leading-relaxed mb-6 italic">
                    To create and make available self-learning tools that break
                    through implementation barriers and reach the remotest
                    stakeholders in skill development,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Collaborations Section */}
      <section className="bg-slate-50 py-20 px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          PARTNERS & COLLABORATIONS
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner.id}>
                <Image
                  src={partner.logo}
                  alt="dhshd"
                  width={200}
                  height={200}
                  className="w-full  object-contain mix-blend-darken h-32  aspect-video"
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
