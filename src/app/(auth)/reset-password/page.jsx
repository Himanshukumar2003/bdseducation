import React from "react";
import ForgotPasswordForm from "../_component/forgot-password";
import Loader from "@/components/loader";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<Loader />}>
      <ForgotPasswordForm type={"reset"} />
    </Suspense>
  );
}
