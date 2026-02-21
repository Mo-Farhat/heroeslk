"use client"
import ShopHero from "@/components/shop/ShopHero";
import AllProductsSection from "@/components/shop/AllProductsSection";
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "@/constants/mockData";

const ShopPage = () => {
  // Mock data for the shop page
  const heroes = [
    {
       _id: "hero1",
       seasonTitle: "COLLECTION 2024",
       mainHeading: "DAILY ROTATION",
       subheading: "A refined lineup of everyday essentials and statement pieces made for effortless styling. Mix, match, repeat.",
       primaryButtonText: "Browse Drop",
       primaryButtonLink: "#products",
       secondaryButtonText: "Explore Styles",
       secondaryButtonLink: "#",
       heroImage: "/hero-bg-2.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#262626]">
      {/* Hero Section */}
      <ShopHero heroes={heroes as any} />

      {/* All Products Section with Category Filter */}
      <AllProductsSection categories={MOCK_CATEGORIES as any} initialProducts={MOCK_PRODUCTS as any} />

    </div>
  );
};

export default ShopPage;

