import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import FractalTree from '../FractalTree';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-8 md:py-12">
      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-8">
        {/* Fractal Tree */}
        <div className="flex-shrink-0">
          <FractalTree />
        </div>

        {/* Name and Location */}
        <div className="flex flex-col items-center md:items-start">
          {/* Location */}
          <div className="flex items-center gap-2 text-white text-sm font-light mb-4">
            <MapPin size={16} />
            <span>toronto, ontario</span>
          </div>

          {/* Name with Images */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <img 
              src="/lovable-uploads/7c88d979-5fee-4173-b5e0-d5da3ace061a.png" 
              alt="eshaan oozher" 
              className="h-12 md:h-16 lg:h-20"
            />
            <img 
              src="/lovable-uploads/44c64afb-c5c0-4b67-b162-708ab90ecc54.png" 
              alt="kapooswalla" 
              className="h-12 md:h-16 lg:h-20"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl space-y-4 text-base md:text-lg text-white font-light leading-relaxed mb-12 text-center">
        <p>hi, i'm eshaan. i try and build cool stuff!</p>
        <p>
          say hi if you're in tech, you're in toronto, you just love my work, or if you're curious about collaborating, 
          brainstorming new ideas, or simply connecting over coffee.
        </p>
      </div>

      {/* Say Hi Button */}
      <div className="mb-12 flex items-center justify-center">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=eshaank@my.yorku.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 rounded font-medium"
        >
          say hi <span style={{ color: 'red' }}>👋</span>
        </a>
      </div>

      {/* Dancing Down Arrow */}
      <div className="flex justify-center">
        <ChevronDown 
          size={32} 
          className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
        />
      </div>
    </section>
  );
};

export default HeroSection;
