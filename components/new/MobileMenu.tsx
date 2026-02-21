"use client";

import { AlignLeft } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
// import { FEATURED_CATEGORIES_QUERYResult } from "@/sanity.types";

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

const MobileMenu = ({ categories }: { categories: Category[] }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <button onClick={toggleSidebar} className="xl:hidden text-[#262626] hover:text-black transition-colors">
        <AlignLeft className="w-6 h-6" />
      </button>
      <div className="xl:hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          categories={categories as any} 
        />
      </div>
    </>
  );
};

export default MobileMenu;

