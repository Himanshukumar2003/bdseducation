import React, { Suspense } from "react";
import InvoiceGenerator from "./_component/InvoiceGenerator";

export default function InvoicePage() {
  return (
    <Suspense fallback={"Loading..."}>
      <InvoiceGenerator />
    </Suspense>
  );
}
