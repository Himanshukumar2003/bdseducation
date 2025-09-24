"use client";
import { allRoutes } from "@/data/routes";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useMemo } from "react";
import { AuthContext } from "./auth-provider";

export default function RoleContext({ children }) {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const { user, isUserLoading } = useContext(AuthContext);

  const protectedRoutes = useMemo(() => {
    const mainRoutes = allRoutes.map((data) => ({
      url: data.link,
      roles: data.roles,
    }));

    return [...mainRoutes];
  }, []);

  useEffect(() => {
    if (isUserLoading) return;

    if (!user) {
      router.replace("/");
      return;
    }

    const currRoute = pathname.replace(params.id || "", ":slug");
    const protectedRoute = protectedRoutes.find((route) => {
      const routePattern = route.url.split("?")[0];
      return routePattern === currRoute;
    });

    console.log({ protectedRoutes, currRoute, protectedRoute });

    if (!protectedRoute) return;

    const hasPermission = protectedRoute.roles.includes(user.role);

    if (!hasPermission) {
      router.replace("/unauthorized");
    }
  }, [user, params.id, pathname, router, isUserLoading, protectedRoutes]);

  return children;
}
