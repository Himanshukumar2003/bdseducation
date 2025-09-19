import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container px-4 py-24 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Future-Ready Learning with{" "}
                <span className="text-blue-500">Code</span>,{" "}
                <span className="text-blue-800">AI</span>, and{" "}
                <span className="text-blue-500">Innovation</span>!
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                CodeCraft empowers students to master 21st-century skills
                through interactive coding lessons, AI-powered projects, and
                hands-on learning experiences that prepare them for
                tomorrow&#39;`s challenges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className=" btn">
                <span>Contact Us</span>
              </button>
              <Button
                variant="outline"
                size="lg"
                className="text-base bg-transparent btn border-2 border-blue-500 text-blue-500 hover:text-white"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    width={100}
                    height={100}
                    src="/student-coding-on-laptop-with-colorful-code-on-scr.jpg"
                    alt="Student coding"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    width={100}
                    height={100}
                    src="/ai-robot-teaching-programming-concepts-to-children.jpg"
                    alt="AI learning"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    width={100}
                    height={100}
                    src="/diverse-group-of-students-collaborating-on-robotic.jpg"
                    alt="Collaborative learning"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    width={100}
                    height={100}
                    src="/modern-classroom-with-interactive-coding-displays-.jpg"
                    alt="Modern classroom"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
