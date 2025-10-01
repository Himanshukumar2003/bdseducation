"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { handleLogout } from "@/providers/auth-provider";

import {
  CalendarDays,
  CreditCard,
  Crown,
  FileSliders,
  LayoutDashboard,
  LogOutIcon,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";

export default function UserDropdown({ user }) {
  const router = useRouter();
  const fallbackName = user.fullname.split(" ")[0].charAt(0);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarFallback className="border border-primary bg-primary/20 uppercase">
            {fallbackName}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64 dark:border-none" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium capitalize text-foreground">
            {user.fullname}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="dark:bg-white/8" />

        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/dashboard")}>
            <LayoutDashboard
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
