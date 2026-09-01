import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const HeroContent: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const prefix = searchParams.get('prefix');
  const name = searchParams.get('name');

  const guestNameString = (prefix || name) 
    ? `${prefix ? prefix + ' ' : ''}${name || ''}`.trim() 
    : '';

  return (
    <section aria-label="Hero" className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ChatGPT Image Sep 2, 2026, 01_40_42 AM.png" 
          alt="Wedding background" 
          className="h-full w-full object-cover" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-transparent" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4">
      </div>

      {/* Swipe up */}
      <motion.div 
        className="absolute bottom-8 inset-x-0 z-10 flex justify-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center text-center animate-bounce">
          <p className="text-[11px] sm:text-xs font-sans tracking-widest text-[#FFFFFF] mb-2 opacity-90 drop-shadow-md">Scroll down</p>
          <ChevronDown className="h-6 w-6 text-[#FFFFFF] opacity-90 drop-shadow-md" />
        </div>
      </motion.div>
      
    </section>
  );
};
