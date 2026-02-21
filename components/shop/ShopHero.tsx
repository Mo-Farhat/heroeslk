"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { SHOP_HERO_QUERYResult } from "@/sanity.types";

interface ShopHeroProps {
    heroes: any[];
}

export default function ShopHero({ heroes }: ShopHeroProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!heroes || heroes.length === 0) return null;

    const currentHero = heroes[currentIndex];

    // Placeholder image logic if no Sanity image
    const bgImage = typeof currentHero.heroImage === 'string'
        ? currentHero.heroImage
        : currentHero.heroImage 
            ? urlFor(currentHero.heroImage).url() 
            : "/hero-bg-2.jpeg";

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % heroes.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + heroes.length) % heroes.length);
    };

    return (
        <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#F3F3F3]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt={currentHero.mainHeading || "Hero image"}
                    fill
                    className="object-cover transition-all duration-1000 brightness-75"
                    priority
                /> 
            </div>

            {/* Centered Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 flex flex-col items-center justify-center h-full mt-24">
                <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-6 drop-shadow-lg">
                    {/* Text Content */}
                    <div className="space-y-4">
                        <p className="text-sm font-bold tracking-widest text-white uppercase mb-2">
                            {currentHero.seasonTitle}
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-[-0.02em] text-white leading-[0.9] uppercase">
                            {currentHero.mainHeading}
                        </h1>
                        {currentHero.subheading && (
                            <p className="text-lg md:text-xl text-white font-medium max-w-2xl mx-auto tracking-wide uppercase">
                                {currentHero.subheading}
                            </p>
                        )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center w-full">
                        {currentHero.primaryButtonText && (
                            <Link
                                href={currentHero.primaryButtonLink || "#"}
                                className="inline-flex items-center justify-center gap-2 bg-white text-black px-12 py-4 font-bold uppercase tracking-widest rounded-full transition-transform duration-300 hover:scale-[1.02] min-w-[200px]"
                            >
                                {currentHero.primaryButtonText}
                            </Link>
                        )}
                        {currentHero.secondaryButtonText && (
                            <Link
                                href={currentHero.secondaryButtonLink || "#"}
                                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white px-12 py-4 font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:bg-white hover:text-black min-w-[200px]"
                            >
                                {currentHero.secondaryButtonText}
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Carousel Controls */}
            {heroes.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {heroes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all ${index === currentIndex
                                    ? "bg-white w-8"
                                    : "bg-white/50 w-2 hover:bg-white/80"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}
