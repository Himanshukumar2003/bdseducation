import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Rocket, Users, Trophy, Zap } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Interactive Coding",
    description:
      "Learn programming through hands-on projects and real-time feedback.",
  },
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description:
      "Personalized learning paths adapted to each student's pace and style.",
  },
  {
    icon: Rocket,
    title: "Project-Based Learning",
    description:
      "Build real applications and showcase your skills through portfolio projects.",
  },
  {
    icon: Users,
    title: "Collaborative Community",
    description:
      "Connect with peers, mentors, and industry professionals worldwide.",
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description:
      "Earn badges, certificates, and recognition for your learning milestones.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description:
      "Stay ahead with the latest technologies and industry best practices.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Empowering Tomorrow&#39;s Innovators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our comprehensive platform combines cutting-edge technology with
            proven educational methods to create an unparalleled learning
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-blue-50 shadow-sm hover:shadow-md transition-shadow  text-card-foreground flex flex-col gap-6 rounded-xl border-0 py-6 "
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-blue-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
