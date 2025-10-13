import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export const getNavMenu = async () => {
  return await http().get(`${endpoints.packages.getAll}/nav-menu`);
};
