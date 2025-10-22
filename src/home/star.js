import { Globe, School, Users, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: "50+",
    label: "Countries Worldwide",
  },
  {
    icon: School,
    value: "1,800+",
    label: "Partner Schools",
  },
  {
    icon: Users,
    value: "15,000+",
    label: "Educators Trained",
  },
  {
    icon: GraduationCap,
    value: "1.5M+",
    label: "Students Empowered",
  },
];

export function StatsSection() {
  return (
    <section className="bg-blue-50 py-16 ">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#0053a3] to-[#3366cc] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500">
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-500">
                  {stat.value}
                </div>
                <div className="text-xl text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
