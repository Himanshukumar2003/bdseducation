import HeroSection from "@/home/hero-section";
import AboutSection from "@/home/about-section";
import ProductsSection from "@/home/products-section";
import BlogSection from "@/home/blog-section";
import UserGraphCards from "@/home/graph";
import AIEducationUI from "@/home/tech-section";
import Books from "@/home/custom-books";
import { StatsSection } from "@/home/star";
import { FeaturesSection } from "@/home/feachers";
import SmartKits from "@/home/smart-kits-combo";
import AtlProductLine from "@/home/atl";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      {/* <StatsSection></StatsSection> */}
      <FeaturesSection />
      <AtlProductLine></AtlProductLine>
      <Books></Books>
      <ProductsSection sliceCount={12} />{" "}
      {/* <AIEducationUI></AIEducationUI> */}
      <UserGraphCards></UserGraphCards>
      {/* <BlogSection /> */}
    </main>
  );
}
