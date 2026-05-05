import { motion } from "motion/react";

const plans = [
  {
    name: "Architect",
    price: "4.5k",
    period: "/mo",
    desc: "Essential infrastructure for scaling startups and dynamic ventures.",
    features: ["Standard deployment", "Security audits", "24/7 Monitoring", "Standard support"],
    featured: false
  },
  {
    name: "Enterprise",
    price: "12k",
    period: "/mo",
    desc: "High-performance systems designed for mission-critical operations.",
    features: ["Priority deployment", "Advanced AI integration", "Dedicated infra team", "1hr Response SLA"],
    featured: true
  },
  {
    name: "Custom",
    price: "PoA",
    period: "",
    desc: "Bespoke digital architecture engineered for global scale dominance.",
    features: ["White-glove engineering", "Proprietary model training", "Custom protocols", "On-site consulting"],
    featured: false
  }
];

export default function Pricing() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-48 pb-24 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/30 mb-6">/ Pricing_Plans</div>
          <h1 className="font-display text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">Simple Plans.</h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-body">
            Predictable pricing models for businesses systems that need to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#030812] p-12 flex flex-col group hover:bg-white/[0.02] transition-colors duration-700"
            >
              <div className="flex justify-between items-start mb-16">
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Plan_0{idx + 1}</span>
                {plan.featured && (
                  <span className="text-[8px] font-bold text-white uppercase tracking-[0.2em] border border-white/20 px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-6 tracking-tight">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-12">
                <span className="text-5xl font-display font-bold text-white tracking-tighter">{plan.price}</span>
                <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{plan.period}</span>
              </div>
              
              <div className="space-y-6 mb-16 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 text-xs text-white/50">
                    <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-white/5 border border-white/5 text-[9px] font-bold text-white uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500">
                Get_Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
