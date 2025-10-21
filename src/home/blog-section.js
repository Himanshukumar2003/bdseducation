import BlogCard from "@/components/blog-card";

const blogPosts = [
  {
    title: "Knowledge Through Projects – Learning That Stays for Life",
    excerpt:
      "Across classrooms and colleges, we often hear students say, “I studied this, but I can’t apply it.” That’s not a failure of intelligence — it’s a failure of method. Traditional education emphasizes memory over mastery, notes over know-how. Students remember concepts just long enough to write an exam — and then forget them.",
    date: "Oct 18, 2025",
    author: "ADMIN",
    category: "EDUCATION",
    image: "/images/blog/Picture1.png",
    slug: "/blog/knowledge-through-projects",
  },
  {
    title: "Teach It Yourself – A New Wave in Technical Education",
    excerpt:
      "Every year, millions of students graduate — yet many struggle to find employment. The reason isn’t lack of intelligence — it’s the lack of real-world skills. India doesn’t just need more degrees; it needs more doers. At BDS Education, we believe the transformation begins in classrooms — when students stop being learners only and start becoming makers too. That’s where Teach It Yourself (TIY) and Knowledge Through Projects come together to build the India of Tomorrow.",
    date: "Oct 17, 2025",
    author: "ADMIN",
    category: "EDUCATION",
    image: "/images/blog/Picture2.png",
    slug: "/blog/teach-it-yourself",
  },
  {
    title: "From Learners to Makers – Building India’s Future with TIY",
    excerpt:
      "Every year, millions of students graduate — yet many struggle to find employment. The reason isn’t lack of intelligence — it’s the lack of real-world skills. India doesn’t just need more degrees; it needs more doers. At BDS Education, we believe the transformation begins in classrooms — when students stop being learners only and start becoming makers too. That’s where Teach It Yourself (TIY) and Knowledge Through Projects come together to build the India of Tomorrow.",
    date: "Oct 17, 2025",
    author: "ADMIN",
    category: "EDUCATION",
    image: "/images/blog/Picture3.png",
    slug: "/blog/from-learners-to-makers",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container max-w-7xl mx-auto px-4">
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
