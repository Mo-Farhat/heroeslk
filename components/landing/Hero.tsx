"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const CAROUSEL_IMAGES = [
    {
        id: 1,
        src: "/images/landing/bg-carousel.png", // Keep existing path for now, will need actual assets later
        alt: "Urban Performance",
    },
    {
        id: 2,
        src: "/images/landing/bg-carousel-2.png",
        alt: "Technical Gear",
    },
];

export default function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [
        Autoplay({ delay: 5000, stopOnInteraction: false }),
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section className="relative w-full h-[85vh] overflow-hidden bg-heroBlack">
            {/* Carousel Background */}
            <div className="absolute inset-0 z-0 opacity-40" ref={emblaRef}>
                <div className="flex h-full">
                    {CAROUSEL_IMAGES.map((image, index) => (
                        <div key={image.id} className="relative flex-[0_0_100%] h-full min-w-0">
                            {/* Placeholder for now until assets are generated/placed */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" /> 
                            {/* <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover grayscale"
                                priority={index === 0}
                            /> */}
                        </div>
                    ))}
                </div>
            </div>

            {/* Grid Overlay Texture */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center gap-8 max-w-5xl border border-white/10 bg-black/40 backdrop-blur-sm p-12"
                >
                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white leading-none uppercase font-oswald italic">
                        ENGINEERED <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">FOR THE CITY</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-gray-300 font-medium max-w-xl tracking-wide uppercase">
                        Advanced technical apparel for the urban operator. <br/>
                        Precision. Utility. Style.
                    </p>

                    {/* CTA Buttons */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-6 w-full justify-center">
                        <Link
                            href="/shop"
                            className="inline-flex items-center justify-center gap-2 bg-heroCrimson hover:bg-red-700 text-white px-10 py-4 font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 min-w-[200px] border border-transparent"
                        >
                            Shop Collection
                        </Link>
                        <Link
                            href="/shop"
                            className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white hover:text-black text-white px-10 py-4 font-bold uppercase tracking-widest transition-all duration-300 border border-white min-w-[200px]"
                        >
                            View Lookbook
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-10 left-10 z-20 flex gap-2">
                {CAROUSEL_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`h-1 transition-all duration-300 ${
                            index === selectedIndex
                                ? "bg-heroCrimson w-12"
                                : "bg-gray-700 w-6 hover:bg-gray-500"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute bottom-10 right-10 text-xs font-mono text-gray-500 hidden md:block">
                SYSTEMStatus: ONLINE <br/>
                LOC: 6.9271° N, 79.8612° E
            </div>
        </section>
    );
}
