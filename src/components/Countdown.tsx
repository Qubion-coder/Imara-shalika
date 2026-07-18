import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface CountdownProps {
  targetDate: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const days = Math.max(0, differenceInDays(targetDate, now));
      const hours = Math.max(0, differenceInHours(targetDate, now) % 24);
      const minutes = Math.max(0, differenceInMinutes(targetDate, now) % 60);
      const seconds = Math.max(0, differenceInSeconds(targetDate, now) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="w-full py-24 bg-gradient-to-br from-black to-red-900 overflow-hidden relative">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-12 text-center">
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-display text-[#D4AF37] leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Counting Down to<br/>Forever
            </h2>
            <div className="flex items-center justify-center space-x-3 text-gray-300 mt-4">
              <Heart className="h-5 w-5 text-gray-300" strokeWidth={1.5} />
              <span className="text-lg md:text-xl font-sans text-white font-light tracking-wide">
                Our special day is almost here
              </span>
              <Heart className="h-5 w-5 text-gray-300" strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-5xl w-full pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col items-center justify-center p-6 w-40 h-56 md:w-48 md:h-64 bg-black rounded-[45%] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#D4AF37]/40 mx-auto transition-transform hover:scale-105 duration-300">
                <div className="text-6xl md:text-7xl font-bold font-sans text-[#D4AF37] mb-2" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm text-white font-medium font-sans uppercase tracking-widest mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
