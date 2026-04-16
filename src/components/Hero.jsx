import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const titleLines = [
    'Innovative',
    'Waterproofing &',
    'Industrial Flooring',
    'Solutions',
  ];

  const description =
    'Delivering high-performance protection and architectural durability for global industrial projects. We redefine structural resilience with cutting-edge engineering.';

  const lineContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.8,
      },
    },
  };

  const lineAnimation = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/Banner.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/20" />
      </div>

      {/* Content */}
      <div className="container-custom relative h-full flex items-center z-20 pt-20 md:pt-32">
        <div className="max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={lineContainer}
            className="flex flex-col gap-8"
          >
            <motion.div className="flex flex-col leading-tight">
              {titleLines.map((line, index) => (
                <motion.h1
                  key={index}
                  variants={lineAnimation}
                  className={`heading-lg font-black text-white ${
                    line.includes('Waterproofing') ? 'text-brand-red' : ''
                  }`}
                >
                  {line}
                </motion.h1>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/60 max-w-3xl font-light leading-relaxed"
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

