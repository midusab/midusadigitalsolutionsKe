import { motion } from "motion/react";
import { Terminal, Brain, Sparkles, Layout, BarChart, ArrowRight } from "lucide-react";

const services = [
  {
    id: "web",
    title: "Website Development",
    description: "High-fidelity web applications built on modern frameworks for speed, security, and scalability.",
    icon: Terminal,
    color: "text-midusa-primary",
    bgColor: "bg-midusa-primary/10",
    borderColor: "border-midusa-primary/20",
    size: "small"
  },
  {
    id: "ai",
    title: "AI Automation",
    description: "Custom LLM integration and workflow automation tools designed to optimize operational efficiency.",
    icon: Brain,
    color: "text-midusa-tertiary",
    bgColor: "bg-midusa-tertiary/10",
    borderColor: "border-midusa-tertiary/20",
    size: "large",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcaYAr0Lgw2ieYFNR2C3MJCvcEmd2EXnDG-L-EfprXP3_Ah_4uurkTB_BuBg2HjIdG1bAToKLGqhnAR3F4-iWldY5XGdNT1IFLLGEAY_6mPEOxAUzxVOd_nigNBkEo3kl7qn8Xd2ORkIZkRy1KqSlXTa-m8QrWLpxw3OTlGHEK0NW1Za8wkiaroHKI9ueFLhjogTbP0wFsDbZZl3HsgHXFzfWmwtYWDMEWTGFNoONTMVgFGbYuVes6ZXsmrrpcC5u8lrXpvhYTThk"
  },
  {
    id: "branding",
    title: "Branding",
    description: "Visual identities that command authority and communicate your core vision across all digital touchpoints.",
    icon: Sparkles,
    color: "text-midusa-secondary",
    bgColor: "bg-midusa-secondary/10",
    borderColor: "border-midusa-secondary/20",
    size: "small"
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "User experiences crafted with mathematical precision and cinematic immersion to maximize engagement.",
    icon: Layout,
    color: "text-midusa-primary",
    bgColor: "bg-midusa-primary/10",
    borderColor: "border-midusa-primary/20",
    size: "small"
  },
  {
    id: "seo",
    title: "SEO Mastery",
    description: "Data-driven search optimization strategies to dominate rankings and capture organic market share.",
    icon: BarChart,
    color: "text-midusa-tertiary",
    bgColor: "bg-midusa-tertiary/10",
    borderColor: "border-midusa-tertiary/20",
    size: "small"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-48 px-8 relative border-t border-midusa-border bg-midusa-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <div className="text-[9px] font-bold uppercase tracking-[0.5em] text-midusa-text-dim mb-6">/ Expertise</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-midusa-text max-w-3xl">Innovative solutions for complex digital challenges.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-midusa-border border border-midusa-border">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-midusa-bg p-12 lg:p-16 flex flex-col justify-between aspect-square group hover:bg-midusa-surface transition-colors duration-700"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-bold text-midusa-text-dim/50">0{index + 1}</span>
                  <service.icon className="text-midusa-text-dim/50 group-hover:text-midusa-text transition-colors duration-500" size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-6 text-midusa-text tracking-tight">{service.title}</h3>
                <p className="text-midusa-text-dim text-sm leading-relaxed font-body group-hover:text-midusa-text/80 transition-colors">{service.description}</p>
              </div>
              
              <button className="flex items-center gap-4 text-midusa-text-dim/50 font-display text-[9px] font-bold uppercase tracking-[0.3em] group-hover:text-midusa-text group-hover:gap-6 transition-all">
                EXPLORE <ArrowRight size={14} className="text-midusa-text-dim/50 group-hover:text-midusa-text transition-colors" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
