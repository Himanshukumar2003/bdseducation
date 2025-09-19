import { ContactForm } from "./_componet/contact-form";
import { ContactSection } from "./_componet/contact-section";
import { TestimonialsSection } from "./_componet/testimonials-section";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <ContactSection />
      <ContactForm/>
      <TestimonialsSection />
    </main>
  )
}
