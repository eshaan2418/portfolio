
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center">
      <div className="max-w-4xl font-inter">
        <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12">about / fun stuff</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
          {/* Technical Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-light text-red-500 mb-6">technical</h3>
            <ul className="space-y-4 text-white font-light leading-relaxed">
              <li>
                i'm working on my own <span className="text-red-500">startup</span> – something cool coming out this <span className="text-red-500">may</span> ;)
              </li>
              <li>
                i'm individually authoring an <span className="text-red-500">ml paper</span> on helping people with glasses see their phones/laptops without glasses.
              </li>
              <li>
                i'm always down for <span className="text-red-500">hackathons</span>.
              </li>
            </ul>
          </div>

          {/* Fun Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-light text-red-500 mb-6">fun</h3>
            <ul className="space-y-4 text-white font-light leading-relaxed">
              <li>
                i'm obsessed with the <span className="text-red-500">moon</span>.
              </li>
              <li>
                i'm currently catching up with <span className="text-red-500">modern family</span>.
              </li>
              <li>
                unpopular opinion: <span className="text-red-500">sunrises</span> {'>'}  sunsets (i said it).
              </li>
              <li>
                i have an unhealthy obsession with <span className="text-red-500">math</span> (especially calculus).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
