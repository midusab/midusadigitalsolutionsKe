import { motion } from "motion/react";

export default function GenericPage({ title, description }: { title: string; description: string }) {
  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full glow-bg -z-10 opacity-30"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-8 text-center relative z-10"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-midusa-primary/50 mx-auto mb-8"
        ></motion.div>
        
        <h1 className="font-display text-5xl md:text-8xl font-black text-gradient mb-10 tracking-tighter leading-none">{title}</h1>
        <p className="text-[#bfc7d3]/80 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-body">
          {description}
        </p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center animate-bounce">
            <div className="w-1 h-1 bg-midusa-primary rounded-full"></div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#bfc7d3]/40 font-bold">Deep Scan in Progress</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
