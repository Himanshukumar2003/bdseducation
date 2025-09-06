import HeroSection from "@/home/hero-section";
import AboutSection from "@/home/about-section";
import ProductsSection from "@/home/products-section";
import BlogSection from "@/home/blog-section";
import UserGraphCards from "@/home/graph";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <UserGraphCards></UserGraphCards>
      <BlogSection />
    </main>
  );
}
