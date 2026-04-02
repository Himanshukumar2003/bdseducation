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
import Script from "next/script";
export const metadata = {
  alternates: {
    canonical: "https://bdseducation.in",
  },
};
export default function Home() {
  <Script
    id="schema"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://bdseducation.in/#organization",
          name: "BDS Education",
          legalName: "Bharat Drone Systems Pvt. Ltd.",
          url: "https://bdseducation.in",
          logo: {
            "@type": "ImageObject",
            url: "https://bdseducation.in/images/logo.png",
            width: 200,
            height: 60,
          },
          description:
            "BDS Education provides Robotics, AI and STEM lab solutions...",
        },

        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://bdseducation.in/#website",
          url: "https://bdseducation.in",
          name: "BDS Education – Robotics, AI & STEM Lab Provider",
        },

        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "https://bdseducation.in/#webpage",
          url: "https://bdseducation.in",
          name: "Robotics, AI & STEM Lab Provider...",
        },

        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": "https://bdseducation.in/#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://bdseducation.in",
            },
          ],
        },

        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the Teach It Yourself (TIY) model?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "TIY is BDS Education's approach...",
              },
            },
          ],
        },
      ]),
    }}
  />;
  return (
    <main>
      <HeroSection />
      <AboutSection />
      {/* <StatsSection></StatsSection> */}
      <FeaturesSection />
      <AtlProductLine></AtlProductLine>
      <Books></Books>
      <ProductsSection sliceCount={12} /> <AIEducationUI></AIEducationUI>
      <UserGraphCards></UserGraphCards>
      {/* <BlogSection /> */}
    </main>
  );
}
