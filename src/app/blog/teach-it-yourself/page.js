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
        <main className="container max-w-7xl mx-auto  px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Image
                  width={500}
                  height={500}
                  src="/images/blog/Picture3.png"
                  alt="Street scene with cherry blossoms and people crossing"
                  className="w-full  object-cover rounded-lg"
                />
              </div>
              <article className=" rounded-lg overflow-hidden shadow-lg">
                <div className="p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                    Teach It Yourself – A New Wave in Technical Education
                  </h2>
                  <p className="italic text-lg text-muted-foreground mb-6">
                    “Learning happens best when teachers and students explore
                    together.”
                  </p>

                  {/* What is TIY */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    What Is TIY?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    TIY stands for Teach It Yourself, inspired by the DIY (Do It
                    Yourself) movement. Just as DIY empowers individuals to
                    build and innovate independently, TIY empowers both teachers
                    and learners to construct knowledge through hands-on
                    exploration.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In a TIY classroom:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                    <li>The teacher becomes a co-learner and guide.</li>
                    <li>The student becomes a builder and thinker.</li>
                    <li>
                      Lessons are built around projects, questions, and
                      experimentation.
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    It’s not about having all the answers — it’s about
                    discovering them together.
                  </p>
                  <p className="italic text-sm text-muted-foreground mb-6">
                    Visual suggestion: An infographic showing a triangle with
                    three layers: Teacher → Guide, Student → Creator, Learning →
                    Shared Journey.
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* Power of Learning by Building */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    The Power of Learning by Building
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Imagine explaining Ohm’s Law or robotics by building a real
                    circuit or robotic arm instead of only drawing it on the
                    board. When learners see, touch, connect, and test —
                    concepts turn into understanding, and understanding turns
                    into skill.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Every project under TIY is designed to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                    <li>Encourage curiosity over memorization.</li>
                    <li>Promote confidence by completing tangible builds.</li>
                    <li>Foster teamwork between teacher and student.</li>
                    <li>
                      Connect academic theory with real-world application.
                    </li>
                  </ul>
                  <p className="italic text-sm text-muted-foreground mb-6">
                    Visual suggestion: A classroom image with both teacher and
                    students wearing lab aprons, assembling a small circuit or
                    robot.
                  </p>

                  {/* Real World Example */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    A Real-World Example
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In a BDS workshop on Understanding the Robotic Arm, teachers
                    and students start with pre-built servo modules. They learn
                    — together — how movement works, what “degrees of freedom”
                    mean, and how control systems are programmed. By the end,
                    everyone has a working model — and a deep sense of
                    achievement. The magic? The teacher learned too. This shared
                    discovery is the essence of TIY — it replaces the fear of
                    “not knowing” with the joy of “learning together”.
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* Why TIY Matters */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Why TIY Matters Today
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Modern industries need creators — not just graduates. TIY
                    addresses this gap by:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                    <li>Cultivating critical thinking and problem solving.</li>
                    <li>Helping teachers remain technologically current.</li>
                    <li>Creating a culture of innovation inside classrooms.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    It aligns seamlessly with India’s NEP-2020, Skill India, and
                    Atmanirbhar Bharat goals — preparing learners who can think,
                    make, and lead.
                  </p>
                  <p className="italic text-sm text-muted-foreground mb-6">
                    Visual suggestion: Side graphic comparing Old Classroom →
                    New TIY Classroom:
                  </p>
                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full text-sm text-muted-foreground border border-muted rounded-lg">
                      <thead>
                        <tr className="bg-muted">
                          <th className="py-2 px-4 text-left">Old</th>
                          <th className="py-2 px-4 text-left">New (TIY)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="py-2 px-4">Teacher instructs</td>
                          <td className="py-2 px-4">Teacher guides</td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-2 px-4">Students memorize</td>
                          <td className="py-2 px-4">Students explore</td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-2 px-4">Fixed answers</td>
                          <td className="py-2 px-4">Open-ended questions</td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-2 px-4">Grades</td>
                          <td className="py-2 px-4">Prototypes & results</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <hr className="my-6 border-muted" />

                  {/* Future of TIY */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    The Future of TIY
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    TIY is not just a method — it’s a mindset. It encourages
                    teachers to evolve into facilitators, students to evolve
                    into innovators, and classrooms to evolve into
                    micro-innovation labs. Every school and college can begin
                    this journey with one project, one kit, one curious group —
                    and one shared goal: To learn by teaching, and teach by
                    learning.
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* Closing Thought */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Closing Thought
                  </h3>
                  <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-6 bg-blue-200 rounded-r-lg text-foreground italic">
                    The next revolution in education will not come from
                    textbooks — it will come from toolboxes. And the best
                    classrooms will be the ones that echo with the sound of
                    discovery.
                  </blockquote>
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
