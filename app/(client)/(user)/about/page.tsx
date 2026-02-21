import Link from "next/link";
import Image from "next/image";
import { Sparkles, ShieldCheck, Palette, Camera, ShoppingBag, Zap, Target, Layers } from "lucide-react";
import Container from "@/components/Container";

const differentiators = [
  {
    icon: Sparkles,
    title: "PREMIUM FABRICS",
    description: "High-density textiles selected for heavy-duty daily rotation."
  },
  {
    icon: Layers,
    title: "MODERN SILHOUETTES",
    description: "Wide fits and clean drops designed for urban movement."
  },
  {
    icon: ShieldCheck,
    title: "DURABLE BUILD",
    description: "Reinforce stitching and quality hardware that lasts."
  },
  {
    icon: Target,
    title: "FAIR VALUE",
    description: "Exceptional quality without the inflated luxury markup."
  },
  {
    icon: Camera,
    title: "AUTHENTIC VISUALS",
    description: "Raw, unedited product clarity. What you see is what you get."
  },
  {
    icon: Zap,
    title: "SEAMLESS FLOW",
    description: "Express shipping and effortless checkout for the modern pace."
  }
];

const values = [
  { title: "INTENT", description: "Every silhouette is designed with a specific purpose in mind." },
  { title: "PRESENCE", description: "Pieces that speak without trying too hard. Bold yet understated." },
  { title: "COMFORT", description: "Premium materials that feel right from the first wear." },
  { title: "VERSATILITY", description: "Fashion that moves with you from day to night, street to gym." }
];

const AboutPage = () => {
  return (
    <div className="w-full bg-[#F3F3F3] text-[#262626]">
      {/* Section 1: Hero */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src="/hero-bg-2.jpeg"
          alt="Heroes LK Hero"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 flex items-center justify-center z-10">
            <Container className="text-center space-y-6">
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-[-0.02em] text-white drop-shadow-md">
                    STYLE THAT <span className="text-gray-300">MOVES</span> WITH YOU
                </h1>
                <p className="text-xl md:text-2xl font-medium text-white max-w-2xl mx-auto uppercase tracking-widest drop-shadow-sm">
                    HEROESLK | URBAN PERFORMANCE WEAR
                </p>
            </Container>
        </div>
      </section>

      {/* Section 2: Brand Story */}
      <section className="py-32 border-b border-gray-200">
        <Container>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
                        The HEROESLK <br/> Philosophy
                    </h2>
                    <div className="w-20 h-2 bg-black" />
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                        <p>
                            Born from the rhythm of the city and the need for everyday confidence. HEROESLK isn't just a label; it's a commitment to pieces that fit right, last long, and speak for themselves.
                        </p>
                        <p>
                            We transition away from fast-fashion noise to focus on deliberate design. High-density textiles, articulated fits, and minimal branding — essentials that work as hard as you do.
                        </p>
                    </div>
                </div>
                <div className="relative aspect-square border border-gray-200 p-4 bg-white rounded-xl shadow-sm">
                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                        <Image
                            src="/product-1.png"
                            alt="Streetwear Detail"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </Container>
      </section>

      {/* Section 3: Our Mission */}
      <section className="py-32 bg-white">
        <Container>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4 text-[#262626]">
              Our <span className="text-gray-400">Mission</span>
            </h2>
            <p className="text-gray-500 font-bold text-sm tracking-widest uppercase">Core Objectives</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-12 border border-gray-100 bg-white rounded-xl shadow-sm hover:shadow-md hover:border-black transition-all group">
              <h3 className="text-6xl font-black text-gray-200 mb-6 group-hover:text-black transition-colors">01</h3>
              <p className="text-lg text-[#262626] font-bold uppercase tracking-wide mb-4">Accessibility</p>
              <p className="text-gray-500 font-medium leading-relaxed">
                To make premium-grade performance streetwear accessible to those who value quality over hype.
              </p>
            </div>
            <div className="p-12 border border-gray-100 bg-white rounded-xl shadow-sm hover:shadow-md hover:border-black transition-all group">
              <h3 className="text-6xl font-black text-gray-200 mb-6 group-hover:text-black transition-colors">02</h3>
              <p className="text-lg text-[#262626] font-bold uppercase tracking-wide mb-4">Confidence</p>
              <p className="text-gray-500 font-medium leading-relaxed">
                To build a daily rotation that makes you feel put together, grounded, and ready for movement.
              </p>
            </div>
            <div className="p-12 border border-gray-100 bg-white rounded-xl shadow-sm hover:shadow-md hover:border-black transition-all group">
              <h3 className="text-6xl font-black text-gray-200 mb-6 group-hover:text-black transition-colors">03</h3>
              <p className="text-lg text-[#262626] font-bold uppercase tracking-wide mb-4">Integrity</p>
              <p className="text-gray-500 font-medium leading-relaxed">
                To keep our process transparent and our designs honest. No gimmicks, just great gear.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 4: Differentiators */}
      <section className="py-32 bg-[#F3F3F3]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white p-12 shadow-sm rounded-xl hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-[#262626] mb-8 group-hover:bg-black group-hover:text-white transition-colors">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-[#262626] uppercase tracking-wider mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 5: Our Values */}
      <section className="py-32 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 text-[15rem] md:text-[20rem] font-bold text-white/5 leading-none translate-x-1/4 -translate-y-1/4 pointer-events-none uppercase">
            VALUES
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 6: CTA */}
      <section className="py-32 border-t border-gray-200 bg-[#F3F3F3]">
        <Container className="text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-[#262626] uppercase mb-8">
            JOIN THE <span className="text-gray-400">COMMUNITY</span>
          </h2>
          <p className="text-lg text-gray-500 mb-12 font-medium uppercase tracking-widest leading-relaxed">
            BE PART OF THE ROTATION. <br/> EARLY ACCESS TO NEW DROPS AND EXCLUSIVE RELEASES.
          </p>
          <Link
            href="/shop"
            className="inline-block px-16 py-5 bg-black text-white hover:bg-[#252627] transition-all duration-500 font-bold uppercase tracking-widest text-lg rounded-full"
          >
            Explore Collection
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
