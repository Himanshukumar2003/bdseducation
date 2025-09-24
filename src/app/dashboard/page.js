"use client";

import { useState } from "react";
import { UserSidebar } from "./_components/user-sidebar";
import { DashboardOverview } from "./_components/overViwe";
import { ProfileDetails } from "./_components/profile";
import { OrdersDetails } from "./_components/order-details";
import { useSelector } from "react-redux";
import { useAuth } from "@/providers/auth-provider";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const orders = useSelector((state) => state.orders.items);
  console.log("order", orders);
  const { user } = useAuth();

  console.log(user);

  // const orders = useSelector((state) => state.orders.items); // agar orders Redux me hain

  const handleLogout = () => {
    console.log("User logged out");
    alert("Logged out successfully!");
  };

  // if (!isAuthenticated) {
  //   return <p className="text-center mt-20 text-xl">Please login first!</p>;
  // }

  const renderContent = () => {
    switch (activeSection) {
      // case "profile":
      //   return <ProfileDetails user={user} />;
      case "orders":
        return <OrdersDetails orders={orders} />;
      default:
        return <ProfileDetails />;
    }
  };

  return (
    <div className=" bg-background flex">
      <UserSidebar
        user={user}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onLogout={handleLogout}
      />
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
}
