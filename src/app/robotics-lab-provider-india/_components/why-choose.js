import { CheckCircle, Zap, HeartHandshake, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Complete Lab Setup + Curriculum + Training in One Solution",
    description:
      "Get everything you need in a single, comprehensive package. No need to source separately.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Faculty Training and Continuous Support",
    description:
      "We don't just install and leave. Our team provides ongoing training and support for your faculty.",
  },
  {
    icon: TrendingUp,
    title: "Affordable and Scalable Packages for Schools & Colleges",
    description:
      "Flexible pricing that grows with your institution. Start small and scale as needed.",
  },
  {
    icon: Zap,
    title: "Practical Learning with Innovation & Future Technology",
    description:
      "Hands-on experience with cutting-edge robotics, AI, and IoT technologies.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-2 px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="mb-4 text-xl md:text-3xl font-semibold text-gray-800 ">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Robotics Lab
              </span>{" "}
              Services?
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              We&apos;re not just a vendor – we&apos;re your partner in building
              the next generation of innovators and engineers.
            </p>

            {/* Reasons */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                    <reason.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-[rgba(0,0,0,0.08)_0px_20px_40px]">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>

                <div className="text-center p-6 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Technical Support</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {[
                  "Complete Lab Setup + Curriculum + Training",
                  "Dedicated Faculty Training Program",
                  "Affordable and Scalable Packages",
                  "Innovation & Future Technology Focus",
                  "Pan-India Presence & Support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-2xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-xs text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
