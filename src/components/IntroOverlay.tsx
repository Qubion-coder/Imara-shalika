import React from 'react';

interface IntroOverlayProps {
  onEnter: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden bg-black" style={{ opacity: 1 }}>
      <picture className="absolute inset-0 w-full h-full">
        <source media="(min-width: 1024px)" srcSet="/intro_bg.png" />
        <source media="(min-width: 560px)" srcSet="/intro_bg.png" />
        <img src="/intro_bg.png" alt="Wedding background" className="w-full h-full object-cover" />
      </picture>
      <div className="absolute inset-0 bg-[#6b0908]/10"></div>
      <div className="relative z-10 w-full max-w-[400px] aspect-[1/2] max-h-[90vh] flex flex-col justify-between items-center px-6 py-12">
        <div className="h-20"></div>
        <div className="flex items-center justify-center w-full min-h-[250px]">
          <div className="w-full px-6 text-center" style={{ opacity: 1, transform: 'none' }}>
            <img src="/intro_logo.png" alt="Isuru Imalsha Logo" className="w-full max-w-[280px] h-auto mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] object-contain rounded-[40%]" />
          </div>
        </div>
        <div className="w-full pb-8 flex justify-center" style={{ opacity: 1, transform: 'none' }}>
          <button 
            onClick={onEnter}
            className="font-tenorsans px-12 py-3.5 bg-[#6b0908] text-[#D4AF37] border-2 border-[#D4AF37] font-black rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:bg-[#D4AF37] hover:text-[#6b0908] hover:scale-105 transition-all duration-300 ease-out uppercase tracking-[0.25em] text-[12px] relative z-30"
          >
            View Invitation
          </button>
        </div>
      </div>
    </div>
  );
};
