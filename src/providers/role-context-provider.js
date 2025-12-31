"use client";
import { allRoutes } from "@/data/routes";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useMemo } from "react";
import { AuthContext } from "./auth-provider";
import { toast } from "sonner";

export default function RoleContext({ children }) {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const { user, isUserLoading } = useContext(AuthContext);

  useEffect(() => {
    if (isUserLoading) return;
    let currRoute = pathname.replace(params.slug, ":slug");
    const protectedRoute = allRoutes.find((fr) => fr.link === currRoute);
    if (!protectedRoute) return;
    const roles = protectedRoute.roles;
    if (roles.length && !roles.includes(user?.role)) {
      toast("Unauthorized", {
        description: "Unauthorized Access!",
      });
      return router.replace("/login");
    }
  }, [user, params.id, pathname, router, isUserLoading]);

  return children;
}
