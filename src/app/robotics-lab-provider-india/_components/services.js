import {
  Building2,
  Lightbulb,
  BookOpen,
  Wrench,
  GraduationCap,
  Users,
  Trophy,
  Settings,
  Smartphone,
  Package,
  Rocket,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Building2,
    number: "01",
    title: "End-to-End Robotics Lab Setup",
    features: [
      "Complete Robotics Lab setup for Schools and Colleges",
      "Turnkey installation with all required hardware, tools, and infrastructure",
      "Custom lab design based on available space and student capacity",
    ],
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "STEM, Robotics & Innovation Lab Solutions",
    features: [
      "Advanced STEM & Robotics Labs aligned with NEP 2020",
      "Hands-on learning environment for Robotics, Coding, AI and Automation",
      "Innovation-focused lab setup for future-ready education",
    ],
    isHighlighted: true,
  },
  {
    icon: BookOpen,
    number: "03",
    title: "Curriculum + Structured Learning Program",
    features: [
      "Robotics curriculum designed for different grade levels and college students",
      "Beginner, Intermediate, and Advanced level modules",
      {
        heading: "Covers key areas like:",
        list: [
          "Robotics Engineering",
          "Coding & Programming",
          "Artificial Intelligence (AI)",
          "Internet of Things (IoT)",
          "Automation & Smart Systems",
        ],
      },
    ],
  },
  {
    icon: Wrench,
    number: "04",
    title: "Robotics Engineering Kits & Equipment Supply",
    features: [
      "High-quality Robotics Kits for Schools and Colleges",
      {
        heading: "Includes components such as:",
        list: [
          "Motors, Sensors, Controllers",
          "Arduino, ESP32, Microcontrollers",
          "AI and IoT-based modules",
          "Mechanical and electronic toolkits",
        ],
      },
      "Safe, reusable, durable kits for long-term lab use",
    ],
  },
  {
    icon: GraduationCap,
    number: "05",
    title: "Faculty & Teacher Training Programs",
    features: [
      "Complete Faculty Training Workshops included with lab setup",
      "Hands-on training for teachers and college professors",
      {
        heading: "Training includes:",
        list: [
          "Robotics kit handling",
          "Coding and programming basics",
          "Classroom implementation strategies",
          "Project-based teaching methods",
        ],
      },
      "Certification provided after training completion",
    ],
  },
  {
    icon: Users,
    number: "06",
    title: "Student Training & Practical Sessions",
    features: [
      "Interactive robotics learning sessions for students",
      "Real-time building, coding, and experimentation",
      "Creativity",
      "Logical Thinking",
      "Engineering Skills",
      "Problem Solving",
    ],
  },
  {
    icon: Trophy,
    number: "07",
    title: "Project Development & Competition Support",
    features: [
      "Support for ATL, STEM fairs, robotics competitions, hackathons",
      "Guidance in building innovative student projects",
      "Mentorship for National and International competitions",
    ],
  },
  {
    icon: Settings,
    number: "08",
    title: "Lab Installation, Maintenance & Technical Support",
    features: [
      "Complete lab installation with demo and setup guidance",
      "Regular maintenance support available",
      "Annual Maintenance Contract (AMC) options provided",
      "Quick troubleshooting and technical assistance",
    ],
  },
  {
    icon: Smartphone,
    number: "09",
    title: "Digital Learning Resources & LMS Support",
    features: [
      {
        heading: "Access to digital content such as:",
        list: [
          "Video tutorials",
          "Coding guides",
          "Project manuals",
          "Worksheets and assignments",
        ],
      },
      "Student progress tracking and assessments",
    ],
  },
  {
    icon: Package,
    number: "10",
    title: "Customized Lab Packages for Institutions",
    features: [
      {
        heading: "Flexible lab packages available for:",
        list: [
          "Primary Schools (Grade 1–5)",
          "Middle Schools (Grade 6–8)",
          "Senior Schools (Grade 9–12)",
          "Engineering Colleges & Universities",
        ],
      },
      "Packages based on budget and learning goals",
    ],
  },
  {
    icon: Rocket,
    number: "11",
    title: "Future Skills & Career-Oriented Programs",
    features: [
      {
        heading: "Career-oriented skill development for:",
        list: [
          "Robotics Engineering",
          "AI & Machine Learning",
          "Embedded Systems",
          "Automation Industry",
        ],
      },
    ],
  },
];

export default function ServicesSection(params) {
  return (
    <section id="services" className="py-12">
      {/* Background Glow */}

      <div className="container  max-w-7xl mx-auto relative px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-center text-xl md:text-3xl font-semibold text-gray-800 ">
            <span className="text-foreground">Complete </span>
            <span className="text-gradient-primary">Robotics Solutions</span>
          </h2>
          <p className="text-center mt-5">
            Empower Students with Robotics Engineering Kits, STEM Learning
            Curriculum & Expert Lab Training Programs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              number={service.number}
              title={service.title}
              description={service.description}
              features={service.features}
              isHighlighted={service.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
