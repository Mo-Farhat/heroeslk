import { ShieldCheck, Activity, Layers, Zap, Crosshair } from "lucide-react";

const benefits = [
    {
        icon: Activity,
        title: "COMFORT FIRST",
        description: "Soft breathable fabrics designed for all-day daily comfort."
    },
    {
        icon: ShieldCheck,
        title: "QUALITY OVER QUANTITY",
        description: "Durable stitching and premium materials for long-lasting wear."
    },
    {
        icon: Layers,
        title: "TIMELESS STYLE",
        description: "Clean silhouettes and easy-to-style neutral tones."
    },
    {
        icon: Zap,
        title: "CONFIDENCE",
        description: "Pieces that fit right and speak without trying too hard."
    },
    {
        icon: Crosshair,
        title: "MODERN FIT",
        description: "Relaxed yet structured fit for a sharp, versatile look."
    }
];

export default function WhyChooseNuzii() {
    return (
        <section className="py-20 bg-heroBlack border-b border-gray-900 relative overflow-hidden">
             {/* Background Grid */}
             <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-oswald uppercase tracking-widest">
                        SYSTEM SPECS
                    </h2>
                    <div className="w-12 h-1 bg-heroCrimson mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 bg-gray-900/50 border border-gray-800 hover:border-heroCrimson transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-gray-800 rounded-none flex items-center justify-center text-white mb-6 group-hover:bg-heroCrimson transition-colors duration-300">
                                <benefit.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide font-oswald">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-mono">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
