import { RotateCcw, Phone, Mail, MapPin } from "lucide-react";
import Section from "../terms-and-conditions/_componet/section";
import { Breadcrumb } from "@/components/breadcrumb";

export default function ShippingPolicy() {
  return (
    <>
      <Breadcrumb
        title="Shipping Policy"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "Shipping Policy",
            href: "/shipping-policy",
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
            {/* HEADER */}
            <div className="bg-gradient-to-r bg-[#0053a3] px-8 py-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <RotateCcw className="w-10 h-10" />
                <h1 className="text-4xl font-bold">Shipping Policy</h1>
              </div>
              <p className="text-blue-100 text-lg">Last updated: 26 NOV 2025</p>
              <p className="mt-4 text-blue-50 leading-relaxed">
                Thank you for choosing to shop with us. We strive to ensure that
                your order reaches you safely and on time. Please read our
                Shipping Policy for complete details regarding order processing,
                timelines, and delivery.
              </p>
            </div>

            {/* SECTIONS */}
            <div className="px-8 py-10">
              <div className="prose max-w-none">
                {/* ORDER PROCESSING */}
                <Section
                  number="1"
                  title="Order Processing Time"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      All orders placed on our website are processed within 1–2
                      working days. Orders are not shipped or delivered on
                      Sundays and public holidays.
                    </p>
                  }
                />

                {/* DELIVERY TIME */}
                <Section
                  number="2"
                  title="Shipping & Delivery Time"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      The estimated delivery time for all orders is 7–10 working
                      days from the date of dispatch. Delivery timelines may
                      vary depending on your location, courier availability, and
                      external factors beyond our control.
                    </p>
                  }
                />

                {/* SHIPPING CHARGES */}
                <Section
                  number="3"
                  title="Shipping Charges"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      Shipping charges, if applicable, will be displayed at
                      checkout before you confirm your order.
                    </p>
                  }
                />

                {/* ORDER TRACKING */}
                <Section
                  number="4"
                  title="Order Tracking"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      Once your order is shipped, you will receive a tracking ID
                      on your registered email or mobile number to monitor
                      delivery status.
                    </p>
                  }
                />

                {/* DELAYS & EXCEPTIONS */}
                <Section
                  number="5"
                  title="Delays & Exceptions"
                  content={
                    <>
                      <p>
                        <b>We are not responsible for delays caused by:</b>
                      </p>
                      <ul className="space-y-3 text-gray-700 leading-relaxed">
                        <li>Courier delays or unforeseen logistics issues</li>
                        <li>Incorrect or incomplete shipping addresses</li>
                        <li>
                          Natural disruptions, strikes, or operational delays
                        </li>
                        <li>
                          If a delay occurs, our team will assist you in
                          tracking and resolving the issue with the courier
                          partner.
                        </li>
                      </ul>
                    </>
                  }
                />

                {/* DELIVERY ATTEMPTS */}
                <Section
                  number="6"
                  title="Delivery Attempts"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      Our courier partners will attempt delivery 2–3 times. If
                      the package remains undelivered, it may be returned to us.
                      In such cases, reshipping charges may apply.
                    </p>
                  }
                />

                {/* DAMAGED OR MISSING ITEMS */}
                <Section
                  number="7"
                  title="Damaged or Missing Items"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      If your order arrives damaged or items are missing, please
                      contact us within 48 hours of delivery with photos/video,
                      and our team will assist you promptly.
                    </p>
                  }
                />

                {/* CONTACT DETAILS */}
                <div className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                    Contact Details
                  </h3>
                  <div className="space-y-4">
                    <div className="text-xl font-semibold text-blue-900">
                      BDS Education
                    </div>

                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                      SCO-12, 1st Floor, Dayalbagh, Surajkund, Faridabad –
                      121009, Haryana, India.
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <a
                        href="tel:+918826730055"
                        className="hover:text-blue-600 transition"
                      >
                        +91 88267 30055
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <a
                        href="mailto:info@bdseducation.in"
                        className="hover:text-blue-600 transition"
                      >
                        info@bdseducation.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
