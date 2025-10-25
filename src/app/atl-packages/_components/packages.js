"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import Loader from "@/components/loader";
import ProductCard from "@/components/product-card";
import { getPackages } from "@/services/pkg";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Packages({ type }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["packages", type],
    queryFn: async () => getPackages(`pkgtypes=${type}`),
    enabled: !!type,
  });

  if (isLoading) return <Loader />;
  if (isError) return error?.message ?? "error";

  return (
    <>
      <Breadcrumb
        title="ATL Packages"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "atl-packages",
            href: "/atl-packages",
            isCurrent: true,
          },
        ]}
      />
      <div className="section">
        <div className="  container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4">
            {data.packages.map((product) => (
              <ProductCard key={product.id} product={product} type="package" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
