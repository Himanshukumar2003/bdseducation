import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export const getPackages = async (searchParams = "") => {
  const { data } = await http().get(
    `${endpoints.packages.getAll}?${searchParams}`
  );
  return data;
};
