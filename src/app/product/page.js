import { Suspense } from "react";
import ProductFillter from "./_components/search-bar";

export default function SearchPage(params) {
  return (
    <>
      <Suspense fallback="Loading...">
        <ProductFillter></ProductFillter>
      </Suspense>
    </>
  );
}
