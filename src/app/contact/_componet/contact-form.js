"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// schemas/contact-inquiry-schema.ts
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(contactInquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: async (data) => {
      await fetch(`${process.env.NEXT_PUBLIC_BDS_API_URL}/contact-inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      toast.success("Inquiry sent successfully.");
      reset({});
    },
  });

  async function onSubmit(formData) {
    mutate(formData);
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name*
                  </label>
                  <Input {...register("name")} placeholder="Enter your name" />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone*
                  </label>
                  <Input {...register("phone")} placeholder="+91 1234567890" />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email*
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message*
                  </label>
                  <Textarea
                    {...register("message")}
                    placeholder="Write your message..."
                    className="min-h-[120px]"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Global Error */}
                {isError && (
                  <span className="text-sm text-red-500">
                    {error?.response?.data?.message ??
                      error?.message ??
                      "Something went wrong."}
                  </span>
                )}

                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
