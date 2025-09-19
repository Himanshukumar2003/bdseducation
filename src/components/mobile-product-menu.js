// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   ChevronDown,
//   ChevronRight,
//   Bot,
//   Cpu,
//   Gamepad2,
//   Printer,
//   Zap,
// } from "lucide-react";

// const productCategories = [
//   {
//     title: "Age 4+",
//     products: [
//       { name: "mTiny", icon: Bot, badge: null },
//       { name: "xLight", icon: Zap, badge: null },
//     ],
//   },
//   {
//     title: "Age 6+",
//     products: [
//       { name: "Codey Rocky", icon: Bot, badge: null },
//       { name: "mBot", icon: Bot, badge: null },
//       { name: "mBot2", icon: Bot, badge: "Hot" },
//     ],
//   },
//   {
//     title: "Age 8+",
//     products: [
//       { name: "mBot Ranger", icon: Bot, badge: null },
//       { name: "NextMaker", icon: Cpu, badge: null },
//     ],
//   },
//   {
//     title: "Age 12+",
//     products: [
//       { name: "mBot2 Rover", icon: Bot, badge: "New" },
//       { name: "mBot Ultimate", icon: Bot, badge: null },
//       { name: "CyberPi", icon: Gamepad2, badge: null },
//     ],
//   },
//   {
//     title: "All ages",
//     products: [
//       { name: "xTool P2S", icon: Printer, badge: "Hot" },
//       { name: "xTool Screen Printer", icon: Printer, badge: null },
//       { name: "xTool F1 Ultra", icon: Printer, badge: "New" },
//     ],
//   },
// ];

// export default function MobileProductMenu() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openCategory, setOpenCategory] = (useState ) );

//   return (
//     <div className="border-b" style={{ borderColor: "var(--border)" }}>
//       <button
//         className="nav-link-mobile flex items-center justify-between w-full"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span>Products</span>
//         <ChevronDown
//           className={`w-4 h-4 transition-transform ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {isOpen && (
//         <div className="pl-4 pb-2 space-y-2">
//           {productCategories.map((category, categoryIndex) => (
//             <div key={categoryIndex}>
//               <button
//                 className="flex items-center justify-between w-full py-2 text-sm font-medium transition-colors category-btn"
//                 style={{ color: "var(--primary-blue)" }}
//                 onClick={() =>
//                   setOpenCategory(
//                     openCategory === category.title ? null : category.title
//                   )
//                 }
//               >
//                 <span>{category.title}</span>
//                 <ChevronRight
//                   className={`w-3 h-3 transition-transform ${
//                     openCategory === category.title ? "rotate-90" : ""
//                   }`}
//                 />
//               </button>

//               {openCategory === category.title && (
//                 <div className="pl-4 space-y-1">
//                   {category.products.map((product, productIndex) => (
//                     <Link
//                       key={productIndex}
//                       href="#"
//                       className="flex items-center gap-3 py-2 text-sm transition-colors mobile-product-link"
//                       style={{ color: "var(--text-secondary)" }}
//                     >
//                       <div
//                         className="w-6 h-6 rounded flex items-center justify-center"
//                         style={{
//                           backgroundColor: "var(--primary-10)",
//                         }}
//                       >
//                         <product.icon className="w-3 h-3" />
//                       </div>
//                       <span>{product.name}</span>
//                       {product.badge && (
//                         <span
//                           className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
//                             product.badge === "Hot" ? "badge-hot" : "badge-new"
//                           }`}
//                         >
//                           {product.badge}
//                         </span>
//                       )}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}

//       <style jsx>{`
//         .nav-link-mobile {
//           font-family: "Patrick Hand", cursive;
//           font-weight: 600;
//           color: var(--black);
//           padding: 12px 0;
//           text-transform: uppercase;
//           font-size: 14px;
//           letter-spacing: 0.5px;
//           font-weight: 900;
//           text-decoration: none;
//           transition: color 0.3s ease;
//           background: none;
//           border: none;
//           text-align: left;
//         }

//         .nav-link-mobile:hover {
//           color: var(--primary-blue);
//         }

//         .category-btn:hover {
//           color: var(--primary-700) !important;
//         }

//         .mobile-product-link:hover {
//           color: var(--primary-blue) !important;
//         }

//         .badge-hot {
//           background-color: rgba(255, 107, 53, 0.1);
//           color: var(--accent-red);
//         }

//         .badge-new {
//           background-color: rgba(78, 205, 196, 0.1);
//           color: var(--accent-green);
//         }
//       `}</style>
//     </div>
//   );
// }
