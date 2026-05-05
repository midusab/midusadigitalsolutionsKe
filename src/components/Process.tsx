import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep-dive into technical requirements and business objectives."
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Drafting scalable infrastructure and high-fidelity wireframes."
  },
  {
    num: "03",
    title: "Engineering",
    desc: "Rapid development with iterative testing and refinement cycles."
  },
  {
    num: "04",
    title: "Deployment",
    desc: "Production-ready launch with 24/7 technical surveillance."
  }
];

export default function Process() {
  return (
    <section className="py-48 px-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto mb-32">
        <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/30 mb-6">/ Our_Process</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl">Our proven methodology for digital success.</h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-white/10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-12 border-r border-b md:border-b-0 border-white/10 group hover:bg-white/[0.02] transition-colors duration-700"
            >
              <div className="text-[10px] font-bold text-white/20 mb-16 group-hover:text-white transition-colors">[{step.num}]</div>
              <h4 className="font-display text-xl font-bold mb-6 text-white tracking-tight">{step.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed font-body group-hover:text-white/60 transition-colors">{step.desc}</p>
              
              <div className="mt-12 h-px w-0 bg-white/20 group-hover:w-full transition-all duration-1000"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
