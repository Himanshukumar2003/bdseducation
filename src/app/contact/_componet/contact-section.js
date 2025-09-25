import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export function ContactSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <p className="text-lg uppercase tracking-wide text-blue-500 mb-3">
            Connect With Us
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-6">
            Get in Touch <br />
            With{" "}
            <span className="inline-flex items-center gap-2">
              BDS Education <span className="text-6xl">🎓</span>
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10">
            We’d love to connect with you! Whether you’re looking for course
            details, career guidance, or general inquiries, our team is here to
            assist you.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 border-t pt-8">
            {/* Phone */}
            <div>
              <div className="flex items-center gap-2 text-black mb-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Call Us</span>
              </div>
              <p className="flex gap-2 mb-1">
                <span className="font-semibold">Wasim:</span>
                <span className="text-gray-700">+91 88267 30055</span>
              </p>
              <p className="flex gap-2 mb-1">
                <span className="font-semibold">Landline:</span>
                <span className="text-gray-700">0129-4020574</span>
              </p>
              <p className="flex gap-2 mb-1">
                <span className="font-semibold">Pankaj:</span>
                <span className="text-gray-700">73039 09672</span>
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">Sydney:</span>
                <span className="text-gray-700">0061 434115929</span>
              </p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-2 text-black mb-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Email Address</span>
              </div>
              <p className="flex gap-2 mb-1">
                <span className="font-semibold">Official:</span>
                <span className="text-gray-700 hover:underline cursor-pointer">
                  nc@bdseducation.in
                </span>
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">Wasim:</span>
                <span className="text-gray-700 hover:underline cursor-pointer">
                  Wasim.khan@bdseducation.in
                </span>
              </p>
            </div>

            {/* Address */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-2 text-black mb-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Our Locations</span>
              </div>
              <p className="flex gap-2 mb-2">
                <span className="font-semibold">Dayalbagh:</span>
                <span className="text-gray-700">
                  Near St Columbus School Gate No.2, SCO-12, 1st Floor,
                  Dayalbagh, Surajkund, Faridabad – 121009
                </span>
              </p>
              <p className="flex gap-2 mb-2">
                <span className="font-semibold">Sec 14:</span>
                <span className="text-gray-700">
                  772, Sector-14, Faridabad, Haryana – 121007
                </span>
              </p>
              <p className="flex gap-2">
                <span className="font-semibold">Sydney:</span>
                <span className="text-gray-700">
                  1/25, Park Avenue, Tahmoor, NSW
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-full flex flex-col justify-center items-center">
          <Image
            src="/images/product-img.png"
            alt="BDS Education"
            width={500}
            height={500}
            className="w-full mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
