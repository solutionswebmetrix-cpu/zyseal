import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-dark pt-32 pb-16 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          {/* Brand Info (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-red flex items-center justify-center rounded-xl font-bold text-white text-2xl shadow-lg shadow-brand-red/20">
                Z
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black tracking-tighter leading-none text-white">
                  ZYSEAL
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase leading-none mt-1 text-white/40">
                  Industrial Solutions
                </span>
              </div>
            </div>
            
            <p className="text-white/40 leading-relaxed font-light text-base max-w-sm">
              Global leaders in industrial protection and structural integrity. Delivering high-performance engineering solutions for the world's most demanding projects since 1995.
            </p>
            
            <div className="flex items-center gap-4">
              {[Globe, Mail, Phone, MapPin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#E31E24' }}
                  className="w-12 h-12 glass-dark rounded-xl flex items-center justify-center text-white/40 transition-all border-none"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 columns) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Corporate</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'Global Presence', 'Engineering', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/30 hover:text-brand-red transition-all flex items-center gap-3 group text-sm font-bold">
                    <div className="w-0 h-[1px] bg-brand-red transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (3 columns) */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Specializations</h4>
            <ul className="flex flex-col gap-4">
              {[
                'Waterproofing Systems',
                'Industrial Flooring',
                'Concrete Restoration',
                'Structural Monitoring',
                'Thermal Insulation'
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/30 hover:text-brand-red transition-all flex items-center gap-3 group text-sm font-bold">
                    <div className="w-0 h-[1px] bg-brand-red transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (3 columns) */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Global HQ</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-red shrink-0" size={18} />
                <span className="text-white/40 text-sm font-medium">123 Industrial Way, <br />New York, NY 10001, USA</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-brand-red shrink-0" size={18} />
                <span className="text-white/40 text-sm font-medium">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-brand-red shrink-0" size={18} />
                <span className="text-white/40 text-sm font-medium">hq@zyseal.com</span>
              </div>
            </div>
            
            <div className="mt-4 p-6 glass-dark rounded-2xl border-white/5 flex items-center gap-4">
              <ShieldCheck className="text-brand-red" size={24} />
              <div>
                <div className="text-[10px] font-black text-white uppercase tracking-widest">Certified Quality</div>
                <div className="text-xs text-white/40">ISO 9001:2015 Registered</div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
              © 2026 ZYSEAL INDUSTRIAL SOLUTIONS. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-6 text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
            <Globe size={14} />
            <span>Global Engineering Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
