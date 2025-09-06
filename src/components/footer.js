import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Product",
    links: [
      { title: "Overview", href: "#" },
      { title: "Features", href: "#" },
      { title: "Solutions", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Releases", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Press", href: "#" },
      { title: "News", href: "#" },
      { title: "Media kit", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", href: "#" },
      { title: "Newsletter", href: "#" },
      { title: "Events", href: "#" },
      { title: "Help centre", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "Support", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { title: "Twitter", href: "#" },
      { title: "LinkedIn", href: "#" },
      { title: "Facebook", href: "#" },
      { title: "GitHub", href: "#" },
      { title: "AngelList", href: "#" },
      { title: "Dribbble", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms", href: "#" },
      { title: "Privacy", href: "#" },
      { title: "Cookies", href: "#" },
      { title: "Licenses", href: "#" },
      { title: "Settings", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
          <div className="col-span-full xl:col-span-2">
            {/* Logo */}
            <svg
              id="logo-7"
              width="124"
              height="32"
              viewBox="0 0 124 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white fill-white"
            >
              <path d="M28.48 10.62C27.97..." className="fill-white" />
            </svg>

            <p className="mt-4 text-gray-400">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          {footerSections.map(({ title, links }) => (
            <div key={title}>
              <h6 className="font-semibold text-white">{title}</h6>
              <ul className="mt-6 space-y-4">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-gray-700" />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          <span className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank" className="hover:text-white">
              Brandingwaale Webtech
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-gray-400">
            <Link href="#" target="_blank" className="hover:text-white">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" className="hover:text-white">
              <DribbbleIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" className="hover:text-white">
              <TwitchIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank" className="hover:text-white">
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
