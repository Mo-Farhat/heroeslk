import ShopHero from "@/components/shop/ShopHero";
import AllProductsSection from "@/components/shop/AllProductsSection";
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "@/constants/mockData";

const ShopPage = () => {
  // Mock data for the shop page
  const heroes = [
    {
       _id: "hero1",
       seasonTitle: "System.24 // Fall_Winter",
       mainHeading: "URBAN ARMOR",
       subheading: "Weather-resistant shells for the modern operator.",
       primaryButtonText: "View Specs",
       primaryButtonLink: "#products",
       secondaryButtonText: "Mission Brief",
       secondaryButtonLink: "#",
       heroImage: null // Will be handled in component
    }
  ];

  return (
    <div className="min-h-screen bg-heroBlack text-white">
      {/* Hero Section */}
      <ShopHero heroes={heroes as any} />

      {/* All Products Section with Category Filter */}
      <AllProductsSection categories={MOCK_CATEGORIES as any} initialProducts={MOCK_PRODUCTS as any} />

    </div>
  );
};

export default ShopPage;

