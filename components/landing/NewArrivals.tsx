import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCK_PRODUCTS } from "@/constants/mockData";
import Image from "next/image";

export default function NewArrivals() {
    // Simulate fetching new arrivals
    const newArrivals = MOCK_PRODUCTS.slice(0, 4);

    return (
        <section className="py-20 bg-heroBlack border-b border-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white uppercase tracking-tighter">
                        New Arrivals <span className="text-gray-700">//</span> View Drop
                    </h2>
                    <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                        Clean silhouettes. Bold presence. Effortless comfort.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {newArrivals.map((product) => (
                        <div key={product._id} className="group cursor-pointer">
                            <div className="aspect-[4/5] bg-gray-900 border border-gray-800 relative overflow-hidden mb-4 transition-all duration-300 group-hover:border-heroCrimson">
                                {/* Image */}
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />

                                {/* Tag */}
                                {product.isNew && (
                                    <div className="absolute top-2 left-2 bg-heroCrimson text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                                        NEW DEPLOYMENT
                                    </div>
                                )}
                            </div>

                            <div className="space-y-1 px-1">
                                <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-heroCrimson transition-colors truncate">
                                    {product.title}
                                </h3>
                                <div className="flex justify-between items-center">
                                     <p className="text-gray-400 font-mono text-sm">${product.price.toFixed(2)}</p>
                                     <span className="text-[10px] text-gray-600 font-mono uppercase">REF: {product._id}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/shop?sort=newest"
                        className="inline-flex items-center gap-2 px-10 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <span>View Full Protocol</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
