import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Play } from "lucide-react";
import Image from "next/image";
import { AuthorSidebar } from "./_componet/slider";

export default function BlogPost() {
  return (
    <div className="bg-white section">
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Image
                width={500}
                height={500}
                src="/images/hero-2.png"
                alt="Street scene with cherry blossoms and people crossing"
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
            <article className="bg-card rounded-lg overflow-hidden">
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Good Day To Take A Photo With Your Favourite
                </h1>
                <p className="mb-4">
                  This trip of self-discovery takes place both literally and
                  figuratively on the ocean, which is big and always changing.
                  As you paddle out, each stroke helps you get away from the
                  noise of everyday life and puts you in a state of heightened
                  awareness, changing conditions, serves as both a physical and
                  metaphysical arena for this introspective journey. As you
                  paddle out, each stroke helps you distance yourself from the
                  noise of the everyday world, bringing you into a state of
                  heightened awareness. Surfing waves becomes a form of moving
                  meditation, allowing surfers to find their purpose and find
                  their passion.
                </p>

                {/* Featured Image */}

                {/* Author Info */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/male-photographer.png" />
                      <AvatarFallback>EP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">Esrat Popy</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>September 19, 2023</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>No comments</span>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Good Day To Take A Photo With The Fellow Surfers
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    This trip of self-discovery takes place both literally and
                    figuratively on the ocean, which is big and always changing.
                    As you paddle out, each stroke helps you get away from the
                    noise of everyday life and puts you in a state of heightened
                    awareness, changing conditions, serves as both a physical
                    and metaphysical arena for this introspective journey. As
                    you paddle out, each stroke helps you distance yourself from
                    the noise of the everyday world, bringing you into a state
                    of heightened awareness. Surfing waves becomes a form of
                    moving meditation, allowing surfers to find their purpose
                    and find their passion.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The ocean, with its vastness and ever-changing conditions,
                    serves as both a physical and metaphysical arena for this
                    introspective journey. As you paddle out into the ocean,
                    each deliberate stroke not only propels you away from the
                    cacophony of everyday life but puts you in a state of
                    heightened awareness from the noise of the everyday world.
                  </p>

                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Good Day To Take A Photo With The Fellow Surfers
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    This trip of self-discovery takes place both literally and
                    figuratively on the ocean, which is big and always changing.
                    As you paddle out, each stroke helps you get away from the
                    noise of everyday life and puts you in a state of heightened
                    awareness, changing conditions, serves as both a physical
                    and metaphysical arena for this introspective journey. As
                    you paddle out, each stroke helps you distance yourself from
                    the noise of the everyday world, bringing you into a state
                    of heightened awareness. Surfing waves becomes a form of
                    moving meditation, allowing surfers to find their purpose
                    and find their passion.
                  </p>

                  {/* Quote Block */}
                  <div className=" border-blue-500 border-l-4  pl-6 py-4 my-8 bg-blue-200 rounded-r-lg">
                    <p className="text-lg text-foreground italic leading-relaxed">
                      &quot; As you paddle out into the ocean, each deliberate
                      stroke not only propels you away from the cacophony of
                      everyday life but puts you in a state of heightened
                      awareness.&quot;
                    </p>
                    <cite className="text-sm text-blue-500 mt-2 block">
                      - Willa Delana
                    </cite>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Pass Some Quality Time At The Sea Shore
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    In an era marked by increasing globalization and
                    accessibility, the concept of travel has transformed into
                    more than just a leisurely escape. In an era marked by
                    increasing globalization and accessibility, the concept of
                    travel has transformed into more than just a leisurely
                    escape. In an era marked by increasing globalization and
                    accessibility, the concept of travel has transformed into
                    more than just a leisurely escape. In an era marked by
                    increasing globalization and accessibility, the concept of
                    travel has transformed into more than just a leisurely
                    escape but just a leisurely globalization and accessibility.
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    In an era marked by increasing globalization and
                    accessibility, the concept of travel has transformed into
                    more than just a leisurely escape. In an era marked by
                    increasing globalization and accessibility, the concept of
                    travel has transformed into more than just a leisurely
                    escape.
                  </p>

                  {/* Video Placeholder */}
                  <div className="relative   overflow-hidden mb-8">
                    <Image
                      width={500}
                      height={500}
                      src="/images/hero-2.png"
                      alt="Sunset beach scene"
                      className="w-full rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="rounded-full w-16 h-16">
                        <Play className="w-6 h-6 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className=" p-5 shadow-md">
              <AuthorSidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
