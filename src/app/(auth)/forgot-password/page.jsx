import React from "react";
import ForgotPasswordForm from "../_component/forgot-password";

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<Loader />}>
      <ForgotPasswordForm type={"forgot"} />{" "}
    </Suspense>
  );
}
