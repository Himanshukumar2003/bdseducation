import Link from "next/link"
import { NavigationMenuLink } from "./ui/navigation-menu";
import { FILE_BASE_URL } from "@/lib/features/productsSlice";
import Image from "next/image";

function ListItem({ title, children, href, image, ...props }) {

  console.log(props)
  return (
   <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
        <div className="flex   justify-between  items-center gap-4">
        {image?.length > 0 && (
          <div className="shrink-0 size-16">
          <Image
            src={`${process.env.NEXT_PUBLIC_FILE_BASE_URL}${image[0]}`}
            alt={title}
            width={100}
            height={100}
            className="aspect-square w-full h-full   object-cover overflow-hidden "
          />
          </div>
        )}
        <div>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
          </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  

  );
}

export default ListItem;
