"use client";
import auth from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle, Eye, EyeOff, Mail, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BsExclamation } from "react-icons/bs";

// Zod Schemas
const forgotSchema = z.object({
  email: z
    .string({ required_error: "Email is required*" })
    .email("Please enter a valid email address.")
    .min(1, { message: "Email is required*" }),
});

const resetSchema = z
  .object({
    password: z
      .string({ required_error: "Password is required*" })
      .min(6, "Password must be at least 6 characters long."),
    confirmPassword: z.string({
      required_error: "Please confirm your password*",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default function ForgotPasswordForm({ type }) {
  const searchParams = useSearchParams();
  const token = searchParams.get("t");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: zodResolver(type === "forgot" ? forgotSchema : resetSchema),
  });

  const forgotMutation = useMutation({
    mutationFn: auth.forgotPassword,
    onSuccess: () => {
      toast.success("Reset link sent", {
        description:
          "Check your inbox for instructions to reset your password.",
        duration: 5000,
        icon: <Mail />,
      });
      router.replace("/");
    },
    onError: (error) => {
      toast.error("Request failed", {
        description:
          error?.response?.data?.message ??
          error?.message ??
          "Something went wrong!",
        duration: 5000,
        icon: <BsExclamation />,
      });
    },
  });

  const resetMutation = useMutation({
    mutationFn: auth.resetPassword,
    onSuccess: () => {
      toast.success("Success", {
        description: "Password reset successfully.",
        duration: 5000,
        icon: <CheckCircle2 />,
      });
      router.replace("/");
    },
    onError: (error) => {
      toast.error("Request failed", {
        description:
          error?.response?.data?.message ??
          error?.message ??
          "Something went wrong!",
        duration: 5000,
        icon: <ExclamationTriangleIcon />,
      });
    },
  });

  async function onSubmit(data) {
    type === "forgot"
      ? forgotMutation.mutate({ ...data })
      : resetMutation.mutate({ ...data, token });
  }

  return (
    <div className="section flex items-center justify-center bg-gradient-to-br from-primary/5 to-background px-4">
      <div className="w-full max-w-md bg-white dark:bg-background rounded-2xl shadow-lg border p-6 sm:p-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-primary">
            {type === "forgot"
              ? "Forgot your password?"
              : "Reset your password"}
          </h2>

          <p className="text-sm text-muted-foreground">
            {type === "forgot"
              ? "Enter your email and we’ll send you a password reset link."
              : "Create a new password for your account."}
          </p>

          <p className="text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Back to login
            </Link>
          </p>
        </div>

        {/* Form */}
        <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {type === "forgot" ? (
            <div className="space-y-1">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
          ) : (
            <>
              <div className="space-y-1 relative">
                <Label htmlFor="password">New password</Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-9 text-muted-foreground hover:text-primary"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
                {errors.password && (
                  <p className="text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="space-y-1 relative">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input
                  id="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  {...register("confirmPassword")}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((prev) => !prev)}
                  className="absolute right-3 top-9 text-muted-foreground hover:text-primary"
                >
                  {showConfirm ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Submit */}
          <div className=" text-center">
            <button
              disabled={forgotMutation.isPending || resetMutation.isPending}
              type="submit"
              className="btn w-full flex items-center justify-center gap-2"
            >
              {forgotMutation.isPending || resetMutation.isPending ? (
                <LoaderCircle className="h-5 w-5 animate-spin" />
              ) : (
                <Mail className="h-5 w-5" />
              )}
              {type === "forgot" ? "Send reset link" : "Reset password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
