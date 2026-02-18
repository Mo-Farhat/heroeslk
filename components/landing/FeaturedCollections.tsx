import Link from "next/link";
import { MOCK_CATEGORIES } from "@/constants/mockData";
import Image from "next/image";

export default function FeaturedCollections() {
    return (
        <section className="py-20 bg-heroBlack border-b border-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white uppercase tracking-tighter">
                        Featured Protocol
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
                        Curated selections for the modern operator.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-800">
                    {MOCK_CATEGORIES.slice(0, 4).map((collection, index) => (
                        <Link
                            key={collection._id}
                            href={`/category/${collection.slug.current}`}
                            className="group block relative aspect-[3/4] overflow-hidden border-r border-gray-800 last:border-r-0 hover:border-heroCrimson transition-colors duration-300"
                        >
                            <div className="relative w-full h-full bg-gray-900">
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                                <Image
                                    src={collection.image}
                                    alt={collection.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                                />
                                
                                <div className="absolute bottom-0 inset-x-0 p-6 z-20">
                                    <div className="w-8 h-0.5 bg-heroCrimson mb-4 transition-all duration-300 group-hover:w-16" />
                                    <h3 className="text-2xl font-bold font-oswald text-white uppercase tracking-wide group-hover:text-heroCrimson transition-colors">
                                        {collection.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        VIEW COLLECTION &rarr;
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
