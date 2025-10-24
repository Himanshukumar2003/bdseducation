import ProductCard from "@/components/product-card";
import BookImageGallery from "../_components/hero";

export default async function BookPage({ params }) {
  const { slug } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/get-by-slug/${slug}`,
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
      <BookImageGallery bookImages={bookImages} product={product} />
      {product?.related_products && (
        <div className="section bg-blue-50">
          <div className="max-w-7xl mx-auto py-5 px-4 container">
            <h2 className=" text-start text-4xl mb-4 font-bold ">
              Product information
            </h2>

            <div className="overflow-x-auto w-full">
              <div
                className="prose lg:prose-lg max-w-7xl
      prose-headings:text-gray-900
      prose-headings:mb-3
      prose-p:text-gray-700
      prose-p:text-lg
      prose-p:m-0
      prose-ul:list-disc
      prose-ol:list-decimal
      prose-li:ml-6
      prose-li:m-0
      prose-ul:marker:text-blue-600
      prose-img:rounded-lg prose-img:m-0 prose-img:mx-auto
      prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:text-gray-600 
      prose-a:text-blue-600 hover:prose-a:underline transition-all

      /* --- Table Styling --- */
      prose-table:w-full prose-table:border prose-table:border-gray-300 prose-table:rounded-xl prose-table:shadow-md
      prose-th:bg-blue-100 prose-th:font-semibold prose-th:px-6 prose-th:py-4 prose-th:text-gray-800 prose-th:border prose-th:border-gray-300
      prose-td:px-6 prose-td:py-4 prose-td:border prose-td:border-gray-200
      prose-tr:hover:bg-blue-50
      prose-tr:nth-child(even):bg-blue-50
      prose-tr:nth-child(odd):bg-white
      prose-code:bg-blue-50 prose-code:rounded px-1 prose-code:text-red-600 prose-td:pl-4
    "
                dangerouslySetInnerHTML={{ __html: cleanContent }}
              />
            </div>
          </div>
        </div>
      )}
      {product?.related_products && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className=" mb-16  mx-auto">
              <h2 className="text-3xl   lg:text-4xl font-bold   text-start mb-6">
                Related Products
              </h2>
            </div>

            {/* {loading && <p className="text-center">Loading products...</p>}
              {error && <p className="text-center text-red-500">{error}</p>} */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {product?.related_products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
