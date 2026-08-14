import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroOverlayProps {
  onEnter: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onEnter }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play().catch(e => console.error("Playback failed", e));
    }
  };

  const searchParams = new URLSearchParams(window.location.search);
  const prefix = searchParams.get('prefix');
  const name = searchParams.get('name');

  const guestNameString = (prefix || name) 
    ? `${prefix ? prefix + ' ' : ''}${name || ''}`.trim() 
    : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden bg-black">
      <video 
        ref={videoRef}
        muted 
        playsInline 
        onEnded={onEnter}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Wedding_envelope_opens_with_light_202608040131.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      
      <AnimatePresence>
        {!isPlaying && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-10 w-full flex flex-col justify-end items-center pb-24 h-full gap-6"
          >
            {guestNameString && (
              <div className="absolute top-16 sm:relative sm:top-auto flex flex-col items-center justify-center bg-black/30 px-8 py-4 rounded-2xl backdrop-blur-sm border border-[#D4AF37]/20 mb-4 sm:mb-8 z-20">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 font-sans text-white/90 drop-shadow-md text-center">
                  We cordially invite
                </p>
                <p className="font-serif text-2xl sm:text-3xl text-[#D4AF37] whitespace-nowrap text-center drop-shadow-lg">
                  {guestNameString}
                </p>
              </div>
            )}
            <button 
              onClick={handlePlay}
              className="font-sans px-10 py-4 bg-[#121212]/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/50 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all duration-300 uppercase tracking-[0.3em] text-xs sm:text-sm"
            >
              Open Invitation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
