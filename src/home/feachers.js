import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Brain,
  Rocket,
  Users,
  Trophy,
  Zap,
  Cpu,
  Globe,
  Lightbulb,
  Layers,
  Shield,
  BookOpen,
  Sparkles,
  Hammer,
  Settings,
} from "lucide-react";
const features = [
  {
    icon: "1",
    title: " From Curiosity to Creation",
    description:
      "Every child is born curious. We help them transform that curiosity into real creations — one project, one discovery at a time.",
  },
  {
    icon: "2",
    title: " Learn by Doing, Grow by Making",
    description:
      "Learning becomes meaningful when children build, test, and bring their ideas to life. That’s where true understanding begins.",
  },
  {
    icon: "3",
    title: " Learn & Teach the TIY Way",
    description:
      "Our Teach It Yourself (TIY) approach empowers educators to guide hands-on learning that inspires curiosity and creativity in every classroom.",
  },
  {
    icon: "4",
    title: " Technology with a Purpose",
    description:
      "From Smart Agri to Smart Dada-Dadi Care, our projects show how technology can solve real-world problems with compassion and purpose.",
  },
  {
    icon: "5",
    title: " Migrate to Our Engineering Series",
    description:
      "Series starts with robotic arms, moves on to humanoid robots and more—showcasing the next evolution in creative technology learning.",
  },
  {
    icon: "6",
    title: " Right to Education & Opportunity",
    description:
      "We provide a digital playground for all — enabling learners to explore, customize, and choose learning paths that suit them best.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container max-w-7xl px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Empowering Tomorrow&#39;s Innovators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every Child’s six step Journey with BDS
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-blue-100 shadow-sm hover:shadow-md transition-shadow  text-card-foreground flex flex-col gap-6 rounded-xl border-0 py-6 "
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                  <p className="text-4xl opacity-70"> {feature.icon}</p>
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
