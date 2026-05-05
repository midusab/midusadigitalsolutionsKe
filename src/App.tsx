/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import GenericPage from "./pages/GenericPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen font-body overflow-x-hidden selection:bg-midusa-primary selection:text-midusa-bg bg-midusa-bg text-midusa-text relative bg-grid transition-colors duration-300">
          <div className="noise"></div>
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              
              {/* Legal Pages */}
              <Route 
                path="/privacy" 
                element={<GenericPage title="Privacy Policy" description="Our commitment to data sovereignty and privacy. Your systems are your legacy." />} 
              />
              <Route 
                path="/terms" 
                element={<GenericPage title="Terms of Service" description="The protocols that govern our high-performance collaborations." />} 
              />
              <Route 
                path="/cookies" 
                element={<GenericPage title="Cookie Policy" description="Transparency on how we maintain state and session integrity." />} 
              />
              <Route 
                path="/careers" 
                element={<GenericPage title="Careers" description="Join the architects building tomorrow's infrastructure today." />} 
              />

              {/* Catch-all route */}
              <Route path="*" element={<GenericPage title="404" description="Page not found in our neural network." />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
