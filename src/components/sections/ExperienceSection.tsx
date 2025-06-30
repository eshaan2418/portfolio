
import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';

interface ExperienceEntry {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
  isActive?: boolean;
}

const experienceData: ExperienceEntry[] = [
  {
    id: '1',
    company: 'stealth biotech startup',
    location: 'remote',
    role: 'machine learning software engineering intern',
    period: 'may 2025 – present',
    description: [
      'led pytorch-based ml model development for ibm-funded drug discovery, improving moa classification accuracy by 15%, reducing analysis time by 25%, saving $5k+.',
      'applied weakly/self-supervised learning to cut labeling costs by 40% and reduce data footprint by 60%.',
      'built transfer learning pipelines using docker, improving benchmark performance by 12%, reducing training time by 45%, saving $3k.',
      'integrated unsupervised learning techniques with senior researchers, boosting candidate selection by 30%.'
    ],
    isActive: true
  },
  {
    id: '2',
    company: 'yu blueprint',
    location: 'toronto',
    role: 'software developer intern',
    period: 'may 2025 – present',
    description: [
      'developed open source projects with non-profits.',
      'improved accessibility and ux on web apps.',
      'contributed to feature development, bug fixes, and agile code reviews.'
    ],
    isActive: true
  },
  {
    id: '3',
    company: 'itreb canada',
    location: 'toronto, hybrid',
    role: 'full stack developer intern',
    period: 'may 2024 – december 2024',
    description: [
      'developed spring boot microservices and rest apis with tdd.',
      'implemented api rate limiting and security.',
      'revamped frontend/backend of iicanada.org, reducing data retrieval time by 20% for 30,000+ users.',
      'improved ux by reducing user clicks by 16% and integrating react query for efficient data fetching.'
    ]
  },
  {
    id: '4',
    company: 'prince aly khan hospital',
    location: 'remote',
    role: 'software engineer intern',
    period: 'january – august 2024',
    description: [
      'built secure, scalable healthcare workflow solutions.',
      'developed responsive, user-friendly react interfaces.',
      'ensured data privacy and compliance across remote teams.'
    ]
  },
  {
    id: '5',
    company: 'aiesec',
    location: 'remote',
    role: 'vp of tech',
    period: '2023 – 2024',
    description: [
      'ran cross-cultural exchange and leadership development initiatives.',
      'helped with web development and organized events.'
    ]
  }
];

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    experienceData.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="min-h-screen px-4 md:px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-red-500 mb-4">
            professional experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-red-400 to-red-600"></div>

          {/* Experience Entries */}
          <div className="space-y-12">
            {experienceData.map((entry) => (
              <div
                key={entry.id}
                id={entry.id}
                className={`relative transition-all duration-700 ${
                  visibleItems.has(entry.id) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Timeline Node */}
                <div className={`absolute left-2 w-4 h-4 rounded-full transform -translate-x-2 ${
                  entry.isActive 
                    ? 'bg-red-500 shadow-lg shadow-red-500/50 animate-pulse' 
                    : 'bg-red-600'
                }`}>
                  <div className="absolute inset-1 bg-black rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="ml-12">
                  <div className="bg-black/60 backdrop-blur-sm border border-red-900/30 rounded-lg p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2 text-red-500">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{entry.period}</span>
                        {entry.isActive && (
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                            current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {entry.role}
                      </h3>
                      <div className="flex items-center gap-2 text-red-400">
                        <span className="font-medium">{entry.company}</span>
                        <span className="text-white/60">•</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span className="text-sm">{entry.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      {entry.description.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-sm leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Down Arrow */}
      <div className="flex justify-center mt-16">
        <ChevronDown 
          size={32} 
          className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
