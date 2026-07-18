import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Crown } from 'lucide-react';

export const HappyCouple: React.FC = () => {
  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-10 text-[#D4AF37] opacity-20 h-6 w-6" />
        <Sparkles className="absolute top-40 right-20 text-[#D4AF37] opacity-20 h-5 w-5" />
        <Crown className="absolute bottom-40 right-10 text-[#D4AF37] opacity-20 h-5 w-5" />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        
        <motion.div 
          className="flex flex-col items-center space-y-6 text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-display text-[#D4AF37]" style={{ fontFamily: "'Great Vibes', cursive" }}>
            The Happy Couple
          </h2>
          <div className="w-32 h-1 bg-red-900 rounded-full" />
          <p className="text-xl md:text-2xl text-white max-w-2xl font-sans tracking-wide">
            What began as a moment became our forever
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-start max-w-6xl mx-auto">
          
          {/* Groom */}
          <motion.div 
            className="flex flex-col items-center text-center space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <div className="space-y-4 pt-4">
              <h3 className="text-5xl font-display text-[#D4AF37]">
                Isuru Jasin Arachchi
              </h3>
              <div className="text-white space-y-3">
                <p className="text-xl font-sans">The Groom</p>
                <p className="text-[#D4AF37] font-sans text-sm tracking-wide">
                  Son of Mr &amp; Mrs Jasin Arachchi
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bride */}
          <motion.div 
            className="flex flex-col items-center text-center space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <div className="space-y-4 pt-4">
              <h3 className="text-5xl font-display text-[#D4AF37]">
                Imalsha Dewpura Arachchi
              </h3>
              <div className="text-white space-y-3">
                <p className="text-xl font-sans">The Bride</p>
                <p className="text-[#D4AF37] font-sans text-sm tracking-wide">
                  Daughter of Mr &amp; Mrs. Dewpura Arachchi
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
