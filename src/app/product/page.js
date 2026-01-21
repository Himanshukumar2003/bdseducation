import { Suspense } from "react";
import ProductFillter from "./_components/search-bar";
import { Breadcrumb } from "@/components/breadcrumb";
export const metadata = {
  title: "About BDS Education | Robotics & STEM Education Company in India",
  description:
    "BDS Education is a leading robotics, AI and STEM lab provider for schools and colleges in India. We offer complete lab setup, curriculum, training, and educational robotics solutions.BDS Education is a trusted robotics and STEM education company delivering innovative lab solutions, training programs and future-ready learning for institutions.",
  keywords: [
    // Primary
    "Robotics education company",
    "STEM education solutions provider",
    "Educational technology company in India",

    // Secondary
    "Robotics training company",
    "AI and STEM education experts",
    "School education solution provider",

    // Support
    "Innovative learning solutions",
    "Practical learning through robotics",
    "Future-ready education solutions",
  ],
};
export default function SearchPage(params) {
  return (
    <>
      <Breadcrumb
        title="Products"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "product",
            href: "/product",
            isCurrent: true,
          },
        ]}
      />

      <Suspense fallback="Loading...">
        <ProductFillter></ProductFillter>
      </Suspense>
    </>
  );
}
