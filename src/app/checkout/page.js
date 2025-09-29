"use client";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addOrder } from "@/lib/features/ordersSlice";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";

export default function CheckoutPage() {
  const { user } = useAuth();

  const savedShipping = useSelector((state) => state.orders.shippingInfo);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState("online");
  const [codConfirmed, setCodConfirmed] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    defaultValues: savedShipping || {
      email: "",
      country: "",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      postalCode: "",
    },
  });

  const { isValid } = formState;

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + Number(String(item.price).replace(/[^\d.-]/g, "")) * item.quantity,
    0
  );
  const estimatedTaxes = subtotal * 0.1;
  const total = subtotal + estimatedTaxes;

  const onSubmit = (data) => {
    if (!user) {
      alert("Please login first!");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    if (paymentMethod === "cod" && !codConfirmed) {
      alert("Please confirm your COD order before placing.");
      return;
    }

    const order = {
      id: Date.now(),
      items: cartItems,
      subtotal,
      estimatedTaxes,
      total,
      date: new Date().toISOString(),
      shipping: data,
      paymentMethod: paymentMethod === "cod" ? "COD" : "Paid",
    };

    dispatch(addOrder(order));
    router.push("/dashboard");
  };

  const countries = [
    { code: "IN", name: "India", flag: "🇮🇳" },
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="section bg-blue-50">
      <div className="pp-16 pt-25 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* FORM FIELDS */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Info */}
            <Card className="shadow-lg rounded-xl border-none py-5">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email or mobile phone number"
                  className="h-12 text-base"
                  {...register("email", { required: true })}
                />
              </CardContent>
            </Card>

            {/* Delivery Details */}
            <Card className="shadow-lg rounded-xl border-none py-5">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Delivery Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <select
                    {...register("country", { required: true })}
                    className="h-12 text-base border rounded-lg px-4 w-full"
                  >
                    <option value="">Select country</option>
                    {countries.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.name}
                      </option>
                    ))}
                  </select>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="First name"
                      className="h-12 text-base"
                      {...register("firstName", { required: true })}
                    />
                    <Input
                      placeholder="Last name"
                      className="h-12 text-base"
                      {...register("lastName", { required: true })}
                    />
                  </div>

                  <Input
                    placeholder="Address"
                    className="h-12 text-base"
                    {...register("address", { required: true })}
                  />
                  <Input
                    placeholder="Apartment, suite, etc. (optional)"
                    className="h-12 text-base"
                    {...register("apartment")}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="City"
                      className="h-12 text-base"
                      {...register("city", { required: true })}
                    />
                    <Input
                      placeholder="Postal code (optional)"
                      className="h-12 text-base"
                      {...register("postalCode")}
                    />
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="save-info" className="w-5 h-5" />
                    <Label
                      htmlFor="save-info"
                      className="text-base text-gray-700 cursor-pointer"
                    >
                      Save this information for next time
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Info */}
            <Card className="shadow-lg rounded-xl border-none py-5">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-base text-gray-600">
                  All transactions are secure and encrypted.
                </p>

                {/* Payment Options */}
                <div className="space-y-4">
                  <div
                    onClick={() => setPaymentMethod("online")}
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer ${
                      paymentMethod === "online"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }`}
                  >
                    <CreditCard className="w-6 h-6 text-gray-600" />
                    <span className="font-medium">Pay Now (Online)</span>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("cod")}
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer ${
                      paymentMethod === "cod"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200"
                    }`}
                  >
                    <Wallet className="w-6 h-6 text-gray-600" />
                    <span className="font-medium">Cash on Delivery</span>
                  </div>
                </div>

                {/* COD Confirmation */}
                {paymentMethod === "cod" && (
                  <div className="flex items-center space-x-2 pt-4">
                    <Checkbox
                      id="cod-confirm"
                      className="w-5 h-5"
                      checked={codConfirmed}
                      onCheckedChange={setCodConfirmed}
                    />
                    <Label
                      htmlFor="cod-confirm"
                      className="text-base text-gray-700 cursor-pointer"
                    >
                      I confirm that I will pay cash upon delivery.
                    </Label>
                  </div>
                )}

                {/* ❌ Login Error */}
                {!user && (
                  <div className="text-red-600 font-medium text-center border border-red-300 rounded-md p-2">
                    Please login first to place an order
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={
                    !user ||
                    !isValid ||
                    cartItems.length === 0 ||
                    (paymentMethod === "cod" && !codConfirmed)
                  }
                  className="btn "
                >
                  {paymentMethod === "cod" ? "Place Order" : "Pay Now"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-lg sticky top-12 h-fit">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Order Summary
            </h2>
            <div className="space-y-6 mb-8">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 text-lg py-4">
                  Your cart is empty.
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 border rounded-lg bg-gray-100">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_FILE_BASE}${item.pictures[0]}`}
                        alt={item.title}
                        fill
                        className="object-contain p-1"
                      />
                      <span className="absolute z-10 -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-medium text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-base font-semibold text-gray-800">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))
              )}
            </div>
            <div className="border-t border-gray-200 pt-6 space-y-3 text-base">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping:</span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Estimated taxes:</span>
                <span>₹{estimatedTaxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold border-t border-gray-200 pt-4 mt-4 text-xl text-gray-900">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
