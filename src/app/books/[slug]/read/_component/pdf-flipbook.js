// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import HTMLFlipBook from "react-pageflip";
// import { pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// export default function PDFFlipbook({ pdfUrl }) {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const flipBookRef = useRef();

//   useEffect(() => {
//     const loadPdfAsImages = async () => {
//       try {
//         const pdf = await pdfjs.getDocument(pdfUrl).promise;
//         const imageArray = [];

//         for (let i = 1; i <= pdf.numPages; i++) {
//           const page = await pdf.getPage(i);
//           const viewport = page.getViewport({ scale: 1.5 });

//           const canvas = document.createElement("canvas");
//           const context = canvas.getContext("2d");
//           canvas.width = viewport.width;
//           canvas.height = viewport.height;

//           await page.render({ canvasContext: context, viewport }).promise;
//           imageArray.push(canvas.toDataURL());
//         }

//         setImages(imageArray);
//       } catch (err) {
//         console.error("PDF load error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadPdfAsImages();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-200 ">
//         Loading PDF...
//       </div>
//     );
//   }

//   return (
//     <div className=" overflow-hidden flex section flex-col items-center justify-center min-h-[70vh] bg-blue-50 p-4">
//       <HTMLFlipBook
//         width={500}
//         height={500}
//         minWidth={300}
//         maxWidth={1000}
//         maxShadowOpacity={0.5}
//         showCover={true}
//         mobileScrollSupport={true}
//         ref={flipBookRef}
//         className=" rounded-lg    object-center"
//       >
//         {images.map((src, index) => (
//           <div key={index} className="overflow-hidden">
//             <Image
//               width={2000}
//               height={2000}
//               src={src}
//               alt={`Page ${index + 1}`}
//               className="w-full h-auto lg:h-[75vh]"
//             />
//           </div>
//         ))}
//       </HTMLFlipBook>
//     </div>
//   );
// }
