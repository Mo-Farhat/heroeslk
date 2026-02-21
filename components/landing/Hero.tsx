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
        src: "/hero-bg-1.jpeg",
        headline: "WEAR WHAT FEELS LIKE YOU",
        subheadline: "Modern streetwear designed for everyday life — clean silhouettes, bold presence, effortless comfort.",
        cta1: "Shop Now",
        cta2: "Browse Collection"
    },
    {
        id: 2,
        src: "/hero-bg-2.jpeg",
        headline: "STYLE THAT MOVES WITH YOU",
        subheadline: "Confidence, on repeat. Stay comfortable without compromising on your aesthetic.",
        cta1: "View Drop",
        cta2: "See What's New"
    },
    {
        id: 3,
        src: "/hero-bg-1.jpeg",
        headline: "BUILT FOR EVERYDAY ICONS",
        subheadline: "Own your look. Effortless pieces curated for your daily rotation.",
        cta1: "Explore Styles",
        cta2: "Learn More"
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

    const activeImage = CAROUSEL_IMAGES[selectedIndex];

    return (
        <section className="relative w-full h-[85vh] overflow-hidden bg-[#F3F3F3]">
            {/* Carousel Background */}
            <div className="absolute inset-0 z-0 opacity-50" ref={emblaRef}>
                <div className="flex h-full">
                    {CAROUSEL_IMAGES.map((image, index) => (
                        <div key={image.id} className="relative flex-[0_0_100%] h-full min-w-0">
                            <Image
                                src={image.src}
                                alt={image.headline}
                                fill
                                className="object-cover transition-all duration-1000"
                                priority={index === 0}
                            />
                            {/* Dark gradient from bottom for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-start justify-end text-left p-6 md:p-16 pb-24 md:pb-24">
                <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start gap-6 max-w-4xl"
                >
                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black tracking-[-0.02em] text-white leading-[0.9] uppercase">
                        {activeImage.headline}
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl tracking-wide uppercase">
                        {activeImage.subheadline}
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4 flex w-full justify-start">
                        <Link
                            href="/shop"
                            className="inline-flex items-center justify-center gap-2 bg-white text-black px-12 py-4 font-bold uppercase tracking-widest rounded-full transition-transform duration-300 hover:scale-[1.02] min-w-[200px]"
                        >
                            {activeImage.cta1}
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 right-8 z-40 flex gap-2">
                {CAROUSEL_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`h-1 transition-all duration-300 ${
                            index === selectedIndex
                                ? "bg-white w-12"
                                : "bg-white/50 w-6 hover:bg-white/80"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
