import { motion, AnimatePresence } from "motion/react";
import { User, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "About", to: "/about" },
    { name: "Pricing", to: "/pricing" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        className={`fixed top-8 left-1/2 w-[calc(100%-48px)] md:w-[calc(100%-80px)] max-w-7xl rounded-xl border border-white/5 flex justify-between items-center px-6 md:px-10 py-4 z-50 transition-all duration-500 ${
          isScrolled ? "bg-midusa-surface/40 backdrop-blur-3xl py-3 border-white/10" : "bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-3 group hover:opacity-70 transition-opacity shrink-0">
          <Logo className="w-6 h-6" />
          <span className="font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
            Midusa.
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`font-display text-[9px] uppercase tracking-[0.5em] font-bold transition-all duration-300 hover:opacity-100 ${
                location.pathname === item.to 
                  ? "text-white" 
                  : "text-white/40 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <Link 
            to="/#contact"
            className="hidden sm:block text-white text-[9px] uppercase tracking-[0.5em] font-bold hover:scale-105 transition-transform"
          >
            Contact_
          </Link>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden px-4 pt-28 pb-8 bg-midusa-bg/95 backdrop-blur-3xl overflow-y-auto"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-display text-2xl uppercase tracking-widest font-bold ${
                    location.pathname === item.to ? "text-midusa-primary" : "text-[#bfc7d3]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px w-24 bg-white/10 my-4"></div>
              <Link 
                to="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-white text-black px-8 py-4 rounded-xl font-display text-xs uppercase tracking-[0.3em] font-bold text-center"
              >
                Let's Talk_
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
