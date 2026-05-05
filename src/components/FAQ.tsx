import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity, but most enterprise solutions are delivered within 8-12 weeks using our high-fidelity agile framework."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, we offer comprehensive enterprise support packages that include security patching, performance monitoring, and bi-weekly feature updates."
  },
  {
    question: "Can we integrate custom AI models?",
    answer: "Absolutely. We specialize in integrating proprietary LLMs and custom machine learning models into high-performance infrastructure."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(1); // Default second one open as in picture

  return (
    <section className="py-48 px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/30 mb-12 text-center">/ Support</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-24 tracking-tight text-white leading-tight">Frequently asked questions.</h2>
        <div className="space-y-px bg-white/10 border border-white/10 bg-grid">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#030812] p-8 md:p-12 cursor-pointer transition-colors duration-500 hover:bg-white/[0.02]"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="flex justify-between items-center gap-8">
                <h4 className={`font-display text-lg md:text-xl font-bold tracking-tight transition-colors duration-500 ${openIdx === idx ? "text-white" : "text-white/40 group-hover:text-white"}`}>
                  {faq.question}
                </h4>
                <div className="shrink-0 text-white/20">
                  {openIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </div>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/40 text-sm md:text-base mt-8 leading-relaxed font-body max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
