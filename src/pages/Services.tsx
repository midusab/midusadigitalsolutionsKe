import { motion } from "motion/react";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <div className="pt-48 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-8 mb-32 text-center"
      >
        <div className="mb-32 text-center">
          <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-midusa-text-dim mb-6">/ Service_Matrix</div>
          <h1 className="font-display text-5xl md:text-8xl font-bold text-midusa-text mb-8 tracking-tighter leading-[0.9]">What We Do.</h1>
          <p className="text-midusa-text-dim text-lg max-w-2xl mx-auto font-body">
            We offer a complete suite of digital services designed to help modern businesses grow and scale.
          </p>
        </div>
      </motion.div>
      <Services />
    </div>
  );
}
