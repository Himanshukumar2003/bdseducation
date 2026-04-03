import Image from "next/image";
import Link from "next/link";

const PRODUCT_LINES = [
  {
    id: "atl",
    bg: "bg-blue-50",
    imageLeft: true,
    image: {
      src: "/images/atl.jpg",
      alt: "ATL Atal Tinkering Lab full setup for schools — BDS Education robotics lab provider",

      priority: true,
    },
    label: "ATL PRODUCT LINE",
    heading: "ATL Product Line",
    description:
      "This offering is designed for schools that wish to set up an Atal Tinkering Lab (ATL). Under this product line, we offer two types of lab setups tailored to your institution's needs and resources.",
    features: [
      {
        number: 1,
        title: "Full Lab",
        detail: "As per NITI Aayog guidelines.",
      },
      {
        number: 2,
        title: "Truncated Lab",
        detail: "Customized as per the specific needs of the school.",
      },
    ],
    cta: { label: "View all Packages", href: "/atl-packages" },
  },
  {
    id: "non-atl",
    bg: "",
    imageLeft: false,
    image: {
      src: "/images/non-atl.webp",
      alt: "Non-ATL robotics and STEM product kits for schools teaching technology from Grade 1 — BDS Education",
      priority: false,
    },
    label: "NON-ATL PRODUCT LINE",
    heading: "Non-ATL Product Line",
    paragraphs: [
      "This offering is designed for schools that wish to start teaching technology and innovation from Grade 1 onwards.",
      "It consists of assembled products and DIY kits, enabling hands-on learning experiences for students. It comes with comprehensive TIY (Teach-It-Yourself) content for teachers and students.",
      "The Non-ATL product line also enhances the value of any existing ATL lab manyfold by expanding its learning scope.",
    ],
    cta: { label: "View all Products", href: "/product" },
  },
  {
    id: "smart-kits",
    bg: "bg-blue-50",
    imageLeft: true,
    image: {
      src: "/images/smart-kits.webp",
      alt: "Smart Kits Combo — theme-based robotics learning kits for children at school and home by BDS Education",
      priority: false,
    },
    label: "SMART KITS COMBO",
    heading: "Smart Kits Combo",
    paragraphs: [
      "These specially designed combo packs contain theme-based kits along with comprehensive TIY (Teach-It-Yourself) content.",
      "It offers one of the most practical and engaging ways for children to learn technology — both at school and at home.",
    ],
    cta: { label: "View all Products", href: "/smart-Kits-combo" },
  },
];

export default function AtlProductLine() {
  return (
    <>
      {PRODUCT_LINES.map((line) => {
        const imageCol = (
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-md">
              <Image
                src={line.image.src}
                alt={line.image.alt}
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:shadow-3xl transition-shadow duration-300"
                priority={line.image.priority}
                loading={line.image.priority ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, 448px"
              />
            </div>
          </div>
        );

        const contentCol = (
          <div
            className={`space-y-4 ${line.imageLeft ? "order-1 md:order-2" : "order-2 md:order-1"}`}
          >
            <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase block">
              {line.label}
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              {line.heading}
            </h2>

            {/* ATL has a single description + feature list */}
            {line.description && (
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                {line.description}
              </p>
            )}

            {/* Feature list for ATL */}
            {line.features && (
              <ul className="space-y-4" aria-label="ATL lab setup options">
                {line.features.map((f) => (
                  <li key={f.number} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-b from-[#0053a3] to-[#3366cc] text-white flex items-center justify-center font-bold text-sm group-hover:bg-blue-600 transition-colors">
                      {f.number}
                    </div>
                    <div>
                      {/* ✅ h3 — correct hierarchy under h2 */}
                      <h3 className="font-semibold text-slate-900 text-lg">
                        {f.title}
                      </h3>
                      <p className="text-slate-600 text-sm mt-1">{f.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Multiple paragraphs for non-ATL & smart kits */}
            {line.paragraphs?.map((para, i) => (
              <p
                key={i}
                className="text-lg text-slate-600 leading-relaxed max-w-lg"
              >
                {para}
              </p>
            ))}

            <div>
              <Link
                href={line.cta.href}
                className="btn"
                aria-label={`${line.cta.label} — ${line.heading} by BDS Education`}
              >
                {line.cta.label}
              </Link>
            </div>
          </div>
        );

        return (
          <section
            key={line.id}
            className={`section ${line.bg}`}
            aria-labelledby={`${line.id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                {line.imageLeft ? (
                  <>
                    {imageCol}
                    {contentCol}
                  </>
                ) : (
                  <>
                    {contentCol}
                    {imageCol}
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
