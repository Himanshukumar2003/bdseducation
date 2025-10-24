"use client";

import { useState } from "react";
import { UserSidebar } from "./_components/user-sidebar";
import { ProfileDetails } from "./_components/profile";
import { OrdersDetails } from "./_components/order-details";
import { useAuth } from "@/providers/auth-provider";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/services/order-services";
import Addresses from "./_components/address-saved";
import { Sheet } from "@/components/ui/sheet";
import Loader from "@/components/loader";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("profile");

  const { user } = useAuth();
  const router = useRouter();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const orders = data?.data?.orders || [];

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileDetails user={user} />;
      case "orders":
        return <OrdersDetails orders={orders} />;
      case "address":
        return <Addresses />;
      default:
        return <ProfileDetails user={user} />;
    }
  };
  if (isLoading) {
    return <Loader />;
  }

  if (!user) {                  
    router.push("/login");
    return null;
  }

  return (
    <div className="">
      <div className="">
        <div className="flex flex-wrap bg-blue-50  gap-4 pt-5">
          <UserSidebar
            user={user}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          <div className="flex-1 ">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
