import Link from "next/link";

export default function FooterCTA() {
    return (
        <section className="py-24 bg-heroCrimson text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-bold font-oswald uppercase tracking-tighter mb-6 leading-none">
                    Stay Connected
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium tracking-wide">
                    Get early access to new drops, restocks, and exclusive releases. 
                    Be the first to see what&apos;s next.
                </p>
                <Link
                    href="/shop"
                    className="inline-block px-12 py-5 bg-black text-white text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 border border-black hover:border-white"
                >
                    Join Now
                </Link>
            </div>
        </section>
    );
}
