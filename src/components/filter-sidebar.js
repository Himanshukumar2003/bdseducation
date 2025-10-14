"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Filter, Tag, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export function FilterSidebar({
  title,
  packages = [],
  categories = [],
  onPackagesChange,
  onCategoriesChange,
  onClear,
  packagesQ = "",
  categoriesQ = "",
  isAnyFiltterActive,
  pkgTypesQ,
  setPkgTypesQ,
  productTypesQ,
  setProductTypesQ,
}) {
  console.log({ productTypesQ });
  return (
    <div className="rounded-xl border bg-card p-4 md:p-5 sticky top-20">
      {/* Title */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-2 h-0.5 w-16 bg-primary" />
      </div>

      {/* Clear Filters Button */}
      {isAnyFiltterActive && (
        <div className="mt-4">
          <Button
            variant="outline"
            onClick={onClear}
            className={cn(
              "w-full justify-center border-destructive text-destructive",
              "hover:bg-destructive/10"
            )}
            aria-label="Clear all filters"
          >
            <XCircle className="mr-2 h-4 w-4" aria-hidden />
            Clear Filters
          </Button>
        </div>
      )}

      <Separator className="my-4" />

      {/* Accordion Sections */}
      <div className="text-xl w-full font-semibold pb-2 mb-4 border-b-2 border-b-gray-100 ">
        Packages Types
      </div>
      <Accordion
        type="multiple"
        defaultValue={["packages", "categories"]}
        className="space-y-2"
      >
        <div className="flex w-full items-center gap-6 mb-6">
          {[
            { label: "ATL", value: "atl" },
            { label: "NON-ATL", value: "non-atl" },
          ].map(({ label, value }) => (
            <div
              key={value}
              className="relative w-full flex cursor-pointer flex-col gap-4 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50"
            >
              <div className="flex  justify-between gap-2">
                <Checkbox
                  id={value}
                  value={value}
                  className="order-1 after:absolute after:inset-0"
                  // defaultChecked={item.defaultChecked}
                  checked={pkgTypesQ?.split(".").includes(value)}
                  onCheckedChange={(checked) => {
                    const current = pkgTypesQ?.split(".") ?? [];
                    const updated = checked
                      ? [...current, value]
                      : current.filter((v) => v !== value);
                    setPkgTypesQ(updated.filter(Boolean).join("."));
                    onPackagesChange("");
                    onCategoriesChange("");
                  }}
                />
                {/* <item.icon className="opacity-60" size={16} aria-hidden="true" /> */}
                <Label htmlFor={value}>{label}</Label>
              </div>
            </div>
          ))}
        </div>

        <AccordionItem value="packages" className="border-none mt-4">
          <AccordionTrigger className="rounded-lg px-2 py-2 hover:bg-accent">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-primary" aria-hidden />
              <span className="text-xl font-semibold">Packages</span>
            </div>
          </AccordionTrigger>

          <AccordionContent className="pt-1">
            <div className="space-y-3">
              {packages.map((pkg) => {
                const packagesArr = packagesQ ? packagesQ.split(".") : [];
                const isChecked = packagesArr.includes(pkg.id);

                return (
                  <RowToggle
                    key={pkg.id}
                    label={pkg.title}
                    checked={isChecked}
                    onCheckedChange={(v) => {
                      let updated;
                      if (v) {
                        updated = [...packagesArr, pkg.id];
                      } else {
                        updated = packagesArr.filter((id) => id !== pkg.id);
                      }
                      onPackagesChange(updated.join("."));
                    }}
                  />
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Categories Section */}

        {packagesQ && (
          <AccordionItem value="categories" className="border-none">
            <AccordionTrigger className="rounded-lg px-2 py-2 hover:bg-accent">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-primary" aria-hidden />
                <span className="text-xl font-semibold">Categories</span>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pt-1">
              <div className="space-y-3">
                {categories.map((cat) => {
                  const categoriesArr = categoriesQ
                    ? categoriesQ.split(".")
                    : [];
                  const isChecked = categoriesArr.includes(cat.id);

                  return (
                    <RowToggle
                      key={cat.id}
                      label={cat.title}
                      checked={isChecked}
                      onCheckedChange={(v) => {
                        let updated;
                        if (v) {
                          updated = [...categoriesArr, cat.id];
                        } else {
                          updated = categoriesArr.filter((id) => id !== cat.id);
                        }
                        onCategoriesChange(updated.join("."));
                      }}
                    />
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>

      {categoriesQ && (
        <>
          <div className="flex items-center gap-2 mb-4">
            <Tag className="h-4 w-4 text-primary" aria-hidden />
            <span className="text-xl font-semibold">Product Types</span>
          </div>
          <div className="flex items-center gap-6 mb-6">
            {[
              { label: "Consumable", value: "consumable" },
              { label: "Equipment", value: "equipment" },
            ].map(({ label, value }) => (
              <div
                key={value}
                className="relative flex cursor-pointer flex-col gap-4 rounded-md border border-input p-4 shadow-xs outline-none has-data-[state=checked]:border-primary/50"
              >
                <div className="flex justify-between gap-2">
                  <Checkbox
                    id={value}
                    value={value}
                    className="order-1 after:absolute after:inset-0"
                    // defaultChecked={item.defaultChecked}
                    checked={productTypesQ?.split(".").includes(value)}
                    onCheckedChange={(checked) => {
                      const current = productTypesQ?.split(".") ?? [];
                      const updated = checked
                        ? [...current, value]
                        : current.filter((v) => v !== value);
                      setProductTypesQ(updated.filter(Boolean).join("."));
                    }}
                  />
                  {/* <item.icon className="opacity-60" size={16} aria-hidden="true" /> */}
                  <Label htmlFor={value}>{label}</Label>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function RowToggle({ label, checked, onCheckedChange }) {
  return (
    <div className="flex items-center justify-between rounded-lg px-2 py-1">
      <span className="text-base text-foreground">{label}</span>
      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
        aria-label={label}
      />
    </div>
  );
}
