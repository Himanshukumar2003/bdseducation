import BookHero from "../_componets/hero";
import Books from "../_componets/relativeProduct";

export default async function BookPage({ params }) {
  const { slug } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BDS_API_URL}/books/get-by-slug/${slug}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  if (!data?.data) {
    return <div>Not Found</div>;
  }

  const product = data.data;

  // Fixed variable name from 'book' to 'product'
  const bookImages = product.pictures?.length
    ? product.pictures.map(
        (img) => `${process.env.NEXT_PUBLIC_BDS_FILE_BASE}${img}`
      )
    : ["/placeholder.svg"];

  // Fixed variable name from 'book' to 'product'
  const cleanContent = product.content
    ? product.content
        .replace(/<[^/>][^>]*><\/[^>]+>/g, "")
        .replace(/\s{2,}/g, " ")
        .trim()
    : "";

  return (
    <>
      <BookHero bookImages={bookImages} product={product} />
      <Books></Books>
    </>
  );
}
