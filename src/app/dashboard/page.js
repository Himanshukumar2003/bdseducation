"use client";

import { useState } from "react";
import { UserSidebar } from "./_components/user-sidebar";
import { DashboardOverview } from "./_components/overViwe";
import { ProfileDetails } from "./_components/profile";
import { OrdersDetails } from "./_components/order-details";

const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/images/Problem-Solving-Skills-for-Students.png",
  userId: "USR-12345",
  phone: "+1 (555) 123-4567",
  address: "123 Main Street, New York, NY 10001, United States",
  joinDate: "January 15, 2023",
  status: "Premium Member",
};

const mockOrders = [
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

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const handleLogout = () => {
    console.log("User logged out");
    alert("Logged out successfully!");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileDetails user={mockUser} />;
      case "orders":
        return <OrdersDetails orders={mockOrders} />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <UserSidebar
        user={mockUser}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onLogout={handleLogout}
      />

      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
}
