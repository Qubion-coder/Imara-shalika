import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, CalendarHeart } from 'lucide-react';

export const HomecomingDetails: React.FC = () => {
  return (
    <section id="details" className="w-full py-24 relative overflow-hidden bg-[#000000]">
      
      {/* Subtle Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1/2 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-display text-[#D4AF37] drop-shadow-md" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Wedding Ceremony
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/70"></div>
            <p className="text-[10px] md:text-xs text-white/90 font-sans tracking-[0.4em] uppercase">
              Join us in celebration
            </p>
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/70"></div>
          </div>
        </motion.div>

        {/* Elegant Details Card */}
        <motion.div 
          className="relative w-full max-w-lg md:max-w-2xl bg-black/40 backdrop-blur-md rounded-t-[140px] rounded-b-[40px] border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 md:p-14 flex flex-col items-center text-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Decorative Inner Border */}
          <div className="absolute inset-4 border-[1px] border-[#D4AF37]/20 rounded-t-[125px] rounded-b-[25px] pointer-events-none"></div>
          
          <CalendarHeart className="w-10 h-10 md:w-12 md:h-12 text-[#D4AF37] mb-6 opacity-90 drop-shadow-md" strokeWidth={1} />
          
          <div className="space-y-2 mb-10">
            <p className="text-[11px] md:text-xs text-white/70 tracking-[0.3em] uppercase">Saturday</p>
            <p className="text-xl md:text-3xl font-serif text-[#D4AF37] tracking-widest uppercase">
              12th September 2026
            </p>
          </div>

          <div className="w-full max-w-sm mx-auto space-y-6 mb-12">
            <div className="flex items-center justify-between text-white border-b border-[#D4AF37]/20 pb-4">
              <span className="font-sans text-sm md:text-base tracking-widest uppercase opacity-90">Welcome</span>
              <span className="font-serif text-[#D4AF37] text-lg md:text-xl">7:00 PM</span>
            </div>
            <div className="flex items-center justify-between text-white border-b border-[#D4AF37]/20 pb-4">
              <span className="font-sans text-sm md:text-base tracking-widest uppercase opacity-90">Reception</span>
              <span className="font-serif text-[#D4AF37] text-lg md:text-xl">7:30 PM onwards</span>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3 mb-12">
            <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37] mb-2 opacity-90" strokeWidth={1} />
            <p className="text-xl md:text-2xl font-serif text-white tracking-wide">Senuri Grand Castello</p>
            <p className="text-[11px] md:text-sm text-white/60 tracking-widest uppercase">Sri Lanka</p>
          </div>

          <a 
            target="_blank" 
            rel="noreferrer"
            href="https://maps.app.goo.gl/sPhQ8ByTPagJzPES7?g_st=aw"
            className="group relative inline-flex items-center justify-center space-x-3 px-10 py-4 overflow-hidden rounded-full border border-[#D4AF37] bg-transparent transition-all duration-300 hover:bg-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <span className="absolute inset-0 w-full h-full bg-[#D4AF37] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <MapPin className="h-4 w-4 text-[#D4AF37] group-hover:text-black transition-colors duration-300" />
            <span className="text-[10px] md:text-xs font-sans text-[#D4AF37] group-hover:text-black font-semibold uppercase tracking-[0.3em] transition-colors duration-300">
              View Location
            </span>
          </a>

        </motion.div>
      </div>
    </section>
  );
};
