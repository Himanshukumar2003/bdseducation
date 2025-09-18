import HeroSection from "@/home/hero-section";
import AboutSection from "@/home/about-section";
import ProductsSection from "@/home/products-section";
import BlogSection from "@/home/blog-section";
import UserGraphCards from "@/home/graph";
import AIEducationUI from "@/home/tech-section";
import Books from "@/home/books";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Books></Books>
      <ProductsSection />
      <AIEducationUI></AIEducationUI>
      <UserGraphCards></UserGraphCards>
      <BlogSection />
    </main>
  );
}
