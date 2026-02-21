import React from "react";
import { Button } from "./ui/button";
import { HiMinus, HiPlus } from "react-icons/hi2";
import toast from "react-hot-toast";
import useCartStore from "@/store";
import { Product } from "@/sanity.types";
import { twMerge } from "tailwind-merge";

interface Props {
  product: Product;
  className?: string;
  borderStyle?: string;
}

const QuantityButtons = ({ product, className, borderStyle }: Props) => {
  const { addItem, removeItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  const handleRemoveProduct = () => {
    removeItem(product?._id);
    if (itemCount > 1) {
      toast.success("Quantity Decreased successfully!");
    } else {
      toast.success(`${product?.name?.substring(0, 12)} removed successfully!`);
    }
  };
  return (
    <div
      className={twMerge(
        "flex items-center border border-gray-800 bg-black/50",
        borderStyle,
        className
      )}
    >
      <button
        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors disabled:opacity-20"
        onClick={handleRemoveProduct}
        disabled={itemCount === 0 || isOutOfStock}
      >
        <HiMinus className="w-4 h-4" />
      </button>
      <span className="font-mono font-bold w-10 text-center text-white border-x border-gray-800">
        {itemCount}
      </span>
      <button
        className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors disabled:opacity-20"
        onClick={() => {
          addItem(product);
          toast.success("ITEM ADDED");
        }}
        disabled={isOutOfStock}
      >
        <HiPlus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default QuantityButtons;
