import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export function AuthorSidebar() {
  return (
    <div className="space-y-6 ">
      {/* Author Profile */}
      <Card className="shadow-2xl rounded-2xl">
        <CardContent className="p-6 text-center">
          <Avatar className="w-20 h-20 mx-auto mb-4">
            <AvatarImage src="/professional-woman-author.png" />
            <AvatarFallback>EC</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold text-foreground mb-1">
            Erin Carter
          </h3>
          <p className="text-sm text-muted-foreground mb-4">Travel Blogger</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Meet Erin Carter, a passionate explorer, storyteller, and the
            creative force behind the travel blog &ldquo;Wanderlust
            Voyager&ldquo;. With an insatiable curiosity and an unquenchable
            thirst for new experiences.
          </p>
          <div className="flex justify-center space-x-2">
            <Button variant="ghost" size="icon">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* You May Like */}
      <Card className="shadow-2xl rounded-2xl">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">
            You May Like
          </h3>
          <div className="space-y-4">
            {[
              {
                title: "Good Day To Take A Photo With Your Favourite",
                image: "/images/hero-2.png",
              },
              {
                title:
                  "Mastering Color Theory: Tips For Creating Vibrant Paintings",
                image: "/images/hero-2.png",
              },
              {
                title:
                  "The Evolution Of Artistic Style: Find Your Unique Voice",
                image: "/images/hero-2.png",
              },
              {
                title:
                  "Budget-Friendly Hangout: Have Fun Without Breaking The Bank",
                image: "/images/hero-2.png",
              },
              {
                title: "Urban Escapes: Top 5 Cities For Amazing Hangout Spots",
                image: "/images/hero-2.png",
              },
            ].map((post, index) => (
              <div key={index} className="flex space-x-3">
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
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
