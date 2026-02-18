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
        <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-heroBlack border-b border-gray-800">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Image
                    src={bgImage}
                    alt={currentHero.mainHeading || "Hero image"}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    priority
                /> 
            </div>
            
            {/* Grid texture */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Centered Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
                <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-8 border bg-black/40 backdrop-blur-sm border-white/10 p-12">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <p className="text-sm font-mono tracking-widest text-heroCrimson uppercase mb-4">
                            {currentHero.seasonTitle}
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white leading-none font-oswald uppercase italic">
                            {currentHero.mainHeading}
                        </h1>
                        {currentHero.subheading && (
                            <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mx-auto tracking-wide uppercase">
                                {currentHero.subheading}
                            </p>
                        )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-6 pt-4 justify-center w-full">
                        {currentHero.primaryButtonText && (
                            <Link
                                href={currentHero.primaryButtonLink || "#"}
                                className="group inline-flex items-center gap-2 px-10 py-4 bg-heroCrimson hover:bg-red-700 text-white font-bold uppercase tracking-widest transition-all duration-300 min-w-[200px] justify-center"
                            >
                                {currentHero.primaryButtonText}
                            </Link>
                        )}
                        {currentHero.secondaryButtonText && (
                            <Link
                                href={currentHero.secondaryButtonLink || "#"}
                                className="inline-flex items-center gap-2 px-10 py-4 border border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest transition-all duration-300 min-w-[200px] justify-center"
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
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 border border-gray-700 text-white hover:text-heroCrimson hover:border-heroCrimson transition-all"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/50 border border-gray-700 text-white hover:text-heroCrimson hover:border-heroCrimson transition-all"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4">
                        {heroes.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1 transition-all ${index === currentIndex
                                    ? "bg-heroCrimson w-12"
                                    : "bg-gray-700 w-6 hover:bg-gray-500"
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
