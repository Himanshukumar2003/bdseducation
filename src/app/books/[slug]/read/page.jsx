"use client";

import { useParams } from "next/navigation";
import PDFFlipbook from "./_component/pdf-flipbook";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function BookPage() {
  const { slug } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["pdf-book", slug],
    queryFn: async () => {
      const { data } = await axios(
        `${process.env.NEXT_PUBLIC_BDS_API_URL}/books/get-by-slug/${slug}`
      );
      return data?.data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error loading book
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Not Found
      </div>
    );
  }

  // FIX: Build the absolute PDF URL
  const pdfPath = data.book_pdf?.[0];
  const pdfUrl = pdfPath
    ? `${process.env.NEXT_PUBLIC_BDS_FILE_BASE}${pdfPath}`
    : null;

  if (!pdfUrl) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        No PDF available
      </div>
    );
  }

  return <PDFFlipbook pdfUrl={pdfUrl} />;
}
