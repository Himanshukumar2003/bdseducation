"use client";

import { useState } from "react";
import { UserSidebar } from "./_components/user-sidebar";
import { DashboardOverview } from "./_components/overViwe";
import { ProfileDetails } from "./_components/profile";
import { OrdersDetails } from "./_components/order-details";
import { useSelector } from "react-redux";
import { useAuth } from "@/providers/auth-provider";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("ProfileDetails");
  const orders = useSelector((state) => state.orders.items);
  const { user } = useAuth();

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileDetails user={user} />;
      case "orders":
        return <OrdersDetails orders={orders} />;
      default:
        return <ProfileDetails />;
    }
  };

  return (
    <div className="  flex bg-blue-50">
      <UserSidebar
        user={user}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
}
