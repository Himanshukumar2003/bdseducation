import BookImageGallery from "@/app/product-two/_componets/hero";

export default async function BookPage({ params }) {
  const { slug } = await params;

  const response = await fetch(
    `https://bdsapi.bwdemo.in/v1/books/get-by-slug/${slug}`,
    { cache: "no-store" }
  );
  const data = await response.json();

  console.log(data);

  if (!data?.data) {
    return <div>Not Found</div>;
  }

  const product = data.data;

  // Fixed variable name from 'book' to 'product'
  const bookImages = product.pictures?.length
    ? product.pictures.map(
        (img) => `${process.env.NEXT_PUBLIC_FILE_BASE}${img}`
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
      <div className="max-w-7xl mx-auto px-6 py-12">
        <BookImageGallery bookImages={bookImages} product={product} />
      </div>
    </>
  );
}
