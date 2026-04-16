import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Globe, ArrowRight, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-premium-gray relative overflow-hidden bg-grid">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Column: Info (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-brand-red" />
                <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs">Connect With Us</span>
              </div>
              
              <h2 className="heading-md text-navy font-black mb-8">
                Initiate Your <br /><span className="text-brand-red">Global Project</span>
              </h2>
              
              <p className="text-xl text-navy/40 font-light leading-relaxed mb-12">
                Our global engineering team is ready to provide specialized solutions for your next architectural or industrial landmark.
              </p>

              <div className="grid grid-cols-1 gap-10">
                {[
                  { icon: <Phone size={24} />, title: 'Direct Line', content: '+1 (234) 567-8900', sub: 'Mon-Fri, 9am - 6pm EST' },
                  { icon: <Mail size={24} />, title: 'Email Inquiry', content: 'projects@zyseal.com', sub: '24/7 Support Response' },
                  { icon: <MapPin size={24} />, title: 'Global HQ', content: '123 Industrial Way, NY 10001', sub: 'United States of America' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-6 group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-navy shadow-xl group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/20 mb-1">{item.title}</div>
                      <div className="text-lg font-black text-navy mb-1">{item.content}</div>
                      <div className="text-xs text-navy/40 font-bold tracking-tight">{item.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form (7 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-12 md:p-20 relative overflow-hidden bg-white/80">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              
              <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-premium-gray/50 border border-navy/5 rounded-2xl p-6 outline-none focus:border-brand-red focus:bg-white transition-all duration-300 font-bold text-navy placeholder:text-navy/20"
                  />
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="w-full bg-premium-gray/50 border border-navy/5 rounded-2xl p-6 outline-none focus:border-brand-red focus:bg-white transition-all duration-300 font-bold text-navy placeholder:text-navy/20"
                  />
                </div>
                
                <div className="flex flex-col gap-3 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/40 ml-1">Service Required</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Waterproofing', 'Flooring', 'Repair', 'Other'].map((service) => (
                      <label key={service} className="relative cursor-pointer group">
                        <input type="radio" name="service" className="peer sr-only" />
                        <div className="p-4 text-center rounded-xl border border-navy/5 bg-premium-gray/50 text-[10px] font-black uppercase tracking-widest text-navy/40 peer-checked:bg-brand-red peer-checked:text-white peer-checked:border-brand-red transition-all duration-300 group-hover:border-brand-red/30">
                          {service}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/40 ml-1">Project Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="Briefly describe your project requirements..." 
                    className="w-full bg-premium-gray/50 border border-navy/5 rounded-3xl p-6 outline-none focus:border-brand-red focus:bg-white transition-all duration-300 font-bold text-navy placeholder:text-navy/20 resize-none"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <button className="btn-primary w-full justify-center group py-6">
                    <span className="text-lg tracking-[0.1em]">Send Global Inquiry</span>
                    <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
