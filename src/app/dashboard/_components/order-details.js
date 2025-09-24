import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      {/* Recent Orders */}
      <Card className="shadow-md hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-blue-900 flex items-center gap-2 text-lg">
            <Package className="h-5 w-5" />
            Recent Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {orders.map((order) => {
              const StatusIcon = statusConfig[order.status].icon;
              return (
                <Card
                  key={order.id}
                  className="flex flex-col overflow-hidden border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-40 w-full bg-gray-100">
                    <Image
                      src={order.productImage || "/placeholder.svg"}
                      alt={order.productTitle}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground truncate text-md">
                        {order.productTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Order #{order.id}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <span>Qty: {order.quantity}</span>
                        <span>•</span>
                        <span>{order.date}</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="font-semibold text-foreground text-lg">
                        ${order.total}
                      </p>
                      <Badge
                        className={`${statusConfig[order.status].color} border-0 text-xs flex items-center gap-1 px-2 py-1 rounded-md`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
