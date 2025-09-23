import { Breadcrumb } from "@/components/breadcrumb";
import Gallery from "./_data";

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
