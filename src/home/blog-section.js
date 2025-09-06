import BlogCard from "@/components/blog-card";

const blogPosts = [
  {
    title:
      "WITH EARLY LEARNING PROGRAMS, YOU ARE ONE STEP CLOSER TO YOUR CHILD'S SUCCESS.",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry by the readable content of a page when looking at its layout.",
    date: "APRIL 17, 2024",
    author: "ADMIN",
    category: "EDUCATION",
    image: "/images/hero-1.png",
  },
  {
    title:
      "WITH EARLY LEARNING PROGRAMS, YOU ARE ONE STEP CLOSER TO YOUR CHILD'S SUCCESS.",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry by the readable content of a page when looking at its layout.",
    date: "APRIL 17, 2024",
    author: "ADMIN",
    category: "EDUCATION",
    image: "/images/hero-1.png",
  },
  {
    title:
      "WITH EARLY LEARNING PROGRAMS, YOU ARE ONE STEP CLOSER TO YOUR CHILD'S SUCCESS.",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry by the readable content of a page when looking at its layout.",
    date: "APRIL 17, 2024",
    author: "ADMIN",
    category: "EDUCATION",
    image: "/images/hero-1.png",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
            OUR BLOG
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Latest News & Articles
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and stories from our
            kindergarten community. Discover helpful parenting advice,
            educational activities, and exciting school updates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
