import Link from "next/link";
import Logo from "./new/Logo";
import SocialMedia from "./new/SocialMedia";
import { customerCareLinks } from "@/constants";
import { MOCK_CATEGORIES } from "@/constants/mockData";
import { ArrowRight } from "lucide-react";

const Footer = async () => {
  // Use mock categories
  const categories = MOCK_CATEGORIES;

  return (
    <footer className="bg-heroBlack border-t border-gray-800 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Intro */}
          <div className="space-y-6">
            <Logo className="w-24 mb-2 text-white" />
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Born from urban movement and performance culture.
              <br />
              <span className="font-bold text-white uppercase tracking-wider">Precision. Resilience. Intent.</span>
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-heroCrimson hover:bg-red-700 text-white px-6 py-3 rounded-none font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] group"
            >
              Enter The Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-lg mb-6">Shop</h3>
            <ul className="space-y-3">
              {categories.slice(0, 6).map((category) => (
                <li key={category._id}>
                  <Link
                    href={`/category/${category.slug?.current}`}
                    className="text-gray-400 hover:text-white text-sm font-medium hoverEffect inline-flex items-center group uppercase tracking-wide"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {category.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {customerCareLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm font-medium hoverEffect inline-flex items-center group uppercase tracking-wide"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-white uppercase tracking-wider text-lg mb-6">Connect</h3>
              <SocialMedia
                className="justify-start"
                iconClassName="border-gray-700 text-gray-400 hover:border-heroCrimson hover:text-heroCrimson hover:bg-heroCrimson/10"
                tooltipClassName="bg-heroCrimson text-white"
              />
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Early access to drops. No spam. Just signals.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="ENTER EMAIL"
                  required
                  className="w-full px-4 py-3 border-b border-gray-600 bg-transparent text-white placeholder:text-gray-600 focus:outline-none focus:border-heroCrimson transition-all rounded-none"
                />
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-200 text-black px-4 py-3 rounded-none font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Join The List
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} HEROES LK. ALL RIGHTS RESERVED.</p>
            <p className="font-medium">
              SYSTEM STATUS: OPERATIONAL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
