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
    <footer className="bg-[#252627] pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Intro */}
          <div className="space-y-6">
            <Logo className="w-24 mb-2 text-white" />
            <p className="text-[#B3B3B3] text-sm leading-relaxed font-sans">
              HEROESLK is about everyday confidence. Pieces that fit right, last long, and speak without trying too hard.
              <br />
              <span className="font-bold text-white uppercase tracking-wider">Style that moves with you.</span>
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#ECE9E9] hover:bg-white text-[#1C1C1C] px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 group text-sm"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Shop</h3>
            <ul className="space-y-3">
              {categories.slice(0, 6).map((category) => (
                <li key={category._id}>
                  <Link
                    href={`/category/${category.slug?.current}`}
                    className="text-[#B3B3B3] hover:text-white text-sm font-medium hoverEffect inline-flex items-center group uppercase tracking-wide"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {category.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Support</h3>
            <ul className="space-y-3">
              {customerCareLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-[#B3B3B3] hover:text-white text-sm font-medium hoverEffect inline-flex items-center group uppercase tracking-wide"
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
              <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-6">Connect</h3>
              <SocialMedia
                className="justify-start"
                iconClassName="border-gray-700 text-[#B3B3B3] hover:border-white hover:text-white"
                tooltipClassName="bg-white text-black"
              />
            </div>

            <div>
              <p className="text-[#B3B3B3] text-sm mb-4 leading-relaxed uppercase tracking-wide">
                Stay Connected. <br/> Early access to new drops & releases.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  required
                  className="w-full px-6 py-3 border border-gray-600 bg-transparent text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-all rounded-full"
                />
                <button
                  type="submit"
                  className="w-full bg-[#ECE9E9] hover:bg-white text-[#1C1C1C] px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group text-sm"
                >
                  Join Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B3B3B3] uppercase tracking-widest">
            <p>© {new Date().getFullYear()} HEROES LK. ALL RIGHTS RESERVED.</p>
            <p className="font-medium">
              Wear it your way. Every day.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
