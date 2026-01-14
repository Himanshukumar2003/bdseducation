"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, LoaderCircle, CheckCircle2, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import auth from "@/services/auth";

// ================== SCHEMAS ==================
const forgotUsernameSchema = z.object({
  email: z
    .string({ required_error: "Email is required*" })
    .email("Please enter a valid email address"),
});

const resetUsernameSchema = z.object({
  username: z
    .string({ required_error: "Username is required*" })
    .min(3, "Username must be at least 3 characters"),
});

export default function ForgotUsernameForm({ type }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("t");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      type === "forgot" ? forgotUsernameSchema : resetUsernameSchema
    ),
  });

  // ================== FORGOT MUTATION ==================
  const forgotMutation = useMutation({
    mutationFn: auth.forgotUsername,
    onSuccess: () => {
      toast.success("Username sent", {
        description: "Please check your registered email.",
        icon: <CheckCircle2 />,
        duration: 5000,
      });
      router.replace("/");
    },
    onError: (error) => {
      toast.error("Request failed", {
        description:
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
        icon: <AlertTriangle />,
        duration: 5000,
      });
    },
  });

  // ================== RESET MUTATION ==================
  const resetMutation = useMutation({
    mutationFn: auth.resetUsername,
    onSuccess: () => {
      toast.success("Success", {
        description: "Username reset successfully.",
        icon: <CheckCircle2 />,
        duration: 5000,
      });
      router.replace("/login");
    },
    onError: (error) => {
      toast.error("Request failed", {
        description:
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
        icon: <AlertTriangle />,
        duration: 5000,
      });
    },
  });

  // ================== SUBMIT ==================
  function onSubmit(data) {
    type === "forgot"
      ? forgotMutation.mutate(data)
      : resetMutation.mutate({ ...data, token });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-background px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white dark:bg-background p-6 shadow-lg sm:p-8">
        {/* HEADER */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-primary">
            {type === "forgot" ? "Forgot Username?" : "Reset Username"}
          </h2>

          <p className="text-sm text-muted-foreground">
            {type === "forgot"
              ? "Enter your registered email and we’ll send your username."
              : "Choose a new username for your account."}
          </p>

          <p className="text-sm text-muted-foreground">
            Remember now?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Back to login
            </Link>
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
          {type === "forgot" ? (
            <div className="space-y-1">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
          ) : (
            <div className="space-y-1">
              <Label htmlFor="username">New Username</Label>
              <Input
                id="username"
                placeholder="Enter new username"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-xs text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={forgotMutation.isPending || resetMutation.isPending}
            className="btn w-full flex items-center justify-center gap-2"
          >
            {forgotMutation.isPending || resetMutation.isPending ? (
              <LoaderCircle className="h-5 w-5 animate-spin" />
            ) : (
              <Mail className="h-5 w-5" />
            )}
            {type === "forgot" ? "Send Username" : "Reset Username"}
          </button>
        </form>
      </div>
    </div>
  );
}
