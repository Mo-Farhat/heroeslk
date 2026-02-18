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
    <div className="group border border-gray-800 bg-gray-900/50 hover:border-heroCrimson transition-colors duration-300 flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 border-b border-gray-800">
        {imageSrc && (
          <Link href={`/product/${slug}`}>
            <Image
              src={imageSrc}
              alt={title || "Product Image"}
              fill
              className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ${isAvailable && "group-hover:scale-105"}`}
              priority
            />
          </Link>
        )}
        {!isAvailable && (
             <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                 <span className="text-white font-mono text-xs uppercase border border-white px-2 py-1">Out of Stock</span>
             </div>
        )}
        
        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button className="w-full bg-heroCrimson text-white py-3 font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-red-700">
                <ShoppingBag className="w-4 h-4" /> Add to Loadout
            </button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-grow">
        <div className="flex justify-between items-start">
            <Link href={`/product/${slug}`}>
                <h3 className="text-white font-bold font-oswald uppercase tracking-wide text-lg leading-tight hover:text-heroCrimson transition-colors line-clamp-2">
                {title}
                </h3>
            </Link>
        </div>
        
        <div className="mt-auto pt-2 flex justify-between items-center border-t border-gray-800">
            <p className="text-gray-400 font-mono text-sm">
                ${typeof price === 'number' ? price.toFixed(2) : price}
            </p>
            <span className="text-[10px] text-gray-600 font-mono uppercase">
                REF: {product._id?.slice(-4) || '0000'}
            </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
