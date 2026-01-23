"use client";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAddress,
  postAddress,
  updateAddress,
} from "@/services/address-services";

import { handleError } from "@/lib/handle-error-toast";
import { Home, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useMemo } from "react";
import Loader from "./loader";
import * as csc from "country-state-city";
import CustomCommandMenu from "./ui/custom-command-menu";
import axios from "axios";

/* -------------------- ZOD SCHEMA -------------------- */
const addressSchema = z.object({
  address: z.object({
    fullname: z
      .string()
      .min(3, "Full name must be at least 3 characters")
      .regex(/^[a-zA-Z\s]+$/, "Only alphabets allowed"),

    phone: z
      .string()
      .regex(/^[6-9]\d{9}$/, "Enter valid 10 digit Indian phone number"),

    house: z.string().min(1, "House number is required").max(50, "Too long"),

    street: z.string().min(3, "Street must be at least 3 characters"),

    city: z.string().min(2, "City is required"),

    state: z.string().min(2, "State is required"),

    postal_code: z.string().regex(/^\d{6}$/, "Enter valid 6 digit pincode"),

    country: z.string().optional(),
  }),
});

export default function AddressForm({ type = "create", id, callback }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control,
    setValue,
  } = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      address: {
        fullname: "",
        phone: "",
        house: "",
        street: "",
        city: "",
        state: "",
        postal_code: "",
        country: "India",
      },
    },
  });

  const selectedState = watch("address.state");
  const selectedCity = watch("address.city");

  /* -------------------- STATES -------------------- */
  const states =
    csc.State.getStatesOfCountry("IN")?.map((s) => ({
      value: s.isoCode,
      label: s.name,
    })) ?? [];

  /* -------------------- CITIES -------------------- */
  const cities = useMemo(() => {
    if (!selectedState) return [];
    return (
      csc.City.getCitiesOfState("IN", selectedState)?.map((c) => ({
        value: c.name,
        label: c.name,
      })) ?? []
    );
  }, [selectedState]);

  /* -------------------- PINCODES -------------------- */
  const {
    data: pincodeData = [],
    isLoading: isPincodeDataLoading,
    isError: isPincodeDataError,
    error: pincodeDataError,
  } = useQuery({
    queryKey: ["pincodes", selectedCity],
    enabled: !!selectedCity,
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.postalpincode.in/postoffice/${selectedCity}`
      );

      if (!data?.[0]?.PostOffice) return [];

      return Array.from(
        new Map(data[0].PostOffice.map((i) => [i.Pincode, i])).values()
      ).map((i) => ({
        value: i.Pincode,
        label: i.Pincode,
      }));
    },
  });

  const queryClient = useQueryClient();

  /* -------------------- MUTATIONS -------------------- */
  const createMutation = useMutation({
    mutationFn: postAddress,
    onSuccess: () => {
      toast.success("Address added");
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
      callback?.();
    },
    onError: handleError,
  });

  const updateMutation = useMutation({
    mutationFn: (data) => updateAddress(id, data),
    onSuccess: () => {
      toast.success("Address updated");
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
      callback?.();
    },
    onError: handleError,
  });

  /* -------------------- FETCH ADDRESS (EDIT) -------------------- */
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["addresses", id],
    queryFn: () => getAddress(id),
    enabled: !!id,
  });

  useEffect(() => {
    if (data) {
      const states = csc.State.getStatesOfCountry("IN") ?? [];
      reset({
        address: {
          ...data.address,
          state: states.find((s) => s.name === data.address.state).isoCode,
        },
      });
    }
  }, [data, reset]);

  const onSubmit = (formData) => {
    const states = csc.State.getStatesOfCountry("IN") ?? [];

    const payload = {
      ...formData,
      address: {
        ...formData.address,
        state: states.find((s) => s.isoCode === selectedState).name,
      },
    };

    type === "create"
      ? createMutation.mutate(payload)
      : updateMutation.mutate(payload);
  };

  if (type === "edit" && isLoading) return <Loader />;
  if (type === "edit" && isError)
    return error?.response?.data?.message ?? "Something went wrong";

  const isFormPending = createMutation.isPending || updateMutation.isPending;

  /* -------------------- UI -------------------- */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="rounded-xl border-none py-5">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {type === "create" ? "Add Address" : "Edit Address"}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <Input
                placeholder="Full Name"
                {...register("address.fullname")}
              />
              {errors?.address?.fullname && (
                <p className="text-sm text-red-500">
                  {errors.address.fullname.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <Input
                placeholder="Phone Number"
                {...register("address.phone")}
              />
              {errors?.address?.phone && (
                <p className="text-sm text-red-500">
                  {errors.address.phone.message}
                </p>
              )}
            </div>

            {/* House */}
            <div>
              <Input
                placeholder="House Number"
                {...register("address.house")}
              />
              {errors?.address?.house && (
                <p className="text-sm text-red-500">
                  {errors.address.house.message}
                </p>
              )}
            </div>

            {/* Street */}
            <div>
              <Input
                placeholder="Street Address"
                {...register("address.street")}
              />
              {errors?.address?.street && (
                <p className="text-sm text-red-500">
                  {errors.address.street.message}
                </p>
              )}
            </div>

            {/* State */}
            <div>
              <Label>State</Label>
              <Controller
                name="address.state"
                control={control}
                render={({ field }) => (
                  <CustomCommandMenu
                    data={states}
                    value={field.value}
                    onChange={(value) => {
                      setValue("address.city", "");
                      setValue("address.postal_code", "");
                      field.onChange(value);
                    }}
                  />
                )}
              />
              {errors?.address?.state && (
                <p className="text-sm text-red-500">
                  {errors.address.state.message}
                </p>
              )}
            </div>

            {/* City */}
            <div>
              <Label>City</Label>
              <Controller
                name="address.city"
                control={control}
                render={({ field }) => (
                  <CustomCommandMenu
                    data={cities}
                    value={field.value}
                    onChange={(value) => {
                      setValue("address.postal_code", "");
                      field.onChange(value);
                    }}
                  />
                )}
              />
              {errors?.address?.city && (
                <p className="text-sm text-red-500">
                  {errors.address.city.message}
                </p>
              )}
            </div>

            {/* Pincode */}
            <div>
              <Label>Pincode</Label>
              <Controller
                name="address.postal_code"
                control={control}
                render={({ field }) => (
                  <CustomCommandMenu
                    data={pincodeData}
                    value={field.value}
                    onChange={field.onChange}
                    isLoading={isPincodeDataLoading}
                    isError={isPincodeDataError}
                    error={pincodeDataError}
                  />
                )}
              />
              {errors?.address?.postal_code && (
                <p className="text-sm text-red-500">
                  {errors.address.postal_code.message}
                </p>
              )}
            </div>
          </div>

          <Button type="submit" disabled={isFormPending}>
            {isFormPending ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <Home />
            )}
            {type === "create" ? "Add Address" : "Update Address"}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
