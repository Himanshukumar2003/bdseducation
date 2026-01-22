import {
  Bot,
  GraduationCap,
  Code,
  Lightbulb,
  Package,
  FileText,
  Users,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Robotics Lab Setup for Schools",
    color: "text-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Robotics Lab Setup for Colleges",
    color: "text-indigo-600",
  },
  { icon: Code, title: "AI & Coding Labs", color: "text-purple-600" },
  { icon: Lightbulb, title: "STEM Education Labs", color: "text-orange-600" },
  {
    icon: Package,
    title: "Educational Robotics Kits",
    color: "text-emerald-600",
  },
  {
    icon: FileText,
    title: "Curriculum & Learning Content",
    color: "text-cyan-600",
  },
  {
    icon: Users,
    title: "Faculty Training & Certification",
    color: "text-rose-600",
  },
  {
    icon: Rocket,
    title: "Student Workshops & Bootcamps",
    color: "text-amber-600",
  },
];

function Solutions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-14  text-center mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Robotics, AI & STEM{" "}
            <span className="text-blue-600">Lab Solutions</span>
          </h2>
          <p className="text-lg text-slate-600">
            Smart, scalable infrastructure for modern education
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group relative flex items-center gap-6 p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
            >
              {/* Left Accent Bar */}
              <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-50 border group-hover:bg-white transition">
                <item.icon
                  className={`w-7 h-7 ${item.color} group-hover:scale-110 transition-transform`}
                />
              </div>

              {/* Title */}
              <div className="flex-1 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
