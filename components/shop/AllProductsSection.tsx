import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Loader2 } from "lucide-react";

interface AllProductsSectionProps {
    categories: any[];
    initialProducts: any[];
}

export default function AllProductsSection({
    categories,
    initialProducts,
}: AllProductsSectionProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [products, setProducts] = useState(initialProducts);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Client-side filtering for mock data
    useEffect(() => {
        if (selectedCategory === "all") {
            setProducts(initialProducts);
        } else {
            // Filter by category title or slug interaction
            // Assuming mock products have a 'category' string field that matches
            // Or we check if the category slug matches
            const filtered = initialProducts.filter(p => 
                p.category?.toLowerCase() === selectedCategory.toLowerCase() ||
                p.categories?.some((c:any) => c.slug?.current === selectedCategory)
            );
            setProducts(filtered);
        }
    }, [selectedCategory, initialProducts]);

    const currentCategoryName =
        selectedCategory === "all"
            ? "ALL PROTOCOLS"
            : categories.find((c) => c.slug?.current === selectedCategory)?.title ||
            "ALL PROTOCOLS";

    return (
        <section className="py-16 px-6 md:px-12 bg-heroBlack min-h-screen">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header with Filter */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 border-b border-gray-800 pb-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-oswald text-white uppercase tracking-tighter mb-2">
                            Deployment Gear
                        </h2>
                        <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                            Full inventory listing.
                        </p>
                    </div>

                    {/* Category Filter Dropdown */}
                    <div className="relative z-30">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-3 px-6 py-3 bg-black border border-gray-700 text-white hover:border-heroCrimson transition-all duration-300 min-w-[220px] justify-between font-mono text-sm uppercase"
                        >
                            <span className="truncate">
                                {currentCategoryName}
                            </span>
                            <ChevronDown
                                className={`w-4 h-4 text-heroCrimson transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute top-full right-0 mt-0 w-full bg-black border border-gray-700 border-t-0 shadow-xl z-50">
                                <button
                                    onClick={() => {
                                        setSelectedCategory("all");
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 text-sm font-mono uppercase transition-colors ${selectedCategory === "all"
                                        ? "bg-heroCrimson text-white"
                                        : "hover:bg-gray-900 text-gray-300"
                                        }`}
                                >
                                    ALL PROTOCOLS
                                </button>
                                {categories.filter(cat => cat.slug?.current).map((category) => (
                                    <button
                                        key={category._id}
                                        onClick={() => {
                                            if (category.slug?.current) {
                                                setSelectedCategory(category.slug.current);
                                                setIsDropdownOpen(false);
                                            }
                                        }}
                                        className={`w-full text-left px-4 py-3 text-sm font-mono uppercase transition-colors ${selectedCategory === category.slug?.current
                                            ? "bg-heroCrimson text-white"
                                            : "hover:bg-gray-900 text-gray-300"
                                            }`}
                                    >
                                        {category.title}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Products Grid */}
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {products.map((product: any) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {products.length === 0 && (
                     <div className="text-center py-20 border border-dashed border-gray-800">
                        <p className="text-gray-500 font-mono uppercase">
                            No units found in this protocol.
                        </p>
                    </div>
                )}
                
                {/* Product Count */}
                {products.length > 0 && (
                    <div className="text-center mt-12 pt-8 border-t border-gray-800">
                        <p className="text-gray-600 font-mono text-xs uppercase tracking-widest">
                            Displaying {products.length} Unit{products.length !== 1 ? "s" : ""}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
