import React, { useState } from 'react';
import { submitToGoogleSheet } from '../googleSheets';
import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export const RSVPForm: React.FC = () => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRSVP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!attending) {
      setError('Please let us know if you can attend');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    try {
      const status = attending === 'yes' ? 'Accepts' : 'Declines';
      await submitToGoogleSheet('rsvp', { 
        name, 
        status, 
        message,
        submittedAt: new Date().toISOString() 
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="w-full py-12 bg-zinc-900">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-display text-[#D4AF37]" style={{ fontFamily: "'Great Vibes', cursive" }}>
            RSVP
          </h2>
          <div className="w-32 h-1 bg-red-900 rounded-full"></div>
          <p className="text-lg md:text-xl text-white max-w-3xl font-sans text-center sm:text-justify mt-6 tracking-wide">
            Where forever begins, and we’d love for you to be there. Please let us know if you'll be joining us on our special day.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-black p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#D4AF37]/50">
            {submitted ? (
              <div className="text-center py-10">
                <p className="text-3xl font-display text-[#D4AF37] mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>Thank you!</p>
                <p className="text-lg font-sans text-gray-300">Your response has been lovingly recorded.</p>
              </div>
            ) : (
              <form onSubmit={handleRSVP} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#D4AF37] font-medium mb-2 font-sans tracking-wide">Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Eg: Namal Perera" 
                      className="w-full bg-zinc-900/50 text-white border border-[#D4AF37]/50 rounded-lg px-4 py-3 font-sans focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                      name="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[#D4AF37] font-medium mb-2 font-sans tracking-wide">Will you attend?</label>
                    <div className="relative">
                      <select 
                        name="attending" 
                        required 
                        value={attending}
                        onChange={(e) => setAttending(e.target.value)}
                        className="w-full bg-zinc-900/50 text-white border border-[#D4AF37]/50 rounded-lg px-4 py-3 font-sans appearance-none pr-10 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                        disabled={isSubmitting}
                      >
                        <option value="" disabled>Select</option>
                        <option value="yes">Yes, I'll be there</option>
                        <option value="no">Sorry, I can't make it</option>
                      </select>
                      <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-[#D4AF37] pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[#D4AF37] font-medium mb-2 font-sans tracking-wide">Message (Optional)</label>
                  <textarea 
                    name="message" 
                    maxLength={250} 
                    rows={4} 
                    className="w-full bg-zinc-900/50 text-white border border-[#D4AF37]/50 rounded-lg px-4 py-3 font-sans focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all placeholder:text-gray-600 resize-none" 
                    placeholder="Leave the couple a beautiful note!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                {error && <p className="text-red-400 text-sm font-sans text-center">{error}</p>}

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full bg-red-900 hover:bg-red-800 text-white rounded-xl py-4 text-lg font-medium shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-sans tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send RSVP with Love'}
                  </button>
                </div>
                
                <div className="pt-2">
                  <a 
                    href="https://www.google.com/calendar/render?action=TEMPLATE&text=Imalsha+%26+Isuru+Wedding&dates=20260921T114500Z/20260921T183000Z&details=We+are+excited+to+celebrate+with+you!&location=Jetwing+Lighthouse,+Galle&sf=true&output=xml" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full inline-flex justify-center items-center bg-black hover:bg-zinc-900 text-[#D4AF37] rounded-xl py-4 text-lg font-medium shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-xl transition-all duration-300 font-sans border border-[#D4AF37]/50 tracking-widest uppercase hover:-translate-y-1"
                  >
                    <Calendar className="mr-3 h-5 w-5" />
                    Add to Google Calendar
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
