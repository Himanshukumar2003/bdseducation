import React, { Suspense } from "react";
import Loader from "@/components/loader";
import ForgotUsernameForm from "./_component/forgot-username";

export default function ForgotUsernamePage() {
  return (
    <Suspense fallback={<Loader />}>
      <ForgotUsernameForm type={"forgot"} />
    </Suspense>
  );
}
