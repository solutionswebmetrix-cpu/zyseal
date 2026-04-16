import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Shield, Wrench, Layers, Wind, ArrowRight, Activity } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Waterproofing Solutions',
    description: 'Comprehensive waterproofing systems for roofs, basements, and structures, ensuring long-lasting protection against water damage and leaks.',
    icon: <Droplets className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '02',
    title: 'Industrial Flooring Service',
    description: 'High-performance epoxy and polyurethane flooring solutions designed for industrial durability, chemical resistance, and seamless finish.',
    icon: <Layers className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '03',
    title: 'Thermal Insulation Service',
    description: 'Advanced thermal insulation techniques for energy efficiency, temperature control, and structural integrity in commercial and industrial buildings.',
    icon: <Wind className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  }
];

const Services = () => {
  return (
    <section id="services" className="pt-40 pb-24 bg-premium-gray relative overflow-hidden bg-grid">
      <div className="container-custom relative z-10">
        <div className="flex flex-col gap-6 mb-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="w-8 h-[2px] bg-brand-red" />
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs">Our Expertise</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-md text-navy font-black"
          >
            Precision Engineered <br />Solutions for <span className="text-brand-red">Modern Industry</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-navy/40 max-w-2xl font-light"
          >
            We combine decades of engineering expertise with advanced materials to deliver structural protection that stands the test of time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-700"
            >
              {/* Image Header */}
              <div className="h-64 overflow-hidden relative bg-navy/10">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500" />
                <div className="absolute top-8 left-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-1 relative">
                {/* Background Watermark Number - Subtle and well-positioned */}
                <div className="absolute bottom-10 right-10 text-navy/[0.05] font-black text-8xl italic pointer-events-none group-hover:text-brand-red/[0.08] transition-all duration-700">
                  {service.id}
                </div>
                
                <h3 className="text-2xl font-black text-navy mb-4 group-hover:text-brand-red transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                <p className="text-navy/50 text-base leading-relaxed mb-10 flex-1 relative z-10">
                  {service.description}
                </p>
                
                <div className="pt-8 border-t border-navy/5">
                  <button className="flex items-center gap-3 text-navy font-black text-xs uppercase tracking-widest group/btn">
                    Discover More 
                    <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center group-hover/btn:bg-brand-red group-hover/btn:text-white transition-all duration-300">
                      <ArrowRight size={14} />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 bg-navy rounded-[3.5rem] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px]" />
          
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
              Need a Custom <br /><span className="text-brand-red">Engineering</span> Solution?
            </h3>
            <p className="text-white/50 text-lg font-light">
              Our experts are ready to design a specialized system tailored to your unique structural requirements.
            </p>
          </div>
          
          <div className="relative z-10">
            <button className="btn-primary">
              Schedule Consultation <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
