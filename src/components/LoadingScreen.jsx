import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative">
        {/* Animated Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-2 border-brand-red/20 border-t-brand-red rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 m-auto w-24 h-24 border-2 border-white/10 border-b-white rounded-full"
        />
        
        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center font-bold text-white text-3xl shadow-xl"
          >
            Z
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="text-white font-display font-bold text-3xl tracking-widest mb-2">ZYSEAL</div>
        <div className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px]">Industrial Engineering Solutions</div>
      </motion.div>

      {/* Progress line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="h-full bg-brand-red shadow-[0_0_20px_rgba(227,30,36,0.5)]"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
