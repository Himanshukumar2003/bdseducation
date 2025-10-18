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
        <main className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Image
                  width={500}
                  height={500}
                  src="/images/blog/Picture1.png"
                  alt="Street scene with cherry blossoms and people crossing"
                  className="w-full  object-cover rounded-lg"
                />
              </div>
              <article className=" rounded-lg overflow-hidden  shadow-lg">
                <div className="p-8">
                  {/* Title */}
                  <h2 className="text-xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                    Knowledge Through Projects – Learning That Stays for Life
                  </h2>

                  {/* Introduction */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Introduction: The Problem with “Remembering Without Doing”
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Across classrooms and colleges, we often hear students say,
                    “I studied this, but I can’t apply it.” That’s not a failure
                    of intelligence — it’s a failure of method. Traditional
                    education emphasizes memory over mastery, notes over
                    know-how. Students remember concepts just long enough to
                    write an exam — and then forget them.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    What if we reversed that? What if we built knowledge that
                    doesn’t fade because it’s rooted in creation? This is the
                    philosophy of <strong>Knowledge Through Projects</strong>, a
                    cornerstone of the{" "}
                    <strong>BDS Education (Engineering Series)</strong>.
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* What Does It Mean */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    What Does “Knowledge Through Projects” Mean?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    It means that every concept, however abstract, must find a
                    tangible expression — a working model, an experiment, or a
                    real-world simulation.
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                    <li>
                      Don’t just study Ohm’s Law — build a circuit and measure
                      the current.
                    </li>
                    <li>
                      Don’t just learn feedback control — tune a servo motor and
                      watch precision in action.
                    </li>
                    <li>
                      Don’t just read about climate sensors — create a smart
                      weather station.
                    </li>
                  </ul>
                  <blockquote className="italic text-muted-foreground mb-6">
                    “When we learn by doing, theory becomes experience — and
                    experience becomes memory.”
                  </blockquote>
                  <p className="italic text-sm text-muted-foreground mb-6">
                    Visual suggestion: Illustration showing the shift from Books
                    → Breadboards → Breakthroughs.
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* TIY Approach */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    The TIY Approach in Action
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At BDS Education, Knowledge Through Projects is brought to
                    life through the <strong>Teach It Yourself (TIY)</strong>{" "}
                    framework — a model where the teacher is a facilitator and
                    the student is an explorer.
                  </p>

                  <div className="overflow-x-auto mb-6">
                    <table className="min-w-full text-sm text-muted-foreground border border-muted rounded-lg">
                      <thead>
                        <tr className="bg-muted">
                          <th className="py-2 px-4 text-left">Stage</th>
                          <th className="py-2 px-4 text-left">Action</th>
                          <th className="py-2 px-4 text-left">Outcome</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="py-2 px-4">Think</td>
                          <td className="py-2 px-4">
                            Discuss real-life problems
                          </td>
                          <td className="py-2 px-4">
                            Builds analytical mindset
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-2 px-4">Build</td>
                          <td className="py-2 px-4">
                            Create the project hands-on
                          </td>
                          <td className="py-2 px-4">
                            Converts theory into skill
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-2 px-4">Test</td>
                          <td className="py-2 px-4">
                            Debug, refine, and document
                          </td>
                          <td className="py-2 px-4">
                            Promotes resilience & iteration
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="py-2 px-4">Teach</td>
                          <td className="py-2 px-4">
                            Explain your project to peers
                          </td>
                          <td className="py-2 px-4">
                            Reinforces confidence & communication
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="italic text-sm text-muted-foreground mb-6">
                    Visual suggestion: Circular infographic labeled Think →
                    Build → Test → Teach.
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* Example */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Example: The Robotic Arm Project
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A college student building a 2-DOF robotic arm learns far
                    more than mechanics. They understand:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                    <li>Electronics (servo control, PWM signals)</li>
                    <li>Programming (Arduino logic)</li>
                    <li>Physics (torque, motion)</li>
                    <li>Engineering design (linkage, assembly)</li>
                    <li>Communication (explaining the project)</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This one project unites five disciplines into one learning
                    experience. When a student completes it, they don’t just
                    know — they own the knowledge.
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* Why It Works */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Why Knowledge Through Projects Works
                  </h3>
                  <ol className="list-decimal pl-6 mb-4 text-muted-foreground space-y-2">
                    <li>It builds retention: What we create, we remember.</li>
                    <li>
                      It sparks creativity: Students learn to ask “what if?”
                    </li>
                    <li>
                      It builds employability: Real-world projects mirror
                      workplace tasks.
                    </li>
                    <li>
                      It creates joy: Building brings a sense of ownership that
                      no lecture can match.
                    </li>
                  </ol>
                  <blockquote className="italic text-muted-foreground mb-6">
                    “A student who builds is never afraid to learn again.”
                  </blockquote>
                  <p className="italic text-sm text-muted-foreground mb-6">
                    📍 Visual suggestion: Split image — left side shows student
                    reading a book, right side shows same student testing a
                    circuit, smiling.
                  </p>

                  <hr className="my-6 border-muted" />

                  {/* NEP Alignment */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Real-World Alignment: NEP 2020 and Beyond
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    India’s National Education Policy (NEP 2020) emphasizes
                    experiential and multidisciplinary learning. The Knowledge
                    Through Projects model perfectly embodies this — bridging
                    school learning, college labs, and industry skill demands.
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                    <li>Classrooms → Innovation Labs</li>
                    <li>Teachers → Mentors</li>
                    <li>Students → Creators</li>
                  </ul>

                  <hr className="my-6 border-muted" />

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    The Future We’re Building
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When knowledge becomes something students can touch, test,
                    and teach, learning becomes not just preparation for life —
                    it becomes life itself.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This is the heart of BDS Education’s mission — to make
                    India’s learners not just job seekers, but job creators; not
                    just students, but builders of the future.
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
