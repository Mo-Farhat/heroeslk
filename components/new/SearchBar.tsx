"use client";
import { Loader2, Search, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import AddToCartButton from "../AddToCartButton";
// import { urlFor } from "@/sanity/lib/image";
import PriceView from "../PriceView";
import Image from "next/image";
import Link from "next/link";
import { MOCK_PRODUCTS } from "@/constants/mockData";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Mock search function
  const fetchProducts = useCallback(async () => {
    if (!search) {
      setProducts([]);
      return;
    }

    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      const filtered = MOCK_PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(filtered as any); // Cast to any for now to bypass strict type checks against the Sanity Product type
      setLoading(false);
    }, 500);
    
  }, [search]);

  // Debounce input changes
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
        if(search) fetchProducts();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [search, fetchProducts]);

  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger
        onClick={() => setShowSearch(!showSearch)}
        className="flex items-center hover:cursor-pointer"
      >
        <Search className="w-5 h-5 hover:text-black hoverEffect transition-colors text-[#262626]" />
      </DialogTrigger>
      <DialogContent className="max-w-5xl min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden bg-[#F3F3F3] border border-gray-200 text-[#262626] p-0 rounded-none">
        <DialogHeader className="p-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
          <DialogTitle className="mb-3 font-bold uppercase tracking-wider text-xl">System Search</DialogTitle>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="SEARCH PROTOCOL..."
              className="flex-1 border-b border-gray-300 bg-transparent py-5 font-semibold text-[#262626] placeholder:text-gray-400 focus:border-black rounded-none uppercase tracking-wide px-0 pl-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <X
                onClick={() => setSearch("")}
                className="w-4 h-4 absolute top-3 right-11 hover:text-black hoverEffect cursor-pointer"
              />
            )}
            <button
              type="submit"
              className="absolute right-0 top-0 w-10 h-full flex items-center justify-center hover:text-black hoverEffect"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </DialogHeader>
        <div className="w-full h-full overflow-y-scroll bg-[#F3F3F3] p-6">
          <div className="">
            {loading ? (
              <p className="flex items-center justify-center px-6 gap-2 py-10 text-center text-black font-bold uppercase tracking-widest animate-pulse">
                <Loader2 className="w-5 h-5 animate-spin" />
                Scanning Database...
              </p>
            ) : products?.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product: any) => (
                  <div
                    key={product?._id}
                    className="bg-white border border-gray-200 group hover:border-black transition-all duration-300 rounded-none"
                  >
                    <div className="flex items-start p-3 gap-3">
                      <Link
                        href={`/product/${product?.slug?.current}`}
                        onClick={() => setShowSearch(false)}
                        className="h-24 w-16 flex-shrink-0 bg-[#F3F3F3] overflow-hidden relative"
                      >
                         {/* Using mock image directly */}
                         <Image
                              layout="fill"
                              src={product?.image || "/assets/prod-hoodie.png"}
                              alt={product.title}
                              className="object-cover group-hover:brightness-90 transition-all duration-500"
                         />
                      </Link>
                      <div className="flex-grow pt-1">
                          <Link
                            href={`/product/${product?.slug?.current}`}
                            onClick={() => setShowSearch(false)}
                          >
                            <h3 className="text-sm font-bold text-[#262626] line-clamp-1 group-hover:text-black transition-colors mb-1">
                              {product.title}
                            </h3>
                            <p className="text-xs text-gray-500 line-clamp-1 mb-2">
                              {product?.category}
                            </p>
                          </Link>
                          <PriceView
                            price={product?.price}
                            discount={0}
                            className="text-[#262626] font-bold text-sm"
                          />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 font-medium tracking-wide text-gray-500">
                {search ? (
                  <p>
                    NO RESULTS FOUND FOR PROTOCOL <span className="text-black">"{search}"</span>.
                  </p>
                ) : (
                  <p className="flex flex-col items-center justify-center gap-2 opacity-50">
                    <Search className="w-8 h-8 mb-2" />
                    INITIATE SEARCH SEQUENCE
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;

