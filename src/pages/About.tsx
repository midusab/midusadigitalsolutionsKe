import { motion } from "motion/react";
import { Code, Globe, Database, Shield, Zap, Cpu } from "lucide-react";

const stats = [
  { label: "Architects", value: "24+" },
  { label: "Systems Built", value: "150+" },
  { label: "Uptime", value: "99.99%" },
  { label: "Global Presence", value: "12" },
];

const expertise = [
  { icon: Globe, title: "Edge Infrastructure", desc: "Low-latency content delivery networks optimized for the modern web." },
  { icon: Database, title: "Neural Orchestration", desc: "Scaling LLMs and vector databases with architectural precision." },
  { icon: Shield, title: "Zero-Trust Security", desc: "Military-grade encryption and adaptive perimeter security." },
  { icon: Zap, title: "H/F Performance", desc: "Sub-100ms response times for data-intensive enterprise apps." },
];

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-48 pb-24"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-32">
          <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/30 mb-6">/ About_Us</div>
          <h1 className="font-display text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] max-w-4xl">
            Design built <br />for tomorrow.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-48">
          <p className="text-white/50 text-xl md:text-2xl leading-relaxed font-body">
            Midusa Digital was founded on the principle that digital infrastructure should be as robust as physical architecture. We don't just build apps; we engineer environments where businesses can evolve without friction.
          </p>
          <div className="grid grid-cols-2 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-white/10 pl-8 py-2">
                <div className="text-3xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/30 mb-12">/ Our_Values</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-white/10">
          {expertise.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-12 border-r border-b lg:border-b-0 border-white/10 group hover:bg-white/[0.02] transition-colors"
            >
              <div className="text-[10px] font-bold text-white/20 mb-16">[0{idx + 1}]</div>
              <h3 className="font-display text-xl font-bold mb-6 text-white tracking-tight">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-body group-hover:text-white/60 transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
