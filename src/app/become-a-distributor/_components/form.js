"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const distributorInquirySchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name is too long"),

  last_name: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(50, "Last name is too long"),

  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(100, "Email is too long"),

  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),

  city: z
    .string()
    .trim()
    .min(2, "City is required")
    .max(50, "City name is too long"),

  message: z.string().trim().max(500, "Message is too long").optional(),
});

export default function Distributor() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(distributorInquirySchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BDS_API_URL}/distributor-inquiries`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      alert("Distributor inquiry submitted successfully");
      reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* FIRST + LAST NAME */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase mb-2">
              First Name
            </label>
            <input
              {...register("first_name")}
              placeholder="Amit"
              className="w-full px-3 py-2 border rounded text-sm"
            />
            {errors.first_name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase mb-2">
              Last Name
            </label>
            <input
              {...register("last_name")}
              placeholder="Verma"
              className="w-full px-3 py-2 border rounded text-sm"
            />
            {errors.last_name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.last_name.message}
              </p>
            )}
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-xs font-semibold uppercase mb-2">
            Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="amit.verma@example.in"
            className="w-full px-3 py-2 border rounded text-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <label className="block text-xs font-semibold uppercase mb-2">
            Phone Number
          </label>
          <input
            {...register("phone")}
            placeholder="+91 9876543210"
            className="w-full px-3 py-2 border rounded text-sm"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* CITY */}
        <div>
          <label className="block text-xs font-semibold uppercase mb-2">
            City
          </label>
          <input
            {...register("city")}
            placeholder="Mumbai"
            className="w-full px-3 py-2 border rounded text-sm"
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block text-xs font-semibold uppercase mb-2">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Your message (optional)"
            className="w-full px-3 py-2 border rounded text-sm resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
