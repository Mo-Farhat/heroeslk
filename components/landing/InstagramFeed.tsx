import Link from "next/link";
import { Instagram, Radio } from "lucide-react";

export default function InstagramFeed() {
    return (
        <section className="py-20 bg-[#F3F3F3]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-gray-200 pb-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#262626] mb-2 uppercase tracking-tight">
                            Everyday Icons
                        </h2>
                        <p className="text-gray-500 font-medium text-sm tracking-widest uppercase">
                            Wear it your way. Every day. Tag #HEROESLK.
                        </p>
                    </div>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-[#ECE9E9] hover:bg-black hover:text-white text-[#1C1C1C] px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 text-sm"
                    >
                        <Radio className="w-4 h-4" />
                        <span>Join The Network</span>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="aspect-square bg-gray-200 relative group cursor-pointer overflow-hidden"
                        >
                            {/* Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-xs uppercase tracking-widest bg-gray-100 transition-colors">
                                IMG_SEQ_0{i + 1}
                            </div>

                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
                                <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
