import { Breadcrumb } from "@/components/breadcrumb";
import Gallery from "./_data";
export const metadata = {
  title:
    "BDS Education Gallery – Coding Labs, Robotics Events & Student Projects",
  description:
    "View photos and highlights from BDS Education’s hands-on workshops, coding labs, robotics exhibitions, and student project showcases.",
  keywords: [
    "STEM education gallery",
    "coding lab images",
    "robotics event photos",
    "student projects",
  ],
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumb
        title="Our Gallery"
        items={[{ label: "Gallery", href: "/gallery", isCurrent: true }]}
      />

      <Gallery />
    </>
  );
}
