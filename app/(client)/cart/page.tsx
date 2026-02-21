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
    <div className="bg-[#F3F3F3] min-h-screen pb-20 pt-10 text-[#262626]">
      {user ? (
        <Container>
          {groupedItems?.length ? (
            <>
              <div className="flex items-center gap-4 py-8 border-b border-gray-200 mb-8">
                <ShoppingBag className="h-8 w-8 text-black" />
                <h1 className="text-4xl font-bold uppercase tracking-wide">Your Bag</h1>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Product View start */}
                <div className="lg:col-span-2 space-y-4">
                    {groupedItems?.map(({ product }) => {
                      const itemCount = getItemCount(product?._id);
                      return (
                        <div
                          key={product?._id}
                          className="bg-white border border-gray-100 p-6 flex flex-col md:flex-row gap-6 relative group rounded-xl shadow-sm hover:shadow-md hover:border-gray-200 transition-all"
                        >
                          {/* Image */}
                          <div className="relative w-full md:w-32 aspect-[2/3] bg-gray-100 overflow-hidden md:flex-shrink-0">
                            {product?.images && (
                                <Image
                                  src={urlFor(product.images[0]).url()}
                                  alt="productImage"
                                  fill
                                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            )}
                          </div>

                          {/* Details */}
                          <div className="flex-1 flex flex-col justify-between">
                              <div>
                                  <h2 className="text-lg font-bold uppercase tracking-wide mb-1 text-[#262626]">
                                      {product?.name}
                                  </h2>
                                  <p className="text-sm text-gray-500 font-medium mb-2 uppercase">
                                      {product?.variantInfo || "Standard Fit"}
                                  </p>
                                  <div className="flex gap-4 text-xs font-bold uppercase text-gray-400">
                                      <span>Variant: {product?.variant || "N/A"}</span>
                                  </div>
                              </div>
                              
                              <div className="flex items-center gap-4 mt-4">
                                  <button onClick={() => handleDeleteProduct(product?._id)} className="flex items-center gap-2 text-xs font-bold uppercase text-gray-500 hover:text-red-500 transition-colors">
                                      <Trash className="w-4 h-4" /> Remove
                                  </button>
                                  <button className="flex items-center gap-2 text-xs font-bold uppercase text-gray-500 hover:text-black transition-colors">
                                      <Heart className="w-4 h-4" /> Save For Later
                                  </button>
                              </div>
                          </div>

                          {/* Price & Quantity */}
                          <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4 mt-4 md:mt-0 border-t md:border-t-0 border-gray-200 pt-4 md:pt-0">
                             <div className="font-sans text-xl text-[#262626] font-bold">
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
                        className="bg-transparent border border-gray-300 text-gray-500 hover:border-black hover:text-black uppercase font-bold tracking-widest text-xs py-5 px-8 rounded-full transition-colors"
                        >
                        Clear Cart
                        </Button>
                    </div>
                </div>

                {/* Product View end */}

                {/* Summary View */}
                <div className="lg:col-span-1">
                  <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 sticky top-24">
                    <h2 className="text-xl font-bold uppercase mb-6 border-b border-gray-200 pb-4 text-[#262626]">
                      Order Summary
                    </h2>
                    <div className="space-y-4 font-medium text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span className="uppercase">Subtotal</span>
                        <PriceFormatter amount={getSubTotalPrice()} className="text-[#262626] font-bold" />
                      </div>
                      <div className="flex justify-between">
                        <span className="uppercase">Savings</span>
                        <PriceFormatter
                          amount={getSubTotalPrice() - getTotalPrice()}
                          className="text-black font-bold"
                        />
                      </div>
                      <div className="flex justify-between">
                        <span className="uppercase">Shipping</span>
                        <span className="text-green-600 font-bold tracking-widest">FREE</span>
                      </div>

                      <div className="h-px bg-gray-200 my-4" />
                      
                      <div className="flex justify-between font-bold text-lg text-[#262626] uppercase tracking-wide">
                        <span>Total Amount</span>
                        <PriceFormatter
                          amount={useCartStore?.getState().getTotalPrice()}
                          className="font-black"
                        />
                      </div>
                      
                      <Button
                        onClick={handleCheckout}
                        disabled={loading}
                        className="w-full bg-black hover:bg-[#252627] text-white font-bold uppercase tracking-widest py-6 rounded-full mt-6 transition-all duration-300 shadow-md"
                        size="lg"
                      >
                        {loading ? "PROCESSING..." : "Secure Checkout"}
                      </Button>
                      
                       <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-gray-500 uppercase font-medium tracking-wide">
                           <ShieldCheck className="w-4 h-4 text-green-600" /> Secure checkout. Fast shipping. Easy returns.
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
