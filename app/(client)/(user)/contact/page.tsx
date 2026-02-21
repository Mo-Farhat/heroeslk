import Link from "next/link";
import { Mail, MessageCircle, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Container from "@/components/Container";

const ContactPage = () => {
  return (
    <div className="w-full bg-[#F3F3F3] min-h-screen text-[#262626]">
      {/* Section 1: Intro */}
      <section className="relative w-full py-32 md:py-48 border-b border-gray-200 overflow-hidden">
        
        <Container className="relative z-10 text-center max-w-4xl">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 border border-gray-200 bg-white rounded-full shadow-sm mb-4">
              <MessageCircle className="w-4 h-4 text-[#262626]" />
              <span className="text-xs font-bold text-[#262626] tracking-widest uppercase">Communication Terminal</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-[#262626] leading-none uppercase tracking-tight">
              WE ARE HERE <br/> TO <span className="text-gray-400">HELP</span>
            </h1>

            <div className="w-32 h-1 bg-black mx-auto rounded-full" />

            <div className="space-y-4 text-lg md:text-xl text-gray-500 font-medium pt-4 uppercase tracking-widest">
              <p>Questions about sizing, delivery, or an order?</p>
              <p className="text-[#262626] font-bold">Reach out anytime.</p>
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
                    <h2 className="text-3xl font-bold uppercase tracking-wider text-[#262626]">Send a Message</h2>
                    <p className="text-gray-500 font-medium">Expect a response within 24 hours.</p>
                </div>
                
                <form className="space-y-8">
                    <div className="space-y-4">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                        <input 
                            type="text" 
                            placeholder="NAME / IDENTIFIER"
                            className="w-full bg-white border border-gray-200 px-6 py-4 focus:outline-none focus:border-black transition-all font-bold text-sm placeholder:text-gray-400 rounded-full"
                            required
                        />
                    </div>
                    <div className="space-y-4">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="EMAIL@DOMAIN.COM"
                            className="w-full bg-white border border-gray-200 px-6 py-4 focus:outline-none focus:border-black transition-all font-bold text-sm placeholder:text-gray-400 rounded-full"
                            required
                        />
                    </div>
                    <div className="space-y-4">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">Message Body</label>
                        <textarea 
                            rows={5}
                            placeholder="HOW CAN WE ASSIST?"
                            className="w-full bg-white border border-gray-200 px-6 py-4 focus:outline-none focus:border-black transition-all font-bold text-sm placeholder:text-gray-400 resize-none rounded-2xl"
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="group flex items-center justify-between w-full px-8 py-5 bg-black text-white font-bold uppercase tracking-[0.2em] hover:bg-[#252627] transition-all duration-500 rounded-full"
                    >
                        <span>Dispatch Signal</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                </form>
            </div>

            {/* Info Column */}
            <div className="space-y-16">
                <div className="space-y-8 p-12 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <h3 className="text-2xl font-bold uppercase tracking-wider border-b border-gray-100 pb-4 text-[#262626]">Connect Directly</h3>
                    
                    <div className="space-y-10">
                        <div className="flex gap-6 group">
                            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-[#262626] flex-shrink-0 group-hover:bg-black group-hover:text-white transition-all rounded-full">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#262626] uppercase tracking-widest text-sm mb-2">Email Support</h4>
                                <a href="mailto:support@heroeslk.com" className="text-gray-500 font-bold hover:text-black transition-colors">SUPPORT@HEROESLK.COM</a>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-[#262626] flex-shrink-0 group-hover:bg-black group-hover:text-white transition-all rounded-full">
                                <HelpCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#262626] uppercase tracking-widest text-sm mb-2">Customer Care</h4>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed mb-4">Monday – Friday <br/> 0900 – 1800 IST</p>
                                <Link href="/faqs" className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-black hover:underline transition-colors">View FAQ Database</Link>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-[#262626] flex-shrink-0 group-hover:bg-black group-hover:text-white transition-all rounded-full">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#262626] uppercase tracking-widest text-sm mb-2">Secure Transactions</h4>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed">Encrypted checkout and reliable shipping partners.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-12 border border-gray-200 bg-white rounded-xl shadow-sm relative group overflow-hidden">
                    <p className="text-xl font-medium text-gray-600 leading-relaxed relative z-10 italic">
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
