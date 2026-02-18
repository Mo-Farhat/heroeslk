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
        <Search className="w-5 h-5 hover:text-heroCrimson hoverEffect transition-colors text-white" />
      </DialogTrigger>
      <DialogContent className="max-w-5xl min-h-[90vh] max-h-[90vh] flex flex-col overflow-hidden bg-heroBlack border border-gray-800 text-white p-0">
        <DialogHeader className="p-6 border-b border-gray-800 bg-heroBlack/50 backdrop-blur-sm">
          <DialogTitle className="mb-3 font-oswald uppercase tracking-wider text-xl">System Search</DialogTitle>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <Input
              placeholder="SEARCH PROTOCOL..."
              className="flex-1 border-b border-gray-600 bg-transparent py-5 font-semibold text-white placeholder:text-gray-600 focus:border-heroCrimson rounded-none uppercase tracking-wide px-0 pl-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <X
                onClick={() => setSearch("")}
                className="w-4 h-4 absolute top-3 right-11 hover:text-heroCrimson hoverEffect cursor-pointer"
              />
            )}
            <button
              type="submit"
              className="absolute right-0 top-0 w-10 h-full flex items-center justify-center hover:text-heroCrimson hoverEffect"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </DialogHeader>
        <div className="w-full h-full overflow-y-scroll bg-heroBlack p-6">
          <div className="">
            {loading ? (
              <p className="flex items-center justify-center px-6 gap-2 py-10 text-center text-heroCrimson font-bold uppercase tracking-widest animate-pulse">
                <Loader2 className="w-5 h-5 animate-spin" />
                Scanning Database...
              </p>
            ) : products?.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product: any) => (
                  <div
                    key={product?._id}
                    className="bg-gray-900/50 border border-gray-800 group hover:border-heroCrimson transition-all duration-300"
                  >
                    <div className="flex items-start p-3 gap-3">
                      <Link
                        href={`/product/${product?.slug?.current}`}
                        onClick={() => setShowSearch(false)}
                        className="h-20 w-20 flex-shrink-0 bg-gray-800 overflow-hidden relative"
                      >
                         {/* Using mock image directly */}
                         <Image
                              width={200}
                              height={200}
                              src={product?.image || "/assets/prod-hoodie.png"}
                              alt={product.title}
                              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                         />
                      </Link>
                      <div className="flex-grow">
                          <Link
                            href={`/product/${product?.slug?.current}`}
                            onClick={() => setShowSearch(false)}
                          >
                            <h3 className="text-sm font-bold text-white uppercase tracking-wide line-clamp-1 group-hover:text-heroCrimson transition-colors">
                              {product.title}
                            </h3>
                            <p className="text-xs text-gray-500 line-clamp-1 mb-1 font-mono">
                              {product?.category} \\ REF: {product._id}
                            </p>
                          </Link>
                          <PriceView
                            price={product?.price}
                            discount={0}
                            className="text-white font-bold"
                          />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 font-medium tracking-wide text-gray-400">
                {search ? (
                  <p>
                    NO RESULTS FOUND FOR PROTOCOL <span className="text-heroCrimson">"{search}"</span>.
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

