"use client";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  } | string>;
}

const ImageView = ({ images = [] }: Props) => {
  const [active, setActive] = useState(images[0]);

  // Helper to get URL from either string or Sanity object
  const getImageUrl = (img: any) => {
      if (typeof img === 'string') return img;
      return img ? urlFor(img).url() : '';
  };
  
  const activeUrl = getImageUrl(active);

  return (
    <div className="w-full space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeUrl}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full relative aspect-[3/4] bg-gray-900 border border-gray-800 overflow-hidden"
        >
          {activeUrl && (
            <Image
                src={activeUrl}
                alt="productImage"
                fill
                priority
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
            />
          )}

           {/* Tech Overlays */}
           <div className="absolute top-4 left-4 border-l-2 border-heroCrimson pl-2">
                <p className="text-[10px] text-heroCrimson font-mono uppercase leading-none">IMG_SRC_01</p>
           </div>
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-5 gap-2">
        {images.map((image, idx) => {
          const imgUrl = getImageUrl(image);
          const isActive = getImageUrl(active) === imgUrl;
          
          return (
            <button
                key={idx}
                onClick={() => setActive(image)}
                className={`relative aspect-square border overflow-hidden transition-all ${
                    isActive 
                    ? "border-heroCrimson opacity-100" 
                    : "border-gray-800 opacity-60 hover:opacity-100 hover:border-gray-600"
                }`}
            >
                {imgUrl && (
                    <Image
                    src={imgUrl}
                    alt={`Thumbnail ${idx}`}
                    fill
                    className="object-cover"
                    />
                )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ImageView;
