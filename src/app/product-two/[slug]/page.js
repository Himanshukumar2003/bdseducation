import BookImageGallery from "../_componets/hero";

export default async function BookPage({ params }) {
  const { slug } = await params;

  const response = await fetch(
    `https://bdsapi.bwdemo.in/v1/books/get-by-slug/${slug}`,
    { cache: "no-store" }
  );
  const data = await response.json();

  console.log(data)

  if (!data?.data) {
    return <div>Not Found</div>;
  }

  const product = data.data;
  
  // Fixed variable name from 'book' to 'product'
  const bookImages = product.pictures?.length
    ? product.pictures.map((img) => `${process.env.NEXT_PUBLIC_FILE_BASE_URL}${img}`):["/placeholder.svg"];

  // Fixed variable name from 'book' to 'product'  
  const cleanContent = product.content
    ? product.content.replace(/<[^/>][^>]*><\/[^>]+>/g, "").replace(/\s{2,}/g, " ").trim()
    : "";


    

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12">
         <BookImageGallery bookImages={bookImages} product={product} /> 
      </div>
      
      <div className="section bg-gray-100">
        <div className="max-w-7xl mx-auto py-5 px-4 container">
          <h2 className="text-left text-5xl text-blue-500 mb-4 font-bold">
            Product information
          </h2>
          
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
    prose-table:w-full prose-table:border  prose-table:border-gray-300 prose-table:rounded-xl prose-table:shadow-md
    prose-th:bg-blue-100 prose-th:font-semibold prose-th:px-6 prose-th:py-4 prose-th:text-gray-800 prose-th:border prose-th:border-gray-300
    prose-td:px-6 prose-td:py-4 prose-td:border prose-td:border-gray-200
    prose-tr:hover:bg-gray-50
    prose-tr:nth-child(even):bg-gray-50
    prose-tr:nth-child(odd):bg-white
    prose-code:bg-gray-100 prose-code:rounded px-1 prose-code:text-red-600 prose-td:pl-4
  "
  dangerouslySetInnerHTML={{ __html: cleanContent }}
/>

        </div>
      </div>
    </>
  );
}