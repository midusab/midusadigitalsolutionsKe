import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-48 px-8 border-t border-midusa-border bg-midusa-bg">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
        >
          <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-midusa-text-dim mb-8">/ Contact</div>
          <h2 className="font-display text-5xl md:text-8xl font-bold mb-12 tracking-tighter text-midusa-text leading-[0.9]">Ready to <br /> Start?</h2>
          <p className="text-midusa-text-dim text-lg md:text-xl max-w-xl mx-auto mb-16 font-body leading-relaxed">
            Let's build something exceptional together. Reach out to discuss your project.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-midusa-text text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-4 mx-auto group"
          >
            GET_STARTED <ArrowRight size={16} className="text-midusa-text-dim group-hover:text-midusa-text transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
