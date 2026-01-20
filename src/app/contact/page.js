import { Breadcrumb } from "@/components/breadcrumb";
import { ContactForm } from "./_componet/contact-form";
import { ContactSection } from "./_componet/contact-section";
import { TestimonialsSection } from "./_componet/testimonials-section";
export const metadata = {
  title: "Contact BDS Education | Robotics & STEM Lab Provider in India",
  description:
    "Contact BDS Education for robotics, AI and STEM lab setup, training programs and educational solutions for schools and colleges across India.",
  keywords: [
    // Primary
    "Robotics lab provider in India",
    "STEM lab provider near me",

    // Secondary
    "Robotics lab provider in Chhattisgarh",
    "Robotics lab provider in Raipur",

    // Support
    "Contact robotics lab provider",
    "Get robotics lab setup quote",
    "Educational lab solutions enquiry",
  ],
};

export default function Contact() {
  return (
    <>
      <Breadcrumb
        title="Contact us"
        items={[{ label: "Contact us", href: "/contact", isCurrent: true }]}
      />

      <ContactSection />
      <ContactForm />
      <TestimonialsSection />
    </>
  );
}
