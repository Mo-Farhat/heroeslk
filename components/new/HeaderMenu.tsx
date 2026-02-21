"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

const HeaderMenu = ({ categories }: { categories: Category[] }) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="hidden xl:inline-flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-[#262626]">
      <Link
        href={"/"}
        className={`relative hover:text-black transition-colors duration-200 group ${isActive("/") ? "text-black" : "text-[#737373]"
          }`}
      >
        Home
        <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-black transition-transform duration-300 origin-left ${isActive("/") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
      </Link>

      <div className="relative group">
        <button
          className={`relative flex items-center gap-1 hover:text-black transition-colors duration-200 group-btn ${pathname.startsWith("/shop") || pathname.startsWith("/category")
            ? "text-black"
            : "text-[#737373]"
            }`}
        >
          Shop
          <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
          <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-black transition-transform duration-300 origin-left ${pathname.startsWith("/shop") || pathname.startsWith("/category") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
        </button>

        <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
          <div className="bg-white border border-gray-200 p-0 min-w-[200px] flex flex-col shadow-2xl">
            <Link
              href="/shop"
              className="px-6 py-3 hover:bg-[#F3F3F3] hover:text-black text-[#262626] transition-colors uppercase text-sm tracking-wider font-bold"
            >
              All Products
            </Link>
            {categories?.map((category) => (
              <Link
                key={category?._id}
                href={`/category/${category?.slug?.current}`}
                className="px-6 py-3 hover:bg-[#F3F3F3] hover:text-black text-[#262626] transition-colors uppercase text-sm tracking-wider font-bold"
              >
                {category?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link
        href={"/about"}
        className={`relative hover:text-black transition-colors duration-200 group ${isActive("/about") ? "text-black" : "text-[#737373]"
          }`}
      >
        About
        <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-black transition-transform duration-300 origin-left ${isActive("/about") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
      </Link>

      <Link
        href={"/contact"}
        className={`relative hover:text-black transition-colors duration-200 group ${isActive("/contact") ? "text-black" : "text-[#737373]"
          }`}
      >
        Contact
        <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-black transition-transform duration-300 origin-left ${isActive("/contact") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
      </Link>
    </div>
  );
};

export default HeaderMenu;

