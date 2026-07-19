import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-16 bg-gradient-to-br from-rose-900 via-black to-black text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-[#D4AF37]" strokeWidth={1.5} />
              <span className="text-4xl font-display" style={{ fontFamily: "'Great Vibes', cursive" }}>I &amp; I</span>
            </div>
            <p className="text-gray-300 leading-relaxed font-sans text-justify tracking-wide">
              Thank you for visiting our wedding website and being part of our love story. The honor of your presence would mean the world to us.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-sans font-medium text-[#D4AF37] uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('details')} className="text-gray-300 hover:text-white transition-colors capitalize font-sans tracking-wide">
                  details
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('rsvp')} className="text-gray-300 hover:text-white transition-colors capitalize font-sans tracking-wide">
                  rsvp
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-sans font-medium text-[#D4AF37] uppercase tracking-widest">Wedding Details</h3>
            <div className="space-y-3 text-gray-300 font-sans tracking-wide">
              <p>21st September 2026</p>
              <p>Jetwing Lighthouse - Galle</p>
              <p className="text-sm">#Imalsha&amp;Isuru2026</p>
            </div>
          </div>


        </div>

        <div className="mt-16 pt-8 border-t border-[#D4AF37]/50 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-5 w-5 text-[#D4AF37]" strokeWidth={1.5} />
            <span className="text-gray-300 font-sans tracking-widest uppercase text-sm">Made with love</span>
            <Heart className="h-5 w-5 text-[#D4AF37]" strokeWidth={1.5} />
          </div>
          <p className="text-[#D4AF37] text-sm font-sans tracking-wider">
            © 2026 Imalsha &amp; Isuru's Wedding
          </p>
          <p className="text-[#D4AF37] text-xs mt-2 font-sans tracking-wider">
            Want a beautiful wedding website like this? Create yours with <a target="_blank" rel="noreferrer" className="text-white hover:text-[#D4AF37] underline" href="https://wa.me/94707819074">invitemint</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
