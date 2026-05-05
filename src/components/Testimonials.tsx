import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alexander Voss",
    role: "CEO, Aethelgard Systems",
    quote: "Midusa didn't just build our platform; they redefined our digital architecture. The precision in their design is unparalleled in the industry.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Elena Rossi",
    role: "Design Lead, Nova Capital",
    quote: "Their process is as beautiful as the end product. Minimalist aesthetics combined with sheer technical performance. A rare find.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Marcus Thorne",
    role: "CTO, Infinite Flow",
    quote: "Transitioning to Midusa's ecosystem was the best decision for our scalability. The speed and stability of their builds are exceptional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Testimonials() {
  return (
    <section className="py-48 px-8 border-t border-midusa-border bg-midusa-bg relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 text-center">
          <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-midusa-text-dim mb-6">/ Testimonials</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-midusa-text max-w-2xl mx-auto">
            Trusted by architects of the digital age.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-12 flex flex-col group relative overflow-hidden"
            >
              <div className="mb-12 text-midusa-text-dim/20">
                <Quote size={40} className="group-hover:text-midusa-text/20 transition-colors duration-500" />
              </div>
              
              <div className="flex gap-1 mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={10} fill="currentColor" className="text-midusa-text" />
                ))}
              </div>

              <p className="text-midusa-text/80 text-lg leading-relaxed font-body mb-12 flex-1 italic">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4 border-t border-midusa-border pt-8">
                <div className="w-10 h-10 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-midusa-border">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="text-midusa-text font-display font-bold text-sm tracking-tight">{item.name}</div>
                  <div className="text-midusa-text-dim text-[8px] uppercase tracking-widest font-bold">/ {item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
