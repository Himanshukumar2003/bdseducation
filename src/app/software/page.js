import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/breadcrumb";

export default function Software() {
  const softwareItems = [
    {
      title: "Scratch Junior",
      description:
        "Scratch Junior is a programming language that enables young children to create their own interactive stories and games. It helps build foundational skills in problem-solving, sequencing, and logic. Kids can design characters, animate them, and add sounds easily. The visual block-based interface makes coding fun and intuitive. It encourages creativity and learning through play, enhancing cognitive skills early on.",
      price: 94999,
      img: "/images/img1.png",
    },
    {
      title: "M-Block 5",
      description:
        "M-Block 5 is an advanced block-based coding platform suitable for slightly older kids. It introduces more complex programming concepts such as loops, conditions, and events. Children can build interactive stories, games, and simple apps. The platform promotes logical thinking, problem-solving, and creativity. It’s ideal for transitioning from visual programming to text-based languages like Python.",
      price: 94999,
      img: "/images/img2.png",
    },
    {
      title: "Tinkercad",
      description:
        "Tinkercad is a 3D designing and electronics simulation platform that allows students to build circuits and 3D models virtually. It helps develop creativity, spatial skills, and problem-solving abilities. Tinkercad is beginner-friendly and widely used in STEM education.",
      price: 94999,
      img: "/images/img3.png",
    },
    {
      title: "App Inventor",
      description:
        "App Inventor allows students to create Android apps using a visual block-based interface. It teaches logical thinking, sequencing, and event-driven programming. Perfect for beginners to start mobile app development easily.",
      price: 94999,
      img: "/images/img4.png",
    },
    {
      title: "Arduino IDE",
      description:
        "Arduino IDE provides an easy-to-use platform to program Arduino boards. Students learn microcontroller programming, electronics concepts, and problem-solving. It supports hands-on projects and interactive learning.",
      price: 94999,
      img: "/images/img5.png",
    },
    {
      title: "Python IDLE",
      description:
        "Python IDLE is the official Python development environment. It is beginner-friendly, helps students learn coding logic, syntax, and run scripts efficiently. Ideal for practicing Python programming fundamentals.",
      price: 94999,
      img: "/images/img1.png",
    },
    {
      title: "PyCharm IDE",
      description:
        "PyCharm IDE is a professional Python development environment. It offers advanced features for coding, debugging, and project management. Suitable for students transitioning to more serious Python programming projects.",
      price: 94999,
      img: "/images/img2.png",
    },
  ];

  return (
    <>
      <Breadcrumb
        title="software"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "software",
            href: "/software",
            isCurrent: true,
          },
        ]}
      />

      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softwareItems.map((item, index) => (
            <Card key={index} className="w-full snap-start rounded-xl  ">
              <div className="flex flex-col md:flex-row  gap-0 ">
                <div className="flex-shrink-0  relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={500}
                    className=" max-w-[200px] min-h-[205px] rounded-l-2xl object-cover"
                  />
                </div>

                <div className="flex-1 w-ful rounded-r-2xl bg-gray-50   shadow-md p-4">
                  <h3 className="   italic text-xl   mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed  line-clamp-4">
                    {item.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    {/* <span className="text-sm font-medium">₹94,999</span> */}
                    <Button className="border border-blue-500 text-blue-500  bg-transparent   hover:text-white">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
