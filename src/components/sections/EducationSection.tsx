
import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Calendar } from 'lucide-react';

const EducationSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const yorkuImages = [
    '/lovable-uploads/0fe83b93-4e80-48c0-80da-7ec9841da45b.png',
    '/lovable-uploads/bfecc39f-d006-49fd-92db-900bcc300ed2.png',
    '/lovable-uploads/dcceb3f1-c826-4fd5-8c2c-a05b90117756.png',
    '/lovable-uploads/e7675e74-02e0-43cb-9244-66b4112e60d4.png',
    '/lovable-uploads/169ced2e-3e01-4351-9c17-d1421be4f91f.png'
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % yorkuImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [yorkuImages.length]);

  return (
    <section id="education" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20">
      <div className="max-w-4xl w-full font-inter">
        <h2 className="text-3xl md:text-4xl font-light text-red-500 mb-8 md:mb-12 text-center">education</h2>
        
        {/* York University Photo Gallery */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-2xl h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            {yorkuImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`York University Campus ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {/* Image indicator dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {yorkuImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex ? 'bg-red-500' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Education Details */}
        <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 md:p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-red-500 mb-2">
              lassonde school of engineering, york university
            </h3>
            <p className="text-lg text-red-500 mb-3">
              bachelor of engineering in software engineering (co-op)
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4 text-red-500">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin size={16} />
                <span>toronto, ontario, canada</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Calendar size={16} />
                <span>expected graduation: april 2027</span>
              </div>
            </div>
            
            {/* Highlights */}
            <div className="mb-4">
              <h4 className="text-white font-medium mb-2">highlights:</h4>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-red-500/20 text-red-500 text-sm rounded-full">
                  tentanda via scholar
                </span>
                <span className="px-3 py-1 bg-red-500/20 text-red-500 text-sm rounded-full">
                  lassonde co-op program
                </span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h4 className="text-white font-medium mb-2">relevant coursework:</h4>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start text-sm">
                {[
                  'computer science',
                  'data structures and algorithms',
                  'databases',
                  'computer networks',
                  'computer organization',
                  'operating systems',
                  'object-oriented programming (oops)',
                  'software system design'
                ].map((course, index) => (
                  <span key={index} className="px-2 py-1 bg-red-500/20 text-red-500 rounded">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Programming Skills */}
        <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 md:p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-red-500 mb-6">
              programming skills
            </h3>
            
            {/* Languages */}
            <div className="mb-4">
              <h4 className="text-white font-medium mb-2">languages:</h4>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start text-sm">
                {[
                  'python', 'javascript/typescript', 'java', 'c/c++', 'sql', 'r', 'go', 'html', 'css', 'bash', 'assembly'
                ].map((language, index) => (
                  <span key={index} className="px-2 py-1 bg-red-500/20 text-red-500 rounded">
                    {language}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="mb-4">
              <h4 className="text-white font-medium mb-2">frameworks:</h4>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start text-sm">
                {[
                  'django', 'react', 'spring boot', 'angular', 'next.js', 'pytorch', 'scikit', 'numpy', 'opencv', 'node.js', 'graphql'
                ].map((framework, index) => (
                  <span key={index} className="px-2 py-1 bg-red-500/20 text-red-500 rounded">
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-white font-medium mb-2">tools:</h4>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start text-sm">
                {[
                  'git', 'docker', 'postman', 'jira/confluence', 'mongodb', 'postgresql', 'selenium', 'heroku', 'aws', 'gcp', 'kubernetes', 'google gemini ai api', 'kafka'
                ].map((tool, index) => (
                  <span key={index} className="px-2 py-1 bg-red-500/20 text-red-500 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Down Arrow */}
      <div className="flex justify-center mt-12">
        <ChevronDown 
          size={32} 
          className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
        />
      </div>
    </section>
  );
};

export default EducationSection;
