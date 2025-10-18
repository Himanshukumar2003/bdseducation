"use client";

import Loader from "@/components/loader";
import ProductCard from "@/components/product-card";
import { getPackages } from "@/services/pkg";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function RelatedProducts({ title }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => getPackages(`pkgtypes=atl`),
  });

  if (isLoading) return <Loader />;
  if (isError) return <div>{error?.message ?? "Something went wrong"}</div>;

  const packages = data?.packages || [];

  const filteredProducts = packages.filter((pkg) => pkg.title !== title);

  return (
    <div className="section">
      <div className="container max-w-7xl mx-auto">
        <div className=" mb-4 max-w-[600px] ">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Related Packages
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} type="package" />
          ))}
        </div>
      </div>
    </div>
  );
}
