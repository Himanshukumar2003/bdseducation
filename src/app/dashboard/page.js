"use client";

import { useState } from "react";
import { UserSidebar } from "./_components/user-sidebar";
import { DashboardOverview } from "./_components/overViwe";
import { ProfileDetails } from "./_components/profile";
import { OrdersDetails } from "./_components/order-details";
import { useSelector } from "react-redux";

const orders = [
  {
    id: "ORD-001",
    status: "delivered",
    total: 129.99,
    date: "Dec 15, 2024",
    items: 3,
    quantity: 2,
    productTitle: "Wireless Bluetooth Headphones",
    productImage: "/images/Problem-Solving-Skills-for-Students.png",
  },
  {
    id: "ORD-002",
    status: "shipped",
    total: 89.5,
    date: "Dec 18, 2024",
    items: 2,
    quantity: 1,
    productTitle: "Smart Fitness Watch",
    productImage: "/images/Problem-Solving-Skills-for-Students.png",
  },
  {
    id: "ORD-003",
    status: "processing",
    total: 199.99,
    date: "Dec 20, 2024",
    items: 1,
    quantity: 1,
    productTitle: "Gaming Mechanical Keyboard",
    productImage: "/images/Problem-Solving-Skills-for-Students.png",
  },
  {
    id: "ORD-004",
    status: "pending",
    total: 45.0,
    date: "Dec 22, 2024",
    items: 4,
    quantity: 3,
    productTitle: "USB-C Cable Set",
    productImage: "/images/Problem-Solving-Skills-for-Students.png",
  },
];

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const { user, isAuthenticated } = useSelector((state) => state.auth);

  console.log(user);
  // const orders = useSelector((state) => state.orders.items); // agar orders Redux me hain

  const handleLogout = () => {
    console.log("User logged out");
    alert("Logged out successfully!");
  };

  if (!isAuthenticated) {
    return <p className="text-center mt-20 text-xl">Please login first!</p>;
  }

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileDetails user={user} />;
      case "orders":
        return <OrdersDetails orders={orders} />;
      default:
        return <DashboardOverview user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
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
