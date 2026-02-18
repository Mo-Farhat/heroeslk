import Link from "next/link";
import { Instagram, Radio } from "lucide-react";

export default function InstagramFeed() {
    return (
        <section className="py-20 bg-heroBlack border-b border-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-gray-800 pb-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-oswald uppercase tracking-tight">
                            Visual Intel
                        </h2>
                        <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                            Global operatives. Tag #HEROESLK to initiate.
                        </p>
                    </div>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest hover:text-heroCrimson transition-colors border border-gray-700 px-6 py-3 hover:border-heroCrimson"
                    >
                        <Radio className="w-4 h-4" />
                        <span>Join The Network</span>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="aspect-square bg-gray-900 border border-gray-800 relative group cursor-pointer overflow-hidden"
                        >
                             {/* Scanline Overlay */}
                             <div className="absolute inset-0 z-10 opacity-10 pointer-events-none" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}></div>

                            {/* Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-xs uppercase tracking-widest bg-gray-900 group-hover:bg-gray-800 transition-colors">
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
