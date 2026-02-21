import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCK_PRODUCTS } from "@/constants/mockData";
import Image from "next/image";

export default function NewArrivals() {
    // Simulate fetching new arrivals
    const newArrivals = MOCK_PRODUCTS.slice(0, 4);

    return (
        <section className="py-20 bg-[#F3F3F3]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#262626] uppercase tracking-tighter">
                        New Arrivals <span className="text-gray-400">//</span> View Drop
                    </h2>
                    <p className="text-gray-500 font-medium text-sm tracking-widest uppercase">
                        Clean silhouettes. Bold presence. Effortless comfort.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {newArrivals.map((product) => (
                        <div key={product._id} className="group cursor-pointer">
                            <Link href={`/product/${product.slug?.current || product._id}`}>
                             <div className="aspect-[2/3] bg-gray-100 relative overflow-hidden mb-4 rounded-none shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                {/* Image */}
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Tag */}
                                {product.isNew && (
                                    <div className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                        NEW DEPLOYMENT
                                    </div>
                                )}
                             </div>

                             <div className="space-y-1 px-1">
                                <h3 className="text-base font-bold text-[#262626] uppercase tracking-wide group-hover:text-black transition-colors truncate">
                                    {product.title}
                                </h3>
                                <div className="flex justify-between items-center">
                                     <p className="text-[#262626] font-bold text-sm">${product.price.toFixed(2)}</p>
                                     <span className="text-[10px] text-gray-400 font-bold uppercase">REF: {product._id}</span>
                                </div>
                             </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/shop?sort=newest"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#ECE9E9] text-[#1C1C1C] rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 text-sm"
                    >
                        <span>View Full Protocol</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
