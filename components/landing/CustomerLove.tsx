import { Terminal, Star } from "lucide-react";

const testimonials = [
    {
        quote: "Fits perfectly without overdoing it.",
        author: "SARAH M.",
        role: "EVERYDAY ICON"
    },
    {
        quote: "Simple, clean, and always gets compliments.",
        author: "AMINA K.",
        role: "COLLECTION 01"
    },
    {
        quote: "My go-to brand for everyday wear.",
        author: "LAYLA R.",
        role: "LUYAL USER"
    }
];

export default function CustomerLove() {
    return (
        <section className="py-20 bg-heroBlack overflow-hidden border-b border-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-oswald uppercase tracking-wide">
                        Field Reports
                    </h2>
                    <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
                        Intel from deployed operatives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-gray-900/50 p-8 border-l-2 border-gray-700 hover:border-heroCrimson transition-colors duration-300"
                        >
                            <div className="absolute -top-4 -right-4 w-10 h-10 bg-gray-800 text-heroCrimson flex items-center justify-center border border-gray-700">
                                <Terminal className="w-5 h-5" />
                            </div>

                            <div className="flex gap-1 mb-4 text-heroCrimson">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-300 text-lg font-medium italic mb-6 leading-relaxed font-sans">
                                &ldquo;{item.quote}&rdquo;
                            </p>

                            <div className="flex items-center gap-3 border-t border-gray-800 pt-4">
                                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center text-xs font-bold text-white">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider font-oswald">{item.author}</h4>
                                    <span className="text-[10px] text-heroCrimson font-bold uppercase tracking-widest font-mono">
                                        {item.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Proof Elements */}
                <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholders for partner logos */}
                     {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-8 w-32 bg-gray-700/50 skew-x-12" />
                    ))}
                </div>
            </div>
        </section>
    );
}
