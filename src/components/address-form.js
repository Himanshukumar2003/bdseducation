"use client";

import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAddress,
  postAddress,
  updateAddress,
} from "@/services/address-services";
import { handleError } from "@/lib/handle-error-toast";
import { Home, Loader2, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";
import Loader from "./loader";
import Error from "next/error";

export default function AddressForm({ type = "create", id, callback }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      address: {
        fullname: "",
        phone: "",
        house: "",
        street: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
      },
    },
  });

  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: postAddress,
    onSuccess: () => {
      toast.success("Address added");
      queryClient.invalidateQueries(["addresses"]);
      callback?.();
    },
    onError: (error) => {
      handleError(error);
    },
  });
  const updateMutation = useMutation({
    mutationFn: (data) => updateAddress(id, data),
    onSuccess: () => {
      toast.success("Address updated");
      queryClient.invalidateQueries(["addresses"]);
      callback?.();
    },
    onError: (error) => {
      handleError(error);
    },
  });

  // fetch single address on type = edit form
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["addresses", id],
    queryFn: () => getAddress(id),
    enabled: !!id,
  });

  const onSubmit = (data) => {
    type === "create"
      ? createMutation.mutate(data)
      : updateMutation.mutate(data);
    callback?.();
  };

  useEffect(() => {
    if (data) {
      console.log({ data });
      reset({ address: data.address });
    }
  }, [data, id, type, reset]);

  if (type === "edit" && isLoading) return <Loader />;
  if (type === "edit" && isError)
    return (
      <Error
        title={
          error?.response?.data?.message ??
          error?.message ??
          "SOmething went wrong"
        }
      />
    );

  const isFormPending =
    (type === "create" && createMutation.isPending) ||
    (type === "edit" && updateMutation.isPending);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="rounded-xl border-none py-5">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-gray-800">
            {type === "create" ? (
              <span>Add Address</span>
            ) : (
              <span>Edit Address</span>
            )}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* House Number */}

            <div>
              <Input
                placeholder="Full Name"
                className="h-12 text-base"
                {...register("address.fullname", {
                  required: " required",
                })}
              />
              {errors.address?.fullname && (
                <span className="text-red-500 text-sm">
                  {errors.address.fullname.message}
                </span>
              )}
            </div>

            <div>
              <Input
                placeholder="Phone Number"
                className="h-12 text-base"
                {...register("address.phone", {
                  required: " required",
                })}
              />
              {errors.address?.phone && (
                <span className="text-red-500 text-sm">
                  {errors.address.phone.message}
                </span>
              )}
            </div>

            <div>
              <Input
                placeholder="House Number"
                className="h-12 text-base"
                {...register("address.house", {
                  required: "House number is required",
                })}
              />
              {errors.address?.house && (
                <span className="text-red-500 text-sm">
                  {errors.address.house.message}
                </span>
              )}
            </div>

            {/* Street Address */}
            <div>
              <Input
                placeholder="Street Address"
                className="h-12 text-base"
                {...register("address.street", {
                  required: "Street address is required",
                })}
              />
              {errors.address?.street && (
                <span className="text-red-500 text-sm">
                  {errors.address.street.message}
                </span>
              )}
            </div>

            {/* City */}
            <div>
              <Input
                placeholder="City"
                className="h-12 text-base"
                {...register("address.city", {
                  required: "City is required",
                })}
              />
              {errors.address?.city && (
                <span className="text-red-500 text-sm">
                  {errors.address.city.message}
                </span>
              )}
            </div>

            {/* State */}
            <div>
              <Input
                placeholder="State"
                className="h-12 text-base"
                {...register("address.state", {
                  required: "State is required",
                })}
              />
              {errors.address?.state && (
                <span className="text-red-500 text-sm">
                  {errors.address.state.message}
                </span>
              )}
            </div>

            {/* Pincode */}
            <div>
              <Input
                placeholder="Postal code"
                type="number"
                className="h-12 text-base"
                {...register("address.postal_code", {
                  required: "Postal code is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Enter a valid 6-digit postal_code",
                  },
                })}
              />
              {errors.address?.postal_code && (
                <span className="text-red-500 text-sm">
                  {errors.address.postal_code.message}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button type="submit" className="btn" disabled={isFormPending}>
              {isFormPending ? (
                <LoaderCircle className="h-5 w-5 animate-spin" />
              ) : (
                <Home />
              )}
              {type === "create" ? (
                <span>Add Address</span>
              ) : (
                <span>Update Address</span>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
