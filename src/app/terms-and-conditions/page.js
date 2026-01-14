import {
  FileText,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  CheckCheck,
} from "lucide-react";
import Section from "./_componet/section";
import { Breadcrumb } from "@/components/breadcrumb";

export default function App() {
  return (
    <>
      <Breadcrumb
        title="Terms & Conditions
"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "Terms & Conditions",
            href: "/terms-and-Conditions",
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
            {/* Header */}
            <div className="bg-[#0053a3] px-8 py-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-10 h-10" />
                <h1 className="text-4xl font-bold">Terms & Conditions</h1>
              </div>
              <p className="text-blue-100 text-lg">Last updated: 19-Nov-2025</p>
              <p className="mt-4 text-blue-50 leading-relaxed">
                Please read these Terms & Conditions (“Terms”) carefully before
                using the Site and/or purchasing any products from BDS
                Education. These Terms govern your access to and use of the Site
                and your purchase of products or services.
              </p>
            </div>

            {/* Body Sections */}
            <div className="px-8 py-10">
              <div className="prose max-w-none">
                <Section
                  number="1"
                  title="Acceptance of Terms"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      By accessing or using the Site (
                      <a
                        href="https://www.bdseducation.in"
                        className="text-blue-600 font-medium underline"
                        target="_blank"
                      >
                        https://www.bdseducation.in
                      </a>
                      ) and/or purchasing any products, you acknowledge that you
                      have read, understood and agree to be bound by these Terms
                      and by our Privacy Policy and Return & Refund Policy.
                    </p>
                  }
                />

                <Section
                  number="2"
                  title="Eligibility"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      You represent and warrant that you are of legal age to
                      form a binding contract and that you are not barred from
                      using the Site under applicable law. If you are using the
                      Site or purchasing products on behalf of an institution
                      (school, college, training centre, distributor), you
                      represent that you have authority to bind that entity.
                    </p>
                  }
                />

                <Section
                  number="3"
                  title="Product Orders & Payments"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {[
                        "All orders placed through the Site or through authorised offline channels are subject to acceptance by BDS Education. We may refuse or cancel orders due to unavailability, pricing errors, or payment issues.",
                        "Prices, availability and shipping may vary and may be updated without notice.",
                        "Payment must be made in full before shipment unless otherwise agreed. We accept the payment methods listed on the Site.",
                        "You must provide accurate billing, shipping, and contact information. We are not liable for delays caused by incorrect information.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />

                <Section
                  number="4"
                  title="Shipping & Delivery"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {[
                        "	We will make commercially reasonable efforts to deliver the products within the estimated timeframe. However, delivery dates are estimates only and subject to delays (especially for custom/large-lab orders).",
                        "Risk of loss and title pass to you upon our delivery to the carrier (for shipped products) or upon installation/hand-over if applicable.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />

                <Section
                  number="5"
                  title="Use of Products & Training"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {[
                        "	Products (kits, books, software) are sold for educational/institutional use only pursuant to the licence and instructions provided. You agree to follow all manuals, safety instructions and usage guidelines.",
                        "	Any training services, teacher training, software licences, or online resources are subject to the terms of the specific licence agreement provided to you.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />

                <Section
                  number="6"
                  title="Intellectual Property"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {[
                        "	All intellectual property rights, including copyrights, trademarks, designs, patents, in the Site, the content, products, and materials provided by BDS Education remain the property of BDS Education or its licensors.",
                        "	You shall not copy, reproduce, republish, upload, post, transmit or distribute any part of the Site or products (including manuals, software, kits instructions) without prior written consent.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />

                <Section
                  number="7"
                  title="Limitation of Liability & Disclaimer"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {[
                        "	OUR PRODUCTS AND SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, BDS EDUCATION DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
                        "	IN NO EVENT SHALL BDS EDUCATION OR ITS DIRECTORS, EMPLOYEES OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE OR PRODUCTS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR MAXIMUM AGGREGATE LIABILITY FOR ANY CLAIM ARISING SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE PRODUCT OR SERVICE.",
                        "•	Some jurisdictions do not allow exclusion of certain warranties or limitation of liability; in such cases, our liability will be limited to the greatest extent permitted by law.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />

                <Section
                  number="8"
                  title="Governing Law & Dispute Resolution"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {[
                        "	These Terms, and any purchase or use of the products, shall be governed by and construed in accordance with the laws of India and the courts at Faridabad, Haryana shall have exclusive jurisdiction.",
                        "	Any dispute arising out of or relating to these Terms shall first be attempted to be resolved by negotiation in good faith. If the dispute is not resolved within 30 days, either party may refer the dispute to the courts.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />

                <Section
                  number="9"
                  title="Modifications to Terms"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      We reserve the right to change or modify these Terms at
                      any time. The updated Terms will be posted on the Site
                      with a “Last updated” date. Your continued use of the Site
                      or purchase of products following the posting of changes
                      constitutes your acceptance of those changes.
                    </p>
                  }
                />

                <Section
                  number="10"
                  title="Severability & Waiver"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      If any provision of these Terms is held to be invalid or
                      unenforceable, that provision shall be struck and the
                      remaining provisions shall remain in full force and
                      effect. The failure of BDS Education to enforce any right
                      or provision under these Terms shall not constitute a
                      waiver of such right or provision.
                    </p>
                  }
                />

                <Section
                  number="11"
                  title="Entire Agreement"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      These Terms (together with the Privacy Policy and Return &
                      Refund Policy) constitute the entire agreement between you
                      and BDS Education relating to the Site and your purchase
                      of products and supersede all prior or contemporaneous
                      written or oral agreements.
                    </p>
                  }
                />

                {/* Contact Section */}
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
