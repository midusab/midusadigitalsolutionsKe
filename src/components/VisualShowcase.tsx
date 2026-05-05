import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1449156001933-46944600f13a?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1497366216402-245f0679148d?auto=format&fit=crop&q=80&w=2000"
];

export default function VisualShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-48 bg-midusa-bg overflow-hidden border-t border-midusa-border">
      <div className="max-w-7xl mx-auto px-8 mb-24">
        <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-midusa-text-dim mb-6">/ Visionary_Aesthetics</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-midusa-text max-w-3xl">Architectural precision in digital spaces.</h2>
      </div>

      <div className="space-y-8">
        <motion.div style={{ x: x1 }} className="flex gap-8 px-4">
          {[...images, ...images].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[400px] md:w-[600px] aspect-[16/9] overflow-hidden rounded-2xl bg-midusa-surface border border-midusa-border shadow-2xl">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" draggable={false} referrerPolicy="no-referrer" />
            </div>
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex gap-8 px-4">
          {[...images, ...images].reverse().map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[410px] md:w-[620px] aspect-[16/9] overflow-hidden rounded-2xl bg-midusa-surface border border-midusa-border shadow-2xl">
              <img src={img} alt={`Gallery Rev ${i}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" draggable={false} referrerPolicy="no-referrer" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
