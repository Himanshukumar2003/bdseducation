import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Eye, TrendingUp, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";

const statusConfig = {
  pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock },
  processing: { color: "bg-blue-100 text-blue-800", icon: Package },
  shipped: { color: "bg-purple-100 text-purple-800", icon: TrendingUp },
  delivered: { color: "bg-green-100 text-green-800", icon: CheckCircle },
};

export function OrdersDetails({ orders }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Dashboard Overview
        </h2>
        <p className="text-muted-foreground">
          Track and manage all your orders in one place.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">
                  Total Orders
                </p>
                <p className="text-2xl font-bold text-blue-900">
                  {orders.length}
                </p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-700">Delivered</p>
                <p className="text-2xl font-bold text-green-900">
                  {orders.filter((o) => o.status === "delivered").length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700">
                  In Transit
                </p>
                <p className="text-2xl font-bold text-purple-900">
                  {orders.filter((o) => o.status === "shipped").length}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-cyan-200 bg-cyan-50/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-cyan-700">Total Spent</p>
                <p className="text-2xl font-bold text-cyan-900">
                  $
                  {orders
                    .reduce((sum, order) => sum + order.total, 0)
                    .toFixed(2)}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-cyan-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-900 flex items-center gap-2">
            <Package className="h-5 w-5" />
            Recent Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => {
              const StatusIcon = statusConfig[order.status].icon;
              return (
                <div
                  key={order.id}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={order.productImage || "/placeholder.svg"}
                      alt={order.productTitle}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {order.productTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Order #{order.id}
                    </p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-muted-foreground">
                        Qty: {order.quantity}
                      </span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">
                        {order.date}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-foreground">
                      ${order.total}
                    </p>
                    <Badge
                      className={`${statusConfig[order.status].color} border-0 mt-1`}
                    >
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </Badge>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
