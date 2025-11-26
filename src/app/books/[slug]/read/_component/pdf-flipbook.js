"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import * as pdfjs from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker.entry";

export default function PDFFlipbook({ pdfUrl }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false); // 🔥 NEW STATE

  const flipBookRef = useRef(null);

  // ---------- LOAD PDF AS IMAGES ----------
  useEffect(() => {
    const loadPdfAsImages = async () => {
      try {
        const pdf = await pdfjs.getDocument(pdfUrl).promise;
        const imageArray = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1.5 });

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context, viewport }).promise;
          imageArray.push(canvas.toDataURL());
        }

        setImages(imageArray);
        setTotalPages(imageArray.length);
      } catch (err) {
        console.error("PDF load error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPdfAsImages();
  }, [pdfUrl]);

  // ---------- PAGE FLIP LISTENER ----------
  const onFlip = (e) => {
    if (typeof e?.data === "number") {
      setCurrentPage(e.data);
      return;
    }

    // fallback
    try {
      const idx = flipBookRef.current?.pageFlip()?.getCurrentPageIndex();
      if (typeof idx === "number") {
        setCurrentPage(idx);
      }
    } catch {}
  };

  // ---------- PAGINATION ----------
  const goPrev = () => {
    try {
      flipBookRef.current?.pageFlip()?.flipPrev();
    } catch (err) {
      console.warn("flipPrev issue:", err);
    }
  };

  const goNext = () => {
    try {
      flipBookRef.current?.pageFlip()?.flipNext();
    } catch (err) {
      console.warn("flipNext issue:", err);
    }
  };

  // ---------- FULLSCREEN MODE ----------
  const enterFullscreen = () => {
    const elem = document.getElementById("flipbook-container");
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      enterFullscreen();
      setIsFullscreen(true);
    } else {
      exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // ---------- LOADING ----------
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        Loading PDF...
      </div>
    );
  }

  // ---------- MAIN UI ----------
  return (
    <div
      id="flipbook-container"
      className="overflow-hidden flex flex-col items-center justify-center bg-blue-50 p-4"
    >
      <HTMLFlipBook
        width={500}
        height={700}
        minWidth={300}
        maxWidth={1000}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        ref={flipBookRef}
        className="rounded-lg object-center"
        onFlip={onFlip}
      >
        {images.map((src, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              width={2000}
              height={2000}
              src={src}
              alt={`Page ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </HTMLFlipBook>

      {/* FULLSCREEN BUTTON */}
      <button
        onClick={toggleFullscreen}
        className="px-5 py-2 bg-green-600 text-white rounded mt-4 hover:bg-green-700"
      >
        {isFullscreen ? "Back" : "Full Preview"}
      </button>

      {/* PAGINATION */}
      <div className="flex items-center gap-6 mt-6">
        <button onClick={goPrev} className="btn">
          Prev
        </button>
        <span className="font-semibold text-lg">
          {currentPage + 1} / {totalPages}
        </span>
        <button onClick={goNext} className="btn">
          Next
        </button>
      </div>
    </div>
  );
}
