import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Linkedin, Phone, Mail, MapPin, Check } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-black text-white selection:bg-brand-purple selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            {true ? (
              <img 
                src="./logo.png" 
                alt="The Viraj Logo" 
                className="w-12 h-12 object-contain"
              />
            ) : (
              <div className="w-10 h-10 bg-gradient-to-tr from-brand-purple-dark to-brand-purple rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] transition-all duration-300">
                <span className="text-xl font-bold font-serif text-white">V</span>
              </div>
            )}
            <span className="text-2xl font-serif font-bold tracking-wide group-hover:text-brand-purple-light transition-colors">The Viraj</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:text-brand-purple ${
                    isActive(link.path) ? 'text-brand-purple border-b-2 border-brand-purple pb-1' : 'text-neutral-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
                <Link to="/contact">
                  <button className="px-5 py-2 rounded-full bg-transparent border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.2)] hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] text-sm font-semibold">
                    Get Estimate
                  </button>
                </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-brand-purple transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-brand-dark border-t border-neutral-800 absolute w-full left-0 animate-fade-in-down">
            <ul className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block text-lg font-medium ${
                      isActive(link.path) ? 'text-brand-purple' : 'text-neutral-300'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
               <li>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full mt-2 px-5 py-3 rounded-lg bg-brand-purple text-white font-semibold shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                    Get Estimate
                  </button>
                </Link>
            </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-darker border-t border-neutral-800 pt-16 pb-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="./logo.png" 
                  alt="The Viraj Logo" 
                  className="w-12 h-12 object-contain"
                />
                <span className="text-xl font-serif font-bold">The Viraj</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Because Every Home Deserves a Soul. Crafting spaces that reflect your personality and lifestyle.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-brand-purple pl-3">Quick Links</h4>
              <ul className="space-y-3 text-neutral-400 text-sm">
                <li><Link to="/" className="hover:text-brand-purple transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-brand-purple transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-brand-purple transition-colors">Services</Link></li>
                <li><Link to="/faq" className="hover:text-brand-purple transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-brand-purple transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-brand-purple pl-3">Contact Info</h4>
              <ul className="space-y-4 text-neutral-400 text-sm">
                <li className="flex items-center gap-3">
                    <Phone size={16} className="text-brand-purple" />
                    <a href="tel:+91" className="hover:text-white transition-colors">+91 [Your Number]</a>
                </li>
                <li className="flex items-center gap-3">
                    <Mail size={16} className="text-brand-purple" />
                    <a href="mailto:hello@theviraj.com" className="hover:text-white transition-colors">hello@theviraj.com</a>
                </li>
                <li className="flex items-center gap-3">
                    <MapPin size={16} className="text-brand-purple" />
                    <span>[Your City/Address]</span>
                </li>
              </ul>
            </div>

             <div>
              <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-brand-purple pl-3">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-brand-panel flex items-center justify-center text-neutral-400 hover:bg-brand-purple hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                    <Instagram size={20} />
                </a>
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-brand-panel flex items-center justify-center text-neutral-400 hover:bg-brand-purple hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                    <Facebook size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-brand-panel flex items-center justify-center text-neutral-400 hover:bg-brand-purple hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                    <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
            <p>&copy; 2026 The Viraj. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-6">
                <a href="#" className="hover:text-brand-purple">Privacy Policy</a>
                <a href="#" className="hover:text-brand-purple">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;