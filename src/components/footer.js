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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
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
                  href="/gallery"
                  className="text-white hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white hover:text-white transition-colors"
                >
                  Blogs
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
                  href="/product-two/makeblock-cyberpi-innovation-add-on-pack"
                  className="text-white"
                >
                  Makeblock CyberPi Innovation Add-on Pack
                </Link>
              </li>
              <li>
                <Link
                  href="/product-two/discover-the-best-znatok-arduino-basic"
                  className="text-white "
                >
                  Discover the Best Znatok Arduino Basic
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-white ">
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-400 mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              {/* Dayalbagh Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white">
                  Dayalbagh: Near St Columbus School Gate No.2, SCO-12, 1st
                  Floor, Dayalbagh, Surajkund, Faridabad - 121009
                </p>
              </div>

              {/* Sec 14 Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white">
                  Sec 14: 772, Sector -14, Faridabad, Haryana - 121007
                </p>
              </div>

              {/* Sydney Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white">
                  Sydney: 1/25, Park Avenue, Tahmoor, NSW
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <p className="text-sm text-white">
                  Wasim:{" "}
                  <a href="tel:+918826730055" className="underline">
                    +91 88267 30055
                  </a>
                  <br />
                  Landline:{" "}
                  <a href="tel:+911294020574" className="underline">
                    129-4020574
                  </a>
                  <br />
                  Pankaj:{" "}
                  <a href="tel:+917303909672" className="underline">
                    73039 09672
                  </a>
                  <br />
                  Sydney:{" "}
                  <a href="tel:+61434115929" className="underline">
                    0061434115929
                  </a>
                </p>
              </div>

              {/* Emails */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <p className="text-sm text-white">
                  <a href="mailto:nc@bdseducation.in" className="underline">
                    nc@bdseducation.in
                  </a>
                  <br />
                  <a
                    href="mailto:Wasim.khan@bdseducation.in"
                    className="underline"
                  >
                    Wasim.khan@bdseducation.in
                  </a>
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-4">
                <Link
                  href="https://www.facebook.com/people/BDS-Education/100063881380680/"
                  target="_blank"
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/i/flow/login?redirect_after_login=%2Fbds_connect"
                  target="_blank"
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@bdseducation6748"
                  target="_blank"
                  className="w-10 h-10 bg-slate-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/_bds.education/"
                  target="_blank"
                  className="w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/educationbds/"
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
              className="hover:underline text-white"
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
