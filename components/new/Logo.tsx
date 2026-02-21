import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link href={"/"} className={cn("group relative z-10 flex items-center justify-center", className)}>
      <h1 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-[-0.05em] leading-none">
        <span className="text-black group-hover:text-red-600 transition-colors duration-300">HEROES</span>
        <span className="text-red-600 group-hover:text-black transition-colors duration-300">LK</span>
      </h1>
    </Link>
  );
};

export default Logo;

