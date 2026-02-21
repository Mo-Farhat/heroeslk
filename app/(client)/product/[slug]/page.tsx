import ImageView from "@/components/new/ImageView";
// import PriceView from "@/components/PriceView";
import { MOCK_PRODUCTS } from "@/constants/mockData";
import { Heart, Info, ShoppingBag, Truck, Share2 } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";
// import AddToCartButton from "@/components/AddToCartButton";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  
  // Find product in mock data
  const product = MOCK_PRODUCTS.find((p) => p.slug?.current === slug);

  if (!product) {
    return notFound();
  }

  // Handle image prop standardization
  // Mock products have 'image' string. ImageView expects array or we need to adapt it.
  // We'll update ImageView to handle this.
  const images = product.image ? [product.image] : []; 

  return (
    <div className="bg-[#F3F3F3] min-h-screen text-[#262626] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
             <ImageView images={images as any} />
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="border-b border-gray-200 pb-6">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-[-0.02em] leading-none mb-4">
                    {product.title}
                </h1>
                <div className="flex items-end gap-4">
                    <p className="text-3xl font-bold font-sans">
                        ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                    </p>
                    {product.rowPrice && (
                         <p className="text-xl font-bold text-gray-400 line-through decoration-black">
                            ${product.rowPrice}
                        </p>
                    )}
                </div>
            </div>

            {/* Status & Actions */}
            <div className="flex gap-4 items-center">
                 <div className="px-4 py-1 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest">
                    New Arrival
                 </div>
                 <div className="px-4 py-1 bg-[#ECE9E9] text-gray-500 rounded-full text-xs font-bold uppercase tracking-widest">
                    Best Seller
                 </div>
            </div>
            
            <div className="space-y-4 pt-2">
                <p className="text-gray-600 font-medium leading-relaxed max-w-xl">
                    {product.description}
                </p>
                
                {/* Benefit Points */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 font-bold uppercase tracking-tight">
                    <li className="flex items-center gap-2">Soft breathable fabric</li>
                    <li className="flex items-center gap-2">Durable stitching</li>
                    <li className="flex items-center gap-2">Easy-to-style tones</li>
                    <li className="flex items-center gap-2">Modern structured fit</li>
                </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="flex-1 bg-black hover:bg-[#252627] text-white py-4 font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group rounded-full">
                    <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Shop Now
                </button>
                <button className="px-6 py-4 border border-gray-300 hover:border-black text-[#262626] transition-colors flex items-center justify-center hover:bg-white rounded-full">
                    <Heart className="w-5 h-5" />
                </button>
            </div>

            {/* Size & Fit Reassurance */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-2">
                <p className="text-sm text-gray-600 leading-relaxed uppercase font-medium">
                    <span className="text-black font-black">Fit Guide:</span> True-to-size with a relaxed modern fit. Prefer a looser vibe? Size up. Want a sharper look? Stay true to size.
                </p>
            </div>

            {/* Toggles */}
            <div className="mt-4 space-y-0 border-t border-gray-200">
                 <div className="flex items-center justify-between py-4 border-b border-gray-200 text-sm font-bold uppercase text-gray-500 cursor-pointer hover:text-black transition-colors">
                      <span className="flex items-center gap-3">
                          <Info className="w-4 h-4" /> Product Details
                      </span>
                      <span>+</span>
                 </div>
                  <div className="flex items-center justify-between py-4 border-b border-gray-200 text-sm font-bold uppercase text-gray-500 cursor-pointer hover:text-black transition-colors">
                      <span className="flex items-center gap-3">
                          <Truck className="w-4 h-4" /> Shipping & Returns
                      </span>
                      <span>+</span>
                 </div>
                  <div className="flex items-center justify-between py-4 border-b border-gray-200 text-sm font-bold uppercase text-gray-500 cursor-pointer hover:text-black transition-colors">
                      <span className="flex items-center gap-3">
                          <Share2 className="w-4 h-4" /> Share Style
                      </span>
                      <span>+</span>
                 </div>
            </div>

            {/* Shipping Snippet */}
            <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center mt-2">
                Fast dispatch within 48 hours. Easy exchanges within 14 days.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
