"use client";
import Logo from "./new/Logo";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-heroBlack flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <Logo />
        <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="text-heroCrimson"
            >
              <Loader2 className="w-8 h-8" />
            </motion.div>
            <span className="font-mono text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">
                SYSTEM INITIALIZING...
            </span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
