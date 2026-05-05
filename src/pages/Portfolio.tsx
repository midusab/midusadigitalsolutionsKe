import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Project Aether",
    category: "AI Finance",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    desc: "Predictive asset management for decentralized finance protocols."
  },
  {
    title: "Nova OS",
    category: "Systems",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
    desc: "Cloud-native operating environment for industrial robotics."
  },
  {
    title: "Synthesis Lab",
    category: "Biotech",
    image: "https://images.unsplash.com/photo-1579154238328-3498b13862f9?q=80&w=2874&auto=format&fit=crop",
    desc: "Real-time genomic data visualization and modeling."
  },
  {
    title: "Flux Grid",
    category: "Energy",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2940&auto=format&fit=crop",
    desc: "Autonomous smart grid management for clean energy networks."
  }
];

export default function Portfolio() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-48 pb-24 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 text-center">
          <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-midusa-text-dim mb-6">/ Our_Work</div>
          <h1 className="font-display text-5xl md:text-8xl font-bold text-midusa-text tracking-tighter leading-[0.9]">Selected Work.</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-midusa-border border border-midusa-border">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-midusa-bg overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-12 md:p-16 flex justify-between items-end border-t border-midusa-border bg-gradient-to-t from-midusa-bg to-transparent">
                <div>
                  <div className="text-[9px] uppercase tracking-[0.4em] text-midusa-text-dim font-bold mb-4">{project.category}</div>
                  <h3 className="font-display text-3xl font-bold text-midusa-text mb-6 tracking-tight">{project.title}</h3>
                  <p className="text-midusa-text-dim text-sm max-w-sm font-body leading-relaxed">{project.desc}</p>
                </div>
                <Link to="#" className="w-12 h-12 flex items-center justify-center text-midusa-text-dim group-hover:text-midusa-text group-hover:translate-x-2 group-hover:-translate-y-2 transition-all">
                  <ArrowUpRight size={24} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
