import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
// import AddToCartButton from "./AddToCartButton"; // Commented out to simplify for now

const ProductCard = ({ product }: { product: any }) => {
  // Handle both mock data and Sanity data structures
  const title = product.title || product.name;
  const price = product.price;
  const imageSrc = typeof product.image === 'string' 
    ? product.image 
    : product.images?.[0] 
      ? urlFor(product.images[0]).url() 
      : null;
  const slug = product.slug?.current;
  const isAvailable = product.stock !== 0;

  return (
    <div className="group relative flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl overflow-hidden border border-gray-100">
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-100 border-b border-gray-100">
        {imageSrc && (
          <Link href={`/product/${slug}`}>
            <Image
              src={imageSrc}
              alt={title || "Product Image"}
              fill
              className={`object-cover transition-transform duration-700 ${isAvailable && "group-hover:scale-105"}`}
              priority
            />
          </Link>
        )}
        {!isAvailable && (
             <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                 <span className="text-black font-bold text-[10px] uppercase border border-black px-3 py-1 bg-white/80 rounded-full tracking-widest">Out of Stock</span>
             </div>
        )}
        
        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
            <button className="w-full bg-black text-white py-3 font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-[#252627]">
                <ShoppingBag className="w-4 h-4" /> Quick Add
            </button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-grow bg-white relative z-20">
        <div className="flex justify-between items-start">
            <Link href={`/product/${slug}`}>
                <h3 className="text-[#262626] font-bold uppercase tracking-wide text-sm leading-tight hover:text-black transition-colors line-clamp-2">
                {title}
                </h3>
            </Link>
        </div>
        
        <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
            <p className="text-[#262626] font-bold text-sm">
                ${typeof price === 'number' ? price.toFixed(2) : price}
            </p>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                REF: {product._id?.slice(-4) || '0000'}
            </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
