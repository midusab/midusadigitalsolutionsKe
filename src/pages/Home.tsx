import { motion } from "motion/react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <Process />
      <TechStack />
      <Contact />
      <FAQ />
      <CTA />
    </motion.div>
  );
}
