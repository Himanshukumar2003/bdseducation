"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import Books from "@/home/books";

export default function ProductsSection() {
  return (
    <>
      <Breadcrumb
        title="Books"
        backgroundImage="/img/header1.webp"
        items={[{ label: "Books", href: "/books", isCurrent: true }]}
      />
      <Books></Books>
    </>
  );
}
