"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// schemas/contact-inquiry-schema.ts
import { z } from "zod";

export const contactInquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is required")
    .max(100, "Name is too long"),

  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),

  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(100, "Email is too long"),

  message: z
    .string()
    .trim()
    .min(5, "Message is required")
    .max(1000, "Message is too long"),
});

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // clear field error on typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");
    setErrors({});

    const validation = contactInquirySchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors = {};
      validation.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BDS_API_URL}/contact-inquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setSuccess("Your message has been sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setErrors({
        form: "Failed to submit form. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[url('/images/bg-2.png')] bg-cover bg-center py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <p className="text-sm opacity-70 mb-4">ASK US ANYTHING</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              SHARE YOUR 📧 <br />
              MESSAGE & WE&apos;LL <br />
              RESPOND
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you have a question, need information, or want to
              collaborate, we’d love to hear from you.
            </p>
          </div>

          {/* Form */}
          <Card className="bg-white shadow-xl border border-gray-200 py-5 lg:-mb-[400px]">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
              <p className="text-sm text-gray-600">
                Fill the form and we’ll contact you soon.
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name*
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone*
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 1234567890"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email*
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message*
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="min-h-[120px]"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Global Error */}
                {errors.form && (
                  <p className="text-red-600 text-sm">{errors.form}</p>
                )}

                {/* Success */}
                {success && <p className="text-green-600 text-sm">{success}</p>}

                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
