import Link from "next/link";
import { Mail, MessageCircle, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Container from "@/components/Container";

const ContactPage = () => {
  return (
    <div className="w-full bg-heroBlack min-h-screen text-white">
      {/* Section 1: Intro */}
      <section className="relative w-full py-32 md:py-48 border-b border-gray-900 overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <Container className="relative z-10 text-center max-w-4xl">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 border border-heroCrimson/30 bg-heroCrimson/5 mb-4">
              <MessageCircle className="w-4 h-4 text-heroCrimson" />
              <span className="text-xs font-bold text-heroCrimson tracking-[0.3em] uppercase">Communication Terminal</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white leading-none font-oswald uppercase italic tracking-tighter">
              WE ARE HERE <br/> TO <span className="text-heroCrimson">HELP</span>
            </h1>

            <div className="w-32 h-1 bg-gray-800 mx-auto" />

            <div className="space-y-4 text-xl md:text-2xl text-gray-400 font-sans font-light pt-4 uppercase tracking-widest">
              <p>Questions about sizing, delivery, or an order?</p>
              <p className="text-white font-bold">Reach out anytime.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Contact Form & Info */}
      <section className="py-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Form Column */}
            <div className="space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold font-oswald uppercase italic tracking-wider">Send a Message</h2>
                    <p className="text-gray-500 font-sans">Expect a response within 24 hours.</p>
                </div>
                
                <form className="space-y-8">
                    <div className="space-y-4">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                        <input 
                            type="text" 
                            placeholder="NAME / IDENTIFIER"
                            className="w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none focus:border-heroCrimson transition-all font-mono placeholder:text-gray-700"
                            required
                        />
                    </div>
                    <div className="space-y-4">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="EMAIL@DOMAIN.COM"
                            className="w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none focus:border-heroCrimson transition-all font-mono placeholder:text-gray-700"
                            required
                        />
                    </div>
                    <div className="space-y-4">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Message Body</label>
                        <textarea 
                            rows={5}
                            placeholder="HOW CAN WE ASSIST?"
                            className="w-full bg-transparent border-b border-gray-800 py-4 focus:outline-none focus:border-heroCrimson transition-all font-mono placeholder:text-gray-700 resize-none"
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="group flex items-center justify-between w-full px-8 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] hover:bg-heroCrimson hover:text-white transition-all duration-500"
                    >
                        <span>Dispatch Signal</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                </form>
            </div>

            {/* Info Column */}
            <div className="space-y-16">
                <div className="space-y-8 p-12 bg-gray-900/10 border border-gray-900">
                    <h3 className="text-2xl font-bold font-oswald uppercase italic tracking-wider border-b border-gray-900 pb-4">Connect Directly</h3>
                    
                    <div className="space-y-10">
                        <div className="flex gap-6 group">
                            <div className="w-12 h-12 bg-heroCrimson/5 border border-heroCrimson/20 flex items-center justify-center text-heroCrimson flex-shrink-0 group-hover:bg-heroCrimson group-hover:text-white transition-all">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">Email Support</h4>
                                <a href="mailto:support@heroeslk.com" className="text-gray-400 font-mono hover:text-heroCrimson transition-colors">SUPPORT@HEROESLK.COM</a>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="w-12 h-12 bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 flex-shrink-0 group-hover:border-white group-hover:text-white transition-all">
                                <HelpCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">Customer Care</h4>
                                <p className="text-gray-500 font-sans text-sm leading-relaxed mb-4">Monday – Friday <br/> 0900 – 1800 IST</p>
                                <Link href="/faqs" className="text-xs font-bold text-heroCrimson uppercase tracking-widest hover:underline">View FAQ Database</Link>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="w-12 h-12 bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 flex-shrink-0 group-hover:border-white group-hover:text-white transition-all">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">Secure Transactions</h4>
                                <p className="text-gray-500 font-sans text-sm leading-relaxed">Encrypted checkout and reliable shipping partners.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-12 border border-gray-900 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-heroCrimson/5 rounded-full blur-3xl group-hover:bg-heroCrimson/10 transition-colors" />
                    <p className="text-xl font-sans font-light text-gray-400 leading-relaxed italic relative z-10">
                        &quot;Wear what feels like you. Everyday confidence is just one reach-out away.&quot;
                    </p>
                </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
