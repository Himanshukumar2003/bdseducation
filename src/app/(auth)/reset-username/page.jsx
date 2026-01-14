import React, { Suspense } from "react";
import Loader from "@/components/loader";
import ForgotUsernameForm from "../forgot-username/_component/forgot-username";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<Loader />}>
      <ForgotUsernameForm type={"reset"} />
    </Suspense>
  );
}
