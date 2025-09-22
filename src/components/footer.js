import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-white px-6 py-12 mt-0 bg-gradient-to-b from-[#30338B] to-[#505BDD]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-white.png"
                alt="BDS Education Logo"
                width={200}
                height={200}
                className="w-[150px] md:w-[200px] scale-105"
              />
            </div>
            <h5 className="font-medium text-white mb-3">
              BDS Education – Empowering Schools & Colleges
            </h5>
            <p className="text-sm text-white mb-4 leading-relaxed">
              BDS Education helps schools and colleges establish modern skill
              development labs in coding, AI, and robotics. We provide
              class-wise books, teacher training, online support, and access to
              a rich library of projects and competitions.
            </p>
            <p className="text-sm text-white leading-relaxed">
              With a mission to support NEP 2020, our products cover a wide
              grade span (class 1 to college) and include 3-in-1 software
              solutions for Scratch, Python, and Arduino C.
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className="text-white hover:text-white transition-colors"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/teacher-guide"
                  className="text-white hover:text-white transition-colors"
                >
                  Teacher Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-white hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products / Solutions Section */}

          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">
              Our Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product/makeblock-mbot" className="text-white ">
                  Makeblock mBot
                </Link>
              </li>
              <li>
                <Link
                  href="/product/makeblock-codey-rocky"
                  className="text-white "
                >
                  Makeblock Codey Rocky
                </Link>
              </li>
              <li>
                <Link
                  href="/product/codey-rocky-and-neuron-education-kit"
                  className="text-white "
                >
                  Codey Rocky & Neuron Education Kit
                </Link>
              </li>
              <li>
                <Link
                  href="/products/cyberpi-pack"
                  className="text-white hover:text-orange-400"
                >
                  Makeblock CyberPi Innovation Add-on Pack
                </Link>
              </li>
              <li>
                <Link
                  href="/products/znatok-arduino-basic"
                  className="text-white hover:text-orange-400"
                >
                  Discover the Best Znatok Arduino Basic
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white hover:text-orange-400 font-medium"
                >
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white">
                  BDS Education Pvt. Ltd.
                  <br />
                  India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <p className="text-sm text-white">+91 9319714345</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <p className="text-sm text-white">nc@bdseducation.in</p>
              </div>

              <div className="flex gap-3 mt-4">
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.youtube.com"
                  target="_blank"
                  className="w-10 h-10 bg-slate-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  className="w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t  pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white text-center">
            © {new Date().getFullYear()} BDS Education | Designed & Developed
            by{" "}
            <a
              href="https://brandingwaale.com/"
              target="_blank"
              className="hover:underline"
            >
              Brandingwaale Webtech
            </a>
          </p>

          <div className="flex items-center gap-2">
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">VISA</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              </div>
            </div>

            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-purple-600 font-bold text-xs">Skrill</span>
            </div>

            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">VISA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
