import React from 'react';
import { motion } from 'motion/react';

const images = [
  "/pre/WhatsApp Image 2026-08-14 at 20.52.32 (1).jpeg",
  "/pre/WhatsApp Image 2026-08-14 at 20.52.32 (2).jpeg",
  "/pre/WhatsApp Image 2026-08-14 at 20.52.32.jpeg",
  "/pre/WhatsApp Image 2026-08-14 at 20.52.36.jpeg",
  "/pre/WhatsApp Image 2026-08-14 at 20.52.37 (1).jpeg",
  "/pre/WhatsApp Image 2026-08-14 at 20.52.37.jpeg",
];

export const HorizontalGallery: React.FC = () => {
  return (
    <section className="py-20 bg-brand-ivory overflow-hidden border-y border-brand-gold/20 relative">
      <div className="absolute inset-0 bg-brand-gold/5 pointer-events-none" />
      
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-display text-[#D4AF37] drop-shadow-sm mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Captured Moments
        </h2>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/70"></div>
          <p className="text-stone-500 font-sans tracking-[0.2em] text-xs uppercase">A Glimpse of Love</p>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/70"></div>
        </div>
      </div>

      <div className="w-full relative flex items-center h-[300px] sm:h-[400px] overflow-hidden">
        {/* Left and right elegant fading masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-brand-ivory to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-brand-ivory to-transparent z-10 pointer-events-none" />
        
        {/* We duplicate the images array to create a seamless infinite loop moving left to right */}
        <motion.div
          className="flex space-x-4 sm:space-x-6 absolute left-0 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {[...images, ...images].map((src, idx) => (
            <div 
              key={idx} 
              className="w-[220px] sm:w-[300px] h-[300px] sm:h-[400px] shrink-0 rounded-2xl overflow-hidden border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-500 group relative"
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx}`} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
