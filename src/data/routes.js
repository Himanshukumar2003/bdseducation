import { User } from "lucide-react";

const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

export const allRoutes = [
  {
    link: "/",
    roles: [],
  },
  {
    link: "/about",
    roles: [],
  },
  {
    link: "/contact",
    roles: [],
  },
  {
    link: "/blog",
    roles: [],
  },
  {
    link: "/blog-page",
    roles: [],
  },
  {
    link: "/books",
    roles: [],
  },
  {
    link: "/books/:slug",
    roles: [],
  },
  {
    link: "/checkout",
    roles: [],
  },
  {
    link: "/gallery",
    roles: [],
  },
  {
    link: "/product",
    roles: [],
  },
  {
    link: "/product/:slug",
    roles: [],
  },
  {
    link: "/product-two/:slug",
    roles: [],
  },
  {
    label: "Profile",
    link: "/dashboard",
    roles: [ROLES.USER],
    icon: User,
  },
];
