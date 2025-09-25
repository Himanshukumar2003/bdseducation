"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Award, BookOpen, Eye, EyeOff, Lightbulb, Users } from "lucide-react";
import Image from "next/image";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    mobile_number: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!agreedToTerms) {
      setError("You must agree to the Terms and Privacy Policy");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.username,
            fullname: formData.fullname,
            email: formData.email,
            mobile_number: formData.mobile_number,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong");
      } else {
        router.push("/login");
      }
    } catch (err) {
      setError("Failed to register. Try again later.");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex bg-blue-50 min-h-screen overflow-hidden justify-evenly">
      {/* Left - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl space-y-6">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/images/logo.png" width={200} height={200} alt="logo" />
          </Link>

          <Card className="shadow-0 bg-transparent">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-semibold">Sign Up</CardTitle>
              <CardDescription>
                Create your account to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input
                    id="fullname"
                    placeholder="John Doe"
                    value={formData.fullname}
                    onChange={(e) =>
                      handleInputChange("fullname", e.target.value)
                    }
                    required
                    className="h-11"
                  />
                </div>

                {/* Username */}
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="john123"
                    value={formData.username}
                    onChange={(e) =>
                      handleInputChange("username", e.target.value)
                    }
                    required
                    className="h-11"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <Label htmlFor="mobile_number">Mobile Number</Label>
                  <Input
                    id="mobile_number"
                    type="tel"
                    placeholder="+91 1234567890"
                    value={formData.mobile_number}
                    onChange={(e) =>
                      handleInputChange("mobile_number", e.target.value)
                    }
                    required
                    className="h-11"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      required
                      className="h-11 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    required
                    className="h-11"
                  />
                </div>

                {/* Terms */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(!!checked)}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-blue-600 hover:text-blue-500"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-600 hover:text-blue-500"
                    >
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <Button
                  type="submit"
                  className="w-full h-11 font-medium bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Educational Content */}
      <div className="hidden flex-1 bg-gradient-to-r from-blue-500 to-blue-700 education-pattern lg:flex items-center justify-center p-8 text-white">
        <div className="max-w-lg space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-balance">
              Transform Education with Technology
            </h2>
            <p className="text-blue-100 text-lg text-balance">
              Helping schools & colleges establish skill development labs to
              teach coding, AI, robotics & more
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Faculty Training</h3>
                <p className="text-blue-100">
                  Online faculty training and dedicated access for seeking
                  clarifications
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Grade-wise Books</h3>
                <p className="text-blue-100">
                  Comprehensive books for students from Grade 1 to 12 following
                  TIY approach
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Skill Development</h3>
                <p className="text-blue-100">
                  Wide usability span products with multi-language software
                  support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
