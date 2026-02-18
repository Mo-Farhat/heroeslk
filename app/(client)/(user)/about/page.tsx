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
    <div className="w-full bg-heroBlack text-white">
      {/* Section 1: Hero */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src="/hero-bg-2.jpeg"
          alt="Heroes LK Hero"
          fill
          className="object-cover grayscale opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heroBlack via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center">
            <Container className="text-center space-y-6">
                <h1 className="text-5xl md:text-8xl font-bold font-oswald uppercase italic tracking-tighter text-white">
                    STYLE THAT <span className="text-heroCrimson">MOVES</span> WITH YOU
                </h1>
                <p className="text-xl md:text-2xl font-sans font-light text-gray-300 max-w-2xl mx-auto uppercase tracking-widest">
                    HEROESLK | URBAN PERFORMANCE WEAR
                </p>
            </Container>
        </div>
      </section>

      {/* Section 2: Brand Story */}
      <section className="py-32 border-b border-gray-900">
        <Container>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold font-oswald uppercase tracking-tight italic">
                        The HEROESLK <br/> Philosophy
                    </h2>
                    <div className="w-20 h-2 bg-heroCrimson" />
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-sans">
                        <p>
                            Born from the rhythm of the city and the need for everyday confidence. HEROESLK isn't just a label; it's a commitment to pieces that fit right, last long, and speak for themselves.
                        </p>
                        <p>
                            We transition away from fast-fashion noise to focus on deliberate design. High-density textiles, articulated fits, and minimal branding — essentials that work as hard as you do.
                        </p>
                    </div>
                </div>
                <div className="relative aspect-square border border-gray-800 p-4">
                    <div className="relative h-full w-full overflow-hidden">
                        <Image
                            src="/product-1.png"
                            alt="Streetwear Detail"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>
                    {/* Decorative bits */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-heroCrimson" />
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-gray-600" />
                </div>
            </div>
        </Container>
      </section>

      {/* Section 3: Our Mission */}
      <section className="py-32 bg-gray-900/30">
        <Container>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold font-oswald uppercase mb-4">
              Our <span className="text-heroCrimson">Mission</span>
            </h2>
            <p className="text-gray-500 font-mono text-sm tracking-[0.3em] uppercase">Core Objectives</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-1">
            <div className="p-12 border border-gray-800 bg-heroBlack hover:border-heroCrimson transition-colors group">
              <h3 className="text-6xl font-bold font-oswald text-gray-800 mb-6 group-hover:text-heroCrimson/20 transition-colors">01</h3>
              <p className="text-lg text-white font-bold uppercase tracking-wide mb-4">Accessibility</p>
              <p className="text-gray-500 font-sans leading-relaxed">
                To make premium-grade performance streetwear accessible to those who value quality over hype.
              </p>
            </div>
            <div className="p-12 border border-gray-800 bg-heroBlack hover:border-heroCrimson transition-colors group">
              <h3 className="text-6xl font-bold font-oswald text-gray-800 mb-6 group-hover:text-heroCrimson/20 transition-colors">02</h3>
              <p className="text-lg text-white font-bold uppercase tracking-wide mb-4">Confidence</p>
              <p className="text-gray-500 font-sans leading-relaxed">
                To build a daily rotation that makes you feel put together, grounded, and ready for movement.
              </p>
            </div>
            <div className="p-12 border border-gray-800 bg-heroBlack hover:border-heroCrimson transition-colors group">
              <h3 className="text-6xl font-bold font-oswald text-gray-800 mb-6 group-hover:text-heroCrimson/20 transition-colors">03</h3>
              <p className="text-lg text-white font-bold uppercase tracking-wide mb-4">Integrity</p>
              <p className="text-gray-500 font-sans leading-relaxed">
                To keep our process transparent and our designs honest. No gimmicks, just great gear.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 4: Differentiators */}
      <section className="py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800 border border-gray-800">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-heroBlack p-12 hover:bg-gray-900/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 text-heroCrimson mb-8">
                  <item.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold text-white font-oswald uppercase tracking-wider mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 5: Our Values */}
      <section className="py-32 bg-heroCrimson overflow-hidden relative">
        <div className="absolute top-0 right-0 text-[20rem] font-bold font-oswald text-black/5 leading-none translate-x-1/4 -translate-y-1/4 pointer-events-none uppercase italic">
            VALUES
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="space-y-4"
              >
                <h3 className="text-3xl font-bold text-black font-oswald uppercase italic">
                  {value.title}
                </h3>
                <p className="text-black/80 font-sans leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 6: CTA */}
      <section className="py-32 border-t border-gray-900">
        <Container className="text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white font-oswald uppercase italic mb-8">
            JOIN THE <span className="text-heroCrimson">COMMUNITY</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-sans font-light uppercase tracking-widest leading-relaxed">
            BE PART OF THE ROTATION. <br/> EARLY ACCESS TO NEW DROPS AND EXCLUSIVE RELEASES.
          </p>
          <Link
            href="/shop"
            className="inline-block px-16 py-5 bg-white text-black hover:bg-heroCrimson hover:text-white transition-all duration-500 font-bold uppercase tracking-widest text-lg"
          >
            Explore Collection
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
