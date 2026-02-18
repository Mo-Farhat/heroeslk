import Link from "next/link";
import { Eye, ShoppingBag } from "lucide-react";
import { MOCK_PRODUCTS } from "@/constants/mockData";
import Image from "next/image";

export default function BestSellers() {
    // Filter distinct products or just slice for now
    const products = MOCK_PRODUCTS.slice(0, 4);

    return (
        <section className="py-20 bg-heroBlack border-b border-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-gray-800 pb-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase font-oswald tracking-tight">
                            Best Sellers <span className="text-heroCrimson">//</span> Field Tested
                        </h2>
                        <p className="text-gray-400 font-mono text-sm tracking-wide">
                            HIGH DEMAND UNITS. PROVEN PERFORMANCE.
                        </p>
                    </div>
                    <Link
                        href="/shop"
                        className="text-white hover:text-heroCrimson font-bold uppercase tracking-widest text-sm border-b-2 border-heroCrimson hover:border-white transition-all pb-1"
                    >
                        View All Units
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product._id} className="group bg-transparent transition-transform hover:-translate-y-1">
                            <div className="aspect-[3/4] bg-gray-900 relative overflow-hidden border border-gray-800 group-hover:border-heroCrimson transition-colors duration-300">
                                {/* Image */}
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />

                                {/* Quick Actions */}
                                <div className="absolute bottom-0 left-0 right-0 flex p-0">
                                    <button className="flex-1 bg-white text-black py-3 font-bold uppercase text-xs tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-heroCrimson hover:text-white flex items-center justify-center gap-2">
                                        <Eye className="w-4 h-4" /> Quick View
                                    </button>
                                </div>
                            </div>

                            <div className="pt-4 px-2">
                                <p className="text-[10px] text-gray-500 mb-1 font-mono uppercase tracking-widest">{product.category}</p>
                                <h3 className="font-bold text-white mb-1 uppercase tracking-wide text-lg leading-tight truncate">{product.title}</h3>
                                <p className="text-gray-400 font-mono">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
