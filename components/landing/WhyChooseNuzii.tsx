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
        <section className="py-20 bg-[#F3F3F3] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#262626] mb-2 uppercase tracking-widest">
                        Core Identity
                    </h2>
                    <div className="w-12 h-1 bg-black mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group"
                        >
                            <div className="w-16 h-16 bg-[#F3F3F3] rounded-full flex items-center justify-center text-[#262626] mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <benefit.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-[#262626] mb-3 uppercase tracking-wide">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium uppercase tracking-wide">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
