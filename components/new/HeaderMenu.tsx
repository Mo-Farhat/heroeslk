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
    <div className="hidden xl:inline-flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-white/70">
      <Link
        href={"/"}
        className={`hover:text-heroCrimson transition-colors duration-200 ${isActive("/") ? "text-white" : ""
          }`}
      >
        Home
      </Link>

      <div className="relative group">
        <button
          className={`flex items-center gap-1 hover:text-heroCrimson transition-colors duration-200 ${pathname.startsWith("/shop") || pathname.startsWith("/category")
            ? "text-white"
            : ""
            }`}
        >
          Shop
          <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
        </button>

        <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
          <div className="bg-heroBlack border border-gray-800 p-0 min-w-[200px] flex flex-col shadow-2xl">
            <Link
              href="/shop"
              className="px-6 py-3 hover:bg-white hover:text-black text-gray-300 transition-colors uppercase text-sm tracking-wider font-bold"
            >
              All Products
            </Link>
            {categories?.map((category) => (
              <Link
                key={category?._id}
                href={`/category/${category?.slug?.current}`}
                className="px-6 py-3 hover:bg-white hover:text-black text-gray-300 transition-colors uppercase text-sm tracking-wider font-bold"
              >
                {category?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link
        href={"/about"}
        className={`hover:text-heroCrimson transition-colors duration-200 ${isActive("/about") ? "text-white" : ""
          }`}
      >
        About
      </Link>

      <Link
        href={"/contact"}
        className={`hover:text-heroCrimson transition-colors duration-200 ${isActive("/contact") ? "text-white" : ""
          }`}
      >
        Contact
      </Link>
    </div>
  );
};

export default HeaderMenu;

