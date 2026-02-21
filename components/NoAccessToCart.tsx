import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Logo from "./new/Logo";

const NoAccessToCart = () => {
  return (
    <div className="flex items-center justify-center py-20 bg-[#F3F3F3] p-4 min-h-[60vh]">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-xl shadow-sm p-12 space-y-8 text-center">
        <div className="flex justify-center mb-4 text-[#262626]">
          <Logo />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#262626] uppercase tracking-tight">
            Security Check
          </h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed">
            Authorized access only. Log in to view your bag and complete your rotation.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <Button asChild className="w-full bg-black hover:bg-[#252627] text-white font-bold uppercase tracking-widest py-6 rounded-full" size="lg">
            <Link href="/signin">Sign In</Link>
          </Button>
          
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500 font-medium">New Operative?</span>
            </div>
          </div>

          <Button asChild variant="outline" className="w-full border-gray-300 text-[#262626] hover:bg-gray-50 hover:border-black font-bold uppercase tracking-widest py-6 rounded-full transition-colors" size="lg">
            <Link href="/signup">Create Account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoAccessToCart;
