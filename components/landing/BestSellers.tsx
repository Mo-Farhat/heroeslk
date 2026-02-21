import Link from "next/link";
import { Eye, ShoppingBag } from "lucide-react";
import { MOCK_PRODUCTS } from "@/constants/mockData";
import Image from "next/image";

export default function BestSellers() {
    // Filter distinct products or just slice for now
    const products = MOCK_PRODUCTS.slice(0, 4);

    return (
        <section className="py-20 bg-[#F3F3F3]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-gray-200 pb-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#262626] uppercase tracking-tight">
                            Best Sellers <span className="text-gray-400">//</span> Daily Essentials
                        </h2>
                        <p className="text-gray-500 text-sm tracking-wide uppercase font-medium">
                            OUR MOST-WANTED PIECES, CURATED FOR YOUR ROTATION.
                        </p>
                    </div>
                    <Link
                        href="/shop"
                        className="inline-flex items-center gap-2 bg-[#ECE9E9] hover:bg-black hover:text-white text-[#1C1C1C] px-6 py-2.5 rounded-full font-bold uppercase tracking-wider transition-all duration-300 group text-sm"
                    >
                        View All Units
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product._id} className="group bg-transparent transition-transform hover:-translate-y-1">
                            <Link href={`/product/${product.slug?.current || product._id}`}>
                             <div className="aspect-[2/3] bg-gray-100 relative overflow-hidden rounded-none shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                {/* Image */}
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Quick Actions */}
                                <div className="absolute bottom-0 left-0 right-0 flex p-0">
                                    <button className="flex-1 bg-black text-white py-3 font-bold uppercase text-xs tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#252627] flex items-center justify-center gap-2">
                                        <ShoppingBag className="w-4 h-4" /> Quick Add
                                    </button>
                                </div>
                             </div>

                             <div className="pt-4 px-1">
                                <p className="text-xs text-gray-500 mb-1 uppercase tracking-widest font-medium">{product.category}</p>
                                <h3 className="font-bold text-[#262626] mb-1 uppercase tracking-wide text-base leading-tight truncate">{product.title}</h3>
                                <p className="text-[#262626] font-bold">${product.price.toFixed(2)}</p>
                             </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
