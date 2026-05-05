import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Navigation",
      links: [
        { label: "Index", to: "/" },
        { label: "Services", to: "/services" },
        { label: "Portfolio", to: "/portfolio" },
        { label: "About", to: "/about" }
      ]
    },
    {
      title: "Legals",
      links: [
        { label: "Privacy", to: "/privacy" },
        { label: "Terms", to: "/terms" },
        { label: "Cookies", to: "/cookies" }
      ]
    },
    {
      title: "Status",
      links: [
        { label: "Operational", to: "#" },
        { label: "v2.0.4", to: "#" },
        { label: "San Francisco", to: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-black py-48 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-24 md:gap-12">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-12 hover:opacity-80 transition-opacity">
            <Logo className="w-6 h-6" />
            <span className="font-display text-sm font-bold text-white tracking-[0.2em] uppercase">
              Midusa.
            </span>
          </Link>
          <p className="text-white/20 text-[10px] leading-relaxed max-w-[200px] font-bold tracking-widest uppercase">
            © {currentYear} Architectural Precision <br /> Visionary Aesthetics.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h5 className="font-display text-[9px] font-bold uppercase tracking-[0.5em] text-white/20 mb-12">
              / {section.title}
            </h5>
            <ul className="space-y-6">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/40 text-[9px] font-bold uppercase tracking-[0.4em] hover:text-white transition-colors duration-500"
                  >
                    {link.label}_
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
