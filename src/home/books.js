import Image from "next/image";
import Link from "next/link";

function Books() {
  const grades = [
    {
      grade: 1,
      bgColor: "bg-cyan-100",
      titleColor: "text-cyan-600",
      img: "/images/grade1.png",
      accentColor: "text-cyan-400",
      desc: "Introduction to computers, fun activities, and coding basics for young learners.",
      link: "/books/grade-1",
    },
    {
      grade: 2,
      bgColor: "bg-purple-100",
      titleColor: "text-purple-700",
      img: "/images/grade2.png",
      accentColor: "text-indigo-600",
      desc: "Step-by-step guide to coding with interactive tasks and problem solving.",
      link: "/books/grade-2",
    },
    {
      grade: 3,
      bgColor: "bg-yellow-100",
      titleColor: "text-gray-700",
      img: "/images/grade3.png",
      accentColor: "text-yellow-500",
      desc: "Boost logical thinking with structured lessons in computers and coding.",
      link: "/books/grade-3",
    },
    {
      grade: 4,
      bgColor: "bg-orange-100",
      titleColor: "text-gray-700",
      img: "/images/grade4.png",
      accentColor: "text-orange-500",
      desc: "Covers practical projects with a TIY approach for hands-on learning.",
      link: "/books/grade-4",
    },
    {
      grade: 5,
      bgColor: "bg-green-100",
      titleColor: "text-gray-700",
      img: "/images/grade5.png",
      accentColor: "text-green-500",
      desc: "Explore algorithms and creative coding exercises for higher classes.",
      link: "/books/grade-5",
    },
    {
      grade: 6,
      bgColor: "bg-red-100",
      titleColor: "text-gray-700",
      img: "/images/grade6.png",
      accentColor: "text-red-500",
      desc: "Advanced concepts of coding and computer applications explained simply.",
      link: "/books/grade-6",
    },
  ];

  return (
    <div className=" bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grades.map((item) => (
            <div  key={item.grade}>
              <div
                className={`${item.bgColor} rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-center justify-between gap-4">
                  {/* Left Side Text */}
                  <div className="flex-1">
                    <h2
                      className={`text-lg font-bold ${item.titleColor} mb-2 leading-snug`}
                    >
                      Easy Computers & <br />
                      Coding Grade{" "}
                      <span
                        className={`inline-block ${item.titleColor} bg-white rounded-full w-8 h-8 text-center leading-8 text-lg shadow-sm`}
                      >
                        {item.grade}
                      </span>
                    </h2>

                    <p className="text-sm text-gray-700">{item.desc}</p>

                    <p className="mt-2 text-xs font-semibold">
                      {/* <span className={`${item.accentColor}`}>
                        Learn • Code • Create
                      </span> */}
                    </p>
                  </div>

                  {/* Right Side Image */}
                  <div className="flex-shrink-0">
                    <Image
                      width={180}
                      height={220}
                      src={item.img}
                      alt={`Grade ${item.grade} Book`}
                      className="w-24 h-36 md:w-28 md:h-40 lg:w-32 lg:h-44 object-contain rounded-lg  hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
