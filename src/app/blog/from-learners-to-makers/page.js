import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Play } from "lucide-react";
import Image from "next/image";
import { AuthorSidebar } from "@/app/blog/_componet/slider";
import { Breadcrumb } from "@/components/breadcrumb";

export default function BlogPost() {
  return (
    <>
      <Breadcrumb
        title="Blog Page"
        items={[{ label: "Blog Page  ", href: "/blog", isCurrent: true }]}
      />
      <div className="bg-white section">
        <main className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Image
                  width={500}
                  height={500}
                  src="/images/blog/Picture2.png"
                  alt="Street scene with cherry blossoms and people crossing"
                  className="w-full object-cover rounded-lg"
                />
              </div>
              <article className="shadow-lg rounded-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                    From Learners to Makers – Building India’s Future with TIY
                  </h2>

                  {/* Introduction */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    🇮🇳 Introduction: The Challenge Before Us
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Every year, millions of students graduate — yet many
                    struggle to find employment. The reason isn’t lack of
                    intelligence — it’s the lack of real-world skills. India
                    doesn’t just need more degrees; it needs more doers. At BDS
                    Education, we believe the transformation begins in
                    classrooms — when students stop being learners only and
                    start becoming makers too. That’s where Teach It Yourself
                    (TIY) and Knowledge Through Projects come together to build
                    the India of Tomorrow.
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* From Chalkboards to Circuit Boards */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    From Chalkboards to Circuit Boards
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Traditional education has done well to build knowledge — but
                    not always application. The future belongs to those who can
                    design, test, and iterate — skills that come from building.
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                    <li>
                      Students assemble circuits, code logic, and test devices.
                    </li>
                    <li>
                      Teachers guide, mentor, and troubleshoot rather than
                      lecture.
                    </li>
                    <li>
                      Every lab becomes a mini startup — with ideas born,
                      tested, and refined.
                    </li>
                  </ul>
                  <p className="italic text-sm text-muted-foreground mb-6">
                    Visual suggestion: Illustration of a school transforming
                    into a mini innovation hub — desks turning into workbenches,
                    blackboards into digital boards.
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* Power of Making */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    The Power of “Making” in Education
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When a student builds something — even a small blinking LED
                    or a smart irrigation setup — they are not just learning
                    electronics; they are building confidence, creativity, and
                    purpose.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Making connects:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                    <li>Head (concepts)</li>
                    <li>Hand (skills)</li>
                    <li>Heart (passion to solve real problems)</li>
                  </ul>
                  <p className="italic text-sm text-muted-foreground mb-6">
                    Visual suggestion: Infographic titled “Head–Hand–Heart
                    Connection” showing theory, skill, and purpose working
                    together.
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* Skill India */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Skill India in Action
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    India’s national missions — Skill India, NEP 2020, and Make
                    in India — all call for project-based, multidisciplinary
                    learning. TIY delivers exactly that.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Through TIY labs and BDS Smart Kits, learners build:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                    <li>Smart Agriculture systems</li>
                    <li>Home Automation projects</li>
                    <li>Assistive devices for the elderly</li>
                    <li>AI and Robotics prototypes</li>
                  </ul>
                  <p className="italic text-sm text-muted-foreground mb-6">
                    Visual suggestion: Graphic showing a map of India glowing
                    with small maker hubs across states — labeled “Schools of
                    the Future.”
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* Teachers as the Engine */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Teachers as the Engine of Change
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    TIY redefines the role of teachers. They are no longer
                    dispensers of content, but drivers of curiosity. When a
                    teacher learns along with students, two things happen:
                  </p>
                  <ol className="list-decimal pl-6 mb-4 text-muted-foreground space-y-2">
                    <li>The class becomes fearless.</li>
                    <li>Learning becomes joyful.</li>
                  </ol>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    At BDS, we’ve seen teachers transform into mentors,
                    innovators, and even entrepreneurs — leading by example.
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* Atmanirbhar Classroom */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Towards an Atmanirbhar Classroom
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The real Atmanirbhar Bharat begins with an Atmanirbhar
                    Classroom — one that builds its own learning, solves its own
                    problems, and shares its own creations. Every project
                    completed is a step toward self-reliance. Every student who
                    builds is a citizen who contributes.
                  </p>
                  <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-6 bg-blue-200 rounded-r-lg text-foreground italic">
                    “A nation of makers is a nation that never stops growing.”
                  </blockquote>

                  <hr className="my-6 border-muted" />

                  {/* Conclusion */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Conclusion: The New India, Built by Its Learners
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We’re standing at the edge of a revolution in education —
                    where classrooms are creative labs, teachers are
                    co-learners, and students are innovators. With Teach It
                    Yourself (TIY) and Knowledge Through Projects, BDS Education
                    is building a bridge from learning to doing — and from doing
                    to leading. The future belongs to those who can imagine,
                    create, and build — not tomorrow, but today.
                  </p>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AuthorSidebar />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
