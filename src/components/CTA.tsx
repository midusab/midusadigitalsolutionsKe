import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-48 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
        >
          <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/30 mb-8">/ Contact</div>
          <h2 className="font-display text-5xl md:text-8xl font-bold mb-12 tracking-tighter text-white leading-[0.9]">Ready to <br /> Start?</h2>
          <p className="text-white/40 text-lg md:text-xl max-w-xl mx-auto mb-16 font-body leading-relaxed">
            Let's build something exceptional together. Reach out to discuss your project.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-6 mx-auto group"
          >
            GET_STARTED <div className="w-16 h-px bg-white/20 group-hover:w-24 group-hover:bg-white transition-all duration-700"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
