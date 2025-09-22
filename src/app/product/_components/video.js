"use client";

export default function VideoSection({ videos = [] }) {
  const demoVideos = [
    "https://www.youtube.com/embed/KxTK03zCe6o?si=0ZqMTrs2Qkajwxi7",
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-6xl">
          <div className="text-center mb-12 max-w-[700px] mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Explore Our Robotics Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Dive into our engaging video tutorials and see how you can start
              building your own robotics projects with our easy-to-follow kits.
              Perfect for beginners and enthusiasts alike!
            </p>
          </div>
          {demoVideos.map((src, i) => (
            <div
              key={i}
              className="w-full overflow-hidden rounded-xl shadow-md border border-gray-200"
            >
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src={src}
                  title={`YouTube video ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
