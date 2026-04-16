import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-brand-red flex items-center justify-center rounded-xl font-bold text-white text-2xl shadow-lg shadow-brand-red/20 group-hover:rotate-12 transition-transform duration-500">
              Z
            </div>
            <div className="absolute -inset-1 bg-brand-red/20 blur-sm rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-display font-black tracking-tighter leading-none ${isScrolled ? 'text-navy' : 'text-white'}`}>
              ZYSEAL
            </span>
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1 ${isScrolled ? 'text-navy/40' : 'text-white/40'}`}>
              Industrial Solutions
            </span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative font-bold text-sm uppercase tracking-widest transition-all duration-300 group ${
                  isScrolled ? 'text-navy/60 hover:text-brand-red' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-500 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary py-3 px-8 text-xs tracking-widest uppercase"
          >
            Get a Quote <ArrowRight size={14} />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors ${isScrolled ? 'text-navy bg-navy/5' : 'text-white bg-white/10'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-navy/60 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm glass-dark p-8 flex flex-col gap-8 shadow-2xl"
            >
              <div className="flex flex-col gap-6 mt-10">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-3xl font-display font-bold hover:text-brand-red transition-colors flex items-center justify-between group"
                  >
                    {item.name}
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto">
                <button className="btn-primary w-full justify-center py-6 text-lg">
                  Request a Quote
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
