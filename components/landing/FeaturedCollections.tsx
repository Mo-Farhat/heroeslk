import Link from "next/link";
import { MOCK_CATEGORIES } from "@/constants/mockData";
import Image from "next/image";

export default function FeaturedCollections() {
    return (
        <section className="py-20 bg-[#F3F3F3]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#262626] uppercase tracking-tighter">
                        Collections
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {MOCK_CATEGORIES.slice(0, 4).map((collection, index) => (
                        <Link
                            key={collection._id}
                            href={`/category/${collection.slug.current}`}
                            className="group block relative flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="relative w-full aspect-[2/3] bg-gray-100 overflow-hidden rounded-none">
                                <Image
                                    src={collection.image}
                                    alt={collection.title}
                                    fill
                                    className="object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
                                />
                            </div>
                            
                            {/* Solid dark block with bottom text & arrow icon */}
                            <div className="bg-[#252627] p-5 flex items-center justify-between text-white rounded-none">
                                <h3 className="text-lg font-bold uppercase tracking-wide">
                                    {collection.title}
                                </h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
