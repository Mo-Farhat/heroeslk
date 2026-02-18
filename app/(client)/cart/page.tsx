"use client";
import Container from "@/components/Container";
import PriceFormatter from "@/components/PriceFormatter";
import QuantityButtons from "@/components/QuantityButtons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { urlFor } from "@/sanity/lib/image";
import useCartStore from "@/store";
import { useAuth } from "@/context/AuthContext";
import { Heart, ShoppingBag, Trash, AlertTriangle, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EmptyCart from "@/components/EmptyCart";
import NoAccessToCart from "@/components/NoAccessToCart";
import {
  createCheckoutSession,
  Metadata,
} from "@/actions/createCheckoutSession";
// import paypalLogo from "@/images/paypalLogo.png"; // Removed for aesthetic alignment
import Loading from "@/components/Loading";

const CartPage = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const groupedItems = useCartStore((state) => state.getGroupedItems());
  const { user } = useAuth();

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return <Loading />;
  }

  const handleResetCart = () => {
    const confirmed = window.confirm("PURGE LOADOUT?");
    if (confirmed) {
      resetCart();
      toast.success("SYSTEM CLEARED");
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.displayName ?? "Unknown",
        customerEmail: user?.email ?? "Unknown",
        userId: user!.uid,
      };
      const checkoutUrl = await createCheckoutSession(groupedItems, metadata);
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id);
    toast.success("ITEM REMOVED");
  };

  return (
    <div className="bg-heroBlack min-h-screen pb-20 pt-10 text-white">
      {user ? (
        <Container>
          {groupedItems?.length ? (
            <>
              <div className="flex items-center gap-4 py-8 border-b border-gray-800 mb-8">
                <ShoppingBag className="h-6 w-6 text-heroCrimson" />
                <h1 className="text-3xl font-bold font-oswald uppercase track-wide">Mission Loadout</h1>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Product View start */}
                <div className="lg:col-span-2 space-y-4">
                    {groupedItems?.map(({ product }) => {
                      const itemCount = getItemCount(product?._id);
                      return (
                        <div
                          key={product?._id}
                          className="bg-gray-900/50 border border-gray-800 p-4 flex flex-col md:flex-row gap-6 relative group hover:border-heroCrimson/50 transition-colors"
                        >
                          {/* Image */}
                          <div className="relative w-full md:w-32 aspect-square bg-black border border-gray-800">
                            {product?.images && (
                                <Image
                                  src={urlFor(product.images[0]).url()}
                                  alt="productImage"
                                  fill
                                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            )}
                             <div className="absolute top-1 left-1 bg-heroCrimson text-white text-[10px] px-1 font-mono uppercase">
                                Item.{product?._id?.slice(-3)}
                             </div>
                          </div>

                          {/* Details */}
                          <div className="flex-1 flex flex-col justify-between">
                              <div>
                                  <h2 className="text-xl font-bold font-oswald uppercase tracking-wide mb-1">
                                      {product?.name}
                                  </h2>
                                  <p className="text-sm text-gray-400 font-mono mb-2">
                                      {product?.variantInfo || "Standard Issue"}
                                  </p>
                                  <div className="flex gap-4 text-xs font-mono uppercase text-gray-500">
                                      <span>Status: <span className="text-green-500">Active</span></span>
                                      <span>Variant: {product?.variant || "N/A"}</span>
                                  </div>
                              </div>
                              
                              <div className="flex items-center gap-4 mt-4">
                                  <button onClick={() => handleDeleteProduct(product?._id)} className="flex items-center gap-2 text-xs font-bold uppercase text-gray-500 hover:text-heroCrimson transition-colors">
                                      <Trash className="w-4 h-4" /> Remove
                                  </button>
                                  <button className="flex items-center gap-2 text-xs font-bold uppercase text-gray-500 hover:text-white transition-colors">
                                      <Heart className="w-4 h-4" /> Save Info
                                  </button>
                              </div>
                          </div>

                          {/* Price & Quantity */}
                          <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4 mt-4 md:mt-0 border-t md:border-t-0 border-gray-800 pt-4 md:pt-0">
                             <div className="font-mono text-xl text-white">
                                <PriceFormatter
                                  amount={(product?.price as number) * itemCount}
                                  className="font-bold"
                                />
                             </div>
                             <QuantityButtons product={product} />
                          </div>
                        </div>
                      );
                    })}
                    
                    <div className="flex justify-start pt-4">
                        <Button
                        onClick={handleResetCart}
                        className="bg-transparent border border-red-900/50 text-red-500 hover:bg-red-900/20 hover:text-red-400 uppercase font-bold tracking-widest text-xs py-6 px-8 rounded-none"
                        >
                        <AlertTriangle className="w-4 h-4 mr-2" /> Purge System
                        </Button>
                    </div>
                </div>

                {/* Product View end */}

                {/* Summary View */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-900 border border-gray-800 p-8 sticky top-24">
                    <h2 className="text-xl font-bold font-oswald uppercase mb-6 border-b border-gray-800 pb-2">
                      Request Summary
                    </h2>
                    <div className="space-y-4 font-mono text-sm text-gray-400">
                      <div className="flex justify-between">
                        <span className="uppercase">Net Value</span>
                        <PriceFormatter amount={getSubTotalPrice()} className="text-white" />
                      </div>
                      <div className="flex justify-between">
                        <span className="uppercase">Rebate</span>
                        <PriceFormatter
                          amount={getSubTotalPrice() - getTotalPrice()}
                          className="text-heroCrimson"
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="uppercase">Logistics</span>
                        <span className="text-green-500">FREE</span>
                      </div>

                      <div className="h-px bg-gray-800 my-4" />
                      
                      <div className="flex justify-between font-bold text-lg text-white font-oswald uppercase tracking-wide">
                        <span>Total Auth</span>
                        <PriceFormatter
                          amount={useCartStore?.getState().getTotalPrice()}
                          className="font-bold"
                        />
                      </div>
                      
                      <Button
                        onClick={handleCheckout}
                        disabled={loading}
                        className="w-full bg-heroCrimson hover:bg-red-700 text-white font-bold uppercase tracking-widest py-6 rounded-none mt-6 transition-all duration-300"
                        size="lg"
                      >
                        {loading ? "INITIALIZING..." : "INITIATE TRANSFER"}
                      </Button>
                      
                       <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-600 uppercase font-mono">
                           <ShieldCheck className="w-3 h-3" /> Encrypted Transaction
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccessToCart />
      )}
    </div>
  );
};

export default CartPage;
