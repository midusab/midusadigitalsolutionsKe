import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-48 px-8 border-t border-white/5 relative bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/30 mb-8">/ Contact</div>
            <h2 className="font-display text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-12">
              Let's build <br /> together.
            </h2>
            <p className="text-white/40 text-lg md:text-xl max-w-md font-body leading-relaxed mb-16">
              We're always interested in hearing about new projects and innovative ideas. Reach out to start a conversation.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-widest text-white/20 font-bold mb-1">Email_Us</div>
                  <div className="text-white font-display text-lg font-bold">midusabrian@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-widest text-white/20 font-bold mb-1">Call_Us</div>
                  <div className="text-white font-display text-lg font-bold">0112478220</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-widest text-white/20 font-bold mb-1">Location_</div>
                  <div className="text-white font-display text-lg font-bold">San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/5 p-12 lg:p-16 rounded-[40px]">
            <form className="space-y-12">
              <div className="space-y-4">
                <label className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 ml-1">01_Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white font-display text-xl focus:outline-none focus:border-white transition-all placeholder:text-white/10"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 ml-1">02_Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white font-display text-xl focus:outline-none focus:border-white transition-all placeholder:text-white/10"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 ml-1">03_Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white font-display text-xl focus:outline-none focus:border-white transition-all placeholder:text-white/10 resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ gap: "2rem" }}
                className="flex items-center gap-6 text-white text-[10px] font-bold uppercase tracking-[0.4em] group mt-12"
              >
                SEND_MESSAGE <ArrowRight size={16} className="text-white/20 group-hover:text-white transition-colors" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
