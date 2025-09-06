import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="flex space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
              <span className="text-xl font-semibold text-gray-800">
                FreshMart
              </span> */}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              FreshMart is the biggest market of grocery products. Get your
              daily needs from our store.
            </p>
          </div>

          {/* Category Column */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Category</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Snacks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Juice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Chips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Spices
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Sauces
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Fruit
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Legal Notice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Terms & conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Secure payment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Account</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  View Cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Become a Vendor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Affiliate Program
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm"
                >
                  Payments
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  123 Business St, Commerce City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">+1 234 567 8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  hello@freshmart.com
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-6">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 text-white rounded flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 lg:mb-0">
            Copyright © 2024 <span className="text-blue-600">FreshMart</span>{" "}
            all rights reserved.
          </div>

          {/* Payment Icons */}
          <Image
            src="/payment.png"
            width={300}
            height={40}
            alt="payment"
          ></Image>
        </div>
      </div>
    </footer>
  );
}
