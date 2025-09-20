"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/lib/povider";
import CartSidebar from "@/components/ui/cart-sidebar";
import SmoothScrollProvider from "@/providers/smooth-scroll-provider";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const path = usePathname();
  const pathName = ["/dashboard", "/login", "/signup"];
  if (pathName.includes(path)) return children;

  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer />
      <CartSidebar></CartSidebar>
    </>
  );
}
