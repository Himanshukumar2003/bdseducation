import { Breadcrumb } from "@/components/breadcrumb";
import Solutions from "./_components/solutions";

export default function robotics(params) {
  return (
    <>
      <Breadcrumb
        title="Robotics, AI & STEM Lab Provider in India | BDS Education"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "/robotics-lab-provider-india",
            href: "/robotics-lab-provider-india",
            isCurrent: true,
          },
        ]}
      />

      <Solutions></Solutions>
    </>
  );
}
