import { Breadcrumb } from "@/components/breadcrumb";
import BlogSection from "@/home/blog-section";
export default function Blogs(params) {
  return (
    <>
      <Breadcrumb
        title="Our Blog"
        items={[{ label: "blog", href: "/blog", isCurrent: true }]}
      />
      <BlogSection />
    </>
  );
}
