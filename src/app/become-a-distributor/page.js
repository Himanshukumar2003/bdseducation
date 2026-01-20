import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FaBoxOpen,
  FaBookOpen,
  FaBrain,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";
import Image from "next/image";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Distributor from "./_components/form";
import { Breadcrumb } from "@/components/breadcrumb";
export const metadata = {
  title: "Become a Distributor – BDS Education STEM Learning Kits",
  description:
    "Partner with BDS Education to distribute coding, AI, and robotics educational kits. Join our mission to expand hands-on technology learning across schools and communities.",
  keywords: [
    "distributor program",
    "educational kit distribution",
    "STEM partners",
    "coding kit reseller",
  ],
};

export default function PartnerSection() {
  return (
    <>
      <Breadcrumb
        title="Become a Distributor"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "become-a-distributor",
            href: "/become-a-distributor",
            isCurrent: true,
          },
        ]}
      />
      <section className="max-w-7xl mx-auto section    container section">
        <div className="text-center mb-16 max-w-[900px] px-4 lg:px-0 mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Partner with BDS Education – Bring Future-Ready Learning to Your
            Region
          </h2>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-center px-4 ">
          <div className="col-span-6">
            <p className="text-gray-600 mb-5 leading-relaxed">
              We offer a complete A-to-Z solution for teaching Coding, Robotics,
              and Future Technologies, designed to serve the unique needs of
              urban and rural schools, colleges, and training institutes across
              India. Our integrated ecosystem empowers educators and
              institutions with everything they need to make learning hands-on,
              engaging, and future-ready:
            </p>

            <ul>
              <li>
                <p className="group flex gap-2 px-6 py-3 border-2 border-blue-900 rounded-full font-medium w-auto mb-2 bg-transparent transition-all duration-300 ease-in-out hover:bg-blue-900 hover:text-white shadow-[0px_5px_0px_white] transform -translate-y-1 cursor-pointer">
                  <Check className="  group-hover:text-white  text-blue-900"></Check>{" "}
                  High-quality educational products and teaching kits
                </p>
              </li>
              <li>
                <p className="group flex gap-2 px-6 py-3 border-2 border-blue-900 rounded-full font-medium w-auto mb-2 bg-transparent transition-all duration-300 ease-in-out hover:bg-blue-900 hover:text-white  shadow-[0px_5px_0px_white] transform -translate-y-1 cursor-pointer">
                  <Check className="  group-hover:text-white  text-blue-900"></Check>{" "}
                  Structured, curriculum-aligned content
                </p>
              </li>
              <li>
                <p className="group flex gap-2 px-6 py-3 border-2 border-blue-900 rounded-full font-medium w-auto mb-2 hover:text-white bg-transparent transition-all duration-300 ease-in-out hover:bg-blue-900  shadow-[0px_5px_0px_white] transform -translate-y-1 cursor-pointer">
                  <Check className="  group-hover:text-white  text-blue-900"></Check>{" "}
                  Grade- and technology-specific books and Manuals
                </p>
              </li>
              <li>
                <p className="  group  flex gap-2 px-6 py-3 border-2 border-blue-900 rounded-full font-medium w-auto mb-2 hover:text-white bg-transparent transition-all duration-300 ease-in-out hover:bg-blue-900  shadow-[0px_5px_0px_white] transform -translate-y-1 cursor-pointer">
                  <Check className="  group-hover:text-white  text-blue-900"></Check>{" "}
                  Extensive code libraries and project resource Manuals
                </p>
              </li>
              <li>
                <p className="group flex gap-2 px-6 py-3 border-2 border-blue-900 rounded-full font-medium w-auto mb-2 bg-transparent hover:text-white transition-all duration-300 ease-in-out hover:bg-blue-900  shadow-[0px_5px_0px_white] transform -translate-y-1 cursor-pointer">
                  <Check className="  group-hover:text-white  text-blue-900"></Check>{" "}
                  Ongoing training and support for educators
                </p>
              </li>
            </ul>

            <p className="text-gray-600 mb-5 leading-relaxed">
              With this proven framework, our partners help students develop
              <b> 21st-century</b> skills while ensuring sustained engagement
              and
              <b> measurable learning outcomes</b>.<br></br> If you have strong
              local connections and are passionate about transforming education
              in your community, we invite you to join hands with us. <br></br>{" "}
              Our partnership model is designed to help you build a reliable,
              long-term income stream while creating a network of inspired
              learners and satisfied institutions.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="btn">Become a Distributor</Button>
              </DialogTrigger>
              <DialogContent className="max-h-5xl z-9999">
                <Distributor></Distributor>
              </DialogContent>
            </Dialog>
          </div>

          {/* Right Section - Steps with Icons */}
          {/* <div className="space-y-6">
        {steps.map((item) => (
          <Card
            key={item.id}
            className={`border-0 shadow-[0_0_0_0.05rem_rgba(8,60,130,0.06),0_0_1.25rem_rgba(30,34,40,0.04)] rounded-2xl transition-all duration-300 hover:translate-y-[-3px] ${
              item.id % 2 === 0 ? "ml-5" : ""
            }`}
          >
            <CardContent className="flex items-center gap-5 p-6">
              <div className="flex items-center justify-center bg-blue-100 text-blue-600 font-semibold rounded-full h-12 w-12 text-lg">
                {item.id}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
                  {item.title}
                </h4>
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}
          <div className="col-span-6 h-full">
            <Image
              src="/images/partner.jpeg"
              width={500}
              height={500}
              alt=""
              className="w-full h-full  rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
