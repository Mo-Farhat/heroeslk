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
        <section className="py-20 bg-[#F3F3F3] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#262626] mb-2 uppercase tracking-wide">
                        Field Reports
                    </h2>
                    <p className="text-gray-500 font-medium text-sm tracking-widest uppercase mt-4">
                        Intel from deployed operatives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="absolute -top-4 -right-4 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
                                <Terminal className="w-5 h-5" />
                            </div>

                            <div className="flex gap-1 mb-4 text-black">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-[#262626] text-lg font-medium italic mb-6 leading-relaxed font-sans">
                                &ldquo;{item.quote}&rdquo;
                            </p>

                            <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                                <div className="w-10 h-10 bg-[#F3F3F3] flex items-center justify-center text-sm font-bold text-[#262626] rounded-full">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#262626] uppercase tracking-wider">{item.author}</h4>
                                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                        {item.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Proof Elements */}
                <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-50 grayscale transition-all duration-500">
                    {/* Placeholders for partner logos */}
                     {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-8 w-32 bg-gray-300 rounded-sm" />
                    ))}
                </div>
            </div>
        </section>
    );
}
