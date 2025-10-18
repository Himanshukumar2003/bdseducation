import Image from "next/image";
import { User, Tag } from "lucide-react";
import Link from "next/link";

export default function BlogCard({
  title,
  excerpt,
  date,
  author,
  category,
  image,
  slug,
}) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden h-72">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-5 left-5 bg-[var(--primary-700)] text-white px-5 py-2 text-xs font-bold uppercase tracking-wide">
          {date}
        </div>
      </div>

      <div className="p-8">
        <div className="flex gap-5 mb-5">
          <span className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
            <User className="w-3 h-3 text-orange-500" /> {author}
          </span>
          <span className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
            <Tag className="w-3 h-3 text-orange-500" /> {category}
          </span>
        </div>

        <h5 className="font-semibold text-lg leading-8 mb-4 line-clamp-2">
          {title}
        </h5>

        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
          {excerpt}
        </p>

        <Link href={slug} className="btn">
          <span>READ MORE</span>
        </Link>
      </div>
    </article>
  );
}
