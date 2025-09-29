"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import {
  Package,
  Calendar,
  CreditCard,
  MapPin,
  Mail,
  Phone,
  User,
  Download,
  CheckCircle,
  Receipt,
  Badge,
} from "lucide-react";
import Image from "next/image";

export default function OrderDetailsPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const orders = useSelector((state) => state.orders.items);

  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (!orderId) return;
    const foundOrder = orders.find(
      (o) => o.id.toString() === orderId.toString()
    );
    setOrder(foundOrder);
  }, [orderId, orders]);

  const handleDownloadInvoice = () => {
    alert("Invoice download demo! Implement actual PDF download here.");
  };

  if (!order) return <p className="p-6 text-red-500">Order not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 pt-[150px]">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Order #{order.id}
              </h1>
              <div className="flex items-center text-gray-600 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Placed on{" "}
                {new Date(order.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="bg-green-200 py-2 p-5 rounded-3xl">Pending</div>
              <button
                onClick={handleDownloadInvoice}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Invoice
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Package className="w-5 h-5 mr-3 text-blue-600" />
                Order Items
              </h2>
              <div className="space-y-4">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Image
                      width={200}
                      height={200}
                      src={`${process.env.NEXT_PUBLIC_FILE_BASE}${item.pictures[0]}`}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg mr-4 shadow-sm"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600">
                        ₹{item.price.toLocaleString()} each
                      </p>
                      <div className="bg-green-200 rounded-[20px]">Pending</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Receipt className="w-5 h-5 mr-3 text-blue-600" />
                Order Summary
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">
                    ₹{order.subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Estimated Taxes</span>
                  <span className="font-medium">
                    ₹{order.estimatedTaxes.toLocaleString()}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between py-2">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-bold text-blue-600">
                      ₹{order.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer & Shipping Info */}
          <div className="space-y-6">
            {/* Customer Details */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-3 text-blue-600" />
                Customer Details
              </h2>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <User className="w-4 h-4 mr-3 text-gray-400" />
                  <span>
                    {order.shipping.firstName} {order.shipping.lastName}
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="break-all">{order.shipping.email}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 mr-3 text-gray-400" />
                  <span>{order.shipping.phone || "N/A"}</span>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                Shipping Address
              </h2>
              <div className="text-gray-700 space-y-1">
                <p className="font-medium">
                  {order.shipping.firstName} {order.shipping.lastName}
                </p>
                <p>{order.shipping.address}</p>
                <p>
                  {order.shipping.city}
                  {order.shipping.state ? `, ${order.shipping.state}` : ""}
                </p>
                <p>
                  {order.shipping.country} - {order.shipping.postalCode}
                </p>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-3 text-blue-600" />
                Payment Method
              </h2>
              <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <div>
                  <p className="font-medium text-green-800">
                    {order.paymentMethod}
                  </p>
                  <p className="text-sm text-green-600">Payment completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
