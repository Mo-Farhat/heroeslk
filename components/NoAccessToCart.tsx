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
    <div className="flex items-center justify-center py-20 bg-heroBlack p-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 p-12 space-y-8 text-center">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white font-oswald uppercase tracking-tight">
            Security Check
          </h2>
          <p className="text-gray-400 font-sans text-sm leading-relaxed">
            Authorized access only. Log in to view your bag and complete your rotation.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <Button asChild className="w-full bg-heroCrimson hover:bg-red-700 text-white font-bold uppercase tracking-widest py-6 rounded-none" size="lg">
            <Link href="/signin">Sign In</Link>
          </Button>
          
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-900 px-2 text-gray-500 font-mono">New Operative?</span>
            </div>
          </div>

          <Button asChild variant="outline" className="w-full border-gray-800 text-gray-400 hover:bg-white hover:text-black font-bold uppercase tracking-widest py-6 rounded-none" size="lg">
            <Link href="/signup">Create Account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoAccessToCart;
