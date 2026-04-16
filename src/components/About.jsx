import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Globe, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-24 md:pt-40 pb-12 md:pb-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-premium-gray/50 -skew-x-12 transform translate-x-1/4 -z-10" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[100px] -z-10" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Image Composition (5 columns) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="zoom-container aspect-[4/5] rounded-[3rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=1200" 
                  alt="Industrial Waterproofing" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-12 -right-12 md:right-0 glass p-10 rounded-[2.5rem] z-20 shadow-2xl border-white/40 max-w-[280px]"
            >
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 bg-brand-red rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-red/20">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <div className="text-4xl font-black text-navy leading-none mb-1">30+</div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-navy/40">Years of <br />Engineering Excellence</div>
                </div>
              </div>
            </motion.div>
            
            {/* Small Floating Image */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -top-12 -left-12 hidden md:block z-20"
            >
              <div className="w-48 h-48 rounded-[2rem] overflow-hidden border-8 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600" 
                  alt="Waterproofing Detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content (7 columns) */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[2px] bg-brand-red" />
                  <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs">About Zyseal</span>
                </div>
                
                <h2 className="heading-md text-navy font-black mb-8">
                  Pioneering the Future of <br />
                  <span className="text-brand-red">Structural Integrity</span>
                </h2>
                
                <p className="text-xl text-navy/60 font-light leading-relaxed mb-10">
                  Zyseal stands at the forefront of global industrial engineering, providing sophisticated protection systems for the world's most iconic infrastructures. Our legacy is built on uncompromising quality and innovative chemistry.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {[
                    { title: 'ISO Certified Quality', desc: 'Rigorous global standards in every product.', icon: <Award size={20} /> },
                    { title: 'Expert Engineering', desc: 'Over 180 specialist engineers worldwide.', icon: <Users size={20} /> },
                    { title: 'Global Operations', desc: 'Presence in 25+ countries across 4 continents.', icon: <Globe size={20} /> },
                    { title: 'Rapid Deployment', desc: 'Fast-track solutions for urgent structural needs.', icon: <Zap size={20} /> },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-premium-gray flex items-center justify-center text-navy group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-black text-navy text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                        <p className="text-xs text-navy/40 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-8 items-center pt-10 border-t border-navy/5">
                  <button className="btn-primary">
                    Learn Our History <ArrowRight size={20} />
                  </button>
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-lg">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Partner" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-premium-gray flex items-center justify-center text-[10px] font-black text-navy/40">
                      +12k
                    </div>
                  </div>
                  <span className="text-xs font-bold text-navy/40 uppercase tracking-widest">Global Partners</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
