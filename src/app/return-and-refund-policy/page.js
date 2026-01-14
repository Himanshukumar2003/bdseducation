import {
  RotateCcw,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Section from "../terms-and-conditions/_componet/section";
import { Breadcrumb } from "@/components/breadcrumb";

export default function ReturnRefundPolicy() {
  return (
    <>
      <Breadcrumb
        title="Return & Refund Policy"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "Return & Refund Policy",
            href: "/return-and-refund-policy",
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
            {/* HEADER */}
            <div className="bg-gradient-to-r bg-[#0053a3]  px-8 py-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <RotateCcw className="w-10 h-10" />
                <h1 className="text-4xl font-bold">Return & Refund Policy</h1>
              </div>
              <p className="text-blue-100 text-lg">Last updated: 19 NOV 2025</p>
              <p className="mt-4 text-blue-50 leading-relaxed">
                This Return & Refund Policy governs returns and refunds for
                purchases of products via the Site.
              </p>
            </div>

            {/* SECTIONS */}
            <div className="px-8 py-10">
              <div className="prose max-w-none">
                <Section
                  number="1"
                  title="Scope"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      This policy applies to physical products (kits, books,
                      lab-equipment) purchased from the Site by registered
                      institutions, distributors, or individual customers.
                    </p>
                  }
                />

                <Section
                  number="2"
                  title="Return Eligibility"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      <li className="flex gap-3">
                        <div>
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                        </div>
                        <span>
                          Returns are accepted only if the product is unused,
                          unopened, in its original packaging and condition,
                          with all accessories, manuals and free materials
                          included.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <div>
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                        </div>
                        <span>
                          Returns must be requested within 7 calendar days from
                          the date of delivery (unless otherwise agreed).
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          To initiate a return, you must contact us at +91 88267
                          30055 or email nc@bdseducation.in with your order
                          number, reason for return, and supporting photographs
                          (if required).
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          You must obtain a Return Merchandise Authorization
                          (RMA) number from us before sending the product back.
                          Returns sent without RMA may be refused.
                        </span>
                      </li>
                    </ul>
                  }
                />

                <Section
                  number="3"
                  title="Non-Returnable Items"
                  content={
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Certain items are not eligible for return:
                      </p>

                      <ul className="space-y-3 text-gray-700 leading-relaxed">
                        <li className="flex gap-3">
                          <AlertCircle className="text-lg text-amber-600 mt-0.5" />
                          <span>
                            Products that have been opened, used, assembled, or
                            show signs of damage or misuse.
                          </span>
                        </li>

                        <li className="flex gap-3">
                          <AlertCircle className="text-lg text-amber-600 mt-0.5" />
                          <span>
                            Customised or specially ordered kits or
                            lab-equipment tailored to a client’s requirements.
                          </span>
                        </li>

                        <li className="flex gap-3">
                          <AlertCircle className="text-lg text-amber-600 mt-0.5" />
                          <span>
                            Items purchased as part of a bundle if the bundle
                            requirement has been partially fulfilled or
                            consumed.
                          </span>
                        </li>

                        <li className="flex gap-3">
                          <AlertCircle className="text-lg text-amber-600 mt-0.5" />
                          <span>
                            Digital-only items (software licences, code
                            libraries) once the download or activation has been
                            provided.
                          </span>
                        </li>
                      </ul>
                    </div>
                  }
                />

                <Section
                  number="4"
                  title="Refunds"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          If a return is approved, we will issue a refund via
                          the original payment method within 10–15 business days
                          after we receive and inspect the returned product.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          Shipping, handling and installation or training fees
                          (if any) are non-refundable unless otherwise
                          specified.
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          The refund amount will be the purchase price less any
                          shipping/handling costs and any applicable restocking
                          fee (if applicable).
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          If the product is defective or we shipped the wrong
                          item, we will cover the return shipping cost and
                          provide full refund or replacement at our discretion.
                        </span>
                      </li>
                    </ul>
                  }
                />

                <Section
                  number="5"
                  title="Replacement/Exchange"
                  content={
                    <>
                      <p className="text-gray-700 leading-relaxed">
                        If you wish to exchange a product (for the same model)
                        rather than a refund, please contact us. Exchange is
                        subject to availability and may incur additional
                        shipping or handling charges.
                      </p>

                      <ul className="space-y-3 text-gray-700 leading-relaxed">
                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>
                            The replaced or exchanged product will be delivered
                            in 5-7 business days
                          </span>
                        </li>
                      </ul>
                    </>
                  }
                />

                <Section
                  number="6"
                  title="Shipping Returns"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          You are responsible for the safe return shipment of
                          the product (unless we agree to cover return
                          shipping).
                        </span>
                      </li>

                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          We recommend using a trackable shipping service and
                          purchasing shipping insurance. We cannot guarantee
                          receipt of your returned item.
                        </span>
                      </li>
                    </ul>
                  }
                />

                <Section
                  number="7"
                  title="Late or Missing Refunds"
                  content={
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        If you haven’t received a refund yet:
                      </p>

                      <ul className="space-y-3 text-gray-700 leading-relaxed">
                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>Check your bank account/card.</span>
                        </li>

                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>
                            Contact your payment provider — it may take some
                            time before your refund is officially posted.
                          </span>
                        </li>

                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>
                            If you still haven’t received it, please contact us
                            at info@bdseducation.in.
                          </span>
                        </li>
                      </ul>
                    </div>
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
                      <MapPin className="text-lg text-blue-600 mt-1" />
                      <span>
                        SCO-12, 1st Floor, Dayalbagh, Surajkund, Faridabad –
                        121009, Haryana, India.
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="text-lg text-blue-600" />
                      <a
                        href="tel:+918826730055"
                        className="hover:text-blue-600 transition-colors"
                      >
                        +91 88267 30055
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="text-lg text-blue-600" />
                      <a
                        href="mailto:nc@bdseducation.in"
                        className="hover:text-blue-600 transition-colors"
                      >
                        nc@bdseducation.in
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
