"use client";
import { useEffect, useState } from "react";

export default function Tabs() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "highlights",
        "resources",
        "reviews",
        "download",
        "specs",
      ];
      let current = "overview";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "highlights", label: "Highlights" },
    { id: "resources", label: "Resources" },
    { id: "reviews", label: "Reviews" },
    { id: "download", label: "Download" },
    { id: "specs", label: "Specs" },
  ];

  return (
    <div className="  fixed top-[100px] w-full">
      <div className="container max-w-6xl mx-auto">
        <nav className="flex justify-center   w-full gap-10 border-b border-gray-200 ">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`relative py-2 text-gray-600 hover:text-black transition ${
                activeSection === tab.id ? "font-semibold text-black" : ""
              }`}
            >
              {tab.label}
              {activeSection === tab.id && (
                <span className="absolute left-0 -bottom-[1px] w-full h-[3px] bg-blue-500 rounded"></span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
