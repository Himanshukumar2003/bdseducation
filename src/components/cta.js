"use client";
import React from "react";

export default function GetInTouch() {
  return (
    <section
      className="relative section mx-auto max-w-6xl px-4"
      data-aos="zoom-in"
    >
      <div
        className="relative rounded-3xl shadow-xl p-8 md:p-8 bg-no-repeat bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: "url('/images/hero-2.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-700/60 rounded-3xl"></div>

        <div className="grid md:grid-cols-3 gap-12 items-center relative z-20">
          {/* Left Content */}
          <div className="space-y-6 col-span-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
              Let’s Grow Together
            </h2>

            <p className="text-white/90 text-lg max-w-lg leading-relaxed">
              At Boost Ads, we believe in delivering advertising that works. Our
              goal isn’t just to run your ads—it’s to grow your business faster,
              smarter, and more profitably.
            </p>

            <h3 className="text-white text-xl font-semibold">
              Want to experience the power of high-converting Google Ads
              campaigns? Let’s get started.
            </h3>

            <p className="text-white/90 text-lg max-w-lg leading-relaxed">
              Contact Us Today or visit our founder’s digital academy – Digital
              Anaam Academy to explore learning opportunities in Google Ads.
            </p>

            <div>
              <a href="#" className="btn">
                Know More
                <i className="bi bi-arrow-right text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 pointer-events-none opacity-80">
          <svg
            width="900"
            height="900"
            viewBox="0 0 400 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="300"
              cy="130"
              r="120"
              fill="#ffffff"
              fillOpacity="0.15"
            />
            <circle
              cx="300"
              cy="130"
              r="90"
              fill="#ffffff"
              fillOpacity="0.12"
            />
            <circle
              cx="300"
              cy="130"
              r="60"
              fill="#ffffff"
              fillOpacity="0.08"
            />
            <circle
              cx="300"
              cy="130"
              r="30"
              fill="#ffffff"
              fillOpacity="0.06"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
