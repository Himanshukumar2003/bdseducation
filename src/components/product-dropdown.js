import Link from "next/link";
import { NavigationMenuLink } from "./ui/navigation-menu";
import { FILE_BASE_URL } from "@/lib/features/productsSlice";
import Image from "next/image";

export default function ListItem({ title, children, href, image, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="group">
        <Link href={href}>
          <div className="group flex justify-between items-center gap-4">
            {image?.length > 0 && (
              <div className="shrink-0 size-16">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BDS_FILE_BASE}${image[0]}`}
                  alt={title}
                  width={100}
                  height={100}
                  className="aspect-square w-full h-full object-cover overflow-hidden"
                />
              </div>
            )}
            <div>
              <div className="text-sm leading-none font-medium group-hover:text-blue-600">
                {title}
              </div>
              <p className="text-gray-600 mt-1 font-medium line-clamp-2 text-sm leading-snug">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
