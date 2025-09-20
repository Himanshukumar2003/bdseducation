"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Package, LogOut, Home } from "lucide-react";

export function UserSidebar({
  user,
  activeSection,
  onSectionChange,
  onLogout,
}) {
  return (
    <div className="w-64  bg-sidebar border-r border-sidebar-border sticky top-20 flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
            />
            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold text-sidebar-foreground truncate">
              {user.name}
            </h2>
            <p className="text-sm text-muted-foreground truncate">
              {user.email}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4">
        <nav className="space-y-2">
          <Button
            variant={activeSection === null ? "default" : "ghost"}
            className="w-full justify-start gap-3"
            onClick={() => onSectionChange(null)}
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Button>
          <Button
            variant={activeSection === "profile" ? "default" : "ghost"}
            className="w-full justify-start gap-3"
            onClick={() => onSectionChange("profile")}
          >
            <User className="h-4 w-4" />
            Profile
          </Button>
          <Button
            variant={activeSection === "orders" ? "default" : "ghost"}
            className="w-full justify-start gap-3"
            onClick={() => onSectionChange("orders")}
          >
            <Package className="h-4 w-4" />
            Orders
          </Button>
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={onLogout}
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
