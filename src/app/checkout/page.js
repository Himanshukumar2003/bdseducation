"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "@/services/order-services";
import { toast } from "sonner";
import { handleError } from "@/lib/handle-error-toast";
import { DialogDescription } from "@radix-ui/react-dialog";
import AddressForm from "@/components/address-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getAddresses } from "@/services/address-services";
import Loader from "@/components/loader";
import { getCartItems } from "@/services/cart-services";

export const addressSchema = z.object({
  fullname: z.string().min(1, "fullname is required"),
  street: z.string().min(1, "Street is required"),
  house: z.string().min(1, "House Nubher is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postal_code: z.string().min(3, "Postal code is required"),
  phone: z.string().min(6).optional(),
});

export const orderItemSchema = z.object({
  item_type: z.enum(["book", "product"]),
  item_id: z.string().uuid({ message: "Invalid item_id" }),
  quantity: z.number().int().positive({ message: "Quantity must be > 0" }),
});

export const createOrderSchema = z.object({
  shipping_address: addressSchema,
  order_items: z
    .array(orderItemSchema)
    .min(1, "order_items must contain at least one item"),
  payment_method: z
    .enum(["card", "upi", "cod", "paypal", "bank_transfer", "cod"])
    .optional(),
  coupon_code: z.string().trim().optional(),
});
export default function CheckoutPage() {
  const { user } = useAuth();
  const savedShipping = useSelector((state) => state.orders.shippingInfo);
  // const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();
  const queryClient = useQueryClient();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [codConfirmed, setCodConfirmed] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const { register, handleSubmit, formState, setValue, watch } = useForm({
    mode: "onChange",
    resolver: zodResolver(createOrderSchema.pick({ shipping_address: true })),
    defaultValues: savedShipping || {
      shipping_address: {
        fullname: "",
        street: "",
        city: "",
        state: "",
        postal_code: "",
        phone: "",
        house: "",
      },
    },
  });

  const { isValid, errors, isDirty } = formState;
  const {
    data: cartItems,
    isLoading: isCartLoading,
    isError: isCartError,
    error: cartError,
  } = useQuery({
    queryKey: ["cart-items"],
    queryFn: async () => {
      const { data } = await getCartItems();
      return data;
    },
    enabled: !!user,
  });

  const createMutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast.success("Order created");
      queryClient.invalidateQueries(["cart"]);
      queryClient.invalidateQueries(["cart-items"]);
      router.push("/dashboard");
    },
    onError: (error) => {
      handleError(error);
    },
  });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["addresses"],
    queryFn: getAddresses,
  });

  const subtotal = useMemo(() => {
    return (
      cartItems?.reduce(
        (sum, item) =>
          sum +
          Number(String(item.price).replace(/[^\d.-]/g, "")) * item.quantity,
        0
      ) ?? 0
    );
  }, [cartItems]);
  const estimatedTaxes = subtotal * 0;
  const total = subtotal + estimatedTaxes;

  const onSubmit = (data) => {
    if (!user) {
      alert("Please login first!");
      return;
    }

    if (cartItems?.length === 0) {
      alert("Your cart is empty");
      return;
    }

    if (paymentMethod === "cod" && !codConfirmed) {
      alert("Please confirm your COD order before placing.");
      return;
    }

    const order_items = cartItems?.map((item) => ({
      item_type: item.item_type,
      item_id: item.item_id,
      quantity: item.quantity,
    }));

    const order = {
      ...data,
      order_items,
      payment_method: paymentMethod,
      // coupon_code: data.coupon_code || undefined,
    };

    createMutation.mutate(order);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="section bg-blue-50">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* FORM FIELDS */}
          <div className="lg:col-span-2 space-y-8">
            <div className=" bg-white rounded-xl shadow-2xl p-4">
              <div>
                <h3>Select Addresses:</h3>

                {isLoading ? (
                  <Loader />
                ) : isError ? (
                  <p className="text-red-500">
                    {error?.message ?? "Something went wrong"}
                  </p>
                ) : (
                  <div className="space-y-4">
                    {data.addresses.map((addr) => (
                      <label
                        key={addr.id}
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedAddressId === addr.id
                            ? "border-blue-500 bg-green-50 shadow-md"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        <input
                          type="radio"
                          value={addr.id}
                          {...register("addresses")}
                          className="mt-1 mr-3 cursor-pointer accent-blue-500"
                          onChange={() => {
                            setSelectedAddressId(addr.id);
                            setValue("shipping_address", addr.address);
                          }}
                        />
                        <div className="text-gray-800">
                          <p className="font-semibold">
                            {addr.address.fullname}
                          </p>
                          <p className="text-sm">
                            {addr.address.street}, {addr.address.city},{" "}
                            {addr.address.state} — {addr.address.postal_code}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                )}

                {errors?.shipping_address && (
                  <span className="text-sm text-red-500">
                    Address is required*
                  </span>
                )}
              </div>
              <div className=" mt-4 ">
                <Dialog>
                  <DialogTrigger className="btn">Add address</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className={"sr-only"}>
                        Are you absolutely sure?
                      </DialogTitle>
                      <DialogDescription className={"sr-only"}>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </DialogDescription>
                      <AddressForm />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Coupon (commented for now) */}
            {/*
            <Card className="shadow-lg rounded-xl border-none py-5">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Apply Coupon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Coupon code (optional)"
                  className="h-12 text-base"
                  {...register("coupon_code")}
                />
              </CardContent>
            </Card>
            */}

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
                    onClick={() => setPaymentMethod("card")}
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer ${
                      paymentMethod === "card"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }`}
                  >
                    <CreditCard className="w-6 h-6 text-gray-600" />
                    <span className="font-medium">Card / UPI / PayPal</span>
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

                {!user && (
                  <div className="text-red-600 font-medium text-center border border-red-300 rounded-md p-2">
                    Please login first to place an order
                  </div>
                )}
                <Button
                  type="submit"
                  // disabled={createMutation.isPending || !isDirty}
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
              {cartItems?.length === 0 ? (
                <p className="text-center text-gray-500 text-lg py-4">
                  Your cart is empty.
                </p>
              ) : (
                cartItems?.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 border rounded-lg bg-gray-100">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_FILE_BASE}${item?.pictures?.[0]}`}
                        alt="product"
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
