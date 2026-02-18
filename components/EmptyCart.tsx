"use client";

import { ShoppingCart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import emptyCart from "@/images/emptyCart.png";

export default function EmptyCart() {
  return (
    <div className="py-20 bg-heroBlack flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 border border-gray-800 p-12 max-w-lg w-full space-y-8 text-center"
      >
        <div className="relative w-32 h-32 mx-auto mb-8">
            <ShoppingBag className="w-full h-full text-gray-800" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-heroCrimson rounded-full animate-ping" />
            </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white font-oswald uppercase tracking-tight">
            Your Bag is Waiting
          </h2>
          <p className="text-gray-400 font-sans">
            Your Cart&apos;s Waiting for Its First Pick. <br/>
            Discover pieces designed for everyday confidence.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/shop"
            className="inline-block bg-heroCrimson hover:bg-red-700 text-white px-12 py-4 font-bold uppercase tracking-widest transition-all duration-300 w-full"
          >
            Explore Collection
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
