import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Al-Mansour',
    role: 'Project Director, Gulf Infrastructure',
    content: "Zyseal's engineering precision is unmatched. Their waterproofing systems were instrumental in the successful completion of the Skyline International Airport. A true partner in structural excellence.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Sarah Chen',
    role: 'Principal Architect, Urban Lab',
    content: "The aesthetic versatility of their industrial flooring solutions allowed us to maintain a high-end design while meeting extreme durability requirements. Highly recommended for premium projects.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Robert Miller',
    role: 'Operations Head, Global Logistics',
    content: "We've reduced long-term maintenance costs by 40% since implementing Zyseal's concrete restoration protocols. Their technical support is world-class and available 24/7.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="pt-12 md:pt-20 pb-24 md:pb-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-20 -z-10" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-8 h-[2px] bg-brand-red" />
                <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs">Testimonials</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="heading-md text-navy font-black mb-8"
              >
                Voices of <br /><span className="text-brand-red">Global Trust</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-navy/40 font-light max-w-sm"
              >
                Discover why the world's leading engineering firms choose Zyseal for their most ambitious projects.
              </motion.p>
            </div>
            
            <div className="flex items-center gap-6">
              <button 
                onClick={prev}
                className="w-16 h-16 rounded-full border border-navy/5 flex items-center justify-center text-navy hover:bg-brand-red hover:text-white transition-all duration-500 shadow-xl"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                className="w-16 h-16 rounded-full border border-navy/5 flex items-center justify-center text-navy hover:bg-brand-red hover:text-white transition-all duration-500 shadow-xl"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Column: Slider Card */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-navy/5 rounded-full blur-3xl -z-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="glass-card p-12 md:p-20 relative overflow-hidden"
                >
                  <Quote className="absolute top-10 right-10 w-32 h-32 text-navy/5 -z-10" />
                  
                  <div className="flex flex-col gap-10">
                    <div className="flex justify-start gap-1">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-brand-red text-brand-red" />
                      ))}
                    </div>
                    
                    <p className="text-2xl md:text-3xl text-navy font-light leading-relaxed italic">
                      "{testimonials[current].content}"
                    </p>
                    
                    <div className="flex items-center gap-6 pt-10 border-t border-navy/5">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-brand-red/20 shadow-lg shrink-0">
                        <img src={testimonials[current].image} alt={testimonials[current].name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-navy mb-1">{testimonials[current].name}</h4>
                        <p className="text-brand-red font-black text-[10px] uppercase tracking-[0.2em]">{testimonials[current].role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Slider Dots */}
              <div className="flex justify-center gap-4 mt-12">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-[2px] transition-all duration-500 rounded-full ${current === i ? 'w-12 bg-brand-red' : 'w-4 bg-navy/10'}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
