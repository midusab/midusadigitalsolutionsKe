import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Logo from "./Logo";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative pt-[180px] pb-24 px-8 overflow-hidden min-h-screen flex flex-col items-center justify-center text-center"
    >
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full glow-bg -z-10 opacity-60"
      ></motion.div>
      
      <div className="max-w-6xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
           className="relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-5 -z-10 blur-xl pointer-events-none">
            <Logo className="w-full h-full" textColor="text-white" />
          </div>
          <div className="font-display text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 mb-12">
            Digital Design Studio / 2026
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[140px] mb-12 text-white font-bold tracking-[-0.05em] leading-[0.85]">
            Design for <br /> Growth.
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-base md:text-lg text-white/50 max-w-xl mx-auto mb-16 leading-relaxed"
        >
          We build high-performance digital products that help modern enterprises scale through design excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12"
        >
          <button className="text-white text-[9px] uppercase tracking-[0.4em] font-bold hover:opacity-50 transition-opacity flex items-center gap-4">
            Work_With_Us <div className="w-10 h-px bg-white/20"></div>
          </button>
          <button className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-bold hover:text-white transition-all">
            Scroll_Explore
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 flex flex-col items-center gap-4 opacity-20"
      >
        <span className="text-[8px] uppercase tracking-[0.6em] font-bold">Scroll_Discover</span>
        <div className="w-px h-16 bg-white/40"></div>
      </motion.div>
    </section>
  );
}
