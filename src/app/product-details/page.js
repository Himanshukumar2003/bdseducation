import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function ProductPage() {
  const thumbnails = [
    "/images/hero-2.png",
    "/images/hero-2.png",
    "/images/hero-2.png",
    "/images/hero-2.png",
    "/images/hero-2.png",
  ];

  const discountTiers = [
    { threshold: "$300", discount: "$20 OFF" },
    { threshold: "$500", discount: "$40 OFF" },
    { threshold: "$1000", discount: "$100 OFF" },
    { threshold: "$2000", discount: "$300 OFF" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar - Thumbnails */}
        <div className="lg:col-span-1">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {thumbnails.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 h-20 border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-blue-500 transition-colors"
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Product Image */}
        <div className="lg:col-span-6">
          <div className="relative">
            <Badge className="absolute top-4 right-4 bg-gray-600 text-white">
              11/14
            </Badge>
            <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 relative overflow-hidden">
              <div className="flex justify-center items-center h-96">
                <img
                  src="/images/hero-2.png"
                  alt="Children playing with Makeblock mTiny robot"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              Makeblock mTiny: Smart Panda Robot for Preschoolers to Learn
              Coding, Music, Math, and Language.
            </h1>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-gray-600">65 reviews</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-red-600">$229.99</span>
            <span className="text-lg text-gray-500 line-through">$255.99</span>
            <Badge className="bg-orange-500 text-white">Final: $219.99</Badge>
          </div>

          {/* Cash back offer */}
          <div className="flex items-center gap-2 text-sm">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs">$</span>
            </div>
            <span className="text-gray-700">
              Earn up to 10% cash back.{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Join Now.
              </span>
            </span>
          </div>

          {/* Back to School Sale */}
          <Card className="p-4 bg-gray-50">
            <div className="text-sm font-medium text-gray-700 mb-3">
              Back to School Sale
            </div>
            <div className="text-lg font-bold text-gray-900 mb-3">
              Buy More, Save More
            </div>
            <div className="grid grid-cols-4 gap-2">
              {discountTiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-yellow-400 text-black text-center py-2 px-1 rounded text-xs font-bold"
                >
                  <div>{tier.discount}</div>
                  <div className="text-xs font-normal">{tier.threshold}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Get $10 off automatically—buy more to save even more for
              back-to-school essentials!
            </p>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              size="lg"
              className="flex-1 bg-orange-500 hover:bg-orange-600"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="px-4 bg-transparent">
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
