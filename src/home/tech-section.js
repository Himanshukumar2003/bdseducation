import TechCard from "@/components/TechCard";

export default function AIEducationUI() {
  const technologies = [
    {
      title: "Coding - Graphical & Python",
      imageSrc: "/images/Communication-and-Collaboration.png",
      imageAlt: "Children learning coding with visual programming",
    },
    {
      title: "Self-Driving Technology",
      imageSrc: "/images/COMPUTATIONA-THINKING.png",
      imageAlt: "Autonomous vehicle technology demonstration",
    },
    {
      title: "Creativity and Innovation",
      imageSrc: "/images/Creativity-and-Innovation.png",
      imageAlt: "Creativity and Innovation",
    },
    {
      title: "AI and ML",
      imageSrc: "/images/Entrepreneurship-for-Students.png",
      imageAlt: "Students working with AI and machine learning",
    },
    {
      title: "Critical Thinking and Problem Solving",
      imageSrc: "/images/Problem-Solving-Skills-for-Students.png",
      imageAlt: "Critical Thinking ",
    },
    {
      title: "Industry and Automation",
      imageSrc: "/images/Algorithmic-Literacy.png",
      imageAlt: "Industrial automation and robotics",
    },
  ];

  return (
    <div className="section bg-gradient-to-b from-[#30338B] to-[#505BDD] ">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className=" text-3xl lg:text-4xl font-bold text-white mb-6">
            Technologies in Focus for Inclusive AI Education
          </h2>
          <p className="text-gray-200  text-lg leading-relaxed max-w-6xl mx-auto">
            Get your kids an opportunity to master world-class technological
            concepts like coding, training machine learning models, self-driving
            car, natural language processing, and what not with real-life
            practical activity-based learning (ABL).
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              title={tech.title}
              imageSrc={tech.imageSrc}
              imageAlt={tech.imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
