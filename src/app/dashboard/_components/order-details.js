"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Shadcn utility
import Link from "next/link";

const statusMap = {
  completed: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  cancelled: "bg-red-100 text-red-700",
};

const ORDERS_PER_PAGE = 5;

export function OrdersDetails({ orders }) {
  console.log(orders);
  const [page, setPage] = useState(1);

  if (!orders || orders.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg mt-10">
        No orders yet.
      </div>
    );
  }

  const allItems = orders.flatMap((order) =>
    order.items.map((item) => ({
      ...item,
      orderId: order.id,
      date: order.date,
      shipping: order.shipping,
      paymentMethod: order.paymentMethod,
    }))
  );

  const pageCount = Math.ceil(allItems.length / ORDERS_PER_PAGE);
  const paginatedItems = allItems.slice(
    (page - 1) * ORDERS_PER_PAGE,
    page * ORDERS_PER_PAGE
  );

  return (
    <div className=" bg-white shadow rounded-xl overflow-auto pt-[120px]">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">All Orders</h2>

      <table className="min-w-full text-sm text-left">
        <thead className="bg-blue-50 text-gray-600 uppercase text-xs border-b">
          <tr>
            <th className="px-6 py-3">Order #</th>
            <th className="px-6 py-3">Product</th>
            <th className="px-6 py-3">Country</th>
            <th className="px-6 py-3">City</th>
            <th className="px-6 py-3">Address</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-4 py-2">Payment</th>
          </tr>
        </thead>

        <tbody className="divide-y text-gray-700">
          {paginatedItems.map((product, index) => (
            <tr
              key={`${product.orderId}-${index}`}
              className="hover:bg-blue-50 transition"
            >
              <td className="px-6 py-4 font-medium text-gray-800">
                <Link
                  href={{
                    pathname: `/dashboard/orders/${product.orderId}`,
                    query: { orderId: product.orderId },
                  }}
                  passHref
                >
                  <span className="hover:underline text-blue-600 cursor-pointer">
                    #{product.orderId}
                  </span>
                </Link>
              </td>

              <td className="px-6 py-4 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded overflow-hidden border bg-blue-50">
                  <Image
                    src={
                      product?.pictures?.[0]
                        ? `${process.env.NEXT_PUBLIC_FILE_BASE}${product.pictures[0]}`
                        : "/placeholder.svg"
                    }
                    alt={product?.title || "Product"}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span>{product?.title}</span>
                  <span className="text-xs text-gray-500">
                    Qty: {product?.quantity}
                  </span>
                </div>
              </td>

              <td className="px-6 py-4">{product.shipping?.country}</td>
              <td className="px-6 py-4">{product.shipping?.city}</td>
              <td className="px-6 py-4">{product.shipping?.address}</td>
              <td className="px-6 py-4">
                {new Date(product.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 font-semibold">
                ₹{(product.price * product.quantity).toFixed(2)}
              </td>

              <td className="px-6 py-4">
                <Badge
                  className={cn(
                    "text-xs font-medium px-2.5 py-1 rounded-full",
                    statusMap[product?.status || "pending"]
                  )}
                >
                  {product?.status
                    ? product.status.charAt(0).toUpperCase() +
                      product.status.slice(1)
                    : "Pending"}
                </Badge>
              </td>
              <td className="px-4 py-2 font-medium text-gray-800">
                <span className="text-black"> {product.paymentMethod}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {pageCount > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          {[...Array(pageCount)].map((_, i) => (
            <Button
              key={i}
              size="sm"
              variant={page === i + 1 ? "default" : "outline"}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.min(p + 1, pageCount))}
            disabled={page === pageCount}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
