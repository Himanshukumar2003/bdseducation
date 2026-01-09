import Image from "next/image";
import Link from "next/link";

export default function AtlProductLine() {
  return (
    <>
      <section className="section bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column - Left Side */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/atl.jpg"
                  alt="ATL Full Lab Setup"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:shadow-3xl transition-shadow duration-300"
                  priority
                />
              </div>
            </div>

            {/* Content Column - Right Side */}
            <div className="space-y-8 order-1 md:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                  ATL Product Line
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                This offering is designed for schools that wish to set up an
                Atal Tinkering Lab (ATL). Under this product line, we offer two
                types of lab setups tailored to your institution&lsquo;s needs
                and resources.
              </p>

              <div className="space-y-4 ">
                <div className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-b from-[#0053a3] to-[#3366cc] text-white flex items-center justify-center font-bold text-sm group-hover:bg-blue-600 transition-colors">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">
                      Full Lab
                    </h3>
                    <p className="text-slate-600 text-sm mt-1">
                      As per NITI Aayog guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-b from-[#0053a3] to-[#3366cc] text-white flex items-center justify-center font-bold text-sm group-hover:bg-indigo-600 transition-colors">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">
                      Truncated Lab
                    </h3>
                    <p className="text-slate-600 text-sm mt-1">
                      Customized as per the specific needs of the school.
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <Link href="/atl-packages" className="btn">
                  View all Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                  Non-ATL Product Line
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                This offering is designed for schools that wish to start
                teaching technology and innovation from Grade 1 onwards.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                It consists of assembled products and DIY kits, enabling
                hands-on learning experiences for students. It comes with
                comprehensive TIY (Teach-It-Yourself) content for teachers and
                students
              </p>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                The Non-ATL product line also enhances the value of any existing
                ATL lab manyfold by expanding its learning scope.
              </p>

              <div className="">
                <Link className="btn" href="/product">
                  View all Products
                </Link>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/non-atl.webp"
                  alt="ATL Full Lab Setup"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:shadow-3xl transition-shadow duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/atl.jpg"
                  alt="ATL Full Lab Setup"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:shadow-3xl transition-shadow duration-300"
                  priority
                />
              </div>
            </div>

            <div className="space-y-4 order-1 md:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                  Smart Kits Combo
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                These specially designed combo pack contain theme-based kits
                along with comprehensive TIY (Teach-It-Yourself) content.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                It offers one of the most practical and engaging ways for
                children to learn technology — both at school and at home.
              </p>

              <div className="">
                <Link href="/smart-Kits-combo" className="btn">
                  View all Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
