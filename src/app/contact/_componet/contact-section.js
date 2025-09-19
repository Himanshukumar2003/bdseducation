import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
  {/* Left Content */}
  <div>
    <p className="text-lg uppercase tracking-wide text-blue-500 mb-3">
      Connect With Us
    </p>

    <h1 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-6">
      Get in Touch <br />
      With <span className="inline-flex items-center gap-2">
        Gallery Artisan <span className="text-6xl">🏛️</span>
      </span>
    </h1>

    <p className="text-gray-600 leading-relaxed mb-10">
      Gallery Artisan is here to connect! Whether you&apos;re an artist seeking
      representation, an art enthusiast with questions, or simply curious about
      our upcoming exhibitions, we&apos;d love to hear from you.
    </p>

    <div className="grid sm:grid-cols-2 gap-8 border-t pt-8">
      {/* Phone */}
      <div>
        <div className="flex items-center gap-2 text-black mb-1">
          <Phone className="w-5 h-5" />
          <span className="font-semibold">Phone</span>
        </div>
        <p className="text-lg text-gray-600">Feel free to call us directly at</p>
        <p className="text-black font-medium hover:underline cursor-pointer">
          +1 (555) 000-0000
        </p>
      </div>

      {/* Email */}
      <div>
        <div className="flex items-center gap-2 text-black mb-1">
          <Mail className="w-5 h-5" />
          <span className="font-semibold">Email</span>
        </div>
        <p className="text-lg text-gray-600">Our friendly team is here to help</p>
        <p className="text-black font-medium hover:underline cursor-pointer">
          hi@example.com
        </p>
      </div>

      {/* Address */}
      <div>
        <div className="flex items-center gap-2 text-black mb-1">
          <MapPin className="w-5 h-5" />
          <span className="font-semibold">Gallery Address</span>
        </div>
        <p className="text-lg text-gray-600">Come say hello at our gallery</p>
        <p className="text-black font-medium hover:underline cursor-pointer">
          Hüttenstr. 32 — 50623 Köln, Germany
        </p>
      </div>

      {/* Opening Hours */}
      <div>
        <div className="flex items-center gap-2 text-black mb-1">
          <Clock className="w-5 h-5" />
          <span className="font-semibold">Opening Hour</span>
        </div>
        <p className="text-lg text-gray-600">Our doors are open for exploration</p>
        <p className="text-black font-medium">8am to 5pm</p>
      </div>
    </div>
  </div>

  {/* Right Images */}
  <div  className="h-full flex flex-col   justify-center    items-center">
    <Image src="/images/product-img.png"  alt="" width={500} height={500} className="w-full   mix-blend-multiply"></Image>
     </div>
</div>


     
  
    </section>
  )
}
