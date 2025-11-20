"use client";

import { useParams } from "next/navigation";
// import PDFFlipbook from "./_component/pdf-flipbook";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

export default function BookPage({}) {
  const { slug } = useParams();

  // const { data } = useQuery({
  //   queryKey: ["pdf-book", slug],
  //   queryFn: async () => {
  //     const { data } = await axios(
  //       `${process.env.NEXT_PUBLIC_API_URL}/books/get-by-slug/${slug}`
  //     );
  //     return data?.data;
  //   },
  // });
  // if (!data) {
  //   return <div>Not Found</div>;
  // }

  return <h1>bds education</h1>;
}
