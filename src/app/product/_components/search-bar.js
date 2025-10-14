"use client";

import { useMemo, useState } from "react";
import { FilterSidebar } from "@/components/filter-sidebar";
import { useQuery } from "@tanstack/react-query";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";
import { useQueryState } from "nuqs";
import ProductCard from "@/components/product-card";
import { useSearchParams } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ProductFillter() {
  const searchParams = useSearchParams();
  const searchParamsStr = searchParams.toString();

  const [pkgTypesQ, setPkgTypesQ] = useQueryState("pkgtypes");
  const [categoriesQ, setCategoriesQ] = useQueryState("categories");
  const [packagesQ, setPackagesQ] = useQueryState("packages");
  const [productTypesQ, setProductTypesQ] = useQueryState("prdtypes");

  const { data: products, isLoading: isProductsLoading } = useQuery({
    queryKey: ["products", searchParamsStr],
    queryFn: async () => {
      const { data } = await http().get(
        `${endpoints.products.getAll}?${searchParamsStr}`
      );
      return data?.products ?? [];
    },
  });

  const { data: packages, isLoading: isPacakgesLoading } = useQuery({
    queryKey: ["packages", searchParamsStr],
    queryFn: async () => {
      const { data } = await http().get(
        `${endpoints.packages.getAll}?${searchParamsStr}`
      );
      return data?.packages ?? [];
    },
  });

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ["categories", searchParamsStr],
    queryFn: async () => {
      const { data } = await http().get(
        `${endpoints.categories.getAll}?${searchParamsStr}`
      );
      return data?.categories ?? [];
    },
  });

  const clearFilters = () => {
    setPackagesQ("");
    setCategoriesQ("");
    setPkgTypesQ("");
    setProductTypesQ("");
  };

  const isAnyFiltterActive = useMemo(() => {
    return !!categoriesQ || !!packagesQ || !!productTypesQ;
  }, [categoriesQ, packagesQ, productTypesQ]);

  return (
    <main className="container mx-auto  px-4 py-6 md:py-8">
      <div className="grid gap-6 lg:grid-cols-12">
        <aside className="   hidden col-12 lg:block  md:col-span-4 lg:col-span-3   ">
          <FilterSidebar
            title="Filter Products"
            packagesQ={packagesQ}
            categoriesQ={categoriesQ}
            packages={packages ?? []}
            categories={categories ?? []}
            onPackagesChange={setPackagesQ}
            onCategoriesChange={setCategoriesQ}
            onClear={clearFilters}
            isAnyFiltterActive={isAnyFiltterActive}
            // isProductActive={isProductActive}
            pkgTypesQ={pkgTypesQ}
            setPkgTypesQ={setPkgTypesQ}
            productTypesQ={productTypesQ}
            setProductTypesQ={setProductTypesQ}
          />
        </aside>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="flex justify-between w-full">
              <h4 className="text-xl  font-semibold pb-2 mb-4 border-b-2 border-b-gray-100 ">
                Filter Products
              </h4>
              <Menu></Menu>
            </SheetTrigger>

            <SheetContent side="left" className="w-[90%] ">
              <SheetHeader className="  overflow-y-scroll">
                <SheetTitle className={"sr-only"}>
                  Are you absolutely sure?
                </SheetTitle>
                <SheetDescription className={"sr-only"}>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
                <div>
                  <FilterSidebar
                    title="Filter Products"
                    packagesQ={packagesQ}
                    categoriesQ={categoriesQ}
                    packages={packages ?? []}
                    categories={categories ?? []}
                    onPackagesChange={setPackagesQ}
                    onCategoriesChange={setCategoriesQ}
                    onClear={clearFilters}
                    isAnyFiltterActive={isAnyFiltterActive}
                    // isProductActive={isProductActive}
                    pkgTypesQ={pkgTypesQ}
                    setPkgTypesQ={setPkgTypesQ}
                    productTypesQ={productTypesQ}
                    setProductTypesQ={setProductTypesQ}
                  />
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <section className="col-span-full col-12 md:col-span-8 lg:col-span-9">
          <section className="">
            {isProductsLoading ? (
              <p className="text-center">Loading products...</p>
            ) : products.length === 0 ? (
              <p className="text-center text-gray-500">No products found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </section>
      </div>
    </main>
  );
}
