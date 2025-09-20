import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MapPin, Calendar, Phone, BadgeUser } from "lucide-react";

export function ProfileDetails({ user }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold mb-2 text-blue-900">
          Profile Details
        </h2>
        <p className="text-muted-foreground">
          Manage your personal information and account settings.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card className="border flex h-100 justify-items-center items-center shadow-sm rounded-xl bg-gradient-to-b from-blue-50 to-white ">
          <div className="flex flex-col items-center justify-center w-100  text-center h-100">
            <Avatar className="h-24 w-24 mb-4 shadow-md ring-2 ring-blue-200">
              <AvatarImage
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
              />
              <AvatarFallback className="bg-blue-100 text-blue-700 text-xl">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-blue-900 text-xl">{user.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </Card>

        {/* Details */}
        <Card className="lg:col-span-2 border shadow-sm rounded-xl">
          <CardContent className="space-y-6 py-8 px-6">
            {/* Grid Info */}
            <CardTitle className="text-blue-900">
              Personal & Account Details
            </CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">Full Name</span>
                <p className="font-semibold text-lg text-foreground">
                  {user.name}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">User ID</span>
                <p className="font-semibold text-lg text-blue-800">
                  {user.userId}
                </p>
              </div>
              <hr></hr>
              <hr></hr>
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Mail className="h-4 w-4" /> Email Address
                </span>
                <p className="font-medium text-foreground">{user.email}</p>
              </div>
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Phone className="h-4 w-4" /> Phone Number
                </span>
                <p className="font-medium text-blue-800">{user.phone}</p>
              </div>
              <hr></hr>
              <hr></hr>
            </div>

            {/* Address & Join Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-4 w-4" /> Address
                </span>
                <p className="font-medium text-foreground">{user.address}</p>
              </div>
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> Member Since
                </span>
                <p className="font-medium text-foreground">{user.joinDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
