import { Shield, Phone, Mail, MapPin, CheckCircle, Lock } from "lucide-react";
import Section from "../terms-and-conditions/_componet/section";
import { Breadcrumb } from "@/components/breadcrumb";

export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb
        title="Privacy Policy

        "
        backgroundImage="/img/headerwebp"
        items={[
          {
            label: "Privacy Policy",
            href: "/privacy-policy",
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r bg-[#0053a3] px-8 py-12 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10" />
                <h1 className="text-4xl font-bold">Privacy Policy</h1>
              </div>
              <p className="text-blue-100 text-lg">Last updated: 19 NOV 2025</p>
              <p className="mt-4 text-blue-50 leading-relaxed">
                Welcome to BDS Education. This Privacy Policy explains how we
                collect, use, disclose and safeguard your information when you
                visit our website{" "}
                <a href="https://www.bdseducation.in">
                  https://www.bdseducation.in
                </a>{" "}
                (the “Site”) and/or purchase our products (“Services”). By
                accessing or using the Site, you consent to the practices
                described in this policy.
              </p>
            </div>

            <div className="px-8 py-10">
              <div className="prose max-w-none">
                {/* 1 */}
                <Section
                  number="1"
                  title="Information We Collect"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>

                        <span>
                          <strong>Personal Information you provide:</strong>{" "}
                          When you contact us via forms, become a distributor,
                          register for training, place an order for kits or
                          books, we may collect your name, email address,
                          telephone number, postal address, institution name,
                          role (teacher/principal/distributor).
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          <strong>Payment & Order Information:</strong> If you
                          make purchases via the Site, we collect billing &
                          shipping addresses, transaction details (payment
                          method, order date, order value).
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          <strong>Automatically Collected Information:</strong>{" "}
                          We may automatically collect device and usage
                          information about your visit to the Site—IP address,
                          browser type, operating system, pages visited,
                          referring/exit pages, time spent, unique device
                          identifiers.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          <strong>Cookies & Tracking Technologies:</strong> We
                          use cookies, web beacons, pixels or similar tracking
                          technologies to access or store information about your
                          browser/device and to track your use of the Site.
                        </span>
                      </li>
                    </ul>
                  }
                />

                {/* 2 */}
                <Section
                  number="2"
                  title="How We Use Your Information"
                  content={
                    <>
                      <p>
                        We may use the information we collect for purposes such
                        as:
                      </p>
                      <ul className="space-y-3 text-gray-700 leading-relaxed">
                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>
                            Processing and fulfilling your orders, sending
                            confirmations, invoices, shipments.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>
                            Providing customer service and responding to your
                            inquiries.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>
                            Administering and improving the Site, content,
                            products, and Services.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>
                            Sending you marketing or promotional communications
                            (only if you’ve opted in).
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>
                            Detecting, investigating, and preventing fraudulent
                            transactions or misuse.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>Complying with legal obligations.</span>
                        </li>
                      </ul>
                    </>
                  }
                />

                {/* 3 */}
                <Section
                  number="3"
                  title="How We Share Your Information"
                  content={
                    <>
                      <p>
                        We may share your information with third parties in the
                        following circumstances:
                      </p>
                      <ul className="space-y-3 text-gray-700 leading-relaxed">
                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>
                            <strong>Service Providers:</strong> Companies that
                            help us operate our business, process payments,
                            fulfil orders, ship goods, assist with marketing,
                            analytics (they process under our instructions).
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>
                            <strong>Legal & Regulatory Requirements:</strong> If
                            required by law or to respond to legal process,
                            protect rights, safety, or investigate fraud.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <div>
                            <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                          </div>
                          <span>
                            <strong>Business Transfers:</strong> In connection
                            with a merger, sale, asset transfer, acquisition, or
                            bankruptcy, your information may be transferred.
                          </span>
                        </li>
                      </ul>
                    </>
                  }
                />

                {/* 4 */}
                <Section
                  number="4"
                  title="Your Choices & Rights"
                  content={
                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          You may opt-out of receiving marketing emails from us
                          at any time by following the unsubscribe link in those
                          emails or contacting us at the details below.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          You may access, correct, update or request deletion of
                          your personal information by contacting us. We will
                          respond in accordance with applicable law.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <div>
                          <CheckCircle className="text-sm text-blue-600 mt-0.5" />
                        </div>
                        <span>
                          <strong>Cookies:</strong> Most web browsers are set to
                          accept cookies by default; you can modify your browser
                          settings to decline cookies or alert you when cookies
                          are being sent. However, some parts of the Site may
                          not function properly if you disable cookies.
                        </span>
                      </li>
                    </ul>
                  }
                />

                {/* 5 */}
                <Section
                  number="5"
                  title="Security & Retention"
                  content={
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4 flex gap-3">
                        <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>
                          We implement reasonable security measures to protect
                          the confidentiality of your personal information.
                          However, no method of electronic transmission or
                          storage is completely secure and we cannot guarantee
                          absolute security.
                        </span>
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        We will retain your information as long as necessary for
                        the purposes set out in this policy and as required by
                        applicable law.
                      </p>
                    </div>
                  }
                />

                {/* 6 */}
                <Section
                  number="6"
                  title="Children's Privacy"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      Our Services are directed to schools, colleges,
                      institutions, teachers, distributors—not to children under
                      the age of 13. We do not knowingly collect personally
                      identifiable information from children under 13. If you
                      believe that we have collected information of a child
                      under 13, please contact us and we will delete such
                      information.
                    </p>
                  }
                />

                {/* 7 */}
                <Section
                  number="7"
                  title="International Transfers"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      Your information may be transferred to — and processed in
                      — countries other than your home country. By submitting
                      your information, you consent to such transfer, storage or
                      processing.
                    </p>
                  }
                />

                {/* 8 */}
                <Section
                  number="8"
                  title="Changes to This Policy"
                  content={
                    <p className="text-gray-700 leading-relaxed">
                      We may update this Privacy Policy from time to time. We
                      will notify you of any material changes by posting the new
                      policy on the Site and updating the “Last Updated” date.
                    </p>
                  }
                />

                {/* 9 Contact Us */}
                <Section
                  number="9"
                  title="Contact Us"
                  content={
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        If you have questions about this Privacy Policy, please
                        contact us at:
                      </p>

                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <a
                          href="mailto:info@bdseducation.in"
                          className="font-medium hover:text-blue-600"
                        >
                          info@bdseducation.in
                        </a>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <a
                          href="tel:+918826730055"
                          className="font-medium hover:text-blue-600"
                        >
                          +91 88267 30055
                        </a>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                        <span>
                          SCO-12, 1st Floor, Dayalbagh, Surajkund,
                          <br />
                          Faridabad – 121009, Haryana, India.
                        </span>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
