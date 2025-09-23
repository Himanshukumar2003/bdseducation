"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff, BookOpen, Users, Award, Lightbulb } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { login } from "@/lib/features/authSlice";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter(); // ✅ initialize router

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    let userData = null;

    // ✅ Check if admin login
    if (email === "admin@example.com" && password === "admin@123") {
      userData = {
        firstName: "Admin",
        lastName: "User",
        email: "admin@example.com",
        avatar: "",
        isAdmin: true,
      };
    } else if (email && password) {
      // Normal user dummy login
      userData = {
        firstName: email.split("@")[0] || "User",
        lastName: "",
        email,
        avatar: "",
        isAdmin: false,
      };
    } else {
      setError("Invalid credentials");
      setIsLoading(false);
      return;
    }

    // Save to redux
    dispatch(login(userData));
    setIsLoading(false);
    router.push("/");
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-xl space-y-6">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/images/logo.png" width={200} height={200} alt="logo" />
          </Link>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground">
              Sign in to continue your learning journey
            </p>
          </div>

          <Card className="py-5">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-semibold">Sign In</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                {error && (
                  <p className="text-sm text-red-600 font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  className="btn w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {"Don't have an account? "}
              <Link
                href="/signup"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </Link>
            </p>
          </div>

          {/* Demo credentials */}
          <div className="text-xs text-gray-500 text-center mt-4">
            <p>
              <strong>Admin Demo:</strong> admin@example.com / admin@123
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Educational Content */}
      <div className="hidden  flex-1 bg-gradient-to-r from-blue-500 to-blue-700 education-pattern lg:flex items-center justify-center p-8 text-white">
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
