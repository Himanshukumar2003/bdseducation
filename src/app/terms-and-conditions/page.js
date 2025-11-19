import { FileText, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
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
                  number="3.1"
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
                  number="3.2"
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
                  number="3.3"
                  title="Product Orders & Payments"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {[
                        "All orders placed through the Site or through authorised offline channels are subject to acceptance by BDS Education. We may refuse or cancel orders due to unavailability, pricing errors, or payment issues.",
                        "Prices, availability and shipping may vary and may be updated without notice.",
                        "Payment must be made in full before shipment unless otherwise agreed. We accept the payment methods listed on the Site.",
                        "You must provide accurate billing, shipping, and contact information. We are not liable for delays caused by incorrect information.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />

                <Section
                  number="3.4"
                  title="Shipping & Delivery"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {[
                        "We will make commercially reasonable efforts to deliver products within the estimated timeframe; however, delays may occur.",
                        "Risk of loss and title pass to you upon delivery to the carrier or upon installation/hand-over when applicable.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />

                <Section
                  number="3.5"
                  title="Use of Products & Training"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {[
                        "Products are sold for educational/institutional use only. You agree to follow all manuals, safety instructions and guidelines.",
                        "Training services, teacher training, software licences or online resources are subject to the specific licence agreement provided to you.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />

                <Section
                  number="3.6"
                  title="Intellectual Property"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {[
                        "All copyrights, trademarks, designs, patents and content remain the property of BDS Education or its licensors.",
                        "You may not copy, reproduce, upload, post, transmit or distribute any material without prior written consent.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />

                <Section
                  number="3.7"
                  title="Limitation of Liability & Disclaimer"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {[
                        'Products and services are provided "AS IS" without warranties of any kind.',
                        "We are not liable for indirect, incidental, special or consequential damages. Maximum liability is limited to the amount paid.",
                        "Limitations may not apply in jurisdictions that do not allow exclusion of certain warranties.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />

                <Section
                  number="3.8"
                  title="Governing Law & Dispute Resolution"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      {[
                        "These Terms are governed by the laws of India. Courts in Faridabad, Haryana have exclusive jurisdiction.",
                        "Parties must attempt to resolve disputes through negotiation. If unresolved within 30 days, disputes may be taken to court.",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  }
                />

                <Section
                  number="3.9"
                  title="Modifications to Terms"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      We may modify these Terms at any time. Updated Terms will
                      be posted with a revised “Last updated” date. Continued
                      use of the Site after changes constitutes acceptance of
                      the revised Terms.
                    </p>
                  }
                />

                <Section
                  number="3.10"
                  title="Severability & Waiver"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      If any provision is found invalid, the remaining
                      provisions remain in effect. Failure to enforce any right
                      does not constitute a waiver.
                    </p>
                  }
                />

                <Section
                  number="3.11"
                  title="Entire Agreement"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      These Terms, along with the Privacy Policy and Return &
                      Refund Policy, constitute the entire agreement between you
                      and BDS Education.
                    </p>
                  }
                />

                {/* Contact Section */}
                <div className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-200">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      3.12
                    </span>
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
