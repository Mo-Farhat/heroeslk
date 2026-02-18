import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link href={"/"} className={cn("group relative z-10", className)}>
      <h1 className="font-oswald text-3xl font-bold tracking-tighter uppercase italic -skew-x-6 text-white group-hover:text-heroCrimson transition-colors duration-300">
        HEROES<span className="text-heroCrimson group-hover:text-white transition-colors duration-300">LK</span>
        <span className="block h-1 w-full bg-heroCrimson mt-[-4px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </h1>
    </Link>
  );
};

export default Logo;

