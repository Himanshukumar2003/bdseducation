import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AuthorSidebar() {
  return (
    <div className="space-y-6    sticky top-25 ">
      <Card className="shadow-2xl rounded-2xl">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">
            You May Like
          </h3>
          <div className="space-y-4">
            {[
              {
                title:
                  "Knowledge Through Projects – Learning That Stays for Life",
                image: "/images/hero-2.png",
                slug: "/blog/knowledge-through-projects",
                des: "Introduction: The Problem with “Remembering Without Doing",
              },
              {
                title:
                  "From Learners to Makers – Building India’s Future with TIY",
                image: "/images/blog/Picture2.png",
                slug: "/blog/from-learners-to-makers",
                des: "Across classrooms and colleges, we often hear students say, “I studied this, but I can’t apply it.” That’s not a failure of intelligence — it’s a failure of method. Traditional education emphasizes memory over mastery, notes over know-how. Students remember concepts just long enough to write an exam — and then forget them.",
              },
              {
                title: " Teach It Yourself – A New Wave in Technical Education",
                image: "/images/blog/Picture3.png",
                slug: "/blog/teach-it-yourself",
                des: "Every year, millions of students graduate — yet many struggle to find employment. The reason isn’t lack of intelligence — it’s the lack of real-world skills. India doesn’t just need more degrees; it needs more doers. At BDS Education, we believe the transformation begins in classrooms — when students stop being learners only and start becoming makers too. That’s where Teach It Yourself (TIY) and Knowledge Through Projects come together to build the India of Tomorrow.",
              },
            ].map((post, index) => (
              <Link href={post.slug} key={index} className="flex space-x-3">
                <Image
                  width={200}
                  height={200}
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground leading-tight line-clamp-3">
                    {post.title}
                  </h4>
                  <p className=" line-clamp-1">{post.des}</p>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
