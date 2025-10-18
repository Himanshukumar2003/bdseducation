import { endpoints } from "@/utils/endpoints";
import http from "@/utils/http";

export const getBooks = async () => {
  return await http().get(`${endpoints.books.getAll}/books`);
};
