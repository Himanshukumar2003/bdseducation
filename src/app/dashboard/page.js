"use client";

import { useState, useEffect } from "react";
import { UserSidebar } from "./_components/user-sidebar";
import { DashboardOverview } from "./_components/overViwe";
import { ProfileDetails } from "./_components/profile";
import { OrdersDetails } from "./_components/order-details";
import { useSelector } from "react-redux";
import { useAuth } from "@/providers/auth-provider";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("ProfileDetails");
  const orders = useSelector((state) => state.orders.items);
  const { user } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, [user, router]);

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileDetails user={user} />;
      case "orders":
        return <OrdersDetails orders={orders} />;
      default:
        return <ProfileDetails user={user} />;
    }
  };

  // if (!user) {
  //   return null;
  // }

  return (
    <div className="flex bg-blue-50 pt-[140px]">
      <UserSidebar
        user={user}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
}
