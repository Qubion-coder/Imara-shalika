import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export const HomecomingDetails: React.FC = () => {
  return (
    <section id="details" className="w-full py-24 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display text-[#D4AF37]" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Wedding Details
          </h2>
          <div className="w-32 h-1 bg-red-900 rounded-full"></div>
          <p className="text-xl text-white max-w-3xl font-sans tracking-wide">
            All the important information you need to celebrate our special day with us.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-1 max-w-7xl mx-auto px-4">
          <motion.div 
            className="relative p-8 md:p-10 rounded-t-[500px] border-[6px] border-[#D4AF37]/50 shadow-xl flex flex-col items-center text-center min-h-[850px] overflow-hidden bg-gradient-to-br from-black to-red-400"
            style={{ clipPath: 'circle(100% at 50% 50%)' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 z-0 opacity-10">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490937419.jpg?k=db375a7f6605f58e61e5c215e67b123fb574b467d15a784387c7b2b04cc272c0&o=" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center mt-16">
              <h3 className="text-2xl md:text-3xl font-sans font-bold uppercase text-[#D4AF37] mb-4 tracking-widest">
                Wedding Ceremony
              </h3>
              <div className="h-[1px] w-48 bg-red-900 mb-10"></div>
            </div>

            <div className="relative z-10 space-y-8 text-gray-300 font-sans flex-grow w-full flex flex-col items-center">
              <div className="mb-4">
                <div className="relative w-40 h-48 mb-4">
                  <div className="absolute inset-0 bg-zinc-900/30 border border-[#D4AF37]/50 rounded-t-full rotate-[-4deg]"></div>
                  <div className="absolute inset-0 bg-black shadow-lg border-4 border-[#D4AF37]/50 rounded-t-full flex flex-col overflow-hidden">
                    <div className="flex-grow bg-zinc-900 flex items-center justify-center">
                      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490937419.jpg?k=db375a7f6605f58e61e5c215e67b123fb574b467d15a784387c7b2b04cc272c0&o=" alt="Ceremony" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-10 flex items-center justify-center bg-black">
                      <span className="text-gray-300 text-sm tracking-wider uppercase">The Celebration</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Monday</p>
                    <p className="text-xl font-semibold tracking-widest">21st September 2026</p>
                  </div>
                  <div className="text-md tracking-wider border-y border-[#D4AF37]/50 py-2 inline-block px-8 text-center space-y-1">
                    <div>Registration 5:15 PM</div>
                    <div>Poruwa 6:02 PM</div>
                    <div>Reception 6:30 PM</div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-3 pt-2">
                    <MapPin className="h-5 w-5 text-white" />
                    <div>
                      <p className="text-lg font-medium">Jetwing Lighthouse</p>
                      <p className="text-sm leading-relaxed max-w-[200px] opacity-80 mx-auto">
                        Galle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-10 pb-10 w-full flex flex-col items-center">
              <a 
                target="_blank" 
                rel="noreferrer"
                href="https://maps.app.goo.gl/vRqLnVGkasZwAqbx9?g_st=ic"
                className="inline-flex items-center space-x-3 px-10 py-4 rounded-full text-[11px] font-sans text-white font-semibold transition-all hover:bg-red-800 bg-red-900 shadow-lg uppercase tracking-widest"
              >
                <MapPin className="h-3.5 w-3.5" />
                <span>View Location</span>
              </a>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};
