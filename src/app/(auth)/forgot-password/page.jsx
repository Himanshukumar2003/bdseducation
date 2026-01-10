import React, { Suspense } from "react";
import ForgotPasswordForm from "../_component/forgot-password";

export default function ForgotPasswordPage() {
  return (
    <Suspense>
      <ForgotPasswordForm type={"forgot"} />;
    </Suspense>
  );
}
