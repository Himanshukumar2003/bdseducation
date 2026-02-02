import { Breadcrumb } from "@/components/breadcrumb";
import BlogSection from "@/home/blog-section";
export default function Blogs(params) {
  return (
    <>
      <Breadcrumb
        title="Our Blogs"
        items={[{ label: "blogs", href: "/blog", isCurrent: true }]}
      />
      <BlogSection />
    </>
  );
}
